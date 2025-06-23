//Tìm kiểu kĩ hơn về array

//forEach lọc qua từng phần tử trong mảng và không trả về mảng mới

let a = [1, 2 , 3, 4, 5, 6, 7, 8, 9, 10];

a.forEach((item, index) => {
    console.log(item, index);
})

//Không dùng break và return trong forEach 

//for... of: lặp qua giá trị của các phần tử trong iterable(mảng, chuôi, Map, set)

for(let item of a) {
    console.log(item);
}

//for...in: duyệt qua chỉ số index hoặc key nếu là object
//for...in thường được dùng với object hơn array
let arr = ['x', 'y', 'z']

for(let index in arr) {
    console.log(index, arr[index]);
}

//filter: lọc phần tư thông qua điều kiện. Luôn trả về mảng mới ngay cả khi không có phần tử nào

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = number.filter((item) => {
    return item > 5
})
console.log(result);

//reduce: tính tổng hay tập hợp tất cả phần tử trong mảng thành một giá trị duy nhất

//VD: Tính tập hợp tất cả phần tử trong mảng
let x = [1, 2, 3, 4, 5]
let sum = x.reduce((total, item) => {
    return total + item
})
console.log(sum);

//VD: Đếm số lần xuất hiện
let names = ['a', 'b', 'a', 'c', 'b']
let count = names.reduce((total, item) => {
    total[item] = (total[item] || 0) + 1;
    return total;
}, {});

console.log(count);

//find: lọc ra phần tử đầu tiên thoa một điều kiện. Trả về phần tử đó hoặc undefined
let users = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
    {id: 3, name: 'c'},
    {id: 4, name: 'd'},
]

let user = users.find(u => u.name === "c");
console.log(user);

//some: trả về true nếu ít nhất 1 phần tử thỏa mãn điều kiện
let ages = [10, 20, 30, 40, 50];
// let hasAdult = ages.some(age => age >= 18);
// console.log(hasAdult);

//every: trả về true nếu tất cả phần tử thỏa mần điều kiện
let hasAdult = ages.every(age => age >= 18);
console.log(hasAdult);

//flat: làm phẳng mảng

let array = [1, 2, [3, 4, [5, 6, [7, 8]]]];
let flatArray = array.flat(Infinity);
console.log(flatArray);