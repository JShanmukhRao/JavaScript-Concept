
function x() {
    var a=10;// it will find a in its parent
    b();
    function b() {
        var y=20;
        console.log(c,y,a);// a and c is not present in this function so it will find in its parent lexica scope
    }
}

var c=100;// find c in its grand parant
x();
