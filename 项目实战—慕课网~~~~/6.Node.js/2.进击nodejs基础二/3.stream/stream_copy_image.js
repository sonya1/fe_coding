var fs = require("fs");
var source = fs.readFileSync("../2.buffer/logo.jpg");

console.log(Buffer.isBuffer(source));  //true

fs.writeFileSync("stream_copy_logo.jpg",source);