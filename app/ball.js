import { BALL_START_X, BALL_START_Y, BALL_RADIUS, BALL_START_SPEED_X, BALL_START_SPEED_Y, BALL_STYLE } from './config';

/**
 * The ball the players have to catch
 */
export default class Ball {

  constructor(x, y, radius = BALL_RADIUS, speedX = BALL_START_SPEED_X, speedY = BALL_START_SPEED_Y) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  update(canvas) {
    // Move
    this.x += this.speedX;
    this.y += this.speedY;
    // Bounce
    if (this.y > canvas.height ||  this.y < 0)
      this.speedY *= -1;
  }

  draw(canvasContext) {
    canvasContext.fillStyle = BALL_STYLE;
    canvasContext.beginPath();
    canvasContext.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
    canvasContext.fill();
  }

  /**
   * Reset ball position and speed
   */
  reset() {
    this.x = BALL_START_X;
    this.y = BALL_START_Y;
    this.speedX = BALL_START_SPEED_X;
    this.speedY = BALL_START_SPEED_Y;
  }
}