export default class Ball {

  constructor(radius, x, y, speedX=5, speedY=5) {
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  update(canvas) {
    // Move
    this.x += this.speedX;
    // Bounce
    if(this.x > canvas.width || this.x < 0)
      this.speedX *= -1;
  }

  draw(canvasContext) {
    canvasContext.fillStyle = 'white';
    canvasContext.beginPath(); 
    canvasContext.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
    canvasContext.fill();
  }

}