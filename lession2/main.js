// Hàm Javascript
// 1. Declaration function
//Khai báo hàm
// const i = 10;
// function count(i) {
//   i++;
//   console.log(i);
// }
// // Gọi hàm
// count(i);

// // 2. Expression function
// // Khai báo hàm
// const printName = function () {
//   console.log("Le Van Hien");
// };

// // Gọi hàm
// printName();
// // 3. Arrow function
// // Khai báo hàm
// const age = 25;
// const printAge = (age) => {
//   console.log(age);
// };
// // Gọi hàm
// printAge(age);

// // 4. Immediate Invoked Function Expression (IIFE)
// (function () {
//   console.log("Hello World");
// })();

// 5.Generator function
function* generationNumber() {
  yield 1; // => {value: 1, done: false}
  yield 2; // => {value: 2, done: false}
  yield 3; //  => {value: 3, done: false}
}

const generator = generationNumber();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

//logic login ( username, password)
// yield gưi thong tin login lên server => true // false
//generator.next()
// yield 2 => gui email xác nhan
//(generator.next()
// yield 3 =>true => homepage/ false => loginPage



// Phuong thuc trong doi Tuong

const person = {
    name: 'Le Van Hien',
    getName: () => {
        // arrow function không có context (this)
        console.log(this.name);
    }
}

person.getName();



// DOM vs BOM
// function call back
// closure
// promise
// async await
// axios// fetch// window.get
// react// vue// angular
// nextjs//nuxtjs//
// astro

