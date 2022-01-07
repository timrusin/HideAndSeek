//Audio elements
const click1 = new Audio("audio/click1.mp3");
const demonHideSound = new Audio("audio/demonHide.wav");
const playerFind = new Audio("audio/playerFind.mp3");
const winSound = new Audio("audio/demonDie.mp3");
const compFind = new Audio("audio/compFind.m4a");
const loseSound = new Audio("audio/demogorgon.mp3");
const music = new Audio("audio/To Orlando 18.m4a");
const winMusic = new Audio("audio/strangerThings.m4a");
const loseMusic = new Audio("audio/loseMusic.wav");


//board elements
const playerTiles = document.querySelectorAll(".player-tile");
const compTiles = document.querySelectorAll(".comp-tile");
playerTiles.forEach((tile) => tile.addEventListener("click", playerHidingClick));
compTiles.forEach((tile) => tile.addEventListener("click", playerTurnSearch));


//Taly board elements
const playerLives = document.getElementById("player-lives");
const cpuLives = document.getElementById("cpu-lives");
const display = document.getElementById("display-span"); 


//game over elements
const winner = document.querySelector(".winner");
const loser = document.querySelector(".loser");
const restartBtn = document.querySelectorAll(".restart-button");
restartBtn.forEach((button) => button.addEventListener("click", restart));


//global variables
let pLives = 0; 
let cLives = 0;  
const hiding = "HIDE";  
const seeking = "SEEK"; 
let turn;
let helperTimeout;


//board and guess arrays 
let compHiding = []; 
let playerHiding = [];  
let compHidingOptions = Array.from(Array(16).keys());
let compGuesses = [];   
let playerBoard = [];
let compBoard = Array.from(Array(16).keys());


//functions
//These two functions are where the player chooses their hidding spots
function playerHidingClick(event){
    const tile = event.target; 
    click1.play();
    click1.preload="auto";
    const tileNumber = parseInt(tile.dataset.index);
    tile.innerText= hiding;                 
    playerHiding.push(tileNumber);
    playerHidingDisplay();              
    music.loop = true;
    music.play();
    music.volume = .5;
        if (pLives === 4){
            playerTiles.forEach((tile)=>tile.removeEventListener("click", playerHidingClick))  
            computerHidingDisplay();
        }else if (tile.innerText !== ""){
            tile.removeEventListener("click", playerHidingClick);  
        }   
}

function playerHidingDisplay(){
    turn = "Player";
    display.style.fontSize= "35px";  
    display.innerText = "Player is hiding";
    pLives++;
    playerLives.innerText= pLives;
}


//These two functions are where the computer chooses it's hidding spots
function computerHidingDisplay(){
    turn = "Computer";
    demonHideSound.play();
    display.classList.add('fade');
    display.innerText = "Demogorgon is hiding";
    computerHidingClick();
}

function computerHidingClick(){
    compBoard.sort((a,b) => 0.5 - Math.random());      
    const hideInterval = setInterval(() => {
        click1.play();
        let hidingSpot = compBoard.pop();
        compHiding.push(hidingSpot);
        cLives++;
        cpuLives.innerText = cLives;
        if (cLives === 4){
            clearInterval(hideInterval);
            playerTurnDisplay();
        }
    }, 1000);
    console.log(compHiding);
}


//these four functions are managing the players game play
function playerTurnDisplay(){ 
    turn = "Player";
    display.classList.remove('fade');
    display.innerText = "Player's turn";
    console.log(compHiding);
    helperTimeout = setTimeout(helperMessage, 4000);
}

function helperMessage (){
    display.classList.add('fade');
    display.innerText= "click above";
}

function playerTurnSearch(event){ 
    if (turn !== "Player") return;  
    const hidingSpot = event.target;
    const spotNumber = parseInt(hidingSpot.dataset.index);
    click1.play();
    if (compHiding.indexOf(spotNumber) === -1){
        hidingSpot.innerText=seeking;
        hidingSpot.classList.add ('playerSeek');
        computerTurnDisplay();
        const computerTimeOut = setTimeout(computerTurnSearch, 2000);
    }else{ 
        cLives --;
        cpuLives.innerText = cLives;
        hidingSpot.classList.add('c-found');
        hidingSpot.innerText = "FOUND";
        playerFind.play();
        //prevent double Guess
        if (hidingSpot.innerText !== ""){
            hidingSpot.removeEventListener("click", playerTurnSearch)};
        checkForWin();
    }
}

function checkForWin(){
    if (cLives === 0){
        gameOverWin();
    }else{
        computerTurnDisplay();
        const computerTimeOut = setTimeout(computerTurnSearch, 2000);
    }
}


//These three functions are managing the computer's game play
function computerTurnDisplay(){
    clearTimeout(helperTimeout);
    turn = "Computer";
    display.classList.add('fade');
    display.innerText = "Demogorgon's turn";
}

function computerTurnSearch(){
    if (turn !== "Computer") return;
    click1.play();
    compHidingOptions.sort((a,b) => 0.5 - Math.random());
    let guess = compHidingOptions.pop();
    console.log(guess); //remove this for production!!
    compGuesses.push(guess);
    const spot = playerTiles[guess];
    if (playerHiding.indexOf(guess) === -1){
        spot.innerText = seeking;
        spot.classList.add ('computerSeek');
        playerTurnDisplay();
    }else{
        pLives --;
        compFind.play();
        playerLives.innerText = pLives;
        spot.classList.add('p-found')
        spot.innerText = "FOUND";
        checkForLoss()
    }
}

function checkForLoss(){
    if (pLives === 0){
        gameOverLose();    
    }else{
        playerTurnDisplay();
    }
  }


//These functions are determining the game over result
function gameOverWin(){
    music.pause();
    winSound.play();
    winSound.volume= .25;
    winMusic.play();
    winMusic.volume= .75;
    winner.style.opacity = "1";
    winner.style.pointerEvents = "auto";
}

function gameOverLose(){
    music.pause();
    loseSound.play();
    loseMusic.loop = true;
    loseMusic.play();
    loser.style.opacity = "1"; 
    loser.style.pointerEvents = "auto";
}


//This function is restartig the game when the restart-button is clicked
function restart(){
    click1.play();
    window.location.reload();
}