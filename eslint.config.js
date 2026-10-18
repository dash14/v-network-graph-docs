import tsParser from "@typescript-eslint/parser"
import skipFormatting from "eslint-config-prettier/flat"
import pluginOxlint from "eslint-plugin-oxlint"
import pluginVue from "eslint-plugin-vue"

// Oxlint cannot parse Vue templates yet, so ESLint lints only .vue files and
// leaves every rule Oxlint covers to Oxlint, and formatting to Oxfmt.
export default [
  { ignores: ["docs/.vitepress/dist/**", "docs/.vitepress/cache/**"] },
  ...pluginVue.configs["flat/recommended"].map(config => ({
    ...config,
    files: ["**/*.vue"],
  })),
  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: tsParser,
        sourceType: "module",
      },
    },
    rules: {
      "vue/attribute-hyphenation": ["warn", "always", { ignore: ["custom-prop"] }],
    },
  },
  {
    // Examples shown to readers favor short code: config panels edit the configs they
    // receive, and some render <component is="style"> and v-html.
    files: ["docs/.vitepress/components/**/*.vue"],
    rules: {
      "vue/multi-word-component-names": "off",
      "vue/no-mutating-props": "off",
      "vue/require-component-is": "off",
      "vue/no-v-html": "off",
      "vue/no-v-text-v-html-on-component": "off",
    },
  },
  ...pluginOxlint.buildFromOxlintConfigFile(".oxlintrc.json"),
  skipFormatting,
]
