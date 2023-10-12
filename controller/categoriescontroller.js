const routes=require("express").Router();
const cate=require("../models/categories");
const blog=require("../models/Blog")
routes.get("/",async(req,res)=>{
    let result=await cate.find();
    res.send(result);
})
routes.get("/:id",async(req,res)=>{
        let id=req.params.id;
        let result=await cate.find({_id:id});
        res.send(result[0]);
    }
    
)
routes.post("/",async(req,res)=>{
    await cate.create(req.body);
    res.send({success:true});
})
routes.delete("/:id",async(req,res)=>{
    let a=req.params.id;
    let result=await cate.find({_id:id});
    let catname=result[0].name;
    await blog.deleteMany({category:catname})
    await cate.deleteMany({_id:id});
    res.send({success:true});
})
routes.put("/:id",async(req,res)=>{
    let id=req.params.id;
    let result=await cate.find({_id:id});
    console.log(result)
    let catename=result[0].name;
    await blog.updateMany({category:catename},{category:req.body.name})
    await cate.updateMany({_id:id},req.body);
    res.send({success:true,result:result});
})
module.exports=routes;