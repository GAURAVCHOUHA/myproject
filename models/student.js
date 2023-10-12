require("../config/db");
const mongoose=require("mongoose");
const studentSchema=mongoose.Schema({
    name:String,
    age:Number
})
module.exports=mongoose.model("student",studentSchema)