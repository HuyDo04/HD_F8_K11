const students = [
    { name: "Nguyen Van A", score: 9 },
    { name: "Tran Thi B", score: 7 },
    { name: "Le Van C", score: 5 },
    { name: "Pham Thi D", score: 3 },
    { name: "Doan Van E", score: 10 },
    { name: "Hoang Thi F", score: 6 },
  ];
  
let highest = students[0];
let lowest = students[0];
const groups = { A: [], B: [], C: [], D: [] };

function maxScore () {
    for (let i = 0; i < students.length; i++) {
        if(students[i].score > highest.score) {
            highest = students[i];
        }
    }
    return {highest};
}

function minScore () {
    for (let i = 0; i < students.length; i++) {
        if(students[i].score < lowest.score) {
            lowest = students[i];
        }
    }
    return {lowest};
}

function groupStudents () {
    for (let i = 0; i < students.length; i++) {
        if(students[i].score >= 8) {
            groups.A.push(students[i]);
        } else if (students[i].score >= 6) {
            groups.B.push(students[i]);
        } else if (students[i].score >= 4) {
            groups.C.push(students[i]);
        }else {
            groups.D.push(students[i]);
        }
    }
    return {groups};
}

console.log(maxScore(), minScore(), groupStudents());