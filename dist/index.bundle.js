(self["webpackChunkwebpack_project"] = self["webpackChunkwebpack_project"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_nav_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/nav.css */ "./src/css/nav.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.css */ "./src/css/main.css");
/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/reset.css */ "./src/css/reset.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_footer_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/footer.css */ "./src/css/footer.css");
/* harmony import */ var _css_button_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/button.css */ "./src/css/button.css");
/* harmony import */ var _css_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/header.css */ "./src/css/header.css");
/* harmony import */ var _js_dom_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/dom.js */ "./src/js/dom.js");
/* harmony import */ var _js_class_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/class.js */ "./src/js/class.js");
/* harmony import */ var _js_animation_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/animation.js */ "./src/js/animation.js");
/* harmony import */ var _js_animation_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_js_animation_js__WEBPACK_IMPORTED_MODULE_9__);








// import Aim from './assets/icon/aim.svg';
// import Battleship from './assets/img/battleship.png';





window.addEventListener('DOMContentLoaded', function (e) {
  _js_dom_js__WEBPACK_IMPORTED_MODULE_7__.Game.start();
});
_js_dom_js__WEBPACK_IMPORTED_MODULE_7__.DOM.restart.addEventListener('click', function (e) {
  _js_dom_js__WEBPACK_IMPORTED_MODULE_7__.Game.start();
});

/***/ }),

/***/ "./src/js/animation.js":
/*!*****************************!*\
  !*** ./src/js/animation.js ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/class.js":
/*!*************************!*\
  !*** ./src/js/class.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cell: () => (/* binding */ Cell),
/* harmony export */   Computer: () => (/* binding */ Computer),
/* harmony export */   Gameboard: () => (/* binding */ Gameboard),
/* harmony export */   Human: () => (/* binding */ Human),
/* harmony export */   Player: () => (/* binding */ Player),
/* harmony export */   Position: () => (/* binding */ Position),
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var _SIZE = 10; // Gameboard SIZE

var Ship = /*#__PURE__*/_createClass(function Ship(len) {
  var _this = this;
  _classCallCheck(this, Ship);
  if (len > 5 || len < 1) throw new Error('Invalid ship length');
  Object.defineProperties(this, {
    length: {
      value: len
    },
    hits: {
      get: function get() {
        return _hits;
      }
    },
    isSunk: {
      get: function get() {
        return this.length - _hits < 1;
      }
    }
  });
  var _hits = 0;
  this.hit = function () {
    if (_this.isSunk) throw new Error("Can't attack sunk ship");
    _hits++;
  };
});
var Position = /*#__PURE__*/_createClass(function Position(row, col) {
  _classCallCheck(this, Position);
  if (row > 9 || col > 9 || row < 0 || col < 0) throw new Error('Position is not legit');
  Object.defineProperties(this, {
    row: {
      get: function get() {
        return row;
      }
    },
    col: {
      get: function get() {
        return col;
      }
    }
  });
});
var Cell = /*#__PURE__*/_createClass(function Cell(row, col) {
  _classCallCheck(this, Cell);
  var _isReceivedAttack = false;
  var _ship = null;
  this.receivedAttack = function () {
    var _ship2;
    if (_isReceivedAttack) throw new Error('Already attacked this cell');
    _isReceivedAttack = true;
    (_ship2 = _ship) === null || _ship2 === void 0 || _ship2.hit();
  };
  Object.defineProperties(this, {
    position: {
      value: new Position(row, col)
    },
    isReceivedAttack: {
      get: function get() {
        return _isReceivedAttack;
      }
    },
    ship: {
      get: function get() {
        return _ship;
      },
      set: function set(newShip) {
        if (_ship) throw new Error('Already placed a ship on this cell');
        _ship = newShip;
      }
    },
    status: {
      get: function get() {
        if (!_isReceivedAttack) return 'Not yet'; // if is not yet received attack

        if (_ship) return 'Hit'; // if received attack and contains a ship

        return 'Miss'; // else
      }
    }
  });
});

var Gameboard = /*#__PURE__*/_createClass(function Gameboard() {
  var _this2 = this;
  _classCallCheck(this, Gameboard);
  Object.defineProperties(this, {
    shipsInfo: {
      value: []
    },
    board: {
      value: []
    },
    hitShots: {
      value: []
    },
    missShots: {
      value: []
    },
    shots: {
      value: []
    },
    allClear: {
      get: function get() {
        return this.shipsInfo.every(function (info) {
          return info.ship.isSunk;
        });
      }
    },
    ships: {
      get: function get() {
        // place ships into category base on their status: healthy, warning, death
        return this.shipsInfo.reduce(function (total, currentShipInfo) {
          var shipStatus;
          var currentShip = currentShipInfo.ship;
          var shipHealth = currentShip.length - currentShip.hits;
          if (shipHealth === 0) shipStatus = 'death';else if (shipHealth === 1) shipStatus = 'warning';else shipStatus = 'healthy';
          total[shipStatus].push(currentShipInfo);
          return total;
        }, {
          healthy: [],
          death: [],
          warning: []
        });
      }
    }
  });
  for (var i = 0; i < _SIZE; i++) {
    this.board.push([]);
    for (var j = 0; j < _SIZE; j++) {
      this.board[i].push(new Cell(i, j));
    }
  }
  this.placeShips = function (ship, startPosition, isVertical) {
    if (!(ship instanceof Ship)) throw new Error('Invalid ship object');
    if (typeof isVertical !== 'boolean') throw new Error('Invalid direction');
    if (!(startPosition instanceof Position)) throw new Error('Invalid start position');
    var length = ship.length;
    var endPosition = length + (isVertical ? startPosition.col : startPosition.row); // used to check if outside the gameboard

    if (endPosition > _SIZE) throw new Error('This ship goes beyond gameboard');
    var row = startPosition.row,
      col = startPosition.col;
    var locations = [];
    var cells = [];

    // check all ship's locations first to see if something throw
    for (var _i = 0; _i < length; _i++) {
      var cell = _this2.board[row][col];

      // check if this cell is legit to place ship
      if (cell.ship !== null) throw new Error('Place ship cancel because this cell already has a ship on it');

      // save cells which will use to place ship at the same time
      cells.push(cell);
      locations.push(new Position(row, col));
      isVertical ? col++ : row++; // increase based on direction
    }

    // the loop through all legit cells to actually place ship after nothing got throw
    for (var _i2 = 0, _cells = cells; _i2 < _cells.length; _i2++) {
      var _cell = _cells[_i2];
      _cell.ship = ship;
    }
    _this2.shipsInfo.push({
      locations: locations,
      isVertical: isVertical,
      ship: ship
    });
  };
  this.receivedAttack = function (position) {
    var _cell$ship;
    if (!(position instanceof Position)) throw new Error('Invalid position');
    var row = position.row,
      col = position.col;
    var cell = _this2.board[row][col];
    cell.receivedAttack();
    var cellStatus = cell.status;
    var shipStatus = (_cell$ship = cell.ship) !== null && _cell$ship !== void 0 && _cell$ship.isSunk ? 'Sunk' : 'Not sunk';
    if (cellStatus === 'Hit') _this2.hitShots.push(position);
    if (cellStatus === 'Miss') _this2.missShots.push(position);
    _this2.shots.push(position);
    return {
      cellStatus: cellStatus,
      shipStatus: shipStatus,
      position: position
    };
  };
});
var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);
    var _board = new Gameboard();
    Object.defineProperties(this, {
      board: {
        get: function get() {
          return _board;
        }
      }
    });
  }
  _createClass(Player, [{
    key: "randomPlaceShips",
    value: function randomPlaceShips() {
      var lengths = [1, 1, 1, 2, 2, 3, 3, 4, 5];
      for (var i = 0; i < lengths.length; i++) {
        try {
          var row = Math.floor(Math.random() * _SIZE);
          var col = Math.floor(Math.random() * _SIZE);
          var position = new Position(row, col);
          var direction = !!Math.floor(Math.random() * 2);
          var ship = new Ship(lengths[i]);
          this.board.placeShips(ship, position, direction);
        } catch (error) {
          i--;

          // console.log(error);
        }
      }
    }
  }]);
  return Player;
}();
var Human = /*#__PURE__*/function (_Player) {
  _inherits(Human, _Player);
  var _super = _createSuper(Human);
  function Human() {
    var _this3;
    _classCallCheck(this, Human);
    _this3 = _super.call(this);
    _this3.attack = function (position, player) {
      if (!(position instanceof Position) || !(player.board instanceof Gameboard)) throw new Error('Invalid arguments');
      var status = player.board.receivedAttack(position);
      return status;
    };
    return _this3;
  }
  return _createClass(Human);
}(Player);
var Computer = /*#__PURE__*/function (_Player2) {
  _inherits(Computer, _Player2);
  var _super2 = _createSuper(Computer);
  function Computer() {
    var _this4;
    _classCallCheck(this, Computer);
    _this4 = _super2.call(this);
    _this4.attack = function (player) {
      if (!(player.board instanceof Gameboard)) throw new Error('Invalid board');
      var length = player.board.shots.length;
      while (length === player.board.shots.length) {
        var row = Math.floor(Math.random() * _SIZE);
        var col = Math.floor(Math.random() * _SIZE);
        try {
          var position = new Position(row, col);
          var status = player.board.receivedAttack(position);
          return status;
        } catch (err) {
          // console.log(err);
        }
      }
    };
    return _this4;
  }
  return _createClass(Computer);
}(Player);

