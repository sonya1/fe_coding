var EventEmitter = require("events").EventEmitter;

var life = new EventEmitter();
life.setMaxListeners(11);  //设置最大监听,
 
//addEventListener也可以
//超过10个 会抛异常

function water(who){
	console.log("给" + who + "倒水");
}

life.on("求安慰",water);
life.on("求安慰",function(who){
	console.log("给" + who + "。。1");
});
life.on("求安慰",function(who){
	console.log("给" + who + "。。2");
});
life.on("求安慰",function(who){
	console.log("给" + who + "。。3");
});
life.on("求安慰",function(who){
	console.log("给" + who + "。。4");
});
life.on("求安慰",function(who){
	console.log("给" + who + "。。5");
});
life.on("求安慰",function(who){
	console.log("给" + who + "。。6");
});
life.on("求安慰",function(who){
	console.log("给" + who + "。。7");
});
life.on("求安慰",function(who){
	console.log("给" + who + "。。8");
});
life.on("求安慰",function(who){
	console.log("给" + who + "。。9");
});
life.on("求安慰",function(who){
	console.log("给" + who + "。。10");
});
life.on("求安慰",function(who){
	console.log("给" + who + "。。11");
});


/*life.on("求溺爱",function(who){
	console.log("给" + who + "。。niai1");
});
life.on("求溺爱",function(who){
	console.log("给" + who + "。。niai2");
});*/
//移除事件 removeListener
life.removeListener("求安慰",water);

life.emit("求安慰","汉子");  //返回值为 是否监听过此事件
var hasConfortListener = life.emit("求安慰","汉子");
var hasLovedListener = life.emit("求溺爱","汉子");
var hasLalaListener = life.emit("求啦啦","汉子");

console.log(hasConfortListener);  //true
console.log(hasLovedListener);  //true
console.log(hasLalaListener);  //false

console.log(life.listeners("求安慰").length);
console.log(life.listeners().length);  //0

console.log(EventEmitter.listenerCount(life,"求安慰"));

life.removeAllListeners();  //移除life上所有事件监听
life.removeAllListeners("求安慰");  //移除life上“求安慰”事件监听
