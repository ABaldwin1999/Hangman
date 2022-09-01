const alphabetArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "Y",
  "X",
  "Z",
];
const firstArray = [
  "THRIFTLESS",
  "THUMBSCREW",
  "TOPAZ",
  "TRANSCRIPT",
  "TRANSPLANT",
  "MNEMONIC",
  "NYMPH",
];
const secondArray = [
  "QUICK",
  "OBTUSE",
  "GNARLED",
  "AVARICE",
  "PUTRID",
  "OBSIDIAN",
  "VAGABOND",
  "VANGUARD",
];
const thirdArray = ["ANGER", "TROUBLE", "WICKED", "FLAME", "BEMUSED", "ALWAYS"];
const fourthArray = ["BLOOM", "CHEESE", "BLOOD", "JINGLE"];
const fifthArray = ["FLOOD", "SPILL", "BLIND"];
const sixthArray = ["EASTER", "EASY", "HAPPY", "GREEN", "LEEK"];
let level = 0;
let mysteryWord = [];

const theGallows = document.querySelector(".gallows");
const alphaButtons = document.querySelector(".alphaButtons");
const guessBox = document.querySelector(".guessBox");
const backgroundColor = document.querySelector(".myBody");
const chance = document.querySelector(".chance");

alphabetArray.forEach((letter) => {
  alphaButtons.innerHTML += `<button class="alphaButtons_button">${letter}</button>`;
});

const GetChances = () => {
  let chances = 0;
  if (0 < level < 3) {
    chances = 8;
  } else if (3 < level < 5) {
    chances = 6;
  } else if (4 < level < 7) {
    chances = 4;
  }
  return chances;
};

const GetCurrentChances = (chanceBox) => {
  return chanceBox.innerHTML;
};

const UpdateChanceBox = (chanceBox) => {
  let currentChance = GetCurrentChances(chanceBox);
  chanceBox.innerHTML = currentChance - 1;
};

const levelSelector = () => {
  let Word = "";
  if (level === 1) {
    Word = firstArray[Math.floor(Math.random() * firstArray.length)];
  } else if (level === 2) {
    Word = secondArray[Math.floor(Math.random() * secondArray.length)];
    document.body.style.backgroundColor =
      "linear-gradient(to bottom, rgba(31, 31, 31, 0.966), rgba(255, 0, 0, 0.105))";
  } else if (level === 3) {
    Word = thirdArray[Math.floor(Math.random() * thirdArray.length)];
    document.body.style.backgroundColor =
      "linear-gradient(to bottom, rgba(31, 31, 31, 0.966), rgba(255, 0, 0, 0.205))";
  } else if (level === 4) {
    Word = fourthArray[Math.floor(Math.random() * fourthArray.length)];
    document.body.style.backgroundColor =
      "linear-gradient(to bottom, rgba(31, 31, 31, 0.966), rgba(255, 0, 0, 0.405))";
  } else if (level === 5) {
    Word = fifthArray[Math.floor(Math.random() * fifthArray.length)];
    document.body.style.backgroundColor =
      "linear-gradient(to bottom, rgba(31, 31, 31, 0.966), rgba(255, 0, 0, 0.805))";
  } else if (level === 6) {
    Word = sixthArray[Math.floor(Math.random() * sixthArray.length)];
    document.body.style.backgroundColor =
      "linear-gradient(to bottom, rgba(31, 31, 31, 0.966), rgba(255, 0, 0, 0.905))";
  }
  console.log(Word);
  return Word;
};

const reset = (guessBox_spaces) => {
  chance.innerHTML += `<p>Chances:</p>
    <div class="chanceBox">${GetChances()}</div>
    <img src="./drawing-hanging-rope-noose-clip-art-rope-cb4491c6062b371fdf6800a2d5efb98d.png" alt="A small image of a noose">`;
  mysteryWord = Array.from(levelSelector());
  mysteryWord.forEach((letter) => {
    guessBox.innerHTML += `<p class="guessBox_spaces">${letter}</p>`;
  });
  console.log(mysteryWord);
  guessBox_spaces.forEach((space) => {
    space.style.color = "white";
  });
};

const initFirstRound = () => {
  generatePopUp(2);
  level++;
  chance.innerHTML += `<p>Chances:</p>
    <div class="chanceBox">${GetChances(level)}</div>
    <img src="./drawing-hanging-rope-noose-clip-art-rope-cb4491c6062b371fdf6800a2d5efb98d.png" alt="a small image of a noose">`;
  mysteryWord = Array.from(levelSelector());
  mysteryWord.forEach((letter) => {
    guessBox.innerHTML += `<p class="guessBox_spaces">${letter}</p>`;
  });
};

const clearRound = (guessBox_spaces, chanceBox) => {
  chance.innerHTML = "";
  guessBox.innerHTML = "";
  guessBox_spaces.forEach((space) => {
    space.innerHTML = "";
  });
};

const resetButtons = () => {
  alphaButton.forEach((button) => {
    button.disabled = false;
    button.style.opacity = "1";
  });
};

