import { access, constants } from "node:fs";
import fs from "node:fs";
// const file = 'a.txt'

import minimist from "minimist";

const argv = process.argv.splice(2);
const args = minimist(argv);

console.log(argv);
console.log(args);

const filename = args["filename"];
const checkExist = args["e"];
const checkReadable = args["r"];
const checkWritable = args["w"];
const checkAll = args["A"];

const flagList = {
  existFlag: true,
  readFlag: true,
  writeFlag: true,
};

// let existFlag = true
// let readFlag = true
// let writeFlag = true

function singleline(params) {
  if (params) {
    params = !params;
  }
}

function isExist() {
  singleline(existFlag);
  fs.access(filename, constants.F_OK, (err) => {
    console.log(`${filename} ${err ? "does not exist" : "exist"}`);
  });
}
function isReadable() {
  singleline(readFlag);
  fs.access(filename, constants.R_OK, (err) => {
    console.log(`${filename} ${err ? "is not readable" : "readable"}`);
  });
}
function isWritable() {
  singleline(writeFlag);
  fs.access(filename, constants.W_OK, (err) => {
    console.log(`${filename} ${err ? "is not writable" : "writable"}`);
  });
}

if (!filename) {
  console.log("Need filename");
  console.log("Format: --filename xxx");
  process.exit();
}
if (checkExist) {
  isExist();
}
if (checkReadable) {
  isReadable();
}
if (checkWritable) {
  isWritable();
}
if (checkAll) {
  isExist();
  isReadable();
  isWritable();
}
