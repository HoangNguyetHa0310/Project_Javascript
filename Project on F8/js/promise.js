// setTimeout( () => {
//     console.log('Dòng này sẽ in ra trước') // Đây là tác vụ đồng bộ (sync)
// },0);
// setTimeout(function () {
//     console.log('Dòng này sẽ in ra sau')
// }, 0)
// // setTimeout là tác vụ bất động bộ (async)

//  bài 159 : JSON
//  json là gì : nó không phải là 1 kiểu dữ liệu . 
    //nó là một định dạng chuỗi// 
//  nói đơn giải là nó Mã hóa và Giải mã 
//  mã hóa các kiểu khai báo như Number , null , ... 
//
// 

// // var json ='["javasript" , "php"]';
// var json ='{"name":"hoang" , "age":18 }';


// co 3 trang thai khi su dung promise 
// 1. pendding : là trạng thái mất bộ nhớ khi ta không chuyền resove () hay reject ()
// 2. fulilled : trang thai thanh cong 
// 3. reject : that bai 

// promise.resolve 
// promise.reject 
// promise.all

// var promise = new Promise (
//     // Excutor 
//     function (resove , reject )  { // rosove: thanh cong ; reject: that bai
//         // logic 
//         // thanh cong : resove ()
//         // that bai : reject ()
//         // resove();
//         reject ()
//     }
// );

// promise 
//     .then (function () {
//         console.log('successully');
//     })
//     .catch(function () {
//         console.log('failure');
//     })
//     .finally (function () {
//         console.log("done");
//     })

//     Trả lời phỏng vấn theo hướng dẫn của anh Sơn:
// 1.Khái niệm Promise: là 1 khái niệm sinh ra để xử lý thao tác bất đồng bộ (async).
//     Trc đó ta thường sử dụng callback, nhưng hay xảy ra tình trạng callback hell (khó nhìn và khó hiểu)
//      => ES6 sinh ra Promise để giải quyết callback hell.
// 2.Để tạo ra 1 Promise: dùng từ khóa new Promise() và trong constructor của nó ta sẽ truyền vào 1 executor function.
//     Trong này nhận 2 tham số dạng hàm: 
//     resolve (khi thành công) và reject (khi thất bại). 
//     Khi sd Promise: sử dụng các phương thức .then() hoặc .catch() đều nhận các callback function.
//     Khi promise được resolve thì sẽ lọt vào then, reject thì lọt vào catch  
// 3.trạng thái của Promise:
//     Pending (khi không resolve hay reject => memory leak) 
//     Fulfilled (đã resolve) : đã hoàn thành 
//     Rejected (đã reject) : thất bại

        // chain 
// function sleep (ms ) {
//     return new Promise((resolve) => {
//         setTimeout(resolve , ms);
//     });
// }

// sleep (1000)
//     .then (function() {
//         console.log(1);
//         return sleep(1000);
//     })
//     .then (function (){
//         console.log(2);
//         return sleep(1000);
//     })

//     .then (function (){
//         console.log(3);
//         return sleep(1000);
//     })

//     .then (function (){
//         console.log(4);
//         return sleep(1000);
//     })

// function notHell(value) {
//     return new Promise(function (resolve) {
//         // console.log(value);
//         resolve(value);
//     });
// }

// notHell(1)
//     .then(function (value) {
//         return value + 1; // 1 +1 = 2
//     })
//     .then(function (value) {
//         return value + 1; // 2+1 = 3
//     })
//     .then(function (value) {
//         return value + 1; // 3+1 = 4
//     })
//     .then(function (value) {
//         console.log(value + 1); // 4+1 = 5
//     });


// cách lấy bình luận phía backend và fontend


var users = [
    { id: 1, name: "hoang" },
    { id: 2, name: "nguyet" },
    { id: 3, name: "ha" }
];

var comments = [
    { id: 1, user_id: 1, content: 'aaaaaa' },
    { id: 2, user_id: 2, content: 'ssssss' },
    { id: 3, user_id: 3, content: 'dddddd' }
];

function getcommets() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(comments);
        }, 1000);
    });
}

function getUserById(userIDs) {
    return new Promise(function (resolve) {
        var result = users.filter(function (user) {
            return userIDs.includes(user.id);
        });
        setTimeout(function () {
            resolve(result);
        }, 1000);
    });
}

getcommets()
    .then(function (comments) {
        var userIDs = comments.map(function (comment) {
            return comment.user_id;
        });
        return getUserById(userIDs)
            .then(function (users) {
                return {
                    users: users,
                    comments: comments,
                };
            });
    })
    .then(function (data) {
        var commentBlock = document.getElementById('comment-block');
        var html = '';
        data.comments.forEach(function (comment) {
            var user = data.users.find(function (user) {
                return user.id === comment.user_id
            });
            html += `<li>${user.name} : ${comment.content}</li>`
        });
        commentBlock.innerHTML = html;
    });
