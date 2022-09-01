"use strict";

var alphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Y", "X", "Z"];
var firstArray = ["THRIFTLESS", "THUMBSCREW", "TOPAZ", "TRANSCRIPT", "TRANSPLANT", "MNEMONIC", "NYMPH"];
var secondArray = ["QUICK", "OBTUSE", "GNARLED", "AVARICE", "PUTRID", "OBSIDIAN", "VAGABOND", "VANGUARD"];
var thirdArray = ["ANGER", "TROUBLE", "WICKED", "FLAME", "BEMUSED", "ALWAYS"];
var fourthArray = ["BLOOM", "CHEESE", "BLOOD", "JINGLE"];
var fifthArray = ["FLOOD", "SPILL", "BLIND"];
var sixthArray = ["EASTER", "EASY", "HAPPY", "GREEN", "LEEK"];
var level = 0;
var mysteryWord = [];
var theGallows = document.querySelector('.gallows');
var alphaButtons = document.querySelector('.alphaButtons');
var guessBox = document.querySelector('.guessBox');
var backgroundColor = document.querySelector('.myBody');
var chance = document.querySelector('.chance');
alphabetArray.forEach(function (letter) {
  alphaButtons.innerHTML += "<button class=\"alphaButtons_button\">".concat(letter, "</button>");
});

var GetChances = function GetChances() {
  var chances = 0;

  if (0 < level < 3) {
    chances = 8;
  } else if (3 < level < 5) {
    chances = 6;
  } else if (4 < level < 7) {
    chances = 4;
  }

  return chances;
};

var GetCurrentChances = function GetCurrentChances(chanceBox) {
  return chanceBox.innerHTML;
};

var UpdateChanceBox = function UpdateChanceBox(chanceBox) {
  var currentChance = GetCurrentChances(chanceBox);
  chanceBox.innerHTML = currentChance - 1;
};

var levelSelector = function levelSelector() {
  var Word = "";

  if (level === 1) {
    Word = firstArray[Math.floor(Math.random() * firstArray.length)];
  } else if (level === 2) {
    Word = secondArray[Math.floor(Math.random() * secondArray.length)];
    document.body.style.backgroundColor = "linear-gradient(to bottom, rgba(31, 31, 31, 0.966), rgba(255, 0, 0, 0.105))";
  } else if (level === 3) {
    Word = thirdArray[Math.floor(Math.random() * thirdArray.length)];
    document.body.style.backgroundColor = "linear-gradient(to bottom, rgba(31, 31, 31, 0.966), rgba(255, 0, 0, 0.205))";
  } else if (level === 4) {
    Word = fourthArray[Math.floor(Math.random() * fourthArray.length)];
    document.body.style.backgroundColor = "linear-gradient(to bottom, rgba(31, 31, 31, 0.966), rgba(255, 0, 0, 0.405))";
  } else if (level === 5) {
    Word = fifthArray[Math.floor(Math.random() * fifthArray.length)];
    document.body.style.backgroundColor = "linear-gradient(to bottom, rgba(31, 31, 31, 0.966), rgba(255, 0, 0, 0.805))";
  } else if (level === 6) {
    Word = sixthArray[Math.floor(Math.random() * sixthArray.length)];
    document.body.style.backgroundColor = "linear-gradient(to bottom, rgba(31, 31, 31, 0.966), rgba(255, 0, 0, 0.905))";
  }

  console.log(Word);
  return Word;
};

var reset = function reset(guessBox_spaces) {
  chance.innerHTML += "<p>Chances:</p>\n    <div class=\"chanceBox\">".concat(GetChances(), "</div>\n    <img src=\"./drawing-hanging-rope-noose-clip-art-rope-cb4491c6062b371fdf6800a2d5efb98d.png\" alt=\"A small image of a noose\">");
  mysteryWord = Array.from(levelSelector());
  mysteryWord.forEach(function (letter) {
    guessBox.innerHTML += "<p class=\"guessBox_spaces\">".concat(letter, "</p>");
  });
  console.log(mysteryWord);
  guessBox_spaces.forEach(function (space) {
    space.style.color = "white";
  });
};

var initFirstRound = function initFirstRound() {
  generatePopUp(2);
  level++;
  chance.innerHTML += "<p>Chances:</p>\n    <div class=\"chanceBox\">".concat(GetChances(level), "</div>\n    <img src=\"./drawing-hanging-rope-noose-clip-art-rope-cb4491c6062b371fdf6800a2d5efb98d.png\" alt=\"a small image of a noose\">");
  mysteryWord = Array.from(levelSelector());
  mysteryWord.forEach(function (letter) {
    guessBox.innerHTML += "<p class=\"guessBox_spaces\">".concat(letter, "</p>");
  });
};

var clearRound = function clearRound(guessBox_spaces, chanceBox) {
  chance.innerHTML = '';
  guessBox.innerHTML = "";
  guessBox_spaces.forEach(function (space) {
    space.innerHTML = "";
  });
};

var resetButtons = function resetButtons() {
  alphaButton.forEach(function (button) {
    button.disabled = false;
    button.style.opacity = "1";
  });
};

var roundHandler = function roundHandler(guessBox_spaces, chanceBox) {
  if (getWinCondition(guessBox_spaces)) {
    level++;
    clearRound(guessBox_spaces, chanceBox);
    resetButtons();
    reset(guessBox_spaces);

    if (level === 6) {
      generatePopUp(-1, guessBox_spaces, chanceBox);
    } else {
      generatePopUp(1, guessBox_spaces, chanceBox);
    }
  }
};

var getWinCondition = function getWinCondition(guessBox_spaces) {
  var win = true;
  guessBox_spaces.forEach(function (space) {
    if (space.style.color !== "black") {
      win = false;
    }
  });
  return win;
};

