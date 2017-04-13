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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Contains all game numbers and balancing
 */

// General game config
var FRAME_PER_SECOND = exports.FRAME_PER_SECOND = 30;
var ANGLE_MULTIPLICATOR = exports.ANGLE_MULTIPLICATOR = 5;
var POINTS_TO_WIN = exports.POINTS_TO_WIN = 1;

// Paddle
var PADDLE_WIDTH = exports.PADDLE_WIDTH = 20;
var PADDLE_HEIGHT = exports.PADDLE_HEIGHT = 100;
var PADDLE_PLAYER_START_X = exports.PADDLE_PLAYER_START_X = 0;
var PADDLE_PLAYER_START_Y = exports.PADDLE_PLAYER_START_Y = 250;
var PADDLE_OPPONENT_START_X = exports.PADDLE_OPPONENT_START_X = 800 - PADDLE_WIDTH;
var PADDLE_OPPONENT_START_Y = exports.PADDLE_OPPONENT_START_Y = 400 - PADDLE_HEIGHT / 2;
var PADDLE_STYLE = exports.PADDLE_STYLE = 'white';
var PADDLE_OPPONENT_Y_SPEED = exports.PADDLE_OPPONENT_Y_SPEED = 6;
var PADDLE_OPPONENT_DEAD_ZONE = exports.PADDLE_OPPONENT_DEAD_ZONE = 30;

// Ball
var BALL_START_X = exports.BALL_START_X = 75;
var BALL_START_Y = exports.BALL_START_Y = 75;
var BALL_START_SPEED_X = exports.BALL_START_SPEED_X = 8;
var BALL_START_SPEED_Y = exports.BALL_START_SPEED_Y = 8;
var BALL_RADIUS = exports.BALL_RADIUS = 10;
var BALL_STYLE = exports.BALL_STYLE = 'white';

// Background
var BACKGROUND_STYLE = exports.BACKGROUND_STYLE = 'black';

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Moving paddle, to send back the ball
 */
var Paddle = function () {
  function Paddle(x, y) {
    var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _config.PADDLE_WIDTH;
    var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _config.PADDLE_HEIGHT;
    var speedY = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

    _classCallCheck(this, Paddle);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speedY = speedY;
  }

  _createClass(Paddle, [{
    key: 'update',
    value: function update() {
      this.y = this.y + this.speedY;
    }
  }, {
    key: 'draw',
    value: function draw(canvasContext) {
      canvasContext.fillStyle = _config.PADDLE_STYLE;
      canvasContext.beginPath();
      canvasContext.rect(this.x, this.y, this.width, this.height);
      canvasContext.fill();
    }

    /**
     * Give the ball a return vertical spped based on pad collision's position
     * @param {int} ballY Ball Y position
     */

  }, {
    key: 'getBounceVerticalSpeed',
    value: function getBounceVerticalSpeed(ballY) {
      return Math.round(_config.BALL_START_SPEED_Y * (ballY - (this.y + this.height / 2)) / this.height * _config.ANGLE_MULTIPLICATOR);
    }
  }]);

  return Paddle;
}();

exports.default = Paddle;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Game background
 */
var Background = function () {
  function Background(width, height) {
    _classCallCheck(this, Background);

    this.width = width;
    this.height = height;
  }

  _createClass(Background, [{
    key: 'draw',
    value: function draw(canvasContext) {
      canvasContext.fillStyle = _config.BACKGROUND_STYLE;
      canvasContext.fillRect(0, 0, this.width, this.height);
    }
  }]);

  return Background;
}();

exports.default = Background;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The ball the players have to catch
 */
