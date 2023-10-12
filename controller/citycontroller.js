const routes=require("express").Router();
const city=require("../models/city");
routes.get("/",async(req,res)=>{
    let result=await city.find();
    res.send(result);
})
routes.get("/state",async(req,res)=>{
    let result=await city.distinct("state");
    res.send(result);
})
routes.get("/state/:a",async(req,res)=>{
    let b=req.params.a;
    let result=await city.find({state:b});
    res.send(result);
})
module.exports=routes;