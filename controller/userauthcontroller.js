const routes=require("express").Router();
const user=require("../models/user");
const sha1=require("sha1");
const jwt=require("jsonwebtoken");
const key=require("../config/key")
routes.post("/",async(req,res)=>{
    let e=req.body.username;
    let p=req.body.password;
    let result=await user.find({username:e});
    if(result.length>0){
        if(result[0].password==sha1(p)){
            let obj={id:result[0]._id};
            let token=jwt.sign(obj,key,{expiresIn:'2d'});
            res.send({success:true,token:token,name:result[0].name})

        }else{
            res.send({success:false,errType:2})
        }
    }else{
        res.send({success:false,errType:2})
    }
})
module.exports=routes;
// const routes=require("express").Router();
// const user=require("../models/user");
// const sha1=require("sha1");
// const jwt=require("jsonwebtoken");
// const key=require("../config/secretekey");




// routes.post("/",async(req,res)=>{
//     let e=req.body.username;
//     let p=req.body.password;
//     let result=await user.find({username:e});
//     if(result.length>0){
//         if(result[0].password==sha1(p)){
//             let obj={_id:result[0]._id};
//             let token=jwt.sign(obj,key,{expiresIn:'2d'});
//           res.send({success:true,token:token,name:result[0].fullname});
//         }else{
//             res.send({success:false,errType:2});
//         }
        
//     }else{
//         res.send({success:false,errType:1});
//     }
// })
module.exports=routes;