let a = 70;
let b = 10;
let c = 50;

if (a > b) {
    a = a + b;
    b = a - b;
    a = a - b;
}

if (b > c) {
    b = b + c;
    c = b - c;
    b = b - c;
}

if (a > b) {
    a = a + b;
    b = a - b;
    a = a - b;
}
console.log("Thứ tự tăng dần: ", a, b, c);