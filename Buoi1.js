//Tìm hiểu về biến, kiểu dữ liệu và toán tử

//Js: var let const
//var tương tự let. Nhưng nên dùng let hơn
//const: khai báo hằng số

/*
var x = 10;
const y = 20;

console.log(x);
console.log(y);

x = 1000;
// y = 30;
console.log(x);
console.log(y);

*/

//các kiểu dữ liệu
//string, number, boolean, null, undefined, object, array


//Toán tử: 
// ===: so sánh cả giá trị và kiểu dữ liệu
//Còn lại tương tự java


/*
var a = 10;
var b = "10"

if(a !== b) {
    console.log("true");
} else {
    console.log("false");
}

//Toán tử 3 ngôi
let message = a === b ? "true" : "false";
console.log(message);

*/

//Vòng lặp
//for, while, switch case

// for(let i = 0; i < 5; i++) {
//     console.log(i+1);
// }

// let a = [1,2,3,4,5];

// a.forEach((item, index) => {
//     console.log(index + " - " + item);
// })

//fuction trong js

//check snt
function isSnt(n) {

    if(n < 2) return false;
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(n % i === 0) return false;
    }
    return n > 1;
}

let a = 1;
let message = isSnt(a) ? "A là một số nguyên tố" : "A không phải một số nguyên tố";
console.log(message);