import fs from "fs";
import path from "path";
import { fileURLToPath } from "node:url";
import autoprefixer from "autoprefixer";
import postcss from "postcss";
import tailwind from "tailwindcss";
import tailwindConfig from "../tailwind.config.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pkgRoot = path.join(__dirname, "..");
const inputPath = path.join(pkgRoot, "src", "styles.css");
const outPath = path.join(pkgRoot, "dist", "styles.css");

const input = fs.readFileSync(inputPath, "utf8");

const result = await postcss([
  tailwind(tailwindConfig),
  autoprefixer(),
]).process(input, { from: inputPath });

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, result.css);
console.log(`Wrote ${outPath} (${result.css.length} bytes)`);
