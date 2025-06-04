let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

 const genComChoice = ()=>{
    const options = ["rock", "paper", "scissors"];
    const randIndex = Math.floor(Math.random() * 3); 
    return options[randIndex];
 }


const drawGame = () =>{
   
     msg.innerText = "Game was draw";
     msg.style.backgroundColor = "#081b31"; 
}


const showWinner = (userWin, userChoice, comChoice) =>{
    if(userWin){
        
        msg.innerText = `You win!, your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor = "green"; 
        userScore++;
        userScorePara.innerText = userScore;

    } else{
        
        msg.innerText = `You lose!, ${comChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red"; 
        compScore++;
        compScorePara.innerText = compScore;
    }

}


const playGame = (userChoice)=>{
   
    
    //Generate computer choice
    const comChoice = genComChoice();
   

    if(userChoice === comChoice){
        //Draw match
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            //paper, scissors
            userWin = comChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //rock, scissors
            userWin = comChoice === "scissors" ? false : true;
        } else{
            //rock, paper
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, comChoice);
    }

}


choices.forEach((choice)=> {
    choice.addEventListener("click", ()=>{
        
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);

    })
})