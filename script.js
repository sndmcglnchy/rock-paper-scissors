


// function checkUserSelection(){    
//     //CHECKING IF BOTH ARE TRUE - IS THERE A VALUE IN USERINPUT
//     //If so, hold the value entered by the user in the userSelection variable. Make this value the first parameter of playRound() and also call that function.
//     if (userInput && userInput.value) {
//                 let userSelection = userInput.value;
//                 console.log(userSelection);
//                 playRound(userSelection, computerPlay()); 

//     }
//     //otherwise, prompt the user to enter some text.
//     else{
//         result.textContent = "Please enter your weapon of choice above."
//     }
// }

let result = document.querySelector('.result');
let computer = document.querySelector('.computerChoice');
let scores = document.querySelector('.scores');
let userScore = 0;
let computerScore = 0;


function computerPlay(){
    // randomly return either Rock, Paper or Scissors
    let options = ['Rock', 'Paper', 'Scissors'];

    // console.log(options[Math.floor(Math.random() * options.length)]);
    return options[Math.floor(Math.random() * options.length)];
    
}

function playRound(playerSelection, computerSelection){  
    
    if(playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'ROCK'){
        // computer.textContent = "Rock VS. Rock";

        result.textContent = "Oops! It's a tie";
        console.log("Oops! It's a tie");

        scores.textContent = "Your Score: " + userScore + ", Computer Score: " + computerScore;
        console.log("Your Score: " + userScore + ", Computer Score: " + computerScore);
        return "Oops! It's a tie";
        
     }
     else if(playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'PAPER'){
        computerScore += 1;
        // computer.textContent = "Rock VS. Paper";

        result.textContent = "You lose! Paper beats Rock.";
        console.log("You lose! Paper beats Rock.");

        scores.textContent = "Your Score: " + userScore + ", Computer Score: " + computerScore;
        console.log("Your Score: " + userScore + ", Computer Score: " + computerScore);
        return "You lose! Paper beats Rock.";
    }
    else if(playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'SCISSORS'){
        userScore += 1;
        // computer.textContent = "Rock VS. Scissors";

        result.textContent = "You win! Rock defeats Scissors!";
        console.log("You win! Rock defeats Scissors!");

        scores.textContent = "Your Score: " + userScore + ", Computer Score: " + computerScore;
        console.log("Your Score: " + userScore + ", Computer Score: " + computerScore);
        return "You win! Rock defeats Scissors!";
    }
    else if(playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'PAPER'){
        // computer.textContent = "Paper VS. Paper";

        result.textContent = "Oops! It's a tie";
        console.log("Oops! It's a tie");

        scores.textContent = "Your Score: " + userScore + ", Computer Score: " + computerScore;
        console.log("Your Score: " + userScore + ", Computer Score: " + computerScore);
        return "Oops! It's a tie";
    }
    else if(playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'ROCK'){
        userScore += 1;
        // computer.textContent = "Paper VS. Rock";

        result.textContent = "Congrats! You win - Paper beats Rock!";
        console.log("Congrats! You win - Paper beats Rock!");

        scores.textContent = "Your Score: " + userScore + ", Computer Score: " + computerScore;
        console.log("Your Score: " + userScore + ", Computer Score: " + computerScore);
        return "Congrats! You win - Paper beats Rock!";
    }
    else if(playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'SCISSORS'){
        computerScore += 1;
        // computer.textContent = "Paper VS. Scissors";

        result.textContent = "Oh no, you lose. Scissors beats Paper";
        console.log("Oh no, you lose. Scissors beats Paper");

        scores.textContent = "Your Score: " + userScore + ", Computer Score: " + computerScore;
        console.log("Your Score: " + userScore + ", Computer Score: " + computerScore);
        return "Oh no, you lose. Scissors beats Paper";
    }
    else if(playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'SCISSORS'){
        // computer.textContent = "Scissors VS. Scissors";

        result.textContent = "Oops! It's a tie";
        console.log("Oops! It's a tie");

        scores.textContent = "Your Score: " + userScore + ", Computer Score: " + computerScore;
        console.log("Your Score: " + userScore + ", Computer Score: " + computerScore);
        return "Oops! It's a tie";
    }
    else if(playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'ROCK'){
        computerScore += 1;
        // computer.textContent = "Scissors VS. Rock";

        result.textContent = "Aw you lose. Rock beats Scissors.";
        console.log("Aw you lose. Rock beats Scissors.");

        scores.textContent = "Your Score: " + userScore + ", Computer Score: " + computerScore;
        console.log("Your Score: " + userScore + ", Computer Score: " + computerScore);
        return "Aw you lose. Rock beats Scissors.";
    }
    else if(playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'PAPER'){
        userScore += 1;
        // computer.textContent = "Scissors VS. Paper";

        result.textContent = "Woohoo! Scissors beats Paper";
        console.log("Woohoo! Scissors beats Paper");

        scores.textContent = "Your Score: " + userScore + ", Computer Score: " + computerScore;
        console.log("Your Score: " + userScore + ", Computer Score: " + computerScore);
        return "Woohoo! Scissors beats Paper";        
    }
    else{
        result.textContent = "Oh something went wrong. Try again!";
        return "Oh something went wrong. Try again!";  
    }
 }


function game(){
    for (i=0; i <= 4; i++){     
        let promptInput = prompt("Rock, Paper or Scissors?");  
        playRound(promptInput, computerPlay());        
    }
    if(userScore > computerScore){
        console.log("Game Over! Congratulations! You won!");
        result.textContent = "Game Over! Congratulations! You won!";
    }
    else if(computerScore > userScore){
        console.log("Game Over! Bad luck. You lost.");
        result.textContent = "Game Over! Bad luck. You lost.";
    }
    else{
        console.log("Game Over! It's a tie! Try again?")
        result.textContent = "Game Over! It's a tie! Try again?";
    }

}

