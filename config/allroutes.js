const routes=require("express").Router();
routes.use("/api/user",require("../controller/usercontroller"));
routes.use("/api/user/auth",require("../controller/userauthcontroller"));
routes.use("/api/city",require("../controller/citycontroller"));
routes.use("/api/blog",require("../controller/blogcontroller"));
routes.use("/api/category",require("../controller/categoriescontroller"));
routes.use("/api/admin",require("../controller/Admincontroller"));
routes.use("/api/image",require("../controller/Imagecontroller"));
routes.use("/api/student",require("../controller/StudentController"));




module.exports=routes;