/*
http.request()
 */
var http = require("http");
var querystring = require("querystring");

var postData = querystring.stringify({
   'content':'多谢老师~',
   'cid':'348'
 });

var options = {
   /*hostname: 'www.google.com',
   port: 80,
   path: '/upload',
   method: 'POST',
   headers: {
     'Content-Type': 'application/x-www-form-urlencoded',
     'Content-Length': Buffer.byteLength(postData)
   }*/
   hostname: 'www.imooc.com',
   port: 80,
   path: '/course/docomment',
   method: 'POST',
   headers:{	
	   'Accept':'application/json, text/javascript, */*; q=0.01',
	   'Accept-Encoding':'gzip, deflate, br',
	   'Accept-Language':'zh-CN,zh;q=0.8',
	   'Cache-Control':'no-cache',
	   'Connection':'keep-alive',
	   'Content-Length':postData.length,
	   'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
	   'Cookie':'imooc_uuid=eeb132c8-07cd-4018-bfd5-8d0e4f2399b6; imooc_isnew_ct=1495944382; UM_distinctid=15ec5e36f53404-06a1af625c779f-5c1b3517-13c680-15ec5e36f54416; CNZZDATA1261110065=1171501884-1506553834-https%253A%252F%252Fwww.baidu.com%252F%7C1507768343; PHPSESSID=s34tmj5h76369huhhvvg0r9ai0; loginstate=1; apsid=k3MTJmZjcyNDNjYWYxMjAyNzZjMTgwYWU2YTZjNmQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANTg1NDg0NgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADI1ODE0MjQ2YmNkMDg1YTQyYjI4OWI0ZDJmYzE5NmRiHCMWWhwjFlo%3DYj; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1509601952,1510110444,1511331222,1511345166; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1511400283; imooc_isnew=2; cvde=5a151593d9c2a-122',
	   'Host':'www.imooc.com',
	   'Origin':'https://www.imooc.com',
	   'Pragma':'no-cache',
	   'Referer':'https://www.imooc.com/comment/348',
	   'User-Agent':'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36',
	   'X-Requested-With':'XMLHttpRequest'
   }
 };

/* var req = http.request(options, (res) => {
   console.log(`STATUS: ${res.statusCode}`);
   console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
   res.setEncoding('utf8');
   res.on('data', (chunk) => {
     console.log(`BODY: ${chunk}`);
   });
   res.on('end', () => {
     console.log('No more data in response.');
   });
 });

 req.on('error', (e) => {
   console.error(`problem with request: ${e.message}`);
 });

 // write data to request body
 req.write(postData);
 req.end();
*/

var req = http.request(options,function(res){
	console.log('Status: ' + res.statusCode);
	console.log('headers: ' + JSON.stringify(res.headers));

	res.on("data",function(chunk){
		console.log(Buffer.isBuffer(chunk));
		console.log(typeof chunk);
		console.log("Body: " + chunk);
	});

	res.on("end",function(){
		console.log("评论完毕！");
	});
});

req.on("error",function(e){
	console.log('Error: ' +  e.message);
});

req.write(postData);
req.end();

