
let result = document.querySelector('.result');
let computer = document.querySelector('.computerChoice');
let userInput = document.querySelector('.user-input');
// let userSubmit = document.querySelector('.userSubmit');

function computerPlay(){
    // randomly return either Rock, Paper or Scissors
    //use console.log() to make sure it's returning the expected output
    let options = ['Rock', 'Paper', 'Scissors'];

    // console.log(options[Math.floor(Math.random() * options.length)]);
    return options[Math.floor(Math.random() * options.length)];
    
}

function checkUserSelection(){    
    //    let userInput = document.querySelector('.user-input');
    //    let userSelection = userInput.value; 
    //     console.log(userSelection);
    //     playRound(userSelection, computerPlay());
    //    return userSelection;
    // let userInput = document.querySelector('.user-input');
    //CHECKING IF BOTH ARE TRUE - IS THERE A VALUE IN USERINPUT
    //If so, hold the value entered by the user in the userSelection variable. Make this value the first parameter of playRound() and also call that function.
    if (userInput && userInput.value) {
        let userSelection = userInput.value;
        console.log(userSelection);
        playRound(userSelection, computerPlay()); 
    }
    //otherwise, prompt the user to enter some text.
    else{
        result.textContent = "Please enter your weapon of choice above."
    }
}

function playRound(playerSelection, computerSelection){  
    
     if(playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'ROCK'){
        computer.textContent = "Rock VS. Rock";
        result.textContent = "Oops! It's a tie";
        return "Oops! It's a tie";
        
     }
     else if(playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'PAPER'){
        computer.textContent = "Rock VS. Paper";
        result.textContent = "You lose! Paper beats Rock.";
        return "You lose! Paper beats Rock.";
    }
    else if(playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'SCISSORS'){
        computer.textContent = "Rock VS. Scissors";
        result.textContent = "You win! Rock defeats Scissors!";
        return "You win! Rock defeats Scissors!";
    }
    else if(playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'PAPER'){
        computer.textContent = "Paper VS. Paper";
        result.textContent = "Oops! It's a tie";
        return "Oops! It's a tie";
    }
    else if(playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'ROCK'){
        computer.textContent = "Paper VS. Rock";
        result.textContent = "Congrats! You win - Paper beats Rock!";
        return "Congrats! You win - Paper beats Rock!";
    }
    else if(playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'SCISSORS'){
        computer.textContent = "Paper VS. Scissors";
        result.textContent = "Oh no, you lose. Scissors beats Paper";
        return "Oh no, you lose. Scissors beats Paper";
    }
    else if(playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'SCISSORS'){
        computer.textContent = "Scissors VS. Scissors";
        result.textContent = "Oops! It's a tie";
        return "Oops! It's a tie";
    }
    else if(playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'ROCK'){
        computer.textContent = "Scissors VS. Rock";
        result.textContent = "Aw you lose. Rock beats Scissors.";
        return "Aw you lose. Rock beats Scissors.";
    }
    else if(playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'PAPER'){
        computer.textContent = "Scissors VS. Paper";
        result.textContent = "Woohoo! Scissors beats Paper";
        return "Woohoo! Scissors beats Paper";        
    }
    else{
        result.textContent = "Oh something went wrong. Try again!";
        return "Oh something went wrong. Try again!";  
    }
 }

// playRound(checkUserSelection(), computerPlay());
