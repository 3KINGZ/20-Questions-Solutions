const principal = Number(prompt("enter principal"))
const rate = Number(prompt("enter rate"));
const time = Number(prompt("enter time in years"));

const simpleInterest = (principal * rate * time) / 100;
console.log(simpleInterest);