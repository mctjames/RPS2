
// the three options are called on by the computerPlay function to generate the cpu's choice
let options = ["rock", "paper", "scissors"];
// here I select and assign the values that will change based upon the game progress. 
let roundId = document.querySelector('#roundNumber');
let results = document.querySelector('#resultText');
let humanScore = document.querySelector('#humanScore');
let cpuScore = document.querySelector('#cpuScore');
// This looks for buttons being clicked and then calls on the function playRound when a button is hit.
let buttons = document.querySelectorAll('button');
buttons.forEach((button) =>{
	button.addEventListener('click', playRound)
})

// computer's choice function. I condensed this function down by switching to .length over the math based system of the original version. 
function computerPlay(){
	let computerSelection = options[Math.floor(Math.random()*options.length)];
	return computerSelection
}

// this function creats a round of RPS comparing the computer's choice to which ever button the human clicked
function playRound() {
	let computerSelection = computerPlay();
	let playerSelection = this.id;
  roundId.textContent = +roundId.textContent + 1;
  
	if (playerSelection === computerSelection) {
      results.textContent = "It's a tie. It's getting tense!";
  } 

  if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      humanScore.textContent = +humanScore.textContent +1;
      results.textContent = "You win this round because good ol rock crushes scissors!";      
    }
      if (computerSelection === "paper") {
        cpuScore.textContent = +cpuScore.textContent +1; 
        results.textContent = "Oh paper beats rock you lose!";
      }        
  }

  if (playerSelection === "paper") {
    if (computerSelection === "rock") {
        humanScore.textContent = +humanScore.textContent +1;
        results.textContent = "You win this round because paper beats rock!";      
      } 
        if (computerSelection === "scissors") {
         cpuScore.textContent = +cpuScore.textContent +1; 
         results.textContent = "Oh no you lost because paper cant stand up to scissors."
        }          
  }

  if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
       humanScore.textContent = +humanScore.textContent +1;
       results.textContent = "You win because Scissors cuts through Paper!"
      } 
        if (computerSelection === "rock") {
          cpuScore.textContent = +cpuScore.textContent +1; 
          results.textContent = "Oh no you lost because Rock crushes Scissors!"
        }
  }

// to wrap up the game once one of the players reaches 5 points an alert appears and then the game refreshes
  if (humanScore.textContent >= 5){
    alert("You won the game! Bet you cant do it again.");
    location.reload(); 
  } 
  if (cpuScore.textContent >= 5){
    alert("You lost to the computer... maybe try again?");
    location.reload(); 
  }
}