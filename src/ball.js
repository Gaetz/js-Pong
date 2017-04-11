export default class Ball {

  constructor(radius, x, y, speedX=2, speedY=2) {
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  draw(canvasContext) {
    canvasContext.fillStyle = 'white';
    canvasContext.beginPath(); 
    canvasContext.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
    canvasContext.fill();
  }

}