console.log(this);
console.log('hello june');

// hoisting demo

console.log(a); // undefined
// console.log(b); // ReferenceError: Cannot access 'c' before initialization
// console.log(c); // ReferenceError: Cannot access 'c' before initialization
var a = "Apple";
let b = "Banana";
const c = "Cherry";

console.log(sumTwoNum(1, 1)); // 2
function sumTwoNum(a, b) {
    return a + b;
}

// console.log(sumThreeNum(1, 1, 1)); // TypeError: sumThreeNum is not a function
var sumThreeNum = function (a, b, c) {
    return a + b + c;
}

testingOutHoistingInAFunction();
function testingOutHoistingInAFunction() {
    console.log(x);
    // console.log(y);
    // console.log(z);
    // console.log(yy);
    var x = 1;
    // let y = 2;
    // const z = 3;
    let yy;
    console.log(yy);
}

// fun();
var fun = () => {
    console.log(qq);
    var qq = "QQ";
}
fun();
