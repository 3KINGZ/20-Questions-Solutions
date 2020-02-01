let userInput = prompt("enter 1 to convert temp to celsius || enter other number to convert temp to fahrenheit");
userInput = Number(userInput);
let convertTemp;
if (userInput === 1) {
    let celsius = prompt("Enter a celsius value:");
    celsius = Number(celsius)
    convertTemp = (celsius * 9 / 5) + 32;
} else {
    let fahrenheit = prompt("Enter a Fahrenheit value:");
    fahrenheit = Number(fahrenheit)
    convertTemp = (fahrenheit - 32) * 5 / 9;
}
console.log(convertTemp);