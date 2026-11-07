// Release guard for the legal pages (runs automatically before `npm run build`).
// While privacy-release.json is approved:false nothing is checked here (next.config.js already blocks
// Production builds). Once approved:true, the build fails if the Privacy Policy or Terms of Use still
// contain unresolved <Pending>/<Proposed> markers or have no approved "last updated" date.
import fs from "node:fs";
import path from "node:path";

const root = path.dirname(path.dirname(new URL(import.meta.url).pathname));
const release = JSON.parse(fs.readFileSync(path.join(root, "privacy-release.json"), "utf8"));
if (release.approved !== true) {
  console.log("[legal-release] privacy-release.json approved=false: draft legal pages allowed (Preview only).");
  process.exit(0);
}
const files = ["app/privacy-policy/page.tsx", "app/privacy-policy/content.tsx", "app/terms/page.tsx", "app/terms/content.tsx"];
const problems = [];
for (const f of files) {
  const src = fs.readFileSync(path.join(root, f), "utf8");
  const markers = (src.match(/<(Pending|Proposed)\b/g) || []).length;
  if (markers) problems.push(`${f}: ${markers} unresolved <Pending>/<Proposed> marker(s)`);
  if (/lastUpdated=\{null\}/.test(src)) problems.push(`${f}: lastUpdated is not set`);
}
if (problems.length) {
  console.error("[legal-release] privacy-release.json is approved, but the legal pages are not final:\n  " + problems.join("\n  "));
  process.exit(1);
}
console.log("[legal-release] legal pages contain no draft markers.");
