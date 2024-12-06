let a = 70;
let b = 10;
let c = 50;

if (a > b) {
    a = a + b;
    b = a - b;
    a = a - b;
}

if (a > c) {
    a = a + c;
    c = a - c;
    a = a - c;
}

if (b > c) {
    b = b+ c;
    c = b- c;
    b = b- c;
}
console.log("Thứ tự tăng dần: ", a, b, c);