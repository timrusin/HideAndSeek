const playerTiles = document.querySelectorAll(".player-tile");
const compTiles = document.querySelectorAll(".comp-tile")

//Variables
let pLives = 0;  //coresponding to the score taly
let cLives = 0;  //coresponding to the score taly
const hiding = "HIDE";  //simply holding the string that will be displayed
const seeking = "SEEK";  //simply holding the string that will be displayed
const computerHiding = [];  //computer's hiding spots
const playerHiding = [];  //player's hiding spots
const computerGuesses = [];  //To keep track of the computer's guesses so it wont pick the same index twice
const playerGuesses = []; //not sure this array will be necessary yet
const playerBoard = [];
const computerBoard = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];  //.fill for array(look up)
let turn = "Player"

//DOM Elements
const playerLives = document.getElementById("player-lives");
const cpuLives = document.getElementById("cpu-lives");
const display = document.getElementById("display-span"); 

//still need to build the intro screen, game over screens and restart button.
//also add sounds and music eventually
// const music = new Audio("")
// const clickSound = new Audio("")
// const foundSound = new Audio("")

//Player hide function
playerTiles.forEach((tile) => tile.addEventListener("click", playerHides));
compTiles.forEach((tile) => tile.addEventListener("click", clickTile));
function playerHides(event){
    display.style.fontSize= "35px";  //consider making a separate class
    display.innerText = "Player is hiding";
    pLives++; //consider having a new function to break things up a bit more (separate display stuff into it's own fuctions)
    playerLives.innerText= pLives;
    const tile = event.target;
    const tileNumber = tile.dataset.index;  //look into query for this attribute as opposed to event.target
    tile.innerText= hiding;                  
    playerBoard[tileNumber] = hiding;
     console.log(playerBoard); //this is pushing "hide" into our board on correct index!
    if (pLives === 4){
        playerTiles.forEach((tile)=>tile.removeEventListener("click", playerHides))  //consider resetPlayer function to reset clicks
        computerHides()
    }else if (tile.innerText !== ""){
        tile.removeEventListener("click", playerHides);  
    }   
}

function computerHides(){
    display.classList.add('fade');
    display.innerText = "Computer is hiding";
    computerBoard.sort((a,b) => 0.5 - Math.random());      

    const compTimer = setInterval(() => {
        let spacePos = computerBoard.pop();
        console.log(spacePos);
        computerHiding.push(spacePos);
        compTiles[spacePos].innerText = hiding;
        compTiles[spacePos].classList.add('hide');
        cLives++;
        cpuLives.innerText = cLives;
        if (cLives === 4){
            clearInterval(compTimer);
            playerTurn();
        }
    }, 1000);
}

function playerTurn(){
    display.classList.remove('fade');
    display.style.fontSize = "35px";
    display.innerText = "Player's turn";
    turn = "Player";
    console.log(computerHiding);
}
function clickTile(event){
    const tile = event.target;
    const tileNumber = parseInt(tile.dataset.index);
    if (turn !== "Player") return;  //if it is the computers turn I wont be able to run the rest of the function
    if (computerHiding.indexOf(tileNumber) === -1){
        tile.innerText=seeking;
    }else{ 
        hit()
    }
     //index of is type sensative, had to parseInt tileNumber
}
function hit(){
    cLives--;
    cpuLives.innerText = cLives;
    //need to change the display of the hidden piece, to show we've found the spot (sound) 
}


//     }
//     function hit(){
//         console.log("working?")
//     }
    // compTiles[hidding1].classList.add('hide')

    // /add event listeners for those hiding indexes
    
   
    
    // function playerTurn()

    //playerTurn
    
   
    
    
    // let computerChoices= Array.from({length:4}, () => Math.floor(Math.random()*16))
    //     console.log(computerChoices)
        //Need to figure out how to eliminate any dupicates with this array
        //Shuffle computerBoard Array, pop off four numbers***
    
    // computerBoard[computerChoices[0]] = hidding
    // console.log(computerBoard)

    


//and fill those tiles in with "HIDE".  They will need to be transparent so the player can't seem them. 
//Once this is done we can move on to the "playerTurn" function.. My brain hurts. 

//consider making the player boards buttons - diasble after click - can all have ids

// OOP
//player class - score, name, array of choices, array of guesses
//back and 