'use strict';

var _ball = require('./ball');

var _ball2 = _interopRequireDefault(_ball);

var _background = require('./background');

var _background2 = _interopRequireDefault(_background);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canvas = void 0;
var canvasContext = void 0;
var ball = void 0;
var background = void 0;

var framePerSecond = 60;

window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    background = new _background2.default(canvas.width, canvas.height);
    ball = new _ball2.default(10, 75, 75);

    setInterval(function () {
        update();
        draw();
    }, 1000 / framePerSecond);
};

function update() {
    ball.x += 5;
}

function draw() {
    // Background
    background.draw(canvasContext);
    // Ball
    ball.draw(canvasContext);
}