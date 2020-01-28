var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomNumber2 = Math.random() * 5;
randomNumber2 = Math.floor(randomNumber2) + 1;

var dice1 = "images/dice" + randomNumber1 + ".png";
var dice2 = "images/dice" + randomNumber2 + ".png";

function roll() {
  document.querySelectorAll("img")[0].setAttribute("src", dice1);
  document.querySelectorAll("img")[1].setAttribute("src", dice2);

  if (randomNumber1 > randomNumber2) {
    document.getElementById("title").innerHTML = "Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.getElementById("title").innerHTML = "Player 2 Wins!";
  } else if (randomNumber1 === randomNumber2) {
    document.getElementById("title").innerHTML = "Draw!";
  }
}

document.getElementsByClassName("container")[1].onclick = function() {roll()};
