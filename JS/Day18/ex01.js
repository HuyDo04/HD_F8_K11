function calcTax() {
  let wage = parseFloat(prompt("Nhập tiền lương (triệu đồng): "));
  if (wage <= 0 || isNaN(wage) || wage === Infinity || wage === -Infinity) {
    return `Số tiền nhập vào không hợp lệ. Vui lòng nhập lại`
  }
  console.log("Tiền lương của bạn là: "+ wage +" triệu đồng");
  let tax = 0;
  if (wage <= 11) {
    return `Không tính thuế`;
  } else if (wage > 11 && wage <= 25) {
    tax = (wage - 11) * 0.05;
  } else if (wage > 25 && wage <= 50) {
    tax = (25 - 11) * 0.05 + (wage - 25) * 0.1;
  } else if (wage > 50 && wage <= 80) {
    tax = (25 - 11) * 0.05 + (50 - 25) * 0.1 + (wage - 50) * 0.2;
  } else {
    tax = (25 - 11) * 0.05 + (50 - 25) * 0.1 + (80 - 50) * 0.2 + (wage - 80) * 0.3;
  }
  return `Tiền thuế của bạn là: ${tax} triệu đồng.`;
}
console.log(calcTax());

