const playerTiles = document.querySelectorAll(".player-tile");
const compTiles = document.querySelectorAll(".comp-tile");

let pLives = "0";
let cLives = "0";
let hidding= "HIDE";
let seeking= "SEEK";
let comptuerChoices =[]
let playerChoices = []

//grabing the boards grids and setting them to an array
const playerBoard = Array(playerTiles.length);
playerBoard.fill(null);//simply filling the array with "nulls" until replaced by choices
const computerBoard = Array(compTiles.length);
computerBoard.fill(null);

// console.log(computerBaord) -- both coming up with an array of 16, one for each tile
//console.log(playerBoard)

//Elements
const playerLives = document.getElementById("player-lives");
const cpuLives = document.getElementById("cpu-lives");
const display = document.getElementById("display"); 

//still need to build the intro screen, game over screens and restart button.
//also add sounds and music eventually
// const music = new Audio("")
// const clickSound = new Audio("")
// const foundSound = new Audio("")

playerTiles.forEach((tile) => tile.addEventListener("click", playerHides));

function playerHides(event){
    display.innerText = "Player is hidding";
    pLives ++; 
    playerLives.innerText= (pLives);
    const tile = event.target;
    const tileNumber = tile.dataset.index;
    tile.innerText= hidding;
    playerBoard[tileNumber] = hidding;
        console.log(playerBoard); //this is pushing "hide" into our board on correct index!
        if (pLives === 4){
            return playerTiles.forEach((tile)=>tile.removeEventListener("click", playerHides)), computerHides()}
        else if (tile.innerText != ""){
            return tile.removeEventListener("click", playerHides);
         }   
}

function computerHides(){
    display.innerText = "Computer is hidding";
    let computerChoices= Array.from({length:4}, () => Math.floor(Math.random()*16))
        console.log(computerChoices)
        //Need to figure out how to eliminate any dupicates with this array
    cLives = 4; //would be cool to have this count up slowly and randomly while computer "hides" (stretch goal)
    cpuLives.innerText = cLives;
    computerBoard[computerChoices[0]] = hidding
    console.log(computerBoard)

    
}
//and fill those tiles in with "HIDE".  They will need to be transparent so the player can't seem them. 
//Once this is done we can move on to the "playerTurn" function.. My brain hurts. 

