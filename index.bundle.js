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
  // Game.changeSize(25);

  // Game.changeTotalShips([1, 1, 2, 2, 3, 3, 4, 5]);

  // Game.changeDifficulty('3');

  _js_dom_js__WEBPACK_IMPORTED_MODULE_7__.Game.start();
  _js_dom_js__WEBPACK_IMPORTED_MODULE_7__.DOM.listenRestart();
  _js_dom_js__WEBPACK_IMPORTED_MODULE_7__.DOM.listenSetting();
  _js_dom_js__WEBPACK_IMPORTED_MODULE_7__.DOM.listenCloseForm();
  _js_dom_js__WEBPACK_IMPORTED_MODULE_7__.DOM.listenSubmitForm();
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
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/js/dom.js");
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

var Ship = /*#__PURE__*/_createClass(function Ship() {
  var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  _classCallCheck(this, Ship);
  if (len > _dom__WEBPACK_IMPORTED_MODULE_0__._SHIPS_MAX_LENGTH || len < 1) throw new Error('Invalid ship length');
  var _hits = 0;
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
        var currentHealth = this.length - _hits;
        return currentHealth < 1;
      }
    },
    hit: {
      value: function value() {
        if (this.isSunk) throw new Error("Can't attack sunk ship");
        _hits++;
      }
    }
  });
});
var Position = /*#__PURE__*/_createClass(function Position(row, col) {
  _classCallCheck(this, Position);
  var _legit = _dom__WEBPACK_IMPORTED_MODULE_0__._SIZE - 1;
  if (row > _legit || col > _legit || row < 0 || col < 0) throw new Error('Position is not legit');
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
  Object.defineProperties(this, {
    receivedAttack: {
      value: function value() {
        var _ship2;
        if (_isReceivedAttack) throw new Error('Already attacked this cell');
        _isReceivedAttack = true;
        (_ship2 = _ship) === null || _ship2 === void 0 || _ship2.hit();
      }
    },
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
        if (!_isReceivedAttack) return 'Not yet';
        if (_ship) return 'Hit';
        return 'Miss';
      }
    }
  });
});
var Gameboard = /*#__PURE__*/_createClass(function Gameboard() {
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
    },
    placeShips: {
      value: function value(ship, startPosition, isVertical) {
        if (!(ship instanceof Ship)) throw new Error('Invalid ship object');
        if (!(startPosition instanceof Position)) throw new Error('Invalid start position');
        if (typeof isVertical !== 'boolean') throw new Error('Invalid direction');
        var length = ship.length;
        var endPosition = length + (isVertical ? startPosition.col : startPosition.row); // used to check if outside the gameboard

        if (endPosition > _dom__WEBPACK_IMPORTED_MODULE_0__._SIZE) throw new Error('This ship goes beyond gameboard');
        var row = startPosition.row,
          col = startPosition.col;
        var locations = [];
        var cells = [];

        // check all ship's locations first to see if something throw
        for (var i = 0; i < length; i++) {
          var cell = this.board[row][col];

          // throw and cancel place ship process if a cell already has ship on it
          if (cell.ship !== null) throw new Error('Place ship cancel because this cell already has a ship on it');

          // save cells which is legit to use later
          cells.push(cell);

          // locations to update gameboard.shipsInfo
          locations.push(new Position(row, col));
          isVertical ? col++ : row++; // increase based on direction
        }

        // the loop through all legit cells to actually place ship after nothing got throw
        for (var _i = 0, _cells = cells; _i < _cells.length; _i++) {
          var _cell = _cells[_i];
          _cell.ship = ship;
        }
        this.shipsInfo.push({
          locations: locations,
          isVertical: isVertical,
          ship: ship
        });
      }
    },
    receivedAttack: {
      value: function value(position) {
        var _cell$ship;
        if (!(position instanceof Position)) throw new Error('Invalid position');
        var row = position.row,
          col = position.col;
        var cell = this.board[row][col];
        cell.receivedAttack();
        var cellStatus = cell.status;
        var shipStatus = (_cell$ship = cell.ship) !== null && _cell$ship !== void 0 && _cell$ship.isSunk ? 'Sunk' : 'Not sunk';
        if (cellStatus === 'Hit') this.hitShots.push(position);
        if (cellStatus === 'Miss') this.missShots.push(position);
        this.shots.push(position);
        return {
          cellStatus: cellStatus,
          shipStatus: shipStatus,
          position: position
        };
      }
    }
  });
  for (var i = 0; i < _dom__WEBPACK_IMPORTED_MODULE_0__._SIZE; i++) {
    this.board.push([]);
    for (var j = 0; j < _dom__WEBPACK_IMPORTED_MODULE_0__._SIZE; j++) {
      this.board[i].push(new Cell(i, j));
    }
  }
});
var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);
    Object.defineProperties(this, {
      board: {
        value: new Gameboard()
      }
    });
  }
  _createClass(Player, [{
    key: "randomPlaceShips",
    value: function randomPlaceShips() {
      for (var i = 0; i < _dom__WEBPACK_IMPORTED_MODULE_0__._TOTAL_SHIPS.length; i++) {
        try {
          var row = Math.floor(Math.random() * _dom__WEBPACK_IMPORTED_MODULE_0__._SIZE);
          var col = Math.floor(Math.random() * _dom__WEBPACK_IMPORTED_MODULE_0__._SIZE);
          var position = new Position(row, col);
          var direction = !!Math.floor(Math.random() * 2);
          var ship = new Ship(_dom__WEBPACK_IMPORTED_MODULE_0__._TOTAL_SHIPS[i]);
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
    var _this;
    _classCallCheck(this, Human);
    _this = _super.call(this);
    Object.defineProperties(_assertThisInitialized(_this), {
      attack: {
        value: function value(position, player) {
          if (!(position instanceof Position) || !(player.board instanceof Gameboard)) throw new Error('Invalid arguments');
          var status = player.board.receivedAttack(position);
          return status;
        }
      }
    });
    return _this;
  }
  return _createClass(Human);
}(Player);
var Computer = /*#__PURE__*/function (_Player2) {
  _inherits(Computer, _Player2);
  var _super2 = _createSuper(Computer);
  function Computer() {
    var _this2;
    _classCallCheck(this, Computer);
    _this2 = _super2.call(this);
    var _randomAttack = function _randomAttack(player) {
      if (!(player.board instanceof Gameboard)) throw new Error('Invalid board');
      var length = player.board.shots.length;
      while (length === player.board.shots.length) {
        var row = Math.floor(Math.random() * _dom__WEBPACK_IMPORTED_MODULE_0__._SIZE);
        var col = Math.floor(Math.random() * _dom__WEBPACK_IMPORTED_MODULE_0__._SIZE);
        try {
          var position = new Position(row, col);
          var status = player.board.receivedAttack(position);
          return status;
        } catch (err) {
          // console.log(err);
        }
      }
    };
    var _aroundPositions = {
      top: {
        moveRow: -1,
        moveCol: 0
      },
      bottom: {
        moveRow: 1,
        moveCol: 0
      },
      left: {
        moveRow: 0,
        moveCol: -1
      },
      right: {
        moveRow: 0,
        moveCol: 1
      }
    };
    _this2.attack = function (player) {
      var board = player.board.board;
      var notSunkCells = [];
      board.forEach(function (row) {
        row.forEach(function (cell) {
          if (cell.status === 'Hit' && !cell.ship.isSunk) notSunkCells.push(cell);
        });
      });
      var possibleCells = [];
      notSunkCells.forEach(function (cell) {
        for (var direction in _aroundPositions) {
          var move = _aroundPositions[direction];
          var moveRow = move.moveRow,
            moveCol = move.moveCol;
          var nextCellRow = cell.position.row + moveRow;
          var nextCellCol = cell.position.col + moveCol;
          if (!board[nextCellRow]) continue;
          var nextCell = board[nextCellRow][nextCellCol];
          while (nextCell) {
            if (nextCell.status === 'Hit' && !nextCell.ship.isSunk) {
              // keep getting next cell of that direction
              nextCellRow += moveRow;
              nextCellCol += moveCol;
              if (!board[nextCellRow]) break;
              nextCell = board[nextCellRow][nextCellCol];
              continue;
            }

            // save nextCell if has not been hit yet
            if (nextCell.status === 'Not yet') possibleCells.push(nextCell);
            break;
          }
        }
      });
      if (!possibleCells.length) return _randomAttack(player);
      var cellToCheck = possibleCells.shift();
      while (possibleCells.length) {
        var index = possibleCells.indexOf(cellToCheck);

        // immediate break out and attack any cell which appear twice in possibleCells
        if (index > -1) break;
        cellToCheck = possibleCells.shift();
      }
      return player.board.receivedAttack(cellToCheck.position);
    };
    return _this2;
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
/* harmony export */   Game: () => (/* binding */ Game),
/* harmony export */   _DIFFICULTY: () => (/* binding */ _DIFFICULTY),
/* harmony export */   _SHIPS_MAX_LENGTH: () => (/* binding */ _SHIPS_MAX_LENGTH),
/* harmony export */   _SIZE: () => (/* binding */ _SIZE),
/* harmony export */   _TOTAL_SHIPS: () => (/* binding */ _TOTAL_SHIPS)
/* harmony export */ });
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "./src/js/class.js");
var _class, _class2;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classStaticPrivateFieldSpecGet(receiver, classConstructor, descriptor) { _classCheckPrivateStaticAccess(receiver, classConstructor); _classCheckPrivateStaticFieldDescriptor(descriptor, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classCheckPrivateStaticFieldDescriptor(descriptor, action) { if (descriptor === undefined) { throw new TypeError("attempted to " + action + " private static field before its declaration"); } }
function _classCheckPrivateStaticAccess(receiver, classConstructor) { if (receiver !== classConstructor) { throw new TypeError("Private static access of wrong provenance"); } }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


/**
 * @jest-environment jsdom
 */

// these variables can be put inside Game class but I don't want
var _SIZE = 10; // Gameboard SIZE

var _TOTAL_SHIPS = [1, 1, 1, 2, 2, 3, 3, 4, 5]; // total of ships we want on our gameboard

var _SHIPS_MAX_LENGTH = 9;
var _DIFFICULTY = 1;
var Game = /*#__PURE__*/_createClass(function Game() {
  _classCallCheck(this, Game);
});
_class = Game;
_defineProperty(Game, "changeSize", function (newSize) {
  _SIZE = newSize;
  DOM.gameboardAi.style.cssText = "grid-template: repeat(".concat(_SIZE, ", 1fr) / repeat(").concat(_SIZE, ", 1fr)");
  DOM.gameboardHuman.style.cssText = "grid-template: repeat(".concat(_SIZE, ", 1fr) / repeat(").concat(_SIZE, ", 1fr)");
});
_defineProperty(Game, "changeDifficulty", function (newDifficulty) {
  return _DIFFICULTY = newDifficulty;
});
_defineProperty(Game, "changeTotalShips", function (newShips) {
  return _TOTAL_SHIPS = newShips;
});
_defineProperty(Game, "isOver", false);
_defineProperty(Game, "human", void 0);
_defineProperty(Game, "ai", void 0);
_defineProperty(Game, "checkGameover", function (playerToCheck) {
  if (playerToCheck.board.allClear) {
    _class.isOver = true;
  }
  return _class.isOver;
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

  // Display.humanShips(this.ai); // FIXME used for display ai's ships, for testing

  Display.message(_class.human, "Press the restart button if", "you're not happy with your ships layout");
  Display.message(_class.ai, "Keep track of game alert here", "You will attack the gameboard above");
  DOM.preventSpam.classList.add('hide');
  DOM.listenHumanAttacks(_class.human, _class.ai);
});
_defineProperty(Game, "humanPlayOneTurn", function (human, ai, position) {
  var humanAttacksStatus = human.attack(position, ai);
  var humanMessage = "We shot at enemy's water and it's a miss";
  if (humanAttacksStatus.cellStatus === 'Hit') {
    Display.aiDeathShips(ai);
    humanMessage = "We shot at enemy's water and it's a hit";
    if (humanAttacksStatus.shipStatus === 'Sunk') humanMessage += ", we have sunk their ship";
  }
  humanMessage = humanMessage.split(',');
  Display.shotOnBoard(ai, position, humanAttacksStatus.cellStatus);
  Display.message(ai, humanMessage[0], humanMessage[1] || '');
  if (_class.checkGameover(ai)) {
    Display.stopUserSpamming();
    Display.message(ai, "Congratulation!", "We have win the battle!", "Play again?");
    Display.message(human, "Congratulation!", "We have win the battle!", "Play again?");
  }
});
_defineProperty(Game, "aiPlayOneTurn", function (human, ai) {
  var aiAttackResult = ai.attack(human);
  var aiMessage = "Enemy shot at our water and it's a miss";
  if (aiAttackResult.cellStatus === 'Hit') {
    Display.humanShips(human);
    aiMessage = "Enemy shot at our water and it's a hit";
    if (aiAttackResult.shipStatus === 'Sunk') aiMessage += ", they have sunk our ship";
  }
  aiMessage = aiMessage.split(',');
  Display.shotOnBoard(human, aiAttackResult.position, aiAttackResult.cellStatus);
  Display.message(human, "Enemy is aiming...", aiMessage[0], aiMessage[1]);
  if (_class.checkGameover(human)) {
    Display.stopUserSpamming();
    Display.message(ai, "Oh noo...", "Enemy has win the battle!", "Play again?");
    Display.message(human, "Oh no...", "Enemy has win the battle!", "Play again?");
  }
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
_defineProperty(DOM, "setting", document.querySelector('[data-setting]'));
_defineProperty(DOM, "preventSpam", document.querySelector('[data-prevent-spam]'));
_defineProperty(DOM, "popupFormCtn", document.querySelector('[data-popup-form-ctn]'));
_defineProperty(DOM, "popupForm", document.querySelector('[data-popup-form]'));
_defineProperty(DOM, "submitForm", document.querySelector("[data-submit-form]"));
_defineProperty(DOM, "closeForm", document.querySelector("[data-close-form]"));
_defineProperty(DOM, "inputSize", document.querySelector("[data-form-input-size]"));
_defineProperty(DOM, "inputShips", document.querySelector("[data-form-input-ships]"));
_defineProperty(DOM, "inputsDifficulty", document.querySelectorAll('[name="difficulty"]'));
var _showPopupForm = {
  writable: true,
  value: function value() {
    return _class2.popupFormCtn.classList.remove('hide');
  }
};
var _hidePopupForm = {
  writable: true,
  value: function value() {
    return _class2.popupFormCtn.classList.add('hide');
  }
};
_defineProperty(DOM, "listenRestart", function () {
  _class2.restart.addEventListener('click', function (e) {
    Game.start();
  });
});
_defineProperty(DOM, "listenSetting", function () {
  _class2.setting.addEventListener('click', function (e) {
    _classStaticPrivateFieldSpecGet(_class2, _class2, _showPopupForm).call(_class2);
  });
});
_defineProperty(DOM, "listenSubmitForm", function () {
  _class2.popupForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var difficulty = 1;
    _class2.inputsDifficulty.forEach(function (input) {
      if (input.checked) difficulty = input.value;
    });
    var inputSizeValue = +_class2.inputSize.value;
    var inputShipsValue = _class2.inputShips.value.trim().split(/\s*/).reduce(function (total, current) {
      return +current > 0 ? [].concat(_toConsumableArray(total), [+current]) : total;
    }, []);
    Game.changeDifficulty(difficulty);
    Game.changeSize(inputSizeValue);
    Game.changeTotalShips(inputShipsValue);
    Game.start();
    _classStaticPrivateFieldSpecGet(_class2, _class2, _hidePopupForm).call(_class2);
  });
});
_defineProperty(DOM, "listenCloseForm", function () {
  _class2.closeForm.addEventListener('click', function (e) {
    _classStaticPrivateFieldSpecGet(_class2, _class2, _hidePopupForm).call(_class2);
  });
});
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
      if (Game.isOver) return;

      // ai play its turn base on difficulty
      for (var i = 0; i < _DIFFICULTY; i++) {
        Game.aiPlayOneTurn(human, ai);
      }
    }, {
      once: true
    });
  });
});
var Display = /*#__PURE__*/_createClass(function Display() {
  _classCallCheck(this, Display);
});
_defineProperty(Display, "message", function (player, content0) {
  var content1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var content2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var targetMessage;
  if (player instanceof _class__WEBPACK_IMPORTED_MODULE_0__.Human) targetMessage = DOM.messageHuman;else targetMessage = DOM.messageAi;
  targetMessage.innerHTML = "<p>".concat(content0, "</p><p>").concat(content1, "</p><p>").concat(content2, "</p>");
});
_defineProperty(Display, "board", function (player) {
  if (!(player instanceof _class__WEBPACK_IMPORTED_MODULE_0__.Player)) throw new Error('Invalid Player');
  var targetBoard = player instanceof _class__WEBPACK_IMPORTED_MODULE_0__.Human ? DOM.gameboardHuman : DOM.gameboardAi;
  targetBoard.innerHTML = '';
  var type = player instanceof _class__WEBPACK_IMPORTED_MODULE_0__.Human ? 'human' : 'ai';
  for (var i = 0; i < _SIZE; i++) {
    for (var j = 0; j < _SIZE; j++) {
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
  background-color: black;
}

.footer a {
  text-decoration: underline;
}

.footer a:hover {
  text-decoration: none;
}
`, "",{"version":3,"sources":["webpack://./src/css/footer.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,SAAS;EACT,OAAO;EACP,QAAQ;EACR,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,qBAAqB;AACvB","sourcesContent":[".footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 3rem;\n  background-color: black;\n}\n\n.footer a {\n  text-decoration: underline;\n}\n\n.footer a:hover {\n  text-decoration: none;\n}\n"],"sourceRoot":""}]);
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
  aspect-ratio: 1 / 1;
  border-radius: 99rem;
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
`, "",{"version":3,"sources":["webpack://./src/css/header.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,gFAAwE;EACxE,YAAY;EACZ,mBAAmB;EACnB,oBAAoB;EACpB,2CAA2C;EAC3C,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF","sourcesContent":[".header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n  margin-bottom: 1rem;\n}\n\n.header__icon__ctn {\n  align-self: stretch;\n  padding-right: 20rem;\n}\n\n.header__icon {\n  background: url('./../assets/icon/aim.svg') center/contain no-repeat red;\n  height: 100%;\n  aspect-ratio: 1 / 1;\n  border-radius: 99rem;\n  animation: rotate 750ms linear 0ms infinite;\n  cursor: crosshair;\n}\n\n.header__icon:hover {\n  animation: none;\n}\n\n.header__title {\n  font-size: 6rem;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n\n.header__link {\n  white-space: nowrap;\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n"],"sourceRoot":""}]);
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
  margin: 0 auto 10rem;
  gap: 0.8rem;
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
  width: calc(50vw - 1.6rem);
  height: calc(50vw - 1.6rem);
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
  height: 50%;
  min-height: 2px;
  aspect-ratio: 1/1;
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

.display__message p {
  margin: 0 0 1rem;
}

.gameboard__ctn {
  position: relative;
}

[data-prevent-spam] {
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0); /* transparent */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  cursor: cell;
}

@media screen and (min-width: 900px) {
  .display__message p {
    font-size: 2rem;
  }
}
`, "",{"version":3,"sources":["webpack://./src/css/main.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,uBAAuB;EACvB,WAAW;EACX,oBAAoB;EACpB,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,QAAQ;EACR,0BAA0B;EAC1B,2BAA2B;EAC3B,gBAAgB;EAChB,iBAAiB;EACjB,8EAA4E;AAC9E;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,4BAA4B;AAC9B;;AAEA,yCAAyC;AACzC;EACE,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,sBAAsB;EACtB,oBAAoB;EACpB,aAAa;EACb,kBAAkB;EAClB,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,wCAAwC,EAAE,gBAAgB;EAC1D,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,YAAY;AACd;;AAEA;EACE;IACE,eAAe;EACjB;AACF","sourcesContent":[".main {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  width: 100%;\n  margin: 0 auto 10rem;\n  gap: 0.8rem;\n}\n\n.gameboard__ctn__ctn {\n  max-width: 52rem;\n}\n\n.gameboard__header {\n  text-align: center;\n  padding: 1rem;\n  margin-bottom: 1rem;\n  white-space: nowrap;\n}\n\n.gameboard {\n  border: 1px solid red;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  gap: 1px;\n  width: calc(50vw - 1.6rem);\n  height: calc(50vw - 1.6rem);\n  max-width: 50rem;\n  max-height: 50rem;\n  background: url('./../assets/img/battleship.png') center/cover no-repeat red;\n}\n\n.gameboard > div {\n  border: 1px solid rgb(0, 0, 0);\n}\n\n.gameboard > .contain__ship {\n  background-color: black;\n}\n\n.gameboard > div > span {\n  display: block;\n  height: 50%;\n  min-height: 2px;\n  aspect-ratio: 1/1;\n  border-radius: 99rem;\n}\n\n.gameboard > div > .hit__shot {\n  background-color: red;\n}\n\n.gameboard > div > .miss__shot {\n  background-color: rgb(255, 255, 255);\n}\n\n.gameboard .ai__cell {\n  cursor: cell;\n}\n\n.gameboard .ai__cell:hover {\n  background-color: rgba(122, 255, 122, 0.5);\n}\n\n.gameboard .ai__cell.attacked {\n  cursor: not-allowed;\n}\n\n.gameboard .ai__cell.attacked:hover {\n  background-color: rgba(255, 126, 126, 0.5);\n}\n\n.healthy {\n  border-color: green !important;\n}\n\n.warning {\n  border-color: yellow !important;\n}\n\n.death {\n  border-color: red !important;\n}\n\n/* to place ship in the right direction */\n.ship__head.vertical {\n  border-width: 4px 0 4px 4px;\n}\n\n.ship__head.horizon {\n  border-width: 4px 4px 0 4px;\n}\n\n.ship__body.vertical {\n  border-width: 4px 0 4px 0;\n}\n\n.ship__body.horizon {\n  border-width: 0 4px 0 4px;\n}\n\n.ship__tail.vertical {\n  border-width: 4px 4px 4px 0;\n}\n\n.ship__tail.horizon {\n  border-width: 0 4px 4px 4px;\n}\n\n.ship__one__length {\n  border-width: 4px !important;\n}\n\n.display__message {\n  border: 2px dotted red;\n  border-radius: 99rem;\n  padding: 2rem;\n  text-align: center;\n  margin: 2rem 0;\n  max-width: 50rem;\n}\n\n.display__message p {\n  margin: 0 0 1rem;\n}\n\n.gameboard__ctn {\n  position: relative;\n}\n\n[data-prevent-spam] {\n  height: 100%;\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0); /* transparent */\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  cursor: cell;\n}\n\n@media screen and (min-width: 900px) {\n  .display__message p {\n    font-size: 2rem;\n  }\n}\n"],"sourceRoot":""}]);
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
  gap: 1rem;
}

.warning-ctn {
  max-width: 50rem;
  text-align: justify;
}

.warning-ctn p {
}

.popup-form-ctn {
  line-height: 2.4rem;
  font-size: 1.6rem;
  background-color: rgba(0, 0, 0, 0.9);
  flex-direction: column;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  z-index: 100;
}

.popup-form-title-ctn {
}

.popup-form-title {
  font-size: 6rem;
  line-height: 8rem;
}

.form-ctn {
  flex: 1 1 50rem;
  width: 100%;
  max-width: 50rem;
}

.form {
}

input {
  border-style: solid;
  border-width: 1px;
}

input:invalid {
  border-color: red;
  outline-color: red;
}

input:valid {
  border-color: green;
  outline-color: green;
}

.submit-form {
}

.close-form {
}
`, "",{"version":3,"sources":["webpack://./src/css/nav.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;AACA;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,oCAAoC;EACpC,sBAAsB;EACtB,eAAe;EACf,SAAS;EACT,OAAO;EACP,QAAQ;EACR,aAAa;EACb,YAAY;AACd;;AAEA;AACA;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,WAAW;EACX,gBAAgB;AAClB;;AAEA;AACA;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;AACA;;AAEA;AACA","sourcesContent":[".nav {\n  padding: 1rem;\n  margin-bottom: 1rem;\n  gap: 1rem;\n}\n\n.warning-ctn {\n  max-width: 50rem;\n  text-align: justify;\n}\n\n.warning-ctn p {\n}\n\n.popup-form-ctn {\n  line-height: 2.4rem;\n  font-size: 1.6rem;\n  background-color: rgba(0, 0, 0, 0.9);\n  flex-direction: column;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 100vh;\n  z-index: 100;\n}\n\n.popup-form-title-ctn {\n}\n\n.popup-form-title {\n  font-size: 6rem;\n  line-height: 8rem;\n}\n\n.form-ctn {\n  flex: 1 1 50rem;\n  width: 100%;\n  max-width: 50rem;\n}\n\n.form {\n}\n\ninput {\n  border-style: solid;\n  border-width: 1px;\n}\n\ninput:invalid {\n  border-color: red;\n  outline-color: red;\n}\n\ninput:valid {\n  border-color: green;\n  outline-color: green;\n}\n\n.submit-form {\n}\n\n.close-form {\n}\n"],"sourceRoot":""}]);
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
  font-size: 1.6vw;
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
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;EACE,eAAe;AACjB;;AAEA;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,sBAAsB;AACxB;;AAEA;;EAEE,qBAAqB;AACvB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf","sourcesContent":[":root {\n  font-size: 10px;\n}\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\n* {\n  /* color: red; */\n}\n\nhtml {\n  background-color: black;\n}\n\nbody {\n  font-size: 1.6vw;\n  color: rgb(255, 0, 0);\n  font-weight: bolder;\n}\n\na {\n  color: unset;\n  text-decoration: unset;\n}\n\nul,\nli {\n  list-style-type: none;\n}\n\nh1 {\n  font-size: 4rem;\n}\n\nh2 {\n  font-size: 3rem;\n}\n\nbutton {\n  border: unset;\n  cursor: pointer;\n}\n\n.center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.hide {\n  display: none;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0Esb0JBQW9CLG1DQUFtQztBQUN2RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLG1GQUFtRixVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FB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Q0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvanMvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2pzL2RvbS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvY3NzL2J1dHRvbi5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9mb290ZXIuY3NzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9jc3MvaGVhZGVyLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvY3NzL21haW4uY3NzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9jc3MvbmF2LmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvY3NzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9idXR0b24uY3NzPzcyYTkiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9mb290ZXIuY3NzP2FiOGMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9oZWFkZXIuY3NzPzhhYzEiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9tYWluLmNzcz8yYzlmIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9jc3MvbmF2LmNzcz8xMWRjIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9jc3MvcmVzZXQuY3NzPzE1MmIiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9jc3MvbmF2LmNzcyc7XG5pbXBvcnQgJy4vY3NzL21haW4uY3NzJztcbmltcG9ydCAnLi9jc3MvcmVzZXQuY3NzJztcbmltcG9ydCAnLi9jc3Mvc3R5bGUuY3NzJztcbmltcG9ydCAnLi9jc3MvZm9vdGVyLmNzcyc7XG5pbXBvcnQgJy4vY3NzL2J1dHRvbi5jc3MnO1xuaW1wb3J0ICcuL2Nzcy9oZWFkZXIuY3NzJztcblxuLy8gaW1wb3J0IEFpbSBmcm9tICcuL2Fzc2V0cy9pY29uL2FpbS5zdmcnO1xuLy8gaW1wb3J0IEJhdHRsZXNoaXAgZnJvbSAnLi9hc3NldHMvaW1nL2JhdHRsZXNoaXAucG5nJztcblxuaW1wb3J0ICcuL2pzL2RvbS5qcyc7XG5pbXBvcnQgJy4vanMvY2xhc3MuanMnO1xuaW1wb3J0ICcuL2pzL2FuaW1hdGlvbi5qcyc7XG5cbmltcG9ydCB7IERPTSwgR2FtZSB9IGZyb20gJy4vanMvZG9tLmpzJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZSkgPT4ge1xuICAvLyBHYW1lLmNoYW5nZVNpemUoMjUpO1xuXG4gIC8vIEdhbWUuY2hhbmdlVG90YWxTaGlwcyhbMSwgMSwgMiwgMiwgMywgMywgNCwgNV0pO1xuXG4gIC8vIEdhbWUuY2hhbmdlRGlmZmljdWx0eSgnMycpO1xuXG4gIEdhbWUuc3RhcnQoKTtcblxuICBET00ubGlzdGVuUmVzdGFydCgpO1xuXG4gIERPTS5saXN0ZW5TZXR0aW5nKCk7XG5cbiAgRE9NLmxpc3RlbkNsb3NlRm9ybSgpO1xuXG4gIERPTS5saXN0ZW5TdWJtaXRGb3JtKCk7XG59KTtcbiIsImltcG9ydCB7IF9TSVpFLCBfVE9UQUxfU0hJUFMsIF9TSElQU19NQVhfTEVOR1RILCBHYW1lIH0gZnJvbSAnLi9kb20nO1xuXG5leHBvcnQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbiA9IDMpIHtcbiAgICBpZiAobGVuID4gX1NISVBTX01BWF9MRU5HVEggfHwgbGVuIDwgMSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHNoaXAgbGVuZ3RoJyk7XG5cbiAgICBsZXQgX2hpdHMgPSAwO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgbGVuZ3RoOiB7XG4gICAgICAgIHZhbHVlOiBsZW4sXG4gICAgICB9LFxuXG4gICAgICBoaXRzOiB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gX2hpdHM7XG4gICAgICAgIH0sXG4gICAgICB9LFxuXG4gICAgICBpc1N1bms6IHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRIZWFsdGggPSB0aGlzLmxlbmd0aCAtIF9oaXRzO1xuXG4gICAgICAgICAgcmV0dXJuIGN1cnJlbnRIZWFsdGggPCAxO1xuICAgICAgICB9LFxuICAgICAgfSxcblxuICAgICAgaGl0OiB7XG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuaXNTdW5rKSB0aHJvdyBuZXcgRXJyb3IoYENhbid0IGF0dGFjayBzdW5rIHNoaXBgKTtcblxuICAgICAgICAgIF9oaXRzKys7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQb3NpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHJvdywgY29sKSB7XG4gICAgY29uc3QgX2xlZ2l0ID0gX1NJWkUgLSAxO1xuXG4gICAgaWYgKHJvdyA+IF9sZWdpdCB8fCBjb2wgPiBfbGVnaXQgfHwgcm93IDwgMCB8fCBjb2wgPCAwKSB0aHJvdyBuZXcgRXJyb3IoJ1Bvc2l0aW9uIGlzIG5vdCBsZWdpdCcpO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgcm93OiB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gcm93O1xuICAgICAgICB9LFxuICAgICAgfSxcblxuICAgICAgY29sOiB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gY29sO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2VsbCB7XG4gIGNvbnN0cnVjdG9yKHJvdywgY29sKSB7XG4gICAgbGV0IF9pc1JlY2VpdmVkQXR0YWNrID0gZmFsc2U7XG5cbiAgICBsZXQgX3NoaXAgPSBudWxsO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgcmVjZWl2ZWRBdHRhY2s6IHtcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoX2lzUmVjZWl2ZWRBdHRhY2spIHRocm93IG5ldyBFcnJvcignQWxyZWFkeSBhdHRhY2tlZCB0aGlzIGNlbGwnKTtcblxuICAgICAgICAgIF9pc1JlY2VpdmVkQXR0YWNrID0gdHJ1ZTtcblxuICAgICAgICAgIF9zaGlwPy5oaXQoKTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG5cbiAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIHZhbHVlOiBuZXcgUG9zaXRpb24ocm93LCBjb2wpLFxuICAgICAgfSxcblxuICAgICAgaXNSZWNlaXZlZEF0dGFjazoge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIF9pc1JlY2VpdmVkQXR0YWNrO1xuICAgICAgICB9LFxuICAgICAgfSxcblxuICAgICAgc2hpcDoge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIF9zaGlwO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldChuZXdTaGlwKSB7XG4gICAgICAgICAgaWYgKF9zaGlwKSB0aHJvdyBuZXcgRXJyb3IoJ0FscmVhZHkgcGxhY2VkIGEgc2hpcCBvbiB0aGlzIGNlbGwnKTtcblxuICAgICAgICAgIF9zaGlwID0gbmV3U2hpcDtcbiAgICAgICAgfSxcbiAgICAgIH0sXG5cbiAgICAgIHN0YXR1czoge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgaWYgKCFfaXNSZWNlaXZlZEF0dGFjaykgcmV0dXJuICdOb3QgeWV0JztcblxuICAgICAgICAgIGlmIChfc2hpcCkgcmV0dXJuICdIaXQnO1xuXG4gICAgICAgICAgcmV0dXJuICdNaXNzJztcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgIHNoaXBzSW5mbzogeyB2YWx1ZTogW10gfSxcblxuICAgICAgYm9hcmQ6IHsgdmFsdWU6IFtdIH0sXG5cbiAgICAgIGhpdFNob3RzOiB7IHZhbHVlOiBbXSB9LFxuXG4gICAgICBtaXNzU2hvdHM6IHsgdmFsdWU6IFtdIH0sXG5cbiAgICAgIHNob3RzOiB7IHZhbHVlOiBbXSB9LFxuXG4gICAgICBhbGxDbGVhcjoge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc2hpcHNJbmZvLmV2ZXJ5KChpbmZvKSA9PiBpbmZvLnNoaXAuaXNTdW5rKTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG5cbiAgICAgIHNoaXBzOiB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICAvLyBwbGFjZSBzaGlwcyBpbnRvIGNhdGVnb3J5IGJhc2Ugb24gdGhlaXIgc3RhdHVzOiBoZWFsdGh5LCB3YXJuaW5nLCBkZWF0aFxuICAgICAgICAgIHJldHVybiB0aGlzLnNoaXBzSW5mby5yZWR1Y2UoXG4gICAgICAgICAgICAodG90YWwsIGN1cnJlbnRTaGlwSW5mbykgPT4ge1xuICAgICAgICAgICAgICBsZXQgc2hpcFN0YXR1cztcblxuICAgICAgICAgICAgICBjb25zdCBjdXJyZW50U2hpcCA9IGN1cnJlbnRTaGlwSW5mby5zaGlwO1xuXG4gICAgICAgICAgICAgIGNvbnN0IHNoaXBIZWFsdGggPSBjdXJyZW50U2hpcC5sZW5ndGggLSBjdXJyZW50U2hpcC5oaXRzO1xuXG4gICAgICAgICAgICAgIGlmIChzaGlwSGVhbHRoID09PSAwKSBzaGlwU3RhdHVzID0gJ2RlYXRoJztcbiAgICAgICAgICAgICAgZWxzZSBpZiAoc2hpcEhlYWx0aCA9PT0gMSkgc2hpcFN0YXR1cyA9ICd3YXJuaW5nJztcbiAgICAgICAgICAgICAgZWxzZSBzaGlwU3RhdHVzID0gJ2hlYWx0aHknO1xuXG4gICAgICAgICAgICAgIHRvdGFsW3NoaXBTdGF0dXNdLnB1c2goY3VycmVudFNoaXBJbmZvKTtcblxuICAgICAgICAgICAgICByZXR1cm4gdG90YWw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBoZWFsdGh5OiBbXSwgZGVhdGg6IFtdLCB3YXJuaW5nOiBbXSB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG5cbiAgICAgIHBsYWNlU2hpcHM6IHtcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIChzaGlwLCBzdGFydFBvc2l0aW9uLCBpc1ZlcnRpY2FsKSB7XG4gICAgICAgICAgaWYgKCEoc2hpcCBpbnN0YW5jZW9mIFNoaXApKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc2hpcCBvYmplY3QnKTtcblxuICAgICAgICAgIGlmICghKHN0YXJ0UG9zaXRpb24gaW5zdGFuY2VvZiBQb3NpdGlvbikpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdGFydCBwb3NpdGlvbicpO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiBpc1ZlcnRpY2FsICE9PSAnYm9vbGVhbicpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBkaXJlY3Rpb24nKTtcblxuICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IHNoaXAubGVuZ3RoO1xuXG4gICAgICAgICAgY29uc3QgZW5kUG9zaXRpb24gPSBsZW5ndGggKyAoaXNWZXJ0aWNhbCA/IHN0YXJ0UG9zaXRpb24uY29sIDogc3RhcnRQb3NpdGlvbi5yb3cpOyAvLyB1c2VkIHRvIGNoZWNrIGlmIG91dHNpZGUgdGhlIGdhbWVib2FyZFxuXG4gICAgICAgICAgaWYgKGVuZFBvc2l0aW9uID4gX1NJWkUpIHRocm93IG5ldyBFcnJvcignVGhpcyBzaGlwIGdvZXMgYmV5b25kIGdhbWVib2FyZCcpO1xuXG4gICAgICAgICAgbGV0IHsgcm93LCBjb2wgfSA9IHN0YXJ0UG9zaXRpb247XG5cbiAgICAgICAgICBjb25zdCBsb2NhdGlvbnMgPSBbXTtcblxuICAgICAgICAgIGNvbnN0IGNlbGxzID0gW107XG5cbiAgICAgICAgICAvLyBjaGVjayBhbGwgc2hpcCdzIGxvY2F0aW9ucyBmaXJzdCB0byBzZWUgaWYgc29tZXRoaW5nIHRocm93XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2VsbCA9IHRoaXMuYm9hcmRbcm93XVtjb2xdO1xuXG4gICAgICAgICAgICAvLyB0aHJvdyBhbmQgY2FuY2VsIHBsYWNlIHNoaXAgcHJvY2VzcyBpZiBhIGNlbGwgYWxyZWFkeSBoYXMgc2hpcCBvbiBpdFxuICAgICAgICAgICAgaWYgKGNlbGwuc2hpcCAhPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKCdQbGFjZSBzaGlwIGNhbmNlbCBiZWNhdXNlIHRoaXMgY2VsbCBhbHJlYWR5IGhhcyBhIHNoaXAgb24gaXQnKTtcblxuICAgICAgICAgICAgLy8gc2F2ZSBjZWxscyB3aGljaCBpcyBsZWdpdCB0byB1c2UgbGF0ZXJcbiAgICAgICAgICAgIGNlbGxzLnB1c2goY2VsbCk7XG5cbiAgICAgICAgICAgIC8vIGxvY2F0aW9ucyB0byB1cGRhdGUgZ2FtZWJvYXJkLnNoaXBzSW5mb1xuICAgICAgICAgICAgbG9jYXRpb25zLnB1c2gobmV3IFBvc2l0aW9uKHJvdywgY29sKSk7XG5cbiAgICAgICAgICAgIGlzVmVydGljYWwgPyBjb2wrKyA6IHJvdysrOyAvLyBpbmNyZWFzZSBiYXNlZCBvbiBkaXJlY3Rpb25cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyB0aGUgbG9vcCB0aHJvdWdoIGFsbCBsZWdpdCBjZWxscyB0byBhY3R1YWxseSBwbGFjZSBzaGlwIGFmdGVyIG5vdGhpbmcgZ290IHRocm93XG4gICAgICAgICAgZm9yIChjb25zdCBjZWxsIG9mIGNlbGxzKSB7XG4gICAgICAgICAgICBjZWxsLnNoaXAgPSBzaGlwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuc2hpcHNJbmZvLnB1c2goeyBsb2NhdGlvbnMsIGlzVmVydGljYWwsIHNoaXA6IHNoaXAgfSk7XG4gICAgICAgIH0sXG4gICAgICB9LFxuXG4gICAgICByZWNlaXZlZEF0dGFjazoge1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHBvc2l0aW9uKSB7XG4gICAgICAgICAgaWYgKCEocG9zaXRpb24gaW5zdGFuY2VvZiBQb3NpdGlvbikpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBwb3NpdGlvbicpO1xuXG4gICAgICAgICAgY29uc3QgeyByb3csIGNvbCB9ID0gcG9zaXRpb247XG5cbiAgICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5ib2FyZFtyb3ddW2NvbF07XG5cbiAgICAgICAgICBjZWxsLnJlY2VpdmVkQXR0YWNrKCk7XG5cbiAgICAgICAgICBjb25zdCBjZWxsU3RhdHVzID0gY2VsbC5zdGF0dXM7XG5cbiAgICAgICAgICBjb25zdCBzaGlwU3RhdHVzID0gY2VsbC5zaGlwPy5pc1N1bmsgPyAnU3VuaycgOiAnTm90IHN1bmsnO1xuXG4gICAgICAgICAgaWYgKGNlbGxTdGF0dXMgPT09ICdIaXQnKSB0aGlzLmhpdFNob3RzLnB1c2gocG9zaXRpb24pO1xuXG4gICAgICAgICAgaWYgKGNlbGxTdGF0dXMgPT09ICdNaXNzJykgdGhpcy5taXNzU2hvdHMucHVzaChwb3NpdGlvbik7XG5cbiAgICAgICAgICB0aGlzLnNob3RzLnB1c2gocG9zaXRpb24pO1xuXG4gICAgICAgICAgcmV0dXJuIHsgY2VsbFN0YXR1cywgc2hpcFN0YXR1cywgcG9zaXRpb24gfTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9TSVpFOyBpKyspIHtcbiAgICAgIHRoaXMuYm9hcmQucHVzaChbXSk7XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgX1NJWkU7IGorKykge1xuICAgICAgICB0aGlzLmJvYXJkW2ldLnB1c2gobmV3IENlbGwoaSwgaikpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgYm9hcmQ6IHtcbiAgICAgICAgdmFsdWU6IG5ldyBHYW1lYm9hcmQoKSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICByYW5kb21QbGFjZVNoaXBzKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX1RPVEFMX1NISVBTLmxlbmd0aDsgaSsrKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBfU0laRSk7XG5cbiAgICAgICAgY29uc3QgY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogX1NJWkUpO1xuXG4gICAgICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKHJvdywgY29sKTtcblxuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSAhIU1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuXG4gICAgICAgIGNvbnN0IHNoaXAgPSBuZXcgU2hpcChfVE9UQUxfU0hJUFNbaV0pO1xuXG4gICAgICAgIHRoaXMuYm9hcmQucGxhY2VTaGlwcyhzaGlwLCBwb3NpdGlvbiwgZGlyZWN0aW9uKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGktLTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBIdW1hbiBleHRlbmRzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICBhdHRhY2s6IHtcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIChwb3NpdGlvbiwgcGxheWVyKSB7XG4gICAgICAgICAgaWYgKCEocG9zaXRpb24gaW5zdGFuY2VvZiBQb3NpdGlvbikgfHwgIShwbGF5ZXIuYm9hcmQgaW5zdGFuY2VvZiBHYW1lYm9hcmQpKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYXJndW1lbnRzJyk7XG5cbiAgICAgICAgICBjb25zdCBzdGF0dXMgPSBwbGF5ZXIuYm9hcmQucmVjZWl2ZWRBdHRhY2socG9zaXRpb24pO1xuXG4gICAgICAgICAgcmV0dXJuIHN0YXR1cztcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbXB1dGVyIGV4dGVuZHMgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIGNvbnN0IF9yYW5kb21BdHRhY2sgPSAocGxheWVyKSA9PiB7XG4gICAgICBpZiAoIShwbGF5ZXIuYm9hcmQgaW5zdGFuY2VvZiBHYW1lYm9hcmQpKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYm9hcmQnKTtcblxuICAgICAgY29uc3QgbGVuZ3RoID0gcGxheWVyLmJvYXJkLnNob3RzLmxlbmd0aDtcblxuICAgICAgd2hpbGUgKGxlbmd0aCA9PT0gcGxheWVyLmJvYXJkLnNob3RzLmxlbmd0aCkge1xuICAgICAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBfU0laRSk7XG5cbiAgICAgICAgY29uc3QgY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogX1NJWkUpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9zaXRpb24ocm93LCBjb2wpO1xuXG4gICAgICAgICAgY29uc3Qgc3RhdHVzID0gcGxheWVyLmJvYXJkLnJlY2VpdmVkQXR0YWNrKHBvc2l0aW9uKTtcblxuICAgICAgICAgIHJldHVybiBzdGF0dXM7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgX2Fyb3VuZFBvc2l0aW9ucyA9IHtcbiAgICAgIHRvcDogeyBtb3ZlUm93OiAtMSwgbW92ZUNvbDogMCB9LFxuXG4gICAgICBib3R0b206IHsgbW92ZVJvdzogMSwgbW92ZUNvbDogMCB9LFxuXG4gICAgICBsZWZ0OiB7IG1vdmVSb3c6IDAsIG1vdmVDb2w6IC0xIH0sXG5cbiAgICAgIHJpZ2h0OiB7IG1vdmVSb3c6IDAsIG1vdmVDb2w6IDEgfSxcbiAgICB9O1xuXG4gICAgdGhpcy5hdHRhY2sgPSAocGxheWVyKSA9PiB7XG4gICAgICBjb25zdCBib2FyZCA9IHBsYXllci5ib2FyZC5ib2FyZDtcblxuICAgICAgY29uc3Qgbm90U3Vua0NlbGxzID0gW107XG5cbiAgICAgIGJvYXJkLmZvckVhY2goKHJvdykgPT4ge1xuICAgICAgICByb3cuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgIGlmIChjZWxsLnN0YXR1cyA9PT0gJ0hpdCcgJiYgIWNlbGwuc2hpcC5pc1N1bmspIG5vdFN1bmtDZWxscy5wdXNoKGNlbGwpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBwb3NzaWJsZUNlbGxzID0gW107XG5cbiAgICAgIG5vdFN1bmtDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgIGZvciAoY29uc3QgZGlyZWN0aW9uIGluIF9hcm91bmRQb3NpdGlvbnMpIHtcbiAgICAgICAgICBjb25zdCBtb3ZlID0gX2Fyb3VuZFBvc2l0aW9uc1tkaXJlY3Rpb25dO1xuXG4gICAgICAgICAgY29uc3QgeyBtb3ZlUm93LCBtb3ZlQ29sIH0gPSBtb3ZlO1xuXG4gICAgICAgICAgbGV0IG5leHRDZWxsUm93ID0gY2VsbC5wb3NpdGlvbi5yb3cgKyBtb3ZlUm93O1xuXG4gICAgICAgICAgbGV0IG5leHRDZWxsQ29sID0gY2VsbC5wb3NpdGlvbi5jb2wgKyBtb3ZlQ29sO1xuXG4gICAgICAgICAgaWYgKCFib2FyZFtuZXh0Q2VsbFJvd10pIGNvbnRpbnVlO1xuXG4gICAgICAgICAgbGV0IG5leHRDZWxsID0gYm9hcmRbbmV4dENlbGxSb3ddW25leHRDZWxsQ29sXTtcblxuICAgICAgICAgIHdoaWxlIChuZXh0Q2VsbCkge1xuICAgICAgICAgICAgaWYgKG5leHRDZWxsLnN0YXR1cyA9PT0gJ0hpdCcgJiYgIW5leHRDZWxsLnNoaXAuaXNTdW5rKSB7XG4gICAgICAgICAgICAgIC8vIGtlZXAgZ2V0dGluZyBuZXh0IGNlbGwgb2YgdGhhdCBkaXJlY3Rpb25cbiAgICAgICAgICAgICAgbmV4dENlbGxSb3cgKz0gbW92ZVJvdztcblxuICAgICAgICAgICAgICBuZXh0Q2VsbENvbCArPSBtb3ZlQ29sO1xuXG4gICAgICAgICAgICAgIGlmICghYm9hcmRbbmV4dENlbGxSb3ddKSBicmVhaztcblxuICAgICAgICAgICAgICBuZXh0Q2VsbCA9IGJvYXJkW25leHRDZWxsUm93XVtuZXh0Q2VsbENvbF07XG5cbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHNhdmUgbmV4dENlbGwgaWYgaGFzIG5vdCBiZWVuIGhpdCB5ZXRcbiAgICAgICAgICAgIGlmIChuZXh0Q2VsbC5zdGF0dXMgPT09ICdOb3QgeWV0JykgcG9zc2libGVDZWxscy5wdXNoKG5leHRDZWxsKTtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKCFwb3NzaWJsZUNlbGxzLmxlbmd0aCkgcmV0dXJuIF9yYW5kb21BdHRhY2socGxheWVyKTtcblxuICAgICAgbGV0IGNlbGxUb0NoZWNrID0gcG9zc2libGVDZWxscy5zaGlmdCgpO1xuXG4gICAgICB3aGlsZSAocG9zc2libGVDZWxscy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBwb3NzaWJsZUNlbGxzLmluZGV4T2YoY2VsbFRvQ2hlY2spO1xuXG4gICAgICAgIC8vIGltbWVkaWF0ZSBicmVhayBvdXQgYW5kIGF0dGFjayBhbnkgY2VsbCB3aGljaCBhcHBlYXIgdHdpY2UgaW4gcG9zc2libGVDZWxsc1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkgYnJlYWs7XG5cbiAgICAgICAgY2VsbFRvQ2hlY2sgPSBwb3NzaWJsZUNlbGxzLnNoaWZ0KCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwbGF5ZXIuYm9hcmQucmVjZWl2ZWRBdHRhY2soY2VsbFRvQ2hlY2sucG9zaXRpb24pO1xuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IFBvc2l0aW9uLCBIdW1hbiwgQ29tcHV0ZXIsIFBsYXllciB9IGZyb20gJy4vY2xhc3MnO1xuXG4vKipcbiAqIEBqZXN0LWVudmlyb25tZW50IGpzZG9tXG4gKi9cblxuLy8gdGhlc2UgdmFyaWFibGVzIGNhbiBiZSBwdXQgaW5zaWRlIEdhbWUgY2xhc3MgYnV0IEkgZG9uJ3Qgd2FudFxuZXhwb3J0IGxldCBfU0laRSA9IDEwOyAvLyBHYW1lYm9hcmQgU0laRVxuXG5leHBvcnQgbGV0IF9UT1RBTF9TSElQUyA9IFsxLCAxLCAxLCAyLCAyLCAzLCAzLCA0LCA1XTsgLy8gdG90YWwgb2Ygc2hpcHMgd2Ugd2FudCBvbiBvdXIgZ2FtZWJvYXJkXG5cbmV4cG9ydCBsZXQgX1NISVBTX01BWF9MRU5HVEggPSA5O1xuXG5leHBvcnQgbGV0IF9ESUZGSUNVTFRZID0gMTtcblxuZXhwb3J0IGNsYXNzIEdhbWUge1xuICBzdGF0aWMgY2hhbmdlU2l6ZSA9IChuZXdTaXplKSA9PiB7XG4gICAgX1NJWkUgPSBuZXdTaXplO1xuXG4gICAgRE9NLmdhbWVib2FyZEFpLnN0eWxlLmNzc1RleHQgPSBgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KCR7X1NJWkV9LCAxZnIpIC8gcmVwZWF0KCR7X1NJWkV9LCAxZnIpYDtcblxuICAgIERPTS5nYW1lYm9hcmRIdW1hbi5zdHlsZS5jc3NUZXh0ID0gYGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgke19TSVpFfSwgMWZyKSAvIHJlcGVhdCgke19TSVpFfSwgMWZyKWA7XG4gIH07XG5cbiAgc3RhdGljIGNoYW5nZURpZmZpY3VsdHkgPSAobmV3RGlmZmljdWx0eSkgPT4gKF9ESUZGSUNVTFRZID0gbmV3RGlmZmljdWx0eSk7XG5cbiAgc3RhdGljIGNoYW5nZVRvdGFsU2hpcHMgPSAobmV3U2hpcHMpID0+IChfVE9UQUxfU0hJUFMgPSBuZXdTaGlwcyk7XG5cbiAgc3RhdGljIGlzT3ZlciA9IGZhbHNlO1xuXG4gIHN0YXRpYyBodW1hbjtcblxuICBzdGF0aWMgYWk7XG5cbiAgc3RhdGljIGNoZWNrR2FtZW92ZXIgPSAocGxheWVyVG9DaGVjaykgPT4ge1xuICAgIGlmIChwbGF5ZXJUb0NoZWNrLmJvYXJkLmFsbENsZWFyKSB7XG4gICAgICB0aGlzLmlzT3ZlciA9IHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaXNPdmVyO1xuICB9O1xuXG4gIHN0YXRpYyBzdGFydCA9ICgpID0+IHtcbiAgICB0aGlzLmlzT3ZlciA9IGZhbHNlO1xuXG4gICAgdGhpcy5odW1hbiA9IG5ldyBIdW1hbigpO1xuXG4gICAgdGhpcy5haSA9IG5ldyBDb21wdXRlcigpO1xuXG4gICAgdGhpcy5odW1hbi5yYW5kb21QbGFjZVNoaXBzKCk7XG5cbiAgICB0aGlzLmFpLnJhbmRvbVBsYWNlU2hpcHMoKTtcblxuICAgIERpc3BsYXkuYm9hcmQodGhpcy5odW1hbik7XG5cbiAgICBEaXNwbGF5LmJvYXJkKHRoaXMuYWkpO1xuXG4gICAgRGlzcGxheS5odW1hblNoaXBzKHRoaXMuaHVtYW4pO1xuXG4gICAgLy8gRGlzcGxheS5odW1hblNoaXBzKHRoaXMuYWkpOyAvLyBGSVhNRSB1c2VkIGZvciBkaXNwbGF5IGFpJ3Mgc2hpcHMsIGZvciB0ZXN0aW5nXG5cbiAgICBEaXNwbGF5Lm1lc3NhZ2UodGhpcy5odW1hbiwgYFByZXNzIHRoZSByZXN0YXJ0IGJ1dHRvbiBpZmAsIGB5b3UncmUgbm90IGhhcHB5IHdpdGggeW91ciBzaGlwcyBsYXlvdXRgKTtcblxuICAgIERpc3BsYXkubWVzc2FnZSh0aGlzLmFpLCBgS2VlcCB0cmFjayBvZiBnYW1lIGFsZXJ0IGhlcmVgLCBgWW91IHdpbGwgYXR0YWNrIHRoZSBnYW1lYm9hcmQgYWJvdmVgKTtcblxuICAgIERPTS5wcmV2ZW50U3BhbS5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG5cbiAgICBET00ubGlzdGVuSHVtYW5BdHRhY2tzKHRoaXMuaHVtYW4sIHRoaXMuYWkpO1xuICB9O1xuXG4gIHN0YXRpYyBodW1hblBsYXlPbmVUdXJuID0gKGh1bWFuLCBhaSwgcG9zaXRpb24pID0+IHtcbiAgICBjb25zdCBodW1hbkF0dGFja3NTdGF0dXMgPSBodW1hbi5hdHRhY2socG9zaXRpb24sIGFpKTtcblxuICAgIGxldCBodW1hbk1lc3NhZ2UgPSBgV2Ugc2hvdCBhdCBlbmVteSdzIHdhdGVyIGFuZCBpdCdzIGEgbWlzc2A7XG5cbiAgICBpZiAoaHVtYW5BdHRhY2tzU3RhdHVzLmNlbGxTdGF0dXMgPT09ICdIaXQnKSB7XG4gICAgICBEaXNwbGF5LmFpRGVhdGhTaGlwcyhhaSk7XG5cbiAgICAgIGh1bWFuTWVzc2FnZSA9IGBXZSBzaG90IGF0IGVuZW15J3Mgd2F0ZXIgYW5kIGl0J3MgYSBoaXRgO1xuXG4gICAgICBpZiAoaHVtYW5BdHRhY2tzU3RhdHVzLnNoaXBTdGF0dXMgPT09ICdTdW5rJykgaHVtYW5NZXNzYWdlICs9IGAsIHdlIGhhdmUgc3VuayB0aGVpciBzaGlwYDtcbiAgICB9XG4gICAgaHVtYW5NZXNzYWdlID0gaHVtYW5NZXNzYWdlLnNwbGl0KCcsJyk7XG5cbiAgICBEaXNwbGF5LnNob3RPbkJvYXJkKGFpLCBwb3NpdGlvbiwgaHVtYW5BdHRhY2tzU3RhdHVzLmNlbGxTdGF0dXMpO1xuXG4gICAgRGlzcGxheS5tZXNzYWdlKGFpLCBodW1hbk1lc3NhZ2VbMF0sIGh1bWFuTWVzc2FnZVsxXSB8fCAnJyk7XG5cbiAgICBpZiAodGhpcy5jaGVja0dhbWVvdmVyKGFpKSkge1xuICAgICAgRGlzcGxheS5zdG9wVXNlclNwYW1taW5nKCk7XG5cbiAgICAgIERpc3BsYXkubWVzc2FnZShhaSwgYENvbmdyYXR1bGF0aW9uIWAsIGBXZSBoYXZlIHdpbiB0aGUgYmF0dGxlIWAsIGBQbGF5IGFnYWluP2ApO1xuXG4gICAgICBEaXNwbGF5Lm1lc3NhZ2UoaHVtYW4sIGBDb25ncmF0dWxhdGlvbiFgLCBgV2UgaGF2ZSB3aW4gdGhlIGJhdHRsZSFgLCBgUGxheSBhZ2Fpbj9gKTtcbiAgICB9XG4gIH07XG5cbiAgc3RhdGljIGFpUGxheU9uZVR1cm4gPSAoaHVtYW4sIGFpKSA9PiB7XG4gICAgY29uc3QgYWlBdHRhY2tSZXN1bHQgPSBhaS5hdHRhY2soaHVtYW4pO1xuXG4gICAgbGV0IGFpTWVzc2FnZSA9IGBFbmVteSBzaG90IGF0IG91ciB3YXRlciBhbmQgaXQncyBhIG1pc3NgO1xuXG4gICAgaWYgKGFpQXR0YWNrUmVzdWx0LmNlbGxTdGF0dXMgPT09ICdIaXQnKSB7XG4gICAgICBEaXNwbGF5Lmh1bWFuU2hpcHMoaHVtYW4pO1xuXG4gICAgICBhaU1lc3NhZ2UgPSBgRW5lbXkgc2hvdCBhdCBvdXIgd2F0ZXIgYW5kIGl0J3MgYSBoaXRgO1xuXG4gICAgICBpZiAoYWlBdHRhY2tSZXN1bHQuc2hpcFN0YXR1cyA9PT0gJ1N1bmsnKSBhaU1lc3NhZ2UgKz0gYCwgdGhleSBoYXZlIHN1bmsgb3VyIHNoaXBgO1xuICAgIH1cblxuICAgIGFpTWVzc2FnZSA9IGFpTWVzc2FnZS5zcGxpdCgnLCcpO1xuXG4gICAgRGlzcGxheS5zaG90T25Cb2FyZChodW1hbiwgYWlBdHRhY2tSZXN1bHQucG9zaXRpb24sIGFpQXR0YWNrUmVzdWx0LmNlbGxTdGF0dXMpO1xuXG4gICAgRGlzcGxheS5tZXNzYWdlKGh1bWFuLCBgRW5lbXkgaXMgYWltaW5nLi4uYCwgYWlNZXNzYWdlWzBdLCBhaU1lc3NhZ2VbMV0pO1xuXG4gICAgaWYgKHRoaXMuY2hlY2tHYW1lb3ZlcihodW1hbikpIHtcbiAgICAgIERpc3BsYXkuc3RvcFVzZXJTcGFtbWluZygpO1xuXG4gICAgICBEaXNwbGF5Lm1lc3NhZ2UoYWksIGBPaCBub28uLi5gLCBgRW5lbXkgaGFzIHdpbiB0aGUgYmF0dGxlIWAsIGBQbGF5IGFnYWluP2ApO1xuXG4gICAgICBEaXNwbGF5Lm1lc3NhZ2UoaHVtYW4sIGBPaCBuby4uLmAsIGBFbmVteSBoYXMgd2luIHRoZSBiYXR0bGUhYCwgYFBsYXkgYWdhaW4/YCk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgY2xhc3MgRE9NIHtcbiAgc3RhdGljIG1lc3NhZ2VIdW1hbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW1lc3NhZ2U9XCJodW1hblwiXWApO1xuXG4gIHN0YXRpYyBtZXNzYWdlQWkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1tZXNzYWdlPVwiYWlcIl1gKTtcblxuICBzdGF0aWMgZ2FtZWJvYXJkSHVtYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkW2RhdGEtaHVtYW5dJyk7XG5cbiAgc3RhdGljIGdhbWVib2FyZEFpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZFtkYXRhLWFpXScpO1xuXG4gIHN0YXRpYyByZXN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcmVzdGFydF0nKTtcblxuICBzdGF0aWMgc2V0dGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNldHRpbmddJyk7XG5cbiAgc3RhdGljIHByZXZlbnRTcGFtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJldmVudC1zcGFtXScpO1xuXG4gIHN0YXRpYyBwb3B1cEZvcm1DdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wb3B1cC1mb3JtLWN0bl0nKTtcblxuICBzdGF0aWMgcG9wdXBGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcG9wdXAtZm9ybV0nKTtcblxuICBzdGF0aWMgc3VibWl0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXN1Ym1pdC1mb3JtXWApO1xuXG4gIHN0YXRpYyBjbG9zZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jbG9zZS1mb3JtXWApO1xuXG4gIHN0YXRpYyBpbnB1dFNpemUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1mb3JtLWlucHV0LXNpemVdYCk7XG5cbiAgc3RhdGljIGlucHV0U2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1mb3JtLWlucHV0LXNoaXBzXWApO1xuXG4gIHN0YXRpYyBpbnB1dHNEaWZmaWN1bHR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCJkaWZmaWN1bHR5XCJdJyk7XG5cbiAgc3RhdGljICNzaG93UG9wdXBGb3JtID0gKCkgPT4gdGhpcy5wb3B1cEZvcm1DdG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuXG4gIHN0YXRpYyAjaGlkZVBvcHVwRm9ybSA9ICgpID0+IHRoaXMucG9wdXBGb3JtQ3RuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcblxuICBzdGF0aWMgbGlzdGVuUmVzdGFydCA9ICgpID0+IHtcbiAgICB0aGlzLnJlc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgR2FtZS5zdGFydCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIHN0YXRpYyBsaXN0ZW5TZXR0aW5nID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0dGluZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICB0aGlzLiNzaG93UG9wdXBGb3JtKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgc3RhdGljIGxpc3RlblN1Ym1pdEZvcm0gPSAoKSA9PiB7XG4gICAgdGhpcy5wb3B1cEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgbGV0IGRpZmZpY3VsdHkgPSAxO1xuXG4gICAgICB0aGlzLmlucHV0c0RpZmZpY3VsdHkuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgICAgaWYgKGlucHV0LmNoZWNrZWQpIGRpZmZpY3VsdHkgPSBpbnB1dC52YWx1ZTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBpbnB1dFNpemVWYWx1ZSA9ICt0aGlzLmlucHV0U2l6ZS52YWx1ZTtcblxuICAgICAgY29uc3QgaW5wdXRTaGlwc1ZhbHVlID0gdGhpcy5pbnB1dFNoaXBzLnZhbHVlXG4gICAgICAgIC50cmltKClcblxuICAgICAgICAuc3BsaXQoL1xccyovKVxuXG4gICAgICAgIC5yZWR1Y2UoKHRvdGFsLCBjdXJyZW50KSA9PiAoK2N1cnJlbnQgPiAwID8gWy4uLnRvdGFsLCArY3VycmVudF0gOiB0b3RhbCksIFtdKTtcblxuICAgICAgR2FtZS5jaGFuZ2VEaWZmaWN1bHR5KGRpZmZpY3VsdHkpO1xuXG4gICAgICBHYW1lLmNoYW5nZVNpemUoaW5wdXRTaXplVmFsdWUpO1xuXG4gICAgICBHYW1lLmNoYW5nZVRvdGFsU2hpcHMoaW5wdXRTaGlwc1ZhbHVlKTtcblxuICAgICAgR2FtZS5zdGFydCgpO1xuXG4gICAgICB0aGlzLiNoaWRlUG9wdXBGb3JtKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgc3RhdGljIGxpc3RlbkNsb3NlRm9ybSA9ICgpID0+IHtcbiAgICB0aGlzLmNsb3NlRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICB0aGlzLiNoaWRlUG9wdXBGb3JtKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgc3RhdGljIGxpc3Rlbkh1bWFuQXR0YWNrcyA9IChodW1hbiwgYWkpID0+IHtcbiAgICBpZiAoIShodW1hbiBpbnN0YW5jZW9mIEh1bWFuKSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEh1bWFuJyk7XG5cbiAgICBpZiAoIShhaSBpbnN0YW5jZW9mIENvbXB1dGVyKSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIEFpJyk7XG5cbiAgICBjb25zdCBjZWxscyA9IHRoaXMuZ2FtZWJvYXJkQWkucXVlcnlTZWxlY3RvckFsbCgnLmFpX19jZWxsJyk7XG5cbiAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdjbGljaycsXG5cbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhdHRhY2tlZCcpO1xuXG4gICAgICAgICAgY29uc3Qgcm93ID0gK2UudGFyZ2V0LmRhdGFzZXQucm93O1xuXG4gICAgICAgICAgY29uc3QgY29sID0gK2UudGFyZ2V0LmRhdGFzZXQuY29sO1xuXG4gICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9zaXRpb24ocm93LCBjb2wpO1xuXG4gICAgICAgICAgR2FtZS5odW1hblBsYXlPbmVUdXJuKGh1bWFuLCBhaSwgcG9zaXRpb24pO1xuXG4gICAgICAgICAgaWYgKEdhbWUuaXNPdmVyKSByZXR1cm47XG5cbiAgICAgICAgICAvLyBhaSBwbGF5IGl0cyB0dXJuIGJhc2Ugb24gZGlmZmljdWx0eVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX0RJRkZJQ1VMVFk7IGkrKykge1xuICAgICAgICAgICAgR2FtZS5haVBsYXlPbmVUdXJuKGh1bWFuLCBhaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHsgb25jZTogdHJ1ZSB9XG4gICAgICApO1xuICAgIH0pO1xuICB9O1xufVxuXG5jbGFzcyBEaXNwbGF5IHtcbiAgc3RhdGljIG1lc3NhZ2UgPSAocGxheWVyLCBjb250ZW50MCwgY29udGVudDEgPSAnJywgY29udGVudDIgPSAnJykgPT4ge1xuICAgIGxldCB0YXJnZXRNZXNzYWdlO1xuXG4gICAgaWYgKHBsYXllciBpbnN0YW5jZW9mIEh1bWFuKSB0YXJnZXRNZXNzYWdlID0gRE9NLm1lc3NhZ2VIdW1hbjtcbiAgICBlbHNlIHRhcmdldE1lc3NhZ2UgPSBET00ubWVzc2FnZUFpO1xuXG4gICAgdGFyZ2V0TWVzc2FnZS5pbm5lckhUTUwgPSBgPHA+JHtjb250ZW50MH08L3A+PHA+JHtjb250ZW50MX08L3A+PHA+JHtjb250ZW50Mn08L3A+YDtcbiAgfTtcblxuICBzdGF0aWMgYm9hcmQgPSAocGxheWVyKSA9PiB7XG4gICAgaWYgKCEocGxheWVyIGluc3RhbmNlb2YgUGxheWVyKSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFBsYXllcicpO1xuXG4gICAgY29uc3QgdGFyZ2V0Qm9hcmQgPSBwbGF5ZXIgaW5zdGFuY2VvZiBIdW1hbiA/IERPTS5nYW1lYm9hcmRIdW1hbiA6IERPTS5nYW1lYm9hcmRBaTtcblxuICAgIHRhcmdldEJvYXJkLmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgdHlwZSA9IHBsYXllciBpbnN0YW5jZW9mIEh1bWFuID8gJ2h1bWFuJyA6ICdhaSc7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9TSVpFOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgX1NJWkU7IGorKykge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnY2VudGVyJyk7XG5cbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoYCR7dHlwZX1fX2NlbGxgKTtcblxuICAgICAgICBkaXYuZGF0YXNldC5yb3cgPSBpO1xuXG4gICAgICAgIGRpdi5kYXRhc2V0LmNvbCA9IGo7XG5cbiAgICAgICAgdGFyZ2V0Qm9hcmQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgc3RhdGljIGh1bWFuU2hpcHMgPSAocGxheWVyKSA9PiB7XG4gICAgaWYgKCEocGxheWVyIGluc3RhbmNlb2YgUGxheWVyKSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFBsYXllcicpO1xuXG4gICAgY29uc3Qgc2hpcHMgPSBwbGF5ZXIuYm9hcmQuc2hpcHM7XG5cbiAgICAvLyBsb29wIHRocm91Z2ggMyB0eXBlOiBoZWFsdGh5LCB3YXJuaW5nLCBkZWF0aFxuICAgIGZvciAoY29uc3Qgc2hpcFR5cGUgaW4gc2hpcHMpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRUeXBlID0gc2hpcHNbc2hpcFR5cGVdO1xuXG4gICAgICAvLyBsb29wIHRocm91Z2ggYWxsIHNoaXBzIGluIDEgdHlwZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50VHlwZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjdXJyZW50U2hpcEluZm8gPSBjdXJyZW50VHlwZVtpXTtcblxuICAgICAgICBjb25zdCBsb2NhdGlvbnMgPSBjdXJyZW50U2hpcEluZm8ubG9jYXRpb25zO1xuXG4gICAgICAgIGNvbnN0IGlzVmVydGljYWwgPSBjdXJyZW50U2hpcEluZm8uaXNWZXJ0aWNhbDtcblxuICAgICAgICAvLyBsb29wIHRocm91Z2ggYWxsIHBvc2l0aW9uIG9mIHRoYXQgc2hpcFxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxvY2F0aW9ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRMb2NhdGlvbiA9IGxvY2F0aW9uc1tqXTtcblxuICAgICAgICAgIGNvbnN0IHsgcm93LCBjb2wgfSA9IGN1cnJlbnRMb2NhdGlvbjtcblxuICAgICAgICAgIC8vIHNlbGVjdCBleGFjdCBjZWxsIGRvbSBlbGVtZW50XG4gICAgICAgICAgY29uc3QgY2VsbCA9IHBsYXllciBpbnN0YW5jZW9mIEh1bWFuID8gRE9NLmdhbWVib2FyZEh1bWFuLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz1cIiR7cm93fVwiXVtkYXRhLWNvbD1cIiR7Y29sfVwiXWApIDogRE9NLmdhbWVib2FyZEFpLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz1cIiR7cm93fVwiXVtkYXRhLWNvbD1cIiR7Y29sfVwiXWApO1xuXG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKHNoaXBUeXBlKTtcblxuICAgICAgICAgIGlmIChsb2NhdGlvbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXBfX29uZV9fbGVuZ3RoJyk7XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpc1ZlcnRpY2FsKSBjZWxsLmNsYXNzTGlzdC5hZGQoJ3ZlcnRpY2FsJyk7XG4gICAgICAgICAgZWxzZSBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hvcml6b24nKTtcblxuICAgICAgICAgIGlmICghaikgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwX19oZWFkJyk7XG4gICAgICAgICAgZWxzZSBpZiAoaiA9PT0gbG9jYXRpb25zLmxlbmd0aCAtIDEpIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcF9fdGFpbCcpO1xuICAgICAgICAgIGVsc2UgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwX19ib2R5Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgc3RhdGljIGFpRGVhdGhTaGlwcyA9IChwbGF5ZXIpID0+IHtcbiAgICBpZiAoIShwbGF5ZXIgaW5zdGFuY2VvZiBQbGF5ZXIpKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgUGxheWVyJyk7XG5cbiAgICBjb25zdCBkZWF0aFNoaXBzID0gcGxheWVyLmJvYXJkLnNoaXBzLmRlYXRoO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWF0aFNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjdXJyZW50U2hpcEluZm8gPSBkZWF0aFNoaXBzW2ldO1xuXG4gICAgICBjb25zdCBsb2NhdGlvbnMgPSBjdXJyZW50U2hpcEluZm8ubG9jYXRpb25zO1xuXG4gICAgICBjb25zdCBpc1ZlcnRpY2FsID0gY3VycmVudFNoaXBJbmZvLmlzVmVydGljYWw7XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbG9jYXRpb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRMb2NhdGlvbiA9IGxvY2F0aW9uc1tqXTtcblxuICAgICAgICBjb25zdCB7IHJvdywgY29sIH0gPSBjdXJyZW50TG9jYXRpb247XG5cbiAgICAgICAgY29uc3QgY2VsbCA9IERPTS5nYW1lYm9hcmRBaS5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9XCIke3Jvd31cIl1bZGF0YS1jb2w9XCIke2NvbH1cIl1gKTtcblxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2RlYXRoJyk7XG5cbiAgICAgICAgaWYgKGxvY2F0aW9ucy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXBfX29uZV9fbGVuZ3RoJyk7XG5cbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1ZlcnRpY2FsKSBjZWxsLmNsYXNzTGlzdC5hZGQoJ3ZlcnRpY2FsJyk7XG4gICAgICAgIGVsc2UgY2VsbC5jbGFzc0xpc3QuYWRkKCdob3Jpem9uJyk7XG5cbiAgICAgICAgaWYgKCFqKSBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXBfX2hlYWQnKTtcbiAgICAgICAgZWxzZSBpZiAoaiA9PT0gbG9jYXRpb25zLmxlbmd0aCAtIDEpIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcF9fdGFpbCcpO1xuICAgICAgICBlbHNlIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcF9fYm9keScpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBzdGF0aWMgc2hvdE9uQm9hcmQgPSAocGxheWVyLCBwb3NpdGlvbiwgc3RhdHVzKSA9PiB7XG4gICAgaWYgKCEocG9zaXRpb24gaW5zdGFuY2VvZiBQb3NpdGlvbikgfHwgIShwbGF5ZXIgaW5zdGFuY2VvZiBQbGF5ZXIpKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYXJndW1lbnQnKTtcblxuICAgIGNvbnN0IHsgcm93LCBjb2wgfSA9IHBvc2l0aW9uO1xuXG4gICAgbGV0IGdhbWVib2FyZDtcblxuICAgIGlmIChwbGF5ZXIgaW5zdGFuY2VvZiBIdW1hbikgZ2FtZWJvYXJkID0gRE9NLmdhbWVib2FyZEh1bWFuO1xuICAgIGVsc2UgZ2FtZWJvYXJkID0gRE9NLmdhbWVib2FyZEFpO1xuXG4gICAgY29uc3QgY2VsbCA9IGdhbWVib2FyZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb2w9XCIke2NvbH1cIl1bZGF0YS1yb3c9XCIke3Jvd31cIl1gKTtcblxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICBpZiAoc3RhdHVzID09PSAnSGl0Jykgc3Bhbi5jbGFzc0xpc3QuYWRkKCdoaXRfX3Nob3QnKTtcbiAgICBlbHNlIHNwYW4uY2xhc3NMaXN0LmFkZCgnbWlzc19fc2hvdCcpO1xuXG4gICAgY2VsbC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgfTtcblxuICBzdGF0aWMgc3RvcFVzZXJTcGFtbWluZyA9ICgpID0+IHtcbiAgICBET00ucHJldmVudFNwYW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICB9O1xufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGhlYWRlciBidXR0b24gdmlldyBvbiBnaXRodWIgKi9cbi5idG4tMTMsXG4uYnRuLTEzICosXG4uYnRuLTEzIDphZnRlcixcbi5idG4tMTMgOmJlZm9yZSxcbi5idG4tMTM6YWZ0ZXIsXG4uYnRuLTEzOmJlZm9yZSB7XG4gIGJvcmRlcjogMCBzb2xpZDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5idG4tMTMge1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgY29sb3I6ICNmZjAwMDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBIZWx2ZXRpY2EgTmV1ZSwgQXJpYWwsIE5vdG8gU2Fucywgc2Fucy1zZXJpZiwgQXBwbGUgQ29sb3IgRW1vamksIFNlZ29lIFVJIEVtb2ppLCBTZWdvZSBVSSBTeW1ib2wsXG4gICAgTm90byBDb2xvciBFbW9qaTtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250LXdlaWdodDogOTAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBtYXJnaW46IDA7XG4gIC8qIC13ZWJraXQtbWFzay1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoIzAwMCwgI2ZmZik7ICovXG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uYnRuLTEzOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLmJ0bi0xMzotbW96LWZvY3VzcmluZyB7XG4gIG91dGxpbmU6IGF1dG87XG59XG4uYnRuLTEzIHN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmJ0bi0xMyBbaGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYnRuLTEzIHtcbiAgYm9yZGVyLXJhZGl1czogOTlyZW07XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwLjhyZW0gM3JlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJ0bi0xMyBzcGFuIHtcbiAgLyogbWl4LWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7ICovXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cbi5idG4tMTM6YWZ0ZXIsXG4uYnRuLTEzOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHJnYigxNDMsIDY3LCA2Nyk7XG4gIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKFxuICAgIDAgMCxcbiAgICAxMDAlIDAsXG4gICAgMTAwJSBjYWxjKHZhcigtLXByb2dyZXNzLCAwJSkgLyAyKSxcbiAgICAwIGNhbGModmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxuICAgIDAgMCxcbiAgICAwIGNhbGMoMTAwJSAtIHZhcigtLXByb2dyZXNzLCAwJSkgLyAyKSxcbiAgICAxMDAlIGNhbGMoMTAwJSAtIHZhcigtLXByb2dyZXNzLCAwJSkgLyAyKSxcbiAgICAxMDAlIDEwMCUsXG4gICAgMCAxMDAlLFxuICAgIDAgY2FsYygxMDAlIC0gdmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpXG4gICk7XG4gIGNsaXAtcGF0aDogcG9seWdvbihcbiAgICAwIDAsXG4gICAgMTAwJSAwLFxuICAgIDEwMCUgY2FsYyh2YXIoLS1wcm9ncmVzcywgMCUpIC8gMiksXG4gICAgMCBjYWxjKHZhcigtLXByb2dyZXNzLCAwJSkgLyAyKSxcbiAgICAwIDAsXG4gICAgMCBjYWxjKDEwMCUgLSB2YXIoLS1wcm9ncmVzcywgMCUpIC8gMiksXG4gICAgMTAwJSBjYWxjKDEwMCUgLSB2YXIoLS1wcm9ncmVzcywgMCUpIC8gMiksXG4gICAgMTAwJSAxMDAlLFxuICAgIDAgMTAwJSxcbiAgICAwIGNhbGMoMTAwJSAtIHZhcigtLXByb2dyZXNzLCAwJSkgLyAyKVxuICApO1xuICBjb250ZW50OiAnJztcbiAgaW5zZXQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoMTAwJSAtIHZhcigtLXByb2dyZXNzLCAwJSkgLyAxLjk5KSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UsIC13ZWJraXQtY2xpcC1wYXRoIDAuMnMgZWFzZTtcbiAgdHJhbnNpdGlvbjogY2xpcC1wYXRoIDAuMnMgZWFzZSwgdHJhbnNmb3JtIDAuMnMgZWFzZTtcbiAgdHJhbnNpdGlvbjogY2xpcC1wYXRoIDAuMnMgZWFzZSwgdHJhbnNmb3JtIDAuMnMgZWFzZSwgLXdlYmtpdC1jbGlwLXBhdGggMC4ycyBlYXNlO1xufVxuLmJ0bi0xMzphZnRlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKC0xMDAlICsgdmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDEuOTkpKTtcbn1cbi5idG4tMTM6aG92ZXIge1xuICAtLXByb2dyZXNzOiAxMDAlO1xufVxuXG4vKiBoZWFkZXIgYnV0dG9uIHZpZXcgb24gZ2l0aHViICovXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvYnV0dG9uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxpQ0FBaUM7QUFDakM7Ozs7OztFQU1FLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHdDQUF3QztFQUN4QywwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsZUFBZTtFQUNmO29CQUNrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsNkRBQTZEO0VBQzdELFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjtBQUNBOztFQUVFLDRCQUE0QjtFQUM1Qjs7Ozs7Ozs7Ozs7R0FXQztFQUNEOzs7Ozs7Ozs7OztHQVdDO0VBQ0QsV0FBVztFQUNYLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsOERBQThEO0VBQzlELDREQUE0RDtFQUM1RCxvREFBb0Q7RUFDcEQsaUZBQWlGO0FBQ25GO0FBQ0E7RUFDRSwrREFBK0Q7QUFDakU7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQSxpQ0FBaUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaGVhZGVyIGJ1dHRvbiB2aWV3IG9uIGdpdGh1YiAqL1xcbi5idG4tMTMsXFxuLmJ0bi0xMyAqLFxcbi5idG4tMTMgOmFmdGVyLFxcbi5idG4tMTMgOmJlZm9yZSxcXG4uYnRuLTEzOmFmdGVyLFxcbi5idG4tMTM6YmVmb3JlIHtcXG4gIGJvcmRlcjogMCBzb2xpZDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5idG4tMTMge1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxuICBjb2xvcjogI2ZmMDAwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgSGVsdmV0aWNhIE5ldWUsIEFyaWFsLCBOb3RvIFNhbnMsIHNhbnMtc2VyaWYsIEFwcGxlIENvbG9yIEVtb2ppLCBTZWdvZSBVSSBFbW9qaSwgU2Vnb2UgVUkgU3ltYm9sLFxcbiAgICBOb3RvIENvbG9yIEVtb2ppO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBtYXJnaW46IDA7XFxuICAvKiAtd2Via2l0LW1hc2staW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCMwMDAsICNmZmYpOyAqL1xcbiAgcGFkZGluZzogMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbi5idG4tMTM6ZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG4uYnRuLTEzOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IGF1dG87XFxufVxcbi5idG4tMTMgc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLmJ0bi0xMyBbaGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uYnRuLTEzIHtcXG4gIGJvcmRlci1yYWRpdXM6IDk5cmVtO1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcGFkZGluZzogMC44cmVtIDNyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5idG4tMTMgc3BhbiB7XFxuICAvKiBtaXgtYmxlbmQtbW9kZTogZGlmZmVyZW5jZTsgKi9cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5idG4tMTM6YWZ0ZXIsXFxuLmJ0bi0xMzpiZWZvcmUge1xcbiAgYmFja2dyb3VuZDogcmdiKDE0MywgNjcsIDY3KTtcXG4gIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKFxcbiAgICAwIDAsXFxuICAgIDEwMCUgMCxcXG4gICAgMTAwJSBjYWxjKHZhcigtLXByb2dyZXNzLCAwJSkgLyAyKSxcXG4gICAgMCBjYWxjKHZhcigtLXByb2dyZXNzLCAwJSkgLyAyKSxcXG4gICAgMCAwLFxcbiAgICAwIGNhbGMoMTAwJSAtIHZhcigtLXByb2dyZXNzLCAwJSkgLyAyKSxcXG4gICAgMTAwJSBjYWxjKDEwMCUgLSB2YXIoLS1wcm9ncmVzcywgMCUpIC8gMiksXFxuICAgIDEwMCUgMTAwJSxcXG4gICAgMCAxMDAlLFxcbiAgICAwIGNhbGMoMTAwJSAtIHZhcigtLXByb2dyZXNzLCAwJSkgLyAyKVxcbiAgKTtcXG4gIGNsaXAtcGF0aDogcG9seWdvbihcXG4gICAgMCAwLFxcbiAgICAxMDAlIDAsXFxuICAgIDEwMCUgY2FsYyh2YXIoLS1wcm9ncmVzcywgMCUpIC8gMiksXFxuICAgIDAgY2FsYyh2YXIoLS1wcm9ncmVzcywgMCUpIC8gMiksXFxuICAgIDAgMCxcXG4gICAgMCBjYWxjKDEwMCUgLSB2YXIoLS1wcm9ncmVzcywgMCUpIC8gMiksXFxuICAgIDEwMCUgY2FsYygxMDAlIC0gdmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxcbiAgICAxMDAlIDEwMCUsXFxuICAgIDAgMTAwJSxcXG4gICAgMCBjYWxjKDEwMCUgLSB2YXIoLS1wcm9ncmVzcywgMCUpIC8gMilcXG4gICk7XFxuICBjb250ZW50OiAnJztcXG4gIGluc2V0OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoMTAwJSAtIHZhcigtLXByb2dyZXNzLCAwJSkgLyAxLjk5KSk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLCAtd2Via2l0LWNsaXAtcGF0aCAwLjJzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBjbGlwLXBhdGggMC4ycyBlYXNlLCB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogY2xpcC1wYXRoIDAuMnMgZWFzZSwgdHJhbnNmb3JtIDAuMnMgZWFzZSwgLXdlYmtpdC1jbGlwLXBhdGggMC4ycyBlYXNlO1xcbn1cXG4uYnRuLTEzOmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKC0xMDAlICsgdmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDEuOTkpKTtcXG59XFxuLmJ0bi0xMzpob3ZlciB7XFxuICAtLXByb2dyZXNzOiAxMDAlO1xcbn1cXG5cXG4vKiBoZWFkZXIgYnV0dG9uIHZpZXcgb24gZ2l0aHViICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuZm9vdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nOiAzcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLmZvb3RlciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5mb290ZXIgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9mb290ZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZvb3RlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBwYWRkaW5nOiAzcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5mb290ZXIgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLmZvb3RlciBhOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLy4uL2Fzc2V0cy9pY29uL2FpbS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5oZWFkZXJfX2ljb25fX2N0biB7XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcmVtO1xufVxuXG4uaGVhZGVyX19pY29uIHtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGNlbnRlci9jb250YWluIG5vLXJlcGVhdCByZWQ7XG4gIGhlaWdodDogMTAwJTtcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcbiAgYm9yZGVyLXJhZGl1czogOTlyZW07XG4gIGFuaW1hdGlvbjogcm90YXRlIDc1MG1zIGxpbmVhciAwbXMgaW5maW5pdGU7XG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xufVxuXG4uaGVhZGVyX19pY29uOmhvdmVyIHtcbiAgYW5pbWF0aW9uOiBub25lO1xufVxuXG4uaGVhZGVyX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogNnJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmhlYWRlcl9fbGluayB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9oZWFkZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnRkFBd0U7RUFDeEUsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsMkNBQTJDO0VBQzNDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5oZWFkZXJfX2ljb25fX2N0biB7XFxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbiAgcGFkZGluZy1yaWdodDogMjByZW07XFxufVxcblxcbi5oZWFkZXJfX2ljb24ge1xcbiAgYmFja2dyb3VuZDogdXJsKCcuLy4uL2Fzc2V0cy9pY29uL2FpbS5zdmcnKSBjZW50ZXIvY29udGFpbiBuby1yZXBlYXQgcmVkO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gIGJvcmRlci1yYWRpdXM6IDk5cmVtO1xcbiAgYW5pbWF0aW9uOiByb3RhdGUgNzUwbXMgbGluZWFyIDBtcyBpbmZpbml0ZTtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4uaGVhZGVyX19pY29uOmhvdmVyIHtcXG4gIGFuaW1hdGlvbjogbm9uZTtcXG59XFxuXFxuLmhlYWRlcl9fdGl0bGUge1xcbiAgZm9udC1zaXplOiA2cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5oZWFkZXJfX2xpbmsge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGUge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vLi4vYXNzZXRzL2ltZy9iYXR0bGVzaGlwLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0byAxMHJlbTtcbiAgZ2FwOiAwLjhyZW07XG59XG5cbi5nYW1lYm9hcmRfX2N0bl9fY3RuIHtcbiAgbWF4LXdpZHRoOiA1MnJlbTtcbn1cblxuLmdhbWVib2FyZF9faGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uZ2FtZWJvYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG4gIGdhcDogMXB4O1xuICB3aWR0aDogY2FsYyg1MHZ3IC0gMS42cmVtKTtcbiAgaGVpZ2h0OiBjYWxjKDUwdncgLSAxLjZyZW0pO1xuICBtYXgtd2lkdGg6IDUwcmVtO1xuICBtYXgtaGVpZ2h0OiA1MHJlbTtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGNlbnRlci9jb3ZlciBuby1yZXBlYXQgcmVkO1xufVxuXG4uZ2FtZWJvYXJkID4gZGl2IHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDAsIDApO1xufVxuXG4uZ2FtZWJvYXJkID4gLmNvbnRhaW5fX3NoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLmdhbWVib2FyZCA+IGRpdiA+IHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiA1MCU7XG4gIG1pbi1oZWlnaHQ6IDJweDtcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XG4gIGJvcmRlci1yYWRpdXM6IDk5cmVtO1xufVxuXG4uZ2FtZWJvYXJkID4gZGl2ID4gLmhpdF9fc2hvdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmdhbWVib2FyZCA+IGRpdiA+IC5taXNzX19zaG90IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuXG4uZ2FtZWJvYXJkIC5haV9fY2VsbCB7XG4gIGN1cnNvcjogY2VsbDtcbn1cblxuLmdhbWVib2FyZCAuYWlfX2NlbGw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyMiwgMjU1LCAxMjIsIDAuNSk7XG59XG5cbi5nYW1lYm9hcmQgLmFpX19jZWxsLmF0dGFja2VkIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmdhbWVib2FyZCAuYWlfX2NlbGwuYXR0YWNrZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTI2LCAxMjYsIDAuNSk7XG59XG5cbi5oZWFsdGh5IHtcbiAgYm9yZGVyLWNvbG9yOiBncmVlbiAhaW1wb3J0YW50O1xufVxuXG4ud2FybmluZyB7XG4gIGJvcmRlci1jb2xvcjogeWVsbG93ICFpbXBvcnRhbnQ7XG59XG5cbi5kZWF0aCB7XG4gIGJvcmRlci1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59XG5cbi8qIHRvIHBsYWNlIHNoaXAgaW4gdGhlIHJpZ2h0IGRpcmVjdGlvbiAqL1xuLnNoaXBfX2hlYWQudmVydGljYWwge1xuICBib3JkZXItd2lkdGg6IDRweCAwIDRweCA0cHg7XG59XG5cbi5zaGlwX19oZWFkLmhvcml6b24ge1xuICBib3JkZXItd2lkdGg6IDRweCA0cHggMCA0cHg7XG59XG5cbi5zaGlwX19ib2R5LnZlcnRpY2FsIHtcbiAgYm9yZGVyLXdpZHRoOiA0cHggMCA0cHggMDtcbn1cblxuLnNoaXBfX2JvZHkuaG9yaXpvbiB7XG4gIGJvcmRlci13aWR0aDogMCA0cHggMCA0cHg7XG59XG5cbi5zaGlwX190YWlsLnZlcnRpY2FsIHtcbiAgYm9yZGVyLXdpZHRoOiA0cHggNHB4IDRweCAwO1xufVxuXG4uc2hpcF9fdGFpbC5ob3Jpem9uIHtcbiAgYm9yZGVyLXdpZHRoOiAwIDRweCA0cHggNHB4O1xufVxuXG4uc2hpcF9fb25lX19sZW5ndGgge1xuICBib3JkZXItd2lkdGg6IDRweCAhaW1wb3J0YW50O1xufVxuXG4uZGlzcGxheV9fbWVzc2FnZSB7XG4gIGJvcmRlcjogMnB4IGRvdHRlZCByZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDk5cmVtO1xuICBwYWRkaW5nOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMnJlbSAwO1xuICBtYXgtd2lkdGg6IDUwcmVtO1xufVxuXG4uZGlzcGxheV9fbWVzc2FnZSBwIHtcbiAgbWFyZ2luOiAwIDAgMXJlbTtcbn1cblxuLmdhbWVib2FyZF9fY3RuIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5bZGF0YS1wcmV2ZW50LXNwYW1dIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTsgLyogdHJhbnNwYXJlbnQgKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBjdXJzb3I6IGNlbGw7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4KSB7XG4gIC5kaXNwbGF5X19tZXNzYWdlIHAge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsUUFBUTtFQUNSLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQiw4RUFBNEU7QUFDOUU7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBLHlDQUF5QztBQUN6QztFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCx3Q0FBd0MsRUFBRSxnQkFBZ0I7RUFDMUQsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDAgYXV0byAxMHJlbTtcXG4gIGdhcDogMC44cmVtO1xcbn1cXG5cXG4uZ2FtZWJvYXJkX19jdG5fX2N0biB7XFxuICBtYXgtd2lkdGg6IDUycmVtO1xcbn1cXG5cXG4uZ2FtZWJvYXJkX19oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ2FwOiAxcHg7XFxuICB3aWR0aDogY2FsYyg1MHZ3IC0gMS42cmVtKTtcXG4gIGhlaWdodDogY2FsYyg1MHZ3IC0gMS42cmVtKTtcXG4gIG1heC13aWR0aDogNTByZW07XFxuICBtYXgtaGVpZ2h0OiA1MHJlbTtcXG4gIGJhY2tncm91bmQ6IHVybCgnLi8uLi9hc3NldHMvaW1nL2JhdHRsZXNoaXAucG5nJykgY2VudGVyL2NvdmVyIG5vLXJlcGVhdCByZWQ7XFxufVxcblxcbi5nYW1lYm9hcmQgPiBkaXYge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDAsIDApO1xcbn1cXG5cXG4uZ2FtZWJvYXJkID4gLmNvbnRhaW5fX3NoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5nYW1lYm9hcmQgPiBkaXYgPiBzcGFuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBtaW4taGVpZ2h0OiAycHg7XFxuICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gIGJvcmRlci1yYWRpdXM6IDk5cmVtO1xcbn1cXG5cXG4uZ2FtZWJvYXJkID4gZGl2ID4gLmhpdF9fc2hvdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5nYW1lYm9hcmQgPiBkaXYgPiAubWlzc19fc2hvdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcblxcbi5nYW1lYm9hcmQgLmFpX19jZWxsIHtcXG4gIGN1cnNvcjogY2VsbDtcXG59XFxuXFxuLmdhbWVib2FyZCAuYWlfX2NlbGw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjIsIDI1NSwgMTIyLCAwLjUpO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5haV9fY2VsbC5hdHRhY2tlZCB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5haV9fY2VsbC5hdHRhY2tlZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTI2LCAxMjYsIDAuNSk7XFxufVxcblxcbi5oZWFsdGh5IHtcXG4gIGJvcmRlci1jb2xvcjogZ3JlZW4gIWltcG9ydGFudDtcXG59XFxuXFxuLndhcm5pbmcge1xcbiAgYm9yZGVyLWNvbG9yOiB5ZWxsb3cgIWltcG9ydGFudDtcXG59XFxuXFxuLmRlYXRoIHtcXG4gIGJvcmRlci1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIHRvIHBsYWNlIHNoaXAgaW4gdGhlIHJpZ2h0IGRpcmVjdGlvbiAqL1xcbi5zaGlwX19oZWFkLnZlcnRpY2FsIHtcXG4gIGJvcmRlci13aWR0aDogNHB4IDAgNHB4IDRweDtcXG59XFxuXFxuLnNoaXBfX2hlYWQuaG9yaXpvbiB7XFxuICBib3JkZXItd2lkdGg6IDRweCA0cHggMCA0cHg7XFxufVxcblxcbi5zaGlwX19ib2R5LnZlcnRpY2FsIHtcXG4gIGJvcmRlci13aWR0aDogNHB4IDAgNHB4IDA7XFxufVxcblxcbi5zaGlwX19ib2R5Lmhvcml6b24ge1xcbiAgYm9yZGVyLXdpZHRoOiAwIDRweCAwIDRweDtcXG59XFxuXFxuLnNoaXBfX3RhaWwudmVydGljYWwge1xcbiAgYm9yZGVyLXdpZHRoOiA0cHggNHB4IDRweCAwO1xcbn1cXG5cXG4uc2hpcF9fdGFpbC5ob3Jpem9uIHtcXG4gIGJvcmRlci13aWR0aDogMCA0cHggNHB4IDRweDtcXG59XFxuXFxuLnNoaXBfX29uZV9fbGVuZ3RoIHtcXG4gIGJvcmRlci13aWR0aDogNHB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kaXNwbGF5X19tZXNzYWdlIHtcXG4gIGJvcmRlcjogMnB4IGRvdHRlZCByZWQ7XFxuICBib3JkZXItcmFkaXVzOiA5OXJlbTtcXG4gIHBhZGRpbmc6IDJyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDJyZW0gMDtcXG4gIG1heC13aWR0aDogNTByZW07XFxufVxcblxcbi5kaXNwbGF5X19tZXNzYWdlIHAge1xcbiAgbWFyZ2luOiAwIDAgMXJlbTtcXG59XFxuXFxuLmdhbWVib2FyZF9fY3RuIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuW2RhdGEtcHJldmVudC1zcGFtXSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7IC8qIHRyYW5zcGFyZW50ICovXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBjdXJzb3I6IGNlbGw7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4KSB7XFxuICAuZGlzcGxheV9fbWVzc2FnZSBwIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5uYXYge1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBnYXA6IDFyZW07XG59XG5cbi53YXJuaW5nLWN0biB7XG4gIG1heC13aWR0aDogNTByZW07XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi53YXJuaW5nLWN0biBwIHtcbn1cblxuLnBvcHVwLWZvcm0tY3RuIHtcbiAgbGluZS1oZWlnaHQ6IDIuNHJlbTtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5wb3B1cC1mb3JtLXRpdGxlLWN0biB7XG59XG5cbi5wb3B1cC1mb3JtLXRpdGxlIHtcbiAgZm9udC1zaXplOiA2cmVtO1xuICBsaW5lLWhlaWdodDogOHJlbTtcbn1cblxuLmZvcm0tY3RuIHtcbiAgZmxleDogMSAxIDUwcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA1MHJlbTtcbn1cblxuLmZvcm0ge1xufVxuXG5pbnB1dCB7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4O1xufVxuXG5pbnB1dDppbnZhbGlkIHtcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XG4gIG91dGxpbmUtY29sb3I6IHJlZDtcbn1cblxuaW5wdXQ6dmFsaWQge1xuICBib3JkZXItY29sb3I6IGdyZWVuO1xuICBvdXRsaW5lLWNvbG9yOiBncmVlbjtcbn1cblxuLnN1Ym1pdC1mb3JtIHtcbn1cblxuLmNsb3NlLWZvcm0ge1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL25hdi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7QUFDQTs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsb0NBQW9DO0VBQ3BDLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtBQUNBOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0FBQ0E7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5uYXYge1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi53YXJuaW5nLWN0biB7XFxuICBtYXgtd2lkdGg6IDUwcmVtO1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuLndhcm5pbmctY3RuIHAge1xcbn1cXG5cXG4ucG9wdXAtZm9ybS1jdG4ge1xcbiAgbGluZS1oZWlnaHQ6IDIuNHJlbTtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB6LWluZGV4OiAxMDA7XFxufVxcblxcbi5wb3B1cC1mb3JtLXRpdGxlLWN0biB7XFxufVxcblxcbi5wb3B1cC1mb3JtLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNnJlbTtcXG4gIGxpbmUtaGVpZ2h0OiA4cmVtO1xcbn1cXG5cXG4uZm9ybS1jdG4ge1xcbiAgZmxleDogMSAxIDUwcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDUwcmVtO1xcbn1cXG5cXG4uZm9ybSB7XFxufVxcblxcbmlucHV0IHtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG59XFxuXFxuaW5wdXQ6aW52YWxpZCB7XFxuICBib3JkZXItY29sb3I6IHJlZDtcXG4gIG91dGxpbmUtY29sb3I6IHJlZDtcXG59XFxuXFxuaW5wdXQ6dmFsaWQge1xcbiAgYm9yZGVyLWNvbG9yOiBncmVlbjtcXG4gIG91dGxpbmUtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uc3VibWl0LWZvcm0ge1xcbn1cXG5cXG4uY2xvc2UtZm9ybSB7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXG4gICB2Mi4wIHwgMjAxMTAxMjZcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXG4qL1xuXG5odG1sLFxuYm9keSxcbmRpdixcbnNwYW4sXG5hcHBsZXQsXG5vYmplY3QsXG5pZnJhbWUsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5wLFxuYmxvY2txdW90ZSxcbnByZSxcbmEsXG5hYmJyLFxuYWNyb255bSxcbmFkZHJlc3MsXG5iaWcsXG5jaXRlLFxuY29kZSxcbmRlbCxcbmRmbixcbmVtLFxuaW1nLFxuaW5zLFxua2JkLFxucSxcbnMsXG5zYW1wLFxuc21hbGwsXG5zdHJpa2UsXG5zdHJvbmcsXG5zdWIsXG5zdXAsXG50dCxcbnZhcixcbmIsXG51LFxuaSxcbmNlbnRlcixcbmRsLFxuZHQsXG5kZCxcbm9sLFxudWwsXG5saSxcbmZpZWxkc2V0LFxuZm9ybSxcbmxhYmVsLFxubGVnZW5kLFxudGFibGUsXG5jYXB0aW9uLFxudGJvZHksXG50Zm9vdCxcbnRoZWFkLFxudHIsXG50aCxcbnRkLFxuYXJ0aWNsZSxcbmFzaWRlLFxuY2FudmFzLFxuZGV0YWlscyxcbmVtYmVkLFxuZmlndXJlLFxuZmlnY2FwdGlvbixcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5vdXRwdXQsXG5ydWJ5LFxuc2VjdGlvbixcbnN1bW1hcnksXG50aW1lLFxubWFyayxcbmF1ZGlvLFxudmlkZW8ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250OiBpbmhlcml0O1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLFxuYXNpZGUsXG5kZXRhaWxzLFxuZmlnY2FwdGlvbixcbmZpZ3VyZSxcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5zZWN0aW9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5ib2R5IHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5vbCxcbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbmJsb2NrcXVvdGUsXG5xIHtcbiAgcXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsXG5ibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsXG5xOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWlGRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsYUFBYTtFQUNiLHdCQUF3QjtBQUMxQjtBQUNBLGdEQUFnRDtBQUNoRDs7Ozs7Ozs7Ozs7RUFXRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7O0VBRUUsZ0JBQWdCO0FBQ2xCO0FBQ0E7O0VBRUUsWUFBWTtBQUNkO0FBQ0E7Ozs7RUFJRSxXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLFxcbmJvZHksXFxuZGl2LFxcbnNwYW4sXFxuYXBwbGV0LFxcbm9iamVjdCxcXG5pZnJhbWUsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxucCxcXG5ibG9ja3F1b3RlLFxcbnByZSxcXG5hLFxcbmFiYnIsXFxuYWNyb255bSxcXG5hZGRyZXNzLFxcbmJpZyxcXG5jaXRlLFxcbmNvZGUsXFxuZGVsLFxcbmRmbixcXG5lbSxcXG5pbWcsXFxuaW5zLFxcbmtiZCxcXG5xLFxcbnMsXFxuc2FtcCxcXG5zbWFsbCxcXG5zdHJpa2UsXFxuc3Ryb25nLFxcbnN1YixcXG5zdXAsXFxudHQsXFxudmFyLFxcbmIsXFxudSxcXG5pLFxcbmNlbnRlcixcXG5kbCxcXG5kdCxcXG5kZCxcXG5vbCxcXG51bCxcXG5saSxcXG5maWVsZHNldCxcXG5mb3JtLFxcbmxhYmVsLFxcbmxlZ2VuZCxcXG50YWJsZSxcXG5jYXB0aW9uLFxcbnRib2R5LFxcbnRmb290LFxcbnRoZWFkLFxcbnRyLFxcbnRoLFxcbnRkLFxcbmFydGljbGUsXFxuYXNpZGUsXFxuY2FudmFzLFxcbmRldGFpbHMsXFxuZW1iZWQsXFxuZmlndXJlLFxcbmZpZ2NhcHRpb24sXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxub3V0cHV0LFxcbnJ1YnksXFxuc2VjdGlvbixcXG5zdW1tYXJ5LFxcbnRpbWUsXFxubWFyayxcXG5hdWRpbyxcXG52aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsXFxuYXNpZGUsXFxuZGV0YWlscyxcXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5zZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLFxcbnEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbiosXG46OmJlZm9yZSxcbjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qIHtcbiAgLyogY29sb3I6IHJlZDsgKi9cbn1cblxuaHRtbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG5ib2R5IHtcbiAgZm9udC1zaXplOiAxLjZ2dztcbiAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG5hIHtcbiAgY29sb3I6IHVuc2V0O1xuICB0ZXh0LWRlY29yYXRpb246IHVuc2V0O1xufVxuXG51bCxcbmxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDNyZW07XG59XG5cbmJ1dHRvbiB7XG4gIGJvcmRlcjogdW5zZXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0FBQ3hCOztBQUVBOztFQUVFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICBmb250LXNpemU6IDEwcHg7XFxufVxcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qIHtcXG4gIC8qIGNvbG9yOiByZWQ7ICovXFxufVxcblxcbmh0bWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxLjZ2dztcXG4gIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IHVuc2V0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bnNldDtcXG59XFxuXFxudWwsXFxubGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogdW5zZXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jZW50ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J1dHRvbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J1dHRvbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXYuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXYuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiXSwibmFtZXMiOlsiRE9NIiwiR2FtZSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic3RhcnQiLCJsaXN0ZW5SZXN0YXJ0IiwibGlzdGVuU2V0dGluZyIsImxpc3RlbkNsb3NlRm9ybSIsImxpc3RlblN1Ym1pdEZvcm0iLCJfU0laRSIsIl9UT1RBTF9TSElQUyIsIl9TSElQU19NQVhfTEVOR1RIIiwiU2hpcCIsIl9jcmVhdGVDbGFzcyIsImxlbiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9jbGFzc0NhbGxDaGVjayIsIkVycm9yIiwiX2hpdHMiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidmFsdWUiLCJoaXRzIiwiZ2V0IiwiaXNTdW5rIiwiY3VycmVudEhlYWx0aCIsImhpdCIsIlBvc2l0aW9uIiwicm93IiwiY29sIiwiX2xlZ2l0IiwiQ2VsbCIsIl9pc1JlY2VpdmVkQXR0YWNrIiwiX3NoaXAiLCJyZWNlaXZlZEF0dGFjayIsIl9zaGlwMiIsInBvc2l0aW9uIiwiaXNSZWNlaXZlZEF0dGFjayIsInNoaXAiLCJzZXQiLCJuZXdTaGlwIiwic3RhdHVzIiwiR2FtZWJvYXJkIiwic2hpcHNJbmZvIiwiYm9hcmQiLCJoaXRTaG90cyIsIm1pc3NTaG90cyIsInNob3RzIiwiYWxsQ2xlYXIiLCJldmVyeSIsImluZm8iLCJzaGlwcyIsInJlZHVjZSIsInRvdGFsIiwiY3VycmVudFNoaXBJbmZvIiwic2hpcFN0YXR1cyIsImN1cnJlbnRTaGlwIiwic2hpcEhlYWx0aCIsInB1c2giLCJoZWFsdGh5IiwiZGVhdGgiLCJ3YXJuaW5nIiwicGxhY2VTaGlwcyIsInN0YXJ0UG9zaXRpb24iLCJpc1ZlcnRpY2FsIiwiZW5kUG9zaXRpb24iLCJsb2NhdGlvbnMiLCJjZWxscyIsImkiLCJjZWxsIiwiX2kiLCJfY2VsbHMiLCJfY2VsbCRzaGlwIiwiY2VsbFN0YXR1cyIsImoiLCJQbGF5ZXIiLCJrZXkiLCJyYW5kb21QbGFjZVNoaXBzIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZGlyZWN0aW9uIiwiZXJyb3IiLCJIdW1hbiIsIl9QbGF5ZXIiLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfdGhpcyIsImNhbGwiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiYXR0YWNrIiwicGxheWVyIiwiQ29tcHV0ZXIiLCJfUGxheWVyMiIsIl9zdXBlcjIiLCJfdGhpczIiLCJfcmFuZG9tQXR0YWNrIiwiZXJyIiwiX2Fyb3VuZFBvc2l0aW9ucyIsInRvcCIsIm1vdmVSb3ciLCJtb3ZlQ29sIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0Iiwibm90U3Vua0NlbGxzIiwiZm9yRWFjaCIsInBvc3NpYmxlQ2VsbHMiLCJtb3ZlIiwibmV4dENlbGxSb3ciLCJuZXh0Q2VsbENvbCIsIm5leHRDZWxsIiwiY2VsbFRvQ2hlY2siLCJzaGlmdCIsImluZGV4IiwiaW5kZXhPZiIsIl9ESUZGSUNVTFRZIiwiX2NsYXNzIiwiX2RlZmluZVByb3BlcnR5IiwibmV3U2l6ZSIsImdhbWVib2FyZEFpIiwic3R5bGUiLCJjc3NUZXh0IiwiY29uY2F0IiwiZ2FtZWJvYXJkSHVtYW4iLCJuZXdEaWZmaWN1bHR5IiwibmV3U2hpcHMiLCJwbGF5ZXJUb0NoZWNrIiwiaXNPdmVyIiwiaHVtYW4iLCJhaSIsIkRpc3BsYXkiLCJodW1hblNoaXBzIiwibWVzc2FnZSIsInByZXZlbnRTcGFtIiwiY2xhc3NMaXN0IiwiYWRkIiwibGlzdGVuSHVtYW5BdHRhY2tzIiwiaHVtYW5BdHRhY2tzU3RhdHVzIiwiaHVtYW5NZXNzYWdlIiwiYWlEZWF0aFNoaXBzIiwic3BsaXQiLCJzaG90T25Cb2FyZCIsImNoZWNrR2FtZW92ZXIiLCJzdG9wVXNlclNwYW1taW5nIiwiYWlBdHRhY2tSZXN1bHQiLCJhaU1lc3NhZ2UiLCJfY2xhc3MyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsIl9zaG93UG9wdXBGb3JtIiwid3JpdGFibGUiLCJwb3B1cEZvcm1DdG4iLCJyZW1vdmUiLCJfaGlkZVBvcHVwRm9ybSIsInJlc3RhcnQiLCJzZXR0aW5nIiwiX2NsYXNzU3RhdGljUHJpdmF0ZUZpZWxkU3BlY0dldCIsInBvcHVwRm9ybSIsInByZXZlbnREZWZhdWx0IiwiZGlmZmljdWx0eSIsImlucHV0c0RpZmZpY3VsdHkiLCJpbnB1dCIsImNoZWNrZWQiLCJpbnB1dFNpemVWYWx1ZSIsImlucHV0U2l6ZSIsImlucHV0U2hpcHNWYWx1ZSIsImlucHV0U2hpcHMiLCJ0cmltIiwiY3VycmVudCIsIl90b0NvbnN1bWFibGVBcnJheSIsImNoYW5nZURpZmZpY3VsdHkiLCJjaGFuZ2VTaXplIiwiY2hhbmdlVG90YWxTaGlwcyIsImNsb3NlRm9ybSIsInRhcmdldCIsImRhdGFzZXQiLCJodW1hblBsYXlPbmVUdXJuIiwiYWlQbGF5T25lVHVybiIsIm9uY2UiLCJjb250ZW50MCIsImNvbnRlbnQxIiwiY29udGVudDIiLCJ0YXJnZXRNZXNzYWdlIiwibWVzc2FnZUh1bWFuIiwibWVzc2FnZUFpIiwiaW5uZXJIVE1MIiwidGFyZ2V0Qm9hcmQiLCJ0eXBlIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwic2hpcFR5cGUiLCJjdXJyZW50VHlwZSIsImN1cnJlbnRMb2NhdGlvbiIsImRlYXRoU2hpcHMiLCJnYW1lYm9hcmQiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==