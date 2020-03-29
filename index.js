// Generating random numbers
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

// selecting images
var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

// creating sources
var source1 = "images/dice" + randomNumber1 + ".png";
var source2 = "images/dice" + randomNumber2 + ".png";

// targeting h1
var h1text = document.querySelector("h1");

// h1 text logic
if (randomNumber1 > randomNumber2) {
  h1text.innerText = "Player 1 Won!";
} else if (randomNumber1 === randomNumber2) {
  h1text.innerText = "Tie!";
} else {
  h1text.innerText = "Player 2 Won";
}

// images logic
image1.setAttribute("src", source1);
image2.setAttribute("src", source2);
