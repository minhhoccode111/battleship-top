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
  if (len > _dom__WEBPACK_IMPORTED_MODULE_0__._SHIPS_MAX_LENGTH || len < 1) throw new Error("Invalid ship length");
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
  if (row > _legit || col > _legit || row < 0 || col < 0) throw new Error("Position is not legit");
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
        if (_isReceivedAttack) throw new Error("Already attacked this cell");
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
        if (_ship) throw new Error("Already placed a ship on this cell");
        _ship = newShip;
      }
    },
    status: {
      get: function get() {
        if (!_isReceivedAttack) return "Not yet";
        if (_ship) return "Hit";
        return "Miss";
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
          if (shipHealth === 0) shipStatus = "death";else if (shipHealth === 1) shipStatus = "warning";else shipStatus = "healthy";
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
        if (!(ship instanceof Ship)) throw new Error("Invalid ship object");
        if (!(startPosition instanceof Position)) throw new Error("Invalid start position");
        if (typeof isVertical !== "boolean") throw new Error("Invalid direction");
        var length = ship.length;
        var endPosition = length + (isVertical ? startPosition.col : startPosition.row); // used to check if outside the gameboard

        if (endPosition > _dom__WEBPACK_IMPORTED_MODULE_0__._SIZE) throw new Error("This ship goes beyond gameboard");
        var row = startPosition.row,
          col = startPosition.col;
        var locations = [];
        var cells = [];

        // check all ship's locations first to see if something throw
        for (var i = 0; i < length; i++) {
          var cell = this.board[row][col];

          // throw and cancel place ship process if a cell already has ship on it
          if (cell.ship !== null) throw new Error("Place ship cancel because this cell already has a ship on it");

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
        if (!(position instanceof Position)) throw new Error("Invalid position");
        var row = position.row,
          col = position.col;
        var cell = this.board[row][col];
        cell.receivedAttack();
        var cellStatus = cell.status;
        var shipStatus = (_cell$ship = cell.ship) !== null && _cell$ship !== void 0 && _cell$ship.isSunk ? "Sunk" : "Not sunk";
        if (cellStatus === "Hit") this.hitShots.push(position);
        if (cellStatus === "Miss") this.missShots.push(position);
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
          if (!(position instanceof Position) || !(player.board instanceof Gameboard)) throw new Error("Invalid arguments");
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
      if (!(player.board instanceof Gameboard)) throw new Error("Invalid board");
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

    // smart attack algorithm
    _this2.attack = function (player) {
      var board = player.board.board;
      var notSunkCells = [];
      board.forEach(function (row) {
        row.forEach(function (cell) {
          if (cell.status === "Hit" && !cell.ship.isSunk) notSunkCells.push(cell);
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
            if (nextCell.status === "Hit" && !nextCell.ship.isSunk) {
              // keep getting next cell of that direction
              nextCellRow += moveRow;
              nextCellCol += moveCol;
              if (!board[nextCellRow]) break;
              nextCell = board[nextCellRow][nextCellCol];
              continue;
            }

            // save nextCell if has not been hit yet
            if (nextCell.status === "Not yet") possibleCells.push(nextCell);
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
  Display.shipsLeft(_class.human, _class.ai);

  // Display.humanShips(this.ai); // NOTE: used for display ai's ships, for testing

  Display.message(_class.human, "Press the restart button if", "you're not happy with your ships layout");
  Display.message(_class.ai, "Keep track of game alert here", "You will attack the gameboard above");
  DOM.preventSpam.classList.add("hide");
  DOM.listenHumanAttacks(_class.human, _class.ai);
});
_defineProperty(Game, "humanPlayOneTurn", function (human, ai, position) {
  var humanAttacksStatus = human.attack(position, ai);
  var humanMessage = "We shot at enemy's water and it's a miss";
  if (humanAttacksStatus.cellStatus === "Hit") {
    Display.aiDeathShips(ai);
    humanMessage = "We shot at enemy's water and it's a hit";
    if (humanAttacksStatus.shipStatus === "Sunk") humanMessage += ", we have sunk their ship";
  }
  humanMessage = humanMessage.split(",");
  Display.shotOnBoard(ai, position, humanAttacksStatus.cellStatus);
  Display.message(ai, humanMessage[0], humanMessage[1] || "");
  Display.shipsLeft(human, ai);
  if (_class.checkGameover(ai)) {
    Display.stopUserSpamming();
    Display.message(ai, "Congratulation!", "We have win the battle!", "Play again?");
    Display.message(human, "Congratulation!", "We have win the battle!", "Play again?");
  }
});
_defineProperty(Game, "aiPlayOneTurn", function (human, ai) {
  var aiAttackResult = ai.attack(human);
  var aiMessage = "Enemy shot at our water and it's a miss";
  if (aiAttackResult.cellStatus === "Hit") {
    Display.humanShips(human);
    aiMessage = "Enemy shot at our water and it's a hit";
    if (aiAttackResult.shipStatus === "Sunk") aiMessage += ", they have sunk our ship";
  }
  aiMessage = aiMessage.split(",");
  Display.shotOnBoard(human, aiAttackResult.position, aiAttackResult.cellStatus);
  Display.message(human, "Enemy is aiming...", aiMessage[0], aiMessage[1]);
  Display.shipsLeft(human, ai);
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
_defineProperty(DOM, "shipsLeftHuman", document.querySelector("[data-ships-left=\"human\"]"));
_defineProperty(DOM, "shipsLeftAi", document.querySelector("[data-ships-left=\"ai\"]"));
_defineProperty(DOM, "gameboardHuman", document.querySelector(".gameboard[data-human]"));
_defineProperty(DOM, "gameboardAi", document.querySelector(".gameboard[data-ai]"));
_defineProperty(DOM, "restart", document.querySelector("[data-restart]"));
_defineProperty(DOM, "setting", document.querySelector("[data-setting]"));
_defineProperty(DOM, "preventSpam", document.querySelector("[data-prevent-spam]"));
_defineProperty(DOM, "popupFormCtn", document.querySelector("[data-popup-form-ctn]"));
_defineProperty(DOM, "popupForm", document.querySelector("[data-popup-form]"));
_defineProperty(DOM, "submitForm", document.querySelector("[data-submit-form]"));
_defineProperty(DOM, "closeForm", document.querySelector("[data-close-form]"));
_defineProperty(DOM, "inputSize", document.querySelector("[data-form-input-size]"));
_defineProperty(DOM, "inputShips", document.querySelector("[data-form-input-ships]"));
_defineProperty(DOM, "inputsDifficulty", document.querySelectorAll('[name="difficulty"]'));
var _showPopupForm = {
  writable: true,
  value: function value() {
    return _class2.popupFormCtn.classList.remove("hide");
  }
};
var _hidePopupForm = {
  writable: true,
  value: function value() {
    return _class2.popupFormCtn.classList.add("hide");
  }
};
_defineProperty(DOM, "listenRestart", function () {
  _class2.restart.addEventListener("click", function (e) {
    Game.start();
  });
});
_defineProperty(DOM, "listenSetting", function () {
  _class2.setting.addEventListener("click", function (e) {
    _classStaticPrivateFieldSpecGet(_class2, _class2, _showPopupForm).call(_class2);
  });
});
_defineProperty(DOM, "listenSubmitForm", function () {
  _class2.popupForm.addEventListener("submit", function (e) {
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
  _class2.closeForm.addEventListener("click", function (e) {
    _classStaticPrivateFieldSpecGet(_class2, _class2, _hidePopupForm).call(_class2);
  });
});
_defineProperty(DOM, "listenHumanAttacks", function (human, ai) {
  if (!(human instanceof _class__WEBPACK_IMPORTED_MODULE_0__.Human)) throw new Error("Invalid Human");
  if (!(ai instanceof _class__WEBPACK_IMPORTED_MODULE_0__.Computer)) throw new Error("Invalid Ai");
  var cells = _class2.gameboardAi.querySelectorAll(".ai__cell");
  cells.forEach(function (cell) {
    cell.addEventListener("click", function (e) {
      e.target.classList.add("attacked");
      var row = +e.target.dataset.row;
      var col = +e.target.dataset.col;
      var position = new _class__WEBPACK_IMPORTED_MODULE_0__.Position(row, col);
      Game.humanPlayOneTurn(human, ai, position);
      if (Game.isOver) return;

      // if difficulty is 3 then there's a chance the AI will shot 1 or 2 or 3 times in a row etc. 0 exclude
      var criticalDamage = Math.floor(Math.random() * _DIFFICULTY) + 1;
      // ai play its turn base on difficulty
      for (var i = 0; i < criticalDamage; i++) {
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
  var content1 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var content2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
  var targetMessage;
  if (player instanceof _class__WEBPACK_IMPORTED_MODULE_0__.Human) targetMessage = DOM.messageHuman;else targetMessage = DOM.messageAi;
  targetMessage.innerHTML = "<p>".concat(content0, "</p><p>").concat(content1, "</p><p>").concat(content2, "</p>");
});
_defineProperty(Display, "shipsLeft", function (human, ai) {
  if (!(human instanceof _class__WEBPACK_IMPORTED_MODULE_0__.Human)) throw new Error("Invalid Human");
  if (!(ai instanceof _class__WEBPACK_IMPORTED_MODULE_0__.Computer)) throw new Error("Invalid Computer");
  var humanShipsLeft = human.board.ships.healthy.length + human.board.ships.warning.length;
  var aiShipsLeft = ai.board.ships.healthy.length + ai.board.ships.warning.length;
  console.log("human ships left belike: ", humanShipsLeft);
  console.log("ai ships left belike: ", aiShipsLeft);
  DOM.shipsLeftHuman.innerHTML = humanShipsLeft;
  DOM.shipsLeftAi.innerHTML = aiShipsLeft;
});
_defineProperty(Display, "board", function (player) {
  if (!(player instanceof _class__WEBPACK_IMPORTED_MODULE_0__.Player)) throw new Error("Invalid Player");
  var targetBoard = player instanceof _class__WEBPACK_IMPORTED_MODULE_0__.Human ? DOM.gameboardHuman : DOM.gameboardAi;
  targetBoard.innerHTML = "";
  var type = player instanceof _class__WEBPACK_IMPORTED_MODULE_0__.Human ? "human" : "ai";
  for (var i = 0; i < _SIZE; i++) {
    for (var j = 0; j < _SIZE; j++) {
      var div = document.createElement("div");
      div.classList.add("center");
      div.classList.add("".concat(type, "__cell"));
      div.dataset.row = i;
      div.dataset.col = j;
      targetBoard.appendChild(div);
    }
  }
});
_defineProperty(Display, "humanShips", function (player) {
  if (!(player instanceof _class__WEBPACK_IMPORTED_MODULE_0__.Player)) throw new Error("Invalid Player");
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
        var cell = player instanceof _class__WEBPACK_IMPORTED_MODULE_0__.Human ? DOM.gameboardHuman.querySelector("[data-row=\"".concat(row, "\"][data-col=\"").concat(col, "\"]")) :
        // for testing purpose
        DOM.gameboardAi.querySelector("[data-row=\"".concat(row, "\"][data-col=\"").concat(col, "\"]"));
        cell.classList.add(shipType);
        if (locations.length === 1) {
          cell.classList.add("ship__one__length");
          continue;
        }
        if (isVertical) cell.classList.add("vertical");else cell.classList.add("horizon");
        if (!j) cell.classList.add("ship__head");else if (j === locations.length - 1) cell.classList.add("ship__tail");else cell.classList.add("ship__body");
      }
    }
  }
});
_defineProperty(Display, "aiDeathShips", function (player) {
  if (!(player instanceof _class__WEBPACK_IMPORTED_MODULE_0__.Player)) throw new Error("Invalid Player");
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
      cell.classList.add("death");
      if (locations.length === 1) {
        cell.classList.add("ship__one__length");
        continue;
      }
      if (isVertical) cell.classList.add("vertical");else cell.classList.add("horizon");
      if (!j) cell.classList.add("ship__head");else if (j === locations.length - 1) cell.classList.add("ship__tail");else cell.classList.add("ship__body");
    }
  }
});
_defineProperty(Display, "shotOnBoard", function (player, position, status) {
  if (!(position instanceof _class__WEBPACK_IMPORTED_MODULE_0__.Position) || !(player instanceof _class__WEBPACK_IMPORTED_MODULE_0__.Player)) throw new Error("Invalid argument");
  var row = position.row,
    col = position.col;
  var gameboard;
  if (player instanceof _class__WEBPACK_IMPORTED_MODULE_0__.Human) gameboard = DOM.gameboardHuman;else gameboard = DOM.gameboardAi;
  var cell = gameboard.querySelector("[data-col=\"".concat(col, "\"][data-row=\"").concat(row, "\"]"));
  var span = document.createElement("span");
  if (status === "Hit") span.classList.add("hit__shot");else span.classList.add("miss__shot");
  cell.appendChild(span);
});
_defineProperty(Display, "stopUserSpamming", function () {
  DOM.preventSpam.classList.remove("hide");
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
  cursor: crosshair;
  font-family:
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Helvetica Neue,
    Arial,
    Noto Sans,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji,
    Segoe UI Symbol,
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
  content: "";
  inset: 0;
  position: absolute;
  transform: translateX(calc(100% - var(--progress, 0%) / 1.99));
  transition:
    transform 0.2s ease,
    -webkit-clip-path 0.2s ease;
  transition:
    clip-path 0.2s ease,
    transform 0.2s ease;
  transition:
    clip-path 0.2s ease,
    transform 0.2s ease,
    -webkit-clip-path 0.2s ease;
}
.btn-13:after {
  transform: translateX(calc(-100% + var(--progress, 0%) / 1.99));
}
.btn-13:hover {
  --progress: 100%;
}

/* header button view on github */
`, "",{"version":3,"sources":["webpack://./src/css/button.css"],"names":[],"mappings":"AAAA,iCAAiC;AACjC;;;;;;EAME,eAAe;EACf,sBAAsB;AACxB;AACA;EACE,wCAAwC;EACxC,0BAA0B;EAC1B,sBAAsB;EACtB,sBAAsB;EACtB,cAAc;EACd,iBAAiB;EACjB;;;;;;;;;;;;;;oBAckB;EAClB,eAAe;EACf,gBAAgB;EAChB,gBAAgB;EAChB,SAAS;EACT,6DAA6D;EAC7D,UAAU;EACV,yBAAyB;AAC3B;AACA;EACE,eAAe;AACjB;AACA;EACE,aAAa;AACf;AACA;EACE,cAAc;EACd,sBAAsB;AACxB;AACA;EACE,aAAa;AACf;AACA;EACE,oBAAoB;EACpB,iBAAiB;EACjB,gBAAgB;EAChB,oBAAoB;EACpB,kBAAkB;AACpB;AACA;EACE,gCAAgC;EAChC,kBAAkB;EAClB,UAAU;AACZ;AACA;;EAEE,4BAA4B;EAC5B;;;;;;;;;;;GAWC;EACD;;;;;;;;;;;GAWC;EACD,WAAW;EACX,QAAQ;EACR,kBAAkB;EAClB,8DAA8D;EAC9D;;+BAE6B;EAC7B;;uBAEqB;EACrB;;;+BAG6B;AAC/B;AACA;EACE,+DAA+D;AACjE;AACA;EACE,gBAAgB;AAClB;;AAEA,iCAAiC","sourcesContent":["/* header button view on github */\n.btn-13,\n.btn-13 *,\n.btn-13 :after,\n.btn-13 :before,\n.btn-13:after,\n.btn-13:before {\n  border: 0 solid;\n  box-sizing: border-box;\n}\n.btn-13 {\n  -webkit-tap-highlight-color: transparent;\n  -webkit-appearance: button;\n  background-color: #000;\n  background-image: none;\n  color: #ff0000;\n  cursor: crosshair;\n  font-family:\n    ui-sans-serif,\n    system-ui,\n    -apple-system,\n    BlinkMacSystemFont,\n    Segoe UI,\n    Roboto,\n    Helvetica Neue,\n    Arial,\n    Noto Sans,\n    sans-serif,\n    Apple Color Emoji,\n    Segoe UI Emoji,\n    Segoe UI Symbol,\n    Noto Color Emoji;\n  font-size: 100%;\n  font-weight: 900;\n  line-height: 1.5;\n  margin: 0;\n  /* -webkit-mask-image: -webkit-radial-gradient(#000, #fff); */\n  padding: 0;\n  text-transform: uppercase;\n}\n.btn-13:disabled {\n  cursor: default;\n}\n.btn-13:-moz-focusring {\n  outline: auto;\n}\n.btn-13 svg {\n  display: block;\n  vertical-align: middle;\n}\n.btn-13 [hidden] {\n  display: none;\n}\n.btn-13 {\n  border-radius: 99rem;\n  border-width: 2px;\n  overflow: hidden;\n  padding: 0.8rem 3rem;\n  position: relative;\n}\n.btn-13 span {\n  /* mix-blend-mode: difference; */\n  position: relative;\n  z-index: 1;\n}\n.btn-13:after,\n.btn-13:before {\n  background: rgb(143, 67, 67);\n  -webkit-clip-path: polygon(\n    0 0,\n    100% 0,\n    100% calc(var(--progress, 0%) / 2),\n    0 calc(var(--progress, 0%) / 2),\n    0 0,\n    0 calc(100% - var(--progress, 0%) / 2),\n    100% calc(100% - var(--progress, 0%) / 2),\n    100% 100%,\n    0 100%,\n    0 calc(100% - var(--progress, 0%) / 2)\n  );\n  clip-path: polygon(\n    0 0,\n    100% 0,\n    100% calc(var(--progress, 0%) / 2),\n    0 calc(var(--progress, 0%) / 2),\n    0 0,\n    0 calc(100% - var(--progress, 0%) / 2),\n    100% calc(100% - var(--progress, 0%) / 2),\n    100% 100%,\n    0 100%,\n    0 calc(100% - var(--progress, 0%) / 2)\n  );\n  content: \"\";\n  inset: 0;\n  position: absolute;\n  transform: translateX(calc(100% - var(--progress, 0%) / 1.99));\n  transition:\n    transform 0.2s ease,\n    -webkit-clip-path 0.2s ease;\n  transition:\n    clip-path 0.2s ease,\n    transform 0.2s ease;\n  transition:\n    clip-path 0.2s ease,\n    transform 0.2s ease,\n    -webkit-clip-path 0.2s ease;\n}\n.btn-13:after {\n  transform: translateX(calc(-100% + var(--progress, 0%) / 1.99));\n}\n.btn-13:hover {\n  --progress: 100%;\n}\n\n/* header button view on github */\n"],"sourceRoot":""}]);
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

.display__ships__left {
  text-align: center;
  padding-top: 1rem;
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
  cursor: crosshair;
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
  /* border-radius: 99rem; */
  padding: 1rem;
  text-align: center;
  margin: 2rem 0;
  max-width: 50rem;
}

.display__message p {
  margin: 0 0 0.4rem;
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
`, "",{"version":3,"sources":["webpack://./src/css/main.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,uBAAuB;EACvB,WAAW;EACX,oBAAoB;EACpB,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,QAAQ;EACR,0BAA0B;EAC1B,2BAA2B;EAC3B,gBAAgB;EAChB,iBAAiB;EACjB,8EAA4E;AAC9E;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,4BAA4B;AAC9B;;AAEA,yCAAyC;AACzC;EACE,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,sBAAsB;EACtB,0BAA0B;EAC1B,aAAa;EACb,kBAAkB;EAClB,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,wCAAwC,EAAE,gBAAgB;EAC1D,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,YAAY;AACd;;AAEA;EACE;IACE,eAAe;EACjB;AACF","sourcesContent":[".main {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  width: 100%;\n  margin: 0 auto 10rem;\n  gap: 0.8rem;\n}\n\n.gameboard__ctn__ctn {\n  max-width: 52rem;\n}\n\n.gameboard__header {\n  text-align: center;\n  padding: 1rem;\n  margin-bottom: 1rem;\n  white-space: nowrap;\n}\n\n.display__ships__left {\n  text-align: center;\n  padding-top: 1rem;\n  white-space: nowrap;\n}\n\n.gameboard {\n  border: 1px solid red;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  gap: 1px;\n  width: calc(50vw - 1.6rem);\n  height: calc(50vw - 1.6rem);\n  max-width: 50rem;\n  max-height: 50rem;\n  background: url(\"./../assets/img/battleship.png\") center/cover no-repeat red;\n}\n\n.gameboard > div {\n  border: 1px solid rgb(0, 0, 0);\n}\n\n.gameboard > .contain__ship {\n  background-color: black;\n}\n\n.gameboard > div > span {\n  display: block;\n  height: 50%;\n  min-height: 2px;\n  aspect-ratio: 1/1;\n  border-radius: 99rem;\n}\n\n.gameboard > div > .hit__shot {\n  background-color: red;\n}\n\n.gameboard > div > .miss__shot {\n  background-color: rgb(255, 255, 255);\n}\n\n.gameboard .ai__cell {\n  cursor: crosshair;\n}\n\n.gameboard .ai__cell:hover {\n  background-color: rgba(122, 255, 122, 0.5);\n}\n\n.gameboard .ai__cell.attacked {\n  cursor: not-allowed;\n}\n\n.gameboard .ai__cell.attacked:hover {\n  background-color: rgba(255, 126, 126, 0.5);\n}\n\n.healthy {\n  border-color: green !important;\n}\n\n.warning {\n  border-color: yellow !important;\n}\n\n.death {\n  border-color: red !important;\n}\n\n/* to place ship in the right direction */\n.ship__head.vertical {\n  border-width: 4px 0 4px 4px;\n}\n\n.ship__head.horizon {\n  border-width: 4px 4px 0 4px;\n}\n\n.ship__body.vertical {\n  border-width: 4px 0 4px 0;\n}\n\n.ship__body.horizon {\n  border-width: 0 4px 0 4px;\n}\n\n.ship__tail.vertical {\n  border-width: 4px 4px 4px 0;\n}\n\n.ship__tail.horizon {\n  border-width: 0 4px 4px 4px;\n}\n\n.ship__one__length {\n  border-width: 4px !important;\n}\n\n.display__message {\n  border: 2px dotted red;\n  /* border-radius: 99rem; */\n  padding: 1rem;\n  text-align: center;\n  margin: 2rem 0;\n  max-width: 50rem;\n}\n\n.display__message p {\n  margin: 0 0 0.4rem;\n}\n\n.gameboard__ctn {\n  position: relative;\n}\n\n[data-prevent-spam] {\n  height: 100%;\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0); /* transparent */\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  cursor: cell;\n}\n\n@media screen and (min-width: 900px) {\n  .display__message p {\n    font-size: 2rem;\n  }\n}\n"],"sourceRoot":""}]);
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

html {
  background-color: black;
}

body {
  font-size: 1vw;
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
  font-size: 2rem;
}

h2 {
  font-size: 2rem;
}

button {
  border: unset;
  cursor: crosshair;
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.hide {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;EACE,eAAe;AACjB;;AAEA;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,cAAc;EACd,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,sBAAsB;AACxB;;AAEA;;EAEE,qBAAqB;AACvB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf","sourcesContent":[":root {\n  font-size: 10px;\n}\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\nhtml {\n  background-color: black;\n}\n\nbody {\n  font-size: 1vw;\n  color: rgb(255, 0, 0);\n  font-weight: bolder;\n}\n\na {\n  color: unset;\n  text-decoration: unset;\n}\n\nul,\nli {\n  list-style-type: none;\n}\n\nh1 {\n  font-size: 2rem;\n}\n\nh2 {\n  font-size: 2rem;\n}\n\nbutton {\n  border: unset;\n  cursor: crosshair;\n}\n\n.center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.hide {\n  display: none;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9qcy9jbGFzcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvanMvZG9tLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9jc3MvYnV0dG9uLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvY3NzL2Zvb3Rlci5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9oZWFkZXIuY3NzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9jc3MvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9uYXYuY3NzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9jc3MvcmVzZXQuY3NzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvY3NzL2J1dHRvbi5jc3M/NzJhOSIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvY3NzL2Zvb3Rlci5jc3M/YWI4YyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvY3NzL2hlYWRlci5jc3M/OGFjMSIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvY3NzL21haW4uY3NzPzJjOWYiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9uYXYuY3NzPzExZGMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9yZXNldC5jc3M/MTUyYiIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2Nzcy9uYXYuY3NzJztcbmltcG9ydCAnLi9jc3MvbWFpbi5jc3MnO1xuaW1wb3J0ICcuL2Nzcy9yZXNldC5jc3MnO1xuaW1wb3J0ICcuL2Nzcy9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL2Nzcy9mb290ZXIuY3NzJztcbmltcG9ydCAnLi9jc3MvYnV0dG9uLmNzcyc7XG5pbXBvcnQgJy4vY3NzL2hlYWRlci5jc3MnO1xuXG4vLyBpbXBvcnQgQWltIGZyb20gJy4vYXNzZXRzL2ljb24vYWltLnN2Zyc7XG4vLyBpbXBvcnQgQmF0dGxlc2hpcCBmcm9tICcuL2Fzc2V0cy9pbWcvYmF0dGxlc2hpcC5wbmcnO1xuXG5pbXBvcnQgJy4vanMvZG9tLmpzJztcbmltcG9ydCAnLi9qcy9jbGFzcy5qcyc7XG5pbXBvcnQgJy4vanMvYW5pbWF0aW9uLmpzJztcblxuaW1wb3J0IHsgRE9NLCBHYW1lIH0gZnJvbSAnLi9qcy9kb20uanMnO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChlKSA9PiB7XG4gIC8vIEdhbWUuY2hhbmdlU2l6ZSgyNSk7XG5cbiAgLy8gR2FtZS5jaGFuZ2VUb3RhbFNoaXBzKFsxLCAxLCAyLCAyLCAzLCAzLCA0LCA1XSk7XG5cbiAgLy8gR2FtZS5jaGFuZ2VEaWZmaWN1bHR5KCczJyk7XG5cbiAgR2FtZS5zdGFydCgpO1xuXG4gIERPTS5saXN0ZW5SZXN0YXJ0KCk7XG5cbiAgRE9NLmxpc3RlblNldHRpbmcoKTtcblxuICBET00ubGlzdGVuQ2xvc2VGb3JtKCk7XG5cbiAgRE9NLmxpc3RlblN1Ym1pdEZvcm0oKTtcbn0pO1xuIiwiaW1wb3J0IHsgX1NJWkUsIF9UT1RBTF9TSElQUywgX1NISVBTX01BWF9MRU5HVEgsIEdhbWUgfSBmcm9tIFwiLi9kb21cIjtcblxuZXhwb3J0IGNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW4gPSAzKSB7XG4gICAgaWYgKGxlbiA+IF9TSElQU19NQVhfTEVOR1RIIHx8IGxlbiA8IDEpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHNoaXAgbGVuZ3RoXCIpO1xuXG4gICAgbGV0IF9oaXRzID0gMDtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgIGxlbmd0aDoge1xuICAgICAgICB2YWx1ZTogbGVuLFxuICAgICAgfSxcblxuICAgICAgaGl0czoge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIF9oaXRzO1xuICAgICAgICB9LFxuICAgICAgfSxcblxuICAgICAgaXNTdW5rOiB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50SGVhbHRoID0gdGhpcy5sZW5ndGggLSBfaGl0cztcblxuICAgICAgICAgIHJldHVybiBjdXJyZW50SGVhbHRoIDwgMTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG5cbiAgICAgIGhpdDoge1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0aGlzLmlzU3VuaykgdGhyb3cgbmV3IEVycm9yKGBDYW4ndCBhdHRhY2sgc3VuayBzaGlwYCk7XG5cbiAgICAgICAgICBfaGl0cysrO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUG9zaXRpb24ge1xuICBjb25zdHJ1Y3Rvcihyb3csIGNvbCkge1xuICAgIGNvbnN0IF9sZWdpdCA9IF9TSVpFIC0gMTtcblxuICAgIGlmIChyb3cgPiBfbGVnaXQgfHwgY29sID4gX2xlZ2l0IHx8IHJvdyA8IDAgfHwgY29sIDwgMClcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlBvc2l0aW9uIGlzIG5vdCBsZWdpdFwiKTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgIHJvdzoge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHJvdztcbiAgICAgICAgfSxcbiAgICAgIH0sXG5cbiAgICAgIGNvbDoge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbDtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENlbGwge1xuICBjb25zdHJ1Y3Rvcihyb3csIGNvbCkge1xuICAgIGxldCBfaXNSZWNlaXZlZEF0dGFjayA9IGZhbHNlO1xuXG4gICAgbGV0IF9zaGlwID0gbnVsbDtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgIHJlY2VpdmVkQXR0YWNrOiB7XG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKF9pc1JlY2VpdmVkQXR0YWNrKSB0aHJvdyBuZXcgRXJyb3IoXCJBbHJlYWR5IGF0dGFja2VkIHRoaXMgY2VsbFwiKTtcblxuICAgICAgICAgIF9pc1JlY2VpdmVkQXR0YWNrID0gdHJ1ZTtcblxuICAgICAgICAgIF9zaGlwPy5oaXQoKTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG5cbiAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIHZhbHVlOiBuZXcgUG9zaXRpb24ocm93LCBjb2wpLFxuICAgICAgfSxcblxuICAgICAgaXNSZWNlaXZlZEF0dGFjazoge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIF9pc1JlY2VpdmVkQXR0YWNrO1xuICAgICAgICB9LFxuICAgICAgfSxcblxuICAgICAgc2hpcDoge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIF9zaGlwO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldChuZXdTaGlwKSB7XG4gICAgICAgICAgaWYgKF9zaGlwKSB0aHJvdyBuZXcgRXJyb3IoXCJBbHJlYWR5IHBsYWNlZCBhIHNoaXAgb24gdGhpcyBjZWxsXCIpO1xuXG4gICAgICAgICAgX3NoaXAgPSBuZXdTaGlwO1xuICAgICAgICB9LFxuICAgICAgfSxcblxuICAgICAgc3RhdHVzOiB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICBpZiAoIV9pc1JlY2VpdmVkQXR0YWNrKSByZXR1cm4gXCJOb3QgeWV0XCI7XG5cbiAgICAgICAgICBpZiAoX3NoaXApIHJldHVybiBcIkhpdFwiO1xuXG4gICAgICAgICAgcmV0dXJuIFwiTWlzc1wiO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgc2hpcHNJbmZvOiB7IHZhbHVlOiBbXSB9LFxuXG4gICAgICBib2FyZDogeyB2YWx1ZTogW10gfSxcblxuICAgICAgaGl0U2hvdHM6IHsgdmFsdWU6IFtdIH0sXG5cbiAgICAgIG1pc3NTaG90czogeyB2YWx1ZTogW10gfSxcblxuICAgICAgc2hvdHM6IHsgdmFsdWU6IFtdIH0sXG5cbiAgICAgIGFsbENsZWFyOiB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zaGlwc0luZm8uZXZlcnkoKGluZm8pID0+IGluZm8uc2hpcC5pc1N1bmspO1xuICAgICAgICB9LFxuICAgICAgfSxcblxuICAgICAgc2hpcHM6IHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIC8vIHBsYWNlIHNoaXBzIGludG8gY2F0ZWdvcnkgYmFzZSBvbiB0aGVpciBzdGF0dXM6IGhlYWx0aHksIHdhcm5pbmcsIGRlYXRoXG4gICAgICAgICAgcmV0dXJuIHRoaXMuc2hpcHNJbmZvLnJlZHVjZShcbiAgICAgICAgICAgICh0b3RhbCwgY3VycmVudFNoaXBJbmZvKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBzaGlwU3RhdHVzO1xuXG4gICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTaGlwID0gY3VycmVudFNoaXBJbmZvLnNoaXA7XG5cbiAgICAgICAgICAgICAgY29uc3Qgc2hpcEhlYWx0aCA9IGN1cnJlbnRTaGlwLmxlbmd0aCAtIGN1cnJlbnRTaGlwLmhpdHM7XG5cbiAgICAgICAgICAgICAgaWYgKHNoaXBIZWFsdGggPT09IDApIHNoaXBTdGF0dXMgPSBcImRlYXRoXCI7XG4gICAgICAgICAgICAgIGVsc2UgaWYgKHNoaXBIZWFsdGggPT09IDEpIHNoaXBTdGF0dXMgPSBcIndhcm5pbmdcIjtcbiAgICAgICAgICAgICAgZWxzZSBzaGlwU3RhdHVzID0gXCJoZWFsdGh5XCI7XG5cbiAgICAgICAgICAgICAgdG90YWxbc2hpcFN0YXR1c10ucHVzaChjdXJyZW50U2hpcEluZm8pO1xuXG4gICAgICAgICAgICAgIHJldHVybiB0b3RhbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IGhlYWx0aHk6IFtdLCBkZWF0aDogW10sIHdhcm5pbmc6IFtdIH0sXG4gICAgICAgICAgKTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG5cbiAgICAgIHBsYWNlU2hpcHM6IHtcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIChzaGlwLCBzdGFydFBvc2l0aW9uLCBpc1ZlcnRpY2FsKSB7XG4gICAgICAgICAgaWYgKCEoc2hpcCBpbnN0YW5jZW9mIFNoaXApKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHNoaXAgb2JqZWN0XCIpO1xuXG4gICAgICAgICAgaWYgKCEoc3RhcnRQb3NpdGlvbiBpbnN0YW5jZW9mIFBvc2l0aW9uKSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgc3RhcnQgcG9zaXRpb25cIik7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGlzVmVydGljYWwgIT09IFwiYm9vbGVhblwiKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBkaXJlY3Rpb25cIik7XG5cbiAgICAgICAgICBjb25zdCBsZW5ndGggPSBzaGlwLmxlbmd0aDtcblxuICAgICAgICAgIGNvbnN0IGVuZFBvc2l0aW9uID1cbiAgICAgICAgICAgIGxlbmd0aCArIChpc1ZlcnRpY2FsID8gc3RhcnRQb3NpdGlvbi5jb2wgOiBzdGFydFBvc2l0aW9uLnJvdyk7IC8vIHVzZWQgdG8gY2hlY2sgaWYgb3V0c2lkZSB0aGUgZ2FtZWJvYXJkXG5cbiAgICAgICAgICBpZiAoZW5kUG9zaXRpb24gPiBfU0laRSlcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgc2hpcCBnb2VzIGJleW9uZCBnYW1lYm9hcmRcIik7XG5cbiAgICAgICAgICBsZXQgeyByb3csIGNvbCB9ID0gc3RhcnRQb3NpdGlvbjtcblxuICAgICAgICAgIGNvbnN0IGxvY2F0aW9ucyA9IFtdO1xuXG4gICAgICAgICAgY29uc3QgY2VsbHMgPSBbXTtcblxuICAgICAgICAgIC8vIGNoZWNrIGFsbCBzaGlwJ3MgbG9jYXRpb25zIGZpcnN0IHRvIHNlZSBpZiBzb21ldGhpbmcgdGhyb3dcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5ib2FyZFtyb3ddW2NvbF07XG5cbiAgICAgICAgICAgIC8vIHRocm93IGFuZCBjYW5jZWwgcGxhY2Ugc2hpcCBwcm9jZXNzIGlmIGEgY2VsbCBhbHJlYWR5IGhhcyBzaGlwIG9uIGl0XG4gICAgICAgICAgICBpZiAoY2VsbC5zaGlwICE9PSBudWxsKVxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgXCJQbGFjZSBzaGlwIGNhbmNlbCBiZWNhdXNlIHRoaXMgY2VsbCBhbHJlYWR5IGhhcyBhIHNoaXAgb24gaXRcIixcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgLy8gc2F2ZSBjZWxscyB3aGljaCBpcyBsZWdpdCB0byB1c2UgbGF0ZXJcbiAgICAgICAgICAgIGNlbGxzLnB1c2goY2VsbCk7XG5cbiAgICAgICAgICAgIC8vIGxvY2F0aW9ucyB0byB1cGRhdGUgZ2FtZWJvYXJkLnNoaXBzSW5mb1xuICAgICAgICAgICAgbG9jYXRpb25zLnB1c2gobmV3IFBvc2l0aW9uKHJvdywgY29sKSk7XG5cbiAgICAgICAgICAgIGlzVmVydGljYWwgPyBjb2wrKyA6IHJvdysrOyAvLyBpbmNyZWFzZSBiYXNlZCBvbiBkaXJlY3Rpb25cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyB0aGUgbG9vcCB0aHJvdWdoIGFsbCBsZWdpdCBjZWxscyB0byBhY3R1YWxseSBwbGFjZSBzaGlwIGFmdGVyIG5vdGhpbmcgZ290IHRocm93XG4gICAgICAgICAgZm9yIChjb25zdCBjZWxsIG9mIGNlbGxzKSB7XG4gICAgICAgICAgICBjZWxsLnNoaXAgPSBzaGlwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuc2hpcHNJbmZvLnB1c2goeyBsb2NhdGlvbnMsIGlzVmVydGljYWwsIHNoaXA6IHNoaXAgfSk7XG4gICAgICAgIH0sXG4gICAgICB9LFxuXG4gICAgICByZWNlaXZlZEF0dGFjazoge1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHBvc2l0aW9uKSB7XG4gICAgICAgICAgaWYgKCEocG9zaXRpb24gaW5zdGFuY2VvZiBQb3NpdGlvbikpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHBvc2l0aW9uXCIpO1xuXG4gICAgICAgICAgY29uc3QgeyByb3csIGNvbCB9ID0gcG9zaXRpb247XG5cbiAgICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5ib2FyZFtyb3ddW2NvbF07XG5cbiAgICAgICAgICBjZWxsLnJlY2VpdmVkQXR0YWNrKCk7XG5cbiAgICAgICAgICBjb25zdCBjZWxsU3RhdHVzID0gY2VsbC5zdGF0dXM7XG5cbiAgICAgICAgICBjb25zdCBzaGlwU3RhdHVzID0gY2VsbC5zaGlwPy5pc1N1bmsgPyBcIlN1bmtcIiA6IFwiTm90IHN1bmtcIjtcblxuICAgICAgICAgIGlmIChjZWxsU3RhdHVzID09PSBcIkhpdFwiKSB0aGlzLmhpdFNob3RzLnB1c2gocG9zaXRpb24pO1xuXG4gICAgICAgICAgaWYgKGNlbGxTdGF0dXMgPT09IFwiTWlzc1wiKSB0aGlzLm1pc3NTaG90cy5wdXNoKHBvc2l0aW9uKTtcblxuICAgICAgICAgIHRoaXMuc2hvdHMucHVzaChwb3NpdGlvbik7XG5cbiAgICAgICAgICByZXR1cm4geyBjZWxsU3RhdHVzLCBzaGlwU3RhdHVzLCBwb3NpdGlvbiB9O1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX1NJWkU7IGkrKykge1xuICAgICAgdGhpcy5ib2FyZC5wdXNoKFtdKTtcblxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBfU0laRTsgaisrKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbaV0ucHVzaChuZXcgQ2VsbChpLCBqKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICBib2FyZDoge1xuICAgICAgICB2YWx1ZTogbmV3IEdhbWVib2FyZCgpLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHJhbmRvbVBsYWNlU2hpcHMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfVE9UQUxfU0hJUFMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIF9TSVpFKTtcblxuICAgICAgICBjb25zdCBjb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBfU0laRSk7XG5cbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9zaXRpb24ocm93LCBjb2wpO1xuXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9ICEhTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG5cbiAgICAgICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKF9UT1RBTF9TSElQU1tpXSk7XG5cbiAgICAgICAgdGhpcy5ib2FyZC5wbGFjZVNoaXBzKHNoaXAsIHBvc2l0aW9uLCBkaXJlY3Rpb24pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaS0tO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEh1bWFuIGV4dGVuZHMgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgIGF0dGFjazoge1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHBvc2l0aW9uLCBwbGF5ZXIpIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhKHBvc2l0aW9uIGluc3RhbmNlb2YgUG9zaXRpb24pIHx8XG4gICAgICAgICAgICAhKHBsYXllci5ib2FyZCBpbnN0YW5jZW9mIEdhbWVib2FyZClcbiAgICAgICAgICApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGFyZ3VtZW50c1wiKTtcblxuICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IHBsYXllci5ib2FyZC5yZWNlaXZlZEF0dGFjayhwb3NpdGlvbik7XG5cbiAgICAgICAgICByZXR1cm4gc3RhdHVzO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29tcHV0ZXIgZXh0ZW5kcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgY29uc3QgX3JhbmRvbUF0dGFjayA9IChwbGF5ZXIpID0+IHtcbiAgICAgIGlmICghKHBsYXllci5ib2FyZCBpbnN0YW5jZW9mIEdhbWVib2FyZCkpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgYm9hcmRcIik7XG5cbiAgICAgIGNvbnN0IGxlbmd0aCA9IHBsYXllci5ib2FyZC5zaG90cy5sZW5ndGg7XG5cbiAgICAgIHdoaWxlIChsZW5ndGggPT09IHBsYXllci5ib2FyZC5zaG90cy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogX1NJWkUpO1xuXG4gICAgICAgIGNvbnN0IGNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIF9TSVpFKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKHJvdywgY29sKTtcblxuICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IHBsYXllci5ib2FyZC5yZWNlaXZlZEF0dGFjayhwb3NpdGlvbik7XG5cbiAgICAgICAgICByZXR1cm4gc3RhdHVzO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IF9hcm91bmRQb3NpdGlvbnMgPSB7XG4gICAgICB0b3A6IHsgbW92ZVJvdzogLTEsIG1vdmVDb2w6IDAgfSxcblxuICAgICAgYm90dG9tOiB7IG1vdmVSb3c6IDEsIG1vdmVDb2w6IDAgfSxcblxuICAgICAgbGVmdDogeyBtb3ZlUm93OiAwLCBtb3ZlQ29sOiAtMSB9LFxuXG4gICAgICByaWdodDogeyBtb3ZlUm93OiAwLCBtb3ZlQ29sOiAxIH0sXG4gICAgfTtcblxuICAgIC8vIHNtYXJ0IGF0dGFjayBhbGdvcml0aG1cbiAgICB0aGlzLmF0dGFjayA9IChwbGF5ZXIpID0+IHtcbiAgICAgIGNvbnN0IGJvYXJkID0gcGxheWVyLmJvYXJkLmJvYXJkO1xuXG4gICAgICBjb25zdCBub3RTdW5rQ2VsbHMgPSBbXTtcblxuICAgICAgYm9hcmQuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICAgIHJvdy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgICAgaWYgKGNlbGwuc3RhdHVzID09PSBcIkhpdFwiICYmICFjZWxsLnNoaXAuaXNTdW5rKVxuICAgICAgICAgICAgbm90U3Vua0NlbGxzLnB1c2goY2VsbCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHBvc3NpYmxlQ2VsbHMgPSBbXTtcblxuICAgICAgbm90U3Vua0NlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgZm9yIChjb25zdCBkaXJlY3Rpb24gaW4gX2Fyb3VuZFBvc2l0aW9ucykge1xuICAgICAgICAgIGNvbnN0IG1vdmUgPSBfYXJvdW5kUG9zaXRpb25zW2RpcmVjdGlvbl07XG5cbiAgICAgICAgICBjb25zdCB7IG1vdmVSb3csIG1vdmVDb2wgfSA9IG1vdmU7XG5cbiAgICAgICAgICBsZXQgbmV4dENlbGxSb3cgPSBjZWxsLnBvc2l0aW9uLnJvdyArIG1vdmVSb3c7XG5cbiAgICAgICAgICBsZXQgbmV4dENlbGxDb2wgPSBjZWxsLnBvc2l0aW9uLmNvbCArIG1vdmVDb2w7XG5cbiAgICAgICAgICBpZiAoIWJvYXJkW25leHRDZWxsUm93XSkgY29udGludWU7XG5cbiAgICAgICAgICBsZXQgbmV4dENlbGwgPSBib2FyZFtuZXh0Q2VsbFJvd11bbmV4dENlbGxDb2xdO1xuXG4gICAgICAgICAgd2hpbGUgKG5leHRDZWxsKSB7XG4gICAgICAgICAgICBpZiAobmV4dENlbGwuc3RhdHVzID09PSBcIkhpdFwiICYmICFuZXh0Q2VsbC5zaGlwLmlzU3Vuaykge1xuICAgICAgICAgICAgICAvLyBrZWVwIGdldHRpbmcgbmV4dCBjZWxsIG9mIHRoYXQgZGlyZWN0aW9uXG4gICAgICAgICAgICAgIG5leHRDZWxsUm93ICs9IG1vdmVSb3c7XG5cbiAgICAgICAgICAgICAgbmV4dENlbGxDb2wgKz0gbW92ZUNvbDtcblxuICAgICAgICAgICAgICBpZiAoIWJvYXJkW25leHRDZWxsUm93XSkgYnJlYWs7XG5cbiAgICAgICAgICAgICAgbmV4dENlbGwgPSBib2FyZFtuZXh0Q2VsbFJvd11bbmV4dENlbGxDb2xdO1xuXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBzYXZlIG5leHRDZWxsIGlmIGhhcyBub3QgYmVlbiBoaXQgeWV0XG4gICAgICAgICAgICBpZiAobmV4dENlbGwuc3RhdHVzID09PSBcIk5vdCB5ZXRcIikgcG9zc2libGVDZWxscy5wdXNoKG5leHRDZWxsKTtcblxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKCFwb3NzaWJsZUNlbGxzLmxlbmd0aCkgcmV0dXJuIF9yYW5kb21BdHRhY2socGxheWVyKTtcblxuICAgICAgbGV0IGNlbGxUb0NoZWNrID0gcG9zc2libGVDZWxscy5zaGlmdCgpO1xuXG4gICAgICB3aGlsZSAocG9zc2libGVDZWxscy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgaW5kZXggPSBwb3NzaWJsZUNlbGxzLmluZGV4T2YoY2VsbFRvQ2hlY2spO1xuXG4gICAgICAgIC8vIGltbWVkaWF0ZSBicmVhayBvdXQgYW5kIGF0dGFjayBhbnkgY2VsbCB3aGljaCBhcHBlYXIgdHdpY2UgaW4gcG9zc2libGVDZWxsc1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkgYnJlYWs7XG5cbiAgICAgICAgY2VsbFRvQ2hlY2sgPSBwb3NzaWJsZUNlbGxzLnNoaWZ0KCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwbGF5ZXIuYm9hcmQucmVjZWl2ZWRBdHRhY2soY2VsbFRvQ2hlY2sucG9zaXRpb24pO1xuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IFBvc2l0aW9uLCBIdW1hbiwgQ29tcHV0ZXIsIFBsYXllciB9IGZyb20gXCIuL2NsYXNzXCI7XG5cbi8qKlxuICogQGplc3QtZW52aXJvbm1lbnQganNkb21cbiAqL1xuXG4vLyB0aGVzZSB2YXJpYWJsZXMgY2FuIGJlIHB1dCBpbnNpZGUgR2FtZSBjbGFzcyBidXQgSSBkb24ndCB3YW50XG5leHBvcnQgbGV0IF9TSVpFID0gMTA7IC8vIEdhbWVib2FyZCBTSVpFXG5cbmV4cG9ydCBsZXQgX1RPVEFMX1NISVBTID0gWzEsIDEsIDEsIDIsIDIsIDMsIDMsIDQsIDVdOyAvLyB0b3RhbCBvZiBzaGlwcyB3ZSB3YW50IG9uIG91ciBnYW1lYm9hcmRcblxuZXhwb3J0IGxldCBfU0hJUFNfTUFYX0xFTkdUSCA9IDk7XG5cbmV4cG9ydCBsZXQgX0RJRkZJQ1VMVFkgPSAxO1xuXG5leHBvcnQgY2xhc3MgR2FtZSB7XG4gIHN0YXRpYyBjaGFuZ2VTaXplID0gKG5ld1NpemUpID0+IHtcbiAgICBfU0laRSA9IG5ld1NpemU7XG5cbiAgICBET00uZ2FtZWJvYXJkQWkuc3R5bGUuY3NzVGV4dCA9IGBncmlkLXRlbXBsYXRlOiByZXBlYXQoJHtfU0laRX0sIDFmcikgLyByZXBlYXQoJHtfU0laRX0sIDFmcilgO1xuXG4gICAgRE9NLmdhbWVib2FyZEh1bWFuLnN0eWxlLmNzc1RleHQgPSBgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KCR7X1NJWkV9LCAxZnIpIC8gcmVwZWF0KCR7X1NJWkV9LCAxZnIpYDtcbiAgfTtcblxuICBzdGF0aWMgY2hhbmdlRGlmZmljdWx0eSA9IChuZXdEaWZmaWN1bHR5KSA9PiAoX0RJRkZJQ1VMVFkgPSBuZXdEaWZmaWN1bHR5KTtcblxuICBzdGF0aWMgY2hhbmdlVG90YWxTaGlwcyA9IChuZXdTaGlwcykgPT4gKF9UT1RBTF9TSElQUyA9IG5ld1NoaXBzKTtcblxuICBzdGF0aWMgaXNPdmVyID0gZmFsc2U7XG5cbiAgc3RhdGljIGh1bWFuO1xuXG4gIHN0YXRpYyBhaTtcblxuICBzdGF0aWMgY2hlY2tHYW1lb3ZlciA9IChwbGF5ZXJUb0NoZWNrKSA9PiB7XG4gICAgaWYgKHBsYXllclRvQ2hlY2suYm9hcmQuYWxsQ2xlYXIpIHtcbiAgICAgIHRoaXMuaXNPdmVyID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5pc092ZXI7XG4gIH07XG5cbiAgc3RhdGljIHN0YXJ0ID0gKCkgPT4ge1xuICAgIHRoaXMuaXNPdmVyID0gZmFsc2U7XG5cbiAgICB0aGlzLmh1bWFuID0gbmV3IEh1bWFuKCk7XG5cbiAgICB0aGlzLmFpID0gbmV3IENvbXB1dGVyKCk7XG5cbiAgICB0aGlzLmh1bWFuLnJhbmRvbVBsYWNlU2hpcHMoKTtcblxuICAgIHRoaXMuYWkucmFuZG9tUGxhY2VTaGlwcygpO1xuXG4gICAgRGlzcGxheS5ib2FyZCh0aGlzLmh1bWFuKTtcblxuICAgIERpc3BsYXkuYm9hcmQodGhpcy5haSk7XG5cbiAgICBEaXNwbGF5Lmh1bWFuU2hpcHModGhpcy5odW1hbik7XG5cbiAgICBEaXNwbGF5LnNoaXBzTGVmdCh0aGlzLmh1bWFuLCB0aGlzLmFpKTtcblxuICAgIC8vIERpc3BsYXkuaHVtYW5TaGlwcyh0aGlzLmFpKTsgLy8gTk9URTogdXNlZCBmb3IgZGlzcGxheSBhaSdzIHNoaXBzLCBmb3IgdGVzdGluZ1xuXG4gICAgRGlzcGxheS5tZXNzYWdlKFxuICAgICAgdGhpcy5odW1hbixcbiAgICAgIGBQcmVzcyB0aGUgcmVzdGFydCBidXR0b24gaWZgLFxuICAgICAgYHlvdSdyZSBub3QgaGFwcHkgd2l0aCB5b3VyIHNoaXBzIGxheW91dGAsXG4gICAgKTtcblxuICAgIERpc3BsYXkubWVzc2FnZShcbiAgICAgIHRoaXMuYWksXG4gICAgICBgS2VlcCB0cmFjayBvZiBnYW1lIGFsZXJ0IGhlcmVgLFxuICAgICAgYFlvdSB3aWxsIGF0dGFjayB0aGUgZ2FtZWJvYXJkIGFib3ZlYCxcbiAgICApO1xuXG4gICAgRE9NLnByZXZlbnRTcGFtLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuXG4gICAgRE9NLmxpc3Rlbkh1bWFuQXR0YWNrcyh0aGlzLmh1bWFuLCB0aGlzLmFpKTtcbiAgfTtcblxuICBzdGF0aWMgaHVtYW5QbGF5T25lVHVybiA9IChodW1hbiwgYWksIHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgaHVtYW5BdHRhY2tzU3RhdHVzID0gaHVtYW4uYXR0YWNrKHBvc2l0aW9uLCBhaSk7XG5cbiAgICBsZXQgaHVtYW5NZXNzYWdlID0gYFdlIHNob3QgYXQgZW5lbXkncyB3YXRlciBhbmQgaXQncyBhIG1pc3NgO1xuXG4gICAgaWYgKGh1bWFuQXR0YWNrc1N0YXR1cy5jZWxsU3RhdHVzID09PSBcIkhpdFwiKSB7XG4gICAgICBEaXNwbGF5LmFpRGVhdGhTaGlwcyhhaSk7XG5cbiAgICAgIGh1bWFuTWVzc2FnZSA9IGBXZSBzaG90IGF0IGVuZW15J3Mgd2F0ZXIgYW5kIGl0J3MgYSBoaXRgO1xuXG4gICAgICBpZiAoaHVtYW5BdHRhY2tzU3RhdHVzLnNoaXBTdGF0dXMgPT09IFwiU3Vua1wiKVxuICAgICAgICBodW1hbk1lc3NhZ2UgKz0gYCwgd2UgaGF2ZSBzdW5rIHRoZWlyIHNoaXBgO1xuICAgIH1cbiAgICBodW1hbk1lc3NhZ2UgPSBodW1hbk1lc3NhZ2Uuc3BsaXQoXCIsXCIpO1xuXG4gICAgRGlzcGxheS5zaG90T25Cb2FyZChhaSwgcG9zaXRpb24sIGh1bWFuQXR0YWNrc1N0YXR1cy5jZWxsU3RhdHVzKTtcblxuICAgIERpc3BsYXkubWVzc2FnZShhaSwgaHVtYW5NZXNzYWdlWzBdLCBodW1hbk1lc3NhZ2VbMV0gfHwgXCJcIik7XG5cbiAgICBEaXNwbGF5LnNoaXBzTGVmdChodW1hbiwgYWkpO1xuXG4gICAgaWYgKHRoaXMuY2hlY2tHYW1lb3ZlcihhaSkpIHtcbiAgICAgIERpc3BsYXkuc3RvcFVzZXJTcGFtbWluZygpO1xuXG4gICAgICBEaXNwbGF5Lm1lc3NhZ2UoXG4gICAgICAgIGFpLFxuICAgICAgICBgQ29uZ3JhdHVsYXRpb24hYCxcbiAgICAgICAgYFdlIGhhdmUgd2luIHRoZSBiYXR0bGUhYCxcbiAgICAgICAgYFBsYXkgYWdhaW4/YCxcbiAgICAgICk7XG5cbiAgICAgIERpc3BsYXkubWVzc2FnZShcbiAgICAgICAgaHVtYW4sXG4gICAgICAgIGBDb25ncmF0dWxhdGlvbiFgLFxuICAgICAgICBgV2UgaGF2ZSB3aW4gdGhlIGJhdHRsZSFgLFxuICAgICAgICBgUGxheSBhZ2Fpbj9gLFxuICAgICAgKTtcbiAgICB9XG4gIH07XG5cbiAgc3RhdGljIGFpUGxheU9uZVR1cm4gPSAoaHVtYW4sIGFpKSA9PiB7XG4gICAgY29uc3QgYWlBdHRhY2tSZXN1bHQgPSBhaS5hdHRhY2soaHVtYW4pO1xuXG4gICAgbGV0IGFpTWVzc2FnZSA9IGBFbmVteSBzaG90IGF0IG91ciB3YXRlciBhbmQgaXQncyBhIG1pc3NgO1xuXG4gICAgaWYgKGFpQXR0YWNrUmVzdWx0LmNlbGxTdGF0dXMgPT09IFwiSGl0XCIpIHtcbiAgICAgIERpc3BsYXkuaHVtYW5TaGlwcyhodW1hbik7XG5cbiAgICAgIGFpTWVzc2FnZSA9IGBFbmVteSBzaG90IGF0IG91ciB3YXRlciBhbmQgaXQncyBhIGhpdGA7XG5cbiAgICAgIGlmIChhaUF0dGFja1Jlc3VsdC5zaGlwU3RhdHVzID09PSBcIlN1bmtcIilcbiAgICAgICAgYWlNZXNzYWdlICs9IGAsIHRoZXkgaGF2ZSBzdW5rIG91ciBzaGlwYDtcbiAgICB9XG5cbiAgICBhaU1lc3NhZ2UgPSBhaU1lc3NhZ2Uuc3BsaXQoXCIsXCIpO1xuXG4gICAgRGlzcGxheS5zaG90T25Cb2FyZChcbiAgICAgIGh1bWFuLFxuICAgICAgYWlBdHRhY2tSZXN1bHQucG9zaXRpb24sXG4gICAgICBhaUF0dGFja1Jlc3VsdC5jZWxsU3RhdHVzLFxuICAgICk7XG5cbiAgICBEaXNwbGF5Lm1lc3NhZ2UoaHVtYW4sIGBFbmVteSBpcyBhaW1pbmcuLi5gLCBhaU1lc3NhZ2VbMF0sIGFpTWVzc2FnZVsxXSk7XG5cbiAgICBEaXNwbGF5LnNoaXBzTGVmdChodW1hbiwgYWkpO1xuXG4gICAgaWYgKHRoaXMuY2hlY2tHYW1lb3ZlcihodW1hbikpIHtcbiAgICAgIERpc3BsYXkuc3RvcFVzZXJTcGFtbWluZygpO1xuXG4gICAgICBEaXNwbGF5Lm1lc3NhZ2UoXG4gICAgICAgIGFpLFxuICAgICAgICBgT2ggbm9vLi4uYCxcbiAgICAgICAgYEVuZW15IGhhcyB3aW4gdGhlIGJhdHRsZSFgLFxuICAgICAgICBgUGxheSBhZ2Fpbj9gLFxuICAgICAgKTtcblxuICAgICAgRGlzcGxheS5tZXNzYWdlKFxuICAgICAgICBodW1hbixcbiAgICAgICAgYE9oIG5vLi4uYCxcbiAgICAgICAgYEVuZW15IGhhcyB3aW4gdGhlIGJhdHRsZSFgLFxuICAgICAgICBgUGxheSBhZ2Fpbj9gLFxuICAgICAgKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBjbGFzcyBET00ge1xuICBzdGF0aWMgbWVzc2FnZUh1bWFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbWVzc2FnZT1cImh1bWFuXCJdYCk7XG5cbiAgc3RhdGljIG1lc3NhZ2VBaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW1lc3NhZ2U9XCJhaVwiXWApO1xuXG4gIHN0YXRpYyBzaGlwc0xlZnRIdW1hbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNoaXBzLWxlZnQ9XCJodW1hblwiXWApO1xuXG4gIHN0YXRpYyBzaGlwc0xlZnRBaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNoaXBzLWxlZnQ9XCJhaVwiXWApO1xuXG4gIHN0YXRpYyBnYW1lYm9hcmRIdW1hbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZWJvYXJkW2RhdGEtaHVtYW5dXCIpO1xuXG4gIHN0YXRpYyBnYW1lYm9hcmRBaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZWJvYXJkW2RhdGEtYWldXCIpO1xuXG4gIHN0YXRpYyByZXN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXJlc3RhcnRdXCIpO1xuXG4gIHN0YXRpYyBzZXR0aW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXNldHRpbmddXCIpO1xuXG4gIHN0YXRpYyBwcmV2ZW50U3BhbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcmV2ZW50LXNwYW1dXCIpO1xuXG4gIHN0YXRpYyBwb3B1cEZvcm1DdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcG9wdXAtZm9ybS1jdG5dXCIpO1xuXG4gIHN0YXRpYyBwb3B1cEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcG9wdXAtZm9ybV1cIik7XG5cbiAgc3RhdGljIHN1Ym1pdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1zdWJtaXQtZm9ybV1gKTtcblxuICBzdGF0aWMgY2xvc2VGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY2xvc2UtZm9ybV1gKTtcblxuICBzdGF0aWMgaW5wdXRTaXplID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtZm9ybS1pbnB1dC1zaXplXWApO1xuXG4gIHN0YXRpYyBpbnB1dFNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtZm9ybS1pbnB1dC1zaGlwc11gKTtcblxuICBzdGF0aWMgaW5wdXRzRGlmZmljdWx0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lPVwiZGlmZmljdWx0eVwiXScpO1xuXG4gIHN0YXRpYyAjc2hvd1BvcHVwRm9ybSA9ICgpID0+IHRoaXMucG9wdXBGb3JtQ3RuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRlXCIpO1xuXG4gIHN0YXRpYyAjaGlkZVBvcHVwRm9ybSA9ICgpID0+IHRoaXMucG9wdXBGb3JtQ3RuLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuXG4gIHN0YXRpYyBsaXN0ZW5SZXN0YXJ0ID0gKCkgPT4ge1xuICAgIHRoaXMucmVzdGFydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgIEdhbWUuc3RhcnQoKTtcbiAgICB9KTtcbiAgfTtcblxuICBzdGF0aWMgbGlzdGVuU2V0dGluZyA9ICgpID0+IHtcbiAgICB0aGlzLnNldHRpbmcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICB0aGlzLiNzaG93UG9wdXBGb3JtKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgc3RhdGljIGxpc3RlblN1Ym1pdEZvcm0gPSAoKSA9PiB7XG4gICAgdGhpcy5wb3B1cEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBsZXQgZGlmZmljdWx0eSA9IDE7XG5cbiAgICAgIHRoaXMuaW5wdXRzRGlmZmljdWx0eS5mb3JFYWNoKChpbnB1dCkgPT4ge1xuICAgICAgICBpZiAoaW5wdXQuY2hlY2tlZCkgZGlmZmljdWx0eSA9IGlucHV0LnZhbHVlO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGlucHV0U2l6ZVZhbHVlID0gK3RoaXMuaW5wdXRTaXplLnZhbHVlO1xuXG4gICAgICBjb25zdCBpbnB1dFNoaXBzVmFsdWUgPSB0aGlzLmlucHV0U2hpcHMudmFsdWVcbiAgICAgICAgLnRyaW0oKVxuICAgICAgICAuc3BsaXQoL1xccyovKVxuICAgICAgICAucmVkdWNlKFxuICAgICAgICAgICh0b3RhbCwgY3VycmVudCkgPT4gKCtjdXJyZW50ID4gMCA/IFsuLi50b3RhbCwgK2N1cnJlbnRdIDogdG90YWwpLFxuICAgICAgICAgIFtdLFxuICAgICAgICApO1xuXG4gICAgICBHYW1lLmNoYW5nZURpZmZpY3VsdHkoZGlmZmljdWx0eSk7XG5cbiAgICAgIEdhbWUuY2hhbmdlU2l6ZShpbnB1dFNpemVWYWx1ZSk7XG5cbiAgICAgIEdhbWUuY2hhbmdlVG90YWxTaGlwcyhpbnB1dFNoaXBzVmFsdWUpO1xuXG4gICAgICBHYW1lLnN0YXJ0KCk7XG5cbiAgICAgIHRoaXMuI2hpZGVQb3B1cEZvcm0oKTtcbiAgICB9KTtcbiAgfTtcblxuICBzdGF0aWMgbGlzdGVuQ2xvc2VGb3JtID0gKCkgPT4ge1xuICAgIHRoaXMuY2xvc2VGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgdGhpcy4jaGlkZVBvcHVwRm9ybSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIHN0YXRpYyBsaXN0ZW5IdW1hbkF0dGFja3MgPSAoaHVtYW4sIGFpKSA9PiB7XG4gICAgaWYgKCEoaHVtYW4gaW5zdGFuY2VvZiBIdW1hbikpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgSHVtYW5cIik7XG5cbiAgICBpZiAoIShhaSBpbnN0YW5jZW9mIENvbXB1dGVyKSkgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBBaVwiKTtcblxuICAgIGNvbnN0IGNlbGxzID0gdGhpcy5nYW1lYm9hcmRBaS5xdWVyeVNlbGVjdG9yQWxsKFwiLmFpX19jZWxsXCIpO1xuXG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICBcImNsaWNrXCIsXG5cbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYXR0YWNrZWRcIik7XG5cbiAgICAgICAgICBjb25zdCByb3cgPSArZS50YXJnZXQuZGF0YXNldC5yb3c7XG5cbiAgICAgICAgICBjb25zdCBjb2wgPSArZS50YXJnZXQuZGF0YXNldC5jb2w7XG5cbiAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb3NpdGlvbihyb3csIGNvbCk7XG5cbiAgICAgICAgICBHYW1lLmh1bWFuUGxheU9uZVR1cm4oaHVtYW4sIGFpLCBwb3NpdGlvbik7XG5cbiAgICAgICAgICBpZiAoR2FtZS5pc092ZXIpIHJldHVybjtcblxuICAgICAgICAgIC8vIGlmIGRpZmZpY3VsdHkgaXMgMyB0aGVuIHRoZXJlJ3MgYSBjaGFuY2UgdGhlIEFJIHdpbGwgc2hvdCAxIG9yIDIgb3IgMyB0aW1lcyBpbiBhIHJvdyBldGMuIDAgZXhjbHVkZVxuICAgICAgICAgIGNvbnN0IGNyaXRpY2FsRGFtYWdlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogX0RJRkZJQ1VMVFkpICsgMTtcbiAgICAgICAgICAvLyBhaSBwbGF5IGl0cyB0dXJuIGJhc2Ugb24gZGlmZmljdWx0eVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3JpdGljYWxEYW1hZ2U7IGkrKykge1xuICAgICAgICAgICAgR2FtZS5haVBsYXlPbmVUdXJuKGh1bWFuLCBhaSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHsgb25jZTogdHJ1ZSB9LFxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuY2xhc3MgRGlzcGxheSB7XG4gIHN0YXRpYyBtZXNzYWdlID0gKHBsYXllciwgY29udGVudDAsIGNvbnRlbnQxID0gXCJcIiwgY29udGVudDIgPSBcIlwiKSA9PiB7XG4gICAgbGV0IHRhcmdldE1lc3NhZ2U7XG5cbiAgICBpZiAocGxheWVyIGluc3RhbmNlb2YgSHVtYW4pIHRhcmdldE1lc3NhZ2UgPSBET00ubWVzc2FnZUh1bWFuO1xuICAgIGVsc2UgdGFyZ2V0TWVzc2FnZSA9IERPTS5tZXNzYWdlQWk7XG5cbiAgICB0YXJnZXRNZXNzYWdlLmlubmVySFRNTCA9IGA8cD4ke2NvbnRlbnQwfTwvcD48cD4ke2NvbnRlbnQxfTwvcD48cD4ke2NvbnRlbnQyfTwvcD5gO1xuICB9O1xuXG4gIHN0YXRpYyBzaGlwc0xlZnQgPSAoaHVtYW4sIGFpKSA9PiB7XG4gICAgaWYgKCEoaHVtYW4gaW5zdGFuY2VvZiBIdW1hbikpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgSHVtYW5cIik7XG4gICAgaWYgKCEoYWkgaW5zdGFuY2VvZiBDb21wdXRlcikpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgQ29tcHV0ZXJcIik7XG5cbiAgICBjb25zdCBodW1hblNoaXBzTGVmdCA9XG4gICAgICBodW1hbi5ib2FyZC5zaGlwcy5oZWFsdGh5Lmxlbmd0aCArIGh1bWFuLmJvYXJkLnNoaXBzLndhcm5pbmcubGVuZ3RoO1xuICAgIGNvbnN0IGFpU2hpcHNMZWZ0ID1cbiAgICAgIGFpLmJvYXJkLnNoaXBzLmhlYWx0aHkubGVuZ3RoICsgYWkuYm9hcmQuc2hpcHMud2FybmluZy5sZW5ndGg7XG5cbiAgICBjb25zb2xlLmxvZyhgaHVtYW4gc2hpcHMgbGVmdCBiZWxpa2U6IGAsIGh1bWFuU2hpcHNMZWZ0KTtcbiAgICBjb25zb2xlLmxvZyhgYWkgc2hpcHMgbGVmdCBiZWxpa2U6IGAsIGFpU2hpcHNMZWZ0KTtcblxuICAgIERPTS5zaGlwc0xlZnRIdW1hbi5pbm5lckhUTUwgPSBodW1hblNoaXBzTGVmdDtcbiAgICBET00uc2hpcHNMZWZ0QWkuaW5uZXJIVE1MID0gYWlTaGlwc0xlZnQ7XG4gIH07XG5cbiAgc3RhdGljIGJvYXJkID0gKHBsYXllcikgPT4ge1xuICAgIGlmICghKHBsYXllciBpbnN0YW5jZW9mIFBsYXllcikpIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgUGxheWVyXCIpO1xuXG4gICAgY29uc3QgdGFyZ2V0Qm9hcmQgPVxuICAgICAgcGxheWVyIGluc3RhbmNlb2YgSHVtYW4gPyBET00uZ2FtZWJvYXJkSHVtYW4gOiBET00uZ2FtZWJvYXJkQWk7XG5cbiAgICB0YXJnZXRCb2FyZC5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgY29uc3QgdHlwZSA9IHBsYXllciBpbnN0YW5jZW9mIEh1bWFuID8gXCJodW1hblwiIDogXCJhaVwiO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfU0laRTsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IF9TSVpFOyBqKyspIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcImNlbnRlclwiKTtcblxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChgJHt0eXBlfV9fY2VsbGApO1xuXG4gICAgICAgIGRpdi5kYXRhc2V0LnJvdyA9IGk7XG5cbiAgICAgICAgZGl2LmRhdGFzZXQuY29sID0gajtcblxuICAgICAgICB0YXJnZXRCb2FyZC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBzdGF0aWMgaHVtYW5TaGlwcyA9IChwbGF5ZXIpID0+IHtcbiAgICBpZiAoIShwbGF5ZXIgaW5zdGFuY2VvZiBQbGF5ZXIpKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIFBsYXllclwiKTtcblxuICAgIGNvbnN0IHNoaXBzID0gcGxheWVyLmJvYXJkLnNoaXBzO1xuXG4gICAgLy8gbG9vcCB0aHJvdWdoIDMgdHlwZTogaGVhbHRoeSwgd2FybmluZywgZGVhdGhcbiAgICBmb3IgKGNvbnN0IHNoaXBUeXBlIGluIHNoaXBzKSB7XG4gICAgICBjb25zdCBjdXJyZW50VHlwZSA9IHNoaXBzW3NoaXBUeXBlXTtcblxuICAgICAgLy8gbG9vcCB0aHJvdWdoIGFsbCBzaGlwcyBpbiAxIHR5cGVcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFR5cGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY3VycmVudFNoaXBJbmZvID0gY3VycmVudFR5cGVbaV07XG5cbiAgICAgICAgY29uc3QgbG9jYXRpb25zID0gY3VycmVudFNoaXBJbmZvLmxvY2F0aW9ucztcblxuICAgICAgICBjb25zdCBpc1ZlcnRpY2FsID0gY3VycmVudFNoaXBJbmZvLmlzVmVydGljYWw7XG5cbiAgICAgICAgLy8gbG9vcCB0aHJvdWdoIGFsbCBwb3NpdGlvbiBvZiB0aGF0IHNoaXBcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsb2NhdGlvbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50TG9jYXRpb24gPSBsb2NhdGlvbnNbal07XG5cbiAgICAgICAgICBjb25zdCB7IHJvdywgY29sIH0gPSBjdXJyZW50TG9jYXRpb247XG5cbiAgICAgICAgICAvLyBzZWxlY3QgZXhhY3QgY2VsbCBkb20gZWxlbWVudFxuICAgICAgICAgIGNvbnN0IGNlbGwgPVxuICAgICAgICAgICAgcGxheWVyIGluc3RhbmNlb2YgSHVtYW5cbiAgICAgICAgICAgICAgPyBET00uZ2FtZWJvYXJkSHVtYW4ucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgIGBbZGF0YS1yb3c9XCIke3Jvd31cIl1bZGF0YS1jb2w9XCIke2NvbH1cIl1gLFxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiAvLyBmb3IgdGVzdGluZyBwdXJwb3NlXG4gICAgICAgICAgICAgICAgRE9NLmdhbWVib2FyZEFpLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICBgW2RhdGEtcm93PVwiJHtyb3d9XCJdW2RhdGEtY29sPVwiJHtjb2x9XCJdYCxcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKHNoaXBUeXBlKTtcblxuICAgICAgICAgIGlmIChsb2NhdGlvbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwX19vbmVfX2xlbmd0aFwiKTtcblxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGlzVmVydGljYWwpIGNlbGwuY2xhc3NMaXN0LmFkZChcInZlcnRpY2FsXCIpO1xuICAgICAgICAgIGVsc2UgY2VsbC5jbGFzc0xpc3QuYWRkKFwiaG9yaXpvblwiKTtcblxuICAgICAgICAgIGlmICghaikgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2hpcF9faGVhZFwiKTtcbiAgICAgICAgICBlbHNlIGlmIChqID09PSBsb2NhdGlvbnMubGVuZ3RoIC0gMSkgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2hpcF9fdGFpbFwiKTtcbiAgICAgICAgICBlbHNlIGNlbGwuY2xhc3NMaXN0LmFkZChcInNoaXBfX2JvZHlcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgc3RhdGljIGFpRGVhdGhTaGlwcyA9IChwbGF5ZXIpID0+IHtcbiAgICBpZiAoIShwbGF5ZXIgaW5zdGFuY2VvZiBQbGF5ZXIpKSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIFBsYXllclwiKTtcblxuICAgIGNvbnN0IGRlYXRoU2hpcHMgPSBwbGF5ZXIuYm9hcmQuc2hpcHMuZGVhdGg7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlYXRoU2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRTaGlwSW5mbyA9IGRlYXRoU2hpcHNbaV07XG5cbiAgICAgIGNvbnN0IGxvY2F0aW9ucyA9IGN1cnJlbnRTaGlwSW5mby5sb2NhdGlvbnM7XG5cbiAgICAgIGNvbnN0IGlzVmVydGljYWwgPSBjdXJyZW50U2hpcEluZm8uaXNWZXJ0aWNhbDtcblxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsb2NhdGlvbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY29uc3QgY3VycmVudExvY2F0aW9uID0gbG9jYXRpb25zW2pdO1xuXG4gICAgICAgIGNvbnN0IHsgcm93LCBjb2wgfSA9IGN1cnJlbnRMb2NhdGlvbjtcblxuICAgICAgICBjb25zdCBjZWxsID0gRE9NLmdhbWVib2FyZEFpLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYFtkYXRhLXJvdz1cIiR7cm93fVwiXVtkYXRhLWNvbD1cIiR7Y29sfVwiXWAsXG4gICAgICAgICk7XG5cbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKFwiZGVhdGhcIik7XG5cbiAgICAgICAgaWYgKGxvY2F0aW9ucy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwX19vbmVfX2xlbmd0aFwiKTtcblxuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzVmVydGljYWwpIGNlbGwuY2xhc3NMaXN0LmFkZChcInZlcnRpY2FsXCIpO1xuICAgICAgICBlbHNlIGNlbGwuY2xhc3NMaXN0LmFkZChcImhvcml6b25cIik7XG5cbiAgICAgICAgaWYgKCFqKSBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwX19oZWFkXCIpO1xuICAgICAgICBlbHNlIGlmIChqID09PSBsb2NhdGlvbnMubGVuZ3RoIC0gMSkgY2VsbC5jbGFzc0xpc3QuYWRkKFwic2hpcF9fdGFpbFwiKTtcbiAgICAgICAgZWxzZSBjZWxsLmNsYXNzTGlzdC5hZGQoXCJzaGlwX19ib2R5XCIpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBzdGF0aWMgc2hvdE9uQm9hcmQgPSAocGxheWVyLCBwb3NpdGlvbiwgc3RhdHVzKSA9PiB7XG4gICAgaWYgKCEocG9zaXRpb24gaW5zdGFuY2VvZiBQb3NpdGlvbikgfHwgIShwbGF5ZXIgaW5zdGFuY2VvZiBQbGF5ZXIpKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBhcmd1bWVudFwiKTtcblxuICAgIGNvbnN0IHsgcm93LCBjb2wgfSA9IHBvc2l0aW9uO1xuXG4gICAgbGV0IGdhbWVib2FyZDtcblxuICAgIGlmIChwbGF5ZXIgaW5zdGFuY2VvZiBIdW1hbikgZ2FtZWJvYXJkID0gRE9NLmdhbWVib2FyZEh1bWFuO1xuICAgIGVsc2UgZ2FtZWJvYXJkID0gRE9NLmdhbWVib2FyZEFpO1xuXG4gICAgY29uc3QgY2VsbCA9IGdhbWVib2FyZC5xdWVyeVNlbGVjdG9yKFxuICAgICAgYFtkYXRhLWNvbD1cIiR7Y29sfVwiXVtkYXRhLXJvdz1cIiR7cm93fVwiXWAsXG4gICAgKTtcblxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICAgIGlmIChzdGF0dXMgPT09IFwiSGl0XCIpIHNwYW4uY2xhc3NMaXN0LmFkZChcImhpdF9fc2hvdFwiKTtcbiAgICBlbHNlIHNwYW4uY2xhc3NMaXN0LmFkZChcIm1pc3NfX3Nob3RcIik7XG5cbiAgICBjZWxsLmFwcGVuZENoaWxkKHNwYW4pO1xuICB9O1xuXG4gIHN0YXRpYyBzdG9wVXNlclNwYW1taW5nID0gKCkgPT4ge1xuICAgIERPTS5wcmV2ZW50U3BhbS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZVwiKTtcbiAgfTtcbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBoZWFkZXIgYnV0dG9uIHZpZXcgb24gZ2l0aHViICovXG4uYnRuLTEzLFxuLmJ0bi0xMyAqLFxuLmJ0bi0xMyA6YWZ0ZXIsXG4uYnRuLTEzIDpiZWZvcmUsXG4uYnRuLTEzOmFmdGVyLFxuLmJ0bi0xMzpiZWZvcmUge1xuICBib3JkZXI6IDAgc29saWQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uYnRuLTEzIHtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGNvbG9yOiAjZmYwMDAwO1xuICBjdXJzb3I6IGNyb3NzaGFpcjtcbiAgZm9udC1mYW1pbHk6XG4gICAgdWktc2Fucy1zZXJpZixcbiAgICBzeXN0ZW0tdWksXG4gICAgLWFwcGxlLXN5c3RlbSxcbiAgICBCbGlua01hY1N5c3RlbUZvbnQsXG4gICAgU2Vnb2UgVUksXG4gICAgUm9ib3RvLFxuICAgIEhlbHZldGljYSBOZXVlLFxuICAgIEFyaWFsLFxuICAgIE5vdG8gU2FucyxcbiAgICBzYW5zLXNlcmlmLFxuICAgIEFwcGxlIENvbG9yIEVtb2ppLFxuICAgIFNlZ29lIFVJIEVtb2ppLFxuICAgIFNlZ29lIFVJIFN5bWJvbCxcbiAgICBOb3RvIENvbG9yIEVtb2ppO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIG1hcmdpbjogMDtcbiAgLyogLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCgjMDAwLCAjZmZmKTsgKi9cbiAgcGFkZGluZzogMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5idG4tMTM6ZGlzYWJsZWQge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG4uYnRuLTEzOi1tb3otZm9jdXNyaW5nIHtcbiAgb3V0bGluZTogYXV0bztcbn1cbi5idG4tMTMgc3ZnIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG4uYnRuLTEzIFtoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5idG4tMTMge1xuICBib3JkZXItcmFkaXVzOiA5OXJlbTtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZGRpbmc6IDAuOHJlbSAzcmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uYnRuLTEzIHNwYW4ge1xuICAvKiBtaXgtYmxlbmQtbW9kZTogZGlmZmVyZW5jZTsgKi9cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuLmJ0bi0xMzphZnRlcixcbi5idG4tMTM6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogcmdiKDE0MywgNjcsIDY3KTtcbiAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oXG4gICAgMCAwLFxuICAgIDEwMCUgMCxcbiAgICAxMDAlIGNhbGModmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxuICAgIDAgY2FsYyh2YXIoLS1wcm9ncmVzcywgMCUpIC8gMiksXG4gICAgMCAwLFxuICAgIDAgY2FsYygxMDAlIC0gdmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxuICAgIDEwMCUgY2FsYygxMDAlIC0gdmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxuICAgIDEwMCUgMTAwJSxcbiAgICAwIDEwMCUsXG4gICAgMCBjYWxjKDEwMCUgLSB2YXIoLS1wcm9ncmVzcywgMCUpIC8gMilcbiAgKTtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKFxuICAgIDAgMCxcbiAgICAxMDAlIDAsXG4gICAgMTAwJSBjYWxjKHZhcigtLXByb2dyZXNzLCAwJSkgLyAyKSxcbiAgICAwIGNhbGModmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxuICAgIDAgMCxcbiAgICAwIGNhbGMoMTAwJSAtIHZhcigtLXByb2dyZXNzLCAwJSkgLyAyKSxcbiAgICAxMDAlIGNhbGMoMTAwJSAtIHZhcigtLXByb2dyZXNzLCAwJSkgLyAyKSxcbiAgICAxMDAlIDEwMCUsXG4gICAgMCAxMDAlLFxuICAgIDAgY2FsYygxMDAlIC0gdmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpXG4gICk7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGluc2V0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKDEwMCUgLSB2YXIoLS1wcm9ncmVzcywgMCUpIC8gMS45OSkpO1xuICB0cmFuc2l0aW9uOlxuICAgIHRyYW5zZm9ybSAwLjJzIGVhc2UsXG4gICAgLXdlYmtpdC1jbGlwLXBhdGggMC4ycyBlYXNlO1xuICB0cmFuc2l0aW9uOlxuICAgIGNsaXAtcGF0aCAwLjJzIGVhc2UsXG4gICAgdHJhbnNmb3JtIDAuMnMgZWFzZTtcbiAgdHJhbnNpdGlvbjpcbiAgICBjbGlwLXBhdGggMC4ycyBlYXNlLFxuICAgIHRyYW5zZm9ybSAwLjJzIGVhc2UsXG4gICAgLXdlYmtpdC1jbGlwLXBhdGggMC4ycyBlYXNlO1xufVxuLmJ0bi0xMzphZnRlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKC0xMDAlICsgdmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDEuOTkpKTtcbn1cbi5idG4tMTM6aG92ZXIge1xuICAtLXByb2dyZXNzOiAxMDAlO1xufVxuXG4vKiBoZWFkZXIgYnV0dG9uIHZpZXcgb24gZ2l0aHViICovXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvYnV0dG9uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxpQ0FBaUM7QUFDakM7Ozs7OztFQU1FLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHdDQUF3QztFQUN4QywwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCOzs7Ozs7Ozs7Ozs7OztvQkFja0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULDZEQUE2RDtFQUM3RCxVQUFVO0VBQ1YseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7QUFDQTs7RUFFRSw0QkFBNEI7RUFDNUI7Ozs7Ozs7Ozs7O0dBV0M7RUFDRDs7Ozs7Ozs7Ozs7R0FXQztFQUNELFdBQVc7RUFDWCxRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLDhEQUE4RDtFQUM5RDs7K0JBRTZCO0VBQzdCOzt1QkFFcUI7RUFDckI7OzsrQkFHNkI7QUFDL0I7QUFDQTtFQUNFLCtEQUErRDtBQUNqRTtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBLGlDQUFpQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBoZWFkZXIgYnV0dG9uIHZpZXcgb24gZ2l0aHViICovXFxuLmJ0bi0xMyxcXG4uYnRuLTEzICosXFxuLmJ0bi0xMyA6YWZ0ZXIsXFxuLmJ0bi0xMyA6YmVmb3JlLFxcbi5idG4tMTM6YWZ0ZXIsXFxuLmJ0bi0xMzpiZWZvcmUge1xcbiAgYm9yZGVyOiAwIHNvbGlkO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLmJ0bi0xMyB7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG4gIGNvbG9yOiAjZmYwMDAwO1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxuICBmb250LWZhbWlseTpcXG4gICAgdWktc2Fucy1zZXJpZixcXG4gICAgc3lzdGVtLXVpLFxcbiAgICAtYXBwbGUtc3lzdGVtLFxcbiAgICBCbGlua01hY1N5c3RlbUZvbnQsXFxuICAgIFNlZ29lIFVJLFxcbiAgICBSb2JvdG8sXFxuICAgIEhlbHZldGljYSBOZXVlLFxcbiAgICBBcmlhbCxcXG4gICAgTm90byBTYW5zLFxcbiAgICBzYW5zLXNlcmlmLFxcbiAgICBBcHBsZSBDb2xvciBFbW9qaSxcXG4gICAgU2Vnb2UgVUkgRW1vamksXFxuICAgIFNlZ29lIFVJIFN5bWJvbCxcXG4gICAgTm90byBDb2xvciBFbW9qaTtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgbWFyZ2luOiAwO1xcbiAgLyogLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCgjMDAwLCAjZmZmKTsgKi9cXG4gIHBhZGRpbmc6IDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG4uYnRuLTEzOmRpc2FibGVkIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuLmJ0bi0xMzotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiBhdXRvO1xcbn1cXG4uYnRuLTEzIHN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5idG4tMTMgW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmJ0bi0xMyB7XFxuICBib3JkZXItcmFkaXVzOiA5OXJlbTtcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDAuOHJlbSAzcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYnRuLTEzIHNwYW4ge1xcbiAgLyogbWl4LWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7ICovXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uYnRuLTEzOmFmdGVyLFxcbi5idG4tMTM6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxNDMsIDY3LCA2Nyk7XFxuICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbihcXG4gICAgMCAwLFxcbiAgICAxMDAlIDAsXFxuICAgIDEwMCUgY2FsYyh2YXIoLS1wcm9ncmVzcywgMCUpIC8gMiksXFxuICAgIDAgY2FsYyh2YXIoLS1wcm9ncmVzcywgMCUpIC8gMiksXFxuICAgIDAgMCxcXG4gICAgMCBjYWxjKDEwMCUgLSB2YXIoLS1wcm9ncmVzcywgMCUpIC8gMiksXFxuICAgIDEwMCUgY2FsYygxMDAlIC0gdmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxcbiAgICAxMDAlIDEwMCUsXFxuICAgIDAgMTAwJSxcXG4gICAgMCBjYWxjKDEwMCUgLSB2YXIoLS1wcm9ncmVzcywgMCUpIC8gMilcXG4gICk7XFxuICBjbGlwLXBhdGg6IHBvbHlnb24oXFxuICAgIDAgMCxcXG4gICAgMTAwJSAwLFxcbiAgICAxMDAlIGNhbGModmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxcbiAgICAwIGNhbGModmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxcbiAgICAwIDAsXFxuICAgIDAgY2FsYygxMDAlIC0gdmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxcbiAgICAxMDAlIGNhbGMoMTAwJSAtIHZhcigtLXByb2dyZXNzLCAwJSkgLyAyKSxcXG4gICAgMTAwJSAxMDAlLFxcbiAgICAwIDEwMCUsXFxuICAgIDAgY2FsYygxMDAlIC0gdmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpXFxuICApO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBpbnNldDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKDEwMCUgLSB2YXIoLS1wcm9ncmVzcywgMCUpIC8gMS45OSkpO1xcbiAgdHJhbnNpdGlvbjpcXG4gICAgdHJhbnNmb3JtIDAuMnMgZWFzZSxcXG4gICAgLXdlYmtpdC1jbGlwLXBhdGggMC4ycyBlYXNlO1xcbiAgdHJhbnNpdGlvbjpcXG4gICAgY2xpcC1wYXRoIDAuMnMgZWFzZSxcXG4gICAgdHJhbnNmb3JtIDAuMnMgZWFzZTtcXG4gIHRyYW5zaXRpb246XFxuICAgIGNsaXAtcGF0aCAwLjJzIGVhc2UsXFxuICAgIHRyYW5zZm9ybSAwLjJzIGVhc2UsXFxuICAgIC13ZWJraXQtY2xpcC1wYXRoIDAuMnMgZWFzZTtcXG59XFxuLmJ0bi0xMzphZnRlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygtMTAwJSArIHZhcigtLXByb2dyZXNzLCAwJSkgLyAxLjk5KSk7XFxufVxcbi5idG4tMTM6aG92ZXIge1xcbiAgLS1wcm9ncmVzczogMTAwJTtcXG59XFxuXFxuLyogaGVhZGVyIGJ1dHRvbiB2aWV3IG9uIGdpdGh1YiAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgcGFkZGluZzogM3JlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5mb290ZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uZm9vdGVyIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvZm9vdGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mb290ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgcGFkZGluZzogM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uZm9vdGVyIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5mb290ZXIgYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi8uLi9hc3NldHMvaWNvbi9haW0uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uaGVhZGVyX19pY29uX19jdG4ge1xuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHJlbTtcbn1cblxuLmhlYWRlcl9faWNvbiB7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBjZW50ZXIvY29udGFpbiBuby1yZXBlYXQgcmVkO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XG4gIGJvcmRlci1yYWRpdXM6IDk5cmVtO1xuICBhbmltYXRpb246IHJvdGF0ZSA3NTBtcyBsaW5lYXIgMG1zIGluZmluaXRlO1xuICBjdXJzb3I6IGNyb3NzaGFpcjtcbn1cblxuLmhlYWRlcl9faWNvbjpob3ZlciB7XG4gIGFuaW1hdGlvbjogbm9uZTtcbn1cblxuLmhlYWRlcl9fdGl0bGUge1xuICBmb250LXNpemU6IDZyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5oZWFkZXJfX2xpbmsge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaGVhZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0ZBQXdFO0VBQ3hFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLDJDQUEyQztFQUMzQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uaGVhZGVyX19pY29uX19jdG4ge1xcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcmVtO1xcbn1cXG5cXG4uaGVhZGVyX19pY29uIHtcXG4gIGJhY2tncm91bmQ6IHVybCgnLi8uLi9hc3NldHMvaWNvbi9haW0uc3ZnJykgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0IHJlZDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuICBib3JkZXItcmFkaXVzOiA5OXJlbTtcXG4gIGFuaW1hdGlvbjogcm90YXRlIDc1MG1zIGxpbmVhciAwbXMgaW5maW5pdGU7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLmhlYWRlcl9faWNvbjpob3ZlciB7XFxuICBhbmltYXRpb246IG5vbmU7XFxufVxcblxcbi5oZWFkZXJfX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNnJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uaGVhZGVyX19saW5rIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLy4uL2Fzc2V0cy9pbWcvYmF0dGxlc2hpcC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG8gMTByZW07XG4gIGdhcDogMC44cmVtO1xufVxuXG4uZ2FtZWJvYXJkX19jdG5fX2N0biB7XG4gIG1heC13aWR0aDogNTJyZW07XG59XG5cbi5nYW1lYm9hcmRfX2hlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmRpc3BsYXlfX3NoaXBzX19sZWZ0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmdhbWVib2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xuICBnYXA6IDFweDtcbiAgd2lkdGg6IGNhbGMoNTB2dyAtIDEuNnJlbSk7XG4gIGhlaWdodDogY2FsYyg1MHZ3IC0gMS42cmVtKTtcbiAgbWF4LXdpZHRoOiA1MHJlbTtcbiAgbWF4LWhlaWdodDogNTByZW07XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0IHJlZDtcbn1cblxuLmdhbWVib2FyZCA+IGRpdiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLCAwLCAwKTtcbn1cblxuLmdhbWVib2FyZCA+IC5jb250YWluX19zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5nYW1lYm9hcmQgPiBkaXYgPiBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogNTAlO1xuICBtaW4taGVpZ2h0OiAycHg7XG4gIGFzcGVjdC1yYXRpbzogMS8xO1xuICBib3JkZXItcmFkaXVzOiA5OXJlbTtcbn1cblxuLmdhbWVib2FyZCA+IGRpdiA+IC5oaXRfX3Nob3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5nYW1lYm9hcmQgPiBkaXYgPiAubWlzc19fc2hvdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbn1cblxuLmdhbWVib2FyZCAuYWlfX2NlbGwge1xuICBjdXJzb3I6IGNyb3NzaGFpcjtcbn1cblxuLmdhbWVib2FyZCAuYWlfX2NlbGw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyMiwgMjU1LCAxMjIsIDAuNSk7XG59XG5cbi5nYW1lYm9hcmQgLmFpX19jZWxsLmF0dGFja2VkIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmdhbWVib2FyZCAuYWlfX2NlbGwuYXR0YWNrZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTI2LCAxMjYsIDAuNSk7XG59XG5cbi5oZWFsdGh5IHtcbiAgYm9yZGVyLWNvbG9yOiBncmVlbiAhaW1wb3J0YW50O1xufVxuXG4ud2FybmluZyB7XG4gIGJvcmRlci1jb2xvcjogeWVsbG93ICFpbXBvcnRhbnQ7XG59XG5cbi5kZWF0aCB7XG4gIGJvcmRlci1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59XG5cbi8qIHRvIHBsYWNlIHNoaXAgaW4gdGhlIHJpZ2h0IGRpcmVjdGlvbiAqL1xuLnNoaXBfX2hlYWQudmVydGljYWwge1xuICBib3JkZXItd2lkdGg6IDRweCAwIDRweCA0cHg7XG59XG5cbi5zaGlwX19oZWFkLmhvcml6b24ge1xuICBib3JkZXItd2lkdGg6IDRweCA0cHggMCA0cHg7XG59XG5cbi5zaGlwX19ib2R5LnZlcnRpY2FsIHtcbiAgYm9yZGVyLXdpZHRoOiA0cHggMCA0cHggMDtcbn1cblxuLnNoaXBfX2JvZHkuaG9yaXpvbiB7XG4gIGJvcmRlci13aWR0aDogMCA0cHggMCA0cHg7XG59XG5cbi5zaGlwX190YWlsLnZlcnRpY2FsIHtcbiAgYm9yZGVyLXdpZHRoOiA0cHggNHB4IDRweCAwO1xufVxuXG4uc2hpcF9fdGFpbC5ob3Jpem9uIHtcbiAgYm9yZGVyLXdpZHRoOiAwIDRweCA0cHggNHB4O1xufVxuXG4uc2hpcF9fb25lX19sZW5ndGgge1xuICBib3JkZXItd2lkdGg6IDRweCAhaW1wb3J0YW50O1xufVxuXG4uZGlzcGxheV9fbWVzc2FnZSB7XG4gIGJvcmRlcjogMnB4IGRvdHRlZCByZWQ7XG4gIC8qIGJvcmRlci1yYWRpdXM6IDk5cmVtOyAqL1xuICBwYWRkaW5nOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMnJlbSAwO1xuICBtYXgtd2lkdGg6IDUwcmVtO1xufVxuXG4uZGlzcGxheV9fbWVzc2FnZSBwIHtcbiAgbWFyZ2luOiAwIDAgMC40cmVtO1xufVxuXG4uZ2FtZWJvYXJkX19jdG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbltkYXRhLXByZXZlbnQtc3BhbV0ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApOyAvKiB0cmFuc3BhcmVudCAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGN1cnNvcjogY2VsbDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHgpIHtcbiAgLmRpc3BsYXlfX21lc3NhZ2UgcCB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLFFBQVE7RUFDUiwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsOEVBQTRFO0FBQzlFOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQSx5Q0FBeUM7QUFDekM7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsd0NBQXdDLEVBQUUsZ0JBQWdCO0VBQzFELGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwIGF1dG8gMTByZW07XFxuICBnYXA6IDAuOHJlbTtcXG59XFxuXFxuLmdhbWVib2FyZF9fY3RuX19jdG4ge1xcbiAgbWF4LXdpZHRoOiA1MnJlbTtcXG59XFxuXFxuLmdhbWVib2FyZF9faGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmRpc3BsYXlfX3NoaXBzX19sZWZ0IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdhcDogMXB4O1xcbiAgd2lkdGg6IGNhbGMoNTB2dyAtIDEuNnJlbSk7XFxuICBoZWlnaHQ6IGNhbGMoNTB2dyAtIDEuNnJlbSk7XFxuICBtYXgtd2lkdGg6IDUwcmVtO1xcbiAgbWF4LWhlaWdodDogNTByZW07XFxuICBiYWNrZ3JvdW5kOiB1cmwoXFxcIi4vLi4vYXNzZXRzL2ltZy9iYXR0bGVzaGlwLnBuZ1xcXCIpIGNlbnRlci9jb3ZlciBuby1yZXBlYXQgcmVkO1xcbn1cXG5cXG4uZ2FtZWJvYXJkID4gZGl2IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLCAwLCAwKTtcXG59XFxuXFxuLmdhbWVib2FyZCA+IC5jb250YWluX19zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uZ2FtZWJvYXJkID4gZGl2ID4gc3BhbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogNTAlO1xcbiAgbWluLWhlaWdodDogMnB4O1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICBib3JkZXItcmFkaXVzOiA5OXJlbTtcXG59XFxuXFxuLmdhbWVib2FyZCA+IGRpdiA+IC5oaXRfX3Nob3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uZ2FtZWJvYXJkID4gZGl2ID4gLm1pc3NfX3Nob3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5haV9fY2VsbCB7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLmdhbWVib2FyZCAuYWlfX2NlbGw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjIsIDI1NSwgMTIyLCAwLjUpO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5haV9fY2VsbC5hdHRhY2tlZCB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5haV9fY2VsbC5hdHRhY2tlZDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTI2LCAxMjYsIDAuNSk7XFxufVxcblxcbi5oZWFsdGh5IHtcXG4gIGJvcmRlci1jb2xvcjogZ3JlZW4gIWltcG9ydGFudDtcXG59XFxuXFxuLndhcm5pbmcge1xcbiAgYm9yZGVyLWNvbG9yOiB5ZWxsb3cgIWltcG9ydGFudDtcXG59XFxuXFxuLmRlYXRoIHtcXG4gIGJvcmRlci1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XFxufVxcblxcbi8qIHRvIHBsYWNlIHNoaXAgaW4gdGhlIHJpZ2h0IGRpcmVjdGlvbiAqL1xcbi5zaGlwX19oZWFkLnZlcnRpY2FsIHtcXG4gIGJvcmRlci13aWR0aDogNHB4IDAgNHB4IDRweDtcXG59XFxuXFxuLnNoaXBfX2hlYWQuaG9yaXpvbiB7XFxuICBib3JkZXItd2lkdGg6IDRweCA0cHggMCA0cHg7XFxufVxcblxcbi5zaGlwX19ib2R5LnZlcnRpY2FsIHtcXG4gIGJvcmRlci13aWR0aDogNHB4IDAgNHB4IDA7XFxufVxcblxcbi5zaGlwX19ib2R5Lmhvcml6b24ge1xcbiAgYm9yZGVyLXdpZHRoOiAwIDRweCAwIDRweDtcXG59XFxuXFxuLnNoaXBfX3RhaWwudmVydGljYWwge1xcbiAgYm9yZGVyLXdpZHRoOiA0cHggNHB4IDRweCAwO1xcbn1cXG5cXG4uc2hpcF9fdGFpbC5ob3Jpem9uIHtcXG4gIGJvcmRlci13aWR0aDogMCA0cHggNHB4IDRweDtcXG59XFxuXFxuLnNoaXBfX29uZV9fbGVuZ3RoIHtcXG4gIGJvcmRlci13aWR0aDogNHB4ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kaXNwbGF5X19tZXNzYWdlIHtcXG4gIGJvcmRlcjogMnB4IGRvdHRlZCByZWQ7XFxuICAvKiBib3JkZXItcmFkaXVzOiA5OXJlbTsgKi9cXG4gIHBhZGRpbmc6IDFyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDJyZW0gMDtcXG4gIG1heC13aWR0aDogNTByZW07XFxufVxcblxcbi5kaXNwbGF5X19tZXNzYWdlIHAge1xcbiAgbWFyZ2luOiAwIDAgMC40cmVtO1xcbn1cXG5cXG4uZ2FtZWJvYXJkX19jdG4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5bZGF0YS1wcmV2ZW50LXNwYW1dIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTsgLyogdHJhbnNwYXJlbnQgKi9cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGN1cnNvcjogY2VsbDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHgpIHtcXG4gIC5kaXNwbGF5X19tZXNzYWdlIHAge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLm5hdiB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGdhcDogMXJlbTtcbn1cblxuLndhcm5pbmctY3RuIHtcbiAgbWF4LXdpZHRoOiA1MHJlbTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLndhcm5pbmctY3RuIHAge1xufVxuXG4ucG9wdXAtZm9ybS1jdG4ge1xuICBsaW5lLWhlaWdodDogMi40cmVtO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMTAwdmg7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLnBvcHVwLWZvcm0tdGl0bGUtY3RuIHtcbn1cblxuLnBvcHVwLWZvcm0tdGl0bGUge1xuICBmb250LXNpemU6IDZyZW07XG4gIGxpbmUtaGVpZ2h0OiA4cmVtO1xufVxuXG4uZm9ybS1jdG4ge1xuICBmbGV4OiAxIDEgNTByZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDUwcmVtO1xufVxuXG4uZm9ybSB7XG59XG5cbmlucHV0IHtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG59XG5cbmlucHV0OmludmFsaWQge1xuICBib3JkZXItY29sb3I6IHJlZDtcbiAgb3V0bGluZS1jb2xvcjogcmVkO1xufVxuXG5pbnB1dDp2YWxpZCB7XG4gIGJvcmRlci1jb2xvcjogZ3JlZW47XG4gIG91dGxpbmUtY29sb3I6IGdyZWVuO1xufVxuXG4uc3VibWl0LWZvcm0ge1xufVxuXG4uY2xvc2UtZm9ybSB7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbmF2LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtBQUNBOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0FBQ0E7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7QUFDQTs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm5hdiB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLndhcm5pbmctY3RuIHtcXG4gIG1heC13aWR0aDogNTByZW07XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG5cXG4ud2FybmluZy1jdG4gcCB7XFxufVxcblxcbi5wb3B1cC1mb3JtLWN0biB7XFxuICBsaW5lLWhlaWdodDogMi40cmVtO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLnBvcHVwLWZvcm0tdGl0bGUtY3RuIHtcXG59XFxuXFxuLnBvcHVwLWZvcm0tdGl0bGUge1xcbiAgZm9udC1zaXplOiA2cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDhyZW07XFxufVxcblxcbi5mb3JtLWN0biB7XFxuICBmbGV4OiAxIDEgNTByZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNTByZW07XFxufVxcblxcbi5mb3JtIHtcXG59XFxuXFxuaW5wdXQge1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbn1cXG5cXG5pbnB1dDppbnZhbGlkIHtcXG4gIGJvcmRlci1jb2xvcjogcmVkO1xcbiAgb3V0bGluZS1jb2xvcjogcmVkO1xcbn1cXG5cXG5pbnB1dDp2YWxpZCB7XFxuICBib3JkZXItY29sb3I6IGdyZWVuO1xcbiAgb3V0bGluZS1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5zdWJtaXQtZm9ybSB7XFxufVxcblxcbi5jbG9zZS1mb3JtIHtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcbiAgIHYyLjAgfCAyMDExMDEyNlxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcbiovXG5cbmh0bWwsXG5ib2R5LFxuZGl2LFxuc3BhbixcbmFwcGxldCxcbm9iamVjdCxcbmlmcmFtZSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5ibG9ja3F1b3RlLFxucHJlLFxuYSxcbmFiYnIsXG5hY3JvbnltLFxuYWRkcmVzcyxcbmJpZyxcbmNpdGUsXG5jb2RlLFxuZGVsLFxuZGZuLFxuZW0sXG5pbWcsXG5pbnMsXG5rYmQsXG5xLFxucyxcbnNhbXAsXG5zbWFsbCxcbnN0cmlrZSxcbnN0cm9uZyxcbnN1YixcbnN1cCxcbnR0LFxudmFyLFxuYixcbnUsXG5pLFxuY2VudGVyLFxuZGwsXG5kdCxcbmRkLFxub2wsXG51bCxcbmxpLFxuZmllbGRzZXQsXG5mb3JtLFxubGFiZWwsXG5sZWdlbmQsXG50YWJsZSxcbmNhcHRpb24sXG50Ym9keSxcbnRmb290LFxudGhlYWQsXG50cixcbnRoLFxudGQsXG5hcnRpY2xlLFxuYXNpZGUsXG5jYW52YXMsXG5kZXRhaWxzLFxuZW1iZWQsXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbm91dHB1dCxcbnJ1YnksXG5zZWN0aW9uLFxuc3VtbWFyeSxcbnRpbWUsXG5tYXJrLFxuYXVkaW8sXG52aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMTtcbn1cbm9sLFxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSxcbnEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSxcbmJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSxcbnE6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgY29udGVudDogbm9uZTtcbn1cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaUZFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZixhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCO0FBQ0EsZ0RBQWdEO0FBQ2hEOzs7Ozs7Ozs7OztFQVdFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxZQUFZO0FBQ2Q7QUFDQTs7OztFQUlFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuKixcbjo6YmVmb3JlLFxuOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuYm9keSB7XG4gIGZvbnQtc2l6ZTogMXZ3O1xuICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbmEge1xuICBjb2xvcjogdW5zZXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5zZXQ7XG59XG5cbnVsLFxubGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiB1bnNldDtcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XG59XG5cbi5jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7OztFQUdFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICBmb250LXNpemU6IDEwcHg7XFxufVxcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5odG1sIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMXZ3O1xcbiAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogdW5zZXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuc2V0O1xcbn1cXG5cXG51bCxcXG5saSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyOiB1bnNldDtcXG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4uY2VudGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idXR0b24uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idXR0b24uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvb3Rlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvb3Rlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbIkRPTSIsIkdhbWUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInN0YXJ0IiwibGlzdGVuUmVzdGFydCIsImxpc3RlblNldHRpbmciLCJsaXN0ZW5DbG9zZUZvcm0iLCJsaXN0ZW5TdWJtaXRGb3JtIiwiX1NJWkUiLCJfVE9UQUxfU0hJUFMiLCJfU0hJUFNfTUFYX0xFTkdUSCIsIlNoaXAiLCJfY3JlYXRlQ2xhc3MiLCJsZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJfY2xhc3NDYWxsQ2hlY2siLCJFcnJvciIsIl9oaXRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydGllcyIsInZhbHVlIiwiaGl0cyIsImdldCIsImlzU3VuayIsImN1cnJlbnRIZWFsdGgiLCJoaXQiLCJQb3NpdGlvbiIsInJvdyIsImNvbCIsIl9sZWdpdCIsIkNlbGwiLCJfaXNSZWNlaXZlZEF0dGFjayIsIl9zaGlwIiwicmVjZWl2ZWRBdHRhY2siLCJfc2hpcDIiLCJwb3NpdGlvbiIsImlzUmVjZWl2ZWRBdHRhY2siLCJzaGlwIiwic2V0IiwibmV3U2hpcCIsInN0YXR1cyIsIkdhbWVib2FyZCIsInNoaXBzSW5mbyIsImJvYXJkIiwiaGl0U2hvdHMiLCJtaXNzU2hvdHMiLCJzaG90cyIsImFsbENsZWFyIiwiZXZlcnkiLCJpbmZvIiwic2hpcHMiLCJyZWR1Y2UiLCJ0b3RhbCIsImN1cnJlbnRTaGlwSW5mbyIsInNoaXBTdGF0dXMiLCJjdXJyZW50U2hpcCIsInNoaXBIZWFsdGgiLCJwdXNoIiwiaGVhbHRoeSIsImRlYXRoIiwid2FybmluZyIsInBsYWNlU2hpcHMiLCJzdGFydFBvc2l0aW9uIiwiaXNWZXJ0aWNhbCIsImVuZFBvc2l0aW9uIiwibG9jYXRpb25zIiwiY2VsbHMiLCJpIiwiY2VsbCIsIl9pIiwiX2NlbGxzIiwiX2NlbGwkc2hpcCIsImNlbGxTdGF0dXMiLCJqIiwiUGxheWVyIiwia2V5IiwicmFuZG9tUGxhY2VTaGlwcyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImRpcmVjdGlvbiIsImVycm9yIiwiSHVtYW4iLCJfUGxheWVyIiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX3RoaXMiLCJjYWxsIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsImF0dGFjayIsInBsYXllciIsIkNvbXB1dGVyIiwiX1BsYXllcjIiLCJfc3VwZXIyIiwiX3RoaXMyIiwiX3JhbmRvbUF0dGFjayIsImVyciIsIl9hcm91bmRQb3NpdGlvbnMiLCJ0b3AiLCJtb3ZlUm93IiwibW92ZUNvbCIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsIm5vdFN1bmtDZWxscyIsImZvckVhY2giLCJwb3NzaWJsZUNlbGxzIiwibW92ZSIsIm5leHRDZWxsUm93IiwibmV4dENlbGxDb2wiLCJuZXh0Q2VsbCIsImNlbGxUb0NoZWNrIiwic2hpZnQiLCJpbmRleCIsImluZGV4T2YiLCJfRElGRklDVUxUWSIsIl9jbGFzcyIsIl9kZWZpbmVQcm9wZXJ0eSIsIm5ld1NpemUiLCJnYW1lYm9hcmRBaSIsInN0eWxlIiwiY3NzVGV4dCIsImNvbmNhdCIsImdhbWVib2FyZEh1bWFuIiwibmV3RGlmZmljdWx0eSIsIm5ld1NoaXBzIiwicGxheWVyVG9DaGVjayIsImlzT3ZlciIsImh1bWFuIiwiYWkiLCJEaXNwbGF5IiwiaHVtYW5TaGlwcyIsInNoaXBzTGVmdCIsIm1lc3NhZ2UiLCJwcmV2ZW50U3BhbSIsImNsYXNzTGlzdCIsImFkZCIsImxpc3Rlbkh1bWFuQXR0YWNrcyIsImh1bWFuQXR0YWNrc1N0YXR1cyIsImh1bWFuTWVzc2FnZSIsImFpRGVhdGhTaGlwcyIsInNwbGl0Iiwic2hvdE9uQm9hcmQiLCJjaGVja0dhbWVvdmVyIiwic3RvcFVzZXJTcGFtbWluZyIsImFpQXR0YWNrUmVzdWx0IiwiYWlNZXNzYWdlIiwiX2NsYXNzMiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfc2hvd1BvcHVwRm9ybSIsIndyaXRhYmxlIiwicG9wdXBGb3JtQ3RuIiwicmVtb3ZlIiwiX2hpZGVQb3B1cEZvcm0iLCJyZXN0YXJ0Iiwic2V0dGluZyIsIl9jbGFzc1N0YXRpY1ByaXZhdGVGaWVsZFNwZWNHZXQiLCJwb3B1cEZvcm0iLCJwcmV2ZW50RGVmYXVsdCIsImRpZmZpY3VsdHkiLCJpbnB1dHNEaWZmaWN1bHR5IiwiaW5wdXQiLCJjaGVja2VkIiwiaW5wdXRTaXplVmFsdWUiLCJpbnB1dFNpemUiLCJpbnB1dFNoaXBzVmFsdWUiLCJpbnB1dFNoaXBzIiwidHJpbSIsImN1cnJlbnQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJjaGFuZ2VEaWZmaWN1bHR5IiwiY2hhbmdlU2l6ZSIsImNoYW5nZVRvdGFsU2hpcHMiLCJjbG9zZUZvcm0iLCJ0YXJnZXQiLCJkYXRhc2V0IiwiaHVtYW5QbGF5T25lVHVybiIsImNyaXRpY2FsRGFtYWdlIiwiYWlQbGF5T25lVHVybiIsIm9uY2UiLCJjb250ZW50MCIsImNvbnRlbnQxIiwiY29udGVudDIiLCJ0YXJnZXRNZXNzYWdlIiwibWVzc2FnZUh1bWFuIiwibWVzc2FnZUFpIiwiaW5uZXJIVE1MIiwiaHVtYW5TaGlwc0xlZnQiLCJhaVNoaXBzTGVmdCIsImNvbnNvbGUiLCJsb2ciLCJzaGlwc0xlZnRIdW1hbiIsInNoaXBzTGVmdEFpIiwidGFyZ2V0Qm9hcmQiLCJ0eXBlIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwic2hpcFR5cGUiLCJjdXJyZW50VHlwZSIsImN1cnJlbnRMb2NhdGlvbiIsImRlYXRoU2hpcHMiLCJnYW1lYm9hcmQiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==