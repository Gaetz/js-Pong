'use strict';

var _ball = require('./ball');

var _ball2 = _interopRequireDefault(_ball);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canvas = void 0;
var canvasContext = void 0;
var ball = void 0;

window.onload = function () {
    console.log("Hello World!");

    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    ball = new _ball2.default(10, 75, 75);
    draw();
};

function draw() {
    // Background
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    // Ball
    ball.draw(canvasContext);
}