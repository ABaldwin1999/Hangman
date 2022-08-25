const alphabetArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","Y","X","Z"];
const firstArray = ["QUICK","OBTUSE","GNARLED","AVARICE","PUTRID","OBSIDIAN","VAGABOND","VANGUARD"];
const secondArray = [];
const thirdArray = [];
const fourthArray = ["BLOOM","CHEESE","BLOOD"];
const fifthArray =[];
const sixthArray =[];
let score = 0;
let chances = 3;

const theGallows = document.querySelector('.gallows');
const alphaButtons = document.querySelector('.alphaButtons');
const guessBox = document.querySelector('.guessBox');

alphabetArray.forEach((letter) =>{
    alphaButtons.innerHTML +=`<button class="alphaButtons_button">${letter}</button>`;
})


const guessHandler = (button) =>{
    ////if all are true then return that we need to summon round handler again to start a new round
    console.log("hi");
    console.log(button.innerHTML);

    ///at bottom of function if(chances==0){}
}

const levelSelector = () =>{
    let Word = "" ;
    if(score===0){
        Word = firstArray[0];//Math.random(0,firstArray.length)];
    }
    //else if(0<score<=2){
    //    const mysteryWord = secondArray[Math.random(0,firstArray.length)];
   // }
    return Word;

}

const roundHandler = () =>{
   if(wonRound === true) {
    score++;
    wonRound =false;
    guessBox.innerHTML+= ``;
   }
    const mysteryWord = Array.from(levelSelector());
    mysteryWord.forEach((letter) =>{
        guessBox.innerHTML +=`<p class="guessBox_spaces">${letter}</p>`;
    })
}
const wonRound =() =>{
    
    return false;
}

const GameOver =()=>{

}


const alphaButton = document.querySelectorAll('.alphaButtons_button');
roundHandler();

alphaButton.forEach((button)=>{button.addEventListener('click', () => {
    console.log(button.innerHTML);
});})