
console.log("start");

async function name(){// async function returns promise
    console.log("Inside Function")
   const response=await fetch('https://jsonplaceholder.typicode.com/users') // as soon as js read this line it will not execute further lines in this function till await resolve
   const user=await response.json();
    console.log("After Await")
    return user;
}
console.log("Before Calling")
const a=name();
console.log(a)

console.log("Last Line")

function a(){
    const response=new Promise((resolve,reject)=>{
      
         resolve({data:"Hello"})
    
}).then(res=> {
    console.log(res);
    return res.json();
}).then(res=>console.log(res))
}
a();