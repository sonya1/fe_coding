//父类饮料
function Beverage(){

}
Beverage.prototype.boilWater = function(){
	console.log("把水煮沸");
};
Beverage.prototype.brew = function(){
	throw new Error("子类要重写该方法");
};
Beverage.prototype.pourInCup = function(){
	throw new Error("子类要重写该方法");
};
Beverage.prototype.customerWantsCondiments = function(){
	return true;
}
Beverage.prototype.addCondiments = function(){
	throw new Error("子类要重写该方法");
};

Beverage.prototype.init = function(){
	this.boilWater();
	this.brew();
	this.pourInCup();
	if(this.customerWantsCondiments()){
		this.addCondiments();
	}
};

//咖啡
function Coffee(){

}

Coffee.prototype = new Beverage();  //继承父类

Coffee.prototype.brew = function(){
	console.log("冲泡咖啡");
};
Coffee.prototype.pourInCup = function(){
	console.log("把咖啡倒进杯子");
};
Coffee.prototype.addCondiments = function(){
	console.log("加牛奶和糖");
};



var coffee = new Coffee();
coffee.init();

//茶
function Tea(){

}
Tea.prototype = new Beverage();

Tea.prototype.brew = function(){
	console.log("浸泡茶");
};
Tea.prototype.pourInCup = function(){
	console.log("把茶叶倒进杯子");
};
Tea.prototype.customerWantsCondiments = function(){
	return confirm("请问茶中要加调料么？");
};

Tea.prototype.addCondiments = function(){
	console.log("加柠檬");
};



var Tea = new Tea();
Tea.init();
