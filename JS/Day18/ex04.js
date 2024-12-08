function calcBMI () {
    let weight = parseFloat(prompt("Nhập cân nặng: "));
    let height = parseFloat(prompt("Nhập chiều cao: "));
    if(weight <= 0 || height <= 0 || isNaN(weight) || isNaN(height)) {
        return ` Dữ liệu không hợp lệ. Yêu cầu nhập lại.`;
    }
    console.log("Cân nặng: " + weight);
    console.log("Chiều cao: " + height);
    let bmi = weight / (height * height);
    console.log("Chỉ số BMI: " + bmi);
    if (bmi < 18.5) {
        return `Tình trạng: Thiếu cân`;
    } else if(bmi < 23) {
        return `Tình trạng: Bình thường`;
    } else if (bmi < 25) {
        return `Tình trạng: Thừa cân`;
    } else {
        return `Tình trạng: Béo phì`;
      }
}
console.log(calcBMI());