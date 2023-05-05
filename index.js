var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png 

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png

// select the elements 
var image1 = document.querySelectorAll("img")[0];

// set attribute
image1.setAttribute("src", randomImageSource);

// do the same thing as above for the second image element

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

// change the text in h1 to show which player wins or if there was a draw
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "⛳️ Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "⛳️ Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "It's a Draw! 🏳️";
}