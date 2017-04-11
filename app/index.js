import Ball from './ball';
import Background from './background';
import Paddle from './paddle';

const FRAME_PER_SECOND = 30;

let canvas, canvasContext;
let ball, background, leftPaddle;

window.onload =	function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    background = new Background(canvas.width, canvas.height);
    ball = new Ball(10, 75, 75);
    leftPaddle = new Paddle(0, 250);
    
    setInterval( () => {
        update();
        draw();
    }, 1000/FRAME_PER_SECOND);
}

function update() {
    ball.update(canvas);
    leftPaddle.update(canvas);
}

function draw() {
    background.draw(canvasContext);
    ball.draw(canvasContext);
    leftPaddle.draw(canvasContext);
}