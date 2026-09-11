import obsidian from 'eslint-plugin-obsidianmd';
import tseslint from 'typescript-eslint';

// Mirrors the community directory automated review so findings can be
// reproduced (and cleared) locally before every release.
export default tseslint.config(
  tseslint.configs.recommendedTypeChecked,
  obsidian.configs.recommended,
  {
    // Brand names ("MemVault") and ALL-CAPS priorities ("MUST") are legitimate
    // UI text; the rule keeps flagging them. The community directory review
    // does not gate on this rule.
    rules: { 'obsidianmd/ui/sentence-case': 'off' },
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
);
