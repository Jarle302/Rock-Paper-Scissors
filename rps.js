let Player = 0;
let Computer = 0;
let PlayerInput;
game();
console.log(Player);
console.log(Computer);
console.log(PlayerInput,"yo");
console.log(opponent);

function game(){
    
    for (let i = 0; i < 5; i++){
        
        getComputerChoice();
        getPlayerInput();
    playRps(PlayerInput,opponent);
    }
    if (Player > Computer){
        console.log(Player,"-",Computer, "Player wins")
    }
    else if (Player < Computer){
    (console.log(Player,"-",Computer, "Computer wins"))
 }
 else{
    console.log("It's a tie!")
 }
}

function playRps(PlayerInput, opponent){
 
    if (opponent == "rock")
    {
        switch(PlayerInput)
        {
            case "paper":
            Player = Player +1;
            console.log(Player)
            break;
            case "scissors":
                Computer = Computer+ 1; 
            break;
            default:
                Computer = Computer+ 1; 
                Player = Player +1;            
            break;
                    
        }
    }
    else if ( opponent == "paper")
    {
        switch(PlayerInput){
         case "rock":
            Computer = Computer+ 1; 
                        break;
        case "scissors": 
        Player = Player +1;
                break;
        default:
            Computer = Computer+ 1; 
            Player = Player +1;
        break;
  
        }
    }
    else if(opponent == "scissors"){
        switch(PlayerInput){
        case "rock":
            Player = Player +1;
          break;
        case "paper":
            Computer = Computer+ 1; 
          break;
            default:
                Computer = Computer+ 1; 
                Player = Player +1;
           break;

    
        }
    }
    else
    throw new error;
    }
        


function getComputerChoice(){
    let random = getRandomIntInclusive(1,3);
    
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

function getPlayerInput(){
    PlayerInput = prompt("Choose rock, paper or scissors");
    PlayerInput = PlayerInput.toLowerCase();
    return PlayerInput;
    }