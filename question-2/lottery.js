let lottery = [];

for (let i = 0; i < 3; i++) {
    lottery.push(Math.floor(Math.random() * 9));
}

console.log(lottery.join(" "));

let check = lottery.includes(7) ? "Congratulations" : "Try again next time";
console.log(check)