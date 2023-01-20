const express = require("express");
const app = express();
const port = 8000;
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get("/api/test", (req,res)=>{
    res.json({message:"hey it's me!"})
})

app.get("/api/repeat/:num", (req,res)=>{
    var message = req.params.num;
    if(isNaN(req.params.num)){
        message = "please include a number";
    }
    res.json({
        phrase: message
    })
})

app.post("/api/repeat", (req,res)=>{
    console.log(req.body.secret);
    res.json({
        repeated: req.body
    })
})

app.listen(port, ()=>console.log(`currently running on port ${port}`));