getName1(); //undefined 
getName(); // no error because of Hoisting js run in two phases first memory allocation the code execution
console.log(x);// undefined
console.log(b); // error=> not defined because Temporal Dead Zone 
getName();
var x = 7;
let b=10;
console.log(x);


function getName() {
    console.log("Shubham");
}
var getName1=function () {
    console.log("Shubham");

}