const roundHandler = (guessBox_spaces, chanceBox) => {
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

const getWinCondition = (guessBox_spaces) => {
  let win = true;
  guessBox_spaces.forEach((space) => {
    if (space.style.color !== "black") {
      win = false;
    }
  });
  return win;
};

const getTotalWinCondition = (guessBox_spaces) => {
  let win = true;
  guessBox_spaces.forEach((space) => {
    if (space.style.color == "black") {
      win = false;
    }
  });
  return win;
};

const closeContent = () => {
  modalContent.innerHTML = "";
  modal.style.display = "none";
};

const closePopUp = () => {
  const close = document.querySelector(".close");
  close.addEventListener("click", () => {
    closeContent();
  });
};
const replay = (guessBox_spaces, chanceBox) => {
  const replay = document.querySelector(".replay");
  replay.addEventListener("click", () => {
    score = 0;
    level = 0;
    closeContent();
    clearRound(guessBox_spaces, chanceBox);
    resetButtons();
    initFirstRound();
  });
};

const nextPopUp = (ending, guessBox_spaces, chanceBox) => {
  const nextStep = document.querySelector(".nextStep");
  nextStep.addEventListener("click", () => {
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

const generateEndingOne = () => {
  return `<h1 class="EndgameTitle">A long walk home</h1>
            <p class="EndgameContent">You're a failure. A failure as a person; a failure as a parent. 
            There are seven hungry mouths to feed at home ond only a few pitiful coins in your pocket.
            Through lack of skill or feebleness of spirit, you have lost the only employment you could find ...
             with all legal avenues exhausted perhaps the next touch of the noose you feel will be around your neck. </p>
            <button class="replay">Replay?</button>`;
};
const generateEndingTwo = () => {
  return `<h1 class="EndgameTitle">A new beginning</h1>
             <p class="EndgameContent">You are, undeniably, a bad Hangman but perhaps you're not such a 
             bad person.</p>
             <button class="replay">Replay?</button>`;
};
const generateEndingThree = () => {
  return `<h1 class="EndgameTitle">A job well done</h1>
             <p class="EndgameContent">Goodness! We'll need to get someone to move all those bodies! 
             Now THAT'S what I call stimulating the economy!</p>
             <button class="replay">Replay?</button>`;
};

const generatePopUp = (instance, guessBox_spaces, chanceBox) => {
  switch (instance) {
    case 0:
      modal.style.display = "block";
      modalContent.innerHTML += `<h1 class="EndgameTitle">You're fired!</h1>
            <p class="EndgameContent"></p>
            <button class="nextStep">Away with you</button>`;
      if (getTotalWinCondition == true && level == 1) {
        nextPopUp(1, guessBox_spaces, chanceBox);
      } else {
        nextPopUp(0, guessBox_spaces, chanceBox);
      }
      break;
    case 1:
      modal.style.display = "block";
      modalContent.innerHTML += `<h1 class="EndgameTitle">Remove the body!</h1> 
            <p class="EndgameContent">A nice clean snap, no struggle: a good show for the crowds.</p>
            <button class="close">Next!</button>`;
      closePopUp();
      break;
    case 2:
      modal.style.display = "block";
      modalContent.innerHTML += `<h1 class="EndgameTitle">Welcome!</h1>
            <p class="EndgameContent">Congratulations on you're new job! 
            The game is the same but the rewards are far greater! A stable job in this economy?
             It's more likely then you'd think, and new work is ALWAYS rolling in. Make yourself at home.</p>
            <button class="close">That was an ORDER</button>`;
      closePopUp();
      break;
    default:
      modal.style.display = "block";
      modalContent.innerHTML += `<h1 class="EndgameTitle">Remove the body!</h1> 
            <p class="EndgameContent">A nice clean snap, no struggle: a good show for the crowds.</p>
            <button class="nextStep">Nothing more for today</button>`;
      nextPopUp(2, guessBox_spaces, chanceBox);
      break;
  }
};

const applyFailPenalty = (guessBox_spaces, chanceBox) => {
  if (chanceBox.innerHTML == 0) {
    ///&& level=0 && no correct guesses have been made
    TriggerGameOver(guessBox_spaces, chanceBox);
  } else {
    UpdateChanceBox(chanceBox);
  }
};

const TriggerGameOver = (guessBox_spaces, chanceBox) => {
  generatePopUp(0, guessBox_spaces, chanceBox);
};

const modal = document.getElementById("myModal");
const modalContent = document.querySelector(".modal_content");
initFirstRound();

const alphaButton = document.querySelectorAll(".alphaButtons_button");

alphaButton.forEach((button) => {
  button.addEventListener("click", () => {
    const guessBox_spaces = document.querySelectorAll(".guessBox_spaces");
    const chanceBox = document.querySelector(".chanceBox");
    if (mysteryWord.includes(button.innerHTML)) {
      guessBox_spaces.forEach((space) => {
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
