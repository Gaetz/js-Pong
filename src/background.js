export default class Background {

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  draw(canvasContext) {
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, this.width, this.height);
  }

}