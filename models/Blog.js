require("../config/db");
const mongoose=require("mongoose");
const Blogschema=mongoose.Schema({
    bloggerid:mongoose.Schema.Types.ObjectId,
    title:String,
    category:String,
    blogdetail:String,
    date:{type:Date,default:Date.now},
    image:String,
    type:String
})
module.exports=mongoose.model("blog",Blogschema);
