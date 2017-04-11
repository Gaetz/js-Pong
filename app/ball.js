'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ball = function () {
  function Ball(radius, x, y) {
    var speedX = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2;
    var speedY = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 2;

    _classCallCheck(this, Ball);

    this.radius = radius;
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  _createClass(Ball, [{
    key: 'draw',
    value: function draw(canvasContext) {
      canvasContext.fillStyle = 'white';
      canvasContext.beginPath();
      canvasContext.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      canvasContext.fill();
    }
  }]);

  return Ball;
}();

exports.default = Ball;