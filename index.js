#! /usr/bin/env node

const boxen = require("boxen");
// chalk, but without chalk
const _c = require('util').inspect.colors;
Object.keys(_c).forEach(c =>global[c] = s =>`\x1b[${_c[c][0]}m${s}\x1b[${_c[c][1]}m`);

const lines = [
  bold("Darren Jennings"),
  "Tech Lead at Kong",
  "",
  bold("       Web: ") + blue("https://darrenjennings.github.io"),
  bold("   Twitter: ") + blue("https://twitter.com/darrenjennings"),
  bold("    GitHub: ") + blue("https://github.com/darrenjennings"),
  bold("  LinkedIn: ") + blue("https://www.linkedin.com/in/darren-jennings")
];

const message = lines.join("\n");

const box = boxen(message, {
  borderColor: "blue",
  borderStyle: "round",
  margin: 1,
  padding: 1
});

process.stdout.write(box + "\n");
