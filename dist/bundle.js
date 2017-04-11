/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ball = function () {
  function Ball(radius, x, y) {
    var speedX = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 12;
    var speedY = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 6;

    _classCallCheck(this, Ball);

    this.radius = radius;
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  _createClass(Ball, [{
    key: 'update',
    value: function update(canvas) {
      // Move
      this.x += this.speedX;
      this.y += this.speedY;
      // Bounce
      if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
      if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
    }
  }, {
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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ball = __webpack_require__(1);

var _ball2 = _interopRequireDefault(_ball);

var _background = __webpack_require__(0);

var _background2 = _interopRequireDefault(_background);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FRAME_PER_SECOND = 30;

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
    ball.update(canvas);
}

function draw() {
    background.draw(canvasContext);
    ball.draw(canvasContext);
}

/***/ })
/******/ ]);