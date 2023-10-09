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

var Ship = /*#__PURE__*/_createClass(function Ship(len) {
  var _this = this;
  _classCallCheck(this, Ship);
  if (len > _dom__WEBPACK_IMPORTED_MODULE_0__._SHIPS_MAX_LENGTH || len < 1) throw new Error('Invalid ship length');
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
  for (var i = 0; i < _dom__WEBPACK_IMPORTED_MODULE_0__._SIZE; i++) {
    this.board.push([]);
    for (var j = 0; j < _dom__WEBPACK_IMPORTED_MODULE_0__._SIZE; j++) {
      this.board[i].push(new Cell(i, j));
    }
  }
  this.placeShips = function (ship, startPosition, isVertical) {
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
    for (var _i = 0; _i < length; _i++) {
      var cell = _this2.board[row][col];

      // throw and cancel place ship process if a cell already has ship on it
      if (cell.ship !== null) throw new Error('Place ship cancel because this cell already has a ship on it');

      // save cells which is legit to use later
      cells.push(cell);

      // locations to update gameboard.shipsInfo
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
/* harmony export */   Game: () => (/* binding */ Game),
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
var Game = /*#__PURE__*/_createClass(function Game() {
  _classCallCheck(this, Game);
});
_class = Game;
_defineProperty(Game, "changeSize", function (newSize) {
  _SIZE = newSize;
  DOM.gameboardAi.style.cssText = "grid-template: repeat(".concat(_SIZE, ", 1fr) / repeat(").concat(_SIZE, ", 1fr)");
  DOM.gameboardHuman.style.cssText = "grid-template: repeat(".concat(_SIZE, ", 1fr) / repeat(").concat(_SIZE, ", 1fr)");
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
    var inputSizeValue = +_class2.inputSize.value;
    var inputShipsValue = _class2.inputShips.value.trim().split(/\s*/).reduce(function (total, current) {
      return +current > 0 ? [].concat(_toConsumableArray(total), [+current]) : total;
    }, []);
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

      // ai play its turn
      Game.aiPlayOneTurn(human, ai);
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
`, "",{"version":3,"sources":["webpack://./src/css/header.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;EACE,gFAAwE;EACxE,YAAY;EACZ,oBAAoB;EACpB,WAAW;EACX,2CAA2C;EAC3C,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF","sourcesContent":[".header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n  margin-bottom: 1rem;\n}\n\n.header__icon__ctn {\n  align-self: stretch;\n  padding-right: 20rem;\n}\n\n.header__icon {\n  background: url('./../assets/icon/aim.svg') center/contain no-repeat red;\n  height: 100%;\n  border-radius: 99rem;\n  width: 6rem;\n  animation: rotate 750ms linear 0ms infinite;\n  cursor: crosshair;\n}\n\n.header__icon:hover {\n  animation: none;\n}\n\n.header__title {\n  font-size: 6rem;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n\n.header__link {\n  white-space: nowrap;\n}\n\n@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n"],"sourceRoot":""}]);
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
`, "",{"version":3,"sources":["webpack://./src/css/main.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,uBAAuB;EACvB,WAAW;EACX,oBAAoB;EACpB,SAAS;AACX;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,QAAQ;EACR,wBAAwB;EACxB,yBAAyB;EACzB,gBAAgB;EAChB,iBAAiB;EACjB,8EAA4E;AAC9E;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,oBAAoB;AACtB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,4BAA4B;AAC9B;;AAEA,yCAAyC;AACzC;EACE,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,sBAAsB;EACtB,oBAAoB;EACpB,aAAa;EACb,kBAAkB;EAClB,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,wCAAwC,EAAE,gBAAgB;EAC1D,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,YAAY;AACd;;AAEA;EACE;IACE,eAAe;EACjB;AACF","sourcesContent":[".main {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  width: 100%;\n  margin: 0 auto 10rem;\n  gap: 2rem;\n}\n\n.gameboard__ctn__ctn {\n  max-width: 52rem;\n}\n\n.gameboard__header {\n  text-align: center;\n  padding: 1rem;\n  margin-bottom: 1rem;\n  white-space: nowrap;\n}\n\n.gameboard {\n  border: 1px solid red;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  gap: 1px;\n  width: calc(50vw - 1rem);\n  height: calc(50vw - 1rem);\n  max-width: 50rem;\n  max-height: 50rem;\n  background: url('./../assets/img/battleship.png') center/cover no-repeat red;\n}\n\n.gameboard > div {\n  border: 1px solid rgb(0, 0, 0);\n}\n\n.gameboard > .contain__ship {\n  background-color: black;\n}\n\n.gameboard > div > span {\n  display: block;\n  height: 50%;\n  min-height: 2px;\n  aspect-ratio: 1/1;\n  border-radius: 99rem;\n}\n\n.gameboard > div > .hit__shot {\n  background-color: red;\n}\n\n.gameboard > div > .miss__shot {\n  background-color: rgb(255, 255, 255);\n}\n\n.gameboard .ai__cell {\n  cursor: cell;\n}\n\n.gameboard .ai__cell:hover {\n  background-color: rgba(122, 255, 122, 0.5);\n}\n\n.gameboard .ai__cell.attacked {\n  cursor: not-allowed;\n}\n\n.gameboard .ai__cell.attacked:hover {\n  background-color: rgba(255, 126, 126, 0.5);\n}\n\n.healthy {\n  border-color: green !important;\n}\n\n.warning {\n  border-color: yellow !important;\n}\n\n.death {\n  border-color: red !important;\n}\n\n/* to place ship in the right direction */\n.ship__head.vertical {\n  border-width: 4px 0 4px 4px;\n}\n\n.ship__head.horizon {\n  border-width: 4px 4px 0 4px;\n}\n\n.ship__body.vertical {\n  border-width: 4px 0 4px 0;\n}\n\n.ship__body.horizon {\n  border-width: 0 4px 0 4px;\n}\n\n.ship__tail.vertical {\n  border-width: 4px 4px 4px 0;\n}\n\n.ship__tail.horizon {\n  border-width: 0 4px 4px 4px;\n}\n\n.ship__one__length {\n  border-width: 4px !important;\n}\n\n.display__message {\n  border: 2px dotted red;\n  border-radius: 99rem;\n  padding: 2rem;\n  text-align: center;\n  margin: 2rem 0;\n  max-width: 50rem;\n}\n\n.display__message p {\n  margin: 0 0 1rem;\n}\n\n.gameboard__ctn {\n  position: relative;\n}\n\n[data-prevent-spam] {\n  height: 100%;\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0); /* transparent */\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  cursor: cell;\n}\n\n@media screen and (min-width: 900px) {\n  .display__message p {\n    font-size: 2rem;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvanMvY2xhc3MuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2pzL2RvbS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvY3NzL2J1dHRvbi5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9mb290ZXIuY3NzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9jc3MvaGVhZGVyLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvY3NzL21haW4uY3NzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9jc3MvbmF2LmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvY3NzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9idXR0b24uY3NzPzcyYTkiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9mb290ZXIuY3NzP2FiOGMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9oZWFkZXIuY3NzPzhhYzEiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9tYWluLmNzcz8yYzlmIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9jc3MvbmF2LmNzcz8xMWRjIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9jc3MvcmVzZXQuY3NzPzE1MmIiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9zdHlsZS5jc3M/OWZjZCIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9jc3MvbmF2LmNzcyc7XG5pbXBvcnQgJy4vY3NzL21haW4uY3NzJztcbmltcG9ydCAnLi9jc3MvcmVzZXQuY3NzJztcbmltcG9ydCAnLi9jc3Mvc3R5bGUuY3NzJztcbmltcG9ydCAnLi9jc3MvZm9vdGVyLmNzcyc7XG5pbXBvcnQgJy4vY3NzL2J1dHRvbi5jc3MnO1xuaW1wb3J0ICcuL2Nzcy9oZWFkZXIuY3NzJztcblxuLy8gaW1wb3J0IEFpbSBmcm9tICcuL2Fzc2V0cy9pY29uL2FpbS5zdmcnO1xuLy8gaW1wb3J0IEJhdHRsZXNoaXAgZnJvbSAnLi9hc3NldHMvaW1nL2JhdHRsZXNoaXAucG5nJztcblxuaW1wb3J0ICcuL2pzL2RvbS5qcyc7XG5pbXBvcnQgJy4vanMvY2xhc3MuanMnO1xuaW1wb3J0ICcuL2pzL2FuaW1hdGlvbi5qcyc7XG5cbmltcG9ydCB7IERPTSwgR2FtZSB9IGZyb20gJy4vanMvZG9tLmpzJztcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoZSkgPT4ge1xuICAvLyBHYW1lLmNoYW5nZVNpemUoMjUpO1xuXG4gIC8vIEdhbWUuY2hhbmdlVG90YWxTaGlwcyhbMSwgMSwgMiwgMiwgMywgMywgNCwgNV0pO1xuXG4gIEdhbWUuc3RhcnQoKTtcblxuICBET00ubGlzdGVuUmVzdGFydCgpO1xuXG4gIERPTS5saXN0ZW5TZXR0aW5nKCk7XG5cbiAgRE9NLmxpc3RlbkNsb3NlRm9ybSgpO1xuXG4gIERPTS5saXN0ZW5TdWJtaXRGb3JtKCk7XG59KTtcbiIsImltcG9ydCB7IF9TSVpFLCBfVE9UQUxfU0hJUFMsIF9TSElQU19NQVhfTEVOR1RIIH0gZnJvbSAnLi9kb20nO1xuXG5leHBvcnQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbikge1xuICAgIGlmIChsZW4gPiBfU0hJUFNfTUFYX0xFTkdUSCB8fCBsZW4gPCAxKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc2hpcCBsZW5ndGgnKTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgIGxlbmd0aDoge1xuICAgICAgICB2YWx1ZTogbGVuLFxuICAgICAgfSxcblxuICAgICAgaGl0czoge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIF9oaXRzO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGlzU3Vuazoge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgY29uc3QgY3VycmVudEhlYWx0aCA9IHRoaXMubGVuZ3RoIC0gX2hpdHM7XG5cbiAgICAgICAgICByZXR1cm4gY3VycmVudEhlYWx0aCA8IDE7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgbGV0IF9oaXRzID0gMDtcblxuICAgIHRoaXMuaGl0ID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNTdW5rKSB0aHJvdyBuZXcgRXJyb3IoYENhbid0IGF0dGFjayBzdW5rIHNoaXBgKTtcblxuICAgICAgX2hpdHMrKztcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQb3NpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHJvdywgY29sKSB7XG4gICAgY29uc3QgX2xlZ2l0ID0gX1NJWkUgLSAxO1xuICAgIGlmIChyb3cgPiBfbGVnaXQgfHwgY29sID4gX2xlZ2l0IHx8IHJvdyA8IDAgfHwgY29sIDwgMCkgdGhyb3cgbmV3IEVycm9yKCdQb3NpdGlvbiBpcyBub3QgbGVnaXQnKTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgIHJvdzoge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHJvdztcbiAgICAgICAgfSxcbiAgICAgIH0sXG5cbiAgICAgIGNvbDoge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbDtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENlbGwge1xuICBjb25zdHJ1Y3Rvcihyb3csIGNvbCkge1xuICAgIGxldCBfaXNSZWNlaXZlZEF0dGFjayA9IGZhbHNlO1xuXG4gICAgbGV0IF9zaGlwID0gbnVsbDtcblxuICAgIHRoaXMucmVjZWl2ZWRBdHRhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoX2lzUmVjZWl2ZWRBdHRhY2spIHRocm93IG5ldyBFcnJvcignQWxyZWFkeSBhdHRhY2tlZCB0aGlzIGNlbGwnKTtcblxuICAgICAgX2lzUmVjZWl2ZWRBdHRhY2sgPSB0cnVlO1xuXG4gICAgICBfc2hpcD8uaGl0KCk7XG4gICAgfTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgIHZhbHVlOiBuZXcgUG9zaXRpb24ocm93LCBjb2wpLFxuICAgICAgfSxcblxuICAgICAgaXNSZWNlaXZlZEF0dGFjazoge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIF9pc1JlY2VpdmVkQXR0YWNrO1xuICAgICAgICB9LFxuICAgICAgfSxcblxuICAgICAgc2hpcDoge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIF9zaGlwO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNldChuZXdTaGlwKSB7XG4gICAgICAgICAgaWYgKF9zaGlwKSB0aHJvdyBuZXcgRXJyb3IoJ0FscmVhZHkgcGxhY2VkIGEgc2hpcCBvbiB0aGlzIGNlbGwnKTtcblxuICAgICAgICAgIF9zaGlwID0gbmV3U2hpcDtcbiAgICAgICAgfSxcbiAgICAgIH0sXG5cbiAgICAgIHN0YXR1czoge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgaWYgKCFfaXNSZWNlaXZlZEF0dGFjaykgcmV0dXJuICdOb3QgeWV0JzsgLy8gaWYgaXMgbm90IHlldCByZWNlaXZlZCBhdHRhY2tcblxuICAgICAgICAgIGlmIChfc2hpcCkgcmV0dXJuICdIaXQnOyAvLyBpZiByZWNlaXZlZCBhdHRhY2sgYW5kIGNvbnRhaW5zIGEgc2hpcFxuXG4gICAgICAgICAgcmV0dXJuICdNaXNzJzsgLy8gZWxzZVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgc2hpcHNJbmZvOiB7IHZhbHVlOiBbXSB9LFxuXG4gICAgICBib2FyZDogeyB2YWx1ZTogW10gfSxcblxuICAgICAgaGl0U2hvdHM6IHsgdmFsdWU6IFtdIH0sXG5cbiAgICAgIG1pc3NTaG90czogeyB2YWx1ZTogW10gfSxcblxuICAgICAgc2hvdHM6IHsgdmFsdWU6IFtdIH0sXG5cbiAgICAgIGFsbENsZWFyOiB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zaGlwc0luZm8uZXZlcnkoKGluZm8pID0+IGluZm8uc2hpcC5pc1N1bmspO1xuICAgICAgICB9LFxuICAgICAgfSxcblxuICAgICAgc2hpcHM6IHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIC8vIHBsYWNlIHNoaXBzIGludG8gY2F0ZWdvcnkgYmFzZSBvbiB0aGVpciBzdGF0dXM6IGhlYWx0aHksIHdhcm5pbmcsIGRlYXRoXG4gICAgICAgICAgcmV0dXJuIHRoaXMuc2hpcHNJbmZvLnJlZHVjZShcbiAgICAgICAgICAgICh0b3RhbCwgY3VycmVudFNoaXBJbmZvKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBzaGlwU3RhdHVzO1xuXG4gICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTaGlwID0gY3VycmVudFNoaXBJbmZvLnNoaXA7XG5cbiAgICAgICAgICAgICAgY29uc3Qgc2hpcEhlYWx0aCA9IGN1cnJlbnRTaGlwLmxlbmd0aCAtIGN1cnJlbnRTaGlwLmhpdHM7XG5cbiAgICAgICAgICAgICAgaWYgKHNoaXBIZWFsdGggPT09IDApIHNoaXBTdGF0dXMgPSAnZGVhdGgnO1xuICAgICAgICAgICAgICBlbHNlIGlmIChzaGlwSGVhbHRoID09PSAxKSBzaGlwU3RhdHVzID0gJ3dhcm5pbmcnO1xuICAgICAgICAgICAgICBlbHNlIHNoaXBTdGF0dXMgPSAnaGVhbHRoeSc7XG5cbiAgICAgICAgICAgICAgdG90YWxbc2hpcFN0YXR1c10ucHVzaChjdXJyZW50U2hpcEluZm8pO1xuXG4gICAgICAgICAgICAgIHJldHVybiB0b3RhbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IGhlYWx0aHk6IFtdLCBkZWF0aDogW10sIHdhcm5pbmc6IFtdIH1cbiAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX1NJWkU7IGkrKykge1xuICAgICAgdGhpcy5ib2FyZC5wdXNoKFtdKTtcblxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBfU0laRTsgaisrKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbaV0ucHVzaChuZXcgQ2VsbChpLCBqKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5wbGFjZVNoaXBzID0gKHNoaXAsIHN0YXJ0UG9zaXRpb24sIGlzVmVydGljYWwpID0+IHtcbiAgICAgIGlmICghKHNoaXAgaW5zdGFuY2VvZiBTaGlwKSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHNoaXAgb2JqZWN0Jyk7XG5cbiAgICAgIGlmICghKHN0YXJ0UG9zaXRpb24gaW5zdGFuY2VvZiBQb3NpdGlvbikpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdGFydCBwb3NpdGlvbicpO1xuXG4gICAgICBpZiAodHlwZW9mIGlzVmVydGljYWwgIT09ICdib29sZWFuJykgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGRpcmVjdGlvbicpO1xuXG4gICAgICBjb25zdCBsZW5ndGggPSBzaGlwLmxlbmd0aDtcblxuICAgICAgY29uc3QgZW5kUG9zaXRpb24gPSBsZW5ndGggKyAoaXNWZXJ0aWNhbCA/IHN0YXJ0UG9zaXRpb24uY29sIDogc3RhcnRQb3NpdGlvbi5yb3cpOyAvLyB1c2VkIHRvIGNoZWNrIGlmIG91dHNpZGUgdGhlIGdhbWVib2FyZFxuXG4gICAgICBpZiAoZW5kUG9zaXRpb24gPiBfU0laRSkgdGhyb3cgbmV3IEVycm9yKCdUaGlzIHNoaXAgZ29lcyBiZXlvbmQgZ2FtZWJvYXJkJyk7XG5cbiAgICAgIGxldCB7IHJvdywgY29sIH0gPSBzdGFydFBvc2l0aW9uO1xuXG4gICAgICBjb25zdCBsb2NhdGlvbnMgPSBbXTtcblxuICAgICAgY29uc3QgY2VsbHMgPSBbXTtcblxuICAgICAgLy8gY2hlY2sgYWxsIHNoaXAncyBsb2NhdGlvbnMgZmlyc3QgdG8gc2VlIGlmIHNvbWV0aGluZyB0aHJvd1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5ib2FyZFtyb3ddW2NvbF07XG5cbiAgICAgICAgLy8gdGhyb3cgYW5kIGNhbmNlbCBwbGFjZSBzaGlwIHByb2Nlc3MgaWYgYSBjZWxsIGFscmVhZHkgaGFzIHNoaXAgb24gaXRcbiAgICAgICAgaWYgKGNlbGwuc2hpcCAhPT0gbnVsbCkgdGhyb3cgbmV3IEVycm9yKCdQbGFjZSBzaGlwIGNhbmNlbCBiZWNhdXNlIHRoaXMgY2VsbCBhbHJlYWR5IGhhcyBhIHNoaXAgb24gaXQnKTtcblxuICAgICAgICAvLyBzYXZlIGNlbGxzIHdoaWNoIGlzIGxlZ2l0IHRvIHVzZSBsYXRlclxuICAgICAgICBjZWxscy5wdXNoKGNlbGwpO1xuXG4gICAgICAgIC8vIGxvY2F0aW9ucyB0byB1cGRhdGUgZ2FtZWJvYXJkLnNoaXBzSW5mb1xuICAgICAgICBsb2NhdGlvbnMucHVzaChuZXcgUG9zaXRpb24ocm93LCBjb2wpKTtcblxuICAgICAgICBpc1ZlcnRpY2FsID8gY29sKysgOiByb3crKzsgLy8gaW5jcmVhc2UgYmFzZWQgb24gZGlyZWN0aW9uXG4gICAgICB9XG5cbiAgICAgIC8vIHRoZSBsb29wIHRocm91Z2ggYWxsIGxlZ2l0IGNlbGxzIHRvIGFjdHVhbGx5IHBsYWNlIHNoaXAgYWZ0ZXIgbm90aGluZyBnb3QgdGhyb3dcbiAgICAgIGZvciAoY29uc3QgY2VsbCBvZiBjZWxscykge1xuICAgICAgICBjZWxsLnNoaXAgPSBzaGlwO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNoaXBzSW5mby5wdXNoKHsgbG9jYXRpb25zLCBpc1ZlcnRpY2FsLCBzaGlwOiBzaGlwIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLnJlY2VpdmVkQXR0YWNrID0gKHBvc2l0aW9uKSA9PiB7XG4gICAgICBpZiAoIShwb3NpdGlvbiBpbnN0YW5jZW9mIFBvc2l0aW9uKSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHBvc2l0aW9uJyk7XG5cbiAgICAgIGNvbnN0IHsgcm93LCBjb2wgfSA9IHBvc2l0aW9uO1xuXG4gICAgICBjb25zdCBjZWxsID0gdGhpcy5ib2FyZFtyb3ddW2NvbF07XG5cbiAgICAgIGNlbGwucmVjZWl2ZWRBdHRhY2soKTtcblxuICAgICAgY29uc3QgY2VsbFN0YXR1cyA9IGNlbGwuc3RhdHVzO1xuXG4gICAgICBjb25zdCBzaGlwU3RhdHVzID0gY2VsbC5zaGlwPy5pc1N1bmsgPyAnU3VuaycgOiAnTm90IHN1bmsnO1xuXG4gICAgICBpZiAoY2VsbFN0YXR1cyA9PT0gJ0hpdCcpIHRoaXMuaGl0U2hvdHMucHVzaChwb3NpdGlvbik7XG5cbiAgICAgIGlmIChjZWxsU3RhdHVzID09PSAnTWlzcycpIHRoaXMubWlzc1Nob3RzLnB1c2gocG9zaXRpb24pO1xuXG4gICAgICB0aGlzLnNob3RzLnB1c2gocG9zaXRpb24pO1xuXG4gICAgICByZXR1cm4geyBjZWxsU3RhdHVzLCBzaGlwU3RhdHVzLCBwb3NpdGlvbiB9O1xuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IF9ib2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgIGJvYXJkOiB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gX2JvYXJkO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHJhbmRvbVBsYWNlU2hpcHMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfVE9UQUxfU0hJUFMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIF9TSVpFKTtcblxuICAgICAgICBjb25zdCBjb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBfU0laRSk7XG5cbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9zaXRpb24ocm93LCBjb2wpO1xuXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9ICEhTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG5cbiAgICAgICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKF9UT1RBTF9TSElQU1tpXSk7XG5cbiAgICAgICAgdGhpcy5ib2FyZC5wbGFjZVNoaXBzKHNoaXAsIHBvc2l0aW9uLCBkaXJlY3Rpb24pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaS0tO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEh1bWFuIGV4dGVuZHMgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuYXR0YWNrID0gKHBvc2l0aW9uLCBwbGF5ZXIpID0+IHtcbiAgICAgIGlmICghKHBvc2l0aW9uIGluc3RhbmNlb2YgUG9zaXRpb24pIHx8ICEocGxheWVyLmJvYXJkIGluc3RhbmNlb2YgR2FtZWJvYXJkKSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGFyZ3VtZW50cycpO1xuXG4gICAgICBjb25zdCBzdGF0dXMgPSBwbGF5ZXIuYm9hcmQucmVjZWl2ZWRBdHRhY2socG9zaXRpb24pO1xuXG4gICAgICByZXR1cm4gc3RhdHVzO1xuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbXB1dGVyIGV4dGVuZHMgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuYXR0YWNrID0gKHBsYXllcikgPT4ge1xuICAgICAgaWYgKCEocGxheWVyLmJvYXJkIGluc3RhbmNlb2YgR2FtZWJvYXJkKSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGJvYXJkJyk7XG5cbiAgICAgIGNvbnN0IGxlbmd0aCA9IHBsYXllci5ib2FyZC5zaG90cy5sZW5ndGg7XG5cbiAgICAgIHdoaWxlIChsZW5ndGggPT09IHBsYXllci5ib2FyZC5zaG90cy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3Qgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogX1NJWkUpO1xuXG4gICAgICAgIGNvbnN0IGNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIF9TSVpFKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKHJvdywgY29sKTtcblxuICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IHBsYXllci5ib2FyZC5yZWNlaXZlZEF0dGFjayhwb3NpdGlvbik7XG5cbiAgICAgICAgICByZXR1cm4gc3RhdHVzO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUG9zaXRpb24sIEh1bWFuLCBDb21wdXRlciwgUGxheWVyIH0gZnJvbSAnLi9jbGFzcyc7XG5cbi8qKlxuICogQGplc3QtZW52aXJvbm1lbnQganNkb21cbiAqL1xuXG4vLyB0aGVzZSB2YXJpYWJsZXMgY2FuIGJlIHB1dCBpbnNpZGUgR2FtZSBjbGFzcyBidXQgSSBkb24ndCB3YW50XG5leHBvcnQgbGV0IF9TSVpFID0gMTA7IC8vIEdhbWVib2FyZCBTSVpFXG5cbmV4cG9ydCBsZXQgX1RPVEFMX1NISVBTID0gWzEsIDEsIDEsIDIsIDIsIDMsIDMsIDQsIDVdOyAvLyB0b3RhbCBvZiBzaGlwcyB3ZSB3YW50IG9uIG91ciBnYW1lYm9hcmRcblxuZXhwb3J0IGxldCBfU0hJUFNfTUFYX0xFTkdUSCA9IDk7XG5cbmV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgc3RhdGljIGNoYW5nZVNpemUgPSAobmV3U2l6ZSkgPT4ge1xuICAgIF9TSVpFID0gbmV3U2l6ZTtcblxuICAgIERPTS5nYW1lYm9hcmRBaS5zdHlsZS5jc3NUZXh0ID0gYGdyaWQtdGVtcGxhdGU6IHJlcGVhdCgke19TSVpFfSwgMWZyKSAvIHJlcGVhdCgke19TSVpFfSwgMWZyKWA7XG5cbiAgICBET00uZ2FtZWJvYXJkSHVtYW4uc3R5bGUuY3NzVGV4dCA9IGBncmlkLXRlbXBsYXRlOiByZXBlYXQoJHtfU0laRX0sIDFmcikgLyByZXBlYXQoJHtfU0laRX0sIDFmcilgO1xuICB9O1xuXG4gIHN0YXRpYyBjaGFuZ2VUb3RhbFNoaXBzID0gKG5ld1NoaXBzKSA9PiAoX1RPVEFMX1NISVBTID0gbmV3U2hpcHMpO1xuXG4gIHN0YXRpYyBpc092ZXIgPSBmYWxzZTtcblxuICBzdGF0aWMgaHVtYW47XG5cbiAgc3RhdGljIGFpO1xuXG4gIHN0YXRpYyBjaGVja0dhbWVvdmVyID0gKHBsYXllclRvQ2hlY2spID0+IHtcbiAgICBpZiAocGxheWVyVG9DaGVjay5ib2FyZC5hbGxDbGVhcikge1xuICAgICAgdGhpcy5pc092ZXIgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmlzT3ZlcjtcbiAgfTtcblxuICBzdGF0aWMgc3RhcnQgPSAoKSA9PiB7XG4gICAgdGhpcy5pc092ZXIgPSBmYWxzZTtcblxuICAgIHRoaXMuaHVtYW4gPSBuZXcgSHVtYW4oKTtcblxuICAgIHRoaXMuYWkgPSBuZXcgQ29tcHV0ZXIoKTtcblxuICAgIHRoaXMuaHVtYW4ucmFuZG9tUGxhY2VTaGlwcygpO1xuXG4gICAgdGhpcy5haS5yYW5kb21QbGFjZVNoaXBzKCk7XG5cbiAgICBEaXNwbGF5LmJvYXJkKHRoaXMuaHVtYW4pO1xuXG4gICAgRGlzcGxheS5ib2FyZCh0aGlzLmFpKTtcblxuICAgIERpc3BsYXkuaHVtYW5TaGlwcyh0aGlzLmh1bWFuKTtcblxuICAgIC8vIERpc3BsYXkuaHVtYW5TaGlwcyh0aGlzLmFpKTsgLy8gRklYTUUgdXNlZCBmb3IgZGlzcGxheSBhaSdzIHNoaXBzLCBmb3IgdGVzdGluZ1xuXG4gICAgRGlzcGxheS5tZXNzYWdlKHRoaXMuaHVtYW4sIGBQcmVzcyB0aGUgcmVzdGFydCBidXR0b24gaWZgLCBgeW91J3JlIG5vdCBoYXBweSB3aXRoIHlvdXIgc2hpcHMgbGF5b3V0YCk7XG5cbiAgICBEaXNwbGF5Lm1lc3NhZ2UodGhpcy5haSwgYEtlZXAgdHJhY2sgb2YgZ2FtZSBhbGVydCBoZXJlYCwgYFlvdSB3aWxsIGF0dGFjayB0aGUgZ2FtZWJvYXJkIGFib3ZlYCk7XG5cbiAgICBET00ucHJldmVudFNwYW0uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuXG4gICAgRE9NLmxpc3Rlbkh1bWFuQXR0YWNrcyh0aGlzLmh1bWFuLCB0aGlzLmFpKTtcbiAgfTtcblxuICBzdGF0aWMgaHVtYW5QbGF5T25lVHVybiA9IChodW1hbiwgYWksIHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3QgaHVtYW5BdHRhY2tzU3RhdHVzID0gaHVtYW4uYXR0YWNrKHBvc2l0aW9uLCBhaSk7XG5cbiAgICBsZXQgaHVtYW5NZXNzYWdlID0gYFdlIHNob3QgYXQgZW5lbXkncyB3YXRlciBhbmQgaXQncyBhIG1pc3NgO1xuXG4gICAgaWYgKGh1bWFuQXR0YWNrc1N0YXR1cy5jZWxsU3RhdHVzID09PSAnSGl0Jykge1xuICAgICAgRGlzcGxheS5haURlYXRoU2hpcHMoYWkpO1xuXG4gICAgICBodW1hbk1lc3NhZ2UgPSBgV2Ugc2hvdCBhdCBlbmVteSdzIHdhdGVyIGFuZCBpdCdzIGEgaGl0YDtcblxuICAgICAgaWYgKGh1bWFuQXR0YWNrc1N0YXR1cy5zaGlwU3RhdHVzID09PSAnU3VuaycpIGh1bWFuTWVzc2FnZSArPSBgLCB3ZSBoYXZlIHN1bmsgdGhlaXIgc2hpcGA7XG4gICAgfVxuICAgIGh1bWFuTWVzc2FnZSA9IGh1bWFuTWVzc2FnZS5zcGxpdCgnLCcpO1xuXG4gICAgRGlzcGxheS5zaG90T25Cb2FyZChhaSwgcG9zaXRpb24sIGh1bWFuQXR0YWNrc1N0YXR1cy5jZWxsU3RhdHVzKTtcblxuICAgIERpc3BsYXkubWVzc2FnZShhaSwgaHVtYW5NZXNzYWdlWzBdLCBodW1hbk1lc3NhZ2VbMV0gfHwgJycpO1xuXG4gICAgaWYgKHRoaXMuY2hlY2tHYW1lb3ZlcihhaSkpIHtcbiAgICAgIERpc3BsYXkuc3RvcFVzZXJTcGFtbWluZygpO1xuXG4gICAgICBEaXNwbGF5Lm1lc3NhZ2UoYWksIGBDb25ncmF0dWxhdGlvbiFgLCBgV2UgaGF2ZSB3aW4gdGhlIGJhdHRsZSFgLCBgUGxheSBhZ2Fpbj9gKTtcblxuICAgICAgRGlzcGxheS5tZXNzYWdlKGh1bWFuLCBgQ29uZ3JhdHVsYXRpb24hYCwgYFdlIGhhdmUgd2luIHRoZSBiYXR0bGUhYCwgYFBsYXkgYWdhaW4/YCk7XG4gICAgfVxuICB9O1xuXG4gIHN0YXRpYyBhaVBsYXlPbmVUdXJuID0gKGh1bWFuLCBhaSkgPT4ge1xuICAgIGNvbnN0IGFpQXR0YWNrUmVzdWx0ID0gYWkuYXR0YWNrKGh1bWFuKTtcblxuICAgIGxldCBhaU1lc3NhZ2UgPSBgRW5lbXkgc2hvdCBhdCBvdXIgd2F0ZXIgYW5kIGl0J3MgYSBtaXNzYDtcblxuICAgIGlmIChhaUF0dGFja1Jlc3VsdC5jZWxsU3RhdHVzID09PSAnSGl0Jykge1xuICAgICAgRGlzcGxheS5odW1hblNoaXBzKGh1bWFuKTtcblxuICAgICAgYWlNZXNzYWdlID0gYEVuZW15IHNob3QgYXQgb3VyIHdhdGVyIGFuZCBpdCdzIGEgaGl0YDtcblxuICAgICAgaWYgKGFpQXR0YWNrUmVzdWx0LnNoaXBTdGF0dXMgPT09ICdTdW5rJykgYWlNZXNzYWdlICs9IGAsIHRoZXkgaGF2ZSBzdW5rIG91ciBzaGlwYDtcbiAgICB9XG5cbiAgICBhaU1lc3NhZ2UgPSBhaU1lc3NhZ2Uuc3BsaXQoJywnKTtcblxuICAgIERpc3BsYXkuc2hvdE9uQm9hcmQoaHVtYW4sIGFpQXR0YWNrUmVzdWx0LnBvc2l0aW9uLCBhaUF0dGFja1Jlc3VsdC5jZWxsU3RhdHVzKTtcblxuICAgIERpc3BsYXkubWVzc2FnZShodW1hbiwgYEVuZW15IGlzIGFpbWluZy4uLmAsIGFpTWVzc2FnZVswXSwgYWlNZXNzYWdlWzFdKTtcblxuICAgIGlmICh0aGlzLmNoZWNrR2FtZW92ZXIoaHVtYW4pKSB7XG4gICAgICBEaXNwbGF5LnN0b3BVc2VyU3BhbW1pbmcoKTtcblxuICAgICAgRGlzcGxheS5tZXNzYWdlKGFpLCBgT2ggbm9vLi4uYCwgYEVuZW15IGhhcyB3aW4gdGhlIGJhdHRsZSFgLCBgUGxheSBhZ2Fpbj9gKTtcblxuICAgICAgRGlzcGxheS5tZXNzYWdlKGh1bWFuLCBgT2ggbm8uLi5gLCBgRW5lbXkgaGFzIHdpbiB0aGUgYmF0dGxlIWAsIGBQbGF5IGFnYWluP2ApO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGNsYXNzIERPTSB7XG4gIHN0YXRpYyBtZXNzYWdlSHVtYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1tZXNzYWdlPVwiaHVtYW5cIl1gKTtcblxuICBzdGF0aWMgbWVzc2FnZUFpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbWVzc2FnZT1cImFpXCJdYCk7XG5cbiAgc3RhdGljIGdhbWVib2FyZEh1bWFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZFtkYXRhLWh1bWFuXScpO1xuXG4gIHN0YXRpYyBnYW1lYm9hcmRBaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmRbZGF0YS1haV0nKTtcblxuICBzdGF0aWMgcmVzdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJlc3RhcnRdJyk7XG5cbiAgc3RhdGljIHNldHRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zZXR0aW5nXScpO1xuXG4gIHN0YXRpYyBwcmV2ZW50U3BhbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByZXZlbnQtc3BhbV0nKTtcblxuICBzdGF0aWMgcG9wdXBGb3JtQ3RuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcG9wdXAtZm9ybS1jdG5dJyk7XG5cbiAgc3RhdGljIHBvcHVwRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBvcHVwLWZvcm1dJyk7XG5cbiAgc3RhdGljIHN1Ym1pdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1zdWJtaXQtZm9ybV1gKTtcblxuICBzdGF0aWMgY2xvc2VGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtY2xvc2UtZm9ybV1gKTtcblxuICBzdGF0aWMgaW5wdXRTaXplID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtZm9ybS1pbnB1dC1zaXplXWApO1xuXG4gIHN0YXRpYyBpbnB1dFNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtZm9ybS1pbnB1dC1zaGlwc11gKTtcblxuICBzdGF0aWMgI3Nob3dQb3B1cEZvcm0gPSAoKSA9PiB0aGlzLnBvcHVwRm9ybUN0bi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG5cbiAgc3RhdGljICNoaWRlUG9wdXBGb3JtID0gKCkgPT4gdGhpcy5wb3B1cEZvcm1DdG4uY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuXG4gIHN0YXRpYyBsaXN0ZW5SZXN0YXJ0ID0gKCkgPT4ge1xuICAgIHRoaXMucmVzdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBHYW1lLnN0YXJ0KCk7XG4gICAgfSk7XG4gIH07XG5cbiAgc3RhdGljIGxpc3RlblNldHRpbmcgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXR0aW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIHRoaXMuI3Nob3dQb3B1cEZvcm0oKTtcbiAgICB9KTtcbiAgfTtcblxuICBzdGF0aWMgbGlzdGVuU3VibWl0Rm9ybSA9ICgpID0+IHtcbiAgICB0aGlzLnBvcHVwRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBjb25zdCBpbnB1dFNpemVWYWx1ZSA9ICt0aGlzLmlucHV0U2l6ZS52YWx1ZTtcblxuICAgICAgY29uc3QgaW5wdXRTaGlwc1ZhbHVlID0gdGhpcy5pbnB1dFNoaXBzLnZhbHVlXG4gICAgICAgIC50cmltKClcblxuICAgICAgICAuc3BsaXQoL1xccyovKVxuXG4gICAgICAgIC5yZWR1Y2UoKHRvdGFsLCBjdXJyZW50KSA9PiAoK2N1cnJlbnQgPiAwID8gWy4uLnRvdGFsLCArY3VycmVudF0gOiB0b3RhbCksIFtdKTtcblxuICAgICAgR2FtZS5jaGFuZ2VTaXplKGlucHV0U2l6ZVZhbHVlKTtcblxuICAgICAgR2FtZS5jaGFuZ2VUb3RhbFNoaXBzKGlucHV0U2hpcHNWYWx1ZSk7XG5cbiAgICAgIEdhbWUuc3RhcnQoKTtcblxuICAgICAgdGhpcy4jaGlkZVBvcHVwRm9ybSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIHN0YXRpYyBsaXN0ZW5DbG9zZUZvcm0gPSAoKSA9PiB7XG4gICAgdGhpcy5jbG9zZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgdGhpcy4jaGlkZVBvcHVwRm9ybSgpO1xuICAgIH0pO1xuICB9O1xuXG4gIHN0YXRpYyBsaXN0ZW5IdW1hbkF0dGFja3MgPSAoaHVtYW4sIGFpKSA9PiB7XG4gICAgaWYgKCEoaHVtYW4gaW5zdGFuY2VvZiBIdW1hbikpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBIdW1hbicpO1xuXG4gICAgaWYgKCEoYWkgaW5zdGFuY2VvZiBDb21wdXRlcikpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBBaScpO1xuXG4gICAgY29uc3QgY2VsbHMgPSB0aGlzLmdhbWVib2FyZEFpLnF1ZXJ5U2VsZWN0b3JBbGwoJy5haV9fY2VsbCcpO1xuXG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAnY2xpY2snLFxuXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYXR0YWNrZWQnKTtcblxuICAgICAgICAgIGNvbnN0IHJvdyA9ICtlLnRhcmdldC5kYXRhc2V0LnJvdztcblxuICAgICAgICAgIGNvbnN0IGNvbCA9ICtlLnRhcmdldC5kYXRhc2V0LmNvbDtcblxuICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFBvc2l0aW9uKHJvdywgY29sKTtcblxuICAgICAgICAgIEdhbWUuaHVtYW5QbGF5T25lVHVybihodW1hbiwgYWksIHBvc2l0aW9uKTtcblxuICAgICAgICAgIGlmIChHYW1lLmlzT3ZlcikgcmV0dXJuO1xuXG4gICAgICAgICAgLy8gYWkgcGxheSBpdHMgdHVyblxuICAgICAgICAgIEdhbWUuYWlQbGF5T25lVHVybihodW1hbiwgYWkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHsgb25jZTogdHJ1ZSB9XG4gICAgICApO1xuICAgIH0pO1xuICB9O1xufVxuXG5jbGFzcyBEaXNwbGF5IHtcbiAgc3RhdGljIG1lc3NhZ2UgPSAocGxheWVyLCBjb250ZW50MCwgY29udGVudDEgPSAnJywgY29udGVudDIgPSAnJykgPT4ge1xuICAgIGxldCB0YXJnZXRNZXNzYWdlO1xuXG4gICAgaWYgKHBsYXllciBpbnN0YW5jZW9mIEh1bWFuKSB0YXJnZXRNZXNzYWdlID0gRE9NLm1lc3NhZ2VIdW1hbjtcbiAgICBlbHNlIHRhcmdldE1lc3NhZ2UgPSBET00ubWVzc2FnZUFpO1xuXG4gICAgdGFyZ2V0TWVzc2FnZS5pbm5lckhUTUwgPSBgPHA+JHtjb250ZW50MH08L3A+PHA+JHtjb250ZW50MX08L3A+PHA+JHtjb250ZW50Mn08L3A+YDtcbiAgfTtcblxuICBzdGF0aWMgYm9hcmQgPSAocGxheWVyKSA9PiB7XG4gICAgaWYgKCEocGxheWVyIGluc3RhbmNlb2YgUGxheWVyKSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFBsYXllcicpO1xuXG4gICAgY29uc3QgdGFyZ2V0Qm9hcmQgPSBwbGF5ZXIgaW5zdGFuY2VvZiBIdW1hbiA/IERPTS5nYW1lYm9hcmRIdW1hbiA6IERPTS5nYW1lYm9hcmRBaTtcblxuICAgIHRhcmdldEJvYXJkLmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgdHlwZSA9IHBsYXllciBpbnN0YW5jZW9mIEh1bWFuID8gJ2h1bWFuJyA6ICdhaSc7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9TSVpFOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgX1NJWkU7IGorKykge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnY2VudGVyJyk7XG5cbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoYCR7dHlwZX1fX2NlbGxgKTtcblxuICAgICAgICBkaXYuZGF0YXNldC5yb3cgPSBpO1xuXG4gICAgICAgIGRpdi5kYXRhc2V0LmNvbCA9IGo7XG5cbiAgICAgICAgdGFyZ2V0Qm9hcmQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgc3RhdGljIGh1bWFuU2hpcHMgPSAocGxheWVyKSA9PiB7XG4gICAgaWYgKCEocGxheWVyIGluc3RhbmNlb2YgUGxheWVyKSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFBsYXllcicpO1xuXG4gICAgY29uc3Qgc2hpcHMgPSBwbGF5ZXIuYm9hcmQuc2hpcHM7XG5cbiAgICAvLyBsb29wIHRocm91Z2ggMyB0eXBlOiBoZWFsdGh5LCB3YXJuaW5nLCBkZWF0aFxuICAgIGZvciAoY29uc3Qgc2hpcFR5cGUgaW4gc2hpcHMpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRUeXBlID0gc2hpcHNbc2hpcFR5cGVdO1xuXG4gICAgICAvLyBsb29wIHRocm91Z2ggYWxsIHNoaXBzIGluIDEgdHlwZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50VHlwZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjdXJyZW50U2hpcEluZm8gPSBjdXJyZW50VHlwZVtpXTtcblxuICAgICAgICBjb25zdCBsb2NhdGlvbnMgPSBjdXJyZW50U2hpcEluZm8ubG9jYXRpb25zO1xuXG4gICAgICAgIGNvbnN0IGlzVmVydGljYWwgPSBjdXJyZW50U2hpcEluZm8uaXNWZXJ0aWNhbDtcblxuICAgICAgICAvLyBsb29wIHRocm91Z2ggYWxsIHBvc2l0aW9uIG9mIHRoYXQgc2hpcFxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxvY2F0aW9ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRMb2NhdGlvbiA9IGxvY2F0aW9uc1tqXTtcblxuICAgICAgICAgIGNvbnN0IHsgcm93LCBjb2wgfSA9IGN1cnJlbnRMb2NhdGlvbjtcblxuICAgICAgICAgIC8vIHNlbGVjdCBleGFjdCBjZWxsIGRvbSBlbGVtZW50XG4gICAgICAgICAgY29uc3QgY2VsbCA9IHBsYXllciBpbnN0YW5jZW9mIEh1bWFuID8gRE9NLmdhbWVib2FyZEh1bWFuLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz1cIiR7cm93fVwiXVtkYXRhLWNvbD1cIiR7Y29sfVwiXWApIDogRE9NLmdhbWVib2FyZEFpLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXJvdz1cIiR7cm93fVwiXVtkYXRhLWNvbD1cIiR7Y29sfVwiXWApO1xuXG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKHNoaXBUeXBlKTtcblxuICAgICAgICAgIGlmIChsb2NhdGlvbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXBfX29uZV9fbGVuZ3RoJyk7XG5cbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpc1ZlcnRpY2FsKSBjZWxsLmNsYXNzTGlzdC5hZGQoJ3ZlcnRpY2FsJyk7XG4gICAgICAgICAgZWxzZSBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hvcml6b24nKTtcblxuICAgICAgICAgIGlmICghaikgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwX19oZWFkJyk7XG4gICAgICAgICAgZWxzZSBpZiAoaiA9PT0gbG9jYXRpb25zLmxlbmd0aCAtIDEpIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcF9fdGFpbCcpO1xuICAgICAgICAgIGVsc2UgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwX19ib2R5Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgc3RhdGljIGFpRGVhdGhTaGlwcyA9IChwbGF5ZXIpID0+IHtcbiAgICBpZiAoIShwbGF5ZXIgaW5zdGFuY2VvZiBQbGF5ZXIpKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgUGxheWVyJyk7XG5cbiAgICBjb25zdCBkZWF0aFNoaXBzID0gcGxheWVyLmJvYXJkLnNoaXBzLmRlYXRoO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWF0aFNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjdXJyZW50U2hpcEluZm8gPSBkZWF0aFNoaXBzW2ldO1xuXG4gICAgICBjb25zdCBsb2NhdGlvbnMgPSBjdXJyZW50U2hpcEluZm8ubG9jYXRpb25zO1xuXG4gICAgICBjb25zdCBpc1ZlcnRpY2FsID0gY3VycmVudFNoaXBJbmZvLmlzVmVydGljYWw7XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbG9jYXRpb25zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRMb2NhdGlvbiA9IGxvY2F0aW9uc1tqXTtcblxuICAgICAgICBjb25zdCB7IHJvdywgY29sIH0gPSBjdXJyZW50TG9jYXRpb247XG5cbiAgICAgICAgY29uc3QgY2VsbCA9IERPTS5nYW1lYm9hcmRBaS5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9XCIke3Jvd31cIl1bZGF0YS1jb2w9XCIke2NvbH1cIl1gKTtcblxuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2RlYXRoJyk7XG5cbiAgICAgICAgaWYgKGxvY2F0aW9ucy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXBfX29uZV9fbGVuZ3RoJyk7XG5cbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1ZlcnRpY2FsKSBjZWxsLmNsYXNzTGlzdC5hZGQoJ3ZlcnRpY2FsJyk7XG4gICAgICAgIGVsc2UgY2VsbC5jbGFzc0xpc3QuYWRkKCdob3Jpem9uJyk7XG5cbiAgICAgICAgaWYgKCFqKSBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXBfX2hlYWQnKTtcbiAgICAgICAgZWxzZSBpZiAoaiA9PT0gbG9jYXRpb25zLmxlbmd0aCAtIDEpIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcF9fdGFpbCcpO1xuICAgICAgICBlbHNlIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcF9fYm9keScpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBzdGF0aWMgc2hvdE9uQm9hcmQgPSAocGxheWVyLCBwb3NpdGlvbiwgc3RhdHVzKSA9PiB7XG4gICAgaWYgKCEocG9zaXRpb24gaW5zdGFuY2VvZiBQb3NpdGlvbikgfHwgIShwbGF5ZXIgaW5zdGFuY2VvZiBQbGF5ZXIpKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYXJndW1lbnQnKTtcblxuICAgIGNvbnN0IHsgcm93LCBjb2wgfSA9IHBvc2l0aW9uO1xuXG4gICAgbGV0IGdhbWVib2FyZDtcblxuICAgIGlmIChwbGF5ZXIgaW5zdGFuY2VvZiBIdW1hbikgZ2FtZWJvYXJkID0gRE9NLmdhbWVib2FyZEh1bWFuO1xuICAgIGVsc2UgZ2FtZWJvYXJkID0gRE9NLmdhbWVib2FyZEFpO1xuXG4gICAgY29uc3QgY2VsbCA9IGdhbWVib2FyZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jb2w9XCIke2NvbH1cIl1bZGF0YS1yb3c9XCIke3Jvd31cIl1gKTtcblxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICBpZiAoc3RhdHVzID09PSAnSGl0Jykgc3Bhbi5jbGFzc0xpc3QuYWRkKCdoaXRfX3Nob3QnKTtcbiAgICBlbHNlIHNwYW4uY2xhc3NMaXN0LmFkZCgnbWlzc19fc2hvdCcpO1xuXG4gICAgY2VsbC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgfTtcblxuICBzdGF0aWMgc3RvcFVzZXJTcGFtbWluZyA9ICgpID0+IHtcbiAgICBET00ucHJldmVudFNwYW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICB9O1xufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGhlYWRlciBidXR0b24gdmlldyBvbiBnaXRodWIgKi9cbi5idG4tMTMsXG4uYnRuLTEzICosXG4uYnRuLTEzIDphZnRlcixcbi5idG4tMTMgOmJlZm9yZSxcbi5idG4tMTM6YWZ0ZXIsXG4uYnRuLTEzOmJlZm9yZSB7XG4gIGJvcmRlcjogMCBzb2xpZDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5idG4tMTMge1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgY29sb3I6ICNmZjAwMDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBIZWx2ZXRpY2EgTmV1ZSwgQXJpYWwsIE5vdG8gU2Fucywgc2Fucy1zZXJpZiwgQXBwbGUgQ29sb3IgRW1vamksIFNlZ29lIFVJIEVtb2ppLCBTZWdvZSBVSSBTeW1ib2wsXG4gICAgTm90byBDb2xvciBFbW9qaTtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250LXdlaWdodDogOTAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBtYXJnaW46IDA7XG4gIC8qIC13ZWJraXQtbWFzay1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoIzAwMCwgI2ZmZik7ICovXG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uYnRuLTEzOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLmJ0bi0xMzotbW96LWZvY3VzcmluZyB7XG4gIG91dGxpbmU6IGF1dG87XG59XG4uYnRuLTEzIHN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmJ0bi0xMyBbaGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYnRuLTEzIHtcbiAgYm9yZGVyLXJhZGl1czogOTlyZW07XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwLjhyZW0gM3JlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJ0bi0xMyBzcGFuIHtcbiAgLyogbWl4LWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7ICovXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cbi5idG4tMTM6YWZ0ZXIsXG4uYnRuLTEzOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHJnYigxNDMsIDY3LCA2Nyk7XG4gIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKFxuICAgIDAgMCxcbiAgICAxMDAlIDAsXG4gICAgMTAwJSBjYWxjKHZhcigtLXByb2dyZXNzLCAwJSkgLyAyKSxcbiAgICAwIGNhbGModmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxuICAgIDAgMCxcbiAgICAwIGNhbGMoMTAwJSAtIHZhcigtLXByb2dyZXNzLCAwJSkgLyAyKSxcbiAgICAxMDAlIGNhbGMoMTAwJSAtIHZhcigtLXByb2dyZXNzLCAwJSkgLyAyKSxcbiAgICAxMDAlIDEwMCUsXG4gICAgMCAxMDAlLFxuICAgIDAgY2FsYygxMDAlIC0gdmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpXG4gICk7XG4gIGNsaXAtcGF0aDogcG9seWdvbihcbiAgICAwIDAsXG4gICAgMTAwJSAwLFxuICAgIDEwMCUgY2FsYyh2YXIoLS1wcm9ncmVzcywgMCUpIC8gMiksXG4gICAgMCBjYWxjKHZhcigtLXByb2dyZXNzLCAwJSkgLyAyKSxcbiAgICAwIDAsXG4gICAgMCBjYWxjKDEwMCUgLSB2YXIoLS1wcm9ncmVzcywgMCUpIC8gMiksXG4gICAgMTAwJSBjYWxjKDEwMCUgLSB2YXIoLS1wcm9ncmVzcywgMCUpIC8gMiksXG4gICAgMTAwJSAxMDAlLFxuICAgIDAgMTAwJSxcbiAgICAwIGNhbGMoMTAwJSAtIHZhcigtLXByb2dyZXNzLCAwJSkgLyAyKVxuICApO1xuICBjb250ZW50OiAnJztcbiAgaW5zZXQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoMTAwJSAtIHZhcigtLXByb2dyZXNzLCAwJSkgLyAxLjk5KSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UsIC13ZWJraXQtY2xpcC1wYXRoIDAuMnMgZWFzZTtcbiAgdHJhbnNpdGlvbjogY2xpcC1wYXRoIDAuMnMgZWFzZSwgdHJhbnNmb3JtIDAuMnMgZWFzZTtcbiAgdHJhbnNpdGlvbjogY2xpcC1wYXRoIDAuMnMgZWFzZSwgdHJhbnNmb3JtIDAuMnMgZWFzZSwgLXdlYmtpdC1jbGlwLXBhdGggMC4ycyBlYXNlO1xufVxuLmJ0bi0xMzphZnRlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKC0xMDAlICsgdmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDEuOTkpKTtcbn1cbi5idG4tMTM6aG92ZXIge1xuICAtLXByb2dyZXNzOiAxMDAlO1xufVxuXG4vKiBoZWFkZXIgYnV0dG9uIHZpZXcgb24gZ2l0aHViICovXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvYnV0dG9uLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxpQ0FBaUM7QUFDakM7Ozs7OztFQU1FLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHdDQUF3QztFQUN4QywwQkFBMEI7RUFDMUIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsZUFBZTtFQUNmO29CQUNrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QsNkRBQTZEO0VBQzdELFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjtBQUNBOztFQUVFLDRCQUE0QjtFQUM1Qjs7Ozs7Ozs7Ozs7R0FXQztFQUNEOzs7Ozs7Ozs7OztHQVdDO0VBQ0QsV0FBVztFQUNYLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsOERBQThEO0VBQzlELDREQUE0RDtFQUM1RCxvREFBb0Q7RUFDcEQsaUZBQWlGO0FBQ25GO0FBQ0E7RUFDRSwrREFBK0Q7QUFDakU7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQSxpQ0FBaUNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaGVhZGVyIGJ1dHRvbiB2aWV3IG9uIGdpdGh1YiAqL1xcbi5idG4tMTMsXFxuLmJ0bi0xMyAqLFxcbi5idG4tMTMgOmFmdGVyLFxcbi5idG4tMTMgOmJlZm9yZSxcXG4uYnRuLTEzOmFmdGVyLFxcbi5idG4tMTM6YmVmb3JlIHtcXG4gIGJvcmRlcjogMCBzb2xpZDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5idG4tMTMge1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XFxuICBjb2xvcjogI2ZmMDAwMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgSGVsdmV0aWNhIE5ldWUsIEFyaWFsLCBOb3RvIFNhbnMsIHNhbnMtc2VyaWYsIEFwcGxlIENvbG9yIEVtb2ppLCBTZWdvZSBVSSBFbW9qaSwgU2Vnb2UgVUkgU3ltYm9sLFxcbiAgICBOb3RvIENvbG9yIEVtb2ppO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBtYXJnaW46IDA7XFxuICAvKiAtd2Via2l0LW1hc2staW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCMwMDAsICNmZmYpOyAqL1xcbiAgcGFkZGluZzogMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbi5idG4tMTM6ZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG4uYnRuLTEzOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IGF1dG87XFxufVxcbi5idG4tMTMgc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuLmJ0bi0xMyBbaGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uYnRuLTEzIHtcXG4gIGJvcmRlci1yYWRpdXM6IDk5cmVtO1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcGFkZGluZzogMC44cmVtIDNyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5idG4tMTMgc3BhbiB7XFxuICAvKiBtaXgtYmxlbmQtbW9kZTogZGlmZmVyZW5jZTsgKi9cXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxufVxcbi5idG4tMTM6YWZ0ZXIsXFxuLmJ0bi0xMzpiZWZvcmUge1xcbiAgYmFja2dyb3VuZDogcmdiKDE0MywgNjcsIDY3KTtcXG4gIC13ZWJraXQtY2xpcC1wYXRoOiBwb2x5Z29uKFxcbiAgICAwIDAsXFxuICAgIDEwMCUgMCxcXG4gICAgMTAwJSBjYWxjKHZhcigtLXByb2dyZXNzLCAwJSkgLyAyKSxcXG4gICAgMCBjYWxjKHZhcigtLXByb2dyZXNzLCAwJSkgLyAyKSxcXG4gICAgMCAwLFxcbiAgICAwIGNhbGMoMTAwJSAtIHZhcigtLXByb2dyZXNzLCAwJSkgLyAyKSxcXG4gICAgMTAwJSBjYWxjKDEwMCUgLSB2YXIoLS1wcm9ncmVzcywgMCUpIC8gMiksXFxuICAgIDEwMCUgMTAwJSxcXG4gICAgMCAxMDAlLFxcbiAgICAwIGNhbGMoMTAwJSAtIHZhcigtLXByb2dyZXNzLCAwJSkgLyAyKVxcbiAgKTtcXG4gIGNsaXAtcGF0aDogcG9seWdvbihcXG4gICAgMCAwLFxcbiAgICAxMDAlIDAsXFxuICAgIDEwMCUgY2FsYyh2YXIoLS1wcm9ncmVzcywgMCUpIC8gMiksXFxuICAgIDAgY2FsYyh2YXIoLS1wcm9ncmVzcywgMCUpIC8gMiksXFxuICAgIDAgMCxcXG4gICAgMCBjYWxjKDEwMCUgLSB2YXIoLS1wcm9ncmVzcywgMCUpIC8gMiksXFxuICAgIDEwMCUgY2FsYygxMDAlIC0gdmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxcbiAgICAxMDAlIDEwMCUsXFxuICAgIDAgMTAwJSxcXG4gICAgMCBjYWxjKDEwMCUgLSB2YXIoLS1wcm9ncmVzcywgMCUpIC8gMilcXG4gICk7XFxuICBjb250ZW50OiAnJztcXG4gIGluc2V0OiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoMTAwJSAtIHZhcigtLXByb2dyZXNzLCAwJSkgLyAxLjk5KSk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLCAtd2Via2l0LWNsaXAtcGF0aCAwLjJzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiBjbGlwLXBhdGggMC4ycyBlYXNlLCB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogY2xpcC1wYXRoIDAuMnMgZWFzZSwgdHJhbnNmb3JtIDAuMnMgZWFzZSwgLXdlYmtpdC1jbGlwLXBhdGggMC4ycyBlYXNlO1xcbn1cXG4uYnRuLTEzOmFmdGVyIHtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKC0xMDAlICsgdmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDEuOTkpKTtcXG59XFxuLmJ0bi0xMzpob3ZlciB7XFxuICAtLXByb2dyZXNzOiAxMDAlO1xcbn1cXG5cXG4vKiBoZWFkZXIgYnV0dG9uIHZpZXcgb24gZ2l0aHViICovXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuZm9vdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nOiAzcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuLmZvb3RlciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5mb290ZXIgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9mb290ZXIuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZvb3RlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBwYWRkaW5nOiAzcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5mb290ZXIgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuLmZvb3RlciBhOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLy4uL2Fzc2V0cy9pY29uL2FpbS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5oZWFkZXJfX2ljb25fX2N0biB7XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcmVtO1xufVxuXG4uaGVhZGVyX19pY29uIHtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGNlbnRlci9jb250YWluIG5vLXJlcGVhdCByZWQ7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogOTlyZW07XG4gIHdpZHRoOiA2cmVtO1xuICBhbmltYXRpb246IHJvdGF0ZSA3NTBtcyBsaW5lYXIgMG1zIGluZmluaXRlO1xuICBjdXJzb3I6IGNyb3NzaGFpcjtcbn1cblxuLmhlYWRlcl9faWNvbjpob3ZlciB7XG4gIGFuaW1hdGlvbjogbm9uZTtcbn1cblxuLmhlYWRlcl9fdGl0bGUge1xuICBmb250LXNpemU6IDZyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5oZWFkZXJfX2xpbmsge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaGVhZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0ZBQXdFO0VBQ3hFLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLDJDQUEyQztFQUMzQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uaGVhZGVyX19pY29uX19jdG4ge1xcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcmVtO1xcbn1cXG5cXG4uaGVhZGVyX19pY29uIHtcXG4gIGJhY2tncm91bmQ6IHVybCgnLi8uLi9hc3NldHMvaWNvbi9haW0uc3ZnJykgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0IHJlZDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDk5cmVtO1xcbiAgd2lkdGg6IDZyZW07XFxuICBhbmltYXRpb246IHJvdGF0ZSA3NTBtcyBsaW5lYXIgMG1zIGluZmluaXRlO1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbi5oZWFkZXJfX2ljb246aG92ZXIge1xcbiAgYW5pbWF0aW9uOiBub25lO1xcbn1cXG5cXG4uaGVhZGVyX190aXRsZSB7XFxuICBmb250LXNpemU6IDZyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmhlYWRlcl9fbGluayB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XFxuICBmcm9tIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi8uLi9hc3NldHMvaW1nL2JhdHRsZXNoaXAucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMCBhdXRvIDEwcmVtO1xuICBnYXA6IDJyZW07XG59XG5cbi5nYW1lYm9hcmRfX2N0bl9fY3RuIHtcbiAgbWF4LXdpZHRoOiA1MnJlbTtcbn1cblxuLmdhbWVib2FyZF9faGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uZ2FtZWJvYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XG4gIGdhcDogMXB4O1xuICB3aWR0aDogY2FsYyg1MHZ3IC0gMXJlbSk7XG4gIGhlaWdodDogY2FsYyg1MHZ3IC0gMXJlbSk7XG4gIG1heC13aWR0aDogNTByZW07XG4gIG1heC1oZWlnaHQ6IDUwcmVtO1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgY2VudGVyL2NvdmVyIG5vLXJlcGVhdCByZWQ7XG59XG5cbi5nYW1lYm9hcmQgPiBkaXYge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMCwgMCk7XG59XG5cbi5nYW1lYm9hcmQgPiAuY29udGFpbl9fc2hpcCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4uZ2FtZWJvYXJkID4gZGl2ID4gc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDUwJTtcbiAgbWluLWhlaWdodDogMnB4O1xuICBhc3BlY3QtcmF0aW86IDEvMTtcbiAgYm9yZGVyLXJhZGl1czogOTlyZW07XG59XG5cbi5nYW1lYm9hcmQgPiBkaXYgPiAuaGl0X19zaG90IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xufVxuXG4uZ2FtZWJvYXJkID4gZGl2ID4gLm1pc3NfX3Nob3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG59XG5cbi5nYW1lYm9hcmQgLmFpX19jZWxsIHtcbiAgY3Vyc29yOiBjZWxsO1xufVxuXG4uZ2FtZWJvYXJkIC5haV9fY2VsbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIyLCAyNTUsIDEyMiwgMC41KTtcbn1cblxuLmdhbWVib2FyZCAuYWlfX2NlbGwuYXR0YWNrZWQge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uZ2FtZWJvYXJkIC5haV9fY2VsbC5hdHRhY2tlZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxMjYsIDEyNiwgMC41KTtcbn1cblxuLmhlYWx0aHkge1xuICBib3JkZXItY29sb3I6IGdyZWVuICFpbXBvcnRhbnQ7XG59XG5cbi53YXJuaW5nIHtcbiAgYm9yZGVyLWNvbG9yOiB5ZWxsb3cgIWltcG9ydGFudDtcbn1cblxuLmRlYXRoIHtcbiAgYm9yZGVyLWNvbG9yOiByZWQgIWltcG9ydGFudDtcbn1cblxuLyogdG8gcGxhY2Ugc2hpcCBpbiB0aGUgcmlnaHQgZGlyZWN0aW9uICovXG4uc2hpcF9faGVhZC52ZXJ0aWNhbCB7XG4gIGJvcmRlci13aWR0aDogNHB4IDAgNHB4IDRweDtcbn1cblxuLnNoaXBfX2hlYWQuaG9yaXpvbiB7XG4gIGJvcmRlci13aWR0aDogNHB4IDRweCAwIDRweDtcbn1cblxuLnNoaXBfX2JvZHkudmVydGljYWwge1xuICBib3JkZXItd2lkdGg6IDRweCAwIDRweCAwO1xufVxuXG4uc2hpcF9fYm9keS5ob3Jpem9uIHtcbiAgYm9yZGVyLXdpZHRoOiAwIDRweCAwIDRweDtcbn1cblxuLnNoaXBfX3RhaWwudmVydGljYWwge1xuICBib3JkZXItd2lkdGg6IDRweCA0cHggNHB4IDA7XG59XG5cbi5zaGlwX190YWlsLmhvcml6b24ge1xuICBib3JkZXItd2lkdGg6IDAgNHB4IDRweCA0cHg7XG59XG5cbi5zaGlwX19vbmVfX2xlbmd0aCB7XG4gIGJvcmRlci13aWR0aDogNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kaXNwbGF5X19tZXNzYWdlIHtcbiAgYm9yZGVyOiAycHggZG90dGVkIHJlZDtcbiAgYm9yZGVyLXJhZGl1czogOTlyZW07XG4gIHBhZGRpbmc6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAycmVtIDA7XG4gIG1heC13aWR0aDogNTByZW07XG59XG5cbi5kaXNwbGF5X19tZXNzYWdlIHAge1xuICBtYXJnaW46IDAgMCAxcmVtO1xufVxuXG4uZ2FtZWJvYXJkX19jdG4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbltkYXRhLXByZXZlbnQtc3BhbV0ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApOyAvKiB0cmFuc3BhcmVudCAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGN1cnNvcjogY2VsbDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHgpIHtcbiAgLmRpc3BsYXlfX21lc3NhZ2UgcCB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxRQUFRO0VBQ1Isd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLDhFQUE0RTtBQUM5RTs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUEseUNBQXlDO0FBQ3pDO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHdDQUF3QyxFQUFFLGdCQUFnQjtFQUMxRCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtBQUNkOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMCBhdXRvIDEwcmVtO1xcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4uZ2FtZWJvYXJkX19jdG5fX2N0biB7XFxuICBtYXgtd2lkdGg6IDUycmVtO1xcbn1cXG5cXG4uZ2FtZWJvYXJkX19oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ2FwOiAxcHg7XFxuICB3aWR0aDogY2FsYyg1MHZ3IC0gMXJlbSk7XFxuICBoZWlnaHQ6IGNhbGMoNTB2dyAtIDFyZW0pO1xcbiAgbWF4LXdpZHRoOiA1MHJlbTtcXG4gIG1heC1oZWlnaHQ6IDUwcmVtO1xcbiAgYmFja2dyb3VuZDogdXJsKCcuLy4uL2Fzc2V0cy9pbWcvYmF0dGxlc2hpcC5wbmcnKSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0IHJlZDtcXG59XFxuXFxuLmdhbWVib2FyZCA+IGRpdiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMCwgMCk7XFxufVxcblxcbi5nYW1lYm9hcmQgPiAuY29udGFpbl9fc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuLmdhbWVib2FyZCA+IGRpdiA+IHNwYW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIG1pbi1oZWlnaHQ6IDJweDtcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgYm9yZGVyLXJhZGl1czogOTlyZW07XFxufVxcblxcbi5nYW1lYm9hcmQgPiBkaXYgPiAuaGl0X19zaG90IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmdhbWVib2FyZCA+IGRpdiA+IC5taXNzX19zaG90IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuXFxuLmdhbWVib2FyZCAuYWlfX2NlbGwge1xcbiAgY3Vyc29yOiBjZWxsO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5haV9fY2VsbDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyMiwgMjU1LCAxMjIsIDAuNSk7XFxufVxcblxcbi5nYW1lYm9hcmQgLmFpX19jZWxsLmF0dGFja2VkIHtcXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi5nYW1lYm9hcmQgLmFpX19jZWxsLmF0dGFja2VkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxMjYsIDEyNiwgMC41KTtcXG59XFxuXFxuLmhlYWx0aHkge1xcbiAgYm9yZGVyLWNvbG9yOiBncmVlbiAhaW1wb3J0YW50O1xcbn1cXG5cXG4ud2FybmluZyB7XFxuICBib3JkZXItY29sb3I6IHllbGxvdyAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZGVhdGgge1xcbiAgYm9yZGVyLWNvbG9yOiByZWQgIWltcG9ydGFudDtcXG59XFxuXFxuLyogdG8gcGxhY2Ugc2hpcCBpbiB0aGUgcmlnaHQgZGlyZWN0aW9uICovXFxuLnNoaXBfX2hlYWQudmVydGljYWwge1xcbiAgYm9yZGVyLXdpZHRoOiA0cHggMCA0cHggNHB4O1xcbn1cXG5cXG4uc2hpcF9faGVhZC5ob3Jpem9uIHtcXG4gIGJvcmRlci13aWR0aDogNHB4IDRweCAwIDRweDtcXG59XFxuXFxuLnNoaXBfX2JvZHkudmVydGljYWwge1xcbiAgYm9yZGVyLXdpZHRoOiA0cHggMCA0cHggMDtcXG59XFxuXFxuLnNoaXBfX2JvZHkuaG9yaXpvbiB7XFxuICBib3JkZXItd2lkdGg6IDAgNHB4IDAgNHB4O1xcbn1cXG5cXG4uc2hpcF9fdGFpbC52ZXJ0aWNhbCB7XFxuICBib3JkZXItd2lkdGg6IDRweCA0cHggNHB4IDA7XFxufVxcblxcbi5zaGlwX190YWlsLmhvcml6b24ge1xcbiAgYm9yZGVyLXdpZHRoOiAwIDRweCA0cHggNHB4O1xcbn1cXG5cXG4uc2hpcF9fb25lX19sZW5ndGgge1xcbiAgYm9yZGVyLXdpZHRoOiA0cHggIWltcG9ydGFudDtcXG59XFxuXFxuLmRpc3BsYXlfX21lc3NhZ2Uge1xcbiAgYm9yZGVyOiAycHggZG90dGVkIHJlZDtcXG4gIGJvcmRlci1yYWRpdXM6IDk5cmVtO1xcbiAgcGFkZGluZzogMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMnJlbSAwO1xcbiAgbWF4LXdpZHRoOiA1MHJlbTtcXG59XFxuXFxuLmRpc3BsYXlfX21lc3NhZ2UgcCB7XFxuICBtYXJnaW46IDAgMCAxcmVtO1xcbn1cXG5cXG4uZ2FtZWJvYXJkX19jdG4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5bZGF0YS1wcmV2ZW50LXNwYW1dIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTsgLyogdHJhbnNwYXJlbnQgKi9cXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGN1cnNvcjogY2VsbDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHgpIHtcXG4gIC5kaXNwbGF5X19tZXNzYWdlIHAge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLm5hdiB7XG4gIHBhZGRpbmc6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGdhcDogMXJlbTtcbn1cblxuLndhcm5pbmctY3RuIHtcbiAgbWF4LXdpZHRoOiA1MHJlbTtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLndhcm5pbmctY3RuIHAge1xufVxuXG4ucG9wdXAtZm9ybS1jdG4ge1xuICBsaW5lLWhlaWdodDogMi40cmVtO1xuICBmb250LXNpemU6IDEuNnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMTAwdmg7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLnBvcHVwLWZvcm0tdGl0bGUtY3RuIHtcbn1cblxuLnBvcHVwLWZvcm0tdGl0bGUge1xuICBmb250LXNpemU6IDZyZW07XG4gIGxpbmUtaGVpZ2h0OiA4cmVtO1xufVxuXG4uZm9ybS1jdG4ge1xuICBmbGV4OiAxIDEgNTByZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDUwcmVtO1xufVxuXG4uZm9ybSB7XG59XG5cbmlucHV0IHtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG59XG5cbmlucHV0OmludmFsaWQge1xuICBib3JkZXItY29sb3I6IHJlZDtcbiAgb3V0bGluZS1jb2xvcjogcmVkO1xufVxuXG5pbnB1dDp2YWxpZCB7XG4gIGJvcmRlci1jb2xvcjogZ3JlZW47XG4gIG91dGxpbmUtY29sb3I6IGdyZWVuO1xufVxuXG4uc3VibWl0LWZvcm0ge1xufVxuXG4uY2xvc2UtZm9ybSB7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbmF2LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtBQUNBOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixvQ0FBb0M7RUFDcEMsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0FBQ0E7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7QUFDQTs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtBQUN0Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm5hdiB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGdhcDogMXJlbTtcXG59XFxuXFxuLndhcm5pbmctY3RuIHtcXG4gIG1heC13aWR0aDogNTByZW07XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG5cXG4ud2FybmluZy1jdG4gcCB7XFxufVxcblxcbi5wb3B1cC1mb3JtLWN0biB7XFxuICBsaW5lLWhlaWdodDogMi40cmVtO1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHotaW5kZXg6IDEwMDtcXG59XFxuXFxuLnBvcHVwLWZvcm0tdGl0bGUtY3RuIHtcXG59XFxuXFxuLnBvcHVwLWZvcm0tdGl0bGUge1xcbiAgZm9udC1zaXplOiA2cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDhyZW07XFxufVxcblxcbi5mb3JtLWN0biB7XFxuICBmbGV4OiAxIDEgNTByZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogNTByZW07XFxufVxcblxcbi5mb3JtIHtcXG59XFxuXFxuaW5wdXQge1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbn1cXG5cXG5pbnB1dDppbnZhbGlkIHtcXG4gIGJvcmRlci1jb2xvcjogcmVkO1xcbiAgb3V0bGluZS1jb2xvcjogcmVkO1xcbn1cXG5cXG5pbnB1dDp2YWxpZCB7XFxuICBib3JkZXItY29sb3I6IGdyZWVuO1xcbiAgb3V0bGluZS1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5zdWJtaXQtZm9ybSB7XFxufVxcblxcbi5jbG9zZS1mb3JtIHtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcbiAgIHYyLjAgfCAyMDExMDEyNlxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcbiovXG5cbmh0bWwsXG5ib2R5LFxuZGl2LFxuc3BhbixcbmFwcGxldCxcbm9iamVjdCxcbmlmcmFtZSxcbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNixcbnAsXG5ibG9ja3F1b3RlLFxucHJlLFxuYSxcbmFiYnIsXG5hY3JvbnltLFxuYWRkcmVzcyxcbmJpZyxcbmNpdGUsXG5jb2RlLFxuZGVsLFxuZGZuLFxuZW0sXG5pbWcsXG5pbnMsXG5rYmQsXG5xLFxucyxcbnNhbXAsXG5zbWFsbCxcbnN0cmlrZSxcbnN0cm9uZyxcbnN1YixcbnN1cCxcbnR0LFxudmFyLFxuYixcbnUsXG5pLFxuY2VudGVyLFxuZGwsXG5kdCxcbmRkLFxub2wsXG51bCxcbmxpLFxuZmllbGRzZXQsXG5mb3JtLFxubGFiZWwsXG5sZWdlbmQsXG50YWJsZSxcbmNhcHRpb24sXG50Ym9keSxcbnRmb290LFxudGhlYWQsXG50cixcbnRoLFxudGQsXG5hcnRpY2xlLFxuYXNpZGUsXG5jYW52YXMsXG5kZXRhaWxzLFxuZW1iZWQsXG5maWd1cmUsXG5maWdjYXB0aW9uLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbm91dHB1dCxcbnJ1YnksXG5zZWN0aW9uLFxuc3VtbWFyeSxcbnRpbWUsXG5tYXJrLFxuYXVkaW8sXG52aWRlbyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEwMCU7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuICBsaW5lLWhlaWdodDogMTtcbn1cbm9sLFxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSxcbnEge1xuICBxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSxcbmJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSxcbnE6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgY29udGVudDogbm9uZTtcbn1cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaUZFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULGVBQWU7RUFDZixhQUFhO0VBQ2Isd0JBQXdCO0FBQzFCO0FBQ0EsZ0RBQWdEO0FBQ2hEOzs7Ozs7Ozs7OztFQVdFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTs7RUFFRSxnQkFBZ0I7QUFDbEI7QUFDQTs7RUFFRSxZQUFZO0FBQ2Q7QUFDQTs7OztFQUlFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsXFxuYm9keSxcXG5kaXYsXFxuc3BhbixcXG5hcHBsZXQsXFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5kZXRhaWxzLFxcbmZpZ2NhcHRpb24sXFxuZmlndXJlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbnNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLFxcbnVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsXFxucSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLFxcbmJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsXFxucTphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuKixcbjo6YmVmb3JlLFxuOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbioge1xuICAvKiBjb2xvcjogcmVkOyAqL1xufVxuXG5odG1sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbmJvZHkge1xuICBmb250LXNpemU6IDEuNnZ3O1xuICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbmEge1xuICBjb2xvcjogdW5zZXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5zZXQ7XG59XG5cbnVsLFxubGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiA0cmVtO1xufVxuXG5oMiB7XG4gIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiB1bnNldDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG59XFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcbiAgLyogY29sb3I6IHJlZDsgKi9cXG59XFxuXFxuaHRtbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuYm9keSB7XFxuICBmb250LXNpemU6IDEuNnZ3O1xcbiAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogdW5zZXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuc2V0O1xcbn1cXG5cXG51bCxcXG5saSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyOiB1bnNldDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmNlbnRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnV0dG9uLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYnV0dG9uLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb290ZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb290ZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hlYWRlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25hdi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJET00iLCJHYW1lIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJzdGFydCIsImxpc3RlblJlc3RhcnQiLCJsaXN0ZW5TZXR0aW5nIiwibGlzdGVuQ2xvc2VGb3JtIiwibGlzdGVuU3VibWl0Rm9ybSIsIl9TSVpFIiwiX1RPVEFMX1NISVBTIiwiX1NISVBTX01BWF9MRU5HVEgiLCJTaGlwIiwiX2NyZWF0ZUNsYXNzIiwibGVuIiwiX3RoaXMiLCJfY2xhc3NDYWxsQ2hlY2siLCJFcnJvciIsIk9iamVjdCIsImRlZmluZVByb3BlcnRpZXMiLCJsZW5ndGgiLCJ2YWx1ZSIsImhpdHMiLCJnZXQiLCJfaGl0cyIsImlzU3VuayIsImN1cnJlbnRIZWFsdGgiLCJoaXQiLCJQb3NpdGlvbiIsInJvdyIsImNvbCIsIl9sZWdpdCIsIkNlbGwiLCJfaXNSZWNlaXZlZEF0dGFjayIsIl9zaGlwIiwicmVjZWl2ZWRBdHRhY2siLCJfc2hpcDIiLCJwb3NpdGlvbiIsImlzUmVjZWl2ZWRBdHRhY2siLCJzaGlwIiwic2V0IiwibmV3U2hpcCIsInN0YXR1cyIsIkdhbWVib2FyZCIsIl90aGlzMiIsInNoaXBzSW5mbyIsImJvYXJkIiwiaGl0U2hvdHMiLCJtaXNzU2hvdHMiLCJzaG90cyIsImFsbENsZWFyIiwiZXZlcnkiLCJpbmZvIiwic2hpcHMiLCJyZWR1Y2UiLCJ0b3RhbCIsImN1cnJlbnRTaGlwSW5mbyIsInNoaXBTdGF0dXMiLCJjdXJyZW50U2hpcCIsInNoaXBIZWFsdGgiLCJwdXNoIiwiaGVhbHRoeSIsImRlYXRoIiwid2FybmluZyIsImkiLCJqIiwicGxhY2VTaGlwcyIsInN0YXJ0UG9zaXRpb24iLCJpc1ZlcnRpY2FsIiwiZW5kUG9zaXRpb24iLCJsb2NhdGlvbnMiLCJjZWxscyIsImNlbGwiLCJfaTIiLCJfY2VsbHMiLCJfY2VsbCRzaGlwIiwiY2VsbFN0YXR1cyIsIlBsYXllciIsIl9ib2FyZCIsImtleSIsInJhbmRvbVBsYWNlU2hpcHMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJkaXJlY3Rpb24iLCJlcnJvciIsIkh1bWFuIiwiX1BsYXllciIsIl9pbmhlcml0cyIsIl9zdXBlciIsIl9jcmVhdGVTdXBlciIsIl90aGlzMyIsImNhbGwiLCJhdHRhY2siLCJwbGF5ZXIiLCJDb21wdXRlciIsIl9QbGF5ZXIyIiwiX3N1cGVyMiIsIl90aGlzNCIsImVyciIsIl9jbGFzcyIsIl9kZWZpbmVQcm9wZXJ0eSIsIm5ld1NpemUiLCJnYW1lYm9hcmRBaSIsInN0eWxlIiwiY3NzVGV4dCIsImNvbmNhdCIsImdhbWVib2FyZEh1bWFuIiwibmV3U2hpcHMiLCJwbGF5ZXJUb0NoZWNrIiwiaXNPdmVyIiwiaHVtYW4iLCJhaSIsIkRpc3BsYXkiLCJodW1hblNoaXBzIiwibWVzc2FnZSIsInByZXZlbnRTcGFtIiwiY2xhc3NMaXN0IiwiYWRkIiwibGlzdGVuSHVtYW5BdHRhY2tzIiwiaHVtYW5BdHRhY2tzU3RhdHVzIiwiaHVtYW5NZXNzYWdlIiwiYWlEZWF0aFNoaXBzIiwic3BsaXQiLCJzaG90T25Cb2FyZCIsImNoZWNrR2FtZW92ZXIiLCJzdG9wVXNlclNwYW1taW5nIiwiYWlBdHRhY2tSZXN1bHQiLCJhaU1lc3NhZ2UiLCJfY2xhc3MyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiX3Nob3dQb3B1cEZvcm0iLCJ3cml0YWJsZSIsInBvcHVwRm9ybUN0biIsInJlbW92ZSIsIl9oaWRlUG9wdXBGb3JtIiwicmVzdGFydCIsInNldHRpbmciLCJfY2xhc3NTdGF0aWNQcml2YXRlRmllbGRTcGVjR2V0IiwicG9wdXBGb3JtIiwicHJldmVudERlZmF1bHQiLCJpbnB1dFNpemVWYWx1ZSIsImlucHV0U2l6ZSIsImlucHV0U2hpcHNWYWx1ZSIsImlucHV0U2hpcHMiLCJ0cmltIiwiY3VycmVudCIsIl90b0NvbnN1bWFibGVBcnJheSIsImNoYW5nZVNpemUiLCJjaGFuZ2VUb3RhbFNoaXBzIiwiY2xvc2VGb3JtIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJ0YXJnZXQiLCJkYXRhc2V0IiwiaHVtYW5QbGF5T25lVHVybiIsImFpUGxheU9uZVR1cm4iLCJvbmNlIiwiY29udGVudDAiLCJjb250ZW50MSIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsImNvbnRlbnQyIiwidGFyZ2V0TWVzc2FnZSIsIm1lc3NhZ2VIdW1hbiIsIm1lc3NhZ2VBaSIsImlubmVySFRNTCIsInRhcmdldEJvYXJkIiwidHlwZSIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInNoaXBUeXBlIiwiY3VycmVudFR5cGUiLCJjdXJyZW50TG9jYXRpb24iLCJkZWF0aFNoaXBzIiwiZ2FtZWJvYXJkIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=