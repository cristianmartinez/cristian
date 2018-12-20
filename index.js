#! /usr/bin/env node

const boxen = require("boxen");
// chalk, but without chalk
const _c = require('util').inspect.colors;
Object.keys(_c).forEach(c =>global[c] = s =>`\x1b[${_c[c][0]}m${s}\x1b[${_c[c][1]}m`);

const lines = [
  bold("Cristian Martinez"),
  "Lead Developer @ viajala",
  "",
  bold("       Web: ") + blue("https://cristianmartinez.co"),
  bold("   Twitter: ") + blue("https://twitter.com/iscristianhere"),
  bold("    GitHub: ") + blue("https://github.com/cristianmartinez"),
  bold("  LinkedIn: ") + blue("https://www.linkedin.com/in/cristianmartinezs/")
];

const message = lines.join("\n");

const box = boxen(message, {
  borderColor: "blue",
  borderStyle: "round",
  margin: 1,
  padding: 1
});

process.stdout.write(box + "\n");
