import express from "express";
import IP from "ip";
import { program } from "commander";
// import bodyParser from "body-parser";
// import { promisify } from "util";

const app = express();
const ip = IP.address()
const port = getPort()
// const pFetch = promisify(fetch)

// app.use(bodyParser.json())

function getPort() {
    program.option("-p, --port <number>", "set port")
    program.parse(process.argv)
    const options = program.opts()
    return +options.port || 9390

}
export {app, ip, port}
