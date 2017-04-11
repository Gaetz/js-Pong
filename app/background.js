'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Background = function () {
  function Background(width, height) {
    _classCallCheck(this, Background);

    this.width = width;
    this.height = height;
  }

  _createClass(Background, [{
    key: 'draw',
    value: function draw(canvasContext) {
      canvasContext.fillStyle = 'black';
      canvasContext.fillRect(0, 0, this.width, this.height);
    }
  }]);

  return Background;
}();

exports.default = Background;