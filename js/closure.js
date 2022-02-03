function x() {
    var a=10;
    var b=25;
   return function y() {
        console.log(a,b); //closure  it remembers its parent environment
    }
    

}
const ans=x(); //it return y(fun) it will form closure with a and b 
ans();



// Function Currying 
function multiply(a,b) {
    console.log(a,b)
    return a*b;
}
const multiplyByTwo=multiply.bind(this,2);
console.log(multiplyByTwo(3))

// setTimeout and closure
for(let i=0;i<=5;i++){
    function close(i) {
        setTimeout(()=>{
            console.log(i);
        },i*1000);
    }
    close(i);
}

function outer(params) {
    var a=200;
    return function inner(params) {
        console.log(a);
    }
}
outer()();


// Encapsulation with closure
function counter(params) {
    let count=0;
    this.increment= ()=>{
        count++;
        console.log(count);
    }
    this.decrement= ()=>{
        count--;
        console.log(count);
    }
    return {increment, decrement}
}
var counter1=counter();
console.log(counter1)
counter1.increment();
counter1.increment();
counter1.increment();
counter1.decrement();



