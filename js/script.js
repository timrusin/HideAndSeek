//MVP TO DOS!
//- why error on 87?

//TODOs
//- fix up the styling on the gameover screens
//- Splash Screen with instructions
//- Custom fonts
//- more animation with hits and score
//-loop music and fade out at game over

//DONT FORGET TO UPDATE THE README PAGE - CHECK PROJECT CRITERIA FOR PRESENTATION!!

const playerTiles = document.querySelectorAll(".player-tile");
const compTiles = document.querySelectorAll(".comp-tile");
playerTiles.forEach((tile) => tile.addEventListener("click", playerHides));
compTiles.forEach((tile) => tile.addEventListener("click", playerSearch));
const winner = document.querySelector(".winner");
const loser = document.querySelector(".loser");
const restartBtn = document.querySelectorAll(".restart-button");
restartBtn.forEach((button) => button.addEventListener("click", restart))

//Audio
const click1 = new Audio("audio/click1.mp3");
const playerFind = new Audio("audio/playerFind.mp3");
const winSound = new Audio("audio/Winner.mp3");
const compFind = new Audio("audio/compFind.m4a");
const loseSound = new Audio("audio/loser.mp3");
const music = new Audio("audio/To Orlando 18.m4a");

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
    turn = "Player";
    music.play()
    music.volume = .5;
    music.loop;
    display.style.fontSize= "35px";  
    display.innerText = "Player is hiding";
    pLives++; 
    playerLives.innerText= pLives;
    const tile = event.target;
    const tileNumber = parseInt(tile.dataset.index);  
    tile.innerText= hiding;                 
    playerHiding.push(tileNumber) 
     console.log(playerHiding); 
    if (pLives === 4){
        playerTiles.forEach((tile)=>tile.removeEventListener("click", playerHides))  
        computerHides()
    }else if (tile.innerText !== ""){
        tile.removeEventListener("click", playerHides);  
    }   
    click1.play();
}

//This is where the computer chooses it's hidding spots
function computerHides(){
    turn = "Computer"
    display.classList.add('fade');
    display.innerText = "Computer is hiding";
    compBoard.sort((a,b) => 0.5 - Math.random());      
    const hideInterval = setInterval(() => {
        click1.play();
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
    const helperTimeout = setTimeout(helperMessage, 8000);
    function helperMessage (){
        display.classList.add('fade');
        display.innerText= "click above";
    }
}
function playerSearch(event){ 
    const tile = event.target;
    const tileNumber = parseInt(tile.dataset.index);
    click1.play();
    if (turn !== "Player") return;  
    if (compHiding.indexOf(tileNumber) === -1){
        tile.innerText=seeking;
        tile.classList.add ('playerSeek');
        computerTurnDisplay()
        const computerTimeOut = setTimeout(computerSearch, 2000);
    }else{ 
        cLives --;
        cpuLives.innerText = cLives;
        tile.classList.add('c-found')
        tile.innerText = "FOUND"
        playerFind.play();
        if (cLives === 0){
            gameOverWin()
        }else{
            computerTurnDisplay()
            const computerTimeOut = setTimeout(computerSearch, 2000);
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
    click1.play();
    compOptions.sort((a,b) => 0.5 - Math.random());;
    let guess = compOptions.pop();
    console.log(guess)
    compGuesses.push(guess);
    const tile = playerTiles[guess];
    console.log(compOptions)
    console.log(compGuesses)

    if (playerHiding.indexOf(guess) === -1){
        tile.innerText = seeking;
        tile.classList.add ('computerSeek');
        playerTurnDisplay()
        playerSearch()
    }else{
        pLives --;
        compFind.play();
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
    winSound.play();
    winner.style.opacity = "1";
    winner.style.pointerEvents = "auto";
}

function gameOverLose(){
    loseSound.play()
    loser.style.opacity = "1"; 
    loser.style.pointerEvents = "auto";
    
}

function restart(){
    click1.play();
    window.location.reload();
}