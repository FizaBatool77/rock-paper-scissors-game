let userScore=0;
let comScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScoreMsg=document.querySelector("#userscore");
const compScoreMsg=document.querySelector("#computerscore");
const resetbtn=document.querySelector("#resetbtn");

const genComputerChoice=()=>
{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>
{
    msg.innerText="Game was draw. Play again!";
    msg.style.backgroundColor="#1D1128";
}

const showWinner=(userwin,userChoice,compChoice)=>
{
    if(userwin)
    {
        msg.innerText=`You win! your ${userChoice} beats ${compChoice}`;
        userScore++;
        userScoreMsg.innerText= userScore;
        msg.style.backgroundColor="Green";
    }
    else{
         msg.innerText=`You lose! ${compChoice} beats your ${userChoice}`;
         comScore++;
         compScoreMsg.innerText=comScore;
         msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>
{
    //computer chooice generation
    const compChoice=genComputerChoice();
    if(userChoice===compChoice)
    {
        //draw condition
        drawGame();
    }
    else{
        let userwin=true;
        if(userChoice==="rock")
        {
            userwin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper")
        {
            userwin=compChoice==="scissors"?false:true;
        }
        else{
            userwin=compChoice==="rock"?false:true;
        }
        showWinner(userwin,userChoice,compChoice);
    }


}

const resetGame=()=>
{
    userScore=0;
    comScore=0;
    userScoreMsg.innerText= userScore;
    compScoreMsg.innerText= comScore;
    msg.innerText="Play your move";
    msg.style.backgroundColor="#1D1128"
}

choices.forEach((choice)=>
{
    choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);
   });
})

resetbtn.addEventListener("click",resetGame);