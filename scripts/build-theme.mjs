import { readdir, unlink, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const require = createRequire(import.meta.url);
const { variants } = require("./theme-variants.cjs");
const themesDir = path.join(rootDir, "themes");

async function buildTheme(variant) {
  const outputPath = path.join(themesDir, variant.fileName);
  const output = `${JSON.stringify(variant.theme, null, 2)}\n`;

  await writeFile(outputPath, output, "utf8");
  console.log(`Built theme JSON: ${path.relative(rootDir, outputPath)}`);
}

async function buildAllThemes() {
  const files = await readdir(themesDir);
  const expectedFiles = new Set(variants.map((variant) => variant.fileName));
  const staleJsonFiles = files.filter((fileName) => fileName.endsWith("-color-theme.json") && !expectedFiles.has(fileName));

  await Promise.all(staleJsonFiles.map((fileName) => unlink(path.join(themesDir, fileName))));
  await Promise.all(variants.map((variant) => buildTheme(variant)));
}

buildAllThemes().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});