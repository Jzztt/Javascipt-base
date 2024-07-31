const arr = [
    "img/anh0.png",
    "img/anh1.png",
    "img/anh2.png",
    "img/anh3.png",
    "img/anh4.png",
];
let index = 0;
let img = document.getElementById("img");

function next() {
  index++;
  if (index == arr.length) index = 0;
  img.src = arr[index];
}

function prev() {
  index--;
  if (index < 0) index = arr.length - 1;
  img.src = arr[index];
}

function start() {
  setInterval(() => {
    next();
  }, 3000);
}

// Mỗi khi bấm next hoặc previous thì thay đổi tên ảnh
// Khi thực hiện next (đi tiếp) hoặc previous( quay trở lại)
// => anh0, anh1, anh2, anh3, anh4.
// => 0,1,2,3,4
// 0->1 ( next) +1
// 1->2 ( next) +1
// 2->3 ( next) +1
// 3->4 ( next) +1
// 4->0 ( next)

// 4 -> 3 (previous)
// 3 -> 2 (previous)
// 2 -> 1 (previous)
// 1 -> 0 (previous)
// 0 -> 4 (previous)

// tạo 1 array => [anh0, anh1, anh2, anh3, anh4]
