import fs from 'fs';
import path from 'path';
import postcss from 'postcss';
import tailwind from 'tailwindcss';
import { fileURLToPath } from 'url';
import autoprefixer from 'autoprefixer';
import postcssImport from 'postcss-import';
import tailwindConfig from '../tailwind.config';
import { buildThemeCss } from '../tailwind-theme';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pkgRoot = path.join(__dirname, '..');
const inputPath = path.join(pkgRoot, 'src', 'styles.css');
const outPath = path.join(pkgRoot, 'dist', 'styles.css');

const themeCss = buildThemeCss();
const sourceCss = fs.readFileSync(inputPath, 'utf8');

/*
 * Process `src/styles.css` on disk so `postcss-import` can resolve
 * component `@import`s (e.g. `./atoms/Tooltip/Tooltip.css`). Theme variables
 * are prepended to the final bundle after PostCSS runs.
 */
const result = await postcss([
    postcssImport(),
    tailwind(tailwindConfig),
    autoprefixer()
]).process(sourceCss, { from: inputPath });

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, `${themeCss}\n${result.css}`);
console.log(`Wrote ${outPath} (${result.css.length} bytes)`);
