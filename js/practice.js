
// var b=20;
// function outer(){
//     var a=10;
//     function inner(params) {
//         console.log(a);
//     }
//     inner();
// }
// outer();


var name={
    firstName:"Shubham",
    lastName:"Rao",
    printName:function (){
        console.log(this.firstName);
    }
}

name.printName()