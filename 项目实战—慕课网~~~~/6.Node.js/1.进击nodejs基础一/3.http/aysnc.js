/*

function plus(){
	c++;
}

function printIt(){
	console.log(c);
}

var c = 0;
plus();
printIt();  //1

*/

/*
function plus(){
	setTimeout(function(){
		c++;
	}, 1000);
}

function printIt(){
	console.log(c);
}

var c = 0;
plus();
printIt(); //0

*/

function plus(callback){
	setTimeout(function(){
		c++;
		callback();
	}, 1000);
}

function printIt(){
	console.log(c);
}

var c = 0;
plus(printIt);  //1
