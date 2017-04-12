import { BACKGROUND_STYLE } from './config';

/**
 * Game background
 */
export default class Background {

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  draw(canvasContext) {
    canvasContext.fillStyle = BACKGROUND_STYLE;
    canvasContext.fillRect(0, 0, this.width, this.height);
  }

}