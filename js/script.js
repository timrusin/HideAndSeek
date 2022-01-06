//MVP TO DOS!
//- why error on 87?
//- Game Over screens with restart buttons

//Stretch Goals
//- Splash Screen with instructions
//- Custom fonts
//- more animation with hits and score
//- Sound effects for hidding, clicks, and hits
//-custmom music - splash screen, game play, game over screens(2)

//DONT FORGET TO UPDATE THE README PAGE - CHECK PROJECT CRITERIA!!!

const playerTiles = document.querySelectorAll(".player-tile");
const compTiles = document.querySelectorAll(".comp-tile");
playerTiles.forEach((tile) => tile.addEventListener("click", playerHides));
compTiles.forEach((tile) => tile.addEventListener("click", playerSearch));
const winner = document.querySelector(".winner");
const restartBtn = document.getElementById("restart-button").onclick = resetGame;

let pLives = 0; 
let cLives = 0;  
const hiding = "HIDE";  
const seeking = "SEEK";  
let compHiding = [];  
let playerHiding = [];  
let compOptions = Array.from (Array(16).keys());
let compGuesses = [];  
let playerBoard = [];
let compBoard = Array.from (Array(16).keys());
let turn = ""

//Taly boaard elements
const playerLives = document.getElementById("player-lives");
const cpuLives = document.getElementById("cpu-lives");
const display = document.getElementById("display-span"); 

//This is where the player chooses thier hidding spots
function playerHides(event){
    turn = "Player"
    display.style.fontSize= "35px";  //consider making a separate class
    display.innerText = "Player is hiding";
    pLives++; //consider having a new function to break things up a bit more (separate display stuff into it's own fuctions)
    playerLives.innerText= pLives;
    const tile = event.target;
    const tileNumber = parseInt(tile.dataset.index);  //look into query for this attribute as opposed to event.target
    tile.innerText= hiding;                 
    playerHiding.push(tileNumber) 
     console.log(playerHiding); //pushing to the playerHiding array to be accesed by the CPU
    if (pLives === 4){
        playerTiles.forEach((tile)=>tile.removeEventListener("click", playerHides))  //consider resetPlayer function to reset clicks
        computerHides()
    }else if (tile.innerText !== ""){
        tile.removeEventListener("click", playerHides);  
    }   
}

//This is where the computer chooses it's hidding spots
function computerHides(){
    turn = "Computer"
    display.classList.add('fade');
    display.innerText = "Computer's hiding";
    compBoard.sort((a,b) => 0.5 - Math.random());      
    const hideInterval = setInterval(() => {
        let tile = compBoard.pop();
        compHiding.push(tile);
        cLives++;
        cpuLives.innerText = cLives;
        if (cLives === 4){
            clearInterval(hideInterval);
            playerTurnDisplay();
        }
    }, 1000);
    console.log(compHiding)
}

//this function is managing the players game play
function playerTurnDisplay(){ 
    turn = "Player"
    display.classList.remove('fade');
    display.innerText = "Player's turn";
    console.log(compHiding);
}
function playerSearch(event){ 
    console.log(event)
    const tile = event.target;
    console.log(tile)
    const tileNumber = parseInt(tile.dataset.index);
    if (turn !== "Player") return;  
    if (compHiding.indexOf(tileNumber) === -1){
        tile.innerText=seeking;
        computerTurnDisplay()
        const computerTimeOut = setTimeout(computerSearch, 2500);
    }else{ 
        cLives --;
        cpuLives.innerText = cLives;
        tile.classList.add('c-found')
        tile.innerText = "FOUND"
        if (cLives === 0){
            gameOverWin()
        }else{
            computerTurnDisplay()
            const computerTimeOut = setTimeout(computerSearch, 2500);
        }
    }
}

//These functions are managing the computer's game play
function computerTurnDisplay(){
    turn = "Computer";
    display.classList.add('fade');
    display.innerText = "Computer's turn";
}

function computerSearch(){
    if (turn !== "Computer") return;
    compOptions.sort((a,b) => 0.5 - Math.random());;
    let guess = compOptions.pop();
    console.log(guess)
    compGuesses.push(guess);
    const tile = playerTiles[guess];
    console.log(compOptions)
    console.log(compGuesses)

    if (playerHiding.indexOf(guess) === -1){
        tile.innerText = seeking;
        tile.classList.add ('playerSeek');
        playerTurnDisplay()
        playerSearch()
    }else{
        pLives --;
        playerLives.innerText = pLives;
        tile.classList.add('p-found')
        tile.innerText = "FOUND"
        if (pLives === 0){
         gameOverLose()
    }else{
        playerTurnDisplay()
        playerSearch()
    }
  }
}

function gameOverWin(){
    winner.style.opacity = "1";
   
}

function gameOverLose(){
    display.innerText = "You Lose"
    
}

function resetGame(){
    pLives = 0;
    cLives = 0;
    playerBoard = [];
    compBoard = Array.from (Array(16).keys());
    playerHiding = [];
    compHiding = [];  
    compGuesses = [];
    compOptions = Array.from (Array(16).keys());
}