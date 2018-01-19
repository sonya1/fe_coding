function sum(x = 1,y = 3,z = 3){
	return x+y+z;
}

var params = [3,4,5];
console.log(sum(...params));//展开操作符,把数组展开为参数。

var numbers = [1,2,...params];
console.log(numbers);

function rest(x,y,...a){
	return (x+y)*a.length;
}
console.log(rest(1, 2, "hello", true, 7));

function rest1(x,y){
	let a = Array.prototype.slice.call(arguments,2);
	return (x+y)*a.length;
}
console.log(rest1(1, 2, "hello", true, 7));
