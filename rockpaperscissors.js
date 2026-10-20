const STRING_ROCK = "Rock";
const STRING_PAPER = "Paper";
const STRING_SCISSORS = "Scissors";

function getComputerChoice()
{
    let choice = Math.random()*3;
    //console.log(choice);

    choice = Math.round(choice) % 3;
    //console.log(choice);

    let string;
    switch(choice)
    {
        case 0:
        {
            string = STRING_ROCK;
            break;
        }

        case 1:
        {
            string = STRING_PAPER;
            break;
        }

        case 2:
        {
            string = STRING_SCISSORS;
            break;
        }
    }
    
    return string.toLowerCase();
}

//console.log(getComputerChoice());

function getHumanChoice()
{
    let string = prompt("Enter rock, paper, or scissors");
    return string.toLowerCase();
}

//console.log(getHumanChoice());


const STRING_LOSE = "You lose! ";
const STRING_WIN = "You Win! ";
const STRING_TIE = "You tie!\n";
const STRING_PAPER_BEAT_ROCK = "Paper beats Rock.\n";
const STRING_ROCK_BEAT_SCISSORS = "Rock beats Scissors.\n"
const STRING_SCISSORS_BEAT_PAPER = "Scissors beats Paper.\n"

function playRound(humanChoice, computerChoice)
{
    let string;
    let score = 0;

    console.log("Human choioce: " + humanChoice);
    console.log("Computer choioce: " + computerChoice);

    switch (humanChoice.toLowerCase())
    {
        case STRING_ROCK.toLowerCase():
        {
            switch (computerChoice.toLowerCase())
            {
                case STRING_PAPER.toLowerCase():
                {
                    string = STRING_LOSE + STRING_PAPER_BEAT_ROCK;
                    score--;
                    break;
                }

                case STRING_SCISSORS.toLowerCase():
                {
                    string = STRING_WIN + STRING_ROCK_BEAT_SCISSORS;
                    score++;
                    break;
                }

                default:
                {
                    string = STRING_TIE;
                }
            }
            break;
        }

        case STRING_PAPER.toLowerCase():
        {
            switch (computerChoice.toLowerCase())
            {
                case STRING_SCISSORS.toLowerCase():
                {
                    string = STRING_LOSE + STRING_SCISSORS_BEAT_PAPER;
                    score--;
                    break;
                }

                case STRING_ROCK.toLowerCase():
                {
                    string = STRING_WIN + STRING_PAPER_BEAT_ROCK;
                    score++;
                    break;
                }

                default:
                {
                    string = STRING_TIE;
                }
            }
            break;
        }

        case STRING_SCISSORS.toLowerCase():
        {
            switch (computerChoice.toLowerCase())
            {
                case STRING_ROCK.toLowerCase():
                {
                    string = STRING_LOSE + STRING_ROCK_BEAT_SCISSORS;
                    score--;
                    break;
                }

                case STRING_PAPER.toLowerCase():
                {
                    string = STRING_WIN + STRING_SCISSORS_BEAT_PAPER;
                    score++;
                    break;
                }

                default:
                {
                    string = STRING_TIE;
                }
            }
            break;
        }

        default:
            string = "Something went wrong!\n";
    }

    console.log(string);
    return score;
}

//playRound(getHumanChoice(), getComputerChoice());
//console.log("Human Score: " + humanScore);
//console.log("Computer Score: " + computerScore);

function playGame(rounds)
{
    let humanScore = 0;
    let computerScore = 0;

    for(let i=0; i < rounds; i++)
    {
        let score = playRound(getHumanChoice(), getComputerChoice());

        if (score > 0)
            humanScore++;
        else if (score < 0)
            computerScore++;
        
        console.log("Round: " + (i+1));
    }

    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
}

//playGame(5);

let roundCntr = 0;
let roundName = "";
let winner = 0;

function uiPlayRound(humanChoice)
{
    if (roundCntr < 5)
    {
        let score = playRound(humanChoice, getComputerChoice());
        
        if (score > 0)
        {
            roundName = "You";
            winner++;
        }
        else if (score < 0)
        {
            roundName = "Computer";
            winner--;
        }
        else
            roundName = "Tie";

        roundCntr++;
    }

    let gameWinner = "";
    if (roundCntr == 5)
    {
        if (winner > 0)
            gameWinner = "You win!";
        else if (winner < 0)
            gameWinner = "Computer Wins!"
        else
            gameWinner = "Its a Tie";
    }

    console.log(winner);
    
    return [roundName, roundCntr, gameWinner]
}

const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissor = document.querySelector("#btnScissors");
const cntrGame = document.querySelector(".game-number");
const roundWinner = document.querySelector(".winner-name");
const gameWinner = document.createElement("h2");
const displayDiv = document.querySelector(".display");

function CheckEnd(results) {
    roundWinner.textContent = results[0];
    cntrGame.textContent = results[1];

    if (results[2] != "")
    {
        gameWinner.textContent = `Game Over, ${results[2]}!`;
        displayDiv.appendChild(gameWinner);
    }
}

function Rock(event) {
    CheckEnd(uiPlayRound(STRING_ROCK));
}

function Paper(event) {
    CheckEnd(uiPlayRound(STRING_PAPER));
}

function Scissors(event) {
    CheckEnd(uiPlayRound(STRING_SCISSORS));
}

btnRock.addEventListener("click", Rock);
btnPaper.addEventListener("click", Paper);
btnScissor.addEventListener("click", Scissors);