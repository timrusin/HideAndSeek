//MVP TO DOS!
//- why error on 
//- conditional to check for end of game
//- A way to keep the computer from guessing the same numbers
//- Game Over screens with restart buttons
//- timeOut for the computer's turns to display COmputer's Turn in the box for a few seconds

//Stretch Goals
//- Splash Screen with instructions
//- Custom fonts
//- more animation with hits and score
//- Sound effects for hidding, clicks, and hits
//-custmom music - splash screen, game play, game over screens(2)


const playerTiles = document.querySelectorAll(".player-tile");
const compTiles = document.querySelectorAll(".comp-tile")
playerTiles.forEach((tile) => tile.addEventListener("click", playerHides));
compTiles.forEach((tile) => tile.addEventListener("click", playerClick));

//Variables
let pLives = 0; 
let cLives = 0;  
const hiding = "HIDE";  
const seeking = "SEEK";  
const computerHiding = [];  
const playerHiding = [];  
const computerGuesses = [];  
const playerBoard = [];
const computerBoard = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];  //.fill for array(look up)//////////
let turn = ""

//Taly boaard elements
const playerLives = document.getElementById("player-lives");
const cpuLives = document.getElementById("cpu-lives");
const display = document.getElementById("display-span"); 

//This is where the player chooses thier hidding spots
function playerHides(event){
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
    display.classList.add('fade');
    display.innerText = "Computer is hiding";
    computerBoard.sort((a,b) => 0.5 - Math.random());      

    const compTimer = setInterval(() => {
        let spacePos = computerBoard.pop();
        computerHiding.push(spacePos);
        cLives++;
        cpuLives.innerText = cLives;
        if (cLives === 4){
            clearInterval(compTimer);
            playerTurnDisplay();
        }
    }, 1000);
    console.log(computerHiding)
}


//this function is managing the players game play
function playerTurnDisplay(){ 
    turn = "Player"
    display.classList.remove('fade');
    display.innerText = "Player's turn";
    console.log(computerHiding);
}
function playerClick(event){ 
    const tile = event.target
    const tileNumber = parseInt(tile.dataset.index);
    if (turn !== "Player") return;  
    if (computerHiding.indexOf(tileNumber) === -1){
        tile.innerText=seeking;
        computerTurnDisplay()
        computerSearch()
    }else{ 
        cLives--;
        cpuLives.innerText = cLives;
        tile.classList.add('c-found')
        tile.innerText = "FOUND"
        computerTurnDisplay()
        computerSearch()
        //still need conditional to check for win////////////////////
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
    const randomNumber = Math.floor(Math.random()*16);
    computerGuesses.push(randomNumber);
    const tile = playerTiles[randomNumber];
    //still need a way to make sure the computer doesn't guess the same number twice///////////////////////
    if (playerHiding.indexOf(randomNumber) === -1){
        tile.innerText = seeking;
        tile.classList.add ('playerSeek');
        //need conditional to check for win
        playerTurnDisplay()
        playerClick()
    }else{
        pLives --;
        playerLives.innerText = pLives;
        tile.classList.add('p-found')
        tile.innerText = "FOUND"
        playerTurnDisplay()
        playerClick()
    }
}

//DONT FORGET TO UPDATE THE README PAGE - CHECK PROJECT CRITERIA!!!

// for the random number matches the players hidding Array, if it isn't 
//creating an array with the numbers in it originally to pull from and move to the guesses