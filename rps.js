let Player = 0;
let Computer = 0;
let PlayerInput;
let txtBox = document.createElement("p");
textBox.appendChild(txtBox)
let choiceTxt = document.getElementById("pChoice");
choiceTxt.innerText = "Your choice will be the difference between victory or defeat!";
let cChoiceTxt = document.getElementById("cChoice"); 
let narrator = document.getElementById("narration");
narrator.innerText = " WATER BEATS FIRE";
let pointsP = document.getElementById("playerPoints");
pointsP.innerText = Player;
let pointsR = document.getElementById("rivalPoints");
pointsP.innerText = Computer;

if (Player >= 5 || Computer >=5)
{
    if(Player >= 5)
    {
        narrator.innerText = "Player wins!"
        Player = 0;
        Computer = 0;
    }
    else if(Computer >= 5)
    {
        narrator.innerText = "Computer wins!"
        Player = 0;
        Computer = 0;
    }
    else
    {
        narrator.innerText = "DRAW!"
        Player = 0;
        Computer = 0;
    }
}

        //Button that chooses rock when clicked
        const buttonROck = document.getElementById("rock")
        buttonROck.addEventListener('click',() => {
        PlayerInput = "rock";
        console.log("rock")
        choiceTxt.innerText ="You have chosen FIRE!";
        getComputerChoice();
        playRps(PlayerInput, opponent)})

        //Button that chooses scissors when clicked
        const buttonScissors = document.getElementById("scissors")
        buttonScissors.addEventListener('click',() => {
        PlayerInput = "scissors";
        console.log("scissors")
        choiceTxt.innerText = "You have chosen GRASS!";
        getComputerChoice();
        playRps(PlayerInput, opponent)})

        //Button that chooses paper when clicked
        const buttonPaper = document.getElementById("paper")
        buttonPaper.addEventListener('click',() => {
        PlayerInput = "paper";
        console.log("paper")
        choiceTxt.innerText ="You have chosen WATER!";
        getComputerChoice();
        playRps(PlayerInput, opponent)})

 /*game();

function game(){
    
   for (let i = 0; i < 5; i++){
        getPlayerInput();
        getComputerChoice();
    playRps(PlayerInput,opponent);
    }
    if (Player > Computer){
        console.log(Player,"-",Computer, "Player wins")
    }
    else if (Player < Computer){
    (console.log(Player," ",Computer, "Computer wins"))
 }
 else{
    console.log("It's a tie!")
 }
}*/

//plays a round of rock paper scissors
function playRps(PlayerInput, opponent){
 
    if (opponent == "rock")
    {
        switch(PlayerInput)
        {
            case "paper":
                narrator.innerText = " WATER BEATS FIRE! You win the round";

            Player = Player +1;
            console.log(Player)
            break;
            case "scissors":
                narrator.innerText = " FIRE BEATS GRASS! You lose the round";
            break;
            default:
            narrator.innerText = " FIRE vs FIRE! It's a TIE!";
                Computer = Computer+ 1; 
                Player = Player +1;            
            break;
                    
        }
    }
    else if ( opponent == "paper")
    {
        switch(PlayerInput){
         case "rock":
            narrator.innerText = " WATER BEATS FIRE! Rival wins the round";
            break;
        case "scissors":
            narrator.innerText = " GRASS BEATS WATER! You win the round!" 
        Player = Player +1;
                break;
        default:
            narrator.innerText = " WATER vs WATER! It's a TIE!";
            Computer = Computer+ 1; 
            Player = Player +1;
        break;
  
        }
    }
    else if(opponent == "scissors"){
        switch(PlayerInput){
        case "rock":
            narrator.innerText = " FIRE BEATS GRASS! You win!"
            Player = Player +1;
          break;
        case "paper":
            narrator.innerText = " GRASS BEATS WATER! RIVAL wins the round!";

            Computer = Computer+ 1; 
          break;
            default:
                narrator.innerText = " GRASS vs GRASS! It's a TIE!";
                Computer = Computer+ 1; 
                Player = Player +1;
           break;

    
        }
    }
}
        


function getComputerChoice(){
    let random = getRandomIntInclusive(1,3);
    
        if (random == 1){
            opponent = "rock";
            cChoice.innerText = "Rival chooses FIRE";
        }
        else if (random == 2){
            opponent = "paper";
            cChoice.innerText = "Rival chooses WATER";
        }
        else{
            opponent = "scissors";
            cChoice.innerText = "Rival chooses GRASS";
        }
    
    return opponent;
    }
    
    
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);}

        



/*function getPlayerInput(){
    PlayerInput = prompt("Choose rock, paper or scissors");
    PlayerInput = PlayerInput.toLowerCase();
    if (PlayerInput == "rock"|| PlayerInput == "paper" || PlayerInput == "scissors")
    {
    return PlayerInput;
    }
    else
    throw new Error("invalid input, input :rock,paper or scissors")*/

   