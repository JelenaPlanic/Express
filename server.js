let express = require("express");
let data = require("./data.json"); // u array objekata

let server = express();


server.use(express.static(__dirname + "/public"));
 server.use(express.json());




server.get("/questions", (req, res)=>{
    console.log(req.query);

    let {category} = req.query;

    res.send(data.filter(q => q.category === category)); // parsirace u JSON
})

server.get("/questions/:category", (req, res)=>{

    let {category} = req.params;
    let score = parseInt(category);
    console.log(score);

    res.send(data.filter(q => q.points <= score));
})

server.post("/questions/:category", (req, res)=>{

     console.log(req.body);
    let {category} = req.params;
    let score = parseInt(category);

    res.send(data.filter(q => q.points <= score));
})

server.listen(3000, ()=>{
    console.log("Server running on port 3000");
})