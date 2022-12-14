
"use strict";

const { build } = require("./build");

async function start() {
  const app = build({ logger: true });
  try {
    await app.listen(8080);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

if (require.main === module) {
  start();
}