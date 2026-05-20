import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import autoprefixer from "autoprefixer";
import postcss from "postcss";
import tailwind from "tailwindcss";
import tailwindConfig from "../tailwind.config";
import { buildThemeCss } from "../tailwind-theme";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pkgRoot = path.join(__dirname, "..");
const inputPath = path.join(pkgRoot, "src", "styles.css");
const outPath = path.join(pkgRoot, "dist", "styles.css");

const sourceCss = fs.readFileSync(inputPath, "utf8");
const themeCss = buildThemeCss();

/*
 * Prepend the generated CSS variable layer to the Tailwind directives.
 * Doing it in-memory keeps `src/styles.css` clean and avoids needing
 * `postcss-import`.
 */
const combinedInput = `${themeCss}\n${sourceCss}`;

const result = await postcss([
  tailwind(tailwindConfig),
  autoprefixer(),
]).process(combinedInput, { from: inputPath });

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, result.css);
console.log(`Wrote ${outPath} (${result.css.length} bytes)`);
