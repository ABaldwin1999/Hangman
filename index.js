const alphabetArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Y","X","Z"];
const firstArray = ["QUICK","OBTUSE","GNARLED","AVARICE","PUTRID","OBSIDIAN","VAGABOND","VANGUARD"];
const secondArray = [];
const thirdArray = [];
const fourthArray = ["BLOOM","CHEESE","BLOOD"];
const fifthArray =[];
const sixthArray =[];
const seventhArray =[];
let score = 0;
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
    let level =0;
    if(score===0){
        Word = firstArray[0];//Math.random(0,firstArray.length)];
        level = 1
    }
    //else if(0<score<=2){
    //    const mysteryWord = secondArray[Math.random(0,firstArray.length)];
   // }
    return Word;//,level;

}

const roundHandler = () =>{
   if(getWinCondition === true) {
    score++;
    guessBox.innerHTML+= ``;
   }
    chance.innerHTML += `<p>Chances:</p>
    <div class="chanceBox">${GetChances(1)}</div>
    <img src="" alt="">`;
    mysteryWord = Array.from(levelSelector());
    mysteryWord.forEach((letter) =>{
       guessBox.innerHTML +=`<p class="guessBox_spaces">${letter}</p>`;
    })
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

const generatePopUp =() =>{
    modal.style.display = "block";
    modal.innerHTML += `<p class="EndgameState">You're fired!</p>
    <button class="nextStep"></button>`;
}

const GenerateEndingOne = () =>{

}

const applyFailPenalty = ()=>{
    if(chanceBox.innerHTML ==0){
        TriggerGameOver();
    }
    else{
        UpdateChanceBox();
    }
}

const TriggerGameOver =()=>{
    console.log("You lose");
    generatePopUp();

}
roundHandler();

const guessBox_spaces = document.querySelectorAll('.guessBox_spaces');
const alphaButton = document.querySelectorAll('.alphaButtons_button');
const chanceBox = document.querySelector('.chanceBox');
const modal = document.getElementById("myModal");

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
    getWinCondition();
    console.log(getWinCondition());
});
})

