function conditionIsTriangle() {
    let a = parseFloat(prompt("Nhập cạnh thứ nhất: "));
    let b = parseFloat(prompt("Nhập cạnh thứ hai: "));
    let c = parseFloat(prompt("Nhập cạnh thứ ba: "));

    if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0 || a === Infinity || a === -Infinity || b === Infinity || b === -Infinity || c === Infinity || c === -Infinity) {
        return `Không hợp lệ. Yêu cầu nhập lại`;
    }
    if (a + b > c && a + c > b && b + c > a) {
       return `3 cạnh ${a},${b},${c} là 3 cạnh của một tam giác`;
    } else {
        return `3 cạnh ${a},${b},${c} không là 3 cạnh của một tam giác`;
    }
}

console.log(conditionIsTriangle());