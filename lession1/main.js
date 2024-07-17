// var, let, const.
// Trong javascript thì 3 loại scope

// I.Đầu mục so sánh
// + Scope (Phạm vi)
// + Declareable (Khởi tạo lại)
// + Reassignable (Gán lại giá trị)

// 1. Global scope
// var
// có truy từ  bất kì vị trí nào (Global)
// có thể khởi tạo lại
// có thể gán lại giá trị
// kéo phần khai báo len đầu và giá trị là undefine

// var a = 10;
// var a = 11;
// var a -> Khởi tạo biến a
// a = 10 -> gán giá trị
// console.log(a);

// 2. Block scope
// let
// Chỉ có thể truy khi cùng cùng 1 scope {}
// Không thể khởi tạo lại
// Gán lại được giá trị
// TDZ temporal dead zone

// let age = 25;
// age = 30;
// console.log("age", age);
// var getName = () => {
//     var firstName = "Lê ";
//     if(true){
//         let Lastname =  "Hiển";
//         console.log('log2', firstName + Lastname);
//     }
//     console.log('log1', firstName + Lastname);
// }
// getName();

// const
// Chỉ có thể truy khi cùng cùng 1 scope {}
// Không thể khởi tạo lại biến
// không thể gán lại giá trị
// TDZ temporal dead zone

// const address = 'Ha Noi';
// address = "Vinh Phuc";
// console.log("address", address);

// TDZ temporal dead zone

// su dung biến
// console.log('mssv',mssv);

// // Khởi tạo biến
// const mssv = 'PH17569';

// let age = 16;

// let number = 20;

// if(age > 18){
//     console.log('có thể truy cập');
// }else{
//     console.log('không thể truy cập');
// }

// datatype (Kiểu dữ liệu)
// Kiểu dữ liệu nguyên thủy
// 1. String (Chuỗi)
// var a = "Hello";
// // 2. Number ( số)
// var b = 10;
// // 3. Boolean (True, False)
// var c = true;
// // 4. undefine
// var d = undefined;
// // 5. null
// var e = null;
// // 6. symbol
// var f = Symbol();
// console.log(f);

// // Kiểu dữ liệu phức tạp
// // Object
// const person = {
//     name: "Lê Văn Hiển",
//     getName: function(){
//         console.log(this.name);
//     }
// }
// // console.log(typeof(person));
// // function
// const printName = ( ) => {
//     console.log('Hello');
// }
// // console.log(typeof(printName));
// // array
// const array = [1,2,3,4,5,6,7,8];
// console.log(typeof(array));


const user1 = {
    name: 'John',
}
const user2 = {
    name: 'John',
}
console.log(user1.name === user2.name);