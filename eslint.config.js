import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    ...eslintPluginAstro.configs.recommended,
    {
        rules: {
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-unused-vars": "warn",
            "prefer-const": "error",
            "no-var": "error",
            "no-undef": "off"
        }
    },
    {
        ignores: [
            "dist/",
            ".astro/",
            "node_modules/",
            "public/"
        ]
    }
);