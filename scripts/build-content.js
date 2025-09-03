// scripts/build-content.js
import fs from "node:fs";
import path from "node:path";
import { Octokit } from "@octokit/rest";

const REPO_OWNER = "bagrechajayesh";
const REPO_NAME  = "themosaic";
const BRANCH     = "main";
const REMOTE_DIR = "_data"; // if you later store content in the repo under this folder

const outDir   = path.resolve("src/data");
const publicDir = path.resolve("public/data");
fs.mkdirSync(outDir, { recursive: true });

const octokit = process.env.GITHUB_TOKEN || process.env.VITE_GITHUB_TOKEN
  ? new Octokit({ auth: process.env.GITHUB_TOKEN || process.env.VITE_GITHUB_TOKEN })
  : null;

function writeJSON(fileName, dataObj) {
  const target = path.join(outDir, fileName);
  fs.writeFileSync(target, JSON.stringify(dataObj, null, 2) + "\n", "utf8");
  console.log(`✅ wrote ${fileName}`);
}

function readLocalJSON(fileName) {
  const p = path.join(publicDir, fileName);
  if (!fs.existsSync(p)) return null;
  try {
    return JSON.parse(fs.readFileSync(p, "utf8"));
  } catch (e) {
    throw new Error(`Local JSON invalid: ${fileName} → ${e.message}`);
  }
}

async function fetchRemoteJSON(fileName) {
  if (!octokit) return null;
  try {
    const { data: file } = await octokit.repos.getContent({
      owner: REPO_OWNER,
      repo: REPO_NAME,
      path: `${REMOTE_DIR}/${fileName}`,
      ref: BRANCH
    });
    const buf = Buffer.from(file.content, file.encoding || "base64");
    return JSON.parse(buf.toString("utf8"));
  } catch (e) {
    console.warn(`⚠️ Remote fetch failed for ${fileName}: ${e.message}`);
    return null;
  }
}

// Minimal fallbacks in case neither remote nor local exists
const FALLBACKS = {
  "artists.json": [],
  "about.json":   { company: {}, founder: {} },
  "services.json": {},
  "contact.json": {},
  "growth.json":  {}
};

async function generate() {
  console.log("🚀 Starting static content generation...");
  const files = ["artists.json", "about.json", "services.json", "contact.json", "growth.json"];

  for (const f of files) {
    const remote = await fetchRemoteJSON(f);
    const local  = readLocalJSON(f);
    const data   = remote ?? local ?? FALLBACKS[f];
    writeJSON(f, data);
  }

  // Optional sanity logs
  try {
    const artists = JSON.parse(fs.readFileSync(path.join(outDir, "artists.json"), "utf8"));
    console.log(`📊 Generated data for ${Array.isArray(artists) ? artists.length : 0} artists`);
  } catch {}
  console.log("✅ Static content generation completed!");
}

if (import.meta.url === `file://${process.argv[1]}`) {
  generate().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}

export default generate;
