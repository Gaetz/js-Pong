import Ball from './ball';

let canvas;
let canvasContext;
let ball;

window.onload =	function() {
    console.log("Hello World!");

    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    ball = new Ball(10, 75, 75);
    draw();
}

function draw() {
    // Background
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    // Ball
    ball.draw(canvasContext);

}