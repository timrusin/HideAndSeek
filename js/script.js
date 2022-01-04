const playerTiles = document.querySelectorAll(".player-tile");
const compTiles = document.querySelectorAll(".comp-tile");

// console.log(compTiles)
let pLives = "0";//corosponding to the score taly
let cLives = "0";//corosponding to the score taly
const hiding= "HIDE";//simply holding the string that will be displayed
const seeking= "SEEK";//simply holding the string that will be displayed
let computerHiding = []//computer's hiding spots
let playerHiding = []//player's hiding spots
let computerGuesses = []//To keep track of the computer's guesses so it wont pick the same index twice
let playerGuesses = [] //not sure this arrauy will be neccesary yet
const playerBoard = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const computerBoard = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

//Elements
const playerLives = document.getElementById("player-lives");
const cpuLives = document.getElementById("cpu-lives");
const display = document.getElementById("display-span"); 

//still need to build the intro screen, game over screens and restart button.
//also add sounds and music eventually
// const music = new Audio("")
// const clickSound = new Audio("")
// const foundSound = new Audio("")

playerTiles.forEach((tile) => tile.addEventListener("click", playerHides));
function playerHides(event){
    display.style.fontSize= "35px";
    display.innerText = "Player is hiding";
    pLives++; 
    playerLives.innerText= (pLives);
    const tile = event.target;
    const tileNumber = tile.dataset.index;
    tile.innerText= hiding;
    playerBoard[tileNumber] = hiding;
        console.log(playerBoard); //this is pushing "hide" into our board on correct index!
        if (pLives === 4){
            return playerTiles.forEach((tile)=>tile.removeEventListener("click", playerHides)), computerHides()}
        else if (tile.innerText != ""){
            return tile.removeEventListener("click", playerHides);
         }   
    // console.log(playerHides)
}

function computerHides(){
    display.classList.add('fade');
    display.innerText = "Computer is hiding";
    cLives=4; //would be cool to have this count up slowly while computer "hides" (stretch goal)
    cpuLives.innerText = cLives;
    computerBoard.sort((a,b) => 0.5 - Math.random());
    for (let i=0; i<4; i++){
        let spacePos = computerBoard.pop();
        console.log(spacePos)
        computerHiding.push(spacePos)
        compTiles[spacePos].innerText = hiding;
        compTiles[spacePos].classList.add('hide');
        compTiles[spacePos].addEventListener('click', hit)
    }
    playerTurn()
}
//my original process before buiilding it into the loop above
    // let hiding1 = computerBoard.pop();
    // let hiding2 = computerBoard.pop();
    // let hiding3 = computerBoard.pop();
    // let hiding4 = computerBoard.pop();
    // compTiles[hiding1].innerText = hiding;
    // compTiles[hiding2].innerText = hiding;
    // compTiles[hiding3].innerText = hiding;
    // compTiles[hiding4].innerText = hiding;
    // compTiles[hiding1].classList.add('hide');
    // compTiles[hiding2].classList.add('hide');
    // compTiles[hiding3].classList.add('hide');
    // compTiles[hiding4].classList.add('hide');
    // let hit1 = compTiles[hiding1];
    // hit1.addEventListener('click', hit);
    // let hit2 = compTiles[hiding2];
    // hit2.addEventListener('click', hit);
    // let hit3 = compTiles[hiding3];
    // hit3.addEventListener('click', hit);
    // let hit4 = compTiles[hiding4];
    // hit4.addEventListener('click', hit);



function playerTurn(){
    display.classList.remove('fade');
    display.style.fontSize = "35px";
    display.innerText = "Player's turn"
    console.log(computerHiding)

}

function hit(){
    cLives--;
    cpuLives.innerText = cLives;
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