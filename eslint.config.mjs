import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

// ESLint 9 flat config (replaces .eslintrc.json; `next lint` was removed in Next.js 16).
const eslintConfig = defineConfig([
  ...nextVitals,
  {
    // Same rule overrides as the previous .eslintrc.json.
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "off",
      // Rules that became active/new with eslint-config-next 16 + react-hooks v7.
      // Kept visible as warnings: fixing them changes navigation/analytics or
      // component behaviour, so they are tracked as a separate follow-up task.
      "@next/next/no-html-link-for-pages": "warn",
      "react-hooks/set-state-in-effect": "warn",
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
