const playerTiles = document.querySelectorAll(".player-tile");
const compTiles = document.querySelectorAll(".comp-tile");

let pLives = "0";//corosponding to the score taly
let cLives = "0";//corosponding to the score taly
let hidding= "HIDE";//simply holding the string that will be displayed
let seeking= "SEEK";//simply holding the string that will be displayed
let computerHidding = []//computer's hidding spots
let playerHidding = []//player's hidding spots
let computerGuesses = []//To keep track of the computer's guesses so it wont pik the same index twice
let playerGuesses = [] //not sure this arrauy will be neccesary yet
const playerBoard = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const computerBoard = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

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
    // playerChoices.push; Not sure how to get these choices to push to the global scope array
    tile.innerText= hidding;
    playerBoard[tileNumber] = hidding;
        console.log(playerBoard); //this is pushing "hide" into our board on correct index!
        if (pLives === 4){
            return playerTiles.forEach((tile)=>tile.removeEventListener("click", playerHides)), computerHides()}
        else if (tile.innerText != ""){
            return tile.removeEventListener("click", playerHides);
         }   
         
         console.log(playerHides)
}

function computerHides(){
    display.innerText = "Computer is hidding";
    computerBoard.sort((a,b) => 0.5 - Math.random());
    let hidding1 = computerBoard.pop()
    let hidding2 = computerBoard.pop()
    let hidding3 = computerBoard.pop()
    let hidding4 = computerBoard.pop()
    console.log(hidding1, hidding2, hidding3, hidding4)

    
    // let computerChoices= Array.from({length:4}, () => Math.floor(Math.random()*16))
    //     console.log(computerChoices)
        //Need to figure out how to eliminate any dupicates with this array
        //Shuffle computerBoard Array, pop off four numbers***
    cLives = 4; //would be cool to have this count up slowly and randomly while computer "hides" (stretch goal)
    cpuLives.innerText = cLives;
    // computerBoard[computerChoices[0]] = hidding
    // console.log(computerBoard)
}
    


//and fill those tiles in with "HIDE".  They will need to be transparent so the player can't seem them. 
//Once this is done we can move on to the "playerTurn" function.. My brain hurts. 

//consider making the player boards buttons - diasble after click - can all have ids

// OOP
//player class - score, name, array of choices, array of guesses
//back and 