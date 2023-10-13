
// require("mongoose").connect("mongodb://0.0.0.0:27017/tssnewproject").then(()=>{
// console.log("data base is connected");
// }).catch((ERR)=>{
// console.log("data base is not connected",ERR);
// })

require("mongoose").connect("mongodb+srv://gaurav:9uPg6s1b8V9pNHQd@cluster0.kw6oevt.mongodb.net/?retryWrites=true&w=majority").then(()=>{
console.log("data base is connected");
}).catch((ERR)=>{
console.log("data base is not connected",ERR);
})







//mongodb+srv://gaurav:<password>@cluster0.kw6oevt.mongodb.net/?retryWrites=true&w=majority