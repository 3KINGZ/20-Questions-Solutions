const salary = prompt("enter salary");
let tax;
if (salary > 50000) {
    tax = 5 / 100 * salary
} else if (salary < 200000) {
    tax = 10 / 100 * salary
} else {
    tax = 15 / 100 * salary;
}
console.log(tax)