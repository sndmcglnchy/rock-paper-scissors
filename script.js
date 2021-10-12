let result = document.querySelector('.result');
let computer = document.querySelector('.computerChoice');
let scores = document.querySelector('.scores');
let userScore = 0;
let computerScore = 0;
scores.textContent = "Your Score: " + userScore + ", Computer Score: " + computerScore;
computer.textContent = "First to score 5 points wins - GO!";


function computerPlay(){
    // randomly return either Rock, Paper or Scissors
    let options = ['Rock', 'Paper', 'Scissors'];

    // console.log(options[Math.floor(Math.random() * options.length)]);
    return options[Math.floor(Math.random() * options.length)];
    
}

  document.querySelectorAll('.options').forEach(function(element){
    element.addEventListener('click', function() {
      result.style.cssText="color:white; font-size:30px; font-weight:normal;";
      scores.style.cssText="font-weight:normal;";
      const userSelection = this.id;
      playRound(userSelection, computerPlay());
    });
  });


function playRound(playerSelection, computerSelection){     
    
    if(playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'ROCK'){
        computer.textContent = "Rock VS. Rock";
        result.textContent = "Oops! It's a tie";
        scores.textContent = "Your Score: " + userScore + ", Computer Score: " + computerScore;        
     }
     else if(playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'PAPER'){
        computerScore += 1;
        computer.textContent = "Rock VS. Paper";
        result.textContent = "You lose! Paper beats Rock.";
        scores.textContent = "Your Score: " + userScore + ", Computer Score: " + computerScore;
    }
    else if(playerSelection.toUpperCase() === 'ROCK' && computerSelection.toUpperCase() === 'SCISSORS'){
        userScore += 1;
        computer.textContent = "Rock VS. Scissors";
        result.textContent = "You win! Rock defeats Scissors!";
        scores.textContent = "Your Score: " + userScore + ", Computer Score: " + computerScore;
    }
    else if(playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'PAPER'){
        computer.textContent = "Paper VS. Paper";
        result.textContent = "Oops! It's a tie";
        scores.textContent = "Your Score: " + userScore + ", Computer Score: " + computerScore;
    }
    else if(playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'ROCK'){
        userScore += 1;
        computer.textContent = "Paper VS. Rock";
        result.textContent = "Congrats! You win - Paper beats Rock!";
        scores.textContent = "Your Score: " + userScore + ", Computer Score: " + computerScore;
    }
    else if(playerSelection.toUpperCase() === 'PAPER' && computerSelection.toUpperCase() === 'SCISSORS'){
        computerScore += 1;
        computer.textContent = "Paper VS. Scissors";
        result.textContent = "Oh no, you lose. Scissors beats Paper";
        scores.textContent = "Your Score: " + userScore + ", Computer Score: " + computerScore;
    }
    else if(playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'SCISSORS'){
        computer.textContent = "Scissors VS. Scissors";
        result.textContent = "Oops! It's a tie";
        scores.textContent = "Your Score: " + userScore + ", Computer Score: " + computerScore;
    }
    else if(playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'ROCK'){
        computerScore += 1;
        computer.textContent = "Scissors VS. Rock";
        result.textContent = "Aw you lose. Rock beats Scissors.";
    }
    else if(playerSelection.toUpperCase() === 'SCISSORS' && computerSelection.toUpperCase() === 'PAPER'){
        userScore += 1;
        computer.textContent = "Scissors VS. Paper";
        result.textContent = "Woohoo! Scissors beats Paper";
        scores.textContent = "Your Score: " + userScore + ", Computer Score: " + computerScore;   
    }
    else{
        result.textContent = "Oh something went wrong. Try again!"; 
    }

    if(userScore === 5 || computerScore === 5){
        if(userScore > computerScore){
            scores.style.cssText="font-weight:bold";
            result.style.cssText="color:orange; font-size:60px; font-weight:bold; font-family: 'Playfair Display', serif;";
            result.textContent = "Game Over! Congratulations! You won!";            
            userScore = 0;
            computerScore = 0;
            //Or prompt a function that shows the result and then resets the game

        }
        else if(computerScore > userScore){
            scores.style.cssText="font-weight:bold";
            result.style.cssText="color:orange; font-size:60px; font-weight:bold; font-family: 'Playfair Display', serif;";
            result.textContent = "Game Over! You lost. Try again";
            userScore = 0;
            computerScore = 0;
            //Or prompt a function that shows the result and then resets the game
 
        }
        else{
            scores.style.cssText="font-weight:bold";
            result.style.cssText="color:orange; font-size:60px; font-weight:bold; font-family: 'Playfair Display', serif;";
            result.textContent = "Game Over! It's a tie! Try again?";
            userScore = 0;
            computerScore = 0;   
            //Or prompt a function that shows the result and then resets the game
        }
    }
 }


