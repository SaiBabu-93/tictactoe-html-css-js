let boxes=document.querySelectorAll(".box")
let reset = document.querySelector("#reset-btn");
let newGame = document.querySelector("#new-btn");
let winnerMsg = document.querySelector(".winner-container");
let msg = document.querySelector(".msg");
const winners=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
let turnO=false;
let clickCount=0;
const resetGame=()=>{
    turnO=false;
    enableBtns();
    winnerMsg.classList.add("hide");
    clickCount=0;
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.textContent="O"
            turnO=false
        }else{
            box.textContent="X"
            turnO=true
        }
        clickCount++;
        box.disabled=true;
        checkWinner();
        if(clickCount==9){
            showDraw();
        }
    })
})
const disableBtns=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    })
}
const enableBtns=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText="";
    })
}
const showWinner=(winner)=>{
    msg.textContent=`Congragulations Player ${winner} ! You are the Winner....`;
    winnerMsg.classList.remove('hide');
    disableBtns();
}
const showDraw=()=>{
    msg.textContent=`Oh! it's a draw match try  new one.....`;
    winnerMsg.classList.remove('hide');
    disableBtns();
}

const checkWinner=()=>{
   winners.forEach((pattern)=>{
    let pos1=boxes[pattern[0]].textContent;
    let pos2=boxes[pattern[1]].textContent;
    let pos3=boxes[pattern[2]].textContent;
    if(pos1 !="" && pos2 !="" && pos3 !="" ){
        if(pos1===pos2 && pos2===pos3){
            showWinner(pos1);
        }
    }
   })
}
newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);