"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var alphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Y", "X", "Z"];
var firstArray = ["QUICK", "OBTUSE", "GNARLED", "AVARICE", "PUTRID", "OBSIDIAN"];
var secondArray = [];
var thirdArray = [];
var fourthArray = [];
var fifthArray = [];
var sixthArray = [];
var score = 0;
var theGallows = document.querySelector('.gallows');
var alphaButtons = document.querySelector('.alphaButtons');
var guessBox = document.querySelector('.guessBox');
alphabetArray.forEach(function (letter) {
  alphaButtons.innerHTML += "<button class=\"alphaButtons_button\">".concat(letter, "</button>");
});

var guessHandler = function guessHandler() {////if all are true then return that we need to summon round handler again to start a new round
};

var levelSelector = function levelSelector() {
  var Word = "";

  if (score === 0) {
    Word = firstArray[0]; //Math.random(0,firstArray.length)];
  } //else if(0<score<=2){
  //    const mysteryWord = secondArray[Math.random(0,firstArray.length)];
  // }


  return Word;
};

var roundHandler = function roundHandler() {
  if (wonRound === true) {
    score++;
    wonRound = (_readOnlyError("wonRound"), false);
    guessBox.innerHTML += "";
  }

  var mysteryWord = levelSelector();
  guessBox.innerHTML += "fgffghf";
  console.log(mysteryWord);
};

var wonRound = function wonRound() {
  return false;
};

var GameOver = function GameOver() {};

var alphaButton = document.querySelectorAll('.alphaButtons_button');
roundHandler(); //alphaButton.