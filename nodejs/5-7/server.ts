import {app, ip, port } from "./src/utils" 
import bodyParser from "body-parser"


app.get('/',(req,res) => {
    res.send("hello world")
})

app.post('/', bodyParser.json(), (req, res) => {
    console.log(req.query);
    console.log(req.body);

    res.send("ok")

})


app.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`);
    console.log(`http://${ip}:${port}`);
})