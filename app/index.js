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

function draw() {
    background.draw(canvasContext);
    ball.draw(canvasContext);
    leftPaddle.draw(canvasContext);
}

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