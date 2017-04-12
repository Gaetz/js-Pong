import { PADDLE_WIDTH, PADDLE_HEIGHT, PADDLE_STYLE } from './config';

/**
 * Moving paddle, to send back the ball
 */
export default class Paddle {

  constructor(x, y, width = PADDLE_WIDTH, height = PADDLE_HEIGHT, speedY = 0) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speedY = speedY;
  }

  update(canvas) {
    // Move
    this.y += this.speedY;
    // Limits
    if (this.y + this.height > canvas.height ||  this.y < 0)
      this.speedY = 0;
  }

  draw(canvasContext) {
    canvasContext.fillStyle = PADDLE_STYLE;
    canvasContext.beginPath();
    canvasContext.rect(this.x, this.y, this.width, this.height);
    canvasContext.fill();
  }
}