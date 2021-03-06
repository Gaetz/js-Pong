import { PADDLE_WIDTH, PADDLE_HEIGHT, PADDLE_STYLE, BALL_START_SPEED_Y, ANGLE_MULTIPLICATOR } from './config';

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

  update() {
    this.y = this.y + this.speedY;
  }

  draw(canvasContext) {
    canvasContext.fillStyle = PADDLE_STYLE;
    canvasContext.beginPath();
    canvasContext.rect(this.x, this.y, this.width, this.height);
    canvasContext.fill();
  }

  /**
   * Give the ball a return vertical spped based on pad collision's position
   * @param {int} ballY Ball Y position
   */
  getBounceVerticalSpeed(ballY) {
    return Math.round(BALL_START_SPEED_Y * (ballY - (this.y + this.height / 2)) / this.height * ANGLE_MULTIPLICATOR);
  }
}