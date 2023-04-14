import {app,ip, port,} from "./utils.js"
import bodyParser from "body-parser";
import { response } from "express";
import { promisify } from "util";

app.get('/', (req,res) => {
    res.send("hello world")
})
const url = "http://localhost:2345";

app.post('/',bodyParser.json(),(req,res) => {
    console.log(req.query);
    console.log(req.body);
    res.status(200).end()

})

app.post('/:para', async(req,res) => {
    
    try {
      const info = await fetch(`${url}/${req.params.para}`).then((response) =>
        response.json()
      );
      res.send(info);
    } catch (error) {
      console.error(error);
      res.status(500).end();
    } 
})

app.post("/:para/:id", async (req, res) => {
    try {
        const info = await fetch(`${url}/${req.params.para}/${req.params.id}`).then(response => response.json())
        res.send(info)
        
    } catch (error) {
        console.error(error);
        res.status(500).end()
    }
});

app.listen(port,() => {
    console.log(`http://127.0.0.1:${port}`);
    console.log(`http://${ip}:${port}`);
})