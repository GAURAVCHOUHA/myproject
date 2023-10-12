
require("mongoose").connect("mongodb://0.0.0.0:27017/tssnewproject").then(()=>{
console.log("data base is connected");
}).catch((ERR)=>{
console.log("data base is not connected",ERR);
})