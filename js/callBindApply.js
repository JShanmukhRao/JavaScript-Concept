let name={
    firstName:"Shubham",
    lastName:"Rao",
    age:21,
    
}
let printFullName=function (state, city){
    console.log(this.firstName+ " "+ this.lastName + " "+ city + " " + state);
}
printFullName.call(name,"CG","Bhilai");
let name2={
    firstName:"Shanmukh",
    lastName:"Rao",
    age:21,
   
}
// function borrowing
printFullName.call(name2,"CG","Bhilai")
printFullName.apply(name2,["AP","Vizag"])

// Bind
const fun=printFullName.bind(name2,"HR","Gurgaon") //it will return function to call in future
console.log(fun)
fun();

