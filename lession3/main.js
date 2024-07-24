// DOM (DOCUMENT OBJECT MODEL)

// getElementById => HTMLelement
// const myName = document.getElementById('name');
// myName.innerHTML = 'Le Van Hien';

// getElementByClassName => HTMLCollection
// const myModal = document.getElementsByClassName('my-modal');
// myModal[0].innerHTML= "Hello World";
// myModal[0].style.padding = '20px';
// myModal[0].style.color = '#fff';
// myModal[0].style.backgroundColor = 'red';

// querySelector => element
// const myName2 = document.querySelector('#name');
// myName2.innerHTML = 'Le Van Hien';
// myName2.style.color = 'blue';

// // querySelectorAll => NodeList
// const myModal = document.querySelectorAll('.my-modal');
// myModal[0].innerHTML= "Hello World";
// myModal[0].style.padding = '20px';
// myModal[0].style.color = '#fff';
// myModal[0].style.backgroundColor = 'red';

// Gan Thuoc Tinh vao DOM

// const btn = document.getElementById('btn');
// console.log([btn]);
// // btn.onclick= () => {
// //     alert('Hello World');
// // }

// // Gan Event vao DOM
// btn.addEventListener('click',()=>{
//     console.log('Day la click');
// })
// btn.addEventListener('mousedown',()=>{
//     console.log('Day la mousedown');
// })
// btn.addEventListener('mouseup',()=>{
//     console.log('Day la mouseup');
// })

// const demo = document.querySelector('#demo');
// const p = document.createElement('p');
// demo.appendChild(p);
// p.innerHTML = 'Hello World';

// const a = document.getElementById('a');
// // a.href="https://www.google.com";

// //BOM (BROWSER OBJECT MODEL)
// a.addEventListener('click',()=>{
//     window.location.href = "https://www.google.com";
// })

console.log("so 1");
setTimeout(() => {
  console.log("so 2");
}, 0);
console.log("so 3");

setTimeout(() => {
  console.log("so 1");
}, 1000);
setTimeout(() => {
  console.log("so 2");
}, 1000);
setTimeout(() => {
  console.log("so 3");
}, 1000);

for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
