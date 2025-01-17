let userScore = 0;
let compScore = 0;
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore
        msg.innerText = `You won. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore
        console.log("You lost!");
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const drawGame = () => {
    console.log("Draw.")
    msg.innerText = "Game was draw. Tray again!"
    msg.style.backgroundColor="#081b31"
};

const genCompChoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
};

const playGame = (userChoice) => {
    console.log("userchoice is",userChoice)
    const compChoice = genCompChoice();
    console.log("Compchoice is",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice , compChoice);
    }
};

const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener('click',() => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});