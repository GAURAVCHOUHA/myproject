require("../config/db");
const mongoose=require("mongoose");
const categoryschema=mongoose.Schema({
    name:String
})
module.exports=mongoose.model("category",categoryschema);