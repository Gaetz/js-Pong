/**
 * Contains all game numbers and balancing
 */

// General game config
export const FRAME_PER_SECOND = 30;
export const ANGLE_MULTIPLICATOR = 5;
export const POINTS_TO_WIN = 7;

// Paddle
export const PADDLE_WIDTH = 20;
export const PADDLE_HEIGHT = 100;
export const PADDLE_PLAYER_START_X = 0;
export const PADDLE_PLAYER_START_Y = 250;
export const PADDLE_OPPONENT_START_X = 800 - PADDLE_WIDTH;
export const PADDLE_OPPONENT_START_Y = 400 - PADDLE_HEIGHT / 2;
export const PADDLE_STYLE = 'white';
export const PADDLE_OPPONENT_Y_SPEED = 7;
export const PADDLE_OPPONENT_DEAD_ZONE = 30;

// Ball
export const BALL_START_X = 75;
export const BALL_START_Y = 75;
export const BALL_START_SPEED_X = 8;
export const BALL_START_SPEED_Y = 8;
export const BALL_RADIUS = 10;
export const BALL_STYLE = 'white';

// Background
export const BACKGROUND_STYLE = 'black';


