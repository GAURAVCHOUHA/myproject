const routes=require('express').Router();
const admin=require("../models/admin");
const sha1=require("sha1");
const jwt=require("jsonwebtoken");
const key = require('../config/key');
routes.post("/",async(req,res)=>{

    let u=req.body.username;
    let p=req.body.password;

    let result=await admin.find({username:u});

    if(result.length==1){
        if(result[0].password==sha1(p)){
            let obj={id:result[0]._id};
            let token=jwt.sign(obj,key,{expiresIn:'2d'})
            res.send({success:true,admintoken:token})
        }else{
            res.send({success:false,errtype:2})
        }
    }else{
        res.send({success:false,errtype:1})
    }
    //res.send(result);

})
module.exports=routes;