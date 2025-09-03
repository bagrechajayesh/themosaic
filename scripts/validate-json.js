// scripts/validate-json.js
import fs from "node:fs";
import path from "node:path";

const base = path.resolve("src/data");
const files = ["artists.json", "about.json", "services.json", "contact.json", "growth.json"];

let ok = true;
for (const f of files) {
  const p = path.join(base, f);
  if (!fs.existsSync(p)) {
    console.error(`❌ Missing ${f} in src/data`);
    ok = false;
    continue;
  }
  try {
    JSON.parse(fs.readFileSync(p, "utf8"));
    console.log(`✅ ${f} valid`);
  } catch (e) {
    ok = false;
    console.error(`❌ ${f} invalid: ${e.message}`);
  }
}
if (!ok) process.exit(1);
