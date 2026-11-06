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
      // Intentional: internal links are plain <a> (full page loads) so consent-gated
      // analytics/ad tags never observe in-app navigation to treatment pages.
      "@next/next/no-html-link-for-pages": "off",
      // Became active with react-hooks v7; kept visible as a follow-up task.
      "react-hooks/set-state-in-effect": "warn",
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
