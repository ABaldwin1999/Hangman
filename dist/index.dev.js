"use strict";

var alphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Y", "X", "Z"];
var firstArray = ["AND", "THRIFTLESS", "THUMBSCREW", "TOPAZ", "TRANSCRIPT", "TRANSPLANT", "MNEMONIC", "NYMPH"];
var secondArray = ["QUICK", "OBTUSE", "GNARLED", "AVARICE", "PUTRID", "OBSIDIAN", "VAGABOND", "VANGUARD"];
var thirdArray = ["ANGER", "TROUBLE", "WICKED", "FLAME", "BEMUSED", "ALWAYS"];
var fourthArray = ["BLOOM", "CHEESE", "BLOOD", "JINGLE"];
var fifthArray = ["FLOOD", "SPILL", "BLIND"];
var sixthArray = ["EASTER", "EASY", "HAPPY", "GREEN", "LEEK"];
var score = 0;
var level = 0;
var mysteryWord = [];
var countCorrectGuesses = 0;
var theGallows = document.querySelector('.gallows');
var alphaButtons = document.querySelector('.alphaButtons');
var guessBox = document.querySelector('.guessBox');
var chance = document.querySelector('.chance');
alphabetArray.forEach(function (letter) {
  alphaButtons.innerHTML += "<button class=\"alphaButtons_button\">".concat(letter, "</button>");
});

var GetChances = function GetChances(level) {
  var chances = 0;

  if (0 < level <= 2) {
    chances = 3;
  } else if (2 < level <= 4) {
    chances = 4;
  }

  return chances;
};

var GetCurrentChances = function GetCurrentChances() {
  return chanceBox.innerHTML;
};

var UpdateChanceBox = function UpdateChanceBox() {
  var currentChance = GetCurrentChances();
  chanceBox.innerHTML = currentChance - 1;
};

var guessHandler = function guessHandler(button) {
  ////if all are true then return that we need to summon round handler again to start a new round
  console.log("hi");
  console.log(button.innerHTML); ///at bottom of function if(chances==0){}
};

var levelSelector = function levelSelector() {
  var Word = "";

  if (level === 1) {
    Word = firstArray[Math.floor(Math.random() * firstArray.length)];
  } else if (level === 2) {
    Word = firstArray[0]; //Word = secondArray[Math.random(0,firstArray.length)];
  } else if (level === 3) {
    Word = secondArray[Math.random(0, firstArray.length)];
  } else if (level === 4) {
    Word = secondArray[Math.random(0, firstArray.length)];
  } else if (level === 5) {
    Word = secondArray[Math.random(0, firstArray.length)];
  } else if (level === 6) {
    Word = secondArray[Math.random(0, firstArray.length)];
  }

  return Word;
};

var reset = function reset() {
  chance.innerHTML += "<p>Chances:</p>\n    <div class=\"chanceBox\">".concat(GetChances(level), "</div>\n    <img src=\"\" alt=\"\">");
  mysteryWord = Array.from(levelSelector());
  mysteryWord.forEach(function (letter) {
    guessBox.innerHTML += "<p class=\"guessBox_spaces\">".concat(letter, "</p>");
  });
};

var initFirstRound = function initFirstRound() {
  level++;
  reset();
};

var clearRound = function clearRound() {
  score++;
  level++;
  chance.innerHTML = "";
  guessBox.innerHTML = "";
};

var resetButtons = function resetButtons() {};

var roundHandler = function roundHandler() {
  if (getWinCondition()) {
    clearRound();
    reset();
    resetButtons();
    generatePopUp(1);
  }
};

var getWinCondition = function getWinCondition() {
  var win = true;
  guessBox_spaces.forEach(function (space) {
    if (space.style.color !== "black") {
      win = false;
    }
  });
  return win;
}; // const getTotalWinCondition =() =>{
//     let win = true;
//     guessBox_spaces.forEach((space) => {
//         win = true;
//         if(space.style.color !=="black"){
//             win =false;
//         }
//     })
//     return win;
// }


var generatePopUp = function generatePopUp(instance) {
  switch (instance) {
    case 0:
      modal.style.display = "block";
      modalContent.innerHTML += "<h1 class=\"EndgameTitle\">You're fired!</h1>\n            <p class=\"EndgameContent\"></p>\n            <button class=\"nextStep\">Away with you</button>";
      break;

    case 1:
      modal.style.display = "block";
      modalContent.innerHTML += "<h1 class=\"EndgameTitle\">Remove the body</h1>\n            <p class=\"EndgameContent\">A nice clean snap, no struggle: a good show for the crowds. Next!</p>\n            <button class=\"nextStep\">Day 2</button>";
      break;

    default:
      break;
  }
};

var GenerateEndingOne = function GenerateEndingOne() {};

var applyFailPenalty = function applyFailPenalty() {
  if (chanceBox.innerHTML == 0) {
    ///&& level=0 && no correct guesses have been made
    TriggerGameOver();
  } else {
    UpdateChanceBox();
  }
};

var TriggerGameOver = function TriggerGameOver() {
  generatePopUp();
};

initFirstRound();
var guessBox_spaces = document.querySelectorAll('.guessBox_spaces');
var alphaButton = document.querySelectorAll('.alphaButtons_button');
var chanceBox = document.querySelector('.chanceBox');
var modal = document.getElementById("myModal");
var modalContent = document.querySelector('.modal_content');
alphaButton.forEach(function (button) {
  button.addEventListener('click', function () {
    if (mysteryWord.includes(button.innerHTML)) {
      console.log(button.innerHTML);
      guessBox_spaces.forEach(function (space) {
        if (space.innerHTML == button.innerHTML) {
          space.style.color = "black";
        }
      });
    } else {
      applyFailPenalty();
    }

    button.disabled = true;
    button.style.opacity = "0.5";
    console.log(getWinCondition());
    roundHandler();
  });
}); ///It's been a long week. New callouses have grown on your hands, hands that smell of hemp and death.
///Your children shy away from your touch and you berate them, you resent their judging eyes 
///They will learn the value of honest work as you have done.