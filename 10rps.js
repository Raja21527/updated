let scores = JSON.parse(localStorage.getItem('scores')) || {
    win:0,
    lose:0,
    tie:0
}
updateScoreElement()

/*
if(scores == null || !score){
scores = {
    win:0,
    lose:0,
    tie:0
}
}
  */
function playGame(playerMove){
let computerMove= pickComputerMove();


let result='';


if(playerMove === 'Rock'){
if(computerMove === 'rock'){
    result="it's a tie";
   
}
else if(computerMove === 'paper'){
    result='You lose!'
    
}
else if(computerMove === 'scissors'){
    result='You won!';
    
}
}

else if(playerMove === 'Scissors' ){
if(computerMove === 'rock'){
    result="You lose!";
   
}
else if(computerMove === 'paper'){
    result='You won!';
 
}
else if(computerMove === 'scissors'){
    result="it's a tie";
    
}
}

else if(playerMove === 'paper'){
if(computerMove === 'paper'){
    result="it's a tie";
}
else if(computerMove === 'scissors'){
    result='You lose!';
   
}
else if(computerMove === 'rock'){
    result='You won!';
    
}
}

document.querySelector('.result').innerHTML=`${result}`;

document.querySelector('.moves').innerHTML=`<span class='one'>You </span>
<img src= "${playerMove}-emoji.png"
class="move-ion">
<img src ="${computerMove}-emoji.png"
class="move-ion">
<span class='one'>computer<span> `

if(result === "it's a tie"){
    scores.tie +=1
}
else if(result === 'You lose!'){
    scores.lose +=1
}
else if(result === 'You won!'){
    scores.win +=1
}
localStorage.setItem('scores',JSON.stringify(scores))
  
updateScoreElement()


//  alert(`You picked ${playerMove}.Computer picked ${computerMove}.${result} and scores are as follow WINS:${scores.win}  LOOSE:${scores.lose}  Tie:${scores.tie}.`)
}


function updateScoreElement(){

document.querySelector('.win').innerHTML=`WINS:${scores.win}  LOOSE:${scores.lose}  TIE:${scores.tie}`
}



function pickComputerMove(){
const randomNumber = (Math.random());

let computerMove='';

if(randomNumber >= 0 && randomNumber < (1/3)){
computerMove = 'scissors';
}
else if(randomNumber >= (1/3) && randomNumber < (2/3)){
computerMove = 'rock';
}
else{
computerMove='paper';
}

return computerMove;
}  