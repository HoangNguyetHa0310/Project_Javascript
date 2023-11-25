// event click 
// khi goij thì thêm on vào trước tên evnet


// var h1Elements = document.querySelectorAll("span");
// // click.onclick = function(e) {
// //     console.log(e.target);
// // }

// // cách lấy ra từng phần tử : đầu tiên đẩy nó hết vào 1 mảng
// //  sau đó cho for lặp qua từng phần tử 

// for (var i=0 ; i<h1Elements.length ; i++) {
//     h1Elements[i].onclick = function (e) {
//         console.log(e.target)
//     }
// }

// Bai 156 : cách lấy ra value của các ô input
// cách sự kiện lên trang web https://www.w3schools.com/jsref/dom_obj_event.asp để xem chi tiết 

// var inputvlue ;
// var inputelm = document.querySelector('select') ;
// inputelm.onchange = function (e) {
//     // inputvlue = e.target.value;
//     console.log(e.target.value);
// }

// // example different :
// document.onkeyup = (e) => {
//     console.log(e.which);
//     switch(e.which) {
//         case 27 :
//             console.log("Esc");
//             break;
//         case 13: 
//             console.log("Enter");
//             break;
//     }
// }


//  vi du bỏ những thứ mặc định của trình duyệt 

// là : preventDefault : ngăn chặn mặc định 
// vaf stopPropagation : ngăn chặn đường chuyển

// var aelm = document.links;
// // console.log(aelm)

// for (var i=0 ; i <aelm.length ; i++) {
//     aelm[i].onclick = function (e) {
//         // console.log(e.target.href);
//         if (!e.target.href.startsWith("https://www.facebook.com/")){
//             e.preventDefault();
//         }
//     }
// }


// là : preventDefault : ngăn chặn mặc định 
// var ulelm = document.querySelector("ul");
// ulelm.onmousedown = function (e) {
//     e.preventDefault();
// }
// ulelm.onclick = (e) => {
//     console.log(e.target);
// }

// vaf stopPropagation : ngăn chặn đường chuyển


document.querySelector("div").onclick = (e) => {
    console.log("div");
}


document.querySelector("button").onclick = (e) => {
    e.stopPropagation();
    console.log("click");
}


