var express=require("express");
var app=express();
app.use(express.json())
app.listen(3000);
app.get("/home" , (req,res)=>{
    res.sendFile("index.html",{root:__dirname});
})
app.post("/contact" , (req,res)=>{
    console.log(req.body);
})
