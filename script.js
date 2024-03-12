const prompt = require("prompt-sync")()

console.log("Welcome to the Travel Quiz!");

let correctAnswers = 0;
const totalQuestions = 6;

const answer1 = prompt("What is the capital of France? ");
const correctAnswer1 = "PARIS";


if (answer1.toUpperCase() === correctAnswer1) {
    console.log("You got it correct!");
    correctAnswers ++;
} 
else {
    console.log("You got it wrong...");
}

const answer2 = prompt("How many stars are on flag of the USA? ");
const correctAnswer2 = "50";


if (answer2.toLowerCase() === correctAnswer2) {
    console.log("You got it correct!");
    correctAnswers ++;
} 
else {
    console.log("You got it wrong...");
}


const answer3 = prompt("Which country is Rome the capital of?");
const correctAnswer3 = "ITALY";


if (answer3.toUpperCase() === correctAnswer3) {
    console.log("You got it correct!");
    correctAnswers ++;
} 
else {
    console.log("You got it wrong...");
}

const answer4 = prompt("In which city can you find the Westminster, Chelsea and Kesington?");
const correctAnswer4 = "LONDON";


if (answer4.toUpperCase() === correctAnswer4) {
    console.log("You got it correct!");
    correctAnswers ++;
} 
else {
    console.log("You got it wrong...");
}

const answer5 = prompt("In which country you can find Barcelona?");
const correctAnswer5 = "SPAIN";


if (answer5.toUpperCase() === correctAnswer5) {
    console.log("You got it correct!");
    correctAnswers ++;
} 
else {
    console.log("You got it wrong...");
}

const answer6 = prompt("Which river flows through London?");
const correctAnswer6 = "THAMES";


if (answer6.toUpperCase() === correctAnswer6) {
    console.log("You got it correct!");
    correctAnswers ++;
} 
else {
    console.log("You got it wrong...");
}

const percent = Math.round((correctAnswers / totalQuestions) * 100);

console.log("You got", correctAnswers, "questions correct!");
console.log("You score", percent.toString() + "%");