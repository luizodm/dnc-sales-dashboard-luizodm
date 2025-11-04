// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";

export default defineConfig([
  // Ignorar pastas
  globalIgnores(["dist", "build", "node_modules"]),

  // Base JS para o projeto todo
  js.configs.recommended,

  // Regras do TS (esses presets já escopam para *.ts/*.tsx)
  ...tseslint.configs.recommended,

  // Hooks do React (aplicam nas extensões de React)
  reactHooks.configs["recommended-latest"],

  // Suporte ao Vite + React Refresh
  reactRefresh.configs.vite,

  // Opções globais de linguagem/ambiente
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.browser, ...globals.node },
    },
  },

  // ⬇️ Último: desabilita regras que conflitam com o Prettier
  eslintConfigPrettier,
]);