function calcTax() {
  let wage = parseFloat(prompt("Nhập tiền lương (triệu đồng): "));
  if (wage <= 0 || isNaN(wage)) {
    return `Số tiền nhập vào không hợp lệ. Vui lòng nhập lại`
  }
  console.log("Tiền lương của bạn là: "+ wage +" triệu đồng");
  if(wage <= 11) {
    return `Không tính thuế`;
  } else if(wage > 11 && wage <= 25) {
    return `Thuế của bạn là : ${wage * 0.05} triệu đồng`; 
  } else if (wage > 25 && wage <= 50) {
    return `Thuế của bạn là : ${wage * 0.1} triệu đồng`; 
  } else if (wage > 50 && wage <= 80) {
    return `Thuế của bạn là : ${wage * 0.2} triệu đồng`;
  } else {
    return `Thuế của bạn là : ${wage * 0.3} triệu đồng`;
  }
}
console.log(calcTax());
