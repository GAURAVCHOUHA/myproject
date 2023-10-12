const routes=require("express").Router();
const Blog=require("../models/Blog");
const jwt=require("jsonwebtoken")
const key=require("../config/key")
const path=require("path");
const uniquestr=require("unique-string-generator");
routes.post("/",async(req,res)=>{
  let token=req.headers.authorization;
  let obj=jwt.decode(token,key);
  let id=obj.id;
  let uniquename=uniquestr.UniqueString();
  console.log(req.files)
  
  let data=JSON.parse(req.body.formdata);
  let file=req.files.image;


  let type=req.files.image.mimetype;
  console.log(type)
  let arr=type.split("/");
  let oldname=file.name;
  let namearr=oldname.split(".");
  let ext=namearr[namearr.length-1];
  let newname=uniquename+"."+ext;

  if(arr[0]=="video"){
    data.type="video"
  }if(arr[0]=="image"){
    data.type="image"
  }
  file.mv(path.resolve()+"/assets/blog-data/"+newname,async(err)=>{
    if(err){
      console.log(err);
      return;
    }
    data.image=newname;
    console.log("file uploaded");
    data.bloggerid=id;
    await Blog.create(data);
    console.log(data);
    res.send({success:true});
  })
 
})
routes.get("/",async(req,res)=>{
    let result=await Blog.find();
    res.send(result);
})
routes.get("/user",async(req,res)=>{
  if(req.headers.authorization){
    let token=req.headers.authorization;
    let obj=jwt.decode(token,key);
    let id=obj.id;

    let result=await Blog.find({bloggerid:id});
    res.send(result);
  }else{
    res.send({success:false});
  }
   
})
routes.put("/:a",async(req,res)=>{
  if(req.headers.authorization){
   let id=req.params.a;
    let result=await Blog.find({_id:id});
    res.send(result[0]);
  }else{
    res.send({success:false});
  }
   
})
routes.delete("/:a",async(req,res)=>{
  if(req.headers.authorization){
    let id=req.params.a;
    await Blog.deleteMany({_id:id});
    res.send({success:true})
  }else{
    res.send({success:false});
  }
 
})
routes.get("/:a",async(req,res)=>{
  if(req.headers.authorization){
    let id=req.params.a;
     let result=await Blog.find({_id:id});
    res.send(result[0])
  }else{
    res.send({success:false});
  }
 
})
routes.get("/g/:a",async(req,res)=>{
    let id=req.params.a;
     let result=await Blog.find({_id:id});
    res.send(result[0])
 
 
})
routes.get("/1/:a", async(req, res)=>{
  // let a=req.params.a;
  let result = await Blog.find({ category : req.params.a});
  res.send(result);
})
routes.get("/2/:a", async(req, res)=>{
  // let a=req.params.a;
  let result = await Blog.find({ _id : req.params.a});
  console.log(result)
  res.send(result);
})
module.exports=routes;