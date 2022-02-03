

function calculate(a,b,c){
   return new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject();
        }, 2000);
    })
}
//resolve 
// pending
// rejected
calculate(1,2,3)
.then(res=> calculate(res,2,5))
.then(res=>console.log(res))
.catch(err=> console.log('query is not resolved 1'))



async function asyncFun(){
    let sum1=await calculate(1,2,3);
     sum1=await calculate(sum1,2,5);
     return sum1;
}
asyncFun().then(sum=>console.log(sum ))
.catch(err=> console.log('query is not resolved'))