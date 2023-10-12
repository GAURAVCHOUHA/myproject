require("../config/db");
const mongoose=require("mongoose");
const userschema=mongoose.Schema({
    name:String,
    lastname:String,
    username:String,
    contact:String,
    password:String,
    gender:String,
    state:String,

    city:String
    

})
module.exports=mongoose.model("user",userschema);
