//ES6: arrow functions
let circleArea = (r) => {
    const PI = 3.14;
    let area = PI * r * r;
    return area;
}
console.log(circleArea(2));

let circleArea2 = (r) => 3.14 * r * r;
console.log(circleArea2(2));

let circle = function(r){
	const PI = 3.14;
	let area = PI * r * r;
	return area;
}
console.log(circle(2));

let circle2 = (r)=>{
	const PI = 3.14;
	let area = PI * r * r;
	return area;
}
console.log(circle2(2));

let circle3 = r=> 3.14 * r *r;

console.log(circle3(2));
