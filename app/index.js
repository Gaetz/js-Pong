import Ball from './ball';
import Background from './background';
import Paddle from './paddle';
import ScoreManager from './scoreManager';
import {
    BALL_START_X, BALL_START_Y,
    PADDLE_PLAYER_START_X, PADDLE_PLAYER_START_Y, PADDLE_OPPONENT_START_X, PADDLE_OPPONENT_START_Y,
    FRAME_PER_SECOND
} from './config';

let canvas, canvasContext;
let ball, background, leftPaddle, rightPaddle;
let score;

/**
 * Game start
 */
window.onload = function () {
    // Load game elements
    load();
    // Manage inputs
    canvas.addEventListener('mousemove', function (evt) {
        let mousePos = calculateMousePos(evt);
        rightPaddle.y = mousePos.y - (rightPaddle.height / 2);
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
    background = new Background(canvas.width, canvas.height);
    ball = new Ball(BALL_START_X, BALL_START_Y);
    leftPaddle = new Paddle(PADDLE_PLAYER_START_X, PADDLE_PLAYER_START_Y);
    rightPaddle = new Paddle(PADDLE_OPPONENT_START_X, PADDLE_OPPONENT_START_Y);
    score = new ScoreManager();
}

/**
 * Update loop
 */
function update() {
    ball.update(canvas);
    leftPaddle.update(canvas);
    rightPaddle.update(canvas);
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
                ball.reset();
            }
        }
    }
    // Right side
    if (ball.x > canvas.width - rightPaddle.width) {
        // Ball on pad
        if (ball.y + ball.radius / 2 >= rightPaddle.y && ball.y + ball.radius / 2 <= rightPaddle.y + rightPaddle.height) {
            ball.speedY = rightPaddle.getBounceVerticalSpeed(ball.y)
            ball.speedX *= -1;
        }
        // Ball missed
        else {
            if (ball.x > canvas.width) {
                score.playerMarks();
                ball.reset();
            }
        }
    }
}

/**
 * Draw loop
 */
function draw() {
    background.draw(canvasContext);
    ball.draw(canvasContext);
    leftPaddle.draw(canvasContext);
    rightPaddle.draw(canvasContext);
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
 * Draw game scores
 */
function drawScore(canvasContext) {
    canvasContext.fillText(score.playerScore + " : " + score.opponentScore, 380, 20);
}