let a = 10; 
let b = 20; 

// Hoán vị không dùng biến trung gian
a += b;
b = a - b;
a -= b;

console.log("a sau khi hoán vị =", a);
console.log("b sau khi hoán vị =", b);

