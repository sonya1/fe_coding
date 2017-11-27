/*拷贝文件*/
var fs = require('fs');

var readStream = fs.createReadStream("1.mp4");
var writeStream = fs.createWriteStream("1-stream.mp4");

readStream.on('data',function(chunk){
	if(writeStream.write(chunk) === false){  //是否写入到目标了，==false说明还在缓冲区，读就暂停
		console.log("still cached");
		readStream.pause();
	}
});

readStream.on('end',function(){
	writeStream.end();	
});

writeStream.on('drain',function(){  //drain已经写入到目标
	console.log('data drains');
	readStream.resume();	
});





