var Ball = function () {
  function Ball(x, y) {
    var radius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _config.BALL_RADIUS;
    var speedX = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _config.BALL_START_SPEED_X;
    var speedY = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _config.BALL_START_SPEED_Y;

    _classCallCheck(this, Ball);

    this.x = x;
    this.y = y;
    this.radius = radius;
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
      if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
    }
  }, {
    key: 'draw',
    value: function draw(canvasContext) {
      canvasContext.fillStyle = _config.BALL_STYLE;
      canvasContext.beginPath();
      canvasContext.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
      canvasContext.fill();
    }

    /**
     * Reset ball position and speed
     */

  }, {
    key: 'reset',
    value: function reset() {
      this.x = _config.BALL_START_X;
      this.y = _config.BALL_START_Y;
      this.speedX = _config.BALL_START_SPEED_X;
      this.speedY = _config.BALL_START_SPEED_Y;
    }
  }]);

  return Ball;
}();

exports.default = Ball;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _paddle = __webpack_require__(1);

var _paddle2 = _interopRequireDefault(_paddle);

var _config = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PaddleAI = function (_Paddle) {
    _inherits(PaddleAI, _Paddle);

    function PaddleAI(x, y) {
        _classCallCheck(this, PaddleAI);

        return _possibleConstructorReturn(this, (PaddleAI.__proto__ || Object.getPrototypeOf(PaddleAI)).call(this, x, y));
    }

    _createClass(PaddleAI, [{
        key: 'update',
        value: function update(ball) {
            if (ball.y > this.y + this.height / 2 + _config.PADDLE_OPPONENT_DEAD_ZONE) this.speedY = _config.PADDLE_OPPONENT_Y_SPEED;else if (ball.y < this.y + this.height / 2 - _config.PADDLE_OPPONENT_DEAD_ZONE) this.speedY = -_config.PADDLE_OPPONENT_Y_SPEED;else this.speedY = 0;
            _get(PaddleAI.prototype.__proto__ || Object.getPrototypeOf(PaddleAI.prototype), 'update', this).call(this);
        }
    }]);

    return PaddleAI;
}(_paddle2.default);

exports.default = PaddleAI;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Manage game score
 */
var ScoreManager = function () {
    function ScoreManager() {
        _classCallCheck(this, ScoreManager);

        this.playerScore = 0;
        this.opponentScore = 0;
    }

    /**
     * Player gains a point
     */


    _createClass(ScoreManager, [{
        key: "playerMarks",
        value: function playerMarks() {
            this.playerScore = this.playerScore + 1;
        }

        /**
         * Opponent gains a point
         */

    }, {
        key: "opponentMarks",
        value: function opponentMarks() {
            this.opponentScore = this.opponentScore + 1;
        }

        /**
         * Reset all scores
         */

    }, {
        key: "reset",
        value: function reset() {
            this.playerScore = 0;
            this.opponentScore = 0;
        }
    }]);

    return ScoreManager;
}();

exports.default = ScoreManager;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ball = __webpack_require__(3);

var _ball2 = _interopRequireDefault(_ball);

var _background = __webpack_require__(2);

var _background2 = _interopRequireDefault(_background);

var _paddle = __webpack_require__(1);

var _paddle2 = _interopRequireDefault(_paddle);

var _paddleAI = __webpack_require__(4);

var _paddleAI2 = _interopRequireDefault(_paddleAI);

var _scoreManager = __webpack_require__(5);

var _scoreManager2 = _interopRequireDefault(_scoreManager);

var _config = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var canvas = void 0,
    canvasContext = void 0;
var ball = void 0,
    background = void 0,
    leftPaddle = void 0,
    rightPaddle = void 0;
var score = void 0,
    endStatus = void 0,
    isEndTriggered = void 0;

/**
 * Game start
 */
window.onload = function () {
    // Load game elements
    load();
    // Manage inputs
    canvas.addEventListener('mousemove', function (evt) {
        var mousePos = calculateMousePos(evt);
        leftPaddle.y = mousePos.y - leftPaddle.height / 2;
    });
    // Loop
    setInterval(function () {
        update();
        draw();
    }, 1000 / _config.FRAME_PER_SECOND);
};

/**
 * Loading game elements 
 * */
