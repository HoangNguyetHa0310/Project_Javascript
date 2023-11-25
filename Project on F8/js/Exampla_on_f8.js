
var fullName = 'Phan Văn Hoàng - Hoàng Nguyệt Hạ - Bài Tập Javascript :'; console.log(fullName);

// var age = 26;

// alert (fullName)
// alert (age)


// // 
// console.log(fullName);

// confirm('xac nhan banj du tuoi !');

// setInterval(function(){
//      console.log('day la long '+ Math.random());
// },1000)

// var firstName = 'Hoang';
// var lastName = ' Ha';

// console.log(firstName + ' ' + lastName);

// var chon = false;

// console.log(chon);

// Số chẵn là số khi chia cho 2 sẽ có phần dư là 0
// Số lẻ là số khi chia cho 2 sẽ có phần dư là 1

// Khai báo biến number, và gán trá trị cho biến number
// var number = 13;

// // Sử dụng toán tử % để lấy ra phần dư của number khi chia cho 2
// // Khai báo biến remian ,và gán phần dư cho biến đặt tên là remain
// var remain = number % 2

// // Sử dụng toán tử so sánh === để thực hiện so sánh biến remain với 1
// // Khai báo biến isOdd,và gán kết quả so sánh cho biến isOdd
// var isOdd = remain === 1;

// // In giá trị của biến isOdd ra cửa sổ console của trình duyệt
// console.log(isOdd) // Output: ?

// let a = 5;
// let b = '5';

// if (a === b) {
//   console.log('a dúng b');
// } else {
//   console.log('a does not dúng b');
// }
// var a = true;
// var b = false;
// var c = a || b;
// var d = b && c;

// console.log(c, d); // Output: ?

// var myFunction = function () {
//     console.log('hi cac ban ');
// }

// // myFunction();

// var myObject = {
//     name : 'hoang',
//     age : 14 ,
//     add : 'ha noi ',
//     myFunction () {

//     }
// };

// console.log('myObject' , myObject);

// var myArray = [
//     'ruby',
//     'java',
//     'js'
// ];

// console.log(myArray);



// function writeLOg (writwe) {
//     console.log(typeof  writwe);
// }


// let a = 5;
// let b = 7 ;
// // writeLOg (123)
// function cong ( a,b ) {
//     return a+b ;
// }

// var Cong = cong(3 , 5 );
// console.log(Cong);


// function isNumber (value) { 
//    return typeof value === "number" && !isNaN(value) // hàm isNaN kiểm tra nếu là NaN thì sẽ trả về true 
// }


// // Expected results:
// console.log(isNumber(999)); // true
// console.log(isNumber('998')); // false
// console.log(isNumber('100')); // false
// console.log(isNumber(NaN)); // false
// console.log(isNumber(100 / 'abc')); // false

// function joinWithCharacter(array, charactor){
//     return array.join(charactor);
// }



// // Ví dụ khi sử dụng
// var cars = ['Honda', 'Mazda', 'Mercedes'];

// var result = joinWithCharacter(cars, ' - ');

// console.log(result); // Expected: "Honda - Mazda - Mercedes"

// function getLastElement (array) {
//     return array.pop();
// }


// // Ví dụ sử dụng
// var animals = ['Monkey', 'Tiger', 'Elephant'];
// var result = getLastElement(animals);

// console.log(result); // Expected: "Elephant"
// console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// function getRandomItem(random){
//     return random[Math.floor(Math.random() *random.length)]
// }

// console.log(getRandomItem(numbers));
// console.log(getRandomItem(numbers));


// function run(a) {
//     // if (a%3 == 0 && a%5 != 0) return 1
//     // if (a%3 != 0 && a%5 == 0) return 2
//     // if (a%3 == 0 && a%5 == 0) return 3

//     return (a % 15 ==0 ) ? 3 : (a%5 == 0) ? 2 : 1  
// }



// // Kỳ vọng
// console.log(run(3)) // 1
// console.log(run(5)) // 2
// console.log(run(15)) // 3

// var course = {
//     name: "js",
//     coin: 120,
// }

