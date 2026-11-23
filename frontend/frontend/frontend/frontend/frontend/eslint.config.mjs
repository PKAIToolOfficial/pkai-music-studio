import { defineConfig, globalIgnores } from "eslint/config";

import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    rules: {
      "no-unused-vars": "off",
      "no-console": [
        "warn",
        {
          allow: ["warn", "error"]
        }
      ],
      "no-debugger": "error",
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-constant-condition": "error"
    }
  },

  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "node_modules/**",
    "next-env.d.ts",
    "coverage/**"
  ])
]);

export default eslintConfig;
