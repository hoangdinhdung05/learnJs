//Làm việc với chuỗi

// let message = "Hello word";

// for(let i = 0; i < message.length; i++) {
//     console.log(message[i]);
// }


// let message = prompt("Nhap 1 chuoi khong vuot qua 140 ki tu: ")

// alert(
//     "Da nhap: " + message.length + " ki tu"
//     + "\n" + 
//     "Con lai: " + (140 - message.length)
// )

//Cắt chuỗi: slice(), substring()

// String a: a.slice(startIndex, endIndex);

// let s = "0123456789"
// let b = s.slice(0, 5);
// console.log(s + "\n" + b);


// let message = prompt("Nhap chuoi khong qua 20: ")

// if(message.length <= 10) {
//     console.log("Hop le: " + message);
// } else {
//     let messageNew = message.slice(0, 20);
//     console.log("Hop le: " + messageNew + "...");
// }

//Làm việc với trim
//trim ,trimEnd, trimStart

// let s = "   He llo wo rd"

// console.log(s.length);

// console.log(s.trim());
// console.log(s.length);


// Đề bài: 
//  Bài tập js 24:
// Nhập vào 1 chuỗi từ bàn phím , 
// đếm xem có bao nhiêu ký tự thường
//  bao nhiêu in hoa
//  bao nhiêu số
//  bao nhiêu space


// let message = prompt("Nhap 1 chuoi: ");

// let countLowercase = 0;
// let countUppercase = 0;
// let countNumber = 0;
// let countSpace = 0;

// for(let i = 0; i < message.length; i++) {
//     if(message[i] >= 'a' && message[i] <= 'z') {
//         countLowercase++;
//     } else if(message[i] >= 'A' && message[i] <= 'Z') {
//         countUppercase++;
//     } else if(message[i] >= '0' && message[i] <= '9') {
//         countNumber++;
//     } else if(message[i] == ' ') {
//         countSpace++;
//     }
// }

// console.log("So ki tu thuong: " + countLowercase);
// console.log("So ki tu hoa: " + countUppercase);
// console.log("So ki tu so: " + countNumber);
// console.log("So ki tu space: " + countSpace);


//  Bài tập js 25:
// a. Viết chương trình kiểm tra tính hợp lệ của mật khẩu: 
//    1.  mật khẩu hợp lệ khi có ít nhất 6 ký tự 
//    2. chứa ít nhất 1 chữ cái viết hoa
//    3. chứa ít nhất 1 chữ cái viết thường
//    4. chứa ít nhất 1 chữ số 
//  b.  Cho người dùng nhập vào mật khẩu để login / so sánh, nếu đúng mở của, sai quá  5 lần khóa đăng nhập, thoát chương trình    
// // Ví dụ mật khẩu hợp lệ : Abc123

// let passWord = prompt("Nhap mat khau: ");

// let countUppercase = 0;
// let countLowercase = 0;
// let countNumber = 0;

// if(passWord.length >= 6) {

//     for(let i = 0; i < passWord.length; i++) {
//         if(passWord[i] >= 'A' && passWord[i] <= 'Z') {
//             countUppercase++;
//         } else if(passWord[i] >= 'a' && passWord[i] <= 'z') {
//             countLowercase++;
//         } else if(passWord[i] >= '0' && passWord[i] <= '9') {
//             countNumber++;
//         }
//     }

//     if(countUppercase > 0 && countLowercase > 0 && countNumber > 0) {
//         console.log("Hop le");
//     } else {
//         console.log("Mat khau khong hop le");
//     }

// } else {
//     console.log("Password must have at least 6 characters");
// }


//  Bài tập js 26:
// Viết chương trình chuyển tin nhắn sang mật mã theo bảng :  
//  const a="abcdefghijklmnopqrstuvwxyz"   
//  const b="zxcvbnmasdfghjklqwertyuiop" 




//   Bài tập js 27:
//       const a = "tôi chăm học tôi chịu khó tôi đẹp zai";
//       Đếm từ tôi trong string a trên ? 

// let count = 0;
// const a = "tôi chăm học tôi chịu khó tôi đẹp zai"

// a.split(" ").forEach((item) => {
//     if(item == "tôi") {
//         count++;
//     }
// })

// console.log(count);

//  Bài tập js 28:
//  Viết chương trình tách số và chữ từ chuỗi nhập vào thành 2 chuỗi :  
// ví dụ nhập vào : abc123 sẽ tách và in ra thành 2 chuỗi abc và 123

// let message = "a1bc123";

// let number = "";
// let string = "";

// for(let i = 0; i < message.length; i++) {
//     if(message[i] >= '0' && message[i] <= '9') {
//         number += message[i];
//     } else {
//         string += message[i];
//     }
// }

// console.log(string);
// console.log(number);


