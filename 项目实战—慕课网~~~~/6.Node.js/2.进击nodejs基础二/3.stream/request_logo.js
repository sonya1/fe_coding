var http = require("http");
var fs = require("fs");
var request = require("request");

http
	.createServer(function(req,res){
		/*fs.readFile('../2.buffer/logo.jpg',function(err,data){
			if(err){
				res.end('file not exist!');
			}else{
				res.writeHeader(200,{'Context-Type':"text/html"});
				res.end(data);
			}

		});*/

		//fs.createReadStream("../2.buffer/logo.jpg").pipe(res);

		request("http://static.mukewang.com/static/img/common/logo.png").pipe(res);
	})
	.listen(8090);