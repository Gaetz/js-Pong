import Ball from './ball';
import Background from './background';
import Paddle from './paddle';
import {BALL_START_X, BALL_START_Y, PADDLE_START_X, PADDLE_START_Y, FRAME_PER_SECOND} from './config';

let canvas, canvasContext;
let ball, background, leftPaddle;

/**
 * Game start
 */
window.onload =	function() {
    // Load game elements
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    background = new Background(canvas.width, canvas.height);
    ball = new Ball(BALL_START_X, BALL_START_Y);
    leftPaddle = new Paddle(PADDLE_START_X, PADDLE_START_Y);
    
    // Manage input
    canvas.addEventListener('mousemove', function(evt) {
        let mousePos = calculateMousePos(evt);
        leftPaddle.y = mousePos.y - (leftPaddle.height/2);	
    } );
    // Loop
    setInterval( () => {
        update();
        draw();
    }, 1000/FRAME_PER_SECOND);
}

/**
 * Update loop
 */
function update() {
    ball.update(canvas);
    leftPaddle.update(canvas);
    // Hozizontal out of terrain
    // - Left side
    if(ball.x < leftPaddle.width) {
        // Ball on pad
        if(ball.y + ball.radius/2 >= leftPaddle.y && ball.y + ball.radius/2 <= leftPaddle.y + leftPaddle.height)
            ball.speedX *= -1;
        // Ball missed
        else {
            if(ball.x < 0)
                ball.reset();
        }
    }
    // Right side
    if(ball.x > canvas.width) {
        ball.speedX *= -1;
    }
}

/**
 * Draw loop
 */
function draw() {
    background.draw(canvasContext);
    ball.draw(canvasContext);
    leftPaddle.draw(canvasContext);
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