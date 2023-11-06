var randomNumber = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber + ".png";
var randomLink = "images/" + randomDiceImage;
document.querySelectorAll("img")[0].setAttribute("src", randomLink);
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
var randomLink1 = "images/" + randomDiceImage1;
document.querySelectorAll("img")[1].setAttribute("src", randomLink1);
if (randomNumber > randomNumber1) {
    document.querySelector("h1").innerHTML = "<i class='fa fa-flag'></i> Player 1 Wins!";
}
else if (randomNumber < randomNumber1) {
    document.querySelector("h1").innerHTML = " Player 2 Wins! <i class='fa fa-flag'></i>";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}