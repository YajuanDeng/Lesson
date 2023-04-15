import express from "express";
import IP from "ip"
import { program } from "commander";
import * as dotenv from "dotenv"
dotenv.config()


const app: express.Application = express()

const ip: String = IP.address()

const port: Number = getPort()

function getPort(): Number {
    program.option("-p, --port <number>", "set port")
    program.parse(process.argv)

    const options = program.opts()
    return +options.port || +process.env.PORT
}

export {app, ip, port}
