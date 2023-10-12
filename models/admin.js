require("../config/db");
const mongoose=require("mongoose");
const adminschema=mongoose.Schema({
    username:String,
    password:String
})
module.exports=mongoose.model("admin",adminschema);