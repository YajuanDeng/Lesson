import { access, constants } from "node:fs";
import fs from "node:fs";
// const file = 'a.txt'

import minimist from 'minimist';

const argv = process.argv.splice(2);
const args = minimist(argv)

console.log(argv);
console.log(args);

const file = argv[0];

access(file, constants.F_OK, (err) => {
  console.log(`${file} ${err ? "does not exist" : "exist"}`);
});
