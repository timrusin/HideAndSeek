# Hide and Seek
#### Designed by: Tim Rusin

## Summary:


Hide and Seek is a single player versus AI game that was inspired by the Milton Bradley classic board game, BattleShip. I loved this game as a kid and realized it would make a great browser based game.  I also quickly realized how challenging this game would be relative to my current skill sets.  That being said, I decided to start with a much simpler version of the game.
## Overview of game play:
The user would place four "hiding spots" on their 4x4 board, the computer would then do the same (without the user seeing of course) and then a back and forth search would commence until the player or AI has found all of their opponents "hiding spots."

## Wire-Frame Mockup of the game:
![Wire Frame image of Game](https://github.com/timrusin/HideAndSeek/blob/main/images/HideandSeekMock.png)

My initial vision of the game was going to look something like the wire-frame illustrates above, but I quickly decided to go with a straight up and down column of everything in the game to keep things simple for resizing and to also be very mobile device friendly. 

## Progression of design:
![first iteration of game](https://github.com/timrusin/HideAndSeek/blob/main/images/initial_design.jpg)![board pieces to circles](https://github.com/timrusin/HideAndSeek/blob/main/images/to_circles.jpg)

I used some basic CSS grid functionality to achieve my board elements and then decided to add some border radius to make the tiles circular and separate them from each other a bit.

## "Stranger Things" Inspiration:
![stranger things design inspiration](https://github.com/timrusin/HideAndSeek/blob/main/images/stranger_insiration.jpg)

Once I added the gameplay music, I felt the game taking a bit of a "spooky" turn. This led me to the forest background image and the Red font. I realized immediately that this was beginning to have a Stranger Things vibe to it. So I ran with it.

![finished start screen](https://github.com/timrusin/HideAndSeek/blob/main/images/finished_start.jpg) ![finished gameplay](https://github.com/timrusin/HideAndSeek/blob/main/images/finishsed_gameplay.jpg)

![win screen](https://github.com/timrusin/HideAndSeek/blob/main/images/win_screen.jpg) ![lose screen](https://github.com/timrusin/HideAndSeek/blob/main/images/lose_screen.jpg)

I added a separate win and loose splash screen to come up accordingly incorporating music from the show and some creepy Demogorgon like sound effects throughout. 

## Technologies implemented
- HTML
- Vanilla CSS
- Vanilla Javascript

# Play the game!
### Instructions:
Getting started is pretty straight forward, the opening display box will tell you this as well.
- Simply select four "hiding Spots" on the player board
- Once you hit four, the Demogorgon will secretly select their four as well
- On the player turn, click anywhere above in the Demogorgons board to try to find one of its hiding spots
- You will either get a "seek" for the spot, or a "found"
- The Demogorgon will then do the same on your board
- This will pass back and forth between the two of you until someone finds all four of the other's spots. 
- BE CAREFUL, although you can not click on a "found" spot more than once, the game does allow you to choose a "seek" spot more than once, which will lose you a valuable turn in your search for the Demogorgon.
- You will either be caught by the Demogorgon, or you will find all of its spots first and Eleven will come to your rescue to take it down.
## [Click here to begin](https://timrusin.github.io/HideAndSeek)

## Moving forward:
- I would love to find a way to get all of the audio to play correctly on iOS devices. All of the audio and music plays well on desktop browsers and Android devices, but due to Apple implementing some blockers for sound, any sound or music I have firing off of a function as opposed to the user clicking, does not work on iOS devices.
    - Sound that will be missing on iOS devices
        - some if not all of the move "clicks"
        - "Found" alert sound on your board when you are caught
        - Lose screen Demogorgon "scream" and Music
- I would still like to build an opening splash screen to start the game with as opposed to having it load directly to the game.  I would add the instructions to this opening screen instead of the display box in the game. 
- It would be fun to add some more levels of play that could include some slightly different game play to keep the user engaged. It's great that the game is operational, but it gets boring pretty quickly. 
- I purposely built this game from a "mobile first" perspective and would like to use some media query to build a scalable version of the game to larger screens. 


