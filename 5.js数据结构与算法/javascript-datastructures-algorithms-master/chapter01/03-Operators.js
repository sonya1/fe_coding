/* Arithmetic operators */
var num = 0;

console.log('num value is ' + num);  //0

num = num + 2;

console.log('New num value is ' + num);  //2

num = num * 3;  

console.log('New num value is ' + num); //6

num = num / 2;

console.log('New num value is ' + num); //3

num++;  

num--;

console.log('New num value is ' + num);  //3

console.log('num mod 2 value is ' + (num % 2)); //1


/* Assignment operators */
num += 1;
num -= 2;
num *= 3;
num /= 2;
num %= 3;

console.log('New num value is ' + num);  //0

/* Assignment operators */
console.log('num == 1 : ' + (num == 1));  //false
console.log('num === 1 : ' + (num === 1));  //false
console.log('num != 1 : ' + (num != 1));  //true
console.log('num > 1 : ' + (num > 1));  //false
console.log('num < 1 : ' + (num < 1));  //true
console.log('num >= 1 : ' + (num >= 1));  //false
console.log('num <= 1 : ' + (num <= 1));  //true

/* Logical operators */
console.log('true && false : ' + (true && false));  //false
console.log('true || false : ' + (true || false));  //true
console.log('!true : ' + (!true));  //false

/* Bitwise operators */
console.log('5 & 1:', (5 & 1)); //same as 0101 & 0001 (result 0001 / 1)
console.log('5 | 1:', (5 | 1)); //same as 0101 | 0001 (result 0101 / 5)
console.log('~ 5:', (~5)); //same as ~0101 (result 1010 / 10)  
//00000000 00000000 00000000 00000101 -> 11111111 11111111 11111111 11111010(为负数，所以是补码),要取反+1（除符号位）。
//10000000 0000000 0000000 00000101  +1 -> 10000000 00000000 00000000 00000110  为-6。
console.log('5 ^ 1:', (5 ^ 1)); //same as 0101 ^ 0001 (result 0100 / 4)
console.log('5 << 1:', (5 << 1)); //same as 0101 << 1 (result 1010 / 10)
console.log('5 >> 1:', (5 >> 1)); //same as 0101 >> 1 (result 0010 / 2)

/* typeOf */
console.log('typeof num:', typeof num); //number
console.log('typeof Packt:', typeof 'Packt');  //string
console.log('typeof true:', typeof true);  //boolean
console.log('typeof [1,2,3]:', typeof [1,2,3]);  //object
console.log('typeof {name:John}:', typeof {name:'John'});  //object

/* delete */
var myObj = {name: 'John', age: 21};
delete myObj.age;
console.log(myObj); //Object {name: "John"}