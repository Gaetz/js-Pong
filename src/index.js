import Ball from './ball';
import Background from './background';

let canvas;
let canvasContext;
let ball;
let background;

let framePerSecond = 60;

window.onload =	function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    background = new Background(canvas.width, canvas.height);
    ball = new Ball(10, 75, 75);
    
    setInterval( () => {
        update();
        draw();
    }, 1000/framePerSecond);
}

function update() {
    ball.x += 5;
}

function draw() {
    // Background
    background.draw(canvasContext);
    // Ball
    ball.draw(canvasContext);
}