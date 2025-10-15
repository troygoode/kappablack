const fs = require("node:fs");
const { parse } = require("smol-toml");

const files = ["skills", "stats", "weapons"];

for (const file of files) {
  const doc = fs.readFileSync(`${__dirname}/../src/data/${file}.toml`, "utf-8");
  const parsed = parse(doc);

  fs.writeFileSync(
    `${__dirname}/../src/data/${file}.json`,
    JSON.stringify(parsed, null, 2)
  );
}
