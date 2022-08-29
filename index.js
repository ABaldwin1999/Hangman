const alphabetArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Y","X","Z"];
const firstArray = ["AND","THRIFTLESS","THUMBSCREW","TOPAZ","TRANSCRIPT","TRANSPLANT","MNEMONIC","NYMPH"];
const secondArray = ["QUICK","OBTUSE","GNARLED","AVARICE","PUTRID","OBSIDIAN","VAGABOND","VANGUARD"];
const thirdArray = ["ANGER","TROUBLE","WICKED","FLAME","BEMUSED","ALWAYS"];
const fourthArray = ["BLOOM","CHEESE","BLOOD","JINGLE"];
const fifthArray =["FLOOD","SPILL","BLIND"];
const sixthArray =["EASTER","EASY","HAPPY","GREEN","LEEK"];
let score = 0;
let level = 0;
let mysteryWord = [];
let countCorrectGuesses =0;

const theGallows = document.querySelector('.gallows');
const alphaButtons = document.querySelector('.alphaButtons');
const guessBox = document.querySelector('.guessBox');
const chance = document.querySelector('.chance')


alphabetArray.forEach((letter) =>{
    alphaButtons.innerHTML +=`<button class="alphaButtons_button">${letter}</button>`;
})

const GetChances = (level) =>{
    let chances =0;
    if(0<level <=2){
        chances = 3;
    }
    else if(2<level<=4){
        chances = 4;
    }

    return chances;
}

const GetCurrentChances = () =>{
    return chanceBox.innerHTML;
}

const UpdateChanceBox = () =>{
    let currentChance = GetCurrentChances();
    chanceBox.innerHTML = currentChance-1;
}


const guessHandler = (button) =>{
    ////if all are true then return that we need to summon round handler again to start a new round
    console.log("hi");
    console.log(button.innerHTML);

    ///at bottom of function if(chances==0){}
}

const levelSelector = () =>{
    let Word = "" ;
    if(level===1){
        Word = firstArray[Math.floor(Math.random()*firstArray.length)];
    }
    else if(level ===2){
        Word = firstArray[0];//Word = secondArray[Math.random(0,firstArray.length)];
    }
    else if(level ===3){
        Word= secondArray[Math.random(0,firstArray.length)];
    }
    else if(level ===4){
        Word = secondArray[Math.random(0,firstArray.length)];
    }
    else if(level ===5){
        Word = secondArray[Math.random(0,firstArray.length)];
    }
    else if(level ===6){
        Word = secondArray[Math.random(0,firstArray.length)];
    }
    return Word;

}

const reset =()=>{
    chance.innerHTML += `<p>Chances:</p>
    <div class="chanceBox">${GetChances(level)}</div>
    <img src="" alt="">`;
    mysteryWord = Array.from(levelSelector());
    mysteryWord.forEach((letter) =>{
       guessBox.innerHTML +=`<p class="guessBox_spaces">${letter}</p>`;
    })
}

const initFirstRound =()=>{
    level++;
    reset();
}

const clearRound =()=>{
    score++;
    level++;
    chance.innerHTML = ``;
    guessBox.innerHTML= ``;
}

const resetButtons =()=>{

}

const roundHandler = () =>{
   if(getWinCondition()) {
    clearRound();
    reset();
    resetButtons();
    generatePopUp(1);
   }



}
const getWinCondition =() =>{
    let win = true;
    guessBox_spaces.forEach((space) => {
        if(space.style.color !=="black"){
            win =false;
        }
    })
    return win;
}
// const getTotalWinCondition =() =>{
//     let win = true;
//     guessBox_spaces.forEach((space) => {
//         win = true;
//         if(space.style.color !=="black"){
//             win =false;
//         }
//     })
//     return win;
// }



const generatePopUp =(instance) =>{
    switch (instance) {
        case 0:
            modal.style.display = "block";
            modalContent.innerHTML += `<h1 class="EndgameTitle">You're fired!</h1>
            <p class="EndgameContent"></p>
            <button class="nextStep">Away with you</button>`;
            break;
        case 1:
            modal.style.display = "block";
            modalContent.innerHTML += `<h1 class="EndgameTitle">Remove the body</h1>
            <p class="EndgameContent">A nice clean snap, no struggle: a good show for the crowds. Next!</p>
            <button class="nextStep">Day 2</button>`;
            break;
        default:
            break;
    }

}

const GenerateEndingOne = () =>{

}

const applyFailPenalty = ()=>{
    if(chanceBox.innerHTML ==0){///&& level=0 && no correct guesses have been made
        TriggerGameOver();
    }
    else{
        UpdateChanceBox();
    }
}

const TriggerGameOver =()=>{
    generatePopUp();

}
initFirstRound();

const guessBox_spaces = document.querySelectorAll('.guessBox_spaces');
const alphaButton = document.querySelectorAll('.alphaButtons_button');
const chanceBox = document.querySelector('.chanceBox');
const modal = document.getElementById("myModal");
const modalContent = document.querySelector('.modal_content');

alphaButton.forEach((button)=>{button.addEventListener('click', () => {
    if(mysteryWord.includes(button.innerHTML)){
        console.log(button.innerHTML);
        guessBox_spaces.forEach((space)=>{
            if(space.innerHTML ==button.innerHTML){
                space.style.color ="black";

            }})
    }
    else{
       applyFailPenalty(); 
    }
    button.disabled = true;
    button.style.opacity ="0.5";
    console.log(getWinCondition());
    roundHandler();
});
})

///It's been a long week. New callouses have grown on your hands, hands that smell of hemp and death.
///Your children shy away from your touch and you berate them, you resent their judging eyes 
///They will learn the value of honest work as you have done.

