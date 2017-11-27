var Readable = require("stream").Readable;
var Writable = require("stream").Writable;

var readStream = new Readable();
var writeStream = new Writable();

readStream.push("I ");
readStream.push("Love ");
readStream.push("Imooc\n");
readStream.push(null);

writeStream._write = function(chunk,encode,cb){
	console.log(chunk.toString());
	//console.log(chunk.toString(encode));
	cb();
}

readStream.pipe(writeStream);