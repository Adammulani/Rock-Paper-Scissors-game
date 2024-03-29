let user_score=0;  //user score
let comp_score=0;  //computer score

const uchoices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const uscore_para=document.querySelector("#user-score");
const cscore_para=document.querySelector("#computer-score");

const computersTurn=()=>{
    const choices=["rock","paper","scissors"];
    const randomIndex=Math.floor(Math.random()*3) ; //floor function removes the numbers after decimal and if we multiply this number with 3 this will generate 0 to 2 numbers randomly

   return choices[randomIndex];
}

const gameDraw=()=>{
    console.log("Game draw");
    msg.innerText="Game draw. Play again";
    msg.style.backgroundColor="#003566";
}

const showWinner=(userwin,userchoice,compChoice)=>{
    if(userwin)
    {
        user_score++;
        msg.innerText=`!! You win , Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="#155d27";
        uscore_para.innerText=user_score;
    }
    else{
        comp_score++;
        msg.innerText=msg.innerText=`!! You lose ,${compChoice} beats  your ${userchoice}`;
        msg.style.backgroundColor="#c1121f";
        cscore_para.innerText=comp_score;


    }
}

const game=(choice)=>{
  //console.log("users choice ",choice.getAttribute("id"));
  // generate computers choice

  console.log("users choice ",choice);
  const compChoice=computersTurn();
  console.log("Computers choice ", compChoice);

  if(choice===compChoice)
  {
    // game draw
    gameDraw();
  }
  else{
    let userwin=true;
    if(choice==="rock")  ///users choice is rock
    {
        // now here computer choice can be either scissors or paper
        userwin= (compChoice==="scissors")?true:false;
    }
    else if(choice==="paper")
    {
        // here computer choice can be either rock or scissors
        userwin=(compChoice==="rock")?true:false;
    }
    else if(choice==="scissors")
    {
        //here computer choice can be either paper or rock
        userwin=(compChoice==="paper")?true:false;
    }
    showWinner(userwin,choice,compChoice);
  }
}

uchoices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
       game(choice.getAttribute("id"));
    })
})
