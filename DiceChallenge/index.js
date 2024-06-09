let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;
console.log(dice1, dice2);

let img1 = "dice" + dice1 + ".jpg";
let img2 = "dice" + dice2 + ".jpg";

let img1Src = "assets/" + img1;
let img2Src = "assets/" + img2;

document.querySelectorAll("img")[0].setAttribute("src", img1Src);
document.querySelectorAll("img")[1].setAttribute("src", img2Src);

if (dice1 > dice2) {
  document.getElementById("win").innerHTML = "Player 1 wins";
} else if (dice1 === dice2) {
  document.getElementById("win").innerHTML = "Draw";
} else {
  document.getElementById("win").innerHTML = "Player 2 wins";
}
