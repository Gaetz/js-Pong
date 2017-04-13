import Ball from './ball';
import Background from './background';
import Paddle from './paddle';
import PaddleAI from './paddleAI';
import ScoreManager from './scoreManager';
import {
    BALL_START_X, BALL_START_Y,
    PADDLE_PLAYER_START_X, PADDLE_PLAYER_START_Y, PADDLE_OPPONENT_START_X, PADDLE_OPPONENT_START_Y,
    FRAME_PER_SECOND, POINTS_TO_WIN
} from './config';

let canvas, canvasContext;
let ball, background, leftPaddle, rightPaddle;
let score, isGameWon;

/**
 * Game start
 */
window.onload = function () {
    // Load game elements
    load();
    // Manage inputs
    canvas.addEventListener('mousemove', function (evt) {
        let mousePos = calculateMousePos(evt);
        leftPaddle.y = mousePos.y - (leftPaddle.height / 2);
    });
    // Loop
    setInterval(() => {
        update();
        draw();
    }, 1000 / FRAME_PER_SECOND);
}

/**
 * Loading game elements 
 * */
function load() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    canvasContext.textAlign = 'center';
    background = new Background(canvas.width, canvas.height);
    ball = new Ball(BALL_START_X, BALL_START_Y);
    leftPaddle = new Paddle(PADDLE_PLAYER_START_X, PADDLE_PLAYER_START_Y);
    rightPaddle = new PaddleAI(PADDLE_OPPONENT_START_X, PADDLE_OPPONENT_START_Y);
    score = new ScoreManager();
    isGameWon = false;
}

/**
 * Update loop
 */
function update() {
    isGameWon = checkVictory();
    // Game logic
    if (isGameWon == 0) {
        ball.update(canvas);
        leftPaddle.update();
        rightPaddle.update(ball);
        // Hozizontal out of terrain
        // - Left side
        if (ball.x < leftPaddle.width) {
            // Ball on pad
            if (ball.y + ball.radius / 2 >= leftPaddle.y && ball.y + ball.radius / 2 <= leftPaddle.y + leftPaddle.height) {
                ball.speedY = leftPaddle.getBounceVerticalSpeed(ball.y)
                ball.speedX *= -1;
            }
            // Ball missed
            else {
                if (ball.x < 0) {
                    score.opponentMarks();
                    // Reset ball except if game is won, to get end photo
                    if (checkVictory() == 0) ball.reset();
                }
            }
        }
        // Right side
        if (ball.x > canvas.width - rightPaddle.width) {
            if (ball.y + ball.radius / 2 >= rightPaddle.y && ball.y + ball.radius / 2 <= rightPaddle.y + rightPaddle.height) {
                ball.speedY = rightPaddle.getBounceVerticalSpeed(ball.y)
                ball.speedX *= -1;
            }
            else {
                if (ball.x > canvas.width) {
                    score.playerMarks();
                    if (checkVictory() == 0) ball.reset();
                }
            }
        }
    }
}

/**
 * Draw loop
 */
function draw() {
    if (isGameWon == 0) {
        background.draw(canvasContext);
        ball.draw(canvasContext);
        leftPaddle.draw(canvasContext);
        rightPaddle.draw(canvasContext);
    } else {
        drawEndGame(canvasContext);
    }
    drawScore(canvasContext);
}

/**
 * Get mouse position on screen
 * @param {event} evt - Passing mouse move
 */
function calculateMousePos(evt) {
    let rect = canvas.getBoundingClientRect();
    let root = document.documentElement;
    let mouseX = evt.clientX - rect.left - root.scrollLeft;
    let mouseY = evt.clientY - rect.top - root.scrollTop;
    return {
        x: mouseX,
        y: mouseY
    };
}

/**
 * Returns true when game is won
 */
function checkVictory() {
    if (score.playerScore == POINTS_TO_WIN)
        return 1;
    else if (score.opponentScore == POINTS_TO_WIN)
        return 2;
    else
        return 0;
}

/**
 * Draw game scores
 */
function drawScore(canvasContext) {
    canvasContext.fillText(score.playerScore + ' : ' + score.opponentScore, canvas.width / 2, 20);
}

/**
 * Draw victory screen
 */
function drawEndGame(canvasContext) {
    if (isGameWon == 1) {
        canvasContext.fillText('Player wins !', canvas.width / 2, canvas.height / 2);
    } else if (isGameWon == 2) {
        canvasContext.fillText('Robot wins !', canvas.width / 2, canvas.height / 2);
    }
}