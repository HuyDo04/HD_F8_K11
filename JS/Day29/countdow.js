
// const countDate = new Date('January 1, 2026 00:00:00').getTime();

// function newYear() {
//     const now = new Date().getTime(); 
//     const gap = countDate - now; 

//     const second = 1000; 
//     const minute = second * 60; 
//     const hour = minute * 60; 
//     const day = hour * 24; 
   
//     const remainDay = Math.floor(gap / day); 
//     const remainHours = Math.floor((gap % day) / hour);
//     const remainMinute = Math.floor((gap % hour) / minute); 
//     const remainSeconds = Math.floor((gap % minute) / second); 

   

//     // phần dư của ngày sẽ là giờ
//     // phần dư của giờ sẽ là phút
//     // phần dư của phút sẽ là giây

//     if (gap <= 0) {
//         document.getElementById('countdown').innerHTML = "Chúc mừng năm mới 2026...";
//         clearInterval(setInterval (newYear,1000)); // Stop setInterval
//         return;
//     }

//     document.getElementById('countdown').innerHTML = 
//         `Còn ${remainDay} ngày ${remainHours} giờ ${remainMinute} phút ${remainSeconds} giây là đến Tết 2026...`;
// }

// // gọi làm hàm newYear mỗi s
// setInterval (newYear,1000);


const countDate = new Date('January 1, 2026 00:00:00').getTime();

function countdown () {
    const now = Date.now();
    const gap = countDate - now;

    const day = Math.floor(gap / 1000/ 60 / 60/ 24)
    const hours = Math.floor(day * 24 / 60 )
    console.log(gap % day / 60)
}

countdown()