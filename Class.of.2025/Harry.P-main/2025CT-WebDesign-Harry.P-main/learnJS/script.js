let enterName = prompt("Please enter your name")
let enterNumber;
let computerGuess = randomNum();
let feedback = computerGuess;


if (enterName == "joe") {
    enterName = "joe mama"
}
if (enterName == "wesley") {
    enterName = "Mike Wesley"
}


loadDIV();
setTimeout(guessNumber, 1500)

function randomNum() {
return Math.floor(Math.random() * (10-1+1)+1)

}

function loadDIV () {
    document.getElementById("ScriptThisDIV").innerHTML = "<H1>Hello " + enterName + "<H1>"
    document.getElementById("ScriptThisDIV").innerHTML = document.getElementById("ScriptThisDIV").innerHTML + "<H2>Guess a number from 1 to 10</H2>"
}

function guessNumber() {
    let enterNumber = prompt("Enter da number");
    addNum();

}

function addNum(){
    document.getElementById("ScriptThisDIV").innerHTML = document.getElementById("ScriptThisDIV").innerHTML + feedback
}
