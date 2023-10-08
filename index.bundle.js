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
/* harmony import */ var _css_aside_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/aside.css */ "./src/css/aside.css");
/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/reset.css */ "./src/css/reset.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_footer_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/footer.css */ "./src/css/footer.css");
/* harmony import */ var _css_button_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/button.css */ "./src/css/button.css");
/* harmony import */ var _css_header_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./css/header.css */ "./src/css/header.css");
/* harmony import */ var _assets_icon_aim_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/icon/aim.svg */ "./src/assets/icon/aim.svg");
/* harmony import */ var _assets_img_battleship_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/img/battleship.png */ "./src/assets/img/battleship.png");
/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js/app.js */ "./src/js/app.js");
/* harmony import */ var _js_dom_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./js/dom.js */ "./src/js/dom.js");
/* harmony import */ var _js_class_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./js/class.js */ "./src/js/class.js");
/* harmony import */ var _js_class_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_js_class_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _js_animation_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./js/animation.js */ "./src/js/animation.js");
/* harmony import */ var _js_animation_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_js_animation_js__WEBPACK_IMPORTED_MODULE_13__);















window.addEventListener('DOMContentLoaded', function (e) {
  _js_dom_js__WEBPACK_IMPORTED_MODULE_11__.Game.start();
});
_js_dom_js__WEBPACK_IMPORTED_MODULE_11__.DOM.restart.addEventListener('click', function (e) {
  _js_dom_js__WEBPACK_IMPORTED_MODULE_11__.Game.start();
});

/***/ }),

/***/ "./src/js/animation.js":
/*!*****************************!*\
  !*** ./src/js/animation.js ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
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
          console.log(error);
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
          console.log(err);
        }
      }
    };
    return _this4;
  }
  return _createClass(Computer);
}(Player);

/***/ }),

/***/ "./src/js/class.js":
/*!*************************!*\
  !*** ./src/js/class.js ***!
  \*************************/