/***/ }),

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOM: () => (/* binding */ DOM),
/* harmony export */   Game: () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "./src/js/class.js");
var _class, _class2;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Game = /*#__PURE__*/_createClass(function Game() {
  _classCallCheck(this, Game);
});
_class = Game;
_defineProperty(Game, "SIZE", 10);
_defineProperty(Game, "isOver", false);
_defineProperty(Game, "human", void 0);
_defineProperty(Game, "ai", void 0);
_defineProperty(Game, "checkGameover", function (playerToCheck) {
  if (playerToCheck.board.allClear) {
    _class.isOver = true;
  }
});
_defineProperty(Game, "start", function () {
  _class.isOver = false;
  _class.human = new _class__WEBPACK_IMPORTED_MODULE_0__.Human();
  _class.ai = new _class__WEBPACK_IMPORTED_MODULE_0__.Computer();
  _class.human.randomPlaceShips();
  _class.ai.randomPlaceShips();
  Display.board(_class.human);
  Display.board(_class.ai);
  Display.humanShips(_class.human);

  // Display.humanShips(this.ai); // TODO used for display ai's ships, for testing

  Display.message(_class.human, "Feel free to press the restart button if you're not happy with your ships layout");
  Display.message(_class.ai, "Keep track of game alert here. You will attack the gameboard above");
  DOM.preventSpam.classList.add('hide');
  DOM.listenHumanAttacks(_class.human, _class.ai);
});
_defineProperty(Game, "humanPlayOneTurn", function (human, ai, position) {
  var humanAttacksStatus = human.attack(position, ai);
  var humanMessage = "We shot at enemy's water and it's a miss";
  if (humanAttacksStatus.cellStatus === 'Hit') {
    Display.aiDeathShips(ai);
    humanMessage = "We shot at enemy's water and it's a hit";
    if (humanAttacksStatus.shipStatus === 'Sunk') humanMessage += " and we have sunk their ship";
  }
  Display.shotOnBoard(ai, position, humanAttacksStatus.cellStatus);
  Display.message(ai, humanMessage);
  _class.checkGameover(ai);
});
_defineProperty(Game, "aiPlayOneTurn", function (human, ai) {
  var aiAttackResult = ai.attack(human);
  var aiMessage = "Enemy shot at our water and it's a miss";
  if (aiAttackResult.cellStatus === 'Hit') {
    Display.humanShips(human);
    aiMessage = "Enemy shot at our water and it's a hit";
    if (aiAttackResult.shipStatus === 'Sunk') aiMessage += " and they have sunk our ship";
  }
  Display.shotOnBoard(human, aiAttackResult.position, aiAttackResult.cellStatus);
  Display.message(human, aiMessage);
  _class.checkGameover(human);
});
var DOM = /*#__PURE__*/_createClass(function DOM() {
  _classCallCheck(this, DOM);
});
_class2 = DOM;
_defineProperty(DOM, "messageHuman", document.querySelector("[data-message=\"human\"]"));
_defineProperty(DOM, "messageAi", document.querySelector("[data-message=\"ai\"]"));
_defineProperty(DOM, "gameboardHuman", document.querySelector('.gameboard[data-human]'));
_defineProperty(DOM, "gameboardAi", document.querySelector('.gameboard[data-ai]'));
_defineProperty(DOM, "restart", document.querySelector('[data-restart]'));
_defineProperty(DOM, "preventSpam", document.querySelector('.prevent__spam'));
_defineProperty(DOM, "listenHumanAttacks", function (human, ai) {
  if (!(human instanceof _class__WEBPACK_IMPORTED_MODULE_0__.Human)) throw new Error('Invalid Human');
  if (!(ai instanceof _class__WEBPACK_IMPORTED_MODULE_0__.Computer)) throw new Error('Invalid Ai');
  var cells = _class2.gameboardAi.querySelectorAll('.ai__cell');
  cells.forEach(function (cell) {
    cell.addEventListener('click', function (e) {
      e.target.classList.add('attacked');
      var row = +e.target.dataset.row;
      var col = +e.target.dataset.col;
      var position = new _class__WEBPACK_IMPORTED_MODULE_0__.Position(row, col);
      Game.humanPlayOneTurn(human, ai, position);
      if (Game.isOver) {
        Display.stopUserSpamming();
        Display.message(ai, "We have win the battle!");
        Display.message(human, "We have win the battle!");
        return;
      }

      // ai play its turn
      Game.aiPlayOneTurn(human, ai);
      if (Game.isOver) {
        Display.stopUserSpamming();
        Display.message(ai, "Enemy has win the battle!");
        Display.message(human, "Enemy has win the battle!");
        return;
      }
    }, {
      once: true
    });
  });
});
var Display = /*#__PURE__*/_createClass(function Display() {
  _classCallCheck(this, Display);
});
_defineProperty(Display, "message", function (player, content) {
  var targetMessage;
  if (player instanceof _class__WEBPACK_IMPORTED_MODULE_0__.Human) targetMessage = DOM.messageHuman;else targetMessage = DOM.messageAi;
  targetMessage.textContent = content;
});
_defineProperty(Display, "board", function (player) {
  if (!(player instanceof _class__WEBPACK_IMPORTED_MODULE_0__.Player)) throw new Error('Invalid Player');
  var targetBoard = player instanceof _class__WEBPACK_IMPORTED_MODULE_0__.Human ? DOM.gameboardHuman : DOM.gameboardAi;
  targetBoard.innerHTML = '';
  var type = player instanceof _class__WEBPACK_IMPORTED_MODULE_0__.Human ? 'human' : 'ai';
  for (var i = 0; i < Game.SIZE; i++) {
    for (var j = 0; j < Game.SIZE; j++) {
      var div = document.createElement('div');
      div.classList.add('center');
      div.classList.add("".concat(type, "__cell"));
      div.dataset.row = i;
      div.dataset.col = j;
      targetBoard.appendChild(div);
    }
  }
});
_defineProperty(Display, "humanShips", function (player) {
  if (!(player instanceof _class__WEBPACK_IMPORTED_MODULE_0__.Player)) throw new Error('Invalid Player');
  var ships = player.board.ships;

  // loop through 3 type: healthy, warning, death
  for (var shipType in ships) {
    var currentType = ships[shipType];

    // loop through all ships in 1 type
    for (var i = 0; i < currentType.length; i++) {
      var currentShipInfo = currentType[i];
      var locations = currentShipInfo.locations;
      var isVertical = currentShipInfo.isVertical;

      // loop through all position of that ship
      for (var j = 0; j < locations.length; j++) {
        var currentLocation = locations[j];
        var row = currentLocation.row,
          col = currentLocation.col;

        // select exact cell dom element
        var cell = player instanceof _class__WEBPACK_IMPORTED_MODULE_0__.Human ? DOM.gameboardHuman.querySelector("[data-row=\"".concat(row, "\"][data-col=\"").concat(col, "\"]")) : DOM.gameboardAi.querySelector("[data-row=\"".concat(row, "\"][data-col=\"").concat(col, "\"]"));
        cell.classList.add(shipType);
        if (locations.length === 1) {
          cell.classList.add('ship__one__length');
          continue;
        }
        if (isVertical) cell.classList.add('vertical');else cell.classList.add('horizon');
        if (!j) cell.classList.add('ship__head');else if (j === locations.length - 1) cell.classList.add('ship__tail');else cell.classList.add('ship__body');
      }
    }
  }
});
_defineProperty(Display, "aiDeathShips", function (player) {
  if (!(player instanceof _class__WEBPACK_IMPORTED_MODULE_0__.Player)) throw new Error('Invalid Player');
  var deathShips = player.board.ships.death;
  for (var i = 0; i < deathShips.length; i++) {
    var currentShipInfo = deathShips[i];
    var locations = currentShipInfo.locations;
    var isVertical = currentShipInfo.isVertical;
    for (var j = 0; j < locations.length; j++) {
      var currentLocation = locations[j];
      var row = currentLocation.row,
        col = currentLocation.col;
      var cell = DOM.gameboardAi.querySelector("[data-row=\"".concat(row, "\"][data-col=\"").concat(col, "\"]"));
      cell.classList.add('death');
      if (locations.length === 1) {
        cell.classList.add('ship__one__length');
        continue;
      }
      if (isVertical) cell.classList.add('vertical');else cell.classList.add('horizon');
      if (!j) cell.classList.add('ship__head');else if (j === locations.length - 1) cell.classList.add('ship__tail');else cell.classList.add('ship__body');
    }
  }
});
_defineProperty(Display, "shotOnBoard", function (player, position, status) {
  if (!(position instanceof _class__WEBPACK_IMPORTED_MODULE_0__.Position) || !(player instanceof _class__WEBPACK_IMPORTED_MODULE_0__.Player)) throw new Error('Invalid argument');
  var row = position.row,
    col = position.col;
  var gameboard;
  if (player instanceof _class__WEBPACK_IMPORTED_MODULE_0__.Human) gameboard = DOM.gameboardHuman;else gameboard = DOM.gameboardAi;
  var cell = gameboard.querySelector("[data-col=\"".concat(col, "\"][data-row=\"").concat(row, "\"]"));
  var span = document.createElement('span');
  if (status === 'Hit') span.classList.add('hit__shot');else span.classList.add('miss__shot');
  cell.appendChild(span);
});
_defineProperty(Display, "stopUserSpamming", function () {
  DOM.preventSpam.classList.remove('hide');
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/button.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/button.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* header button view on github */
.btn-13,
.btn-13 *,
.btn-13 :after,
.btn-13 :before,
.btn-13:after,
.btn-13:before {
  border: 0 solid;
  box-sizing: border-box;
}
.btn-13 {
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: button;
  background-color: #000;
  background-image: none;
  color: #ff0000;
  cursor: pointer;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Noto Color Emoji;
  font-size: 100%;
  font-weight: 900;
  line-height: 1.5;
  margin: 0;
  /* -webkit-mask-image: -webkit-radial-gradient(#000, #fff); */
  padding: 0;
  text-transform: uppercase;
}
.btn-13:disabled {
  cursor: default;
}
.btn-13:-moz-focusring {
  outline: auto;
}
.btn-13 svg {
  display: block;
  vertical-align: middle;
}
.btn-13 [hidden] {
  display: none;
}
.btn-13 {
  border-radius: 99rem;
  border-width: 2px;
  overflow: hidden;
  padding: 0.8rem 3rem;
  position: relative;
}
.btn-13 span {
  /* mix-blend-mode: difference; */
  position: relative;
  z-index: 1;
}
.btn-13:after,
.btn-13:before {
  background: rgb(143, 67, 67);
  -webkit-clip-path: polygon(
    0 0,
    100% 0,
    100% calc(var(--progress, 0%) / 2),
    0 calc(var(--progress, 0%) / 2),
    0 0,
    0 calc(100% - var(--progress, 0%) / 2),
    100% calc(100% - var(--progress, 0%) / 2),
    100% 100%,
    0 100%,
    0 calc(100% - var(--progress, 0%) / 2)
  );
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(var(--progress, 0%) / 2),
    0 calc(var(--progress, 0%) / 2),
    0 0,
    0 calc(100% - var(--progress, 0%) / 2),
    100% calc(100% - var(--progress, 0%) / 2),
    100% 100%,
    0 100%,
    0 calc(100% - var(--progress, 0%) / 2)
  );
  content: '';
  inset: 0;
  position: absolute;
  transform: translateX(calc(100% - var(--progress, 0%) / 1.99));
  transition: transform 0.2s ease, -webkit-clip-path 0.2s ease;
  transition: clip-path 0.2s ease, transform 0.2s ease;
  transition: clip-path 0.2s ease, transform 0.2s ease, -webkit-clip-path 0.2s ease;
}
.btn-13:after {
  transform: translateX(calc(-100% + var(--progress, 0%) / 1.99));
}
.btn-13:hover {
  --progress: 100%;
}

/* header button view on github */
`, "",{"version":3,"sources":["webpack://./src/css/button.css"],"names":[],"mappings":"AAAA,iCAAiC;AACjC;;;;;;EAME,eAAe;EACf,sBAAsB;AACxB;AACA;EACE,wCAAwC;EACxC,0BAA0B;EAC1B,sBAAsB;EACtB,sBAAsB;EACtB,cAAc;EACd,eAAe;EACf;oBACkB;EAClB,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,SAAS;EACT,6DAA6D;EAC7D,UAAU;EACV,yBAAyB;AAC3B;AACA;EACE,eAAe;AACjB;AACA;EACE,aAAa;AACf;AACA;EACE,cAAc;EACd,sBAAsB;AACxB;AACA;EACE,aAAa;AACf;AACA;EACE,oBAAoB;EACpB,iBAAiB;EACjB,gBAAgB;EAChB,oBAAoB;EACpB,kBAAkB;AACpB;AACA;EACE,gCAAgC;EAChC,kBAAkB;EAClB,UAAU;AACZ;AACA;;EAEE,4BAA4B;EAC5B;;;;;;;;;;;GAWC;EACD;;;;;;;;;;;GAWC;EACD,WAAW;EACX,QAAQ;EACR,kBAAkB;EAClB,8DAA8D;EAC9D,4DAA4D;EAC5D,oDAAoD;EACpD,iFAAiF;AACnF;AACA;EACE,+DAA+D;AACjE;AACA;EACE,gBAAgB;AAClB;;AAEA,iCAAiC","sourcesContent":["/* header button view on github */\n.btn-13,\n.btn-13 *,\n.btn-13 :after,\n.btn-13 :before,\n.btn-13:after,\n.btn-13:before {\n  border: 0 solid;\n  box-sizing: border-box;\n}\n.btn-13 {\n  -webkit-tap-highlight-color: transparent;\n  -webkit-appearance: button;\n  background-color: #000;\n  background-image: none;\n  color: #ff0000;\n  cursor: pointer;\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,\n    Noto Color Emoji;\n  font-size: 100%;\n  font-weight: 900;\n  line-height: 1.5;\n  margin: 0;\n  /* -webkit-mask-image: -webkit-radial-gradient(#000, #fff); */\n  padding: 0;\n  text-transform: uppercase;\n}\n.btn-13:disabled {\n  cursor: default;\n}\n.btn-13:-moz-focusring {\n  outline: auto;\n}\n.btn-13 svg {\n  display: block;\n  vertical-align: middle;\n}\n.btn-13 [hidden] {\n  display: none;\n}\n.btn-13 {\n  border-radius: 99rem;\n  border-width: 2px;\n  overflow: hidden;\n  padding: 0.8rem 3rem;\n  position: relative;\n}\n.btn-13 span {\n  /* mix-blend-mode: difference; */\n  position: relative;\n  z-index: 1;\n}\n.btn-13:after,\n.btn-13:before {\n  background: rgb(143, 67, 67);\n  -webkit-clip-path: polygon(\n    0 0,\n    100% 0,\n    100% calc(var(--progress, 0%) / 2),\n    0 calc(var(--progress, 0%) / 2),\n    0 0,\n    0 calc(100% - var(--progress, 0%) / 2),\n    100% calc(100% - var(--progress, 0%) / 2),\n    100% 100%,\n    0 100%,\n    0 calc(100% - var(--progress, 0%) / 2)\n  );\n  clip-path: polygon(\n    0 0,\n    100% 0,\n    100% calc(var(--progress, 0%) / 2),\n    0 calc(var(--progress, 0%) / 2),\n    0 0,\n    0 calc(100% - var(--progress, 0%) / 2),\n    100% calc(100% - var(--progress, 0%) / 2),\n    100% 100%,\n    0 100%,\n    0 calc(100% - var(--progress, 0%) / 2)\n  );\n  content: '';\n  inset: 0;\n  position: absolute;\n  transform: translateX(calc(100% - var(--progress, 0%) / 1.99));\n  transition: transform 0.2s ease, -webkit-clip-path 0.2s ease;\n  transition: clip-path 0.2s ease, transform 0.2s ease;\n  transition: clip-path 0.2s ease, transform 0.2s ease, -webkit-clip-path 0.2s ease;\n}\n.btn-13:after {\n  transform: translateX(calc(-100% + var(--progress, 0%) / 1.99));\n}\n.btn-13:hover {\n  --progress: 100%;\n}\n\n/* header button view on github */\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/footer.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/footer.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 3rem;
}

.footer a {
  text-decoration: underline;
}

.footer a:hover {
  text-decoration: none;
}
`, "",{"version":3,"sources":["webpack://./src/css/footer.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,SAAS;EACT,OAAO;EACP,QAAQ;EACR,aAAa;AACf;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,qBAAqB;AACvB","sourcesContent":[".footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 3rem;\n}\n\n.footer a {\n  text-decoration: underline;\n}\n\n.footer a:hover {\n  text-decoration: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/header.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/header.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./../assets/icon/aim.svg */ "./src/assets/icon/aim.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin-bottom: 1rem;
}

.header__icon__ctn {
  align-self: stretch;
  padding-right: 20rem;
}
.header__icon {
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) center/contain no-repeat red;
  height: 100%;
  border-radius: 99rem;
  width: 6rem;
  animation: rotate 750ms linear 0ms infinite;
  cursor: crosshair;
}
.header__icon:hover {
  animation: none;
}
.header__title {
  font-size: 6rem;
  text-transform: uppercase;
  white-space: nowrap;
}
.header__link {
  white-space: nowrap;
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
`, "",{"version":3,"sources":["webpack://./src/css/header.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,oBAAoB;AACtB;AACA;EACE,gFAAwE;EACxE,YAAY;EACZ,oBAAoB;EACpB,WAAW;EACX,2CAA2C;EAC3C,iBAAiB;AACnB;AACA;EACE,eAAe;AACjB;AACA;EACE,eAAe;EACf,yBAAyB;EACzB,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF","sourcesContent":[".header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n  margin-bottom: 1rem;\n}\n\n.header__icon__ctn {\n  align-self: stretch;\n  padding-right: 20rem;\n}\n.header__icon {\n  background: url('./../assets/icon/aim.svg') center/contain no-repeat red;\n  height: 100%;\n  border-radius: 99rem;\n  width: 6rem;\n  animation: rotate 750ms linear 0ms infinite;\n  cursor: crosshair;\n}\n.header__icon:hover {\n  animation: none;\n}\n.header__title {\n  font-size: 6rem;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.header__link {\n  white-space: nowrap;\n}\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./../assets/img/battleship.png */ "./src/assets/img/battleship.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.main {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  margin: 0 auto 1rem;
  gap: 2rem;
}

.gameboard__ctn__ctn {
  max-width: 52rem;
}

.gameboard__header {
  text-align: center;
  padding: 1rem;
  margin-bottom: 1rem;
  white-space: nowrap;
}
.gameboard {
  border: 1px solid red;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  gap: 1px;
  width: calc(50vw - 1rem);
  height: calc(50vw - 1rem);
  max-width: 50rem;
  max-height: 50rem;
  background: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) center/cover no-repeat red;
}

.gameboard > div {
  border: 1px solid rgb(0, 0, 0);
}

.gameboard > .contain__ship {
  background-color: black;
}

.gameboard > div > span {
  display: block;
  height: 3rem;
  width: 3rem;
  border-radius: 99rem;
}

.gameboard > div > .hit__shot {
  background-color: red;
}

.gameboard > div > .miss__shot {
  background-color: rgb(255, 255, 255);
}

.gameboard .ai__cell {
  cursor: cell;
}

.gameboard .ai__cell:hover {
  background-color: rgba(122, 255, 122, 0.5);
}

.gameboard .ai__cell.attacked {
  cursor: not-allowed;
}

.gameboard .ai__cell.attacked:hover {
  background-color: rgba(255, 126, 126, 0.5);
}

.healthy {
  border-color: green !important;
}

.warning {
  border-color: yellow !important;
}

.death {
  border-color: red !important;
}

/* to place ship in the right direction */
.ship__head.vertical {
  border-width: 4px 0 4px 4px;
}

.ship__head.horizon {
  border-width: 4px 4px 0 4px;
}

.ship__body.vertical {
  border-width: 4px 0 4px 0;
}

.ship__body.horizon {
  border-width: 0 4px 0 4px;
}

.ship__tail.vertical {
  border-width: 4px 4px 4px 0;
}

.ship__tail.horizon {
  border-width: 0 4px 4px 4px;
}

.ship__one__length {
  border-width: 4px !important;
}

.display__message {
  border: 2px dotted red;
  border-radius: 99rem;
  padding: 2rem;
  text-align: center;
  margin: 2rem 0;
  max-width: 50rem;
}

.gameboard__ctn {
  position: relative;
}

.prevent__spam {
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0); /* transparent */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  cursor: cell;
}
`, "",{"version":3,"sources":["webpack://./src/css/main.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,uBAAuB;EACvB,WAAW;EACX,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,qBAAqB;EACrB,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,QAAQ;EACR,wBAAwB;EACxB,yBAAyB;EACzB,gBAAgB;EAChB,iBAAiB;EACjB,8EAA4E;AAC9E;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,WAAW;EACX,oBAAoB;AACtB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,4BAA4B;AAC9B;;AAEA,yCAAyC;AACzC;EACE,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,sBAAsB;EACtB,oBAAoB;EACpB,aAAa;EACb,kBAAkB;EAClB,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,wCAAwC,EAAE,gBAAgB;EAC1D,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,YAAY;AACd","sourcesContent":[".main {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  width: 100%;\n  margin: 0 auto 1rem;\n  gap: 2rem;\n}\n\n.gameboard__ctn__ctn {\n  max-width: 52rem;\n}\n\n.gameboard__header {\n  text-align: center;\n  padding: 1rem;\n  margin-bottom: 1rem;\n  white-space: nowrap;\n}\n.gameboard {\n  border: 1px solid red;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  gap: 1px;\n  width: calc(50vw - 1rem);\n  height: calc(50vw - 1rem);\n  max-width: 50rem;\n  max-height: 50rem;\n  background: url('./../assets/img/battleship.png') center/cover no-repeat red;\n}\n\n.gameboard > div {\n  border: 1px solid rgb(0, 0, 0);\n}\n\n.gameboard > .contain__ship {\n  background-color: black;\n}\n\n.gameboard > div > span {\n  display: block;\n  height: 3rem;\n  width: 3rem;\n  border-radius: 99rem;\n}\n\n.gameboard > div > .hit__shot {\n  background-color: red;\n}\n\n.gameboard > div > .miss__shot {\n  background-color: rgb(255, 255, 255);\n}\n\n.gameboard .ai__cell {\n  cursor: cell;\n}\n\n.gameboard .ai__cell:hover {\n  background-color: rgba(122, 255, 122, 0.5);\n}\n\n.gameboard .ai__cell.attacked {\n  cursor: not-allowed;\n}\n\n.gameboard .ai__cell.attacked:hover {\n  background-color: rgba(255, 126, 126, 0.5);\n}\n\n.healthy {\n  border-color: green !important;\n}\n\n.warning {\n  border-color: yellow !important;\n}\n\n.death {\n  border-color: red !important;\n}\n\n/* to place ship in the right direction */\n.ship__head.vertical {\n  border-width: 4px 0 4px 4px;\n}\n\n.ship__head.horizon {\n  border-width: 4px 4px 0 4px;\n}\n\n.ship__body.vertical {\n  border-width: 4px 0 4px 0;\n}\n\n.ship__body.horizon {\n  border-width: 0 4px 0 4px;\n}\n\n.ship__tail.vertical {\n  border-width: 4px 4px 4px 0;\n}\n\n.ship__tail.horizon {\n  border-width: 0 4px 4px 4px;\n}\n\n.ship__one__length {\n  border-width: 4px !important;\n}\n\n.display__message {\n  border: 2px dotted red;\n  border-radius: 99rem;\n  padding: 2rem;\n  text-align: center;\n  margin: 2rem 0;\n  max-width: 50rem;\n}\n\n.gameboard__ctn {\n  position: relative;\n}\n\n.prevent__spam {\n  height: 100%;\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0); /* transparent */\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  cursor: cell;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/nav.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/nav.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.nav {
  padding: 1rem;
  margin-bottom: 1rem;
}
`, "",{"version":3,"sources":["webpack://./src/css/nav.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;AACrB","sourcesContent":[".nav {\n  padding: 1rem;\n  margin-bottom: 1rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/reset.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
`, "",{"version":3,"sources":["webpack://./src/css/reset.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAiFE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;AAC1B;AACA,gDAAgD;AAChD;;;;;;;;;;;EAWE,cAAc;AAChB;AACA;EACE,cAAc;AAChB;AACA;;EAEE,gBAAgB;AAClB;AACA;;EAEE,YAAY;AACd;AACA;;;;EAIE,WAAW;EACX,aAAa;AACf;AACA;EACE,yBAAyB;EACzB,iBAAiB;AACnB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  font-size: 10px;
}

*,
::before,
::after {
  box-sizing: border-box;
}

* {
  /* color: red; */
}

html {
  background-color: black;
}

body {
  font-size: 2rem;
  color: rgb(255, 0, 0);
  font-weight: bolder;
}

a {
  color: unset;
  text-decoration: unset;
}

ul,
li {
  list-style-type: none;
}

h1 {
  font-size: 4rem;
}

h2 {
  font-size: 3rem;
}

button {
  border: unset;
  cursor: pointer;
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.hide {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;EACE,eAAe;AACjB;;AAEA;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,sBAAsB;AACxB;;AAEA;;EAEE,qBAAqB;AACvB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf","sourcesContent":[":root {\n  font-size: 10px;\n}\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\n* {\n  /* color: red; */\n}\n\nhtml {\n  background-color: black;\n}\n\nbody {\n  font-size: 2rem;\n  color: rgb(255, 0, 0);\n  font-weight: bolder;\n}\n\na {\n  color: unset;\n  text-decoration: unset;\n}\n\nul,\nli {\n  list-style-type: none;\n}\n\nh1 {\n  font-size: 4rem;\n}\n\nh2 {\n  font-size: 3rem;\n}\n\nbutton {\n  border: unset;\n  cursor: pointer;\n}\n\n.center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.hide {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/button.css":
/*!****************************!*\
  !*** ./src/css/button.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./button.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/button.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_button_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/footer.css":
/*!****************************!*\
  !*** ./src/css/footer.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/footer.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/header.css":
/*!****************************!*\
  !*** ./src/css/header.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./header.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/header.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/nav.css":
/*!*************************!*\
  !*** ./src/css/nav.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./nav.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/nav.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_nav_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/reset.css":
/*!***************************!*\
  !*** ./src/css/reset.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/icon/aim.svg":
/*!*********************************!*\
  !*** ./src/assets/icon/aim.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f97ad3f0b0ea7adf4d41.svg";

/***/ }),

/***/ "./src/assets/img/battleship.png":
/*!***************************************!*\
  !*** ./src/assets/img/battleship.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "075dbe6e172a3399769b.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxtRkFBbUYsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxZQUFZLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVks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YTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvanMvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2pzL2RvbS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvY3NzL2J1dHRvbi5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9mb290ZXIuY3NzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9jc3MvaGVhZGVyLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvY3NzL21haW4uY3NzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9jc3MvbmF2LmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvY3NzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9idXR0b24uY3NzPzcyYTkiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9mb290ZXIuY3NzP2FiOGMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9oZWFkZXIuY3NzPzhhYzEiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9tYWluLmNzcz8yYzlmIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9jc3MvbmF2LmNzcz8xMWRjIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9jc3MvcmVzZXQuY3NzPzE1MmIiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9jc3MvbmF2LmNzcyc7XG5pbXBvcnQgJy4vY3NzL21haW4uY3NzJztcbmltcG9ydCAnLi9jc3MvcmVzZXQuY3NzJztcbmltcG9ydCAnLi9jc3Mvc3R5bGUuY3NzJztcbmltcG9ydCAnLi9jc3MvZm9vdGVyLmNzcyc7XG5pbXBvcnQgJy4vY3NzL2J1dHRvbi5jc3MnO1xuaW1wb3J0ICcuL2Nzcy9oZWFkZXIuY3NzJztcblxuLy8gaW1wb3J0IEFpbSBmcm9tICcuL2Fzc2V0cy9pY29uL2FpbS5zdmcnO1xuLy8gaW1wb3J0IEJhdHRsZXNoaXAgZnJvbSAnLi9hc3NldHMvaW1nL2JhdHRsZXNoaXAucG5nJztcblxuaW1wb3J0ICcuL2pzL2RvbS5qcyc7XG5pbXBvcnQgJy4vanMvY2xhc3MuanMnO1xuaW1wb3J0ICcuL2pzL2FuaW1hdGlvbi5qcyc7XG5cbmltcG9ydCB7IERPTSwgR2FtZSB9IGZyb20gJy4vanMvZG9tLmpzJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZSkgPT4ge1xuICBHYW1lLnN0YXJ0KCk7XG59KTtcblxuRE9NLnJlc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBHYW1lLnN0YXJ0KCk7XG59KTtcbiIsImNvbnN0IF9TSVpFID0gMTA7IC8vIEdhbWVib2FyZCBTSVpFXG5cbmV4cG9ydCBjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuKSB7XG4gICAgaWYgKGxlbiA+IDUgfHwgbGVuIDwgMSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHNoaXAgbGVuZ3RoJyk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICBsZW5ndGg6IHtcbiAgICAgICAgdmFsdWU6IGxlbixcbiAgICAgIH0sXG5cbiAgICAgIGhpdHM6IHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBfaGl0cztcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBpc1N1bms6IHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmxlbmd0aCAtIF9oaXRzIDwgMTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBsZXQgX2hpdHMgPSAwO1xuXG4gICAgdGhpcy5oaXQgPSAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5pc1N1bmspIHRocm93IG5ldyBFcnJvcihgQ2FuJ3QgYXR0YWNrIHN1bmsgc2hpcGApO1xuXG4gICAgICBfaGl0cysrO1xuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBvc2l0aW9uIHtcbiAgY29uc3RydWN0b3Iocm93LCBjb2wpIHtcbiAgICBpZiAocm93ID4gOSB8fCBjb2wgPiA5IHx8IHJvdyA8IDAgfHwgY29sIDwgMCkgdGhyb3cgbmV3IEVycm9yKCdQb3NpdGlvbiBpcyBub3QgbGVnaXQnKTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgIHJvdzoge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHJvdztcbiAgICAgICAgfSxcbiAgICAgIH0sXG5cbiAgICAgIGNvbDoge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbDtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENlbGwge1xuICBjb25zdHJ1Y3Rvcihyb3csIGNvbCkge1xuICAgIGxldCBfaXNSZWNlaXZlZEF0dGFjayA9IGZhbHNlO1xuXG4gICAgbGV0IF9zaGlwID0gbnVsbDtcblxuICAgIHRoaXMucmVjZWl2ZWRBdHRhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX2lzUmVjZWl2ZWRBdHRhY2spIHRocm93IG5ldyBFcnJvcignQWxyZWFkeSBhdHRhY2tlZCB0aGlzIGNlbGwnKTtcblxuICAgICAgX2lzUmVjZWl2ZWRBdHRhY2sgPSB0cnVlO1xuXG4gICAgICBfc2hpcD8uaGl0KCk7XG4gICAgfTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIHZhbHVlOiBuZXcgUG9zaXRpb24ocm93LCBjb2wpLFxuICAgICAgfSxcblxuICAgICAgaXNSZWNlaXZlZEF0dGFjazoge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIF9pc1JlY2VpdmVkQXR0YWNrO1xuICAgICAgICB9LFxuICAgICAgfSxcblxuICAgICAgc2hpcDoge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIF9zaGlwO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldChuZXdTaGlwKSB7XG4gICAgICAgICAgaWYgKF9zaGlwKSB0aHJvdyBuZXcgRXJyb3IoJ0FscmVhZHkgcGxhY2VkIGEgc2hpcCBvbiB0aGlzIGNlbGwnKTtcblxuICAgICAgICAgIF9zaGlwID0gbmV3U2hpcDtcbiAgICAgICAgfSxcbiAgICAgIH0sXG5cbiAgICAgIHN0YXR1czoge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgaWYgKCFfaXNSZWNlaXZlZEF0dGFjaykgcmV0dXJuICdOb3QgeWV0JzsgLy8gaWYgaXMgbm90IHlldCByZWNlaXZlZCBhdHRhY2tcblxuICAgICAgICAgIGlmIChfc2hpcCkgcmV0dXJuICdIaXQnOyAvLyBpZiByZWNlaXZlZCBhdHRhY2sgYW5kIGNvbnRhaW5zIGEgc2hpcFxuXG4gICAgICAgICAgcmV0dXJuICdNaXNzJzsgLy8gZWxzZVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgc2hpcHNJbmZvOiB7IHZhbHVlOiBbXSB9LFxuXG4gICAgICBib2FyZDogeyB2YWx1ZTogW10gfSxcblxuICAgICAgaGl0U2hvdHM6IHsgdmFsdWU6IFtdIH0sXG5cbiAgICAgIG1pc3NTaG90czogeyB2YWx1ZTogW10gfSxcblxuICAgICAgc2hvdHM6IHsgdmFsdWU6IFtdIH0sXG5cbiAgICAgIGFsbENsZWFyOiB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zaGlwc0luZm8uZXZlcnkoKGluZm8pID0+IGluZm8uc2hpcC5pc1N1bmspO1xuICAgICAgICB9LFxuICAgICAgfSxcblxuICAgICAgc2hpcHM6IHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIC8vIHBsYWNlIHNoaXBzIGludG8gY2F0ZWdvcnkgYmFzZSBvbiB0aGVpciBzdGF0dXM6IGhlYWx0aHksIHdhcm5pbmcsIGRlYXRoXG4gICAgICAgICAgcmV0dXJuIHRoaXMuc2hpcHNJbmZvLnJlZHVjZShcbiAgICAgICAgICAgICh0b3RhbCwgY3VycmVudFNoaXBJbmZvKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBzaGlwU3RhdHVzO1xuXG4gICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTaGlwID0gY3VycmVudFNoaXBJbmZvLnNoaXA7XG5cbiAgICAgICAgICAgICAgY29uc3Qgc2hpcEhlYWx0aCA9IGN1cnJlbnRTaGlwLmxlbmd0aCAtIGN1cnJlbnRTaGlwLmhpdHM7XG5cbiAgICAgICAgICAgICAgaWYgKHNoaXBIZWFsdGggPT09IDApIHNoaXBTdGF0dXMgPSAnZGVhdGgnO1xuICAgICAgICAgICAgICBlbHNlIGlmIChzaGlwSGVhbHRoID09PSAxKSBzaGlwU3RhdHVzID0gJ3dhcm5pbmcnO1xuICAgICAgICAgICAgICBlbHNlIHNoaXBTdGF0dXMgPSAnaGVhbHRoeSc7XG5cbiAgICAgICAgICAgICAgdG90YWxbc2hpcFN0YXR1c10ucHVzaChjdXJyZW50U2hpcEluZm8pO1xuXG4gICAgICAgICAgICAgIHJldHVybiB0b3RhbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IGhlYWx0aHk6IFtdLCBkZWF0aDogW10sIHdhcm5pbmc6IFtdIH1cbiAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX1NJWkU7IGkrKykge1xuICAgICAgdGhpcy5ib2FyZC5wdXNoKFtdKTtcblxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBfU0laRTsgaisrKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbaV0ucHVzaChuZXcgQ2VsbChpLCBqKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5wbGFjZVNoaXBzID0gKHNoaXAsIHN0YXJ0UG9zaXRpb24sIGlzVmVydGljYWwpID0+IHtcbiAgICAgIGlmICghKHNoaXAgaW5zdGFuY2VvZiBTaGlwKSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHNoaXAgb2JqZWN0Jyk7XG5cbiAgICAgIGlmICh0eXBlb2YgaXNWZXJ0aWNhbCAhPT0gJ2Jvb2xlYW4nKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgZGlyZWN0aW9uJyk7XG5cbiAgICAgIGlmICghKHN0YXJ0UG9zaXRpb24gaW5zdGFuY2VvZiBQb3NpdGlvbikpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdGFydCBwb3NpdGlvbicpO1xuXG4gICAgICBjb25zdCBsZW5ndGggPSBzaGlwLmxlbmd0aDtcblxuICAgICAgY29uc3QgZW5kUG9zaXRpb24gPSBsZW5ndGggKyAoaXNWZXJ0aWNhbCA/IHN0YXJ0UG9zaXRpb24uY29sIDogc3RhcnRQb3NpdGlvbi5yb3cpOyAvLyB1c2VkIHRvIGNoZWNrIGlmIG91dHNpZGUgdGhlIGdhbWVib2FyZFxuXG4gICAgICBpZiAoZW5kUG9zaXRpb24gPiBfU0laRSkgdGhyb3cgbmV3IEVycm9yKCdUaGlzIHNoaXAgZ29lcyBiZXlvbmQgZ2FtZWJvYXJkJyk7XG5cbiAgICAgIGxldCB7IHJvdywgY29sIH0gPSBzdGFydFBvc2l0aW9uO1xuXG4gICAgICBjb25zdCBsb2NhdGlvbnMgPSBbXTtcblxuICAgICAgY29uc3QgY2VsbHMgPSBbXTtcblxuICAgICAgLy8gY2hlY2sgYWxsIHNoaXAncyBsb2NhdGlvbnMgZmlyc3QgdG8gc2VlIGlmIHNvbWV0aGluZyB0aHJvd1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5ib2FyZFtyb3ddW2NvbF07XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgdGhpcyBjZWxsIGlzIGxlZ2l0IHRvIHBsYWNlIHNoaXBcbiAgICAgICAgaWYgKGNlbGwuc2hpcCAhPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKCdQbGFjZSBzaGlwIGNhbmNlbCBiZWNhdXNlIHRoaXMgY2VsbCBhbHJlYWR5IGhhcyBhIHNoaXAgb24gaXQnKTtcblxuICAgICAgICAvLyBzYXZlIGNlbGxzIHdoaWNoIHdpbGwgdXNlIHRvIHBsYWNlIHNoaXAgYXQgdGhlIHNhbWUgdGltZVxuICAgICAgICBjZWxscy5wdXNoKGNlbGwpO1xuXG4gICAgICAgIGxvY2F0aW9ucy5wdXNoKG5ldyBQb3NpdGlvbihyb3csIGNvbCkpO1xuXG4gICAgICAgIGlzVmVydGljYWwgPyBjb2wrKyA6IHJvdysrOyAvLyBpbmNyZWFzZSBiYXNlZCBvbiBkaXJlY3Rpb25cbiAgICAgIH1cblxuICAgICAgLy8gdGhlIGxvb3AgdGhyb3VnaCBhbGwgbGVnaXQgY2VsbHMgdG8gYWN0dWFsbHkgcGxhY2Ugc2hpcCBhZnRlciBub3RoaW5nIGdvdCB0aHJvd1xuICAgICAgZm9yIChjb25zdCBjZWxsIG9mIGNlbGxzKSB7XG4gICAgICAgIGNlbGwuc2hpcCA9IHNoaXA7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2hpcHNJbmZvLnB1c2goeyBsb2NhdGlvbnMsIGlzVmVydGljYWwsIHNoaXA6IHNoaXAgfSk7XG4gICAgfTtcblxuICAgIHRoaXMucmVjZWl2ZWRBdHRhY2sgPSAocG9zaXRpb24pID0+IHtcbiAgICAgIGlmICghKHBvc2l0aW9uIGluc3RhbmNlb2YgUG9zaXRpb24pKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcG9zaXRpb24nKTtcblxuICAgICAgY29uc3QgeyByb3csIGNvbCB9ID0gcG9zaXRpb247XG5cbiAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmJvYXJkW3Jvd11bY29sXTtcblxuICAgICAgY2VsbC5yZWNlaXZlZEF0dGFjaygpO1xuXG4gICAgICBjb25zdCBjZWxsU3RhdHVzID0gY2VsbC5zdGF0dXM7XG5cbiAgICAgIGNvbnN0IHNoaXBTdGF0dXMgPSBjZWxsLnNoaXA/LmlzU3VuayA/ICdTdW5rJyA6ICdOb3Qgc3Vuayc7XG5cbiAgICAgIGlmIChjZWxsU3RhdHVzID09PSAnSGl0JykgdGhpcy5oaXRTaG90cy5wdXNoKHBvc2l0aW9uKTtcblxuICAgICAgaWYgKGNlbGxTdGF0dXMgPT09ICdNaXNzJykgdGhpcy5taXNzU2hvdHMucHVzaChwb3NpdGlvbik7XG5cbiAgICAgIHRoaXMuc2hvdHMucHVzaChwb3NpdGlvbik7XG5cbiAgICAgIHJldHVybiB7IGNlbGxTdGF0dXMsIHNoaXBTdGF0dXMsIHBvc2l0aW9uIH07XG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgbGV0IF9ib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgIGJvYXJkOiB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gX2JvYXJkO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHJhbmRvbVBsYWNlU2hpcHMoKSB7XG4gICAgY29uc3QgbGVuZ3RocyA9IFsxLCAxLCAxLCAyLCAyLCAzLCAzLCA0LCA1XTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3Rocy5sZW5ndGg7IGkrKykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogX1NJWkUpO1xuXG4gICAgICAgIGNvbnN0IGNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIF9TSVpFKTtcblxuICAgICAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb3NpdGlvbihyb3csIGNvbCk7XG5cbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gISFNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcblxuICAgICAgICBjb25zdCBzaGlwID0gbmV3IFNoaXAobGVuZ3Roc1tpXSk7XG5cbiAgICAgICAgdGhpcy5ib2FyZC5wbGFjZVNoaXBzKHNoaXAsIHBvc2l0aW9uLCBkaXJlY3Rpb24pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaS0tO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEh1bWFuIGV4dGVuZHMgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuYXR0YWNrID0gKHBvc2l0aW9uLCBwbGF5ZXIpID0+IHtcbiAgICAgIGlmICghKHBvc2l0aW9uIGluc3RhbmNlb2YgUG9zaXRpb24pIHx8ICEocGxheWVyLmJvYXJkIGluc3RhbmNlb2YgR2FtZWJvYXJkKSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGFyZ3VtZW50cycpO1xuXG4gICAgICBjb25zdCBzdGF0dXMgPSBwbGF5ZXIuYm9hcmQucmVjZWl2ZWRBdHRhY2socG9zaXRpb24pO1xuXG4gICAgICByZXR1cm4gc3RhdHVzO1xuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbXB1dGVyIGV4dGVuZHMgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuYXR0YWNrID0gKHBsYXllcikgPT4ge1xuICAgICAgaWYgKCEocGxheWVyLmJvYXJkIGluc3RhbmNlb2YgR2FtZWJvYXJkKSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGJvYXJkJyk7XG5cbiAgICAgIGNvbnN0IGxlbmd0aCA9IHBsYXllci5ib2FyZC5zaG90cy5sZW5ndGg7XG5cbiAgICAgIHdoaWxlIChsZW5ndGggPT09IHBsYXllci5ib2FyZC5zaG90cy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogX1NJWkUpO1xuXG4gICAgICAgIGNvbnN0IGNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIF9TSVpFKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKHJvdywgY29sKTtcblxuICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IHBsYXllci5ib2FyZC5yZWNlaXZlZEF0dGFjayhwb3NpdGlvbik7XG5cbiAgICAgICAgICByZXR1cm4gc3RhdHVzO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUG9zaXRpb24sIEh1bWFuLCBDb21wdXRlciwgUGxheWVyIH0gZnJvbSAnLi9jbGFzcyc7XG5cbmV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgc3RhdGljIFNJWkUgPSAxMDtcblxuICBzdGF0aWMgaXNPdmVyID0gZmFsc2U7XG5cbiAgc3RhdGljIGh1bWFuO1xuXG4gIHN0YXRpYyBhaTtcblxuICBzdGF0aWMgY2hlY2tHYW1lb3ZlciA9IChwbGF5ZXJUb0NoZWNrKSA9PiB7XG4gICAgaWYgKHBsYXllclRvQ2hlY2suYm9hcmQuYWxsQ2xlYXIpIHtcbiAgICAgIHRoaXMuaXNPdmVyID0gdHJ1ZTtcbiAgICB9XG4gIH07XG5cbiAgc3RhdGljIHN0YXJ0ID0gKCkgPT4ge1xuICAgIHRoaXMuaXNPdmVyID0gZmFsc2U7XG5cbiAgICB0aGlzLmh1bWFuID0gbmV3IEh1bWFuKCk7XG5cbiAgICB0aGlzLmFpID0gbmV3IENvbXB1dGVyKCk7XG5cbiAgICB0aGlzLmh1bWFuLnJhbmRvbVBsYWNlU2hpcHMoKTtcblxuICAgIHRoaXMuYWkucmFuZG9tUGxhY2VTaGlwcygpO1xuXG4gICAgRGlzcGxheS5ib2FyZCh0aGlzLmh1bWFuKTtcblxuICAgIERpc3BsYXkuYm9hcmQodGhpcy5haSk7XG5cbiAgICBEaXNwbGF5Lmh1bWFuU2hpcHModGhpcy5odW1hbik7XG5cbiAgICAvLyBEaXNwbGF5Lmh1bWFuU2hpcHModGhpcy5haSk7IC8vIFRPRE8gdXNlZCBmb3IgZGlzcGxheSBhaSdzIHNoaXBzLCBmb3IgdGVzdGluZ1xuXG4gICAgRGlzcGxheS5tZXNzYWdlKHRoaXMuaHVtYW4sIGBGZWVsIGZyZWUgdG8gcHJlc3MgdGhlIHJlc3RhcnQgYnV0dG9uIGlmIHlvdSdyZSBub3QgaGFwcHkgd2l0aCB5b3VyIHNoaXBzIGxheW91dGApO1xuXG4gICAgRGlzcGxheS5tZXNzYWdlKHRoaXMuYWksIGBLZWVwIHRyYWNrIG9mIGdhbWUgYWxlcnQgaGVyZS4gWW91IHdpbGwgYXR0YWNrIHRoZSBnYW1lYm9hcmQgYWJvdmVgKTtcblxuICAgIERPTS5wcmV2ZW50U3BhbS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG5cbiAgICBET00ubGlzdGVuSHVtYW5BdHRhY2tzKHRoaXMuaHVtYW4sIHRoaXMuYWkpO1xuICB9O1xuXG4gIHN0YXRpYyBodW1hblBsYXlPbmVUdXJuID0gKGh1bWFuLCBhaSwgcG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBodW1hbkF0dGFja3NTdGF0dXMgPSBodW1hbi5hdHRhY2socG9zaXRpb24sIGFpKTtcblxuICAgIGxldCBodW1hbk1lc3NhZ2UgPSBgV2Ugc2hvdCBhdCBlbmVteSdzIHdhdGVyIGFuZCBpdCdzIGEgbWlzc2A7XG5cbiAgICBpZiAoaHVtYW5BdHRhY2tzU3RhdHVzLmNlbGxTdGF0dXMgPT09ICdIaXQnKSB7XG4gICAgICBEaXNwbGF5LmFpRGVhdGhTaGlwcyhhaSk7XG5cbiAgICAgIGh1bWFuTWVzc2FnZSA9IGBXZSBzaG90IGF0IGVuZW15J3Mgd2F0ZXIgYW5kIGl0J3MgYSBoaXRgO1xuXG4gICAgICBpZiAoaHVtYW5BdHRhY2tzU3RhdHVzLnNoaXBTdGF0dXMgPT09ICdTdW5rJykgaHVtYW5NZXNzYWdlICs9IGAgYW5kIHdlIGhhdmUgc3VuayB0aGVpciBzaGlwYDtcbiAgICB9XG5cbiAgICBEaXNwbGF5LnNob3RPbkJvYXJkKGFpLCBwb3NpdGlvbiwgaHVtYW5BdHRhY2tzU3RhdHVzLmNlbGxTdGF0dXMpO1xuXG4gICAgRGlzcGxheS5tZXNzYWdlKGFpLCBodW1hbk1lc3NhZ2UpO1xuXG4gICAgdGhpcy5jaGVja0dhbWVvdmVyKGFpKTtcbiAgfTtcblxuICBzdGF0aWMgYWlQbGF5T25lVHVybiA9IChodW1hbiwgYWkpID0+IHtcbiAgICBjb25zdCBhaUF0dGFja1Jlc3VsdCA9IGFpLmF0dGFjayhodW1hbik7XG5cbiAgICBsZXQgYWlNZXNzYWdlID0gYEVuZW15IHNob3QgYXQgb3VyIHdhdGVyIGFuZCBpdCdzIGEgbWlzc2A7XG5cbiAgICBpZiAoYWlBdHRhY2tSZXN1bHQuY2VsbFN0YXR1cyA9PT0gJ0hpdCcpIHtcbiAgICAgIERpc3BsYXkuaHVtYW5TaGlwcyhodW1hbik7XG5cbiAgICAgIGFpTWVzc2FnZSA9IGBFbmVteSBzaG90IGF0IG91ciB3YXRlciBhbmQgaXQncyBhIGhpdGA7XG5cbiAgICAgIGlmIChhaUF0dGFja1Jlc3VsdC5zaGlwU3RhdHVzID09PSAnU3VuaycpIGFpTWVzc2FnZSArPSBgIGFuZCB0aGV5IGhhdmUgc3VuayBvdXIgc2hpcGA7XG4gICAgfVxuXG4gICAgRGlzcGxheS5zaG90T25Cb2FyZChodW1hbiwgYWlBdHRhY2tSZXN1bHQucG9zaXRpb24sIGFpQXR0YWNrUmVzdWx0LmNlbGxTdGF0dXMpO1xuXG4gICAgRGlzcGxheS5tZXNzYWdlKGh1bWFuLCBhaU1lc3NhZ2UpO1xuXG4gICAgdGhpcy5jaGVja0dhbWVvdmVyKGh1bWFuKTtcbiAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIERPTSB7XG4gIHN0YXRpYyBtZXNzYWdlSHVtYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1tZXNzYWdlPVwiaHVtYW5cIl1gKTtcblxuICBzdGF0aWMgbWVzc2FnZUFpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbWVzc2FnZT1cImFpXCJdYCk7XG5cbiAgc3RhdGljIGdhbWVib2FyZEh1bWFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZFtkYXRhLWh1bWFuXScpO1xuXG4gIHN0YXRpYyBnYW1lYm9hcmRBaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmRbZGF0YS1haV0nKTtcblxuICBzdGF0aWMgcmVzdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJlc3RhcnRdJyk7XG5cbiAgc3RhdGljIHByZXZlbnRTcGFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZXZlbnRfX3NwYW0nKTtcblxuICBzdGF0aWMgbGlzdGVuSHVtYW5BdHRhY2tzID0gKGh1bWFuLCBhaSkgPT4ge1xuICAgIGlmICghKGh1bWFuIGluc3RhbmNlb2YgSHVtYW4pKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgSHVtYW4nKTtcblxuICAgIGlmICghKGFpIGluc3RhbmNlb2YgQ29tcHV0ZXIpKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgQWknKTtcblxuICAgIGNvbnN0IGNlbGxzID0gdGhpcy5nYW1lYm9hcmRBaS5xdWVyeVNlbGVjdG9yQWxsKCcuYWlfX2NlbGwnKTtcblxuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2NsaWNrJyxcblxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2F0dGFja2VkJyk7XG5cbiAgICAgICAgICBjb25zdCByb3cgPSArZS50YXJnZXQuZGF0YXNldC5yb3c7XG5cbiAgICAgICAgICBjb25zdCBjb2wgPSArZS50YXJnZXQuZGF0YXNldC5jb2w7XG5cbiAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb3NpdGlvbihyb3csIGNvbCk7XG5cbiAgICAgICAgICBHYW1lLmh1bWFuUGxheU9uZVR1cm4oaHVtYW4sIGFpLCBwb3NpdGlvbik7XG5cbiAgICAgICAgICBpZiAoR2FtZS5pc092ZXIpIHtcbiAgICAgICAgICAgIERpc3BsYXkuc3RvcFVzZXJTcGFtbWluZygpO1xuXG4gICAgICAgICAgICBEaXNwbGF5Lm1lc3NhZ2UoYWksIGBXZSBoYXZlIHdpbiB0aGUgYmF0dGxlIWApO1xuXG4gICAgICAgICAgICBEaXNwbGF5Lm1lc3NhZ2UoaHVtYW4sIGBXZSBoYXZlIHdpbiB0aGUgYmF0dGxlIWApO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gYWkgcGxheSBpdHMgdHVyblxuICAgICAgICAgIEdhbWUuYWlQbGF5T25lVHVybihodW1hbiwgYWkpO1xuXG4gICAgICAgICAgaWYgKEdhbWUuaXNPdmVyKSB7XG4gICAgICAgICAgICBEaXNwbGF5LnN0b3BVc2VyU3BhbW1pbmcoKTtcblxuICAgICAgICAgICAgRGlzcGxheS5tZXNzYWdlKGFpLCBgRW5lbXkgaGFzIHdpbiB0aGUgYmF0dGxlIWApO1xuXG4gICAgICAgICAgICBEaXNwbGF5Lm1lc3NhZ2UoaHVtYW4sIGBFbmVteSBoYXMgd2luIHRoZSBiYXR0bGUhYCk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG59XG5cbmNsYXNzIERpc3BsYXkge1xuICBzdGF0aWMgbWVzc2FnZSA9IChwbGF5ZXIsIGNvbnRlbnQpID0+IHtcbiAgICBsZXQgdGFyZ2V0TWVzc2FnZTtcblxuICAgIGlmIChwbGF5ZXIgaW5zdGFuY2VvZiBIdW1hbikgdGFyZ2V0TWVzc2FnZSA9IERPTS5tZXNzYWdlSHVtYW47XG4gICAgZWxzZSB0YXJnZXRNZXNzYWdlID0gRE9NLm1lc3NhZ2VBaTtcblxuICAgIHRhcmdldE1lc3NhZ2UudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICB9O1xuXG4gIHN0YXRpYyBib2FyZCA9IChwbGF5ZXIpID0+IHtcbiAgICBpZiAoIShwbGF5ZXIgaW5zdGFuY2VvZiBQbGF5ZXIpKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgUGxheWVyJyk7XG5cbiAgICBjb25zdCB0YXJnZXRCb2FyZCA9IHBsYXllciBpbnN0YW5jZW9mIEh1bWFuID8gRE9NLmdhbWVib2FyZEh1bWFuIDogRE9NLmdhbWVib2FyZEFpO1xuXG4gICAgdGFyZ2V0Qm9hcmQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCB0eXBlID0gcGxheWVyIGluc3RhbmNlb2YgSHVtYW4gPyAnaHVtYW4nIDogJ2FpJztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR2FtZS5TSVpFOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgR2FtZS5TSVpFOyBqKyspIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2NlbnRlcicpO1xuXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGAke3R5cGV9X19jZWxsYCk7XG5cbiAgICAgICAgZGl2LmRhdGFzZXQucm93ID0gaTtcblxuICAgICAgICBkaXYuZGF0YXNldC5jb2wgPSBqO1xuXG4gICAgICAgIHRhcmdldEJvYXJkLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHN0YXRpYyBodW1hblNoaXBzID0gKHBsYXllcikgPT4ge1xuICAgIGlmICghKHBsYXllciBpbnN0YW5jZW9mIFBsYXllcikpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBQbGF5ZXInKTtcblxuICAgIGNvbnN0IHNoaXBzID0gcGxheWVyLmJvYXJkLnNoaXBzO1xuXG4gICAgLy8gbG9vcCB0aHJvdWdoIDMgdHlwZTogaGVhbHRoeSwgd2FybmluZywgZGVhdGhcbiAgICBmb3IgKGNvbnN0IHNoaXBUeXBlIGluIHNoaXBzKSB7XG4gICAgICBjb25zdCBjdXJyZW50VHlwZSA9IHNoaXBzW3NoaXBUeXBlXTtcblxuICAgICAgLy8gbG9vcCB0aHJvdWdoIGFsbCBzaGlwcyBpbiAxIHR5cGVcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFR5cGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY3VycmVudFNoaXBJbmZvID0gY3VycmVudFR5cGVbaV07XG5cbiAgICAgICAgY29uc3QgbG9jYXRpb25zID0gY3VycmVudFNoaXBJbmZvLmxvY2F0aW9ucztcblxuICAgICAgICBjb25zdCBpc1ZlcnRpY2FsID0gY3VycmVudFNoaXBJbmZvLmlzVmVydGljYWw7XG5cbiAgICAgICAgLy8gbG9vcCB0aHJvdWdoIGFsbCBwb3NpdGlvbiBvZiB0aGF0IHNoaXBcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsb2NhdGlvbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50TG9jYXRpb24gPSBsb2NhdGlvbnNbal07XG5cbiAgICAgICAgICBjb25zdCB7IHJvdywgY29sIH0gPSBjdXJyZW50TG9jYXRpb247XG5cbiAgICAgICAgICAvLyBzZWxlY3QgZXhhY3QgY2VsbCBkb20gZWxlbWVudFxuICAgICAgICAgIGNvbnN0IGNlbGwgPSBwbGF5ZXIgaW5zdGFuY2VvZiBIdW1hbiA/IERPTS5nYW1lYm9hcmRIdW1hbi5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9XCIke3Jvd31cIl1bZGF0YS1jb2w9XCIke2NvbH1cIl1gKSA6IERPTS5nYW1lYm9hcmRBaS5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9XCIke3Jvd31cIl1bZGF0YS1jb2w9XCIke2NvbH1cIl1gKTtcblxuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChzaGlwVHlwZSk7XG5cbiAgICAgICAgICBpZiAobG9jYXRpb25zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwX19vbmVfX2xlbmd0aCcpO1xuXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaXNWZXJ0aWNhbCkgY2VsbC5jbGFzc0xpc3QuYWRkKCd2ZXJ0aWNhbCcpO1xuICAgICAgICAgIGVsc2UgY2VsbC5jbGFzc0xpc3QuYWRkKCdob3Jpem9uJyk7XG5cbiAgICAgICAgICBpZiAoIWopIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcF9faGVhZCcpO1xuICAgICAgICAgIGVsc2UgaWYgKGogPT09IGxvY2F0aW9ucy5sZW5ndGggLSAxKSBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXBfX3RhaWwnKTtcbiAgICAgICAgICBlbHNlIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcF9fYm9keScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHN0YXRpYyBhaURlYXRoU2hpcHMgPSAocGxheWVyKSA9PiB7XG4gICAgaWYgKCEocGxheWVyIGluc3RhbmNlb2YgUGxheWVyKSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFBsYXllcicpO1xuXG4gICAgY29uc3QgZGVhdGhTaGlwcyA9IHBsYXllci5ib2FyZC5zaGlwcy5kZWF0aDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVhdGhTaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY3VycmVudFNoaXBJbmZvID0gZGVhdGhTaGlwc1tpXTtcblxuICAgICAgY29uc3QgbG9jYXRpb25zID0gY3VycmVudFNoaXBJbmZvLmxvY2F0aW9ucztcblxuICAgICAgY29uc3QgaXNWZXJ0aWNhbCA9IGN1cnJlbnRTaGlwSW5mby5pc1ZlcnRpY2FsO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxvY2F0aW9ucy5sZW5ndGg7IGorKykge1xuICAgICAgICBjb25zdCBjdXJyZW50TG9jYXRpb24gPSBsb2NhdGlvbnNbal07XG5cbiAgICAgICAgY29uc3QgeyByb3csIGNvbCB9ID0gY3VycmVudExvY2F0aW9uO1xuXG4gICAgICAgIGNvbnN0IGNlbGwgPSBET00uZ2FtZWJvYXJkQWkucXVlcnlTZWxlY3RvcihgW2RhdGEtcm93PVwiJHtyb3d9XCJdW2RhdGEtY29sPVwiJHtjb2x9XCJdYCk7XG5cbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdkZWF0aCcpO1xuXG4gICAgICAgIGlmIChsb2NhdGlvbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwX19vbmVfX2xlbmd0aCcpO1xuXG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNWZXJ0aWNhbCkgY2VsbC5jbGFzc0xpc3QuYWRkKCd2ZXJ0aWNhbCcpO1xuICAgICAgICBlbHNlIGNlbGwuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbicpO1xuXG4gICAgICAgIGlmICghaikgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwX19oZWFkJyk7XG4gICAgICAgIGVsc2UgaWYgKGogPT09IGxvY2F0aW9ucy5sZW5ndGggLSAxKSBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXBfX3RhaWwnKTtcbiAgICAgICAgZWxzZSBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXBfX2JvZHknKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgc3RhdGljIHNob3RPbkJvYXJkID0gKHBsYXllciwgcG9zaXRpb24sIHN0YXR1cykgPT4ge1xuICAgIGlmICghKHBvc2l0aW9uIGluc3RhbmNlb2YgUG9zaXRpb24pIHx8ICEocGxheWVyIGluc3RhbmNlb2YgUGxheWVyKSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGFyZ3VtZW50Jyk7XG5cbiAgICBjb25zdCB7IHJvdywgY29sIH0gPSBwb3NpdGlvbjtcblxuICAgIGxldCBnYW1lYm9hcmQ7XG5cbiAgICBpZiAocGxheWVyIGluc3RhbmNlb2YgSHVtYW4pIGdhbWVib2FyZCA9IERPTS5nYW1lYm9hcmRIdW1hbjtcbiAgICBlbHNlIGdhbWVib2FyZCA9IERPTS5nYW1lYm9hcmRBaTtcblxuICAgIGNvbnN0IGNlbGwgPSBnYW1lYm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29sPVwiJHtjb2x9XCJdW2RhdGEtcm93PVwiJHtyb3d9XCJdYCk7XG5cbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgaWYgKHN0YXR1cyA9PT0gJ0hpdCcpIHNwYW4uY2xhc3NMaXN0LmFkZCgnaGl0X19zaG90Jyk7XG4gICAgZWxzZSBzcGFuLmNsYXNzTGlzdC5hZGQoJ21pc3NfX3Nob3QnKTtcblxuICAgIGNlbGwuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gIH07XG5cbiAgc3RhdGljIHN0b3BVc2VyU3BhbW1pbmcgPSAoKSA9PiB7XG4gICAgRE9NLnByZXZlbnRTcGFtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgfTtcbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBoZWFkZXIgYnV0dG9uIHZpZXcgb24gZ2l0aHViICovXG4uYnRuLTEzLFxuLmJ0bi0xMyAqLFxuLmJ0bi0xMyA6YWZ0ZXIsXG4uYnRuLTEzIDpiZWZvcmUsXG4uYnRuLTEzOmFmdGVyLFxuLmJ0bi0xMzpiZWZvcmUge1xuICBib3JkZXI6IDAgc29saWQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uYnRuLTEzIHtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGNvbG9yOiAjZmYwMDAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgSGVsdmV0aWNhIE5ldWUsIEFyaWFsLCBOb3RvIFNhbnMsIHNhbnMtc2VyaWYsIEFwcGxlIENvbG9yIEVtb2ppLCBTZWdvZSBVSSBFbW9qaSwgU2Vnb2UgVUkgU3ltYm9sLFxuICAgIE5vdG8gQ29sb3IgRW1vamk7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbWFyZ2luOiAwO1xuICAvKiAtd2Via2l0LW1hc2staW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCMwMDAsICNmZmYpOyAqL1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmJ0bi0xMzpkaXNhYmxlZCB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbi5idG4tMTM6LW1vei1mb2N1c3Jpbmcge1xuICBvdXRsaW5lOiBhdXRvO1xufVxuLmJ0bi0xMyBzdmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5idG4tMTMgW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmJ0bi0xMyB7XG4gIGJvcmRlci1yYWRpdXM6IDk5cmVtO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMC44cmVtIDNyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5idG4tMTMgc3BhbiB7XG4gIC8qIG1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlOyAqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG4uYnRuLTEzOmFmdGVyLFxuLmJ0bi0xMzpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiByZ2IoMTQzLCA2NywgNjcpO1xuICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbihcbiAgICAwIDAsXG4gICAgMTAwJSAwLFxuICAgIDEwMCUgY2FsYyh2YXIoLS1wcm9ncmVzcywgMCUpIC8gMiksXG4gICAgMCBjYWxjKHZhcigtLXByb2dyZXNzLCAwJSkgLyAyKSxcbiAgICAwIDAsXG4gICAgMCBjYWxjKDEwMCUgLSB2YXIoLS1wcm9ncmVzcywgMCUpIC8gMiksXG4gICAgMTAwJSBjYWxjKDEwMCUgLSB2YXIoLS1wcm9ncmVzcywgMCUpIC8gMiksXG4gICAgMTAwJSAxMDAlLFxuICAgIDAgMTAwJSxcbiAgICAwIGNhbGMoMTAwJSAtIHZhcigtLXByb2dyZXNzLCAwJSkgLyAyKVxuICApO1xuICBjbGlwLXBhdGg6IHBvbHlnb24oXG4gICAgMCAwLFxuICAgIDEwMCUgMCxcbiAgICAxMDAlIGNhbGModmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxuICAgIDAgY2FsYyh2YXIoLS1wcm9ncmVzcywgMCUpIC8gMiksXG4gICAgMCAwLFxuICAgIDAgY2FsYygxMDAlIC0gdmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxuICAgIDEwMCUgY2FsYygxMDAlIC0gdmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxuICAgIDEwMCUgMTAwJSxcbiAgICAwIDEwMCUsXG4gICAgMCBjYWxjKDEwMCUgLSB2YXIoLS1wcm9ncmVzcywgMCUpIC8gMilcbiAgKTtcbiAgY29udGVudDogJyc7XG4gIGluc2V0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKDEwMCUgLSB2YXIoLS1wcm9ncmVzcywgMCUpIC8gMS45OSkpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLCAtd2Via2l0LWNsaXAtcGF0aCAwLjJzIGVhc2U7XG4gIHRyYW5zaXRpb246IGNsaXAtcGF0aCAwLjJzIGVhc2UsIHRyYW5zZm9ybSAwLjJzIGVhc2U7XG4gIHRyYW5zaXRpb246IGNsaXAtcGF0aCAwLjJzIGVhc2UsIHRyYW5zZm9ybSAwLjJzIGVhc2UsIC13ZWJraXQtY2xpcC1wYXRoIDAuMnMgZWFzZTtcbn1cbi5idG4tMTM6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygtMTAwJSArIHZhcigtLXByb2dyZXNzLCAwJSkgLyAxLjk5KSk7XG59XG4uYnRuLTEzOmhvdmVyIHtcbiAgLS1wcm9ncmVzczogMTAwJTtcbn1cblxuLyogaGVhZGVyIGJ1dHRvbiB2aWV3IG9uIGdpdGh1YiAqL1xuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2J1dHRvbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsaUNBQWlDO0FBQ2pDOzs7Ozs7RUFNRSxlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSx3Q0FBd0M7RUFDeEMsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGVBQWU7RUFDZjtvQkFDa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULDZEQUE2RDtFQUM3RCxVQUFVO0VBQ1YseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7QUFDQTs7RUFFRSw0QkFBNEI7RUFDNUI7Ozs7Ozs7Ozs7O0dBV0M7RUFDRDs7Ozs7Ozs7Ozs7R0FXQztFQUNELFdBQVc7RUFDWCxRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLDhEQUE4RDtFQUM5RCw0REFBNEQ7RUFDNUQsb0RBQW9EO0VBQ3BELGlGQUFpRjtBQUNuRjtBQUNBO0VBQ0UsK0RBQStEO0FBQ2pFO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUEsaUNBQWlDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGhlYWRlciBidXR0b24gdmlldyBvbiBnaXRodWIgKi9cXG4uYnRuLTEzLFxcbi5idG4tMTMgKixcXG4uYnRuLTEzIDphZnRlcixcXG4uYnRuLTEzIDpiZWZvcmUsXFxuLmJ0bi0xMzphZnRlcixcXG4uYnRuLTEzOmJlZm9yZSB7XFxuICBib3JkZXI6IDAgc29saWQ7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4uYnRuLTEzIHtcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbiAgY29sb3I6ICNmZjAwMDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sIEhlbHZldGljYSBOZXVlLCBBcmlhbCwgTm90byBTYW5zLCBzYW5zLXNlcmlmLCBBcHBsZSBDb2xvciBFbW9qaSwgU2Vnb2UgVUkgRW1vamksIFNlZ29lIFVJIFN5bWJvbCxcXG4gICAgTm90byBDb2xvciBFbW9qaTtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgbWFyZ2luOiAwO1xcbiAgLyogLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCgjMDAwLCAjZmZmKTsgKi9cXG4gIHBhZGRpbmc6IDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG4uYnRuLTEzOmRpc2FibGVkIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuLmJ0bi0xMzotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiBhdXRvO1xcbn1cXG4uYnRuLTEzIHN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5idG4tMTMgW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmJ0bi0xMyB7XFxuICBib3JkZXItcmFkaXVzOiA5OXJlbTtcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDAuOHJlbSAzcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYnRuLTEzIHNwYW4ge1xcbiAgLyogbWl4LWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7ICovXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uYnRuLTEzOmFmdGVyLFxcbi5idG4tMTM6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxNDMsIDY3LCA2Nyk7XFxuICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbihcXG4gICAgMCAwLFxcbiAgICAxMDAlIDAsXFxuICAgIDEwMCUgY2FsYyh2YXIoLS1wcm9ncmVzcywgMCUpIC8gMiksXFxuICAgIDAgY2FsYyh2YXIoLS1wcm9ncmVzcywgMCUpIC8gMiksXFxuICAgIDAgMCxcXG4gICAgMCBjYWxjKDEwMCUgLSB2YXIoLS1wcm9ncmVzcywgMCUpIC8gMiksXFxuICAgIDEwMCUgY2FsYygxMDAlIC0gdmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxcbiAgICAxMDAlIDEwMCUsXFxuICAgIDAgMTAwJSxcXG4gICAgMCBjYWxjKDEwMCUgLSB2YXIoLS1wcm9ncmVzcywgMCUpIC8gMilcXG4gICk7XFxuICBjbGlwLXBhdGg6IHBvbHlnb24oXFxuICAgIDAgMCxcXG4gICAgMTAwJSAwLFxcbiAgICAxMDAlIGNhbGModmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxcbiAgICAwIGNhbGModmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxcbiAgICAwIDAsXFxuICAgIDAgY2FsYygxMDAlIC0gdmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxcbiAgICAxMDAlIGNhbGMoMTAwJSAtIHZhcigtLXByb2dyZXNzLCAwJSkgLyAyKSxcXG4gICAgMTAwJSAxMDAlLFxcbiAgICAwIDEwMCUsXFxuICAgIDAgY2FsYygxMDAlIC0gdmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpXFxuICApO1xcbiAgY29udGVudDogJyc7XFxuICBpbnNldDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKDEwMCUgLSB2YXIoLS1wcm9ncmVzcywgMCUpIC8gMS45OSkpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZSwgLXdlYmtpdC1jbGlwLXBhdGggMC4ycyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogY2xpcC1wYXRoIDAuMnMgZWFzZSwgdHJhbnNmb3JtIDAuMnMgZWFzZTtcXG4gIHRyYW5zaXRpb246IGNsaXAtcGF0aCAwLjJzIGVhc2UsIHRyYW5zZm9ybSAwLjJzIGVhc2UsIC13ZWJraXQtY2xpcC1wYXRoIDAuMnMgZWFzZTtcXG59XFxuLmJ0bi0xMzphZnRlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygtMTAwJSArIHZhcigtLXByb2dyZXNzLCAwJSkgLyAxLjk5KSk7XFxufVxcbi5idG4tMTM6aG92ZXIge1xcbiAgLS1wcm9ncmVzczogMTAwJTtcXG59XFxuXFxuLyogaGVhZGVyIGJ1dHRvbiB2aWV3IG9uIGdpdGh1YiAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgcGFkZGluZzogM3JlbTtcbn1cblxuLmZvb3RlciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5mb290ZXIgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9mb290ZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHBhZGRpbmc6IDNyZW07XFxufVxcblxcbi5mb290ZXIgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLmZvb3RlciBhOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLy4uL2Fzc2V0cy9pY29uL2FpbS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5oZWFkZXJfX2ljb25fX2N0biB7XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcmVtO1xufVxuLmhlYWRlcl9faWNvbiB7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBjZW50ZXIvY29udGFpbiBuby1yZXBlYXQgcmVkO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDk5cmVtO1xuICB3aWR0aDogNnJlbTtcbiAgYW5pbWF0aW9uOiByb3RhdGUgNzUwbXMgbGluZWFyIDBtcyBpbmZpbml0ZTtcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XG59XG4uaGVhZGVyX19pY29uOmhvdmVyIHtcbiAgYW5pbWF0aW9uOiBub25lO1xufVxuLmhlYWRlcl9fdGl0bGUge1xuICBmb250LXNpemU6IDZyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uaGVhZGVyX19saW5rIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9oZWFkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGdGQUF3RTtFQUN4RSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCwyQ0FBMkM7RUFDM0MsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uaGVhZGVyX19pY29uX19jdG4ge1xcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcmVtO1xcbn1cXG4uaGVhZGVyX19pY29uIHtcXG4gIGJhY2tncm91bmQ6IHVybCgnLi8uLi9hc3NldHMvaWNvbi9haW0uc3ZnJykgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0IHJlZDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDk5cmVtO1xcbiAgd2lkdGg6IDZyZW07XFxuICBhbmltYXRpb246IHJvdGF0ZSA3NTBtcyBsaW5lYXIgMG1zIGluZmluaXRlO1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcbi5oZWFkZXJfX2ljb246aG92ZXIge1xcbiAgYW5pbWF0aW9uOiBub25lO1xcbn1cXG4uaGVhZGVyX190aXRsZSB7XFxuICBmb250LXNpemU6IDZyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLmhlYWRlcl9fbGluayB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi8uLi9hc3NldHMvaW1nL2JhdHRsZXNoaXAucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvIDFyZW07XG4gIGdhcDogMnJlbTtcbn1cblxuLmdhbWVib2FyZF9fY3RuX19jdG4ge1xuICBtYXgtd2lkdGg6IDUycmVtO1xufVxuXG4uZ2FtZWJvYXJkX19oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uZ2FtZWJvYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG4gIGdhcDogMXB4O1xuICB3aWR0aDogY2FsYyg1MHZ3IC0gMXJlbSk7XG4gIGhlaWdodDogY2FsYyg1MHZ3IC0gMXJlbSk7XG4gIG1heC13aWR0aDogNTByZW07XG4gIG1heC1oZWlnaHQ6IDUwcmVtO1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgY2VudGVyL2NvdmVyIG5vLXJlcGVhdCByZWQ7XG59XG5cbi5nYW1lYm9hcmQgPiBkaXYge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMCwgMCk7XG59XG5cbi5nYW1lYm9hcmQgPiAuY29udGFpbl9fc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4uZ2FtZWJvYXJkID4gZGl2ID4gc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDNyZW07XG4gIHdpZHRoOiAzcmVtO1xuICBib3JkZXItcmFkaXVzOiA5OXJlbTtcbn1cblxuLmdhbWVib2FyZCA+IGRpdiA+IC5oaXRfX3Nob3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5nYW1lYm9hcmQgPiBkaXYgPiAubWlzc19fc2hvdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbn1cblxuLmdhbWVib2FyZCAuYWlfX2NlbGwge1xuICBjdXJzb3I6IGNlbGw7XG59XG5cbi5nYW1lYm9hcmQgLmFpX19jZWxsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjIsIDI1NSwgMTIyLCAwLjUpO1xufVxuXG4uZ2FtZWJvYXJkIC5haV9fY2VsbC5hdHRhY2tlZCB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5nYW1lYm9hcmQgLmFpX19jZWxsLmF0dGFja2VkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDEyNiwgMTI2LCAwLjUpO1xufVxuXG4uaGVhbHRoeSB7XG4gIGJvcmRlci1jb2xvcjogZ3JlZW4gIWltcG9ydGFudDtcbn1cblxuLndhcm5pbmcge1xuICBib3JkZXItY29sb3I6IHllbGxvdyAhaW1wb3J0YW50O1xufVxuXG4uZGVhdGgge1xuICBib3JkZXItY29sb3I6IHJlZCAhaW1wb3J0YW50O1xufVxuXG4vKiB0byBwbGFjZSBzaGlwIGluIHRoZSByaWdodCBkaXJlY3Rpb24gKi9cbi5zaGlwX19oZWFkLnZlcnRpY2FsIHtcbiAgYm9yZGVyLXdpZHRoOiA0cHggMCA0cHggNHB4O1xufVxuXG4uc2hpcF9faGVhZC5ob3Jpem9uIHtcbiAgYm9yZGVyLXdpZHRoOiA0cHggNHB4IDAgNHB4O1xufVxuXG4uc2hpcF9fYm9keS52ZXJ0aWNhbCB7XG4gIGJvcmRlci13aWR0aDogNHB4IDAgNHB4IDA7XG59XG5cbi5zaGlwX19ib2R5Lmhvcml6b24ge1xuICBib3JkZXItd2lkdGg6IDAgNHB4IDAgNHB4O1xufVxuXG4uc2hpcF9fdGFpbC52ZXJ0aWNhbCB7XG4gIGJvcmRlci13aWR0aDogNHB4IDRweCA0cHggMDtcbn1cblxuLnNoaXBfX3RhaWwuaG9yaXpvbiB7XG4gIGJvcmRlci13aWR0aDogMCA0cHggNHB4IDRweDtcbn1cblxuLnNoaXBfX29uZV9fbGVuZ3RoIHtcbiAgYm9yZGVyLXdpZHRoOiA0cHggIWltcG9ydGFudDtcbn1cblxuLmRpc3BsYXlfX21lc3NhZ2Uge1xuICBib3JkZXI6IDJweCBkb3R0ZWQgcmVkO1xuICBib3JkZXItcmFkaXVzOiA5OXJlbTtcbiAgcGFkZGluZzogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDJyZW0gMDtcbiAgbWF4LXdpZHRoOiA1MHJlbTtcbn1cblxuLmdhbWVib2FyZF9fY3RuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucHJldmVudF9fc3BhbSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7IC8qIHRyYW5zcGFyZW50ICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgY3Vyc29yOiBjZWxsO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxRQUFRO0VBQ1Isd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLDhFQUE0RTtBQUM5RTs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osV0FBVztFQUNYLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQSx5Q0FBeUM7QUFDekM7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsd0NBQXdDLEVBQUUsZ0JBQWdCO0VBQzFELGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMCBhdXRvIDFyZW07XFxuICBnYXA6IDJyZW07XFxufVxcblxcbi5nYW1lYm9hcmRfX2N0bl9fY3RuIHtcXG4gIG1heC13aWR0aDogNTJyZW07XFxufVxcblxcbi5nYW1lYm9hcmRfX2hlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5nYW1lYm9hcmQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBnYXA6IDFweDtcXG4gIHdpZHRoOiBjYWxjKDUwdncgLSAxcmVtKTtcXG4gIGhlaWdodDogY2FsYyg1MHZ3IC0gMXJlbSk7XFxuICBtYXgtd2lkdGg6IDUwcmVtO1xcbiAgbWF4LWhlaWdodDogNTByZW07XFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4vLi4vYXNzZXRzL2ltZy9iYXR0bGVzaGlwLnBuZycpIGNlbnRlci9jb3ZlciBuby1yZXBlYXQgcmVkO1xcbn1cXG5cXG4uZ2FtZWJvYXJkID4gZGl2IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLCAwLCAwKTtcXG59XFxuXFxuLmdhbWVib2FyZCA+IC5jb250YWluX19zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uZ2FtZWJvYXJkID4gZGl2ID4gc3BhbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogM3JlbTtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogOTlyZW07XFxufVxcblxcbi5nYW1lYm9hcmQgPiBkaXYgPiAuaGl0X19zaG90IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmdhbWVib2FyZCA+IGRpdiA+IC5taXNzX19zaG90IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuXFxuLmdhbWVib2FyZCAuYWlfX2NlbGwge1xcbiAgY3Vyc29yOiBjZWxsO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5haV9fY2VsbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyMiwgMjU1LCAxMjIsIDAuNSk7XFxufVxcblxcbi5nYW1lYm9hcmQgLmFpX19jZWxsLmF0dGFja2VkIHtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi5nYW1lYm9hcmQgLmFpX19jZWxsLmF0dGFja2VkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxMjYsIDEyNiwgMC41KTtcXG59XFxuXFxuLmhlYWx0aHkge1xcbiAgYm9yZGVyLWNvbG9yOiBncmVlbiAhaW1wb3J0YW50O1xcbn1cXG5cXG4ud2FybmluZyB7XFxuICBib3JkZXItY29sb3I6IHllbGxvdyAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZGVhdGgge1xcbiAgYm9yZGVyLWNvbG9yOiByZWQgIWltcG9ydGFudDtcXG59XFxuXFxuLyogdG8gcGxhY2Ugc2hpcCBpbiB0aGUgcmlnaHQgZGlyZWN0aW9uICovXFxuLnNoaXBfX2hlYWQudmVydGljYWwge1xcbiAgYm9yZGVyLXdpZHRoOiA0cHggMCA0cHggNHB4O1xcbn1cXG5cXG4uc2hpcF9faGVhZC5ob3Jpem9uIHtcXG4gIGJvcmRlci13aWR0aDogNHB4IDRweCAwIDRweDtcXG59XFxuXFxuLnNoaXBfX2JvZHkudmVydGljYWwge1xcbiAgYm9yZGVyLXdpZHRoOiA0cHggMCA0cHggMDtcXG59XFxuXFxuLnNoaXBfX2JvZHkuaG9yaXpvbiB7XFxuICBib3JkZXItd2lkdGg6IDAgNHB4IDAgNHB4O1xcbn1cXG5cXG4uc2hpcF9fdGFpbC52ZXJ0aWNhbCB7XFxuICBib3JkZXItd2lkdGg6IDRweCA0cHggNHB4IDA7XFxufVxcblxcbi5zaGlwX190YWlsLmhvcml6b24ge1xcbiAgYm9yZGVyLXdpZHRoOiAwIDRweCA0cHggNHB4O1xcbn1cXG5cXG4uc2hpcF9fb25lX19sZW5ndGgge1xcbiAgYm9yZGVyLXdpZHRoOiA0cHggIWltcG9ydGFudDtcXG59XFxuXFxuLmRpc3BsYXlfX21lc3NhZ2Uge1xcbiAgYm9yZGVyOiAycHggZG90dGVkIHJlZDtcXG4gIGJvcmRlci1yYWRpdXM6IDk5cmVtO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMnJlbSAwO1xcbiAgbWF4LXdpZHRoOiA1MHJlbTtcXG59XFxuXFxuLmdhbWVib2FyZF9fY3RuIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnByZXZlbnRfX3NwYW0ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApOyAvKiB0cmFuc3BhcmVudCAqL1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgY3Vyc29yOiBjZWxsO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5uYXYge1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL25hdi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5uYXYge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXG4gICB2Mi4wIHwgMjAxMTAxMjZcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXG4qL1xuXG5odG1sLFxuYm9keSxcbmRpdixcbnNwYW4sXG5hcHBsZXQsXG5vYmplY3QsXG5pZnJhbWUsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5wLFxuYmxvY2txdW90ZSxcbnByZSxcbmEsXG5hYmJyLFxuYWNyb255bSxcbmFkZHJlc3MsXG5iaWcsXG5jaXRlLFxuY29kZSxcbmRlbCxcbmRmbixcbmVtLFxuaW1nLFxuaW5zLFxua2JkLFxucSxcbnMsXG5zYW1wLFxuc21hbGwsXG5zdHJpa2UsXG5zdHJvbmcsXG5zdWIsXG5zdXAsXG50dCxcbnZhcixcbmIsXG51LFxuaSxcbmNlbnRlcixcbmRsLFxuZHQsXG5kZCxcbm9sLFxudWwsXG5saSxcbmZpZWxkc2V0LFxuZm9ybSxcbmxhYmVsLFxubGVnZW5kLFxudGFibGUsXG5jYXB0aW9uLFxudGJvZHksXG50Zm9vdCxcbnRoZWFkLFxudHIsXG50aCxcbnRkLFxuYXJ0aWNsZSxcbmFzaWRlLFxuY2FudmFzLFxuZGV0YWlscyxcbmVtYmVkLFxuZmlndXJlLFxuZmlnY2FwdGlvbixcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5vdXRwdXQsXG5ydWJ5LFxuc2VjdGlvbixcbnN1bW1hcnksXG50aW1lLFxubWFyayxcbmF1ZGlvLFxudmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250OiBpbmhlcml0O1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLFxuYXNpZGUsXG5kZXRhaWxzLFxuZmlnY2FwdGlvbixcbmZpZ3VyZSxcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5zZWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5vbCxcbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbmJsb2NrcXVvdGUsXG5xIHtcbiAgcXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsXG5ibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsXG5xOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWlGRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjtBQUNBLGdEQUFnRDtBQUNoRDs7Ozs7Ozs7Ozs7RUFXRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsWUFBWTtBQUNkO0FBQ0E7Ozs7RUFJRSxXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbiosXG46OmJlZm9yZSxcbjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qIHtcbiAgLyogY29sb3I6IHJlZDsgKi9cbn1cblxuaHRtbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG5ib2R5IHtcbiAgZm9udC1zaXplOiAycmVtO1xuICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbmEge1xuICBjb2xvcjogdW5zZXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5zZXQ7XG59XG5cbnVsLFxubGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiA0cmVtO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiB1bnNldDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG59XFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcbiAgLyogY29sb3I6IHJlZDsgKi9cXG59XFxuXFxuaHRtbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuYm9keSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiB1bnNldDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5zZXQ7XFxufVxcblxcbnVsLFxcbmxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IHVuc2V0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2VudGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idXR0b24uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idXR0b24uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvb3Rlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvb3Rlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbIkRPTSIsIkdhbWUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInN0YXJ0IiwicmVzdGFydCIsIl9TSVpFIiwiU2hpcCIsIl9jcmVhdGVDbGFzcyIsImxlbiIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiRXJyb3IiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0aWVzIiwibGVuZ3RoIiwidmFsdWUiLCJoaXRzIiwiZ2V0IiwiX2hpdHMiLCJpc1N1bmsiLCJoaXQiLCJQb3NpdGlvbiIsInJvdyIsImNvbCIsIkNlbGwiLCJfaXNSZWNlaXZlZEF0dGFjayIsIl9zaGlwIiwicmVjZWl2ZWRBdHRhY2siLCJfc2hpcDIiLCJwb3NpdGlvbiIsImlzUmVjZWl2ZWRBdHRhY2siLCJzaGlwIiwic2V0IiwibmV3U2hpcCIsInN0YXR1cyIsIkdhbWVib2FyZCIsIl90aGlzMiIsInNoaXBzSW5mbyIsImJvYXJkIiwiaGl0U2hvdHMiLCJtaXNzU2hvdHMiLCJzaG90cyIsImFsbENsZWFyIiwiZXZlcnkiLCJpbmZvIiwic2hpcHMiLCJyZWR1Y2UiLCJ0b3RhbCIsImN1cnJlbnRTaGlwSW5mbyIsInNoaXBTdGF0dXMiLCJjdXJyZW50U2hpcCIsInNoaXBIZWFsdGgiLCJwdXNoIiwiaGVhbHRoeSIsImRlYXRoIiwid2FybmluZyIsImkiLCJqIiwicGxhY2VTaGlwcyIsInN0YXJ0UG9zaXRpb24iLCJpc1ZlcnRpY2FsIiwiZW5kUG9zaXRpb24iLCJsb2NhdGlvbnMiLCJjZWxscyIsImNlbGwiLCJfaTIiLCJfY2VsbHMiLCJfY2VsbCRzaGlwIiwiY2VsbFN0YXR1cyIsIlBsYXllciIsIl9ib2FyZCIsImtleSIsInJhbmRvbVBsYWNlU2hpcHMiLCJsZW5ndGhzIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZGlyZWN0aW9uIiwiZXJyb3IiLCJIdW1hbiIsIl9QbGF5ZXIiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfdGhpczMiLCJjYWxsIiwiYXR0YWNrIiwicGxheWVyIiwiQ29tcHV0ZXIiLCJfUGxheWVyMiIsIl9zdXBlcjIiLCJfdGhpczQiLCJlcnIiLCJfY2xhc3MiLCJfZGVmaW5lUHJvcGVydHkiLCJwbGF5ZXJUb0NoZWNrIiwiaXNPdmVyIiwiaHVtYW4iLCJhaSIsIkRpc3BsYXkiLCJodW1hblNoaXBzIiwibWVzc2FnZSIsInByZXZlbnRTcGFtIiwiY2xhc3NMaXN0IiwiYWRkIiwibGlzdGVuSHVtYW5BdHRhY2tzIiwiaHVtYW5BdHRhY2tzU3RhdHVzIiwiaHVtYW5NZXNzYWdlIiwiYWlEZWF0aFNoaXBzIiwic2hvdE9uQm9hcmQiLCJjaGVja0dhbWVvdmVyIiwiYWlBdHRhY2tSZXN1bHQiLCJhaU1lc3NhZ2UiLCJfY2xhc3MyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2FtZWJvYXJkQWkiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInRhcmdldCIsImRhdGFzZXQiLCJodW1hblBsYXlPbmVUdXJuIiwic3RvcFVzZXJTcGFtbWluZyIsImFpUGxheU9uZVR1cm4iLCJvbmNlIiwiY29udGVudCIsInRhcmdldE1lc3NhZ2UiLCJtZXNzYWdlSHVtYW4iLCJtZXNzYWdlQWkiLCJ0ZXh0Q29udGVudCIsInRhcmdldEJvYXJkIiwiZ2FtZWJvYXJkSHVtYW4iLCJpbm5lckhUTUwiLCJ0eXBlIiwiU0laRSIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJjb25jYXQiLCJhcHBlbmRDaGlsZCIsInNoaXBUeXBlIiwiY3VycmVudFR5cGUiLCJjdXJyZW50TG9jYXRpb24iLCJkZWF0aFNoaXBzIiwiZ2FtZWJvYXJkIiwic3BhbiIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=