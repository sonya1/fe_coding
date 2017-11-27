var fs = require("fs");

//读文件stream_copy_image.js
var readStream = fs.createReadStream("stream_copy_image.js");
var n=0;
readStream
	.on('data',function(chunk){  //数据传输 会触发data事件
		n++;
		console.log('data emits');
		console.log(Buffer.isBuffer(chunk));
		//console.log(chunk.toString('utf8'));
		
		//模拟异步处理
		
		readStream.pause();  //数据传递暂停
		console.log("data pause");
		setTimeout(function(){
			console.log("data pause end");
			readStream.resume();  //重新启动数据传递
		}, 3000);
	})
	.on('readable',function(){  //可读的？？
		console.log("data readable");	
	})
	.on('end',function(){  //数据传输完成 触发end事件
		console.log(n);
		console.log("data ends");
	})
	.on('close',function(){  //流关闭
		console.log("stream close");
	})
	.on('error',function(e){  //流关闭
		console.log("data read error" + e);
	})