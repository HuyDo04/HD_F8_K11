let jsContent = `Năm 1995: JavaScript được tạo ra bởi Brendan Eich chỉ trong khoảng 10 ngày khi ông làm việc tại Netscape. Tên ban đầu của Javascript là Mocha, sau đó được đổi tên thành LiveScript.
Năm 1996:Javascript được gửi đến ECMA(European Computer Manufacturers Association - Hội liên hiệp các nhà sản xuất máy tính Châu Âu)để chuẩn hóa và đổi tên thành JavaScript.
Năm 2009: ECMAScript 5 ra đời với nhiều cải tiến quan trọng như có thêm nhiều phương thức mới cho mảng và đối tượng và tính năng "strict mode". Cũng trong năm 2009 Ryan Dahl đã tạo ra Node.js, một nền tảng cho phép chạy javaScript ngoài trình duyệt. Điều này đã mở ra một cánh cửa mới cho JavaScript.
Năm 2015:ECMAScript 6 (ES6) ra đời,là phiên bản lớn nhất của ECMAScript với nhiều cải tiến và tính năng được coi là vượt bậc.
Năm 2016 - nay:Các phiên bản ECMAScript mới được ra mắt liên tục,với nhiều cải tiến và tính năng mới.Cho đến nay javaScript đã trở thành một trong số những ngôn ngữ được ưa chuộng và sử dụng nhiều nhất thế giới.`;

function printHighlight(content, keyword) {
    if(!content || !keyword || typeof content !== "string" || typeof keyword !== "string" || keyword.length > content.length) {
        return "Không hợp lệ";
    }

    let result = "";

    let lowerContent = content.toLowerCase();
    let lowerKeyword = keyword.toLowerCase();

    for(let i = 0; i< content.length; i++) {

        if(lowerContent.indexOf(lowerKeyword,i) === i) {
            result +=  `<b>${content.slice(i, i + keyword.length)}</b>`;
            i += keyword.length - 1;
        } else {
            result += content[i];
        }
    }

    return result;
}

console.log(printHighlight(jsContent, "javascript"));

// Năm 1995: <b>JavaScript</b> được tạo ra bởi Brendan Eich chỉ trong khoảng 10 ngày khi ông làm
// việc tại Netscape. Tên ban đầu của <b>Javascript</b> là Mocha, sau đó được đổi tên thành LiveScript.
// Năm 1996:<b>Javascript</b> được gửi đến ECMA (European Computer Manufacturers Association - Hội liên hiệp các nhà sản xuất máy tính Châu Âu) để chuẩn hóa và đổi tên thành <b>JavaScript</b>.
// Năm 2009: ECMAScript 5 ra đời với nhiều cải tiến quan trọng như có thêm nhiều phương thức mới cho mảng và đối tượng và tính năng "strict mode". Cũng trong năm 2009 Ryan Dahl đã tạo ra Node.js, một nền tảng cho phép chạy <b>javaScript</b> ngoài trình duyệt. Điều này đã mở ra một cánh cửa mới cho <b>JavaScript</b>.
// Năm 2015:ECMAScript 6 (ES6) ra đời,là phiên bản lớn nhất của ECMAScript với nhiều cải tiến và tính năng được coi là vượt bậc.
// Năm 2016 - nay: Các phiên bản ECMAScript mới được ra mắt liên tục, với nhiều cải tiến và tính năng mới.Cho đến nay <b>javaScript</b> đã trở thành một trong số những ngôn ngữ được ưa chuộng và sử dụng nhiều nhất thế giới.

const fixContent = (content) => {
    const punctuationMarks = [".", ",", ";", ":", "!", "?"];
    const openParentheses = ["(", "[", "{", "<"];
    const closeParentheses = [")", "]", "}", ">"];
    let result = ""; // Chuỗi kết quả
    let previousChar = ""; // Ký tự cuối cùng trong chuỗi kết quả

    for (let i = 0; i < content.length; i++) {
        const char = content[i];

        // Xử lý dấu câu
        if (punctuationMarks.includes(char)) {
            result += char;
            if (result[result.length - 1] !== " " && i + 1 < content.length && content[i + 1] !== " ") {
                result += " ";
            }
        }
        // Xử lý ký tự đặc biệt mở
        else if (openParentheses.includes(char)) {
            if (previousChar !== " ") {
                result += " ";
            }
            result += char;
        }
        // Xử lý ký tự đặc biệt đóng
        else if (closeParentheses.includes(char)) {
            result += char;
            if (i + 1 < content.length && content[i + 1] !== " ") {
                result += " ";
            }
        }
        // Xử lý khoảng trắng dư thừa
        else if (char === " ") {
            if (previousChar !== " ") {
                result += char;
            }
        }
        // Các ký tự khác
        else {
            result += char;
        }

        // Cập nhật ký tự cuối cùng của chuỗi kết quả
        previousChar = result[result.length - 1];
    }

    // Loại bỏ khoảng trắng thừa ở đầu và cuối chuỗi
    return result.trim();
};

// Kiểm tra

console.log(fixContent(printHighlight(jsContent, "javascript")));

