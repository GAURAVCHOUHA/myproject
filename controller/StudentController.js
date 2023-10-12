const routes=require('express').Router();
const stu=require("../models/student");
routes.get("/",async(req,res)=>{
    let result=await stu.find();
    res.send(result);
})
routes.get("/:id",async(req,res)=>{
    let result=await stu.find({_id:req.params.id});
    res.send(result[0]);
})
routes.post("/",async(req,res)=>{
    console.log(req.body)
    let result=await stu.create(req.body);
    res.send({success:true, result});
})
routes.put("/:id",async(req,res)=>{
    delete req.body._id;
    let result=await stu.findByIdAndUpdate({_id:req.params.id},req.body,{new:true});
    res.send({success:true,result});
})
routes.delete("/:id",async(req,res)=>{
    let result=await stu.findByIdAndDelete({_id:req.params.id});
    res.send({success:true,result});
})
module.exports=routes;