import Paddle from './paddle';

import { PADDLE_OPPONENT_Y_SPEED, PADDLE_OPPONENT_DEAD_ZONE } from './config';

/**
 * AI controlled subclass of Paddle
 */
export default class PaddleAI extends Paddle {
    constructor(x, y) {
        super(x, y);
    }

    update(ball) {
        if (ball.y > this.y + this.height / 2 + PADDLE_OPPONENT_DEAD_ZONE)
            this.speedY = PADDLE_OPPONENT_Y_SPEED;
        else if (ball.y < this.y + this.height / 2 - PADDLE_OPPONENT_DEAD_ZONE)
            this.speedY = -PADDLE_OPPONENT_Y_SPEED;
        else this.speedY = 0;
        super.update();

    }
}