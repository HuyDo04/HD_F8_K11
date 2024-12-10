function calcElectricityBill() {
    let kwh = parseFloat(prompt("Nhập số điện(kwh): "));
    if(kwh <= 0 || isNaN(kwh) || kwh === Infinity || kwh === -Infinity ) {
        return `Số điện không hợp lệ. Vui lòng nhập lại.`;
    }
    console.log("Số điện của bạn là: " + kwh + "kwh");
    let sumElecticity = 0;
    if(kwh <= 50) {
        sumElecticity = kwh * 1678;
    } else if(kwh <= 100) {
        sumElecticity = kwh * 1678 + (kwh - 50) * 1734;
    } else if(kwh <=200) {
        sumElecticity = 50 * 1678 + 50 * 1734 + (kwh - 100) * 2014;
    }else if(kwh <=300) {
        sumElecticity = 50 * 1678 + 50 * 1734 + 100 * 2014 + (kwh - 200) * 2536;
    }else if(kwh <=400) {
        sumElecticity = 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + (kwh - 300) * 2834;
    }else {
        sumElecticity = 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2834 + (kwh - 400) * 2927;
    }
    return `Số tiền điện phải trả là: ${sumElecticity} đồng.`
}
console.log(calcElectricityBill());