function load() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    canvasContext.textAlign = 'center';
    background = new _background2.default(canvas.width, canvas.height);
    ball = new _ball2.default(_config.BALL_START_X, _config.BALL_START_Y);
    leftPaddle = new _paddle2.default(_config.PADDLE_PLAYER_START_X, _config.PADDLE_PLAYER_START_Y);
    rightPaddle = new _paddleAI2.default(_config.PADDLE_OPPONENT_START_X, _config.PADDLE_OPPONENT_START_Y);
    score = new _scoreManager2.default();
    endStatus = 0;
    isEndTriggered = false;
}

/**
 * Update loop
 */
function update() {
    // End condition
    endStatus = checkVictory();

    // End logic
    if (endStatus != 0) {
        // Mouse click to restart game
        if (!isEndTriggered) {
            drawEndGame(canvasContext);
            canvas.addEventListener('click', function (evt) {
                if (endStatus != 0) reset();
            });
            isEndTriggered = true;
        }
        return;
    }

    // Game logic
    if (endStatus == 0) {
        ball.update(canvas);
        leftPaddle.update();
        rightPaddle.update(ball);
        // Hozizontal out of terrain
        // - Left side
        if (ball.x < leftPaddle.width) {
            // Ball on pad
            if (ball.y + ball.radius / 2 >= leftPaddle.y && ball.y + ball.radius / 2 <= leftPaddle.y + leftPaddle.height) {
                ball.speedY = leftPaddle.getBounceVerticalSpeed(ball.y);
                ball.speedX *= -1;
            }
            // Ball missed
            else {
                    if (ball.x < 0) {
                        score.opponentMarks();
                        // Reset ball except if game is won, to get end photo
                        if (checkVictory() == 0) ball.reset();
                    }
                }
        }
        // Right side
        if (ball.x > canvas.width - rightPaddle.width) {
            if (ball.y + ball.radius / 2 >= rightPaddle.y && ball.y + ball.radius / 2 <= rightPaddle.y + rightPaddle.height) {
                ball.speedY = rightPaddle.getBounceVerticalSpeed(ball.y);
                ball.speedX *= -1;
            } else {
                if (ball.x > canvas.width) {
                    score.playerMarks();
                    if (checkVictory() == 0) ball.reset();
                }
            }
        }
    }
}

/**
 * Draw loop
 */
function draw() {
    if (endStatus == 0) {
        background.draw(canvasContext);
        ball.draw(canvasContext);
        leftPaddle.draw(canvasContext);
        rightPaddle.draw(canvasContext);
    }
    drawScore(canvasContext);
}

/**
 * Reset the game
 */
function reset() {
    score.reset();
    ball.reset();
    isEndTriggered = false;
    endStatus = 0;
}

/**
 * Get mouse position on screen
 * @param {event} evt - Passing mouse move
 */
function calculateMousePos(evt) {
    var rect = canvas.getBoundingClientRect();
    var root = document.documentElement;
    var mouseX = evt.clientX - rect.left - root.scrollLeft;
    var mouseY = evt.clientY - rect.top - root.scrollTop;
    return {
        x: mouseX,
        y: mouseY
    };
}

/**
 * Returns true when game is won
 */
function checkVictory() {
    if (score.playerScore == _config.POINTS_TO_WIN) return 1;else if (score.opponentScore == _config.POINTS_TO_WIN) return 2;else return 0;
}

/**
 * Draw game scores
 */
function drawScore(canvasContext) {
    canvasContext.fillText(score.playerScore + ' : ' + score.opponentScore, canvas.width / 2, 20);
}

/**
 * Draw victory screen
 */
function drawEndGame(canvasContext) {
    if (endStatus == 1) {
        canvasContext.fillText('Player wins !', canvas.width / 2, canvas.height / 2);
    } else if (endStatus == 2) {
        canvasContext.fillText('Robot wins !', canvas.width / 2, canvas.height / 2);
    }
    setTimeout(function () {
        canvasContext.fillText('Click to play again', canvas.width / 2, canvas.height / 2 + 50);
    }, 1000);
}

/***/ })
/******/ ]);