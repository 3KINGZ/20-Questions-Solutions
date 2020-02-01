let words = ["beautiful", "carefull", "politics", "design", "programming", "html", "css", "javascript", "python", "netlify", "deploy", "github", "vscode", "brackets"];

let word = words[Math.floor(Math.random() * words.length)];
// let userInput = prompt(`type this in reverse "${word}"`);
let check = word.split(" ").reverse().join("");
console.log(check)
//== word ? "Correct" : "Wrong";