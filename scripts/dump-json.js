// scripts/dump-json.js
import fs from "node:fs";
import path from "node:path";

const p = path.resolve("src/data/artists.json");
if (fs.existsSync(p)) {
  const content = fs.readFileSync(p, "utf8");
  const lines = content.split(/\r?\n/).slice(0, 60).join("\n");
  console.log("——— BEGIN src/data/artists.json (first 60 lines) ———");
  console.log(lines);
  console.log("——— END src/data/artists.json ———");
} else {
  console.log("artists.json not found at src/data");
}
