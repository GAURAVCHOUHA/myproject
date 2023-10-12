// const routes=require("express").Router();
// const user=require("../models/user");
// const sha1=require("sha1");
// routes.get("/",async(req,res)=>{
//     let result=await user.find();
//     res.send(result);
// });
// routes.post("/",async(req,res)=>{
//     delete req.body.repassword;
//     req.body.password=sha1(req.body.password);
//     await user.create(req.body);
//     res.send({success:true});
// })
// module.exports=routes;
const routes=require("express").Router();
const user=require("../models/user");
const sha1=require("sha1");
const jwt=require("jsonwebtoken");
routes.get("/", async(req,res)=>{
    let result=await user.find();
    res.send(result)
})
routes.delete("/:id", async(req,res)=>{
    let id=req.params.id;
    let result=await user.deleteMany({_id:id});
    res.send({success:true});
})

routes.post("/", async(req,res)=>{
    
    delete req.body.repassword;
    req.body.password=sha1(req.body.password);
    await user.create(req.body);
    res.send({success:true});
})
routes.post("/login",async(req,res)=>{
    let u=req.body.username;
    let p=req.body.password;
    let result=await user.find({username:u});
    if(result.length>0){
        if(result[0].password==sha1(p)){
            let obj={_id:result[0]._id};
            let token=jwt.sign(obj,"this",{expiresIn:'2d'});
         res.send({success:true,token:token})
        }else{
            res.send({success:false,errtype:2})
        }
    }else{
        res.send({success:false,errtype:1});
    }
})
module.exports=routes;