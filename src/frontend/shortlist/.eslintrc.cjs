/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  rules: {
    'vue/multi-word-component-names': 0,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
  overrides: [
    {
      files: ["cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}"],
      extends: ["plugin:cypress/recommended"],
    },
  ],
  ignorePatterns: ["cypress.config.js", "*.css"],
  "parserOptions": {
    "parser": "@babel/eslint-parser",
    "ecmaVersion": 2022,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true,
        "modules": true,
        "experimentalObjectRestSpread": true
    }
  },
  "env": {
    "browser": true,
    "es2021": true
},
};