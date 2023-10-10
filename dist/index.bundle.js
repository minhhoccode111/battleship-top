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

    // const checkNextCellDirection = (currentCell, direction) => {
    //   if (currentCell.status === 'Miss') return null;

    //   if(currentCell.status==='Not yet')return currentCell
    // };

    _this2.attack = function (player) {
      return _randomAttack(player);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9qcy9jbGFzcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvanMvZG9tLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9jc3MvYnV0dG9uLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvY3NzL2Zvb3Rlci5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9oZWFkZXIuY3NzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9jc3MvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9uYXYuY3NzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9jc3MvcmVzZXQuY3NzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvY3NzL2J1dHRvbi5jc3M/NzJhOSIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvY3NzL2Zvb3Rlci5jc3M/YWI4YyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvY3NzL2hlYWRlci5jc3M/OGFjMSIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvY3NzL21haW4uY3NzPzJjOWYiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9uYXYuY3NzPzExZGMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9yZXNldC5jc3M/MTUyYiIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL2Nzcy9uYXYuY3NzJztcbmltcG9ydCAnLi9jc3MvbWFpbi5jc3MnO1xuaW1wb3J0ICcuL2Nzcy9yZXNldC5jc3MnO1xuaW1wb3J0ICcuL2Nzcy9zdHlsZS5jc3MnO1xuaW1wb3J0ICcuL2Nzcy9mb290ZXIuY3NzJztcbmltcG9ydCAnLi9jc3MvYnV0dG9uLmNzcyc7XG5pbXBvcnQgJy4vY3NzL2hlYWRlci5jc3MnO1xuXG4vLyBpbXBvcnQgQWltIGZyb20gJy4vYXNzZXRzL2ljb24vYWltLnN2Zyc7XG4vLyBpbXBvcnQgQmF0dGxlc2hpcCBmcm9tICcuL2Fzc2V0cy9pbWcvYmF0dGxlc2hpcC5wbmcnO1xuXG5pbXBvcnQgJy4vanMvZG9tLmpzJztcbmltcG9ydCAnLi9qcy9jbGFzcy5qcyc7XG5pbXBvcnQgJy4vanMvYW5pbWF0aW9uLmpzJztcblxuaW1wb3J0IHsgRE9NLCBHYW1lIH0gZnJvbSAnLi9qcy9kb20uanMnO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIChlKSA9PiB7XG4gIC8vIEdhbWUuY2hhbmdlU2l6ZSgyNSk7XG5cbiAgLy8gR2FtZS5jaGFuZ2VUb3RhbFNoaXBzKFsxLCAxLCAyLCAyLCAzLCAzLCA0LCA1XSk7XG5cbiAgR2FtZS5zdGFydCgpO1xuXG4gIERPTS5saXN0ZW5SZXN0YXJ0KCk7XG5cbiAgRE9NLmxpc3RlblNldHRpbmcoKTtcblxuICBET00ubGlzdGVuQ2xvc2VGb3JtKCk7XG5cbiAgRE9NLmxpc3RlblN1Ym1pdEZvcm0oKTtcbn0pO1xuIiwiaW1wb3J0IHsgX1NJWkUsIF9UT1RBTF9TSElQUywgX1NISVBTX01BWF9MRU5HVEgsIEdhbWUgfSBmcm9tICcuL2RvbSc7XG5cbmV4cG9ydCBjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuID0gMykge1xuICAgIGlmIChsZW4gPiBfU0hJUFNfTUFYX0xFTkdUSCB8fCBsZW4gPCAxKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc2hpcCBsZW5ndGgnKTtcblxuICAgIGxldCBfaGl0cyA9IDA7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICBsZW5ndGg6IHtcbiAgICAgICAgdmFsdWU6IGxlbixcbiAgICAgIH0sXG5cbiAgICAgIGhpdHM6IHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBfaGl0cztcbiAgICAgICAgfSxcbiAgICAgIH0sXG5cbiAgICAgIGlzU3Vuazoge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgY29uc3QgY3VycmVudEhlYWx0aCA9IHRoaXMubGVuZ3RoIC0gX2hpdHM7XG5cbiAgICAgICAgICByZXR1cm4gY3VycmVudEhlYWx0aCA8IDE7XG4gICAgICAgIH0sXG4gICAgICB9LFxuXG4gICAgICBoaXQ6IHtcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAodGhpcy5pc1N1bmspIHRocm93IG5ldyBFcnJvcihgQ2FuJ3QgYXR0YWNrIHN1bmsgc2hpcGApO1xuXG4gICAgICAgICAgX2hpdHMrKztcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBvc2l0aW9uIHtcbiAgY29uc3RydWN0b3Iocm93LCBjb2wpIHtcbiAgICBjb25zdCBfbGVnaXQgPSBfU0laRSAtIDE7XG5cbiAgICBpZiAocm93ID4gX2xlZ2l0IHx8IGNvbCA+IF9sZWdpdCB8fCByb3cgPCAwIHx8IGNvbCA8IDApIHRocm93IG5ldyBFcnJvcignUG9zaXRpb24gaXMgbm90IGxlZ2l0Jyk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICByb3c6IHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiByb3c7XG4gICAgICAgIH0sXG4gICAgICB9LFxuXG4gICAgICBjb2w6IHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBjb2w7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDZWxsIHtcbiAgY29uc3RydWN0b3Iocm93LCBjb2wpIHtcbiAgICBsZXQgX2lzUmVjZWl2ZWRBdHRhY2sgPSBmYWxzZTtcblxuICAgIGxldCBfc2hpcCA9IG51bGw7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICByZWNlaXZlZEF0dGFjazoge1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChfaXNSZWNlaXZlZEF0dGFjaykgdGhyb3cgbmV3IEVycm9yKCdBbHJlYWR5IGF0dGFja2VkIHRoaXMgY2VsbCcpO1xuXG4gICAgICAgICAgX2lzUmVjZWl2ZWRBdHRhY2sgPSB0cnVlO1xuXG4gICAgICAgICAgX3NoaXA/LmhpdCgpO1xuICAgICAgICB9LFxuICAgICAgfSxcblxuICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgdmFsdWU6IG5ldyBQb3NpdGlvbihyb3csIGNvbCksXG4gICAgICB9LFxuXG4gICAgICBpc1JlY2VpdmVkQXR0YWNrOiB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gX2lzUmVjZWl2ZWRBdHRhY2s7XG4gICAgICAgIH0sXG4gICAgICB9LFxuXG4gICAgICBzaGlwOiB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gX3NoaXA7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0KG5ld1NoaXApIHtcbiAgICAgICAgICBpZiAoX3NoaXApIHRocm93IG5ldyBFcnJvcignQWxyZWFkeSBwbGFjZWQgYSBzaGlwIG9uIHRoaXMgY2VsbCcpO1xuXG4gICAgICAgICAgX3NoaXAgPSBuZXdTaGlwO1xuICAgICAgICB9LFxuICAgICAgfSxcblxuICAgICAgc3RhdHVzOiB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICBpZiAoIV9pc1JlY2VpdmVkQXR0YWNrKSByZXR1cm4gJ05vdCB5ZXQnO1xuXG4gICAgICAgICAgaWYgKF9zaGlwKSByZXR1cm4gJ0hpdCc7XG5cbiAgICAgICAgICByZXR1cm4gJ01pc3MnO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgc2hpcHNJbmZvOiB7IHZhbHVlOiBbXSB9LFxuXG4gICAgICBib2FyZDogeyB2YWx1ZTogW10gfSxcblxuICAgICAgaGl0U2hvdHM6IHsgdmFsdWU6IFtdIH0sXG5cbiAgICAgIG1pc3NTaG90czogeyB2YWx1ZTogW10gfSxcblxuICAgICAgc2hvdHM6IHsgdmFsdWU6IFtdIH0sXG5cbiAgICAgIGFsbENsZWFyOiB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zaGlwc0luZm8uZXZlcnkoKGluZm8pID0+IGluZm8uc2hpcC5pc1N1bmspO1xuICAgICAgICB9LFxuICAgICAgfSxcblxuICAgICAgc2hpcHM6IHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIC8vIHBsYWNlIHNoaXBzIGludG8gY2F0ZWdvcnkgYmFzZSBvbiB0aGVpciBzdGF0dXM6IGhlYWx0aHksIHdhcm5pbmcsIGRlYXRoXG4gICAgICAgICAgcmV0dXJuIHRoaXMuc2hpcHNJbmZvLnJlZHVjZShcbiAgICAgICAgICAgICh0b3RhbCwgY3VycmVudFNoaXBJbmZvKSA9PiB7XG4gICAgICAgICAgICAgIGxldCBzaGlwU3RhdHVzO1xuXG4gICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRTaGlwID0gY3VycmVudFNoaXBJbmZvLnNoaXA7XG5cbiAgICAgICAgICAgICAgY29uc3Qgc2hpcEhlYWx0aCA9IGN1cnJlbnRTaGlwLmxlbmd0aCAtIGN1cnJlbnRTaGlwLmhpdHM7XG5cbiAgICAgICAgICAgICAgaWYgKHNoaXBIZWFsdGggPT09IDApIHNoaXBTdGF0dXMgPSAnZGVhdGgnO1xuICAgICAgICAgICAgICBlbHNlIGlmIChzaGlwSGVhbHRoID09PSAxKSBzaGlwU3RhdHVzID0gJ3dhcm5pbmcnO1xuICAgICAgICAgICAgICBlbHNlIHNoaXBTdGF0dXMgPSAnaGVhbHRoeSc7XG5cbiAgICAgICAgICAgICAgdG90YWxbc2hpcFN0YXR1c10ucHVzaChjdXJyZW50U2hpcEluZm8pO1xuXG4gICAgICAgICAgICAgIHJldHVybiB0b3RhbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IGhlYWx0aHk6IFtdLCBkZWF0aDogW10sIHdhcm5pbmc6IFtdIH1cbiAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICAgfSxcblxuICAgICAgcGxhY2VTaGlwczoge1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHNoaXAsIHN0YXJ0UG9zaXRpb24sIGlzVmVydGljYWwpIHtcbiAgICAgICAgICBpZiAoIShzaGlwIGluc3RhbmNlb2YgU2hpcCkpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzaGlwIG9iamVjdCcpO1xuXG4gICAgICAgICAgaWYgKCEoc3RhcnRQb3NpdGlvbiBpbnN0YW5jZW9mIFBvc2l0aW9uKSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0YXJ0IHBvc2l0aW9uJyk7XG5cbiAgICAgICAgICBpZiAodHlwZW9mIGlzVmVydGljYWwgIT09ICdib29sZWFuJykgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGRpcmVjdGlvbicpO1xuXG4gICAgICAgICAgY29uc3QgbGVuZ3RoID0gc2hpcC5sZW5ndGg7XG5cbiAgICAgICAgICBjb25zdCBlbmRQb3NpdGlvbiA9IGxlbmd0aCArIChpc1ZlcnRpY2FsID8gc3RhcnRQb3NpdGlvbi5jb2wgOiBzdGFydFBvc2l0aW9uLnJvdyk7IC8vIHVzZWQgdG8gY2hlY2sgaWYgb3V0c2lkZSB0aGUgZ2FtZWJvYXJkXG5cbiAgICAgICAgICBpZiAoZW5kUG9zaXRpb24gPiBfU0laRSkgdGhyb3cgbmV3IEVycm9yKCdUaGlzIHNoaXAgZ29lcyBiZXlvbmQgZ2FtZWJvYXJkJyk7XG5cbiAgICAgICAgICBsZXQgeyByb3csIGNvbCB9ID0gc3RhcnRQb3NpdGlvbjtcblxuICAgICAgICAgIGNvbnN0IGxvY2F0aW9ucyA9IFtdO1xuXG4gICAgICAgICAgY29uc3QgY2VsbHMgPSBbXTtcblxuICAgICAgICAgIC8vIGNoZWNrIGFsbCBzaGlwJ3MgbG9jYXRpb25zIGZpcnN0IHRvIHNlZSBpZiBzb21ldGhpbmcgdGhyb3dcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5ib2FyZFtyb3ddW2NvbF07XG5cbiAgICAgICAgICAgIC8vIHRocm93IGFuZCBjYW5jZWwgcGxhY2Ugc2hpcCBwcm9jZXNzIGlmIGEgY2VsbCBhbHJlYWR5IGhhcyBzaGlwIG9uIGl0XG4gICAgICAgICAgICBpZiAoY2VsbC5zaGlwICE9PSBudWxsKSB0aHJvdyBuZXcgRXJyb3IoJ1BsYWNlIHNoaXAgY2FuY2VsIGJlY2F1c2UgdGhpcyBjZWxsIGFscmVhZHkgaGFzIGEgc2hpcCBvbiBpdCcpO1xuXG4gICAgICAgICAgICAvLyBzYXZlIGNlbGxzIHdoaWNoIGlzIGxlZ2l0IHRvIHVzZSBsYXRlclxuICAgICAgICAgICAgY2VsbHMucHVzaChjZWxsKTtcblxuICAgICAgICAgICAgLy8gbG9jYXRpb25zIHRvIHVwZGF0ZSBnYW1lYm9hcmQuc2hpcHNJbmZvXG4gICAgICAgICAgICBsb2NhdGlvbnMucHVzaChuZXcgUG9zaXRpb24ocm93LCBjb2wpKTtcblxuICAgICAgICAgICAgaXNWZXJ0aWNhbCA/IGNvbCsrIDogcm93Kys7IC8vIGluY3JlYXNlIGJhc2VkIG9uIGRpcmVjdGlvblxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHRoZSBsb29wIHRocm91Z2ggYWxsIGxlZ2l0IGNlbGxzIHRvIGFjdHVhbGx5IHBsYWNlIHNoaXAgYWZ0ZXIgbm90aGluZyBnb3QgdGhyb3dcbiAgICAgICAgICBmb3IgKGNvbnN0IGNlbGwgb2YgY2VsbHMpIHtcbiAgICAgICAgICAgIGNlbGwuc2hpcCA9IHNoaXA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zaGlwc0luZm8ucHVzaCh7IGxvY2F0aW9ucywgaXNWZXJ0aWNhbCwgc2hpcDogc2hpcCB9KTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG5cbiAgICAgIHJlY2VpdmVkQXR0YWNrOiB7XG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiAocG9zaXRpb24pIHtcbiAgICAgICAgICBpZiAoIShwb3NpdGlvbiBpbnN0YW5jZW9mIFBvc2l0aW9uKSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHBvc2l0aW9uJyk7XG5cbiAgICAgICAgICBjb25zdCB7IHJvdywgY29sIH0gPSBwb3NpdGlvbjtcblxuICAgICAgICAgIGNvbnN0IGNlbGwgPSB0aGlzLmJvYXJkW3Jvd11bY29sXTtcblxuICAgICAgICAgIGNlbGwucmVjZWl2ZWRBdHRhY2soKTtcblxuICAgICAgICAgIGNvbnN0IGNlbGxTdGF0dXMgPSBjZWxsLnN0YXR1cztcblxuICAgICAgICAgIGNvbnN0IHNoaXBTdGF0dXMgPSBjZWxsLnNoaXA/LmlzU3VuayA/ICdTdW5rJyA6ICdOb3Qgc3Vuayc7XG5cbiAgICAgICAgICBpZiAoY2VsbFN0YXR1cyA9PT0gJ0hpdCcpIHRoaXMuaGl0U2hvdHMucHVzaChwb3NpdGlvbik7XG5cbiAgICAgICAgICBpZiAoY2VsbFN0YXR1cyA9PT0gJ01pc3MnKSB0aGlzLm1pc3NTaG90cy5wdXNoKHBvc2l0aW9uKTtcblxuICAgICAgICAgIHRoaXMuc2hvdHMucHVzaChwb3NpdGlvbik7XG5cbiAgICAgICAgICByZXR1cm4geyBjZWxsU3RhdHVzLCBzaGlwU3RhdHVzLCBwb3NpdGlvbiB9O1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX1NJWkU7IGkrKykge1xuICAgICAgdGhpcy5ib2FyZC5wdXNoKFtdKTtcblxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBfU0laRTsgaisrKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbaV0ucHVzaChuZXcgQ2VsbChpLCBqKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICBib2FyZDoge1xuICAgICAgICB2YWx1ZTogbmV3IEdhbWVib2FyZCgpLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHJhbmRvbVBsYWNlU2hpcHMoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfVE9UQUxfU0hJUFMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIF9TSVpFKTtcblxuICAgICAgICBjb25zdCBjb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBfU0laRSk7XG5cbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9zaXRpb24ocm93LCBjb2wpO1xuXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9ICEhTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG5cbiAgICAgICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKF9UT1RBTF9TSElQU1tpXSk7XG5cbiAgICAgICAgdGhpcy5ib2FyZC5wbGFjZVNoaXBzKHNoaXAsIHBvc2l0aW9uLCBkaXJlY3Rpb24pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgaS0tO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEh1bWFuIGV4dGVuZHMgUGxheWVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgIGF0dGFjazoge1xuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gKHBvc2l0aW9uLCBwbGF5ZXIpIHtcbiAgICAgICAgICBpZiAoIShwb3NpdGlvbiBpbnN0YW5jZW9mIFBvc2l0aW9uKSB8fCAhKHBsYXllci5ib2FyZCBpbnN0YW5jZW9mIEdhbWVib2FyZCkpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhcmd1bWVudHMnKTtcblxuICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IHBsYXllci5ib2FyZC5yZWNlaXZlZEF0dGFjayhwb3NpdGlvbik7XG5cbiAgICAgICAgICByZXR1cm4gc3RhdHVzO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29tcHV0ZXIgZXh0ZW5kcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgY29uc3QgX3JhbmRvbUF0dGFjayA9IChwbGF5ZXIpID0+IHtcbiAgICAgIGlmICghKHBsYXllci5ib2FyZCBpbnN0YW5jZW9mIEdhbWVib2FyZCkpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBib2FyZCcpO1xuXG4gICAgICBjb25zdCBsZW5ndGggPSBwbGF5ZXIuYm9hcmQuc2hvdHMubGVuZ3RoO1xuXG4gICAgICB3aGlsZSAobGVuZ3RoID09PSBwbGF5ZXIuYm9hcmQuc2hvdHMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIF9TSVpFKTtcblxuICAgICAgICBjb25zdCBjb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBfU0laRSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb3NpdGlvbihyb3csIGNvbCk7XG5cbiAgICAgICAgICBjb25zdCBzdGF0dXMgPSBwbGF5ZXIuYm9hcmQucmVjZWl2ZWRBdHRhY2socG9zaXRpb24pO1xuXG4gICAgICAgICAgcmV0dXJuIHN0YXR1cztcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBjb25zdCBjaGVja05leHRDZWxsRGlyZWN0aW9uID0gKGN1cnJlbnRDZWxsLCBkaXJlY3Rpb24pID0+IHtcbiAgICAvLyAgIGlmIChjdXJyZW50Q2VsbC5zdGF0dXMgPT09ICdNaXNzJykgcmV0dXJuIG51bGw7XG5cbiAgICAvLyAgIGlmKGN1cnJlbnRDZWxsLnN0YXR1cz09PSdOb3QgeWV0JylyZXR1cm4gY3VycmVudENlbGxcbiAgICAvLyB9O1xuXG4gICAgdGhpcy5hdHRhY2sgPSAocGxheWVyKSA9PiB7XG4gICAgICByZXR1cm4gX3JhbmRvbUF0dGFjayhwbGF5ZXIpO1xuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IFBvc2l0aW9uLCBIdW1hbiwgQ29tcHV0ZXIsIFBsYXllciB9IGZyb20gJy4vY2xhc3MnO1xuXG4vKipcbiAqIEBqZXN0LWVudmlyb25tZW50IGpzZG9tXG4gKi9cblxuLy8gdGhlc2UgdmFyaWFibGVzIGNhbiBiZSBwdXQgaW5zaWRlIEdhbWUgY2xhc3MgYnV0IEkgZG9uJ3Qgd2FudFxuZXhwb3J0IGxldCBfU0laRSA9IDEwOyAvLyBHYW1lYm9hcmQgU0laRVxuXG5leHBvcnQgbGV0IF9UT1RBTF9TSElQUyA9IFsxLCAxLCAxLCAyLCAyLCAzLCAzLCA0LCA1XTsgLy8gdG90YWwgb2Ygc2hpcHMgd2Ugd2FudCBvbiBvdXIgZ2FtZWJvYXJkXG5cbmV4cG9ydCBsZXQgX1NISVBTX01BWF9MRU5HVEggPSA5O1xuXG5leHBvcnQgY2xhc3MgR2FtZSB7XG4gIHN0YXRpYyBjaGFuZ2VTaXplID0gKG5ld1NpemUpID0+IHtcbiAgICBfU0laRSA9IG5ld1NpemU7XG5cbiAgICBET00uZ2FtZWJvYXJkQWkuc3R5bGUuY3NzVGV4dCA9IGBncmlkLXRlbXBsYXRlOiByZXBlYXQoJHtfU0laRX0sIDFmcikgLyByZXBlYXQoJHtfU0laRX0sIDFmcilgO1xuXG4gICAgRE9NLmdhbWVib2FyZEh1bWFuLnN0eWxlLmNzc1RleHQgPSBgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KCR7X1NJWkV9LCAxZnIpIC8gcmVwZWF0KCR7X1NJWkV9LCAxZnIpYDtcbiAgfTtcblxuICBzdGF0aWMgY2hhbmdlVG90YWxTaGlwcyA9IChuZXdTaGlwcykgPT4gKF9UT1RBTF9TSElQUyA9IG5ld1NoaXBzKTtcblxuICBzdGF0aWMgaXNPdmVyID0gZmFsc2U7XG5cbiAgc3RhdGljIGh1bWFuO1xuXG4gIHN0YXRpYyBhaTtcblxuICBzdGF0aWMgY2hlY2tHYW1lb3ZlciA9IChwbGF5ZXJUb0NoZWNrKSA9PiB7XG4gICAgaWYgKHBsYXllclRvQ2hlY2suYm9hcmQuYWxsQ2xlYXIpIHtcbiAgICAgIHRoaXMuaXNPdmVyID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5pc092ZXI7XG4gIH07XG5cbiAgc3RhdGljIHN0YXJ0ID0gKCkgPT4ge1xuICAgIHRoaXMuaXNPdmVyID0gZmFsc2U7XG5cbiAgICB0aGlzLmh1bWFuID0gbmV3IEh1bWFuKCk7XG5cbiAgICB0aGlzLmFpID0gbmV3IENvbXB1dGVyKCk7XG5cbiAgICB0aGlzLmh1bWFuLnJhbmRvbVBsYWNlU2hpcHMoKTtcblxuICAgIHRoaXMuYWkucmFuZG9tUGxhY2VTaGlwcygpO1xuXG4gICAgRGlzcGxheS5ib2FyZCh0aGlzLmh1bWFuKTtcblxuICAgIERpc3BsYXkuYm9hcmQodGhpcy5haSk7XG5cbiAgICBEaXNwbGF5Lmh1bWFuU2hpcHModGhpcy5odW1hbik7XG5cbiAgICAvLyBEaXNwbGF5Lmh1bWFuU2hpcHModGhpcy5haSk7IC8vIEZJWE1FIHVzZWQgZm9yIGRpc3BsYXkgYWkncyBzaGlwcywgZm9yIHRlc3RpbmdcblxuICAgIERpc3BsYXkubWVzc2FnZSh0aGlzLmh1bWFuLCBgUHJlc3MgdGhlIHJlc3RhcnQgYnV0dG9uIGlmYCwgYHlvdSdyZSBub3QgaGFwcHkgd2l0aCB5b3VyIHNoaXBzIGxheW91dGApO1xuXG4gICAgRGlzcGxheS5tZXNzYWdlKHRoaXMuYWksIGBLZWVwIHRyYWNrIG9mIGdhbWUgYWxlcnQgaGVyZWAsIGBZb3Ugd2lsbCBhdHRhY2sgdGhlIGdhbWVib2FyZCBhYm92ZWApO1xuXG4gICAgRE9NLnByZXZlbnRTcGFtLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcblxuICAgIERPTS5saXN0ZW5IdW1hbkF0dGFja3ModGhpcy5odW1hbiwgdGhpcy5haSk7XG4gIH07XG5cbiAgc3RhdGljIGh1bWFuUGxheU9uZVR1cm4gPSAoaHVtYW4sIGFpLCBwb3NpdGlvbikgPT4ge1xuICAgIGNvbnN0IGh1bWFuQXR0YWNrc1N0YXR1cyA9IGh1bWFuLmF0dGFjayhwb3NpdGlvbiwgYWkpO1xuXG4gICAgbGV0IGh1bWFuTWVzc2FnZSA9IGBXZSBzaG90IGF0IGVuZW15J3Mgd2F0ZXIgYW5kIGl0J3MgYSBtaXNzYDtcblxuICAgIGlmIChodW1hbkF0dGFja3NTdGF0dXMuY2VsbFN0YXR1cyA9PT0gJ0hpdCcpIHtcbiAgICAgIERpc3BsYXkuYWlEZWF0aFNoaXBzKGFpKTtcblxuICAgICAgaHVtYW5NZXNzYWdlID0gYFdlIHNob3QgYXQgZW5lbXkncyB3YXRlciBhbmQgaXQncyBhIGhpdGA7XG5cbiAgICAgIGlmIChodW1hbkF0dGFja3NTdGF0dXMuc2hpcFN0YXR1cyA9PT0gJ1N1bmsnKSBodW1hbk1lc3NhZ2UgKz0gYCwgd2UgaGF2ZSBzdW5rIHRoZWlyIHNoaXBgO1xuICAgIH1cbiAgICBodW1hbk1lc3NhZ2UgPSBodW1hbk1lc3NhZ2Uuc3BsaXQoJywnKTtcblxuICAgIERpc3BsYXkuc2hvdE9uQm9hcmQoYWksIHBvc2l0aW9uLCBodW1hbkF0dGFja3NTdGF0dXMuY2VsbFN0YXR1cyk7XG5cbiAgICBEaXNwbGF5Lm1lc3NhZ2UoYWksIGh1bWFuTWVzc2FnZVswXSwgaHVtYW5NZXNzYWdlWzFdIHx8ICcnKTtcblxuICAgIGlmICh0aGlzLmNoZWNrR2FtZW92ZXIoYWkpKSB7XG4gICAgICBEaXNwbGF5LnN0b3BVc2VyU3BhbW1pbmcoKTtcblxuICAgICAgRGlzcGxheS5tZXNzYWdlKGFpLCBgQ29uZ3JhdHVsYXRpb24hYCwgYFdlIGhhdmUgd2luIHRoZSBiYXR0bGUhYCwgYFBsYXkgYWdhaW4/YCk7XG5cbiAgICAgIERpc3BsYXkubWVzc2FnZShodW1hbiwgYENvbmdyYXR1bGF0aW9uIWAsIGBXZSBoYXZlIHdpbiB0aGUgYmF0dGxlIWAsIGBQbGF5IGFnYWluP2ApO1xuICAgIH1cbiAgfTtcblxuICBzdGF0aWMgYWlQbGF5T25lVHVybiA9IChodW1hbiwgYWkpID0+IHtcbiAgICBjb25zdCBhaUF0dGFja1Jlc3VsdCA9IGFpLmF0dGFjayhodW1hbik7XG5cbiAgICBsZXQgYWlNZXNzYWdlID0gYEVuZW15IHNob3QgYXQgb3VyIHdhdGVyIGFuZCBpdCdzIGEgbWlzc2A7XG5cbiAgICBpZiAoYWlBdHRhY2tSZXN1bHQuY2VsbFN0YXR1cyA9PT0gJ0hpdCcpIHtcbiAgICAgIERpc3BsYXkuaHVtYW5TaGlwcyhodW1hbik7XG5cbiAgICAgIGFpTWVzc2FnZSA9IGBFbmVteSBzaG90IGF0IG91ciB3YXRlciBhbmQgaXQncyBhIGhpdGA7XG5cbiAgICAgIGlmIChhaUF0dGFja1Jlc3VsdC5zaGlwU3RhdHVzID09PSAnU3VuaycpIGFpTWVzc2FnZSArPSBgLCB0aGV5IGhhdmUgc3VuayBvdXIgc2hpcGA7XG4gICAgfVxuXG4gICAgYWlNZXNzYWdlID0gYWlNZXNzYWdlLnNwbGl0KCcsJyk7XG5cbiAgICBEaXNwbGF5LnNob3RPbkJvYXJkKGh1bWFuLCBhaUF0dGFja1Jlc3VsdC5wb3NpdGlvbiwgYWlBdHRhY2tSZXN1bHQuY2VsbFN0YXR1cyk7XG5cbiAgICBEaXNwbGF5Lm1lc3NhZ2UoaHVtYW4sIGBFbmVteSBpcyBhaW1pbmcuLi5gLCBhaU1lc3NhZ2VbMF0sIGFpTWVzc2FnZVsxXSk7XG5cbiAgICBpZiAodGhpcy5jaGVja0dhbWVvdmVyKGh1bWFuKSkge1xuICAgICAgRGlzcGxheS5zdG9wVXNlclNwYW1taW5nKCk7XG5cbiAgICAgIERpc3BsYXkubWVzc2FnZShhaSwgYE9oIG5vby4uLmAsIGBFbmVteSBoYXMgd2luIHRoZSBiYXR0bGUhYCwgYFBsYXkgYWdhaW4/YCk7XG5cbiAgICAgIERpc3BsYXkubWVzc2FnZShodW1hbiwgYE9oIG5vLi4uYCwgYEVuZW15IGhhcyB3aW4gdGhlIGJhdHRsZSFgLCBgUGxheSBhZ2Fpbj9gKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBjbGFzcyBET00ge1xuICBzdGF0aWMgbWVzc2FnZUh1bWFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbWVzc2FnZT1cImh1bWFuXCJdYCk7XG5cbiAgc3RhdGljIG1lc3NhZ2VBaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW1lc3NhZ2U9XCJhaVwiXWApO1xuXG4gIHN0YXRpYyBnYW1lYm9hcmRIdW1hbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lYm9hcmRbZGF0YS1odW1hbl0nKTtcblxuICBzdGF0aWMgZ2FtZWJvYXJkQWkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkW2RhdGEtYWldJyk7XG5cbiAgc3RhdGljIHJlc3RhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1yZXN0YXJ0XScpO1xuXG4gIHN0YXRpYyBzZXR0aW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtc2V0dGluZ10nKTtcblxuICBzdGF0aWMgcHJldmVudFNwYW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wcmV2ZW50LXNwYW1dJyk7XG5cbiAgc3RhdGljIHBvcHVwRm9ybUN0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBvcHVwLWZvcm0tY3RuXScpO1xuXG4gIHN0YXRpYyBwb3B1cEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wb3B1cC1mb3JtXScpO1xuXG4gIHN0YXRpYyBzdWJtaXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtc3VibWl0LWZvcm1dYCk7XG5cbiAgc3RhdGljIGNsb3NlRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNsb3NlLWZvcm1dYCk7XG5cbiAgc3RhdGljIGlucHV0U2l6ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWZvcm0taW5wdXQtc2l6ZV1gKTtcblxuICBzdGF0aWMgaW5wdXRTaGlwcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWZvcm0taW5wdXQtc2hpcHNdYCk7XG5cbiAgc3RhdGljICNzaG93UG9wdXBGb3JtID0gKCkgPT4gdGhpcy5wb3B1cEZvcm1DdG4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuXG4gIHN0YXRpYyAjaGlkZVBvcHVwRm9ybSA9ICgpID0+IHRoaXMucG9wdXBGb3JtQ3RuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcblxuICBzdGF0aWMgbGlzdGVuUmVzdGFydCA9ICgpID0+IHtcbiAgICB0aGlzLnJlc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgR2FtZS5zdGFydCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIHN0YXRpYyBsaXN0ZW5TZXR0aW5nID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0dGluZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICB0aGlzLiNzaG93UG9wdXBGb3JtKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgc3RhdGljIGxpc3RlblN1Ym1pdEZvcm0gPSAoKSA9PiB7XG4gICAgdGhpcy5wb3B1cEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29uc3QgaW5wdXRTaXplVmFsdWUgPSArdGhpcy5pbnB1dFNpemUudmFsdWU7XG5cbiAgICAgIGNvbnN0IGlucHV0U2hpcHNWYWx1ZSA9IHRoaXMuaW5wdXRTaGlwcy52YWx1ZVxuICAgICAgICAudHJpbSgpXG5cbiAgICAgICAgLnNwbGl0KC9cXHMqLylcblxuICAgICAgICAucmVkdWNlKCh0b3RhbCwgY3VycmVudCkgPT4gKCtjdXJyZW50ID4gMCA/IFsuLi50b3RhbCwgK2N1cnJlbnRdIDogdG90YWwpLCBbXSk7XG5cbiAgICAgIEdhbWUuY2hhbmdlU2l6ZShpbnB1dFNpemVWYWx1ZSk7XG5cbiAgICAgIEdhbWUuY2hhbmdlVG90YWxTaGlwcyhpbnB1dFNoaXBzVmFsdWUpO1xuXG4gICAgICBHYW1lLnN0YXJ0KCk7XG5cbiAgICAgIHRoaXMuI2hpZGVQb3B1cEZvcm0oKTtcbiAgICB9KTtcbiAgfTtcblxuICBzdGF0aWMgbGlzdGVuQ2xvc2VGb3JtID0gKCkgPT4ge1xuICAgIHRoaXMuY2xvc2VGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIHRoaXMuI2hpZGVQb3B1cEZvcm0oKTtcbiAgICB9KTtcbiAgfTtcblxuICBzdGF0aWMgbGlzdGVuSHVtYW5BdHRhY2tzID0gKGh1bWFuLCBhaSkgPT4ge1xuICAgIGlmICghKGh1bWFuIGluc3RhbmNlb2YgSHVtYW4pKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgSHVtYW4nKTtcblxuICAgIGlmICghKGFpIGluc3RhbmNlb2YgQ29tcHV0ZXIpKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgQWknKTtcblxuICAgIGNvbnN0IGNlbGxzID0gdGhpcy5nYW1lYm9hcmRBaS5xdWVyeVNlbGVjdG9yQWxsKCcuYWlfX2NlbGwnKTtcblxuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2NsaWNrJyxcblxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2F0dGFja2VkJyk7XG5cbiAgICAgICAgICBjb25zdCByb3cgPSArZS50YXJnZXQuZGF0YXNldC5yb3c7XG5cbiAgICAgICAgICBjb25zdCBjb2wgPSArZS50YXJnZXQuZGF0YXNldC5jb2w7XG5cbiAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb3NpdGlvbihyb3csIGNvbCk7XG5cbiAgICAgICAgICBHYW1lLmh1bWFuUGxheU9uZVR1cm4oaHVtYW4sIGFpLCBwb3NpdGlvbik7XG5cbiAgICAgICAgICBpZiAoR2FtZS5pc092ZXIpIHJldHVybjtcblxuICAgICAgICAgIC8vIGFpIHBsYXkgaXRzIHR1cm5cbiAgICAgICAgICBHYW1lLmFpUGxheU9uZVR1cm4oaHVtYW4sIGFpKTtcbiAgICAgICAgfSxcblxuICAgICAgICB7IG9uY2U6IHRydWUgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuY2xhc3MgRGlzcGxheSB7XG4gIHN0YXRpYyBtZXNzYWdlID0gKHBsYXllciwgY29udGVudDAsIGNvbnRlbnQxID0gJycsIGNvbnRlbnQyID0gJycpID0+IHtcbiAgICBsZXQgdGFyZ2V0TWVzc2FnZTtcblxuICAgIGlmIChwbGF5ZXIgaW5zdGFuY2VvZiBIdW1hbikgdGFyZ2V0TWVzc2FnZSA9IERPTS5tZXNzYWdlSHVtYW47XG4gICAgZWxzZSB0YXJnZXRNZXNzYWdlID0gRE9NLm1lc3NhZ2VBaTtcblxuICAgIHRhcmdldE1lc3NhZ2UuaW5uZXJIVE1MID0gYDxwPiR7Y29udGVudDB9PC9wPjxwPiR7Y29udGVudDF9PC9wPjxwPiR7Y29udGVudDJ9PC9wPmA7XG4gIH07XG5cbiAgc3RhdGljIGJvYXJkID0gKHBsYXllcikgPT4ge1xuICAgIGlmICghKHBsYXllciBpbnN0YW5jZW9mIFBsYXllcikpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBQbGF5ZXInKTtcblxuICAgIGNvbnN0IHRhcmdldEJvYXJkID0gcGxheWVyIGluc3RhbmNlb2YgSHVtYW4gPyBET00uZ2FtZWJvYXJkSHVtYW4gOiBET00uZ2FtZWJvYXJkQWk7XG5cbiAgICB0YXJnZXRCb2FyZC5pbm5lckhUTUwgPSAnJztcblxuICAgIGNvbnN0IHR5cGUgPSBwbGF5ZXIgaW5zdGFuY2VvZiBIdW1hbiA/ICdodW1hbicgOiAnYWknO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfU0laRTsgaSsrKSB7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IF9TSVpFOyBqKyspIHtcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2NlbnRlcicpO1xuXG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKGAke3R5cGV9X19jZWxsYCk7XG5cbiAgICAgICAgZGl2LmRhdGFzZXQucm93ID0gaTtcblxuICAgICAgICBkaXYuZGF0YXNldC5jb2wgPSBqO1xuXG4gICAgICAgIHRhcmdldEJvYXJkLmFwcGVuZENoaWxkKGRpdik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHN0YXRpYyBodW1hblNoaXBzID0gKHBsYXllcikgPT4ge1xuICAgIGlmICghKHBsYXllciBpbnN0YW5jZW9mIFBsYXllcikpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBQbGF5ZXInKTtcblxuICAgIGNvbnN0IHNoaXBzID0gcGxheWVyLmJvYXJkLnNoaXBzO1xuXG4gICAgLy8gbG9vcCB0aHJvdWdoIDMgdHlwZTogaGVhbHRoeSwgd2FybmluZywgZGVhdGhcbiAgICBmb3IgKGNvbnN0IHNoaXBUeXBlIGluIHNoaXBzKSB7XG4gICAgICBjb25zdCBjdXJyZW50VHlwZSA9IHNoaXBzW3NoaXBUeXBlXTtcblxuICAgICAgLy8gbG9vcCB0aHJvdWdoIGFsbCBzaGlwcyBpbiAxIHR5cGVcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFR5cGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY3VycmVudFNoaXBJbmZvID0gY3VycmVudFR5cGVbaV07XG5cbiAgICAgICAgY29uc3QgbG9jYXRpb25zID0gY3VycmVudFNoaXBJbmZvLmxvY2F0aW9ucztcblxuICAgICAgICBjb25zdCBpc1ZlcnRpY2FsID0gY3VycmVudFNoaXBJbmZvLmlzVmVydGljYWw7XG5cbiAgICAgICAgLy8gbG9vcCB0aHJvdWdoIGFsbCBwb3NpdGlvbiBvZiB0aGF0IHNoaXBcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsb2NhdGlvbnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBjb25zdCBjdXJyZW50TG9jYXRpb24gPSBsb2NhdGlvbnNbal07XG5cbiAgICAgICAgICBjb25zdCB7IHJvdywgY29sIH0gPSBjdXJyZW50TG9jYXRpb247XG5cbiAgICAgICAgICAvLyBzZWxlY3QgZXhhY3QgY2VsbCBkb20gZWxlbWVudFxuICAgICAgICAgIGNvbnN0IGNlbGwgPSBwbGF5ZXIgaW5zdGFuY2VvZiBIdW1hbiA/IERPTS5nYW1lYm9hcmRIdW1hbi5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9XCIke3Jvd31cIl1bZGF0YS1jb2w9XCIke2NvbH1cIl1gKSA6IERPTS5nYW1lYm9hcmRBaS5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9XCIke3Jvd31cIl1bZGF0YS1jb2w9XCIke2NvbH1cIl1gKTtcblxuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChzaGlwVHlwZSk7XG5cbiAgICAgICAgICBpZiAobG9jYXRpb25zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwX19vbmVfX2xlbmd0aCcpO1xuXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaXNWZXJ0aWNhbCkgY2VsbC5jbGFzc0xpc3QuYWRkKCd2ZXJ0aWNhbCcpO1xuICAgICAgICAgIGVsc2UgY2VsbC5jbGFzc0xpc3QuYWRkKCdob3Jpem9uJyk7XG5cbiAgICAgICAgICBpZiAoIWopIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcF9faGVhZCcpO1xuICAgICAgICAgIGVsc2UgaWYgKGogPT09IGxvY2F0aW9ucy5sZW5ndGggLSAxKSBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXBfX3RhaWwnKTtcbiAgICAgICAgICBlbHNlIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcF9fYm9keScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHN0YXRpYyBhaURlYXRoU2hpcHMgPSAocGxheWVyKSA9PiB7XG4gICAgaWYgKCEocGxheWVyIGluc3RhbmNlb2YgUGxheWVyKSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFBsYXllcicpO1xuXG4gICAgY29uc3QgZGVhdGhTaGlwcyA9IHBsYXllci5ib2FyZC5zaGlwcy5kZWF0aDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVhdGhTaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY3VycmVudFNoaXBJbmZvID0gZGVhdGhTaGlwc1tpXTtcblxuICAgICAgY29uc3QgbG9jYXRpb25zID0gY3VycmVudFNoaXBJbmZvLmxvY2F0aW9ucztcblxuICAgICAgY29uc3QgaXNWZXJ0aWNhbCA9IGN1cnJlbnRTaGlwSW5mby5pc1ZlcnRpY2FsO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxvY2F0aW9ucy5sZW5ndGg7IGorKykge1xuICAgICAgICBjb25zdCBjdXJyZW50TG9jYXRpb24gPSBsb2NhdGlvbnNbal07XG5cbiAgICAgICAgY29uc3QgeyByb3csIGNvbCB9ID0gY3VycmVudExvY2F0aW9uO1xuXG4gICAgICAgIGNvbnN0IGNlbGwgPSBET00uZ2FtZWJvYXJkQWkucXVlcnlTZWxlY3RvcihgW2RhdGEtcm93PVwiJHtyb3d9XCJdW2RhdGEtY29sPVwiJHtjb2x9XCJdYCk7XG5cbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdkZWF0aCcpO1xuXG4gICAgICAgIGlmIChsb2NhdGlvbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwX19vbmVfX2xlbmd0aCcpO1xuXG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNWZXJ0aWNhbCkgY2VsbC5jbGFzc0xpc3QuYWRkKCd2ZXJ0aWNhbCcpO1xuICAgICAgICBlbHNlIGNlbGwuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbicpO1xuXG4gICAgICAgIGlmICghaikgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwX19oZWFkJyk7XG4gICAgICAgIGVsc2UgaWYgKGogPT09IGxvY2F0aW9ucy5sZW5ndGggLSAxKSBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXBfX3RhaWwnKTtcbiAgICAgICAgZWxzZSBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXBfX2JvZHknKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgc3RhdGljIHNob3RPbkJvYXJkID0gKHBsYXllciwgcG9zaXRpb24sIHN0YXR1cykgPT4ge1xuICAgIGlmICghKHBvc2l0aW9uIGluc3RhbmNlb2YgUG9zaXRpb24pIHx8ICEocGxheWVyIGluc3RhbmNlb2YgUGxheWVyKSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGFyZ3VtZW50Jyk7XG5cbiAgICBjb25zdCB7IHJvdywgY29sIH0gPSBwb3NpdGlvbjtcblxuICAgIGxldCBnYW1lYm9hcmQ7XG5cbiAgICBpZiAocGxheWVyIGluc3RhbmNlb2YgSHVtYW4pIGdhbWVib2FyZCA9IERPTS5nYW1lYm9hcmRIdW1hbjtcbiAgICBlbHNlIGdhbWVib2FyZCA9IERPTS5nYW1lYm9hcmRBaTtcblxuICAgIGNvbnN0IGNlbGwgPSBnYW1lYm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29sPVwiJHtjb2x9XCJdW2RhdGEtcm93PVwiJHtyb3d9XCJdYCk7XG5cbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgaWYgKHN0YXR1cyA9PT0gJ0hpdCcpIHNwYW4uY2xhc3NMaXN0LmFkZCgnaGl0X19zaG90Jyk7XG4gICAgZWxzZSBzcGFuLmNsYXNzTGlzdC5hZGQoJ21pc3NfX3Nob3QnKTtcblxuICAgIGNlbGwuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gIH07XG5cbiAgc3RhdGljIHN0b3BVc2VyU3BhbW1pbmcgPSAoKSA9PiB7XG4gICAgRE9NLnByZXZlbnRTcGFtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgfTtcbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBoZWFkZXIgYnV0dG9uIHZpZXcgb24gZ2l0aHViICovXG4uYnRuLTEzLFxuLmJ0bi0xMyAqLFxuLmJ0bi0xMyA6YWZ0ZXIsXG4uYnRuLTEzIDpiZWZvcmUsXG4uYnRuLTEzOmFmdGVyLFxuLmJ0bi0xMzpiZWZvcmUge1xuICBib3JkZXI6IDAgc29saWQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uYnRuLTEzIHtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGNvbG9yOiAjZmYwMDAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgU2Vnb2UgVUksIFJvYm90bywgSGVsdmV0aWNhIE5ldWUsIEFyaWFsLCBOb3RvIFNhbnMsIHNhbnMtc2VyaWYsIEFwcGxlIENvbG9yIEVtb2ppLCBTZWdvZSBVSSBFbW9qaSwgU2Vnb2UgVUkgU3ltYm9sLFxuICAgIE5vdG8gQ29sb3IgRW1vamk7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgbWFyZ2luOiAwO1xuICAvKiAtd2Via2l0LW1hc2staW1hZ2U6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCMwMDAsICNmZmYpOyAqL1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmJ0bi0xMzpkaXNhYmxlZCB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cbi5idG4tMTM6LW1vei1mb2N1c3Jpbmcge1xuICBvdXRsaW5lOiBhdXRvO1xufVxuLmJ0bi0xMyBzdmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5idG4tMTMgW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLmJ0bi0xMyB7XG4gIGJvcmRlci1yYWRpdXM6IDk5cmVtO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMC44cmVtIDNyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5idG4tMTMgc3BhbiB7XG4gIC8qIG1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlOyAqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG4uYnRuLTEzOmFmdGVyLFxuLmJ0bi0xMzpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiByZ2IoMTQzLCA2NywgNjcpO1xuICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbihcbiAgICAwIDAsXG4gICAgMTAwJSAwLFxuICAgIDEwMCUgY2FsYyh2YXIoLS1wcm9ncmVzcywgMCUpIC8gMiksXG4gICAgMCBjYWxjKHZhcigtLXByb2dyZXNzLCAwJSkgLyAyKSxcbiAgICAwIDAsXG4gICAgMCBjYWxjKDEwMCUgLSB2YXIoLS1wcm9ncmVzcywgMCUpIC8gMiksXG4gICAgMTAwJSBjYWxjKDEwMCUgLSB2YXIoLS1wcm9ncmVzcywgMCUpIC8gMiksXG4gICAgMTAwJSAxMDAlLFxuICAgIDAgMTAwJSxcbiAgICAwIGNhbGMoMTAwJSAtIHZhcigtLXByb2dyZXNzLCAwJSkgLyAyKVxuICApO1xuICBjbGlwLXBhdGg6IHBvbHlnb24oXG4gICAgMCAwLFxuICAgIDEwMCUgMCxcbiAgICAxMDAlIGNhbGModmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxuICAgIDAgY2FsYyh2YXIoLS1wcm9ncmVzcywgMCUpIC8gMiksXG4gICAgMCAwLFxuICAgIDAgY2FsYygxMDAlIC0gdmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxuICAgIDEwMCUgY2FsYygxMDAlIC0gdmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxuICAgIDEwMCUgMTAwJSxcbiAgICAwIDEwMCUsXG4gICAgMCBjYWxjKDEwMCUgLSB2YXIoLS1wcm9ncmVzcywgMCUpIC8gMilcbiAgKTtcbiAgY29udGVudDogJyc7XG4gIGluc2V0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKDEwMCUgLSB2YXIoLS1wcm9ncmVzcywgMCUpIC8gMS45OSkpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLCAtd2Via2l0LWNsaXAtcGF0aCAwLjJzIGVhc2U7XG4gIHRyYW5zaXRpb246IGNsaXAtcGF0aCAwLjJzIGVhc2UsIHRyYW5zZm9ybSAwLjJzIGVhc2U7XG4gIHRyYW5zaXRpb246IGNsaXAtcGF0aCAwLjJzIGVhc2UsIHRyYW5zZm9ybSAwLjJzIGVhc2UsIC13ZWJraXQtY2xpcC1wYXRoIDAuMnMgZWFzZTtcbn1cbi5idG4tMTM6YWZ0ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygtMTAwJSArIHZhcigtLXByb2dyZXNzLCAwJSkgLyAxLjk5KSk7XG59XG4uYnRuLTEzOmhvdmVyIHtcbiAgLS1wcm9ncmVzczogMTAwJTtcbn1cblxuLyogaGVhZGVyIGJ1dHRvbiB2aWV3IG9uIGdpdGh1YiAqL1xuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2J1dHRvbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsaUNBQWlDO0FBQ2pDOzs7Ozs7RUFNRSxlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSx3Q0FBd0M7RUFDeEMsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLGVBQWU7RUFDZjtvQkFDa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULDZEQUE2RDtFQUM3RCxVQUFVO0VBQ1YseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7QUFDQTs7RUFFRSw0QkFBNEI7RUFDNUI7Ozs7Ozs7Ozs7O0dBV0M7RUFDRDs7Ozs7Ozs7Ozs7R0FXQztFQUNELFdBQVc7RUFDWCxRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLDhEQUE4RDtFQUM5RCw0REFBNEQ7RUFDNUQsb0RBQW9EO0VBQ3BELGlGQUFpRjtBQUNuRjtBQUNBO0VBQ0UsK0RBQStEO0FBQ2pFO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUEsaUNBQWlDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGhlYWRlciBidXR0b24gdmlldyBvbiBnaXRodWIgKi9cXG4uYnRuLTEzLFxcbi5idG4tMTMgKixcXG4uYnRuLTEzIDphZnRlcixcXG4uYnRuLTEzIDpiZWZvcmUsXFxuLmJ0bi0xMzphZnRlcixcXG4uYnRuLTEzOmJlZm9yZSB7XFxuICBib3JkZXI6IDAgc29saWQ7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4uYnRuLTEzIHtcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbiAgY29sb3I6ICNmZjAwMDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sIEhlbHZldGljYSBOZXVlLCBBcmlhbCwgTm90byBTYW5zLCBzYW5zLXNlcmlmLCBBcHBsZSBDb2xvciBFbW9qaSwgU2Vnb2UgVUkgRW1vamksIFNlZ29lIFVJIFN5bWJvbCxcXG4gICAgTm90byBDb2xvciBFbW9qaTtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgbWFyZ2luOiAwO1xcbiAgLyogLXdlYmtpdC1tYXNrLWltYWdlOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCgjMDAwLCAjZmZmKTsgKi9cXG4gIHBhZGRpbmc6IDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG4uYnRuLTEzOmRpc2FibGVkIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuLmJ0bi0xMzotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiBhdXRvO1xcbn1cXG4uYnRuLTEzIHN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5idG4tMTMgW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmJ0bi0xMyB7XFxuICBib3JkZXItcmFkaXVzOiA5OXJlbTtcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDAuOHJlbSAzcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYnRuLTEzIHNwYW4ge1xcbiAgLyogbWl4LWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7ICovXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4uYnRuLTEzOmFmdGVyLFxcbi5idG4tMTM6YmVmb3JlIHtcXG4gIGJhY2tncm91bmQ6IHJnYigxNDMsIDY3LCA2Nyk7XFxuICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbihcXG4gICAgMCAwLFxcbiAgICAxMDAlIDAsXFxuICAgIDEwMCUgY2FsYyh2YXIoLS1wcm9ncmVzcywgMCUpIC8gMiksXFxuICAgIDAgY2FsYyh2YXIoLS1wcm9ncmVzcywgMCUpIC8gMiksXFxuICAgIDAgMCxcXG4gICAgMCBjYWxjKDEwMCUgLSB2YXIoLS1wcm9ncmVzcywgMCUpIC8gMiksXFxuICAgIDEwMCUgY2FsYygxMDAlIC0gdmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxcbiAgICAxMDAlIDEwMCUsXFxuICAgIDAgMTAwJSxcXG4gICAgMCBjYWxjKDEwMCUgLSB2YXIoLS1wcm9ncmVzcywgMCUpIC8gMilcXG4gICk7XFxuICBjbGlwLXBhdGg6IHBvbHlnb24oXFxuICAgIDAgMCxcXG4gICAgMTAwJSAwLFxcbiAgICAxMDAlIGNhbGModmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxcbiAgICAwIGNhbGModmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxcbiAgICAwIDAsXFxuICAgIDAgY2FsYygxMDAlIC0gdmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxcbiAgICAxMDAlIGNhbGMoMTAwJSAtIHZhcigtLXByb2dyZXNzLCAwJSkgLyAyKSxcXG4gICAgMTAwJSAxMDAlLFxcbiAgICAwIDEwMCUsXFxuICAgIDAgY2FsYygxMDAlIC0gdmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpXFxuICApO1xcbiAgY29udGVudDogJyc7XFxuICBpbnNldDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKDEwMCUgLSB2YXIoLS1wcm9ncmVzcywgMCUpIC8gMS45OSkpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZSwgLXdlYmtpdC1jbGlwLXBhdGggMC4ycyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogY2xpcC1wYXRoIDAuMnMgZWFzZSwgdHJhbnNmb3JtIDAuMnMgZWFzZTtcXG4gIHRyYW5zaXRpb246IGNsaXAtcGF0aCAwLjJzIGVhc2UsIHRyYW5zZm9ybSAwLjJzIGVhc2UsIC13ZWJraXQtY2xpcC1wYXRoIDAuMnMgZWFzZTtcXG59XFxuLmJ0bi0xMzphZnRlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygtMTAwJSArIHZhcigtLXByb2dyZXNzLCAwJSkgLyAxLjk5KSk7XFxufVxcbi5idG4tMTM6aG92ZXIge1xcbiAgLS1wcm9ncmVzczogMTAwJTtcXG59XFxuXFxuLyogaGVhZGVyIGJ1dHRvbiB2aWV3IG9uIGdpdGh1YiAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmZvb3RlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgcGFkZGluZzogM3JlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5mb290ZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uZm9vdGVyIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvZm9vdGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mb290ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgcGFkZGluZzogM3JlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uZm9vdGVyIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi5mb290ZXIgYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi8uLi9hc3NldHMvaWNvbi9haW0uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uaGVhZGVyX19pY29uX19jdG4ge1xuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHJlbTtcbn1cblxuLmhlYWRlcl9faWNvbiB7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBjZW50ZXIvY29udGFpbiBuby1yZXBlYXQgcmVkO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XG4gIGJvcmRlci1yYWRpdXM6IDk5cmVtO1xuICBhbmltYXRpb246IHJvdGF0ZSA3NTBtcyBsaW5lYXIgMG1zIGluZmluaXRlO1xuICBjdXJzb3I6IGNyb3NzaGFpcjtcbn1cblxuLmhlYWRlcl9faWNvbjpob3ZlciB7XG4gIGFuaW1hdGlvbjogbm9uZTtcbn1cblxuLmhlYWRlcl9fdGl0bGUge1xuICBmb250LXNpemU6IDZyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5oZWFkZXJfX2xpbmsge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaGVhZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0ZBQXdFO0VBQ3hFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLDJDQUEyQztFQUMzQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4uaGVhZGVyX19pY29uX19jdG4ge1xcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcmVtO1xcbn1cXG5cXG4uaGVhZGVyX19pY29uIHtcXG4gIGJhY2tncm91bmQ6IHVybCgnLi8uLi9hc3NldHMvaWNvbi9haW0uc3ZnJykgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0IHJlZDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxuICBib3JkZXItcmFkaXVzOiA5OXJlbTtcXG4gIGFuaW1hdGlvbjogcm90YXRlIDc1MG1zIGxpbmVhciAwbXMgaW5maW5pdGU7XFxuICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLmhlYWRlcl9faWNvbjpob3ZlciB7XFxuICBhbmltYXRpb246IG5vbmU7XFxufVxcblxcbi5oZWFkZXJfX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNnJlbTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4uaGVhZGVyX19saW5rIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbkBrZXlmcmFtZXMgcm90YXRlIHtcXG4gIGZyb20ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLy4uL2Fzc2V0cy9pbWcvYmF0dGxlc2hpcC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5tYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG8gMTByZW07XG4gIGdhcDogMC44cmVtO1xufVxuXG4uZ2FtZWJvYXJkX19jdG5fX2N0biB7XG4gIG1heC13aWR0aDogNTJyZW07XG59XG5cbi5nYW1lYm9hcmRfX2hlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmdhbWVib2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xuICBnYXA6IDFweDtcbiAgd2lkdGg6IGNhbGMoNTB2dyAtIDEuNnJlbSk7XG4gIGhlaWdodDogY2FsYyg1MHZ3IC0gMS42cmVtKTtcbiAgbWF4LXdpZHRoOiA1MHJlbTtcbiAgbWF4LWhlaWdodDogNTByZW07XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0IHJlZDtcbn1cblxuLmdhbWVib2FyZCA+IGRpdiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLCAwLCAwKTtcbn1cblxuLmdhbWVib2FyZCA+IC5jb250YWluX19zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5nYW1lYm9hcmQgPiBkaXYgPiBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogNTAlO1xuICBtaW4taGVpZ2h0OiAycHg7XG4gIGFzcGVjdC1yYXRpbzogMS8xO1xuICBib3JkZXItcmFkaXVzOiA5OXJlbTtcbn1cblxuLmdhbWVib2FyZCA+IGRpdiA+IC5oaXRfX3Nob3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5nYW1lYm9hcmQgPiBkaXYgPiAubWlzc19fc2hvdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbn1cblxuLmdhbWVib2FyZCAuYWlfX2NlbGwge1xuICBjdXJzb3I6IGNlbGw7XG59XG5cbi5nYW1lYm9hcmQgLmFpX19jZWxsOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjIsIDI1NSwgMTIyLCAwLjUpO1xufVxuXG4uZ2FtZWJvYXJkIC5haV9fY2VsbC5hdHRhY2tlZCB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5nYW1lYm9hcmQgLmFpX19jZWxsLmF0dGFja2VkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDEyNiwgMTI2LCAwLjUpO1xufVxuXG4uaGVhbHRoeSB7XG4gIGJvcmRlci1jb2xvcjogZ3JlZW4gIWltcG9ydGFudDtcbn1cblxuLndhcm5pbmcge1xuICBib3JkZXItY29sb3I6IHllbGxvdyAhaW1wb3J0YW50O1xufVxuXG4uZGVhdGgge1xuICBib3JkZXItY29sb3I6IHJlZCAhaW1wb3J0YW50O1xufVxuXG4vKiB0byBwbGFjZSBzaGlwIGluIHRoZSByaWdodCBkaXJlY3Rpb24gKi9cbi5zaGlwX19oZWFkLnZlcnRpY2FsIHtcbiAgYm9yZGVyLXdpZHRoOiA0cHggMCA0cHggNHB4O1xufVxuXG4uc2hpcF9faGVhZC5ob3Jpem9uIHtcbiAgYm9yZGVyLXdpZHRoOiA0cHggNHB4IDAgNHB4O1xufVxuXG4uc2hpcF9fYm9keS52ZXJ0aWNhbCB7XG4gIGJvcmRlci13aWR0aDogNHB4IDAgNHB4IDA7XG59XG5cbi5zaGlwX19ib2R5Lmhvcml6b24ge1xuICBib3JkZXItd2lkdGg6IDAgNHB4IDAgNHB4O1xufVxuXG4uc2hpcF9fdGFpbC52ZXJ0aWNhbCB7XG4gIGJvcmRlci13aWR0aDogNHB4IDRweCA0cHggMDtcbn1cblxuLnNoaXBfX3RhaWwuaG9yaXpvbiB7XG4gIGJvcmRlci13aWR0aDogMCA0cHggNHB4IDRweDtcbn1cblxuLnNoaXBfX29uZV9fbGVuZ3RoIHtcbiAgYm9yZGVyLXdpZHRoOiA0cHggIWltcG9ydGFudDtcbn1cblxuLmRpc3BsYXlfX21lc3NhZ2Uge1xuICBib3JkZXI6IDJweCBkb3R0ZWQgcmVkO1xuICBib3JkZXItcmFkaXVzOiA5OXJlbTtcbiAgcGFkZGluZzogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDJyZW0gMDtcbiAgbWF4LXdpZHRoOiA1MHJlbTtcbn1cblxuLmRpc3BsYXlfX21lc3NhZ2UgcCB7XG4gIG1hcmdpbjogMCAwIDFyZW07XG59XG5cbi5nYW1lYm9hcmRfX2N0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuW2RhdGEtcHJldmVudC1zcGFtXSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7IC8qIHRyYW5zcGFyZW50ICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgY3Vyc29yOiBjZWxsO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xuICAuZGlzcGxheV9fbWVzc2FnZSBwIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLFFBQVE7RUFDUiwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsOEVBQTRFO0FBQzlFOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLDRCQUE0QjtBQUM5Qjs7QUFFQSx5Q0FBeUM7QUFDekM7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsd0NBQXdDLEVBQUUsZ0JBQWdCO0VBQzFELGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwIGF1dG8gMTByZW07XFxuICBnYXA6IDAuOHJlbTtcXG59XFxuXFxuLmdhbWVib2FyZF9fY3RuX19jdG4ge1xcbiAgbWF4LXdpZHRoOiA1MnJlbTtcXG59XFxuXFxuLmdhbWVib2FyZF9faGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuLmdhbWVib2FyZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdhcDogMXB4O1xcbiAgd2lkdGg6IGNhbGMoNTB2dyAtIDEuNnJlbSk7XFxuICBoZWlnaHQ6IGNhbGMoNTB2dyAtIDEuNnJlbSk7XFxuICBtYXgtd2lkdGg6IDUwcmVtO1xcbiAgbWF4LWhlaWdodDogNTByZW07XFxuICBiYWNrZ3JvdW5kOiB1cmwoJy4vLi4vYXNzZXRzL2ltZy9iYXR0bGVzaGlwLnBuZycpIGNlbnRlci9jb3ZlciBuby1yZXBlYXQgcmVkO1xcbn1cXG5cXG4uZ2FtZWJvYXJkID4gZGl2IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLCAwLCAwKTtcXG59XFxuXFxuLmdhbWVib2FyZCA+IC5jb250YWluX19zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uZ2FtZWJvYXJkID4gZGl2ID4gc3BhbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogNTAlO1xcbiAgbWluLWhlaWdodDogMnB4O1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICBib3JkZXItcmFkaXVzOiA5OXJlbTtcXG59XFxuXFxuLmdhbWVib2FyZCA+IGRpdiA+IC5oaXRfX3Nob3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uZ2FtZWJvYXJkID4gZGl2ID4gLm1pc3NfX3Nob3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5haV9fY2VsbCB7XFxuICBjdXJzb3I6IGNlbGw7XFxufVxcblxcbi5nYW1lYm9hcmQgLmFpX19jZWxsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIyLCAyNTUsIDEyMiwgMC41KTtcXG59XFxuXFxuLmdhbWVib2FyZCAuYWlfX2NlbGwuYXR0YWNrZWQge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLmdhbWVib2FyZCAuYWlfX2NlbGwuYXR0YWNrZWQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDEyNiwgMTI2LCAwLjUpO1xcbn1cXG5cXG4uaGVhbHRoeSB7XFxuICBib3JkZXItY29sb3I6IGdyZWVuICFpbXBvcnRhbnQ7XFxufVxcblxcbi53YXJuaW5nIHtcXG4gIGJvcmRlci1jb2xvcjogeWVsbG93ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kZWF0aCB7XFxuICBib3JkZXItY29sb3I6IHJlZCAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiB0byBwbGFjZSBzaGlwIGluIHRoZSByaWdodCBkaXJlY3Rpb24gKi9cXG4uc2hpcF9faGVhZC52ZXJ0aWNhbCB7XFxuICBib3JkZXItd2lkdGg6IDRweCAwIDRweCA0cHg7XFxufVxcblxcbi5zaGlwX19oZWFkLmhvcml6b24ge1xcbiAgYm9yZGVyLXdpZHRoOiA0cHggNHB4IDAgNHB4O1xcbn1cXG5cXG4uc2hpcF9fYm9keS52ZXJ0aWNhbCB7XFxuICBib3JkZXItd2lkdGg6IDRweCAwIDRweCAwO1xcbn1cXG5cXG4uc2hpcF9fYm9keS5ob3Jpem9uIHtcXG4gIGJvcmRlci13aWR0aDogMCA0cHggMCA0cHg7XFxufVxcblxcbi5zaGlwX190YWlsLnZlcnRpY2FsIHtcXG4gIGJvcmRlci13aWR0aDogNHB4IDRweCA0cHggMDtcXG59XFxuXFxuLnNoaXBfX3RhaWwuaG9yaXpvbiB7XFxuICBib3JkZXItd2lkdGg6IDAgNHB4IDRweCA0cHg7XFxufVxcblxcbi5zaGlwX19vbmVfX2xlbmd0aCB7XFxuICBib3JkZXItd2lkdGg6IDRweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZGlzcGxheV9fbWVzc2FnZSB7XFxuICBib3JkZXI6IDJweCBkb3R0ZWQgcmVkO1xcbiAgYm9yZGVyLXJhZGl1czogOTlyZW07XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAycmVtIDA7XFxuICBtYXgtd2lkdGg6IDUwcmVtO1xcbn1cXG5cXG4uZGlzcGxheV9fbWVzc2FnZSBwIHtcXG4gIG1hcmdpbjogMCAwIDFyZW07XFxufVxcblxcbi5nYW1lYm9hcmRfX2N0biB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbltkYXRhLXByZXZlbnQtc3BhbV0ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApOyAvKiB0cmFuc3BhcmVudCAqL1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgY3Vyc29yOiBjZWxsO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xcbiAgLmRpc3BsYXlfX21lc3NhZ2UgcCB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAubmF2IHtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZ2FwOiAxcmVtO1xufVxuXG4ud2FybmluZy1jdG4ge1xuICBtYXgtd2lkdGg6IDUwcmVtO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4ud2FybmluZy1jdG4gcCB7XG59XG5cbi5wb3B1cC1mb3JtLWN0biB7XG4gIGxpbmUtaGVpZ2h0OiAyLjRyZW07XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgei1pbmRleDogMTAwO1xufVxuXG4ucG9wdXAtZm9ybS10aXRsZS1jdG4ge1xufVxuXG4ucG9wdXAtZm9ybS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogNnJlbTtcbiAgbGluZS1oZWlnaHQ6IDhyZW07XG59XG5cbi5mb3JtLWN0biB7XG4gIGZsZXg6IDEgMSA1MHJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNTByZW07XG59XG5cbi5mb3JtIHtcbn1cblxuaW5wdXQge1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbn1cblxuaW5wdXQ6aW52YWxpZCB7XG4gIGJvcmRlci1jb2xvcjogcmVkO1xuICBvdXRsaW5lLWNvbG9yOiByZWQ7XG59XG5cbmlucHV0OnZhbGlkIHtcbiAgYm9yZGVyLWNvbG9yOiBncmVlbjtcbiAgb3V0bGluZS1jb2xvcjogZ3JlZW47XG59XG5cbi5zdWJtaXQtZm9ybSB7XG59XG5cbi5jbG9zZS1mb3JtIHtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9uYXYuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0FBQ0E7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7QUFDQTs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtBQUNBOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubmF2IHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4ud2FybmluZy1jdG4ge1xcbiAgbWF4LXdpZHRoOiA1MHJlbTtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbi53YXJuaW5nLWN0biBwIHtcXG59XFxuXFxuLnBvcHVwLWZvcm0tY3RuIHtcXG4gIGxpbmUtaGVpZ2h0OiAyLjRyZW07XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgei1pbmRleDogMTAwO1xcbn1cXG5cXG4ucG9wdXAtZm9ybS10aXRsZS1jdG4ge1xcbn1cXG5cXG4ucG9wdXAtZm9ybS10aXRsZSB7XFxuICBmb250LXNpemU6IDZyZW07XFxuICBsaW5lLWhlaWdodDogOHJlbTtcXG59XFxuXFxuLmZvcm0tY3RuIHtcXG4gIGZsZXg6IDEgMSA1MHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiA1MHJlbTtcXG59XFxuXFxuLmZvcm0ge1xcbn1cXG5cXG5pbnB1dCB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxufVxcblxcbmlucHV0OmludmFsaWQge1xcbiAgYm9yZGVyLWNvbG9yOiByZWQ7XFxuICBvdXRsaW5lLWNvbG9yOiByZWQ7XFxufVxcblxcbmlucHV0OnZhbGlkIHtcXG4gIGJvcmRlci1jb2xvcjogZ3JlZW47XFxuICBvdXRsaW5lLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLnN1Ym1pdC1mb3JtIHtcXG59XFxuXFxuLmNsb3NlLWZvcm0ge1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxuICAgdjIuMCB8IDIwMTEwMTI2XG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuKi9cblxuaHRtbCxcbmJvZHksXG5kaXYsXG5zcGFuLFxuYXBwbGV0LFxub2JqZWN0LFxuaWZyYW1lLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCxcbmJsb2NrcXVvdGUsXG5wcmUsXG5hLFxuYWJicixcbmFjcm9ueW0sXG5hZGRyZXNzLFxuYmlnLFxuY2l0ZSxcbmNvZGUsXG5kZWwsXG5kZm4sXG5lbSxcbmltZyxcbmlucyxcbmtiZCxcbnEsXG5zLFxuc2FtcCxcbnNtYWxsLFxuc3RyaWtlLFxuc3Ryb25nLFxuc3ViLFxuc3VwLFxudHQsXG52YXIsXG5iLFxudSxcbmksXG5jZW50ZXIsXG5kbCxcbmR0LFxuZGQsXG5vbCxcbnVsLFxubGksXG5maWVsZHNldCxcbmZvcm0sXG5sYWJlbCxcbmxlZ2VuZCxcbnRhYmxlLFxuY2FwdGlvbixcbnRib2R5LFxudGZvb3QsXG50aGVhZCxcbnRyLFxudGgsXG50ZCxcbmFydGljbGUsXG5hc2lkZSxcbmNhbnZhcyxcbmRldGFpbHMsXG5lbWJlZCxcbmZpZ3VyZSxcbmZpZ2NhcHRpb24sXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxub3V0cHV0LFxucnVieSxcbnNlY3Rpb24sXG5zdW1tYXJ5LFxudGltZSxcbm1hcmssXG5hdWRpbyxcbnZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udDogaW5oZXJpdDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSxcbmFzaWRlLFxuZGV0YWlscyxcbmZpZ2NhcHRpb24sXG5maWd1cmUsXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxuc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxub2wsXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLFxucSB7XG4gIHF1b3Rlczogbm9uZTtcbn1cbmJsb2NrcXVvdGU6YmVmb3JlLFxuYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLFxucTphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBjb250ZW50OiBub25lO1xufVxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpRkUsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtFQUNmLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7QUFDQSxnREFBZ0Q7QUFDaEQ7Ozs7Ozs7Ozs7O0VBV0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLFlBQVk7QUFDZDtBQUNBOzs7O0VBSUUsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4qLFxuOjpiZWZvcmUsXG46OmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuKiB7XG4gIC8qIGNvbG9yOiByZWQ7ICovXG59XG5cbmh0bWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxuYm9keSB7XG4gIGZvbnQtc2l6ZTogMS42dnc7XG4gIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuYSB7XG4gIGNvbG9yOiB1bnNldDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bnNldDtcbn1cblxudWwsXG5saSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDRyZW07XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAzcmVtO1xufVxuXG5idXR0b24ge1xuICBib3JkZXI6IHVuc2V0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7OztFQUdFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICAvKiBjb2xvcjogcmVkOyAqL1xcbn1cXG5cXG5odG1sIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtc2l6ZTogMS42dnc7XFxuICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiB1bnNldDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5zZXQ7XFxufVxcblxcbnVsLFxcbmxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IHVuc2V0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2VudGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idXR0b24uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9idXR0b24uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvb3Rlci5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvb3Rlci5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbmF2LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbIkRPTSIsIkdhbWUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInN0YXJ0IiwibGlzdGVuUmVzdGFydCIsImxpc3RlblNldHRpbmciLCJsaXN0ZW5DbG9zZUZvcm0iLCJsaXN0ZW5TdWJtaXRGb3JtIiwiX1NJWkUiLCJfVE9UQUxfU0hJUFMiLCJfU0hJUFNfTUFYX0xFTkdUSCIsIlNoaXAiLCJfY3JlYXRlQ2xhc3MiLCJsZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJfY2xhc3NDYWxsQ2hlY2siLCJFcnJvciIsIl9oaXRzIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydGllcyIsInZhbHVlIiwiaGl0cyIsImdldCIsImlzU3VuayIsImN1cnJlbnRIZWFsdGgiLCJoaXQiLCJQb3NpdGlvbiIsInJvdyIsImNvbCIsIl9sZWdpdCIsIkNlbGwiLCJfaXNSZWNlaXZlZEF0dGFjayIsIl9zaGlwIiwicmVjZWl2ZWRBdHRhY2siLCJfc2hpcDIiLCJwb3NpdGlvbiIsImlzUmVjZWl2ZWRBdHRhY2siLCJzaGlwIiwic2V0IiwibmV3U2hpcCIsInN0YXR1cyIsIkdhbWVib2FyZCIsInNoaXBzSW5mbyIsImJvYXJkIiwiaGl0U2hvdHMiLCJtaXNzU2hvdHMiLCJzaG90cyIsImFsbENsZWFyIiwiZXZlcnkiLCJpbmZvIiwic2hpcHMiLCJyZWR1Y2UiLCJ0b3RhbCIsImN1cnJlbnRTaGlwSW5mbyIsInNoaXBTdGF0dXMiLCJjdXJyZW50U2hpcCIsInNoaXBIZWFsdGgiLCJwdXNoIiwiaGVhbHRoeSIsImRlYXRoIiwid2FybmluZyIsInBsYWNlU2hpcHMiLCJzdGFydFBvc2l0aW9uIiwiaXNWZXJ0aWNhbCIsImVuZFBvc2l0aW9uIiwibG9jYXRpb25zIiwiY2VsbHMiLCJpIiwiY2VsbCIsIl9pIiwiX2NlbGxzIiwiX2NlbGwkc2hpcCIsImNlbGxTdGF0dXMiLCJqIiwiUGxheWVyIiwia2V5IiwicmFuZG9tUGxhY2VTaGlwcyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImRpcmVjdGlvbiIsImVycm9yIiwiSHVtYW4iLCJfUGxheWVyIiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX3RoaXMiLCJjYWxsIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsImF0dGFjayIsInBsYXllciIsIkNvbXB1dGVyIiwiX1BsYXllcjIiLCJfc3VwZXIyIiwiX3RoaXMyIiwiX3JhbmRvbUF0dGFjayIsImVyciIsIl9jbGFzcyIsIl9kZWZpbmVQcm9wZXJ0eSIsIm5ld1NpemUiLCJnYW1lYm9hcmRBaSIsInN0eWxlIiwiY3NzVGV4dCIsImNvbmNhdCIsImdhbWVib2FyZEh1bWFuIiwibmV3U2hpcHMiLCJwbGF5ZXJUb0NoZWNrIiwiaXNPdmVyIiwiaHVtYW4iLCJhaSIsIkRpc3BsYXkiLCJodW1hblNoaXBzIiwibWVzc2FnZSIsInByZXZlbnRTcGFtIiwiY2xhc3NMaXN0IiwiYWRkIiwibGlzdGVuSHVtYW5BdHRhY2tzIiwiaHVtYW5BdHRhY2tzU3RhdHVzIiwiaHVtYW5NZXNzYWdlIiwiYWlEZWF0aFNoaXBzIiwic3BsaXQiLCJzaG90T25Cb2FyZCIsImNoZWNrR2FtZW92ZXIiLCJzdG9wVXNlclNwYW1taW5nIiwiYWlBdHRhY2tSZXN1bHQiLCJhaU1lc3NhZ2UiLCJfY2xhc3MyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiX3Nob3dQb3B1cEZvcm0iLCJ3cml0YWJsZSIsInBvcHVwRm9ybUN0biIsInJlbW92ZSIsIl9oaWRlUG9wdXBGb3JtIiwicmVzdGFydCIsInNldHRpbmciLCJfY2xhc3NTdGF0aWNQcml2YXRlRmllbGRTcGVjR2V0IiwicG9wdXBGb3JtIiwicHJldmVudERlZmF1bHQiLCJpbnB1dFNpemVWYWx1ZSIsImlucHV0U2l6ZSIsImlucHV0U2hpcHNWYWx1ZSIsImlucHV0U2hpcHMiLCJ0cmltIiwiY3VycmVudCIsIl90b0NvbnN1bWFibGVBcnJheSIsImNoYW5nZVNpemUiLCJjaGFuZ2VUb3RhbFNoaXBzIiwiY2xvc2VGb3JtIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJ0YXJnZXQiLCJkYXRhc2V0IiwiaHVtYW5QbGF5T25lVHVybiIsImFpUGxheU9uZVR1cm4iLCJvbmNlIiwiY29udGVudDAiLCJjb250ZW50MSIsImNvbnRlbnQyIiwidGFyZ2V0TWVzc2FnZSIsIm1lc3NhZ2VIdW1hbiIsIm1lc3NhZ2VBaSIsImlubmVySFRNTCIsInRhcmdldEJvYXJkIiwidHlwZSIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsInNoaXBUeXBlIiwiY3VycmVudFR5cGUiLCJjdXJyZW50TG9jYXRpb24iLCJkZWF0aFNoaXBzIiwiZ2FtZWJvYXJkIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=