/**
 * Dynamic JSON imports (simple pattern):
 *   const data = await import('./file.json');
 * ->
 *   const { default: dataRaw } = await import('./file.json?raw');
 *   const data = JSON.parse(dataRaw);
 *
 * Notes:
 * - Handles only direct VariableDeclarator with AwaitExpression(ImportExpression).
 * - If your code does `const mod = await import(...); const data = mod.default;`
 *   this codemod won't catch it — tweak manually or extend as needed.
 */
export default function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  root.find(j.VariableDeclarator, {
    init: {
      type: 'AwaitExpression',
      argument: { type: 'ImportExpression' }
    }
  }).forEach(path => {
    const init = path.value.init;
    const importArg = init.argument.source;
    if (!importArg || importArg.type !== 'Literal') return;
    const src = importArg.value;
    if (!/\.json$/.test(src)) return;

    const localName = path.value.id.name;
    const rawName = `${localName}Raw`;

    // Replace: const data = await import('./file.json');
    // With:    const { default: dataRaw } = await import('./file.json?raw');
    importArg.value = src.endsWith('?raw') ? src : `${src}?raw`;
    path.value.id = j.objectPattern([
      j.property.from({
        kind: 'init',
        key: j.identifier('default'),
        value: j.identifier(rawName),
        shorthand: false
      })
    ]);

    // And insert "const data = JSON.parse(dataRaw);" after it
    const varDecl = j.variableDeclaration('const', [
      j.variableDeclarator(
        j.identifier(localName),
        j.callExpression(
          j.memberExpression(j.identifier('JSON'), j.identifier('parse')),
          [j.identifier(rawName)]
        )
      )
    ]);

    // Find the enclosing statement and insert after
    const parentStmt = path.parent.parent.value; // VariableDeclaration
    const stmtCollection = root.find(j.VariableDeclaration).filter(p => p.value === parentStmt);
    stmtCollection.insertAfter(varDecl);
  });

  return root.toSource({ quote: 'single' });
}
