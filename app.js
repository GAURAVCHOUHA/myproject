const express=require("express");
const app=express();
const cors=require("cors");
const allroutes=require("./config/allroutes");
const upload=require("express-fileupload");
const root = require("path").join(__dirname, "build");


app.use(express.json());

app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname+"/assets"));
app.use(cors());
app.use(express.static(root));

app.use(upload());
app.use(allroutes);

app.get("*", (req, res)=>{
    res.sendFile("index.html", {root});
})

const port=process.env.PORT||8080;
app.listen(port,()=>{
    console.log("server is run with port",port);
})
//9uPg6s1b8V9pNHQd