// var inRa = course.coin > 0 ? `${course.coin} Coins` : ` miễn phí ` ;


// console.log(inRa);

// Làm bài

// function getCanVoteMessage (age) {
//     return age >= 18 ? `Bạn có thể bỏ phiếu` : `Bạn chưa được bỏ phiếu`
// }



// // Kỳ vọng
// console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
// console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'

// function getRandNumbers (min , max  , length ) {
//     var arr = [];

//     for (var i = 0 ; i< length ; i++){
//         arr.push(Math.random() * (max - min) + max);
//     }

//     return arr;
// }

// console.log(getRandNumbers(2, 3 , 4 ));


// function getTotal(arr) {
//     var sum = 0 ;
//     for (var i=0 ; i<arr.length ; i++){
//         sum = sum + arr[i];
//     }
//     return sum;
// }

// // Expected results
// console.log(getTotal([1, 2, 3])) // Output: 6

// getTotal([4, 5, -3]) // Output: 6
// getTotal([4, 5, 3, 5]) // Output: 17

// var orders = [
//     {
//         name: 'Khóa học HTML - CSS Pro',
//         price: 3000000
//     },
//     {
//         name: 'Khóa học Javascript Pro',
//         price: 2500000
//     },
//     {
//         name: 'Khóa học React Pro',
//         price: 3200000
//     }
// ]

// // console.log(orders[1]);
// console.log(orders[1])

// function getTotal () {
//     // var sum = 0 ;
//     // var arrLength = orders.length;
//     // for (var i = 0 ; i< arrLength ; i++) {
//     //     sum = sum + orders[i].price;
//     // }
//     // return sum;
//     var sum = 0 ;
//     var lengthArr = orders.length;
//     for (var i=0 ; i< lengthArr ; i++) {
//         sum += orders[i].price
//     }
//     return sum;

// }

// // Expected results:
// console.log(getTotal(orders)) // Output: 8700000

// var myString = "java";

// var luaguge = [
//     "java",
// ];

// for (var key in myString){
//     console.log(myString[key]);
// }

// function run(object) {
//     var arr = [];
//     for (var key in object){
//         arr.push(`Thuộc tính ${key} có giá trị ${object[key]}`)  // key thì mang giá trị là name còn objectkey thì mang value

//     }
//     return arr;
// }

// // Expected results:
// console.log(run({ name: 'Nguyen Van A', age: 16 }));
// var myINfo = {
//     namr : "hoang",
//     age : 12,
// };

// console.log(Object.keys(myINfo));

// for (var value of Object.keys(myINfo)){
//     console.log(myINfo[value]);


// Viết hàm tại đây
// function getLastElement (arr ) {
//     return arr.slice(arr.length - 1 );
// }


// // Ví dụ sử dụng
// var animals = ['Monkey', 'Tiger', 'Elephant'];
// var result = getLastElement(animals);

// console.log(result); // Expected: "Elephant"
// console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']


// bài 148 
// document.addEventListener('DOMContentLoaded', function () {
//     var element = document.querySelector('.box');

//     if (element !== null) {
//         element.classList.add('red');
//     } else {
//         console.error('Không tìm thấy phần tử!');
//     }

//     // console.log(element.classList.contains("red")); tim kiem class

//     // setTimeout(() =>{
//     //     element.classList.remove("red");
//     // },3000) xoa class red sau 3second

//     // setTimeout(() => {
//     //     element.classList.toggle("red");
//     // },3000); 
//     // nếu có class red thì nó sẽ xóa sau 3s còn 
//     // nếu không có class red thì nó sẽ thêm class red sau 3s 
//     // vd khac: làm chữ nhay liên tục tùy vào time chúng ta cho là bao nhiêu 
//    // setInterval(() => {
//    //     element.classList.toggle("red");
//    // },500); 


// });

// cách thêm class box vào trong cách thẻ 
// document.querySelector("div").classList.add("box");
// cách khác đó là : 

// const box = document.querySelectorAll("div");
// box.forEach(function(box) {
//     box.classList.add("box");
// })


