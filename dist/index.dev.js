"use strict";

// const alphabetArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Y","X","Z"];
// const firstArray = ["THRIFTLESS","THUMBSCREW","TOPAZ","TRANSCRIPT","TRANSPLANT","MNEMONIC","NYMPH"];
// const secondArray = ["QUICK","OBTUSE","GNARLED","AVARICE","PUTRID","OBSIDIAN","VAGABOND","VANGUARD"];
// const thirdArray = [];
// const fourthArray = ["BLOOM","CHEESE","BLOOD"];
// const fifthArray =[];
// const sixthArray =["EASY","HAPPY","GREEN","LEEK"];
// let score = 0;
// let mysteryWord = [];
// let countCorrectGuesses =0;
// const theGallows = document.querySelector('.gallows');
// const alphaButtons = document.querySelector('.alphaButtons');
// const guessBox = document.querySelector('.guessBox');
// const chance = document.querySelector('.chance')
// alphabetArray.forEach((letter) =>{
//     alphaButtons.innerHTML +=`<button class="alphaButtons_button">${letter}</button>`;
// })
// const GetChances = (level) =>{
//     let chances =0;
//     if(1<=level<3){
//         chances = 3;
//     }
//     else if(3<=level<6){
//         chances = 4;
//     }
//     else if(level ===6){
//         chances =5;
//     }
//     return chances;
// }
// const GetCurrentChances = () =>{
//     return chanceBox.innerHTML;
// }
// const UpdateChanceBox = () =>{
//     let currentChance = GetCurrentChances();
//     chanceBox.innerHTML = currentChance-1;
// }
// const guessHandler = (button) =>{
//     ////if all are true then return that we need to summon round handler again to start a new round
//     console.log("hi");
//     console.log(button.innerHTML);
//     ///at bottom of function if(chances==0){}
// }
// const levelSelector = () =>{
//     let Word = "" ;
//     let level =0;
//     if(score===0){
//         Word = firstArray[0];//Math.random(0,firstArray.length)];
//         level = 1
//     }
//     //else if(0<score<=2){
//     //    const mysteryWord = secondArray[Math.random(0,firstArray.length)];
//    // }
//     return Word;//,level;
// }
// const roundHandler = () =>{
//     chance.innerHTML += `<p>Chances:</p>
//     <div class="chanceBox">${GetChances(1)}</div>
//     <img src="" alt="">`;
//     mysteryWord = Array.from(levelSelector());
//     mysteryWord.forEach((letter) =>{
//        guessBox.innerHTML +=`<p class="guessBox_spaces">${letter}</p>`;
//     })
//     if(getWinCondition() === true) {
//         score++;
//         guessBox.innerHTML+= ``;
//        }
// }
// const getWinCondition =() =>{
//     let win = true;
//     guessBox_spaces.forEach((space) => {
//         if(space.style.color !=="black"){
//             win =false;
//         }
//     })
//     return win;
// }
// const generatePopUp =(popUpState) =>{
//     if(popUpState ===0)
//         {
//             modal.style.display = "block";
//             modalContent.innerHTML += `<p class="EndgameState">You're fired!</p>
//             <button class="nextStep"></button>`;
//         }
// }
// const GenerateEndingOne = () =>{
// }
// const applyFailPenalty = ()=>{
//     if(chanceBox.innerHTML ==0){
//         TriggerGameOver();
//     }
//     else{
//         UpdateChanceBox();
//     }
// }
// const TriggerGameOver =()=>{
//     //if(level===1 && )
//     generatePopUp(0);
// }
// roundHandler();
// const guessBox_spaces = document.querySelectorAll('.guessBox_spaces');
// const alphaButton = document.querySelectorAll('.alphaButtons_button');
// const chanceBox = document.querySelector('.chanceBox');
// const modal = document.getElementById("myModal");
// const modalContent = document.querySelector('.modal_content');
// alphaButton.forEach((button)=>{button.addEventListener('click', () => {
//     if(mysteryWord.includes(button.innerHTML)){
//         console.log(button.innerHTML);
//         guessBox_spaces.forEach((space)=>{
//             if(space.innerHTML ==button.innerHTML){
//                 space.style.color ="black";
//             }})
//     }
//     else{
//        applyFailPenalty(); 
//     }
//     button.disabled = true;
//     button.style.opacity ="0.5";
//     getWinCondition();
//     console.log(getWinCondition());
// });
// })
var alphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "Y", "X", "Z"];
var firstArray = ["QUICK", "OBTUSE", "GNARLED", "AVARICE", "PUTRID", "OBSIDIAN", "VAGABOND", "VANGUARD"];
var secondArray = [];
var thirdArray = [];
var fourthArray = ["BLOOM", "CHEESE", "BLOOD"];
var fifthArray = [];
var sixthArray = [];
var seventhArray = [];
var score = 0;
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
  var level = 0;

  if (score === 0) {
    Word = firstArray[0]; //Math.random(0,firstArray.length)];

    level = 1;
  } //else if(0<score<=2){
  //    const mysteryWord = secondArray[Math.random(0,firstArray.length)];
  // }


  return Word; //,level;
};

var roundHandler = function roundHandler() {
  if (getWinCondition === true) {
    score++;
    guessBox.innerHTML += "";
  }

  chance.innerHTML += "<p>Chances:</p>\n    <div class=\"chanceBox\">".concat(GetChances(1), "</div>\n    <img src=\"\" alt=\"\">");
  mysteryWord = Array.from(levelSelector());
  mysteryWord.forEach(function (letter) {
    guessBox.innerHTML += "<p class=\"guessBox_spaces\">".concat(letter, "</p>");
  });
};

var getWinCondition = function getWinCondition() {
  var win = true;
  guessBox_spaces.forEach(function (space) {
    if (space.style.color !== "black") {
      win = false;
    }
  });
  return win;
};

var generatePopUp = function generatePopUp() {
  modal.style.display = "block";
  modal.innerHTML += "<p class=\"EndgameState\">You're fired!</p>\n    <button class=\"nextStep\"></button>";
};

var GenerateEndingOne = function GenerateEndingOne() {};

var applyFailPenalty = function applyFailPenalty() {
  if (chanceBox.innerHTML == 0) {
    TriggerGameOver();
  } else {
    UpdateChanceBox();
  }
};

var TriggerGameOver = function TriggerGameOver() {
  console.log("You lose");
  generatePopUp();
};

roundHandler();
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
    getWinCondition();
    console.log(getWinCondition());
  });
}); ///It's been a long week. New callouses have grown on your hands, hands that smell of hemp and death.
///Your children shy away from your touch and you berate them, you resent their judging eyes 
///They will learn the value of honest work as you have done.