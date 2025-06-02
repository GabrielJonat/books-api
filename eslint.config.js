import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: globals.browser
    }
  },
  {
    files: ["config/**/*.js", "app.js", "server.js"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser // Include browser if relevant for your Node.js files
      }
    }
  },
  // Add a specific configuration for test files
  {
    files: ["test/**/*.js"], // Target all files in the 'test' directory and its subdirectories
    languageOptions: {
      globals: {
        ...globals.mocha, // Adds Mocha globals (describe, it, beforeEach, etc.)
        // If you're using Chai for assertions and it adds globals, include them here too
        // For 'global' variable, it's typically part of Node.js environment,
        // so if your tests run in Node.js, including 'globals.node' is also good.
        ...globals.node,
        // If your tests also use browser-like globals (unlikely in node tests, but possible),
        // ...globals.browser
      }
    }
  }
]);