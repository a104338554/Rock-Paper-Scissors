// 1.输入次数
// 2.进入循环，输入石头或者剪刀
// 3.5次循环
// 4,输出数据



var gameChoice=['rock','paper','scissors']
function getComputerChoice(arr){
    let index=Math.floor(Math.random()*gameChoice.length)
    return gameChoice[index]
}
let pcChoice=getComputerChoice(gameChoice)
let win=0
let draw=0
let lose=0

const player=document.querySelector(".player")
const pc=document.querySelector(".pc")
const tie=document.querySelector(".tie")
// console.log(pcChoice);

// let time=prompt('how many time you want you to play')

function playRound(myChoice,pcChoice){
    let result
    
    if(myChoice===pcChoice){
        result=`you are ${myChoice} || computer is ${pcChoice},draw!`
    }
    else if ((myChoice==='rock'&&pcChoice==='scissors')||(myChoice==='scissors'&&pcChoice==='paper')||(myChoice==='paper'&&pcChoice==='rock')){
        result=`you are ${myChoice} || computer is ${pcChoice},you are win!!`}
    else{

    
    result=`you are ${myChoice} || computer is ${pcChoice},you are lose!! `}
        return result

}
function gameScore(myChoice,pcChoice){
    if ((myChoice==='rock'&&pcChoice==='scissors')||(myChoice==='scissors'&&pcChoice==='paper')||(myChoice==='paper'&&pcChoice==='rock')){
        win++
    }
    else if(myChoice===pcChoice){
        draw++
    }
    else{
        lose++
    }

}
function gameResult(){
    if(win===5){
        alert("you are win ")
        win=0
        draw=0
        lose=0
    }
    if(lose===5){
        alert("you are lose ")
        win=0
        draw=0
        lose=0
       
    }
       
}

const result=document.querySelector(".result")
// add event to rock button
const rock=document.querySelector("#rock")


rock.addEventListener("click",()=>{
    let pcChoice=getComputerChoice(gameChoice)
    result.innerHTML=`${playRound("rock",pcChoice)}`;
    gameScore("rock",pcChoice)
    // console.log(`${win},${lose},${draw}`);
    player.innerHTML=`you win ${win} time `
    pc.innerHTML=`pc win ${lose} time`
    // tie.innerHTML=`${draw}`
    gameResult()

})

// add event to paper button
const paper=document.querySelector("#paper")


paper.addEventListener("click",()=>{
    let pcChoice=getComputerChoice(gameChoice)
    result.innerHTML=`${playRound("paper",pcChoice)}`;
    gameScore("paper",pcChoice)
    // console.log(`${win},${lose},${draw}`);
    player.innerHTML=`you win${win}time`
    pc.innerHTML=`pc win${lose} time`
    // tie.innerHTML=`${draw}`
    gameResult()




})
// add event to scissors button
const scissors=document.querySelector("#scissors")


scissors.addEventListener("click",()=>{
    let pcChoice=getComputerChoice(gameChoice)
    result.innerHTML=`${playRound("scissors",pcChoice)}`;
    gameScore("scissors",pcChoice)
    // console.log(`${win},${lose},${draw}`);
    player.innerHTML=`you win${win} time`
    pc.innerHTML=`pc win${lose} time`
    // tie.innerHTML=`${draw}`
    gameResult()





})


// get data from win
// console.log(result);


// for(let i=0;i<time;i++){
//     let myChoice=prompt(`please input "rock" "paper" or "scissors"`)
//     console.log(playRound(myChoice,getComputerChoice()));
    
// }




