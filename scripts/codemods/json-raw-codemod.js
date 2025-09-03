/**
 * Static JSON imports:
 *   import data from './file.json';
 * -> 
 *   import dataRaw from './file.json?raw';
 *   const data = JSON.parse(dataRaw);
 */
export default function transformer(file, api) {
  const j = api.jscodeshift;
  const root = j(file.source);

  root.find(j.ImportDeclaration).forEach(path => {
    const src = path.value.source.value;
    if (!/\.json$/.test(src)) return;

    // only handle default imports: import foo from './x.json'
    const def = path.value.specifiers.find(s => s.type === 'ImportDefaultSpecifier');
    if (!def) return;

    const localName = def.local.name;
    const rawName = `${localName}Raw`;

    // rename imported binding
    def.local.name = rawName;

    // append ?raw to source once
    if (!src.endsWith('?raw')) {
      path.value.source.value = `${src}?raw`;
    }

    // insert "const <local> = JSON.parse(<local>Raw);" after the import
    const varDecl = j.variableDeclaration('const', [
      j.variableDeclarator(
        j.identifier(localName),
        j.callExpression(
          j.memberExpression(j.identifier('JSON'), j.identifier('parse')),
          [j.identifier(rawName)]
        )
      )
    ]);

    j(path).insertAfter(varDecl);
  });

  return root.toSource({ quote: 'single' });
}
