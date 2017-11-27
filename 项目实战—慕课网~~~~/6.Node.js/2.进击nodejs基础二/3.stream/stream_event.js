var fs = require("fs");

//读文件stream_copy_image.js
var readStream = fs.createReadStream("stream_copy_image.js");

readStream
	.on('data',function(chunk){  //数据传输 会触发data事件
		console.log('data emits');
		console.log(Buffer.isBuffer(chunk));
		console.log(chunk.toString('utf8'));
	})
	.on('readable',function(){  //可读的？？
		console.log("data readable");	
	})
	.on('end',function(){  //数据传输完成 触发end事件
		console.log("data ends");
	})
	.on('close',function(){  //流关闭
		console.log("stream close");
	})
	.on('error',function(e){  //流关闭
		console.log("data read error" + e);
	})