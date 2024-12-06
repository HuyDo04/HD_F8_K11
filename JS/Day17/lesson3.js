let a = 10;
let b = -50;

if(a > 0 && b > 0 || a < 0 && b < 0) {
    console.log("a, b cùng dấu.");
} else if(a > 0 && b < 0 || a < 0 && b > 0) {
    console.log("a, b khác dấu.");
} else {
    console.log("Một trong hai số bằng 0. Không xác định.");
}