/***/ (() => {



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
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/js/app.js");
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
  _class.human = new _app__WEBPACK_IMPORTED_MODULE_0__.Human();
  _class.ai = new _app__WEBPACK_IMPORTED_MODULE_0__.Computer();
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
  if (!(human instanceof _app__WEBPACK_IMPORTED_MODULE_0__.Human)) throw new Error('Invalid Human');
  if (!(ai instanceof _app__WEBPACK_IMPORTED_MODULE_0__.Computer)) throw new Error('Invalid Ai');
  var cells = _class2.gameboardAi.querySelectorAll('.ai__cell');
  cells.forEach(function (cell) {
    cell.addEventListener('click', function (e) {
      e.target.classList.add('attacked');
      var row = +e.target.dataset.row;
      var col = +e.target.dataset.col;
      var position = new _app__WEBPACK_IMPORTED_MODULE_0__.Position(row, col);
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
  if (player instanceof _app__WEBPACK_IMPORTED_MODULE_0__.Human) targetMessage = DOM.messageHuman;else targetMessage = DOM.messageAi;
  targetMessage.textContent = content;
});
_defineProperty(Display, "board", function (player) {
  if (!(player instanceof _app__WEBPACK_IMPORTED_MODULE_0__.Player)) throw new Error('Invalid Player');
  var targetBoard = player instanceof _app__WEBPACK_IMPORTED_MODULE_0__.Human ? DOM.gameboardHuman : DOM.gameboardAi;
  targetBoard.innerHTML = '';
  var type = player instanceof _app__WEBPACK_IMPORTED_MODULE_0__.Human ? 'human' : 'ai';
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
  if (!(player instanceof _app__WEBPACK_IMPORTED_MODULE_0__.Player)) throw new Error('Invalid Player');
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
        var cell = player instanceof _app__WEBPACK_IMPORTED_MODULE_0__.Human ? DOM.gameboardHuman.querySelector("[data-row=\"".concat(row, "\"][data-col=\"").concat(col, "\"]")) : DOM.gameboardAi.querySelector("[data-row=\"".concat(row, "\"][data-col=\"").concat(col, "\"]"));
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
  if (!(player instanceof _app__WEBPACK_IMPORTED_MODULE_0__.Player)) throw new Error('Invalid Player');
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
  if (!(position instanceof _app__WEBPACK_IMPORTED_MODULE_0__.Position) || !(player instanceof _app__WEBPACK_IMPORTED_MODULE_0__.Player)) throw new Error('Invalid argument');
  var row = position.row,
    col = position.col;
  var gameboard;
  if (player instanceof _app__WEBPACK_IMPORTED_MODULE_0__.Human) gameboard = DOM.gameboardHuman;else gameboard = DOM.gameboardAi;
  var cell = gameboard.querySelector("[data-col=\"".concat(col, "\"][data-row=\"").concat(row, "\"]"));
  var span = document.createElement('span');
  if (status === 'Hit') span.classList.add('hit__shot');else span.classList.add('miss__shot');
  cell.appendChild(span);
});
_defineProperty(Display, "stopUserSpamming", function () {
  DOM.preventSpam.classList.remove('hide');
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/aside.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/aside.css ***!
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
___CSS_LOADER_EXPORT___.push([module.id, `.aside {
}
.display__message {
  border: 2px dotted red;
  border-radius: 99rem;
  padding: 2rem;
  text-align: center;
}
`, "",{"version":3,"sources":["webpack://./src/css/aside.css"],"names":[],"mappings":"AAAA;AACA;AACA;EACE,sBAAsB;EACtB,oBAAoB;EACpB,aAAa;EACb,kBAAkB;AACpB","sourcesContent":[".aside {\n}\n.display__message {\n  border: 2px dotted red;\n  border-radius: 99rem;\n  padding: 2rem;\n  text-align: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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
  background: rgb(55, 55, 55);
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
`, "",{"version":3,"sources":["webpack://./src/css/button.css"],"names":[],"mappings":"AAAA,iCAAiC;AACjC;;;;;;EAME,eAAe;EACf,sBAAsB;AACxB;AACA;EACE,wCAAwC;EACxC,0BAA0B;EAC1B,sBAAsB;EACtB,sBAAsB;EACtB,cAAc;EACd,eAAe;EACf;oBACkB;EAClB,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,SAAS;EACT,6DAA6D;EAC7D,UAAU;EACV,yBAAyB;AAC3B;AACA;EACE,eAAe;AACjB;AACA;EACE,aAAa;AACf;AACA;EACE,cAAc;EACd,sBAAsB;AACxB;AACA;EACE,aAAa;AACf;AACA;EACE,oBAAoB;EACpB,iBAAiB;EACjB,gBAAgB;EAChB,oBAAoB;EACpB,kBAAkB;AACpB;AACA;EACE,gCAAgC;EAChC,kBAAkB;EAClB,UAAU;AACZ;AACA;;EAEE,2BAA2B;EAC3B;;;;;;;;;;;GAWC;EACD;;;;;;;;;;;GAWC;EACD,WAAW;EACX,QAAQ;EACR,kBAAkB;EAClB,8DAA8D;EAC9D,4DAA4D;EAC5D,oDAAoD;EACpD,iFAAiF;AACnF;AACA;EACE,+DAA+D;AACjE;AACA;EACE,gBAAgB;AAClB;;AAEA,iCAAiC","sourcesContent":["/* header button view on github */\n.btn-13,\n.btn-13 *,\n.btn-13 :after,\n.btn-13 :before,\n.btn-13:after,\n.btn-13:before {\n  border: 0 solid;\n  box-sizing: border-box;\n}\n.btn-13 {\n  -webkit-tap-highlight-color: transparent;\n  -webkit-appearance: button;\n  background-color: #000;\n  background-image: none;\n  color: #ff0000;\n  cursor: pointer;\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,\n    Noto Color Emoji;\n  font-size: 100%;\n  font-weight: 900;\n  line-height: 1.5;\n  margin: 0;\n  /* -webkit-mask-image: -webkit-radial-gradient(#000, #fff); */\n  padding: 0;\n  text-transform: uppercase;\n}\n.btn-13:disabled {\n  cursor: default;\n}\n.btn-13:-moz-focusring {\n  outline: auto;\n}\n.btn-13 svg {\n  display: block;\n  vertical-align: middle;\n}\n.btn-13 [hidden] {\n  display: none;\n}\n.btn-13 {\n  border-radius: 99rem;\n  border-width: 2px;\n  overflow: hidden;\n  padding: 0.8rem 3rem;\n  position: relative;\n}\n.btn-13 span {\n  /* mix-blend-mode: difference; */\n  position: relative;\n  z-index: 1;\n}\n.btn-13:after,\n.btn-13:before {\n  background: rgb(55, 55, 55);\n  -webkit-clip-path: polygon(\n    0 0,\n    100% 0,\n    100% calc(var(--progress, 0%) / 2),\n    0 calc(var(--progress, 0%) / 2),\n    0 0,\n    0 calc(100% - var(--progress, 0%) / 2),\n    100% calc(100% - var(--progress, 0%) / 2),\n    100% 100%,\n    0 100%,\n    0 calc(100% - var(--progress, 0%) / 2)\n  );\n  clip-path: polygon(\n    0 0,\n    100% 0,\n    100% calc(var(--progress, 0%) / 2),\n    0 calc(var(--progress, 0%) / 2),\n    0 0,\n    0 calc(100% - var(--progress, 0%) / 2),\n    100% calc(100% - var(--progress, 0%) / 2),\n    100% 100%,\n    0 100%,\n    0 calc(100% - var(--progress, 0%) / 2)\n  );\n  content: '';\n  inset: 0;\n  position: absolute;\n  transform: translateX(calc(100% - var(--progress, 0%) / 1.99));\n  transition: transform 0.2s ease, -webkit-clip-path 0.2s ease;\n  transition: clip-path 0.2s ease, transform 0.2s ease;\n  transition: clip-path 0.2s ease, transform 0.2s ease, -webkit-clip-path 0.2s ease;\n}\n.btn-13:after {\n  transform: translateX(calc(-100% + var(--progress, 0%) / 1.99));\n}\n.btn-13:hover {\n  --progress: 100%;\n}\n\n/* header button view on github */\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
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
.header__title__ctn {
}
.header__title {
  font-size: 6rem;
  text-transform: uppercase;
  white-space: nowrap;
}
.header__link__ctn {
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
`, "",{"version":3,"sources":["webpack://./src/css/header.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;AACA;EACE,gFAAwE;EACxE,YAAY;EACZ,oBAAoB;EACpB,WAAW;EACX,2CAA2C;EAC3C,iBAAiB;AACnB;AACA;EACE,eAAe;AACjB;AACA;AACA;AACA;EACE,eAAe;EACf,yBAAyB;EACzB,mBAAmB;AACrB;AACA;AACA;AACA;EACE,mBAAmB;AACrB;AACA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF","sourcesContent":[".header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n  margin-bottom: 1rem;\n}\n\n.header__icon__ctn {\n  align-self: stretch;\n}\n.header__icon {\n  background: url('./../assets/icon/aim.svg') center/contain no-repeat red;\n  height: 100%;\n  border-radius: 99rem;\n  width: 6rem;\n  animation: rotate 750ms linear 0ms infinite;\n  cursor: crosshair;\n}\n.header__icon:hover {\n  animation: none;\n}\n.header__title__ctn {\n}\n.header__title {\n  font-size: 6rem;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.header__link__ctn {\n}\n.header__link {\n  white-space: nowrap;\n}\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n"],"sourceRoot":""}]);
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
  justify-content: space-between;
  width: 100%;
  margin: 0 auto 1rem;
}

.gameboard__ctn__ctn {
  flex: 1;
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
`, "",{"version":3,"sources":["webpack://./src/css/main.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,8BAA8B;EAC9B,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,qBAAqB;EACrB,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,QAAQ;EACR,wBAAwB;EACxB,yBAAyB;EACzB,gBAAgB;EAChB,iBAAiB;EACjB,8EAA4E;AAC9E;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,WAAW;EACX,oBAAoB;AACtB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,4BAA4B;AAC9B;;AAEA,yCAAyC;AACzC;EACE,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,sBAAsB;EACtB,oBAAoB;EACpB,aAAa;EACb,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,wCAAwC,EAAE,gBAAgB;EAC1D,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,YAAY;AACd","sourcesContent":[".main {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  width: 100%;\n  margin: 0 auto 1rem;\n}\n\n.gameboard__ctn__ctn {\n  flex: 1;\n}\n\n.gameboard__header {\n  text-align: center;\n  padding: 1rem;\n  margin-bottom: 1rem;\n  white-space: nowrap;\n}\n.gameboard {\n  border: 1px solid red;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  gap: 1px;\n  width: calc(50vw - 1rem);\n  height: calc(50vw - 1rem);\n  max-width: 50rem;\n  max-height: 50rem;\n  background: url('./../assets/img/battleship.png') center/cover no-repeat red;\n}\n\n.gameboard > div {\n  border: 1px solid rgb(0, 0, 0);\n}\n\n.gameboard > .contain__ship {\n  background-color: black;\n}\n\n.gameboard > div > span {\n  display: block;\n  height: 3rem;\n  width: 3rem;\n  border-radius: 99rem;\n}\n\n.gameboard > div > .hit__shot {\n  background-color: red;\n}\n\n.gameboard > div > .miss__shot {\n  background-color: rgb(255, 255, 255);\n}\n\n.gameboard .ai__cell {\n  cursor: cell;\n}\n\n.gameboard .ai__cell:hover {\n  background-color: rgba(122, 255, 122, 0.5);\n}\n\n.gameboard .ai__cell.attacked {\n  cursor: not-allowed;\n}\n\n.gameboard .ai__cell.attacked:hover {\n  background-color: rgba(255, 126, 126, 0.5);\n}\n\n.healthy {\n  border-color: green !important;\n}\n\n.warning {\n  border-color: yellow !important;\n}\n\n.death {\n  border-color: red !important;\n}\n\n/* to place ship in the right direction */\n.ship__head.vertical {\n  border-width: 4px 0 4px 4px;\n}\n\n.ship__head.horizon {\n  border-width: 4px 4px 0 4px;\n}\n\n.ship__body.vertical {\n  border-width: 4px 0 4px 0;\n}\n\n.ship__body.horizon {\n  border-width: 0 4px 0 4px;\n}\n\n.ship__tail.vertical {\n  border-width: 4px 4px 4px 0;\n}\n\n.ship__tail.horizon {\n  border-width: 0 4px 4px 4px;\n}\n\n.ship__one__length {\n  border-width: 4px !important;\n}\n\n.display__message {\n  border: 2px dotted red;\n  border-radius: 99rem;\n  padding: 2rem;\n  text-align: center;\n  margin: 2rem 0;\n}\n\n.gameboard__ctn {\n  position: relative;\n}\n\n.prevent__spam {\n  height: 100%;\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0); /* transparent */\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  cursor: cell;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/css/aside.css":
/*!***************************!*\
  !*** ./src/css/aside.css ***!
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_aside_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./aside.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/aside.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_aside_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_aside_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_aside_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_aside_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1DQUFtQztBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sbUZBQW1GLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFB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QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9qcy9kb20uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9hc2lkZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9idXR0b24uY3NzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9jc3MvZm9vdGVyLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvY3NzL2hlYWRlci5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9tYWluLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvY3NzL25hdi5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9jc3MvYXNpZGUuY3NzPzkzNTYiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9idXR0b24uY3NzPzcyYTkiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9mb290ZXIuY3NzP2FiOGMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9oZWFkZXIuY3NzPzhhYzEiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9tYWluLmNzcz8yYzlmIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9jc3MvbmF2LmNzcz8xMWRjIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9jc3MvcmVzZXQuY3NzPzE1MmIiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9jc3MvbmF2LmNzcyc7XG5pbXBvcnQgJy4vY3NzL21haW4uY3NzJztcbmltcG9ydCAnLi9jc3MvYXNpZGUuY3NzJztcbmltcG9ydCAnLi9jc3MvcmVzZXQuY3NzJztcbmltcG9ydCAnLi9jc3Mvc3R5bGUuY3NzJztcbmltcG9ydCAnLi9jc3MvZm9vdGVyLmNzcyc7XG5pbXBvcnQgJy4vY3NzL2J1dHRvbi5jc3MnO1xuaW1wb3J0ICcuL2Nzcy9oZWFkZXIuY3NzJztcblxuaW1wb3J0IEFpbSBmcm9tICcuL2Fzc2V0cy9pY29uL2FpbS5zdmcnO1xuaW1wb3J0IEJhdHRsZXNoaXAgZnJvbSAnLi9hc3NldHMvaW1nL2JhdHRsZXNoaXAucG5nJztcblxuaW1wb3J0ICcuL2pzL2FwcC5qcyc7XG5pbXBvcnQgJy4vanMvZG9tLmpzJztcbmltcG9ydCAnLi9qcy9jbGFzcy5qcyc7XG5pbXBvcnQgJy4vanMvYW5pbWF0aW9uLmpzJztcblxuaW1wb3J0IHsgRE9NLCBHYW1lIH0gZnJvbSAnLi9qcy9kb20uanMnO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChlKSA9PiB7XG4gIEdhbWUuc3RhcnQoKTtcbn0pO1xuXG5ET00ucmVzdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gIEdhbWUuc3RhcnQoKTtcbn0pO1xuIiwiY29uc3QgX1NJWkUgPSAxMDsgLy8gR2FtZWJvYXJkIFNJWkVcblxuZXhwb3J0IGNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW4pIHtcbiAgICBpZiAobGVuID4gNSB8fCBsZW4gPCAxKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc2hpcCBsZW5ndGgnKTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgIGxlbmd0aDoge1xuICAgICAgICB2YWx1ZTogbGVuLFxuICAgICAgfSxcblxuICAgICAgaGl0czoge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIF9oaXRzO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGlzU3Vuazoge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMubGVuZ3RoIC0gX2hpdHMgPCAxO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGxldCBfaGl0cyA9IDA7XG5cbiAgICB0aGlzLmhpdCA9ICgpID0+IHtcbiAgICAgIGlmICh0aGlzLmlzU3VuaykgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCBhdHRhY2sgc3VuayBzaGlwYCk7XG5cbiAgICAgIF9oaXRzKys7XG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUG9zaXRpb24ge1xuICBjb25zdHJ1Y3Rvcihyb3csIGNvbCkge1xuICAgIGlmIChyb3cgPiA5IHx8IGNvbCA+IDkgfHwgcm93IDwgMCB8fCBjb2wgPCAwKSB0aHJvdyBuZXcgRXJyb3IoJ1Bvc2l0aW9uIGlzIG5vdCBsZWdpdCcpO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgcm93OiB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gcm93O1xuICAgICAgICB9LFxuICAgICAgfSxcblxuICAgICAgY29sOiB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gY29sO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2VsbCB7XG4gIGNvbnN0cnVjdG9yKHJvdywgY29sKSB7XG4gICAgbGV0IF9pc1JlY2VpdmVkQXR0YWNrID0gZmFsc2U7XG5cbiAgICBsZXQgX3NoaXAgPSBudWxsO1xuXG4gICAgdGhpcy5yZWNlaXZlZEF0dGFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfaXNSZWNlaXZlZEF0dGFjaykgdGhyb3cgbmV3IEVycm9yKCdBbHJlYWR5IGF0dGFja2VkIHRoaXMgY2VsbCcpO1xuXG4gICAgICBfaXNSZWNlaXZlZEF0dGFjayA9IHRydWU7XG5cbiAgICAgIF9zaGlwPy5oaXQoKTtcbiAgICB9O1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgdmFsdWU6IG5ldyBQb3NpdGlvbihyb3csIGNvbCksXG4gICAgICB9LFxuXG4gICAgICBpc1JlY2VpdmVkQXR0YWNrOiB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gX2lzUmVjZWl2ZWRBdHRhY2s7XG4gICAgICAgIH0sXG4gICAgICB9LFxuXG4gICAgICBzaGlwOiB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gX3NoaXA7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0KG5ld1NoaXApIHtcbiAgICAgICAgICBpZiAoX3NoaXApIHRocm93IG5ldyBFcnJvcignQWxyZWFkeSBwbGFjZWQgYSBzaGlwIG9uIHRoaXMgY2VsbCcpO1xuXG4gICAgICAgICAgX3NoaXAgPSBuZXdTaGlwO1xuICAgICAgICB9LFxuICAgICAgfSxcblxuICAgICAgc3RhdHVzOiB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICBpZiAoIV9pc1JlY2VpdmVkQXR0YWNrKSByZXR1cm4gJ05vdCB5ZXQnOyAvLyBpZiBpcyBub3QgeWV0IHJlY2VpdmVkIGF0dGFja1xuXG4gICAgICAgICAgaWYgKF9zaGlwKSByZXR1cm4gJ0hpdCc7IC8vIGlmIHJlY2VpdmVkIGF0dGFjayBhbmQgY29udGFpbnMgYSBzaGlwXG5cbiAgICAgICAgICByZXR1cm4gJ01pc3MnOyAvLyBlbHNlXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICBzaGlwc0luZm86IHsgdmFsdWU6IFtdIH0sXG5cbiAgICAgIGJvYXJkOiB7IHZhbHVlOiBbXSB9LFxuXG4gICAgICBoaXRTaG90czogeyB2YWx1ZTogW10gfSxcblxuICAgICAgbWlzc1Nob3RzOiB7IHZhbHVlOiBbXSB9LFxuXG4gICAgICBzaG90czogeyB2YWx1ZTogW10gfSxcblxuICAgICAgYWxsQ2xlYXI6IHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLnNoaXBzSW5mby5ldmVyeSgoaW5mbykgPT4gaW5mby5zaGlwLmlzU3Vuayk7XG4gICAgICAgIH0sXG4gICAgICB9LFxuXG4gICAgICBzaGlwczoge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgLy8gcGxhY2Ugc2hpcHMgaW50byBjYXRlZ29yeSBiYXNlIG9uIHRoZWlyIHN0YXR1czogaGVhbHRoeSwgd2FybmluZywgZGVhdGhcbiAgICAgICAgICByZXR1cm4gdGhpcy5zaGlwc0luZm8ucmVkdWNlKFxuICAgICAgICAgICAgKHRvdGFsLCBjdXJyZW50U2hpcEluZm8pID0+IHtcbiAgICAgICAgICAgICAgbGV0IHNoaXBTdGF0dXM7XG5cbiAgICAgICAgICAgICAgY29uc3QgY3VycmVudFNoaXAgPSBjdXJyZW50U2hpcEluZm8uc2hpcDtcblxuICAgICAgICAgICAgICBjb25zdCBzaGlwSGVhbHRoID0gY3VycmVudFNoaXAubGVuZ3RoIC0gY3VycmVudFNoaXAuaGl0cztcblxuICAgICAgICAgICAgICBpZiAoc2hpcEhlYWx0aCA9PT0gMCkgc2hpcFN0YXR1cyA9ICdkZWF0aCc7XG4gICAgICAgICAgICAgIGVsc2UgaWYgKHNoaXBIZWFsdGggPT09IDEpIHNoaXBTdGF0dXMgPSAnd2FybmluZyc7XG4gICAgICAgICAgICAgIGVsc2Ugc2hpcFN0YXR1cyA9ICdoZWFsdGh5JztcblxuICAgICAgICAgICAgICB0b3RhbFtzaGlwU3RhdHVzXS5wdXNoKGN1cnJlbnRTaGlwSW5mbyk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHRvdGFsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgaGVhbHRoeTogW10sIGRlYXRoOiBbXSwgd2FybmluZzogW10gfVxuICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfU0laRTsgaSsrKSB7XG4gICAgICB0aGlzLmJvYXJkLnB1c2goW10pO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IF9TSVpFOyBqKyspIHtcbiAgICAgICAgdGhpcy5ib2FyZFtpXS5wdXNoKG5ldyBDZWxsKGksIGopKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnBsYWNlU2hpcHMgPSAoc2hpcCwgc3RhcnRQb3NpdGlvbiwgaXNWZXJ0aWNhbCkgPT4ge1xuICAgICAgaWYgKCEoc2hpcCBpbnN0YW5jZW9mIFNoaXApKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc2hpcCBvYmplY3QnKTtcblxuICAgICAgaWYgKHR5cGVvZiBpc1ZlcnRpY2FsICE9PSAnYm9vbGVhbicpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBkaXJlY3Rpb24nKTtcblxuICAgICAgaWYgKCEoc3RhcnRQb3NpdGlvbiBpbnN0YW5jZW9mIFBvc2l0aW9uKSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0YXJ0IHBvc2l0aW9uJyk7XG5cbiAgICAgIGNvbnN0IGxlbmd0aCA9IHNoaXAubGVuZ3RoO1xuXG4gICAgICBjb25zdCBlbmRQb3NpdGlvbiA9IGxlbmd0aCArIChpc1ZlcnRpY2FsID8gc3RhcnRQb3NpdGlvbi5jb2wgOiBzdGFydFBvc2l0aW9uLnJvdyk7IC8vIHVzZWQgdG8gY2hlY2sgaWYgb3V0c2lkZSB0aGUgZ2FtZWJvYXJkXG5cbiAgICAgIGlmIChlbmRQb3NpdGlvbiA+IF9TSVpFKSB0aHJvdyBuZXcgRXJyb3IoJ1RoaXMgc2hpcCBnb2VzIGJleW9uZCBnYW1lYm9hcmQnKTtcblxuICAgICAgbGV0IHsgcm93LCBjb2wgfSA9IHN0YXJ0UG9zaXRpb247XG5cbiAgICAgIGNvbnN0IGxvY2F0aW9ucyA9IFtdO1xuXG4gICAgICBjb25zdCBjZWxscyA9IFtdO1xuXG4gICAgICAvLyBjaGVjayBhbGwgc2hpcCdzIGxvY2F0aW9ucyBmaXJzdCB0byBzZWUgaWYgc29tZXRoaW5nIHRocm93XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmJvYXJkW3Jvd11bY29sXTtcblxuICAgICAgICAvLyBjaGVjayBpZiB0aGlzIGNlbGwgaXMgbGVnaXQgdG8gcGxhY2Ugc2hpcFxuICAgICAgICBpZiAoY2VsbC5zaGlwICE9PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoJ1BsYWNlIHNoaXAgY2FuY2VsIGJlY2F1c2UgdGhpcyBjZWxsIGFscmVhZHkgaGFzIGEgc2hpcCBvbiBpdCcpO1xuXG4gICAgICAgIC8vIHNhdmUgY2VsbHMgd2hpY2ggd2lsbCB1c2UgdG8gcGxhY2Ugc2hpcCBhdCB0aGUgc2FtZSB0aW1lXG4gICAgICAgIGNlbGxzLnB1c2goY2VsbCk7XG5cbiAgICAgICAgbG9jYXRpb25zLnB1c2gobmV3IFBvc2l0aW9uKHJvdywgY29sKSk7XG5cbiAgICAgICAgaXNWZXJ0aWNhbCA/IGNvbCsrIDogcm93Kys7IC8vIGluY3JlYXNlIGJhc2VkIG9uIGRpcmVjdGlvblxuICAgICAgfVxuXG4gICAgICAvLyB0aGUgbG9vcCB0aHJvdWdoIGFsbCBsZWdpdCBjZWxscyB0byBhY3R1YWxseSBwbGFjZSBzaGlwIGFmdGVyIG5vdGhpbmcgZ290IHRocm93XG4gICAgICBmb3IgKGNvbnN0IGNlbGwgb2YgY2VsbHMpIHtcbiAgICAgICAgY2VsbC5zaGlwID0gc2hpcDtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zaGlwc0luZm8ucHVzaCh7IGxvY2F0aW9ucywgaXNWZXJ0aWNhbCwgc2hpcDogc2hpcCB9KTtcbiAgICB9O1xuXG4gICAgdGhpcy5yZWNlaXZlZEF0dGFjayA9IChwb3NpdGlvbikgPT4ge1xuICAgICAgaWYgKCEocG9zaXRpb24gaW5zdGFuY2VvZiBQb3NpdGlvbikpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBwb3NpdGlvbicpO1xuXG4gICAgICBjb25zdCB7IHJvdywgY29sIH0gPSBwb3NpdGlvbjtcblxuICAgICAgY29uc3QgY2VsbCA9IHRoaXMuYm9hcmRbcm93XVtjb2xdO1xuXG4gICAgICBjZWxsLnJlY2VpdmVkQXR0YWNrKCk7XG5cbiAgICAgIGNvbnN0IGNlbGxTdGF0dXMgPSBjZWxsLnN0YXR1cztcblxuICAgICAgY29uc3Qgc2hpcFN0YXR1cyA9IGNlbGwuc2hpcD8uaXNTdW5rID8gJ1N1bmsnIDogJ05vdCBzdW5rJztcblxuICAgICAgaWYgKGNlbGxTdGF0dXMgPT09ICdIaXQnKSB0aGlzLmhpdFNob3RzLnB1c2gocG9zaXRpb24pO1xuXG4gICAgICBpZiAoY2VsbFN0YXR1cyA9PT0gJ01pc3MnKSB0aGlzLm1pc3NTaG90cy5wdXNoKHBvc2l0aW9uKTtcblxuICAgICAgdGhpcy5zaG90cy5wdXNoKHBvc2l0aW9uKTtcblxuICAgICAgcmV0dXJuIHsgY2VsbFN0YXR1cywgc2hpcFN0YXR1cywgcG9zaXRpb24gfTtcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBsZXQgX2JvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgYm9hcmQ6IHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBfYm9hcmQ7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgcmFuZG9tUGxhY2VTaGlwcygpIHtcbiAgICBjb25zdCBsZW5ndGhzID0gWzEsIDEsIDEsIDIsIDIsIDMsIDMsIDQsIDVdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBfU0laRSk7XG5cbiAgICAgICAgY29uc3QgY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogX1NJWkUpO1xuXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKHJvdywgY29sKTtcblxuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSAhIU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuXG4gICAgICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChsZW5ndGhzW2ldKTtcblxuICAgICAgICB0aGlzLmJvYXJkLnBsYWNlU2hpcHMoc2hpcCwgcG9zaXRpb24sIGRpcmVjdGlvbik7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpLS07XG5cbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSHVtYW4gZXh0ZW5kcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5hdHRhY2sgPSAocG9zaXRpb24sIHBsYXllcikgPT4ge1xuICAgICAgaWYgKCEocG9zaXRpb24gaW5zdGFuY2VvZiBQb3NpdGlvbikgfHwgIShwbGF5ZXIuYm9hcmQgaW5zdGFuY2VvZiBHYW1lYm9hcmQpKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYXJndW1lbnRzJyk7XG5cbiAgICAgIGNvbnN0IHN0YXR1cyA9IHBsYXllci5ib2FyZC5yZWNlaXZlZEF0dGFjayhwb3NpdGlvbik7XG5cbiAgICAgIHJldHVybiBzdGF0dXM7XG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29tcHV0ZXIgZXh0ZW5kcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5hdHRhY2sgPSAocGxheWVyKSA9PiB7XG4gICAgICBpZiAoIShwbGF5ZXIuYm9hcmQgaW5zdGFuY2VvZiBHYW1lYm9hcmQpKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYm9hcmQnKTtcblxuICAgICAgY29uc3QgbGVuZ3RoID0gcGxheWVyLmJvYXJkLnNob3RzLmxlbmd0aDtcblxuICAgICAgd2hpbGUgKGxlbmd0aCA9PT0gcGxheWVyLmJvYXJkLnNob3RzLmxlbmd0aCkge1xuICAgICAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBfU0laRSk7XG5cbiAgICAgICAgY29uc3QgY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogX1NJWkUpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9zaXRpb24ocm93LCBjb2wpO1xuXG4gICAgICAgICAgY29uc3Qgc3RhdHVzID0gcGxheWVyLmJvYXJkLnJlY2VpdmVkQXR0YWNrKHBvc2l0aW9uKTtcblxuICAgICAgICAgIHJldHVybiBzdGF0dXM7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBTaGlwLCBQb3NpdGlvbiwgQ2VsbCwgR2FtZWJvYXJkLCBIdW1hbiwgQ29tcHV0ZXIsIFBsYXllciB9IGZyb20gJy4vYXBwJztcblxuZXhwb3J0IGNsYXNzIEdhbWUge1xuICBzdGF0aWMgU0laRSA9IDEwO1xuXG4gIHN0YXRpYyBpc092ZXIgPSBmYWxzZTtcblxuICBzdGF0aWMgaHVtYW47XG5cbiAgc3RhdGljIGFpO1xuXG4gIHN0YXRpYyBjaGVja0dhbWVvdmVyID0gKHBsYXllclRvQ2hlY2spID0+IHtcbiAgICBpZiAocGxheWVyVG9DaGVjay5ib2FyZC5hbGxDbGVhcikge1xuICAgICAgdGhpcy5pc092ZXIgPSB0cnVlO1xuICAgIH1cbiAgfTtcblxuICBzdGF0aWMgc3RhcnQgPSAoKSA9PiB7XG4gICAgdGhpcy5pc092ZXIgPSBmYWxzZTtcblxuICAgIHRoaXMuaHVtYW4gPSBuZXcgSHVtYW4oKTtcblxuICAgIHRoaXMuYWkgPSBuZXcgQ29tcHV0ZXIoKTtcblxuICAgIHRoaXMuaHVtYW4ucmFuZG9tUGxhY2VTaGlwcygpO1xuXG4gICAgdGhpcy5haS5yYW5kb21QbGFjZVNoaXBzKCk7XG5cbiAgICBEaXNwbGF5LmJvYXJkKHRoaXMuaHVtYW4pO1xuXG4gICAgRGlzcGxheS5ib2FyZCh0aGlzLmFpKTtcblxuICAgIERpc3BsYXkuaHVtYW5TaGlwcyh0aGlzLmh1bWFuKTtcblxuICAgIC8vIERpc3BsYXkuaHVtYW5TaGlwcyh0aGlzLmFpKTsgLy8gVE9ETyB1c2VkIGZvciBkaXNwbGF5IGFpJ3Mgc2hpcHMsIGZvciB0ZXN0aW5nXG5cbiAgICBEaXNwbGF5Lm1lc3NhZ2UodGhpcy5odW1hbiwgYEZlZWwgZnJlZSB0byBwcmVzcyB0aGUgcmVzdGFydCBidXR0b24gaWYgeW91J3JlIG5vdCBoYXBweSB3aXRoIHlvdXIgc2hpcHMgbGF5b3V0YCk7XG5cbiAgICBEaXNwbGF5Lm1lc3NhZ2UodGhpcy5haSwgYEtlZXAgdHJhY2sgb2YgZ2FtZSBhbGVydCBoZXJlLiBZb3Ugd2lsbCBhdHRhY2sgdGhlIGdhbWVib2FyZCBhYm92ZWApO1xuXG4gICAgRE9NLnByZXZlbnRTcGFtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcblxuICAgIERPTS5saXN0ZW5IdW1hbkF0dGFja3ModGhpcy5odW1hbiwgdGhpcy5haSk7XG4gIH07XG5cbiAgc3RhdGljIGh1bWFuUGxheU9uZVR1cm4gPSAoaHVtYW4sIGFpLCBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IGh1bWFuQXR0YWNrc1N0YXR1cyA9IGh1bWFuLmF0dGFjayhwb3NpdGlvbiwgYWkpO1xuXG4gICAgbGV0IGh1bWFuTWVzc2FnZSA9IGBXZSBzaG90IGF0IGVuZW15J3Mgd2F0ZXIgYW5kIGl0J3MgYSBtaXNzYDtcblxuICAgIGlmIChodW1hbkF0dGFja3NTdGF0dXMuY2VsbFN0YXR1cyA9PT0gJ0hpdCcpIHtcbiAgICAgIERpc3BsYXkuYWlEZWF0aFNoaXBzKGFpKTtcblxuICAgICAgaHVtYW5NZXNzYWdlID0gYFdlIHNob3QgYXQgZW5lbXkncyB3YXRlciBhbmQgaXQncyBhIGhpdGA7XG5cbiAgICAgIGlmIChodW1hbkF0dGFja3NTdGF0dXMuc2hpcFN0YXR1cyA9PT0gJ1N1bmsnKSBodW1hbk1lc3NhZ2UgKz0gYCBhbmQgd2UgaGF2ZSBzdW5rIHRoZWlyIHNoaXBgO1xuICAgIH1cblxuICAgIERpc3BsYXkuc2hvdE9uQm9hcmQoYWksIHBvc2l0aW9uLCBodW1hbkF0dGFja3NTdGF0dXMuY2VsbFN0YXR1cyk7XG5cbiAgICBEaXNwbGF5Lm1lc3NhZ2UoYWksIGh1bWFuTWVzc2FnZSk7XG5cbiAgICB0aGlzLmNoZWNrR2FtZW92ZXIoYWkpO1xuICB9O1xuXG4gIHN0YXRpYyBhaVBsYXlPbmVUdXJuID0gKGh1bWFuLCBhaSkgPT4ge1xuICAgIGNvbnN0IGFpQXR0YWNrUmVzdWx0ID0gYWkuYXR0YWNrKGh1bWFuKTtcblxuICAgIGxldCBhaU1lc3NhZ2UgPSBgRW5lbXkgc2hvdCBhdCBvdXIgd2F0ZXIgYW5kIGl0J3MgYSBtaXNzYDtcblxuICAgIGlmIChhaUF0dGFja1Jlc3VsdC5jZWxsU3RhdHVzID09PSAnSGl0Jykge1xuICAgICAgRGlzcGxheS5odW1hblNoaXBzKGh1bWFuKTtcblxuICAgICAgYWlNZXNzYWdlID0gYEVuZW15IHNob3QgYXQgb3VyIHdhdGVyIGFuZCBpdCdzIGEgaGl0YDtcblxuICAgICAgaWYgKGFpQXR0YWNrUmVzdWx0LnNoaXBTdGF0dXMgPT09ICdTdW5rJykgYWlNZXNzYWdlICs9IGAgYW5kIHRoZXkgaGF2ZSBzdW5rIG91ciBzaGlwYDtcbiAgICB9XG5cbiAgICBEaXNwbGF5LnNob3RPbkJvYXJkKGh1bWFuLCBhaUF0dGFja1Jlc3VsdC5wb3NpdGlvbiwgYWlBdHRhY2tSZXN1bHQuY2VsbFN0YXR1cyk7XG5cbiAgICBEaXNwbGF5Lm1lc3NhZ2UoaHVtYW4sIGFpTWVzc2FnZSk7XG5cbiAgICB0aGlzLmNoZWNrR2FtZW92ZXIoaHVtYW4pO1xuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgRE9NIHtcbiAgc3RhdGljIG1lc3NhZ2VIdW1hbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW1lc3NhZ2U9XCJodW1hblwiXWApO1xuXG4gIHN0YXRpYyBtZXNzYWdlQWkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1tZXNzYWdlPVwiYWlcIl1gKTtcblxuICBzdGF0aWMgZ2FtZWJvYXJkSHVtYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkW2RhdGEtaHVtYW5dJyk7XG5cbiAgc3RhdGljIGdhbWVib2FyZEFpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZFtkYXRhLWFpXScpO1xuXG4gIHN0YXRpYyByZXN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcmVzdGFydF0nKTtcblxuICBzdGF0aWMgcHJldmVudFNwYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJldmVudF9fc3BhbScpO1xuXG4gIHN0YXRpYyBsaXN0ZW5IdW1hbkF0dGFja3MgPSAoaHVtYW4sIGFpKSA9PiB7XG4gICAgaWYgKCEoaHVtYW4gaW5zdGFuY2VvZiBIdW1hbikpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBIdW1hbicpO1xuXG4gICAgaWYgKCEoYWkgaW5zdGFuY2VvZiBDb21wdXRlcikpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBBaScpO1xuXG4gICAgY29uc3QgY2VsbHMgPSB0aGlzLmdhbWVib2FyZEFpLnF1ZXJ5U2VsZWN0b3JBbGwoJy5haV9fY2VsbCcpO1xuXG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnY2xpY2snLFxuXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYXR0YWNrZWQnKTtcblxuICAgICAgICAgIGNvbnN0IHJvdyA9ICtlLnRhcmdldC5kYXRhc2V0LnJvdztcblxuICAgICAgICAgIGNvbnN0IGNvbCA9ICtlLnRhcmdldC5kYXRhc2V0LmNvbDtcblxuICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKHJvdywgY29sKTtcblxuICAgICAgICAgIEdhbWUuaHVtYW5QbGF5T25lVHVybihodW1hbiwgYWksIHBvc2l0aW9uKTtcblxuICAgICAgICAgIGlmIChHYW1lLmlzT3Zlcikge1xuICAgICAgICAgICAgRGlzcGxheS5zdG9wVXNlclNwYW1taW5nKCk7XG5cbiAgICAgICAgICAgIERpc3BsYXkubWVzc2FnZShhaSwgYFdlIGhhdmUgd2luIHRoZSBiYXR0bGUhYCk7XG5cbiAgICAgICAgICAgIERpc3BsYXkubWVzc2FnZShodW1hbiwgYFdlIGhhdmUgd2luIHRoZSBiYXR0bGUhYCk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBhaSBwbGF5IGl0cyB0dXJuXG4gICAgICAgICAgR2FtZS5haVBsYXlPbmVUdXJuKGh1bWFuLCBhaSk7XG5cbiAgICAgICAgICBpZiAoR2FtZS5pc092ZXIpIHtcbiAgICAgICAgICAgIERpc3BsYXkuc3RvcFVzZXJTcGFtbWluZygpO1xuXG4gICAgICAgICAgICBEaXNwbGF5Lm1lc3NhZ2UoYWksIGBFbmVteSBoYXMgd2luIHRoZSBiYXR0bGUhYCk7XG5cbiAgICAgICAgICAgIERpc3BsYXkubWVzc2FnZShodW1hbiwgYEVuZW15IGhhcyB3aW4gdGhlIGJhdHRsZSFgKTtcblxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICB7IG9uY2U6IHRydWUgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuY2xhc3MgRGlzcGxheSB7XG4gIHN0YXRpYyBtZXNzYWdlID0gKHBsYXllciwgY29udGVudCkgPT4ge1xuICAgIGxldCB0YXJnZXRNZXNzYWdlO1xuXG4gICAgaWYgKHBsYXllciBpbnN0YW5jZW9mIEh1bWFuKSB0YXJnZXRNZXNzYWdlID0gRE9NLm1lc3NhZ2VIdW1hbjtcbiAgICBlbHNlIHRhcmdldE1lc3NhZ2UgPSBET00ubWVzc2FnZUFpO1xuXG4gICAgdGFyZ2V0TWVzc2FnZS50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gIH07XG5cbiAgc3RhdGljIGJvYXJkID0gKHBsYXllcikgPT4ge1xuICAgIGlmICghKHBsYXllciBpbnN0YW5jZW9mIFBsYXllcikpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBQbGF5ZXInKTtcblxuICAgIGNvbnN0IHRhcmdldEJvYXJkID0gcGxheWVyIGluc3RhbmNlb2YgSHVtYW4gPyBET00uZ2FtZWJvYXJkSHVtYW4gOiBET00uZ2FtZWJvYXJkQWk7XG5cbiAgICB0YXJnZXRCb2FyZC5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IHR5cGUgPSBwbGF5ZXIgaW5zdGFuY2VvZiBIdW1hbiA/ICdodW1hbicgOiAnYWknO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBHYW1lLlNJWkU7IGkrKykge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBHYW1lLlNJWkU7IGorKykge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnY2VudGVyJyk7XG5cbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoYCR7dHlwZX1fX2NlbGxgKTtcblxuICAgICAgICBkaXYuZGF0YXNldC5yb3cgPSBpO1xuXG4gICAgICAgIGRpdi5kYXRhc2V0LmNvbCA9IGo7XG5cbiAgICAgICAgdGFyZ2V0Qm9hcmQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgc3RhdGljIGh1bWFuU2hpcHMgPSAocGxheWVyKSA9PiB7XG4gICAgaWYgKCEocGxheWVyIGluc3RhbmNlb2YgUGxheWVyKSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFBsYXllcicpO1xuXG4gICAgY29uc3Qgc2hpcHMgPSBwbGF5ZXIuYm9hcmQuc2hpcHM7XG5cbiAgICAvLyBsb29wIHRocm91Z2ggMyB0eXBlOiBoZWFsdGh5LCB3YXJuaW5nLCBkZWF0aFxuICAgIGZvciAoY29uc3Qgc2hpcFR5cGUgaW4gc2hpcHMpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRUeXBlID0gc2hpcHNbc2hpcFR5cGVdO1xuXG4gICAgICAvLyBsb29wIHRocm91Z2ggYWxsIHNoaXBzIGluIDEgdHlwZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50VHlwZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjdXJyZW50U2hpcEluZm8gPSBjdXJyZW50VHlwZVtpXTtcblxuICAgICAgICBjb25zdCBsb2NhdGlvbnMgPSBjdXJyZW50U2hpcEluZm8ubG9jYXRpb25zO1xuXG4gICAgICAgIGNvbnN0IGlzVmVydGljYWwgPSBjdXJyZW50U2hpcEluZm8uaXNWZXJ0aWNhbDtcblxuICAgICAgICAvLyBsb29wIHRocm91Z2ggYWxsIHBvc2l0aW9uIG9mIHRoYXQgc2hpcFxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxvY2F0aW9ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRMb2NhdGlvbiA9IGxvY2F0aW9uc1tqXTtcblxuICAgICAgICAgIGNvbnN0IHsgcm93LCBjb2wgfSA9IGN1cnJlbnRMb2NhdGlvbjtcblxuICAgICAgICAgIC8vIHNlbGVjdCBleGFjdCBjZWxsIGRvbSBlbGVtZW50XG4gICAgICAgICAgY29uc3QgY2VsbCA9IHBsYXllciBpbnN0YW5jZW9mIEh1bWFuID8gRE9NLmdhbWVib2FyZEh1bWFuLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz1cIiR7cm93fVwiXVtkYXRhLWNvbD1cIiR7Y29sfVwiXWApIDogRE9NLmdhbWVib2FyZEFpLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz1cIiR7cm93fVwiXVtkYXRhLWNvbD1cIiR7Y29sfVwiXWApO1xuXG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKHNoaXBUeXBlKTtcblxuICAgICAgICAgIGlmIChsb2NhdGlvbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXBfX29uZV9fbGVuZ3RoJyk7XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpc1ZlcnRpY2FsKSBjZWxsLmNsYXNzTGlzdC5hZGQoJ3ZlcnRpY2FsJyk7XG4gICAgICAgICAgZWxzZSBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hvcml6b24nKTtcblxuICAgICAgICAgIGlmICghaikgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwX19oZWFkJyk7XG4gICAgICAgICAgZWxzZSBpZiAoaiA9PT0gbG9jYXRpb25zLmxlbmd0aCAtIDEpIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcF9fdGFpbCcpO1xuICAgICAgICAgIGVsc2UgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwX19ib2R5Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgc3RhdGljIGFpRGVhdGhTaGlwcyA9IChwbGF5ZXIpID0+IHtcbiAgICBpZiAoIShwbGF5ZXIgaW5zdGFuY2VvZiBQbGF5ZXIpKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgUGxheWVyJyk7XG5cbiAgICBjb25zdCBkZWF0aFNoaXBzID0gcGxheWVyLmJvYXJkLnNoaXBzLmRlYXRoO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWF0aFNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjdXJyZW50U2hpcEluZm8gPSBkZWF0aFNoaXBzW2ldO1xuXG4gICAgICBjb25zdCBsb2NhdGlvbnMgPSBjdXJyZW50U2hpcEluZm8ubG9jYXRpb25zO1xuXG4gICAgICBjb25zdCBpc1ZlcnRpY2FsID0gY3VycmVudFNoaXBJbmZvLmlzVmVydGljYWw7XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbG9jYXRpb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRMb2NhdGlvbiA9IGxvY2F0aW9uc1tqXTtcblxuICAgICAgICBjb25zdCB7IHJvdywgY29sIH0gPSBjdXJyZW50TG9jYXRpb247XG5cbiAgICAgICAgY29uc3QgY2VsbCA9IERPTS5nYW1lYm9hcmRBaS5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9XCIke3Jvd31cIl1bZGF0YS1jb2w9XCIke2NvbH1cIl1gKTtcblxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2RlYXRoJyk7XG5cbiAgICAgICAgaWYgKGxvY2F0aW9ucy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXBfX29uZV9fbGVuZ3RoJyk7XG5cbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1ZlcnRpY2FsKSBjZWxsLmNsYXNzTGlzdC5hZGQoJ3ZlcnRpY2FsJyk7XG4gICAgICAgIGVsc2UgY2VsbC5jbGFzc0xpc3QuYWRkKCdob3Jpem9uJyk7XG5cbiAgICAgICAgaWYgKCFqKSBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXBfX2hlYWQnKTtcbiAgICAgICAgZWxzZSBpZiAoaiA9PT0gbG9jYXRpb25zLmxlbmd0aCAtIDEpIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcF9fdGFpbCcpO1xuICAgICAgICBlbHNlIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcF9fYm9keScpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBzdGF0aWMgc2hvdE9uQm9hcmQgPSAocGxheWVyLCBwb3NpdGlvbiwgc3RhdHVzKSA9PiB7XG4gICAgaWYgKCEocG9zaXRpb24gaW5zdGFuY2VvZiBQb3NpdGlvbikgfHwgIShwbGF5ZXIgaW5zdGFuY2VvZiBQbGF5ZXIpKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYXJndW1lbnQnKTtcblxuICAgIGNvbnN0IHsgcm93LCBjb2wgfSA9IHBvc2l0aW9uO1xuXG4gICAgbGV0IGdhbWVib2FyZDtcblxuICAgIGlmIChwbGF5ZXIgaW5zdGFuY2VvZiBIdW1hbikgZ2FtZWJvYXJkID0gRE9NLmdhbWVib2FyZEh1bWFuO1xuICAgIGVsc2UgZ2FtZWJvYXJkID0gRE9NLmdhbWVib2FyZEFpO1xuXG4gICAgY29uc3QgY2VsbCA9IGdhbWVib2FyZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb2w9XCIke2NvbH1cIl1bZGF0YS1yb3c9XCIke3Jvd31cIl1gKTtcblxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICBpZiAoc3RhdHVzID09PSAnSGl0Jykgc3Bhbi5jbGFzc0xpc3QuYWRkKCdoaXRfX3Nob3QnKTtcbiAgICBlbHNlIHNwYW4uY2xhc3NMaXN0LmFkZCgnbWlzc19fc2hvdCcpO1xuXG4gICAgY2VsbC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgfTtcblxuICBzdGF0aWMgc3RvcFVzZXJTcGFtbWluZyA9ICgpID0+IHtcbiAgICBET00ucHJldmVudFNwYW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICB9O1xufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5hc2lkZSB7XG59XG4uZGlzcGxheV9fbWVzc2FnZSB7XG4gIGJvcmRlcjogMnB4IGRvdHRlZCByZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDk5cmVtO1xuICBwYWRkaW5nOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvYXNpZGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0FBQ0E7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYXNpZGUge1xcbn1cXG4uZGlzcGxheV9fbWVzc2FnZSB7XFxuICBib3JkZXI6IDJweCBkb3R0ZWQgcmVkO1xcbiAgYm9yZGVyLXJhZGl1czogOTlyZW07XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGhlYWRlciBidXR0b24gdmlldyBvbiBnaXRodWIgKi9cbi5idG4tMTMsXG4uYnRuLTEzICosXG4uYnRuLTEzIDphZnRlcixcbi5idG4tMTMgOmJlZm9yZSxcbi5idG4tMTM6YWZ0ZXIsXG4uYnRuLTEzOmJlZm9yZSB7XG4gIGJvcmRlcjogMCBzb2xpZDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5idG4tMTMge1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgY29sb3I6ICNmZjAwMDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBIZWx2ZXRpY2EgTmV1ZSwgQXJpYWwsIE5vdG8gU2Fucywgc2Fucy1zZXJpZiwgQXBwbGUgQ29sb3IgRW1vamksIFNlZ29lIFVJIEVtb2ppLCBTZWdvZSBVSSBTeW1ib2wsXG4gICAgTm90byBDb2xvciBFbW9qaTtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250LXdlaWdodDogOTAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBtYXJnaW46IDA7XG4gIC8qIC13ZWJraXQtbWFzay1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoIzAwMCwgI2ZmZik7ICovXG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uYnRuLTEzOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLmJ0bi0xMzotbW96LWZvY3VzcmluZyB7XG4gIG91dGxpbmU6IGF1dG87XG59XG4uYnRuLTEzIHN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmJ0bi0xMyBbaGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYnRuLTEzIHtcbiAgYm9yZGVyLXJhZGl1czogOTlyZW07XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwLjhyZW0gM3JlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJ0bi0xMyBzcGFuIHtcbiAgLyogbWl4LWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7ICovXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cbi5idG4tMTM6YWZ0ZXIsXG4uYnRuLTEzOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHJnYig1NSwgNTUsIDU1KTtcbiAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oXG4gICAgMCAwLFxuICAgIDEwMCUgMCxcbiAgICAxMDAlIGNhbGModmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxuICAgIDAgY2FsYyh2YXIoLS1wcm9ncmVzcywgMCUpIC8gMiksXG4gICAgMCAwLFxuICAgIDAgY2FsYygxMDAlIC0gdmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxuICAgIDEwMCUgY2FsYygxMDAlIC0gdmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxuICAgIDEwMCUgMTAwJSxcbiAgICAwIDEwMCUsXG4gICAgMCBjYWxjKDEwMCUgLSB2YXIoLS1wcm9ncmVzcywgMCUpIC8gMilcbiAgKTtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKFxuICAgIDAgMCxcbiAgICAxMDAlIDAsXG4gICAgMTAwJSBjYWxjKHZhcigtLXByb2dyZXNzLCAwJSkgLyAyKSxcbiAgICAwIGNhbGModmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxuICAgIDAgMCxcbiAgICAwIGNhbGMoMTAwJSAtIHZhcigtLXByb2dyZXNzLCAwJSkgLyAyKSxcbiAgICAxMDAlIGNhbGMoMTAwJSAtIHZhcigtLXByb2dyZXNzLCAwJSkgLyAyKSxcbiAgICAxMDAlIDEwMCUsXG4gICAgMCAxMDAlLFxuICAgIDAgY2FsYygxMDAlIC0gdmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpXG4gICk7XG4gIGNvbnRlbnQ6ICcnO1xuICBpbnNldDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygxMDAlIC0gdmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDEuOTkpKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZSwgLXdlYmtpdC1jbGlwLXBhdGggMC4ycyBlYXNlO1xuICB0cmFuc2l0aW9uOiBjbGlwLXBhdGggMC4ycyBlYXNlLCB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xuICB0cmFuc2l0aW9uOiBjbGlwLXBhdGggMC4ycyBlYXNlLCB0cmFuc2Zvcm0gMC4ycyBlYXNlLCAtd2Via2l0LWNsaXAtcGF0aCAwLjJzIGVhc2U7XG59XG4uYnRuLTEzOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoLTEwMCUgKyB2YXIoLS1wcm9ncmVzcywgMCUpIC8gMS45OSkpO1xufVxuLmJ0bi0xMzpob3ZlciB7XG4gIC0tcHJvZ3Jlc3M6IDEwMCU7XG59XG5cbi8qIGhlYWRlciBidXR0b24gdmlldyBvbiBnaXRodWIgKi9cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9idXR0b24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGlDQUFpQztBQUNqQzs7Ozs7O0VBTUUsZUFBZTtFQUNmLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usd0NBQXdDO0VBQ3hDLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxlQUFlO0VBQ2Y7b0JBQ2tCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCw2REFBNkQ7RUFDN0QsVUFBVTtFQUNWLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBQ0E7O0VBRUUsMkJBQTJCO0VBQzNCOzs7Ozs7Ozs7OztHQVdDO0VBQ0Q7Ozs7Ozs7Ozs7O0dBV0M7RUFDRCxXQUFXO0VBQ1gsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQiw4REFBOEQ7RUFDOUQsNERBQTREO0VBQzVELG9EQUFvRDtFQUNwRCxpRkFBaUY7QUFDbkY7QUFDQTtFQUNFLCtEQUErRDtBQUNqRTtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBLGlDQUFpQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBoZWFkZXIgYnV0dG9uIHZpZXcgb24gZ2l0aHViICovXFxuLmJ0bi0xMyxcXG4uYnRuLTEzICosXFxuLmJ0bi0xMyA6YWZ0ZXIsXFxuLmJ0bi0xMyA6YmVmb3JlLFxcbi5idG4tMTM6YWZ0ZXIsXFxuLmJ0bi0xMzpiZWZvcmUge1xcbiAgYm9yZGVyOiAwIHNvbGlkO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLmJ0bi0xMyB7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG4gIGNvbG9yOiAjZmYwMDAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBIZWx2ZXRpY2EgTmV1ZSwgQXJpYWwsIE5vdG8gU2Fucywgc2Fucy1zZXJpZiwgQXBwbGUgQ29sb3IgRW1vamksIFNlZ29lIFVJIEVtb2ppLCBTZWdvZSBVSSBTeW1ib2wsXFxuICAgIE5vdG8gQ29sb3IgRW1vamk7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIG1hcmdpbjogMDtcXG4gIC8qIC13ZWJraXQtbWFzay1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoIzAwMCwgI2ZmZik7ICovXFxuICBwYWRkaW5nOiAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLmJ0bi0xMzpkaXNhYmxlZCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbi5idG4tMTM6LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogYXV0bztcXG59XFxuLmJ0bi0xMyBzdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uYnRuLTEzIFtoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5idG4tMTMge1xcbiAgYm9yZGVyLXJhZGl1czogOTlyZW07XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nOiAwLjhyZW0gM3JlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmJ0bi0xMyBzcGFuIHtcXG4gIC8qIG1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlOyAqL1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG59XFxuLmJ0bi0xMzphZnRlcixcXG4uYnRuLTEzOmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoNTUsIDU1LCA1NSk7XFxuICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbihcXG4gICAgMCAwLFxcbiAgICAxMDAlIDAsXFxuICAgIDEwMCUgY2FsYyh2YXIoLS1wcm9ncmVzcywgMCUpIC8gMiksXFxuICAgIDAgY2FsYyh2YXIoLS1wcm9ncmVzcywgMCUpIC8gMiksXFxuICAgIDAgMCxcXG4gICAgMCBjYWxjKDEwMCUgLSB2YXIoLS1wcm9ncmVzcywgMCUpIC8gMiksXFxuICAgIDEwMCUgY2FsYygxMDAlIC0gdmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxcbiAgICAxMDAlIDEwMCUsXFxuICAgIDAgMTAwJSxcXG4gICAgMCBjYWxjKDEwMCUgLSB2YXIoLS1wcm9ncmVzcywgMCUpIC8gMilcXG4gICk7XFxuICBjbGlwLXBhdGg6IHBvbHlnb24oXFxuICAgIDAgMCxcXG4gICAgMTAwJSAwLFxcbiAgICAxMDAlIGNhbGModmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxcbiAgICAwIGNhbGModmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxcbiAgICAwIDAsXFxuICAgIDAgY2FsYygxMDAlIC0gdmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxcbiAgICAxMDAlIGNhbGMoMTAwJSAtIHZhcigtLXByb2dyZXNzLCAwJSkgLyAyKSxcXG4gICAgMTAwJSAxMDAlLFxcbiAgICAwIDEwMCUsXFxuICAgIDAgY2FsYygxMDAlIC0gdmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpXFxuICApO1xcbiAgY29udGVudDogJyc7XFxuICBpbnNldDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKDEwMCUgLSB2YXIoLS1wcm9ncmVzcywgMCUpIC8gMS45OSkpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZSwgLXdlYmtpdC1jbGlwLXBhdGggMC4ycyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogY2xpcC1wYXRoIDAuMnMgZWFzZSwgdHJhbnNmb3JtIDAuMnMgZWFzZTtcXG4gIHRyYW5zaXRpb246IGNsaXAtcGF0aCAwLjJzIGVhc2UsIHRyYW5zZm9ybSAwLjJzIGVhc2UsIC13ZWJraXQtY2xpcC1wYXRoIDAuMnMgZWFzZTtcXG59XFxuLmJ0bi0xMzphZnRlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygtMTAwJSArIHZhcigtLXByb2dyZXNzLCAwJSkgLyAxLjk5KSk7XFxufVxcbi5idG4tMTM6aG92ZXIge1xcbiAgLS1wcm9ncmVzczogMTAwJTtcXG59XFxuXFxuLyogaGVhZGVyIGJ1dHRvbiB2aWV3IG9uIGdpdGh1YiAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vLi4vYXNzZXRzL2ljb24vYWltLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmhlYWRlcl9faWNvbl9fY3RuIHtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbn1cbi5oZWFkZXJfX2ljb24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0IHJlZDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA5OXJlbTtcbiAgd2lkdGg6IDZyZW07XG4gIGFuaW1hdGlvbjogcm90YXRlIDc1MG1zIGxpbmVhciAwbXMgaW5maW5pdGU7XG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xufVxuLmhlYWRlcl9faWNvbjpob3ZlciB7XG4gIGFuaW1hdGlvbjogbm9uZTtcbn1cbi5oZWFkZXJfX3RpdGxlX19jdG4ge1xufVxuLmhlYWRlcl9fdGl0bGUge1xuICBmb250LXNpemU6IDZyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uaGVhZGVyX19saW5rX19jdG4ge1xufVxuLmhlYWRlcl9fbGluayB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaGVhZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdGQUF3RTtFQUN4RSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCwyQ0FBMkM7RUFDM0MsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5oZWFkZXJfX2ljb25fX2N0biB7XFxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbn1cXG4uaGVhZGVyX19pY29uIHtcXG4gIGJhY2tncm91bmQ6IHVybCgnLi8uLi9hc3NldHMvaWNvbi9haW0uc3ZnJykgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0IHJlZDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDk5cmVtO1xcbiAgd2lkdGg6IDZyZW07XFxuICBhbmltYXRpb246IHJvdGF0ZSA3NTBtcyBsaW5lYXIgMG1zIGluZmluaXRlO1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcbi5oZWFkZXJfX2ljb246aG92ZXIge1xcbiAgYW5pbWF0aW9uOiBub25lO1xcbn1cXG4uaGVhZGVyX190aXRsZV9fY3RuIHtcXG59XFxuLmhlYWRlcl9fdGl0bGUge1xcbiAgZm9udC1zaXplOiA2cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5oZWFkZXJfX2xpbmtfX2N0biB7XFxufVxcbi5oZWFkZXJfX2xpbmsge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuQGtleWZyYW1lcyByb3RhdGUge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vLi4vYXNzZXRzL2ltZy9iYXR0bGVzaGlwLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG8gMXJlbTtcbn1cblxuLmdhbWVib2FyZF9fY3RuX19jdG4ge1xuICBmbGV4OiAxO1xufVxuXG4uZ2FtZWJvYXJkX19oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uZ2FtZWJvYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG4gIGdhcDogMXB4O1xuICB3aWR0aDogY2FsYyg1MHZ3IC0gMXJlbSk7XG4gIGhlaWdodDogY2FsYyg1MHZ3IC0gMXJlbSk7XG4gIG1heC13aWR0aDogNTByZW07XG4gIG1heC1oZWlnaHQ6IDUwcmVtO1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgY2VudGVyL2NvdmVyIG5vLXJlcGVhdCByZWQ7XG59XG5cbi5nYW1lYm9hcmQgPiBkaXYge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMCwgMCk7XG59XG5cbi5nYW1lYm9hcmQgPiAuY29udGFpbl9fc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4uZ2FtZWJvYXJkID4gZGl2ID4gc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDNyZW07XG4gIHdpZHRoOiAzcmVtO1xuICBib3JkZXItcmFkaXVzOiA5OXJlbTtcbn1cblxuLmdhbWVib2FyZCA+IGRpdiA+IC5oaXRfX3Nob3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5nYW1lYm9hcmQgPiBkaXYgPiAubWlzc19fc2hvdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbn1cblxuLmdhbWVib2FyZCAuYWlfX2NlbGwge1xuICBjdXJzb3I6IGNlbGw7XG59XG5cbi5nYW1lYm9hcmQgLmFpX19jZWxsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjIsIDI1NSwgMTIyLCAwLjUpO1xufVxuXG4uZ2FtZWJvYXJkIC5haV9fY2VsbC5hdHRhY2tlZCB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5nYW1lYm9hcmQgLmFpX19jZWxsLmF0dGFja2VkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDEyNiwgMTI2LCAwLjUpO1xufVxuXG4uaGVhbHRoeSB7XG4gIGJvcmRlci1jb2xvcjogZ3JlZW4gIWltcG9ydGFudDtcbn1cblxuLndhcm5pbmcge1xuICBib3JkZXItY29sb3I6IHllbGxvdyAhaW1wb3J0YW50O1xufVxuXG4uZGVhdGgge1xuICBib3JkZXItY29sb3I6IHJlZCAhaW1wb3J0YW50O1xufVxuXG4vKiB0byBwbGFjZSBzaGlwIGluIHRoZSByaWdodCBkaXJlY3Rpb24gKi9cbi5zaGlwX19oZWFkLnZlcnRpY2FsIHtcbiAgYm9yZGVyLXdpZHRoOiA0cHggMCA0cHggNHB4O1xufVxuXG4uc2hpcF9faGVhZC5ob3Jpem9uIHtcbiAgYm9yZGVyLXdpZHRoOiA0cHggNHB4IDAgNHB4O1xufVxuXG4uc2hpcF9fYm9keS52ZXJ0aWNhbCB7XG4gIGJvcmRlci13aWR0aDogNHB4IDAgNHB4IDA7XG59XG5cbi5zaGlwX19ib2R5Lmhvcml6b24ge1xuICBib3JkZXItd2lkdGg6IDAgNHB4IDAgNHB4O1xufVxuXG4uc2hpcF9fdGFpbC52ZXJ0aWNhbCB7XG4gIGJvcmRlci13aWR0aDogNHB4IDRweCA0cHggMDtcbn1cblxuLnNoaXBfX3RhaWwuaG9yaXpvbiB7XG4gIGJvcmRlci13aWR0aDogMCA0cHggNHB4IDRweDtcbn1cblxuLnNoaXBfX29uZV9fbGVuZ3RoIHtcbiAgYm9yZGVyLXdpZHRoOiA0cHggIWltcG9ydGFudDtcbn1cblxuLmRpc3BsYXlfX21lc3NhZ2Uge1xuICBib3JkZXI6IDJweCBkb3R0ZWQgcmVkO1xuICBib3JkZXItcmFkaXVzOiA5OXJlbTtcbiAgcGFkZGluZzogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDJyZW0gMDtcbn1cblxuLmdhbWVib2FyZF9fY3RuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucHJldmVudF9fc3BhbSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7IC8qIHRyYW5zcGFyZW50ICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgY3Vyc29yOiBjZWxsO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLFFBQVE7RUFDUix3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsOEVBQTRFO0FBQzlFOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixXQUFXO0VBQ1gsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBLHlDQUF5QztBQUN6QztFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx3Q0FBd0MsRUFBRSxnQkFBZ0I7RUFDMUQsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMCBhdXRvIDFyZW07XFxufVxcblxcbi5nYW1lYm9hcmRfX2N0bl9fY3RuIHtcXG4gIGZsZXg6IDE7XFxufVxcblxcbi5nYW1lYm9hcmRfX2hlYWRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5nYW1lYm9hcmQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBnYXA6IDFweDtcXG4gIHdpZHRoOiBjYWxjKDUwdncgLSAxcmVtKTtcXG4gIGhlaWdodDogY2FsYyg1MHZ3IC0gMXJlbSk7XFxuICBtYXgtd2lkdGg6IDUwcmVtO1xcbiAgbWF4LWhlaWdodDogNTByZW07XFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4vLi4vYXNzZXRzL2ltZy9iYXR0bGVzaGlwLnBuZycpIGNlbnRlci9jb3ZlciBuby1yZXBlYXQgcmVkO1xcbn1cXG5cXG4uZ2FtZWJvYXJkID4gZGl2IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLCAwLCAwKTtcXG59XFxuXFxuLmdhbWVib2FyZCA+IC5jb250YWluX19zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uZ2FtZWJvYXJkID4gZGl2ID4gc3BhbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogM3JlbTtcXG4gIHdpZHRoOiAzcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogOTlyZW07XFxufVxcblxcbi5nYW1lYm9hcmQgPiBkaXYgPiAuaGl0X19zaG90IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmdhbWVib2FyZCA+IGRpdiA+IC5taXNzX19zaG90IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuXFxuLmdhbWVib2FyZCAuYWlfX2NlbGwge1xcbiAgY3Vyc29yOiBjZWxsO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5haV9fY2VsbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyMiwgMjU1LCAxMjIsIDAuNSk7XFxufVxcblxcbi5nYW1lYm9hcmQgLmFpX19jZWxsLmF0dGFja2VkIHtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi5nYW1lYm9hcmQgLmFpX19jZWxsLmF0dGFja2VkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxMjYsIDEyNiwgMC41KTtcXG59XFxuXFxuLmhlYWx0aHkge1xcbiAgYm9yZGVyLWNvbG9yOiBncmVlbiAhaW1wb3J0YW50O1xcbn1cXG5cXG4ud2FybmluZyB7XFxuICBib3JkZXItY29sb3I6IHllbGxvdyAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZGVhdGgge1xcbiAgYm9yZGVyLWNvbG9yOiByZWQgIWltcG9ydGFudDtcXG59XFxuXFxuLyogdG8gcGxhY2Ugc2hpcCBpbiB0aGUgcmlnaHQgZGlyZWN0aW9uICovXFxuLnNoaXBfX2hlYWQudmVydGljYWwge1xcbiAgYm9yZGVyLXdpZHRoOiA0cHggMCA0cHggNHB4O1xcbn1cXG5cXG4uc2hpcF9faGVhZC5ob3Jpem9uIHtcXG4gIGJvcmRlci13aWR0aDogNHB4IDRweCAwIDRweDtcXG59XFxuXFxuLnNoaXBfX2JvZHkudmVydGljYWwge1xcbiAgYm9yZGVyLXdpZHRoOiA0cHggMCA0cHggMDtcXG59XFxuXFxuLnNoaXBfX2JvZHkuaG9yaXpvbiB7XFxuICBib3JkZXItd2lkdGg6IDAgNHB4IDAgNHB4O1xcbn1cXG5cXG4uc2hpcF9fdGFpbC52ZXJ0aWNhbCB7XFxuICBib3JkZXItd2lkdGg6IDRweCA0cHggNHB4IDA7XFxufVxcblxcbi5zaGlwX190YWlsLmhvcml6b24ge1xcbiAgYm9yZGVyLXdpZHRoOiAwIDRweCA0cHggNHB4O1xcbn1cXG5cXG4uc2hpcF9fb25lX19sZW5ndGgge1xcbiAgYm9yZGVyLXdpZHRoOiA0cHggIWltcG9ydGFudDtcXG59XFxuXFxuLmRpc3BsYXlfX21lc3NhZ2Uge1xcbiAgYm9yZGVyOiAycHggZG90dGVkIHJlZDtcXG4gIGJvcmRlci1yYWRpdXM6IDk5cmVtO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMnJlbSAwO1xcbn1cXG5cXG4uZ2FtZWJvYXJkX19jdG4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucHJldmVudF9fc3BhbSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7IC8qIHRyYW5zcGFyZW50ICovXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBjdXJzb3I6IGNlbGw7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLm5hdiB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbmF2LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm5hdiB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcbiAgIHYyLjAgfCAyMDExMDEyNlxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcbiovXG5cbmh0bWwsXG5ib2R5LFxuZGl2LFxuc3BhbixcbmFwcGxldCxcbm9iamVjdCxcbmlmcmFtZSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5ibG9ja3F1b3RlLFxucHJlLFxuYSxcbmFiYnIsXG5hY3JvbnltLFxuYWRkcmVzcyxcbmJpZyxcbmNpdGUsXG5jb2RlLFxuZGVsLFxuZGZuLFxuZW0sXG5pbWcsXG5pbnMsXG5rYmQsXG5xLFxucyxcbnNhbXAsXG5zbWFsbCxcbnN0cmlrZSxcbnN0cm9uZyxcbnN1YixcbnN1cCxcbnR0LFxudmFyLFxuYixcbnUsXG5pLFxuY2VudGVyLFxuZGwsXG5kdCxcbmRkLFxub2wsXG51bCxcbmxpLFxuZmllbGRzZXQsXG5mb3JtLFxubGFiZWwsXG5sZWdlbmQsXG50YWJsZSxcbmNhcHRpb24sXG50Ym9keSxcbnRmb290LFxudGhlYWQsXG50cixcbnRoLFxudGQsXG5hcnRpY2xlLFxuYXNpZGUsXG5jYW52YXMsXG5kZXRhaWxzLFxuZW1iZWQsXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbm91dHB1dCxcbnJ1YnksXG5zZWN0aW9uLFxuc3VtbWFyeSxcbnRpbWUsXG5tYXJrLFxuYXVkaW8sXG52aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMTtcbn1cbm9sLFxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSxcbnEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSxcbmJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSxcbnE6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgY29udGVudDogbm9uZTtcbn1cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaUZFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZixhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCO0FBQ0EsZ0RBQWdEO0FBQ2hEOzs7Ozs7Ozs7OztFQVdFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxZQUFZO0FBQ2Q7QUFDQTs7OztFQUlFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuKixcbjo6YmVmb3JlLFxuOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbioge1xuICAvKiBjb2xvcjogcmVkOyAqL1xufVxuXG5odG1sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbmJvZHkge1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuYSB7XG4gIGNvbG9yOiB1bnNldDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bnNldDtcbn1cblxudWwsXG5saSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDRyZW07XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAzcmVtO1xufVxuXG5idXR0b24ge1xuICBib3JkZXI6IHVuc2V0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7OztFQUdFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICAvKiBjb2xvcjogcmVkOyAqL1xcbn1cXG5cXG5odG1sIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IHVuc2V0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bnNldDtcXG59XFxuXFxudWwsXFxubGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogdW5zZXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jZW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FzaWRlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXNpZGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J1dHRvbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J1dHRvbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXYuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXYuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsiQWltIiwiQmF0dGxlc2hpcCIsIkRPTSIsIkdhbWUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInN0YXJ0IiwicmVzdGFydCIsIl9TSVpFIiwiU2hpcCIsIl9jcmVhdGVDbGFzcyIsImxlbiIsIl90aGlzIiwiX2NsYXNzQ2FsbENoZWNrIiwiRXJyb3IiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0aWVzIiwibGVuZ3RoIiwidmFsdWUiLCJoaXRzIiwiZ2V0IiwiX2hpdHMiLCJpc1N1bmsiLCJoaXQiLCJQb3NpdGlvbiIsInJvdyIsImNvbCIsIkNlbGwiLCJfaXNSZWNlaXZlZEF0dGFjayIsIl9zaGlwIiwicmVjZWl2ZWRBdHRhY2siLCJfc2hpcDIiLCJwb3NpdGlvbiIsImlzUmVjZWl2ZWRBdHRhY2siLCJzaGlwIiwic2V0IiwibmV3U2hpcCIsInN0YXR1cyIsIkdhbWVib2FyZCIsIl90aGlzMiIsInNoaXBzSW5mbyIsImJvYXJkIiwiaGl0U2hvdHMiLCJtaXNzU2hvdHMiLCJzaG90cyIsImFsbENsZWFyIiwiZXZlcnkiLCJpbmZvIiwic2hpcHMiLCJyZWR1Y2UiLCJ0b3RhbCIsImN1cnJlbnRTaGlwSW5mbyIsInNoaXBTdGF0dXMiLCJjdXJyZW50U2hpcCIsInNoaXBIZWFsdGgiLCJwdXNoIiwiaGVhbHRoeSIsImRlYXRoIiwid2FybmluZyIsImkiLCJqIiwicGxhY2VTaGlwcyIsInN0YXJ0UG9zaXRpb24iLCJpc1ZlcnRpY2FsIiwiZW5kUG9zaXRpb24iLCJsb2NhdGlvbnMiLCJjZWxscyIsImNlbGwiLCJfaTIiLCJfY2VsbHMiLCJfY2VsbCRzaGlwIiwiY2VsbFN0YXR1cyIsIlBsYXllciIsIl9ib2FyZCIsImtleSIsInJhbmRvbVBsYWNlU2hpcHMiLCJsZW5ndGhzIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZGlyZWN0aW9uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiSHVtYW4iLCJfUGxheWVyIiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX3RoaXMzIiwiY2FsbCIsImF0dGFjayIsInBsYXllciIsIkNvbXB1dGVyIiwiX1BsYXllcjIiLCJfc3VwZXIyIiwiX3RoaXM0IiwiZXJyIiwiX2NsYXNzIiwiX2RlZmluZVByb3BlcnR5IiwicGxheWVyVG9DaGVjayIsImlzT3ZlciIsImh1bWFuIiwiYWkiLCJEaXNwbGF5IiwiaHVtYW5TaGlwcyIsIm1lc3NhZ2UiLCJwcmV2ZW50U3BhbSIsImNsYXNzTGlzdCIsImFkZCIsImxpc3Rlbkh1bWFuQXR0YWNrcyIsImh1bWFuQXR0YWNrc1N0YXR1cyIsImh1bWFuTWVzc2FnZSIsImFpRGVhdGhTaGlwcyIsInNob3RPbkJvYXJkIiwiY2hlY2tHYW1lb3ZlciIsImFpQXR0YWNrUmVzdWx0IiwiYWlNZXNzYWdlIiwiX2NsYXNzMiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdhbWVib2FyZEFpIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJ0YXJnZXQiLCJkYXRhc2V0IiwiaHVtYW5QbGF5T25lVHVybiIsInN0b3BVc2VyU3BhbW1pbmciLCJhaVBsYXlPbmVUdXJuIiwib25jZSIsImNvbnRlbnQiLCJ0YXJnZXRNZXNzYWdlIiwibWVzc2FnZUh1bWFuIiwibWVzc2FnZUFpIiwidGV4dENvbnRlbnQiLCJ0YXJnZXRCb2FyZCIsImdhbWVib2FyZEh1bWFuIiwiaW5uZXJIVE1MIiwidHlwZSIsIlNJWkUiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiY29uY2F0IiwiYXBwZW5kQ2hpbGQiLCJzaGlwVHlwZSIsImN1cnJlbnRUeXBlIiwiY3VycmVudExvY2F0aW9uIiwiZGVhdGhTaGlwcyIsImdhbWVib2FyZCIsInNwYW4iLCJyZW1vdmUiXSwic291cmNlUm9vdCI6IiJ9