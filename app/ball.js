export default class Ball {

  constructor(radius, x, y, speedX=6, speedY=6) {
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  update(canvas) {
    // Move
    this.x += this.speedX;
    this.y += this.speedY;
    // Bounce
    if(this.y > canvas.height || this.y < 0)
      this.speedY *= -1;
  }

  draw(canvasContext) {
    canvasContext.fillStyle = 'white';
    canvasContext.beginPath(); 
    canvasContext.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
    canvasContext.fill();
  }

  reset() {
    this.x = 75;
    this.y = 75;
    this.speedX = 6;
    this.speedY = 6;
  }
}