let userScore=0;
let compScore=0;


let choices=document.querySelectorAll(".choice");
let msg=document.getElementById("msg");

function showWinner(userWin){

    if(userWin)
    {
        msg.innerText="You Win!"
        msg.style.backgroundColor="green";
        userScore++;

        let user=document.getElementById("user-score");

        user.innerText=userScore;
    }
    else
    {
        msg.innerText="Computer wins!"

        msg.style.backgroundColor="red";
        compScore++;

        let comp=document.getElementById("computer-score")

        comp.innerText=compScore;
    }
}

let compChoice=()=>{

    let options=["rock","paper","scissors"];

    let idx=Math.floor(Math.random()*3);

    return (options[idx]);


    



}



let playGame=(userChoice)=>{

    let compval=compChoice();

    if(userChoice==compval)
    {
        msg.innerText="Game drawn";

    }

    else
    {
        let userWin=true;

        if(userChoice=="rock")
        {
            userWin=compval=="paper"?false:true;

        }

        else if(userChoice=="paper")
        {
            userWin=compval=="scissors"?false:true;
        }

        else
        {
            userWin=compval=="rock"?false:true;
        }

        showWinner(userWin);


    }



}


choices.forEach((choice)=>{

    choice.addEventListener("click",()=>{

        let userChoice=choice.getAttribute("id");

        playGame(userChoice);
    })
})