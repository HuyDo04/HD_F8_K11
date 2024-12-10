
function printSquareNumber () {
    let n = parseFloat(prompt("Nhập n: "));
    if(n <= 0 || isNaN(n) || n === Infinity || n === -Infinity) {
        console.log ("Dữ liệu không hợp lệ");
    }
    for(let i = 0; i * i < n; i ++) { 
        console.log(i * i);
    }
}
printSquareNumber();
