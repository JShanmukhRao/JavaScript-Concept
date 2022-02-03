const radius = [3, 2, 4, 6];
const pi = 3.14;

const area = (r) => {
    console.log(pi * r * r);
}
Array.prototype.calculate = function (logic) {
    for (let index = 0; index < this.length; index++) {
        logic(this[index])
    }
}
// radius.map(area)
radius.calculate(area)
// const calculateArea = calculate.bind(this,area);
// calculateArea(radius)
// ?\map,filter reduce

const user = [
    { firstName: "Shubham", age:26 },
    { firstName: "Shanmukh", age:30 },
    { firstName: "Rahul", age:12 },
    { firstName: "Priya", age:56 },
    { firstName: "Riya", age:44 },
]
const output = user.filter((curr)=>{
    if(curr.age<30){
        // console.log(curr.firstName)
        // acc.push(curr.firstName);
        // console.log(acc)
        return curr.firstName;
    }
    
})
console.log(output)