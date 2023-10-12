const Routes=require("express").Router();
const path=require("path");
Routes.post("/",async(req,res)=>{
    console.log(req.files);
    console.log(req.body);
    let filedata=req.files.image;
    filedata.mv(path.resolve()+"/assets/images/"+filedata.name,(err)=>{
        if(err){
            console.log(err);
        }
        console.log("*******************Uploaded");
        res.send({success:true});
    })

})
module.exports=Routes;