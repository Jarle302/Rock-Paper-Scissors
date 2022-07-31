var player = 0;
var computer = 0;

function playRps(){
    var playerInput =  prompt("Choose rock, paper or scissors");
    var opponent ="";
    playerInput.toLowerCase();
    if (playerInput == "rock"|| playerInput == "paper" || playerInput == "scissors")
    {
    getComputerChoice();
    if (opponent == "rock")
    {
        switch(playerInput)
        {
            case "paper":
                return player++;
            case "scissors":
                return computer++;
                default:
                    return computer++ + player++;
                    
        }
    }
    else if ( opponent == "paper")
    {
        switch(playerInput){
         case "rock":
            return computer++;
        case "scissors": 
        return player++;
        default:
            return computer++ + player++;
  
        }
    }
    else if(opponent == "scissors"){
        switch(playerInput){
        case "rock":
            return player++;
        case "paper":
            return computer++;
            default:
                return computer++ + player++;

    
        }
    }
    }
    else
    { 
    throw new Error("choose either rock, paper or scissors")
    }
    }


function getComputerChoice(){
    var random = getRandomIntInclusive(1,3);
    
        if (random == 1){
            opponent = "rock";
            console.log("opponent has rock");
        }
        else if (random == 2){
            opponent = "paper";
            console.log("opponent has paper");
        }
        else{
            opponent = "scissors";
            console.log("opponent has scissors");
        }
    
    return opponent;
    }
    
    
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);}
