/*
<-- Rules of the Game -->
    Rock beats Scissor
    Paper beats Rock
    Scissor beats Paper
*/

let randomNumber=Math.random();
/*
 let's divide the scale of random number into 3 scale
 >= 0  - <1/3 ---->Rock
 >=1/3 - <2/3 ---->Paper
 >=2/3 - <1   ---->Scissor
*/
let result='';

let score=JSON.parse(localStorage.getItem('score'));

if(score===null){  //null is a falsy value
  score={
   Wins:0,
   Looses:0,
   Tie:0
  };
}
function scoreBoard(){
  document.querySelector('.js-scoreBoard').innerHTML=`Wins:${score.Wins}, Looses:${score.Looses}, Ties:${score.Tie}`;
}
scoreBoard();



//To reset the score
function reset(){
  score.Wins=0;
  score.Looses=0;
  score.Tie=0;
  localStorage.removeItem('score');
  scoreBoard();
  document.querySelector('.js-result').innerHTML='';
  document.querySelector('.js-pickups').innerHTML='';
}

function rock(){
  playerGame('rock');
}

function paper(){
  playerGame('paper');

}

function scissor(){
  playerGame('scissors');
}

//computerPickUp

function pickComputerMove(){
  let computerMove='';
  if(randomNumber>=0 && randomNumber<1/3){
    computerMove='rock';
  }else if(randomNumber>=1/3 && randomNumber<2/3){
    computerMove='paper';
  }
  else{
    computerMove='scissors';

  }
  return computerMove;

}

function playerGame(playerMove){
  const computerMove=pickComputerMove();
  let userMove=playerMove;

  //comparing the computer move with the user move
  //Rock beats Scissor
  // Paper beats Rock
  // Scissor beats Paper

  if(userMove===computerMove){
    result='Both Tie';

  }else if(userMove==='rock' && computerMove==='scissors' || userMove==='paper' && computerMove==='rock' || userMove==='scissors' && computerMove==='paper'){
    result='You Win';
  }
  // else if(userMove==='paper' && computerMove==='rock'){
  //   result='You Win';

  // }else if(userMove==='scissor' && computerMove==='paper'){
  //   result='You Win';

  // }
  else{
    result='You Lose';
  }

  //updating the scoreboard

  if(result=='You Win'){
    score.Wins+=1;

  }else if(result=='You Lose'){
    score.Looses+=1;

  }else if(result=='Both Tie'){
    score.Tie+=1;

  }

  scoreBoard();

  document.querySelector('.js-result').innerHTML=result;

  document.querySelector('.js-pickups').innerHTML=`You <img src="/${playerMove}-emoji.png" alt="" class="move-css"> - <img src="/${computerMove}-emoji.png" alt="" class="move-css"> Computer`;

  // document.getElementById('res').innerHTML=result;
  
  localStorage.setItem('score',JSON.stringify(score));
  
}





