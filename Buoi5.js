//Tìm hiểu về DOM

//DOM: Document Object Model là mô hình cây đối tượng đại diện cho toàn bộ nội dung HTML
//Nó cho phép Js truy cập, thay đổi, thêm, xóa nội dung và cấu trúc HTML khi trang đã được tải

//DOM có 3 thành phần: 

/**
 * 1. Element
 * 2. Attribute
 * 3. Text
 */

//DOM DOCUMENT OBJECT MODEL
// console.log(document);

//1. DOM Element: ID, class, tag, css selector, HTML collection

// let header = document.getElementById("heading");
// console.log({
//     Element: header
// });

// let headerClass = document.getElementsByClassName("domClass")
// console.log({
//     headerClass
// });

// let headerTag = document.getElementsByTagName("h1");
// console.log({
//     headerTag
// });

// let headerCss = document.querySelectorAll(".domClass");
// console.log({
//     headerCss
// });

let boxNode = document.querySelector(".box-1");
console.log(boxNode);

console.log(boxNode.getElementsByTagName("li"))

//2. DOM Attribute