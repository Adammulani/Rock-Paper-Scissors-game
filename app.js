let uscore=0;  //user score
let cscore=0;  //computer score

const uchoices=document.querySelectorAll(".choice");

const computersTurn=()=>{
    const choices=["rock","paper","scissors"];
    const randomIndex=Math.floor(Math.random()*3) ; //floor function removes the numbers after decimal and if we multiply this number with 3 this will generate 0 to 2 numbers randomly

   return choices[randomIndex];
}

const game=(choice)=>{
  console.log("users choice ",choice.getAttribute("id"));
  // generate computers choice
  const compChoice=computersTurn();
  console.log("Computers choice ", compChoice);
}

uchoices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
       game(choice);
    })
})
