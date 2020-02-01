let number = prompt("enter number to sho multiplicaion table");
let table = [];
const multiply = (num) => {
    for (let i = 0; i <= 12; i++) {
        table.push(num * i);
    }
}
multiply(number)
console.table(table);