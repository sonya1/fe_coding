var num = 1; //{1}
num = 3; //{2}

var price = 1.5; //{3}
var name = 'Packt'; //{4}
var trueValue = true; //{5}
var nullVar = null; //{6}
var und;  //7

console.log("num: "+ num);  //3
console.log("name: "+ name); //Packt
console.log("trueValue: "+ trueValue); //true
console.log("price: "+ price);  //1.5
console.log("nullVar: "+ nullVar);  //null
console.log("und: "+ und);  //undefined

//******* Variable Scope

var myVariable = 'global';
myOtherVariable = 'global';

function myFunction(){
    var myVariable = 'local';
    return myVariable;
}

function myOtherFunction(){
    myOtherVariable = 'local';
    return myOtherVariable;
}

console.log(myVariable);   //{1}  global
console.log(myFunction()); //{2}  local

console.log(myOtherVariable);   //{3} global
console.log(myOtherFunction()); //{4}  local
console.log(myOtherVariable);   //{5} local