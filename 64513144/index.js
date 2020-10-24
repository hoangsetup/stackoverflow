const currentDate = new Date();
let year = currentDate.getFullYear();
// let month = currentDate.getMonth() < 10 ? "0" + (currentDate.getMonth() + 1) : currentDate.getMonth() + 1;
let month = (currentDate.getMonth() + 1) < 10 ? "0" + (currentDate.getMonth() + 1) : currentDate.getMonth() + 1;
let date = currentDate.getDate() < 10 ? "0" + currentDate.getDate() : currentDate.getDate();

console.log(year + "-" + month + "-" + date); // 2020-010-24
