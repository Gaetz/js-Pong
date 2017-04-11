export default class Ball {

  constructor(radius, x, y) {
    this.radius = radius;
    this.x = x;
    this.y = y;
  }

  draw(canvasContext) {
    canvasContext.fillStyle = 'white';
    canvasContext.beginPath(); 
    canvasContext.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
    canvasContext.fill();
  }

}