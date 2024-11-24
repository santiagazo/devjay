import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import eslintPluginImport from "eslint-plugin-import";
import { resolve } from "path";

export default [
  // Apply configurations to specific files
  { files: ["**/*.{js,mjs,cjs,jsx}"] },

  // Set global language options
  { languageOptions: { globals: globals.browser } },

  // Add base configurations
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,

  // Custom plugin and rule configurations
  {
    plugins: {
      import: eslintPluginImport,
    },
    settings: {
      // Add alias resolver for '@'
      "import/resolver": {
        alias: {
          map: [["@", resolve("./src")]], // Map '@' to 'src'
          extensions: [".js", ".jsx", ".ts", ".tsx"], // Supported file extensions
        },
      },
    },
    rules: {
      "no-undef": "error", // Flag missing imports
      "import/no-unresolved": "error", // Flag unresolved imports
      "react/react-in-jsx-scope": "off", // Disable React in JSX scope for React 17+
    },
  },
];
