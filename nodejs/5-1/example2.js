import { access, constants } from "node:fs";
import fs from "node:fs";
// const file = 'a.txt'

import minimist from 'minimist';

const argv = process.argv.splice(2);
const args = minimist(argv)

console.log(argv);
console.log(args);

const filename = args['filename'];
const checkExist = args['e']
const checkReadable = args['r']
const checkWritable = args['w']
const checkAll = args['A']

let existFlag = true
let readFlag = true
let writeFlag = true


function isExist() {
  if(existFlag) {
    fs.access(filename, constants.F_OK, (err) => {
      console.log(`${filename} ${err ? "does not exist" : "exist"}`);
    });
    existFlag = !existFlag
  }
  
}
function isReadable() {
  if(readFlag) {
    fs.access(filename, constants.R_OK, (err) => {
      console.log(`${filename} ${err ? "is not readable" : "readable"}`);
    });
    readFlag = !readFlag
  }
}
function isWritable() {
  if(writeFlag) {
    fs.access(filename, constants.W_OK, (err) => {
    console.log(`${filename} ${err ? "is not writable" : "writable"}`);
    });
    writeFlag = !writeFlag
  }
}


if(!filename) {
  console.log("Need filename");
  console.log("Format: --filename xxx");
  process.exit()
}

if (checkExist) {
   isExist()
}
 
if (checkReadable) {
  isReadable()
}

if (checkWritable) {
  isWritable()
}

if(checkAll) {
  isExist()
  isReadable()
  isWritable()
}