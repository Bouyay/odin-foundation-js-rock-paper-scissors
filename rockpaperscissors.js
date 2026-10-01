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

    switch (humanChoice)
    {
        case STRING_ROCK.toLowerCase():
        {
            switch (computerChoice)
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
            switch (computerChoice)
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
                    humanScore++;
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
            switch (computerChoice)
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

playGame(5);