const player1ScoreDisplay = document.getElementById('player1Score');
const player2ScoreDisplay = document.getElementById('player2Score');

const winingScoreDisplay = document.querySelector('p span');

const inputScore = document.getElementById('inputScore');
const player1Btn = document.getElementById('player1Btn');
const player2Btn = document.getElementById('player2Btn');
const resetBtn = document.getElementById('resetBtn');
let player1Score = 0;
let player2Score = 0;
const winingScore = 5;
let gameOver = false;

player1Btn.addEventListener('click', () => {
    // console.log('clicked Player 1');
    // 1. Change Data
   if(!gameOver){
    player1Score ++;
    isWinner(player1Score, winingScore);
   }
    // 2.Show changed data working with dom
    player1ScoreDisplay.textContent = player1Score;
});

player2Btn.addEventListener('click', () => {
    if(!gameOver){
        player2Score ++;
        isWinner(player2Score, winingScore);
    }
    player2ScoreDisplay.textContent = player2Score;
});

function isWinner(oldScore, winingScore){
    if(oldScore === winingScore){
        gameOver = true;
        player1Btn.setAttribute('disabled', 'disabled');
        player2Btn.setAttribute('disabled', 'disabled');
    }
}

resetBtn.addEventListener('click', () =>{
    player1Score = 0;
    player2Score = 0;
    gameOver = false;
    player1ScoreDisplay.textContent = 0;
    player2ScoreDisplay.textContent = 0;
    //after reset button will be enable
    player1Btn.removeAttribute('disabled'); 
    player2Btn.removeAttribute('disabled');
});