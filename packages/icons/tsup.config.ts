import { defineConfig } from 'tsup';

export default defineConfig({
    entry: {
        index: 'src/index.ts',
        web: 'src/web/index.ts'
    },
    format: ['cjs', 'esm'],
    dts: {
        compilerOptions: {
            ignoreDeprecations: '6.0',
            jsx: 'react-jsx'
        }
    },
    sourcemap: true,
    clean: !process.argv.includes('--watch'),
    outDir: 'dist',
    target: 'es2018',
    external: ['react'],
    outExtension({ format }) {
        return format === 'esm' ? { js: '.mjs' } : { js: '.cjs' };
    }
});
