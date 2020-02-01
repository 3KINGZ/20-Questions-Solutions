let students = ["victor", "eric", "arinola", "david", "hassan", "doyin", "aisha", "kelechi"];

let attendance = [];
students.forEach(student => {
    attendance.push(prompt(`is ${student} in class today Yes/No`));
})

for (let i = 0; i < attendance.length; i++) {
    if (attendance[i] === "yes") {
        console.log(`${students[i]} was in school today`)
    } else {
        console.log(`${students[i]} wasn't in school today`)
    }
}