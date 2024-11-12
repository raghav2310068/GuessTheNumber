"use strict";
/*
// document.querySelector('atributeKaNaam').textContent  -->this is used to select a id or class or tag or attribute from the html file

console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "correct answer....";  --> yha pr humne querry select kri or usme jo content  tha uski jagah pr nya content rkh diya ...
document.querySelector(".message").textContent = "correct answer....";

document.querySelector(".score").textContent = 13;

document.querySelector(".number").textContent = 10;

// document.querySelector(".guess").value = 23;   --> input wla filed pr agar value select/insert javscript ki help se krni h to .value ka use hoga .textcontent ka nhi

document.querySelector(".guess").value = 23;
console.log((document.querySelector(".guess").value = 23));
*/

// document.querySelector(".check").addEventListener("click", function () {
//   console.log(document.querySelector(".guess").value);
// });  -> phelee check nam ki querry ko select kra ... fir uspr ek eventlistenner nam ka function lagaya ..jo ki click krne pr function ko perform krta h

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
document.querySelector(".highscore").textContent = highScore;

document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //   console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ no value";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 correct number";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? " 📈 too high !!!!" : "📉 too low !";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 you lost ! ";
      document.querySelector(".score").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".message").textContent = "start guessing..";
  document.querySelector(".score").textContent = 20;
  document.querySelector(".guess").value = " ";
});
