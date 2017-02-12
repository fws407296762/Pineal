// 依赖引用
const express = require("express");
const cons = require("consolidate");
const appRouter = require("./router");
let app = express();
let router = express.Router();

app.engine("html",cons.dust);  //定义文件后缀和文件渲染的模板引擎
app.set("views",__dirname+"/views");
app.set("view engine","html");  //设置视图引擎
app.use("/static",express.static(__dirname+"/static"));

app.use("/",appRouter(router));
app.listen(3000);