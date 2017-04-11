'use strict';

var _ball = require('./ball');

var _ball2 = _interopRequireDefault(_ball);

var _background = require('./background');

var _background2 = _interopRequireDefault(_background);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FRAME_PER_SECOND = 60;

var canvas = void 0,
    canvasContext = void 0;
var ball = void 0,
    background = void 0;

window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    background = new _background2.default(canvas.width, canvas.height);
    ball = new _ball2.default(10, 75, 75);

    setInterval(function () {
        update();
        draw();
    }, 1000 / FRAME_PER_SECOND);
};

function update() {
    ball.x += ball.speedX;
}

function draw() {
    background.draw(canvasContext);
    ball.draw(canvasContext);
}