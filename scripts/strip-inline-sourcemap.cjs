// scripts/strip-inline-sourcemap.cjs
const fs = require("fs");
const path = require("path");

const filePath = path.join(
  __dirname,
  "..",
  "dist",
  "atticus_integrity_we_joxcdcjgtns_sr4pr6c4l",
  "index.js"
);

let code = fs.readFileSync(filePath, "utf8");
// Remove any inline sourceMappingURL=... line
code = code.replace(/\/\/# sourceMappingURL=[^\n]*\n?/g, "");
fs.writeFileSync(filePath, code, "utf8");
