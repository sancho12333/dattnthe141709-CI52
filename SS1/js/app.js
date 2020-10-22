// Bài 1: Cho mảng [1, 9, 4, 7, 5, 10]
// a. Hãy in ra màn hình console những phần tử chẵn và xếp theo thứ tự tăng dần
// b. Không sử dụng vòng lặp, hãy làm thử câu a 😁😁😁
let arr = [1, 9, 4, 7, 5, 10];
// let arr1 = [];
// for(let i = 0; i < arr.length ; i++){
//     if(arr[i]%2==0){
//         arr1.push(arr[i]);
//     }
// }
// for(let i = 0; i<arr1.length;i++){
//     for(let j = 0; j < arr1.length; j++){
//         if(arr1[i] < arr1[j]){

//         }
//     }
// }
// const bubbleSort = (array) => {
//     for (let i = 0; i < array.length; i++) {
//       for (let x = 0; x < array.length - 1 - i; x++) {
//         if (array[x] > array[x + 1]) {
//           [array[x], array[x + 1]] = [array[x + 1], array[x]];
//         }
//       }
//     }
//     return array;
//   }

// let a = bubbleSort(arr1);
// console.log(a)

// let arr_1 = arr.sort(function (a, b) {
//     return a - b;
// });

// let arr_2 = arr_1.filter(function (num) {
//     return num % 2 == 0;
// });

// console.log(arr_2);

// Bài 2: Cho biến x, giá trị đầu vào của x chỉ có thể là 0 hoặc 1.
// a. Không sử dụng (if ... else, switch ... case), hãy in ra màn hình: 
// nếu x = 1 -> in ra false, 
// x = 0 -> in ra true
// b. Không sử dụng (if ... else, switch ... case), hãy in ra màn hình: 
// nếu x = 1 -> in ra 0, 
// x = 0 -> in ra 1

// let x = Number(prompt("Nhập vào 1 số x"));

// // let obj = {
// //     1: false,
// //     0: true
// // }

// test1(x);
// test2(x);

// function test1(x) {
//     console.log(x == 0);
//     // return obj[x]
// }

// function test2(x) {
//     console.log(1 - x);
// }

let $no = document.getElementById('no');
let $answers = document.getElementById('answers');
// ghi đè hàm xử lý sự kiện onmouseenter
// $no.onmouseenter = function() {
//     alert('bbb');
// }

// thêm hàm xử lý sự kiện
$no.addEventListener('mouseenter', function() {
    $answers.classList.toggle('reverse');
});

// $no.removeEventListener('mouseenter');