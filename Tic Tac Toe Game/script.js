let buttons = document.querySelectorAll(".box");
let playAgain = document.querySelector(".btn");
let msg = document.querySelector(".Win");
let output = document.querySelectorAll(".Output");
let CompScore = document.querySelector(".compScore");
let UserScore = document.querySelector(".userScore");


let turn0 = true;
const numbers = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let userScoreCount = 0;
let compScoreCount = 0;

let count = 0;
buttons.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0 === true) {
      box.innerHTML = "0";
      turn0 = false;
    } else {
      box.innerHTML = "x";
      turn0 = true;
    }
    box.disabled = true;
    checkwinner();

    box.disabled = true;
    count++;

    let isWinner = checkwinner();

    if (count === 9 && !isWinner) {
      gameDraw();
  }
  });
});




  const showWinner = (winner) => {
    msg.classList.remove("hide");
    msg.innerText = `Congratulations, Winner is ${winner}`;
   
  }

  const updateScores = (winner) => {
    if (winner === "0") {
        console.log("function run");
      userScoreCount++;
      UserScore.innerText = `User: ${userScoreCount}`;
    } else if (winner === "x") {
        console.log("function run");
      compScoreCount++;
      CompScore.innerText = `Computer: ${compScoreCount}`;
    }
  };


const checkwinner = () => {
  for (num of numbers) {
    let pos1 = buttons[num[0]].innerHTML;
    let pos2 = buttons[num[1]].innerHTML;
    let pos3 = buttons[num[2]].innerHTML;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("winner", pos1);
        disableboxes();
        showWinner(pos1);
        updateScores(pos1);
       
        
      }
    }
  }
};

// if(winner === pos1){
//     CompScore.innerHTML = `Computer Score ${count}`; 
// } else {
//     UserScore.innerHTML =  `User Score ${count}`;   
// }

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msg.classList.remove("hide");
    disableboxes();
  };

const disableboxes = () => {
    for (btn of buttons){
        btn.disabled = true;
    }
}

const enableboxes = () => {
    for (btn of buttons){
        btn.innerHTML = " ";
        btn.disabled = false;
     
        
    }
}
const reset = () => {
  turn0 = true;
  count = 0;
 enableboxes();
  msg.classList.add("hide");
};

playAgain.addEventListener("click", reset);