var getTotalWinCondition = function getTotalWinCondition(guessBox_spaces) {
  var win = true;
  guessBox_spaces.forEach(function (space) {
    if (space.style.color == "black") {
      win = false;
    }
  });
  return win;
};

var closeContent = function closeContent() {
  modalContent.innerHTML = "";
  modal.style.display = "none";
};

var closePopUp = function closePopUp() {
  var close = document.querySelector('.close');
  close.addEventListener('click', function () {
    closeContent();
  });
};

var replay = function replay(guessBox_spaces, chanceBox) {
  var replay = document.querySelector('.replay');
  replay.addEventListener('click', function () {
    score = 0;
    level = 0;
    closeContent();
    clearRound(guessBox_spaces, chanceBox);
    resetButtons();
    initFirstRound();
  });
};

var nextPopUp = function nextPopUp(ending, guessBox_spaces, chanceBox) {
  var nextStep = document.querySelector('.nextStep');
  nextStep.addEventListener('click', function () {
    modalContent.innerHTML = "";

    switch (ending) {
      case 0:
        modalContent.innerHTML += generateEndingOne();
        break;

      case 1:
        modalContent.innerHTML += generateEndingTwo();
        break;

      case 2:
        modalContent.innerHTML += generateEndingThree();
        break;
    }

    replay(guessBox_spaces, chanceBox);
  });
};

var generateEndingOne = function generateEndingOne() {
  return "<h1 class=\"EndgameTitle\">A long walk home</h1>\n            <p class=\"EndgameContent\">You're a failure. A failure as a person; a failure as a parent. \n            There are seven hungry mouths to feed at home ond only a few pitiful coins in your pocket.\n            Through lack of skill or feebleness of spirit, you have lost the only employment you could find ...\n             with all legal avenues exhausted perhaps the next touch of the noose you feel will be around your neck. </p>\n            <button class=\"replay\">Replay?</button>";
};

var generateEndingTwo = function generateEndingTwo() {
  return "<h1 class=\"EndgameTitle\">A new beginning</h1>\n             <p class=\"EndgameContent\">You are, undeniably, a bad Hangman but perhaps you're not such a \n             bad person.</p>\n             <button class=\"replay\">Replay?</button>";
};

var generateEndingThree = function generateEndingThree() {
  return "<h1 class=\"EndgameTitle\">A job well done</h1>\n             <p class=\"EndgameContent\">Goodness! We'll need to get someone to move all those bodies! \n             Now THAT'S what I call stimulating the economy!</p>\n             <button class=\"replay\">Replay?</button>";
};

var generatePopUp = function generatePopUp(instance, guessBox_spaces, chanceBox) {
  switch (instance) {
    case 0:
      modal.style.display = "block";
      modalContent.innerHTML += "<h1 class=\"EndgameTitle\">You're fired!</h1>\n            <p class=\"EndgameContent\"></p>\n            <button class=\"nextStep\">Away with you</button>";

      if (getTotalWinCondition == true && level == 1) {
        nextPopUp(1, guessBox_spaces, chanceBox);
      } else {
        nextPopUp(0, guessBox_spaces, chanceBox);
      }

      break;

    case 1:
      modal.style.display = "block";
      modalContent.innerHTML += "<h1 class=\"EndgameTitle\">Remove the body!</h1> \n            <p class=\"EndgameContent\">A nice clean snap, no struggle: a good show for the crowds.</p>\n            <button class=\"close\">Next!</button>";
      closePopUp();
      break;

    case 2:
      modal.style.display = "block";
      modalContent.innerHTML += "<h1 class=\"EndgameTitle\">Welcome!</h1>\n            <p class=\"EndgameContent\">Congratulations on you're new job! \n            The game is the same but the rewards are far greater! A stable job in this economy?\n             It's more likely then you'd think, and new work is ALWAYS rolling in. Make yourself at home.</p>\n            <button class=\"close\">That was an ORDER</button>";
      closePopUp();
      break;

    default:
      modal.style.display = "block";
      modalContent.innerHTML += "<h1 class=\"EndgameTitle\">Remove the body!</h1> \n            <p class=\"EndgameContent\">A nice clean snap, no struggle: a good show for the crowds.</p>\n            <button class=\"nextStep\">Nothing more for today</button>";
      nextPopUp(2, guessBox_spaces, chanceBox);
      break;
  }
};

var playScream = function playScream() {
  var scream = new Audio('Down.mp3');
  scream.loop = false;
  audio.play();
};

var applyFailPenalty = function applyFailPenalty(guessBox_spaces, chanceBox) {
  if (chanceBox.innerHTML == 0) {
    ///&& level=0 && no correct guesses have been made
    TriggerGameOver(guessBox_spaces, chanceBox);
  } else {
    UpdateChanceBox(chanceBox);
  }
};

var TriggerGameOver = function TriggerGameOver(guessBox_spaces, chanceBox) {
  generatePopUp(0, guessBox_spaces, chanceBox);
};

var modal = document.getElementById("myModal");
var modalContent = document.querySelector('.modal_content');
initFirstRound();
var alphaButton = document.querySelectorAll('.alphaButtons_button');
alphaButton.forEach(function (button) {
  button.addEventListener('click', function () {
    var guessBox_spaces = document.querySelectorAll('.guessBox_spaces');
    var chanceBox = document.querySelector('.chanceBox');

    if (mysteryWord.includes(button.innerHTML)) {
      guessBox_spaces.forEach(function (space) {
        if (space.innerHTML == button.innerHTML) {
          space.style.color = "black";
        }
      });
    } else {
      applyFailPenalty(guessBox_spaces, chanceBox);
    }

    button.disabled = true;
    button.style.opacity = "0.5";
    roundHandler(guessBox_spaces, chanceBox);
  });
});