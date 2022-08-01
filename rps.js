let Player = 0;
let Computer = 0;
let PlayerInput;
let txtBox = document.createElement("p");
textBox.appendChild(txtBox)
let choiceTxt = document.getElementById("testi");
choiceTxt.innerText = "Your choice will be the difference between victory or defeat!"; 

        //Button that chooses rock when clicked
        const buttonROck = document.getElementById("rock")
        buttonROck.addEventListener('click',() => {
        PlayerInput = "rock";
        console.log("rock")
        choiceTxt.innerText ="You have chosen Rock!";
        getComputerChoice();
        playRps(PlayerInput, opponent)})

        //Button that chooses scissors when clicked
        const buttonScissors = document.getElementById("scissors")
        buttonScissors.addEventListener('click',() => {
        PlayerInput = "scissors";
        console.log("scissors")
        choiceTxt.innerText = "You have chosen Scissors!";
        getComputerChoice();
        playRps(PlayerInput, opponent)})

        //Button that chooses paper when clicked
        const buttonPaper = document.getElementById("paper")
        buttonPaper.addEventListener('click',() => {
        PlayerInput = "paper";
        console.log("paper")
        choiceTxt.innerText ="You have chosen Paper!";
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

        



/*function getPlayerInput(){
    PlayerInput = prompt("Choose rock, paper or scissors");
    PlayerInput = PlayerInput.toLowerCase();
    if (PlayerInput == "rock"|| PlayerInput == "paper" || PlayerInput == "scissors")
    {
    return PlayerInput;
    }
    else
    throw new Error("invalid input, input :rock,paper or scissors")*/

   