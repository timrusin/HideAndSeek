
--Summary--
I am planning to build a single player/AI game that I am calling "Hide and Seek."
The game is a much simpler spin-off of the Milton Bradely classic, Battleship.
The player will choose and select four(4) squares within their 16 square playing board to "hide in".
The computer will then do the same on their own board and then the game will begin!

The player will click on any of the computer's board cells in order to try to find where they are 
hiding. If they find one, it will be revealed.  The computer will then do the same on the player's board.
This back and forth game play will continue until either the player or computer has found all of their opponent's pieces. 

--User Stories and MVPs--
- Player needs to know how to play and how to start the game (MVP(gold):instructions in place on main screen)
- Player needs to be able to select their five pieces at will on their board (MVP(gold))
- Computer needs to randomly choose and hide their pieces from the player(MVP(gold))
- Player needs to be notified when it is their turn (MVP(gold))
- Player needs to know when they and/or the computer has found one of the hidden pieces (MVP(gold))
- Player needs to see history of when and where the computer has choosen a cell on their board (MVP(silver))
- Player needs to see a history of cells they have already tried on computer's board (MVP(silver))
- Player should be able to track progress with a count-down taly of the game (MVP(bronze))
- Player needs to know when the game is complete and who won. (MVP(gold))
- Player needs to have a way to restart the game (MVP(gold))

--Stretch Goals--
- Original music and SFX added to gameplay
- added styling for background images and such( maybe even a call to a public API to have a new background each time??)
- more animation with CSS for player and computer moves and finds to add excitement to the game. 

--Wireframe can be found in images folder--

--Psuedocode-- (in progress....)

- HTML
    - Let's start with a <h1> for a game title that can be styled with some fun font later on. 
    - Two boards need to be created using <div> and "grid" syling in CSS
    - A separate <div> will be needed for the display text for the game as well

-CSS
    - I will have to experiment with CSS to get the basci MVP look and setup. I'd like for it to look
    like the mock up, but also have a way to have that whole thing stay centered in the window
    - I will have to include classes for the player boards and individual cells to style in css where needed

-Javascript
    - Global variables needed
        - computerBoardArray 
        - ComputerGuessesArray
        - playerBoarArray
        - playerGuessesArray
        - computerLives
        - playerLives

    - DOM elements
        - the Arrays mentioned above
        - the display box
        - Win and loose elements to be displayed


Operation in plain english

1. The player will select their four "hidding spots." These values need to be stored somehow in the playerArray as well as displayed visually somehow on the player-board
2. The computer needs to run a program to grab four random values within the computerArray and be reflected as hidding places on the computer-board
3. These hidding places needed to be hidden with CSS until the player finds them
4. The display box will notify the player that it is their turn
5. The player will be allowed to click on one of the computer's cells each turn to try to find them
6. If there is no one hidding on their current selection, then an X should be placed on that cell, as well as that array vaule added to the players Guesses Array.
7. If there is someone hidding there, they should be revealed, the guess is added to the playersGuessesArray, AND one life should be deducted from the computer's life variable
8. It is now the computer's turn
9. The computer will need to generate a random number realtive to the playersArray length.
10. This value needs to be compared to the players selected hidding spots on their board
11. If the computer's random value matches any of the players hidding spot, an X should cover the players cell with their seletion or have the cell go black, red, something.. 
12. The players life variable will deduct by one
13. If the computer's choice does not match an of the player's hidding spots, an X should appear on that empty cell of the players-board
14. Regardless of 12 or 13, the computer's choice needs to be added to the computers GuessesArray
15. The guessesArray needs to be accessed before each guess to make sure it has not been chosen as a previous guess. Otherwise we will have a really stupid AI opponent.
16. The life values will need to be checked at the end of each turn to see if we have a winner yet. 
17. If the player's life variable hits zero first, a message (probably just hiddein with CSS opacity) will pop up saying something along the lines of "GAME OVER, COMPUTER WINS". 
18. This would simply be the opposite if the player wins
19. In both cases, a button should be present to RESTART the game




