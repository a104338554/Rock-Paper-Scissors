// 1.输入次数
// 2.进入循环，输入石头或者剪刀
// 3.5次循环
// 4,输出数据



var gameChoice=['rock','paper','scissors']
function getComputerChoice(arr){
    let index=Math.floor(Math.random()*gameChoice.length)
    return gameChoice[index]
}
// let pcChoice=getComputerChoice()
// console.log(pcChoice);

let time=prompt('how many time you want you to play')

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
// let gameResult=playRound(prompt(`please input "rock" "paper" or "scissors"`),pcChoice)
// console.log(gameResult);
for(let i=0;i<time;i++){
    let myChoice=prompt(`please input "rock" "paper" or "scissors"`)
    console.log(playRound(myChoice,getComputerChoice()));
    
}




