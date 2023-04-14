import express from "express";
import { Command } from "commander";
import ip from "ip";
import cors from "cors";
import { fileURLToPath } from "node:url";
import path from "node:path";
import fs from "node:fs";
import { promisify } from "node:util";

const address = ip.address();

// Command
const program = new Command();
program.option("-p --port [value]", "port number");
program.parse(process.argv);
const option = program.opts();
// const port = option.port ? option.port :9090
const port = option.port || 9290;

const app = express();
// 创建一个应用
app.use(cors({ origin: "*" }));
// app设置跨域
app.get("/", (req, res) => {
    // res.send({'name':"Claire"})
    fs.readFile("./data.json","utf-8",(err,data) => {
        if(err) {
            res.status(500).json({ err });
        }else {
            let content = JSON.parse(data)
            res.send(content)
        }
    })
});
app.get("/user", (req, res) => {
  // res.send({'name':"Claire"})
//   fs.readFile("./data.json", "utf-8", (err, data) => {
//     if (err) {
//       res.status(500).json({ err });
//     } else {
//       let content = JSON.parse(data);
//       res.send(content.user);
//     }
//   });
fetch(`http://localhost:23456/user`).then(response => {
    return response.json()
}).then(json => {
  res.send(json);
}).catch(err => {
    res.status(500).json({err})
})
});


app.get("/auth", (req, res) => {
  // res.send({'name':"Claire"})
//   fs.readFile("./data.json", "utf-8", (err, data) => {
//     if (err) {
//       res.status(500).json({ err });
//     } else {
//       let content = JSON.parse(data);
//       res.send(content.auth);
//     }
//   });
fetch(`http://localhost:23456/auth`).then(response => {
    return response.json()
}).then(json => {
  res.send(json);
}).catch(err => {
    res.status(500).json({err})
})
});




app.post("/", (req,res) =>{

})

app.listen(port, () => {
  console.log(`http://${address}:${port}`);
  console.log(`http://127.0.0.1:${port}`);
});
