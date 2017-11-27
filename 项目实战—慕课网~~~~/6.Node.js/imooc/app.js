var express = require("express");
var path = require("path");
//设置端口：从命令行中设置环境变量 或默认3000，process是一个全局变量，用来获取环境变量或者从外边传来的参数
var port = process.env.PORT || 3000;  
//启动一个web服务器，将实例赋值给app
var app = express();  
//设置视图的根目录
app.set("views","./views");
//设置默认的模板引擎
app.set("view engine","pug");
app.use(express.bodyParse);
app.use(express.static(path.join(__dirname,"bower_components")));
//监听端口
app.listen(port);

console.log("imooc started on port " + port);  

//PORT=4000 node app.js ：从命令行中设置端口，启动文件

//配置路由
//index page
app.get("/",function(req,res){
	res.render("index",{
		title:"imooc 首页"
	});
});


//detail page
app.get("/movie/:id",function(req,res){
	res.render("detail",{
		title:"imooc 详情页"
	});
});

//admin page
app.get("/admin/movie",function(req,res){
	res.render("admin",{
		title:"imooc 后台录入页"
	});
});

//list page
app.get("/admin/list",function(req,res){
	res.render("list",{
		title:"imooc 后台列表页"
	});
});












