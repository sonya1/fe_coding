var https = require("https");
var fs = require("fs");

var options = {
	key:fs.readFlieSync("ssh_key.pem"),
	cert:fs.readFlieSync("ssh_cert.pem"),
};

https
	.createServer(options,function(req,res){
		res.writeHead(200);
		res.end("Hello Https");
	})
	.listen(8090);