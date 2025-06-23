//Tìm hiểu về mảng 1 chiều, 2 chiều. Làm việc với mảng

//VD:
// let arr = [1, 2, 3, 4];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// arr.forEach((item) => {
//     console.log(item + "Hello");
// })

// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// for(let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j]);
//     }
// }

// arr.forEach((item) => {
//     item.forEach((item2) => {
//         console.log(item2);
//     })
// })

// arr.push([10]);

// arr.forEach((item) => {
//     item.forEach((item2) => {
//         console.log(item2);
//     })
// })


// let a = [100, 25, 25, 50, 50]

// function check(a) {
//     let count25 = 0;
//     let count50 = 0;
//     for(let i = 0; i < a.length; i++) {
//         if(a[i] == 25) {
//             count25++;
//         } else if(a[i] == 50) {
//             if(count25 < 1) {
//                 return false;
//             } else {
//                 count25--;
//                 count50++;
//             }
//         } else if(a[i] == 100) {
//             if(count50 > 0 && count25 > 0) {
//                 count25--;
//                 count50--;
//             } else if(count25 >= 3) {
//                 count25 -= 3;
//             } else {
//                 return false;
//             }
//         }

//         return true;
//     }
// }

// console.log(check(a));


//selection sort: Duyệt và đổi trả các phần tử

function selectionSort(a) {
    let n = a.length;

    for(let i = 0; i < n - 1; i++) {
        let index = i;
        for(let j = i + 1; j < n; j++) {
            if(a[j] < a[index]) {
                index = j;
            }
        }
        let tmp = a[i];
        a[i] = a[index];
        a[index] = tmp;
    }
}


//bubbleSort sort: So sánh từng cặp rồi swap
function bubbleSort(a) {
    let n = a.length;

    for(let i = 0; i < n - 1; i++) {
        for(let j = 0; j < n - i - 1; j++) {
            if(a[j] > a[j + 1]) {
                let tmp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = tmp;
            }
        }
    }
}

//insertion sort: chèn từng phần tử vào đúng vị trí trong mảng con đã sắp xếp.
function insertionSort(a) {
    let n = a.length;

    for(let i = 1; i < n; i++) {
        let key = a[i];
        let j = i - 1;

        while(j >= 0 && a[j] > key) {
            a[j + 1] = a[j];
            j--;
        }
        a[j + 1] = key;
    }
}


let a = [1 ,2 , 6, 3, 4, 5];

console.log(a);
bubbleSort(a);
console.log(a);