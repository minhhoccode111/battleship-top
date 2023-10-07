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
/* harmony import */ var _css_animation_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./css/animation.css */ "./src/css/animation.css");
/* harmony import */ var _css_responsive_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./css/responsive.css */ "./src/css/responsive.css");
/* harmony import */ var _assets_icon_aim_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/icon/aim.svg */ "./src/assets/icon/aim.svg");
/* harmony import */ var _assets_img_battleship_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/img/battleship.png */ "./src/assets/img/battleship.png");
/* harmony import */ var _js_app_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./js/app.js */ "./src/js/app.js");
/* harmony import */ var _js_dom_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./js/dom.js */ "./src/js/dom.js");
/* harmony import */ var _js_class_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./js/class.js */ "./src/js/class.js");
/* harmony import */ var _js_class_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_js_class_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _js_animation_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./js/animation.js */ "./src/js/animation.js");
/* harmony import */ var _js_animation_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_js_animation_js__WEBPACK_IMPORTED_MODULE_15__);

















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
    for (var _i = 0; _i < length; _i++) {
      try {
        var cell = _this2.board[row][col];
        cell.ship = ship;
        locations.push(new Position(row, col));
        isVertical ? col++ : row++; // increase based on direction
      } catch (error) {
        console.log(error);
        // i--;
      }
    }

    _this2.shipsInfo.push({
      locations: locations,
      isVertical: isVertical,
      ship: ship
    });
  };
  this.receivedAttack = function (position) {
    if (!(position instanceof Position)) throw new Error('Invalid position');
    var row = position.row,
      col = position.col;
    var cell = _this2.board[row][col];
    cell.receivedAttack();
    var status = cell.status;
    if (status === 'Hit') _this2.hitShots.push(position);
    if (status === 'Miss') _this2.missShots.push(position);
    _this2.shots.push(position);
    return status;
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
          return {
            status: status,
            position: position
          };
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
/* harmony export */   DOM: () => (/* binding */ DOM)
/* harmony export */ });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./src/js/app.js");
var _class;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var _SIZE = 10;
var DOM = /*#__PURE__*/_createClass(function DOM() {
  _classCallCheck(this, DOM);
});
_class = DOM;
_defineProperty(DOM, "messageHuman", document.querySelector("[data-message=\"human\"]"));
_defineProperty(DOM, "messageAi", document.querySelector("[data-message=\"ai\"]"));
_defineProperty(DOM, "gameboardHuman", document.querySelector('.gameboard[data-human]'));
_defineProperty(DOM, "gameboardAi", document.querySelector('.gameboard[data-ai]'));
_defineProperty(DOM, "restart", document.querySelector('[data-restart]'));
_defineProperty(DOM, "listenHumanAttacks", function (human, ai) {
  if (!(human instanceof _app__WEBPACK_IMPORTED_MODULE_0__.Human)) throw new Error('Invalid Human');
  if (!(ai instanceof _app__WEBPACK_IMPORTED_MODULE_0__.Computer)) throw new Error('Invalid Ai');
  var cells = _class.gameboardAi.querySelectorAll('.ai__cell');
  cells.forEach(function (cell) {
    cell.addEventListener('click', function (e) {
      e.target.classList.add('attacked');
      var row = +e.target.dataset.row;
      var col = +e.target.dataset.col;
      var position = new _app__WEBPACK_IMPORTED_MODULE_0__.Position(row, col);
      var humanAttacksStatus = human.attack(position, ai);
      Display.aiDeathShips(ai);
      Display.shotOnBoard(ai, position, humanAttacksStatus);
      Display.message(ai, "Human attacked on AI's board at position {row: ".concat(row + 1, ", col: ").concat(col + 1, "} and ").concat(humanAttacksStatus));
      var aiAttackResult = ai.attack(human);
      Display.humanShips(human);
      Display.shotOnBoard(human, aiAttackResult.position, aiAttackResult.status);
      Display.message(human, "AI attacked on human's board at position {row: ".concat(aiAttackResult.position.row + 1, ", col: ").concat(aiAttackResult.position.col + 1, "} and ").concat(aiAttackResult.status));
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
var Game = function () {
  var human;
  var ai;
  var start = function start() {
    human = new _app__WEBPACK_IMPORTED_MODULE_0__.Human();
    ai = new _app__WEBPACK_IMPORTED_MODULE_0__.Computer();
    human.randomPlaceShips();
    ai.randomPlaceShips();
    Display.board(human);
    Display.humanShips(human);
    Display.board(ai);
    Display.humanShips(ai); // TODO used for testing

    DOM.listenHumanAttacks(human, ai);
    Display.message(human, '');
    Display.message(ai, '');
  };
  return {
    start: start
  };
}();
window.addEventListener('DOMContentLoaded', function (e) {
  Game.start();
});
DOM.restart.addEventListener('click', function (e) {
  Game.start();
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/animation.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/animation.css ***!
  \*********************************************************************/
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
  align-items: center;
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
  margin-bottom: 2rem;
}
`, "",{"version":3,"sources":["webpack://./src/css/main.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,qBAAqB;EACrB,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,QAAQ;EACR,wBAAwB;EACxB,yBAAyB;EACzB,gBAAgB;EAChB,iBAAiB;EACjB,8EAA4E;AAC9E;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,cAAc;EACd,YAAY;EACZ,WAAW;EACX,oBAAoB;AACtB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,4BAA4B;AAC9B;;AAEA,yCAAyC;AACzC;EACE,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,sBAAsB;EACtB,oBAAoB;EACpB,aAAa;EACb,kBAAkB;EAClB,mBAAmB;AACrB","sourcesContent":[".main {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  margin: 0 auto 1rem;\n}\n\n.gameboard__ctn__ctn {\n  flex: 1;\n}\n\n.gameboard__header {\n  text-align: center;\n  padding: 1rem;\n  margin-bottom: 1rem;\n  white-space: nowrap;\n}\n.gameboard {\n  border: 1px solid red;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  gap: 1px;\n  width: calc(50vw - 1rem);\n  height: calc(50vw - 1rem);\n  max-width: 50rem;\n  max-height: 50rem;\n  background: url('./../assets/img/battleship.png') center/cover no-repeat red;\n}\n\n.gameboard > div {\n  border: 1px solid rgb(0, 0, 0);\n}\n\n.gameboard > .contain__ship {\n  background-color: black;\n}\n\n.gameboard > div > span {\n  display: block;\n  height: 3rem;\n  width: 3rem;\n  border-radius: 99rem;\n}\n\n.gameboard > div > .hit__shot {\n  background-color: red;\n}\n\n.gameboard > div > .miss__shot {\n  background-color: rgb(255, 255, 255);\n}\n\n.gameboard .ai__cell {\n  cursor: cell;\n}\n\n.gameboard .ai__cell:hover {\n  background-color: rgba(122, 255, 122, 0.5);\n}\n\n.gameboard .ai__cell.attacked {\n  cursor: not-allowed;\n}\n\n.gameboard .ai__cell.attacked:hover {\n  background-color: rgba(255, 126, 126, 0.5);\n}\n\n.healthy {\n  border-color: green !important;\n}\n\n.warning {\n  border-color: yellow !important;\n}\n\n.death {\n  border-color: red !important;\n}\n\n/* to place ship in the right direction */\n.ship__head.vertical {\n  border-width: 4px 0 4px 4px;\n}\n\n.ship__head.horizon {\n  border-width: 4px 4px 0 4px;\n}\n\n.ship__body.vertical {\n  border-width: 4px 0 4px 0;\n}\n\n.ship__body.horizon {\n  border-width: 0 4px 0 4px;\n}\n\n.ship__tail.vertical {\n  border-width: 4px 4px 4px 0;\n}\n\n.ship__tail.horizon {\n  border-width: 0 4px 4px 4px;\n}\n\n.ship__one__length {\n  border-width: 4px !important;\n}\n\n.display__message {\n  border: 2px dotted red;\n  border-radius: 99rem;\n  padding: 2rem;\n  text-align: center;\n  margin-bottom: 2rem;\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/responsive.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/responsive.css ***!
  \**********************************************************************/
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
`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;EACE,eAAe;AACjB;;AAEA;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,sBAAsB;AACxB;;AAEA;;EAEE,qBAAqB;AACvB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB","sourcesContent":[":root {\n  font-size: 10px;\n}\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\n* {\n  /* color: red; */\n}\n\nhtml {\n  background-color: black;\n}\n\nbody {\n  font-size: 2rem;\n  color: rgb(255, 0, 0);\n  font-weight: bolder;\n}\n\na {\n  color: unset;\n  text-decoration: unset;\n}\n\nul,\nli {\n  list-style-type: none;\n}\n\nh1 {\n  font-size: 4rem;\n}\n\nh2 {\n  font-size: 3rem;\n}\n\nbutton {\n  border: unset;\n  cursor: pointer;\n}\n\n.center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/css/animation.css":
/*!*******************************!*\
  !*** ./src/css/animation.css ***!
  \*******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_animation_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./animation.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/animation.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_animation_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_animation_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_animation_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_animation_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/css/responsive.css":
/*!********************************!*\
  !*** ./src/css/responsive.css ***!
  \********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./responsive.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/responsive.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvanMvYXBwLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9qcy9kb20uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9hbmltYXRpb24uY3NzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9jc3MvYXNpZGUuY3NzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9jc3MvYnV0dG9uLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9zcmMvY3NzL2Zvb3Rlci5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9oZWFkZXIuY3NzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9jc3MvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9uYXYuY3NzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9jc3MvcmVzZXQuY3NzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9jc3MvcmVzcG9uc2l2ZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9jc3MvYW5pbWF0aW9uLmNzcz8wZmE4Iiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9jc3MvYXNpZGUuY3NzPzkzNTYiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9idXR0b24uY3NzPzcyYTkiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9mb290ZXIuY3NzP2FiOGMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9oZWFkZXIuY3NzPzhhYzEiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9tYWluLmNzcz8yYzlmIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9jc3MvbmF2LmNzcz8xMWRjIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9jc3MvcmVzZXQuY3NzPzE1MmIiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9yZXNwb25zaXZlLmNzcz8wYmI1Iiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vY3NzL25hdi5jc3MnO1xuaW1wb3J0ICcuL2Nzcy9tYWluLmNzcyc7XG5pbXBvcnQgJy4vY3NzL2FzaWRlLmNzcyc7XG5pbXBvcnQgJy4vY3NzL3Jlc2V0LmNzcyc7XG5pbXBvcnQgJy4vY3NzL3N0eWxlLmNzcyc7XG5pbXBvcnQgJy4vY3NzL2Zvb3Rlci5jc3MnO1xuaW1wb3J0ICcuL2Nzcy9idXR0b24uY3NzJztcbmltcG9ydCAnLi9jc3MvaGVhZGVyLmNzcyc7XG5pbXBvcnQgJy4vY3NzL2FuaW1hdGlvbi5jc3MnO1xuaW1wb3J0ICcuL2Nzcy9yZXNwb25zaXZlLmNzcyc7XG5cbmltcG9ydCBBaW0gZnJvbSAnLi9hc3NldHMvaWNvbi9haW0uc3ZnJztcbmltcG9ydCBCYXR0bGVzaGlwIGZyb20gJy4vYXNzZXRzL2ltZy9iYXR0bGVzaGlwLnBuZyc7XG5cbmltcG9ydCAnLi9qcy9hcHAuanMnO1xuaW1wb3J0ICcuL2pzL2RvbS5qcyc7XG5pbXBvcnQgJy4vanMvY2xhc3MuanMnO1xuaW1wb3J0ICcuL2pzL2FuaW1hdGlvbi5qcyc7XG4iLCJjb25zdCBfU0laRSA9IDEwOyAvLyBHYW1lYm9hcmQgU0laRVxuXG5leHBvcnQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbikge1xuICAgIGlmIChsZW4gPiA1IHx8IGxlbiA8IDEpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzaGlwIGxlbmd0aCcpO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgICAgbGVuZ3RoOiB7XG4gICAgICAgIHZhbHVlOiBsZW4sXG4gICAgICB9LFxuXG4gICAgICBoaXRzOiB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gX2hpdHM7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgaXNTdW5rOiB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5sZW5ndGggLSBfaGl0cyA8IDE7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgbGV0IF9oaXRzID0gMDtcblxuICAgIHRoaXMuaGl0ID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaXNTdW5rKSB0aHJvdyBuZXcgRXJyb3IoYENhbid0IGF0dGFjayBzdW5rIHNoaXBgKTtcblxuICAgICAgX2hpdHMrKztcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQb3NpdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHJvdywgY29sKSB7XG4gICAgaWYgKHJvdyA+IDkgfHwgY29sID4gOSB8fCByb3cgPCAwIHx8IGNvbCA8IDApIHRocm93IG5ldyBFcnJvcignUG9zaXRpb24gaXMgbm90IGxlZ2l0Jyk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICByb3c6IHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiByb3c7XG4gICAgICAgIH0sXG4gICAgICB9LFxuXG4gICAgICBjb2w6IHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBjb2w7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDZWxsIHtcbiAgY29uc3RydWN0b3Iocm93LCBjb2wpIHtcbiAgICBsZXQgX2lzUmVjZWl2ZWRBdHRhY2sgPSBmYWxzZTtcblxuICAgIGxldCBfc2hpcCA9IG51bGw7XG5cbiAgICB0aGlzLnJlY2VpdmVkQXR0YWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKF9pc1JlY2VpdmVkQXR0YWNrKSB0aHJvdyBuZXcgRXJyb3IoJ0FscmVhZHkgYXR0YWNrZWQgdGhpcyBjZWxsJyk7XG5cbiAgICAgIF9pc1JlY2VpdmVkQXR0YWNrID0gdHJ1ZTtcblxuICAgICAgX3NoaXA/LmhpdCgpO1xuICAgIH07XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICBwb3NpdGlvbjoge1xuICAgICAgICB2YWx1ZTogbmV3IFBvc2l0aW9uKHJvdywgY29sKSxcbiAgICAgIH0sXG5cbiAgICAgIGlzUmVjZWl2ZWRBdHRhY2s6IHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBfaXNSZWNlaXZlZEF0dGFjaztcbiAgICAgICAgfSxcbiAgICAgIH0sXG5cbiAgICAgIHNoaXA6IHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBfc2hpcDtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXQobmV3U2hpcCkge1xuICAgICAgICAgIGlmIChfc2hpcCkgdGhyb3cgbmV3IEVycm9yKCdBbHJlYWR5IHBsYWNlZCBhIHNoaXAgb24gdGhpcyBjZWxsJyk7XG5cbiAgICAgICAgICBfc2hpcCA9IG5ld1NoaXA7XG4gICAgICAgIH0sXG4gICAgICB9LFxuXG4gICAgICBzdGF0dXM6IHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIGlmICghX2lzUmVjZWl2ZWRBdHRhY2spIHJldHVybiAnTm90IHlldCc7IC8vIGlmIGlzIG5vdCB5ZXQgcmVjZWl2ZWQgYXR0YWNrXG5cbiAgICAgICAgICBpZiAoX3NoaXApIHJldHVybiAnSGl0JzsgLy8gaWYgcmVjZWl2ZWQgYXR0YWNrIGFuZCBjb250YWlucyBhIHNoaXBcblxuICAgICAgICAgIHJldHVybiAnTWlzcyc7IC8vIGVsc2VcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtcbiAgICAgIHNoaXBzSW5mbzogeyB2YWx1ZTogW10gfSxcblxuICAgICAgYm9hcmQ6IHsgdmFsdWU6IFtdIH0sXG5cbiAgICAgIGhpdFNob3RzOiB7IHZhbHVlOiBbXSB9LFxuXG4gICAgICBtaXNzU2hvdHM6IHsgdmFsdWU6IFtdIH0sXG5cbiAgICAgIHNob3RzOiB7IHZhbHVlOiBbXSB9LFxuXG4gICAgICBhbGxDbGVhcjoge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc2hpcHNJbmZvLmV2ZXJ5KChpbmZvKSA9PiBpbmZvLnNoaXAuaXNTdW5rKTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG5cbiAgICAgIHNoaXBzOiB7XG4gICAgICAgIGdldCgpIHtcbiAgICAgICAgICAvLyBwbGFjZSBzaGlwcyBpbnRvIGNhdGVnb3J5IGJhc2Ugb24gdGhlaXIgc3RhdHVzOiBoZWFsdGh5LCB3YXJuaW5nLCBkZWF0aFxuICAgICAgICAgIHJldHVybiB0aGlzLnNoaXBzSW5mby5yZWR1Y2UoXG4gICAgICAgICAgICAodG90YWwsIGN1cnJlbnRTaGlwSW5mbykgPT4ge1xuICAgICAgICAgICAgICBsZXQgc2hpcFN0YXR1cztcblxuICAgICAgICAgICAgICBjb25zdCBjdXJyZW50U2hpcCA9IGN1cnJlbnRTaGlwSW5mby5zaGlwO1xuXG4gICAgICAgICAgICAgIGNvbnN0IHNoaXBIZWFsdGggPSBjdXJyZW50U2hpcC5sZW5ndGggLSBjdXJyZW50U2hpcC5oaXRzO1xuXG4gICAgICAgICAgICAgIGlmIChzaGlwSGVhbHRoID09PSAwKSBzaGlwU3RhdHVzID0gJ2RlYXRoJztcbiAgICAgICAgICAgICAgZWxzZSBpZiAoc2hpcEhlYWx0aCA9PT0gMSkgc2hpcFN0YXR1cyA9ICd3YXJuaW5nJztcbiAgICAgICAgICAgICAgZWxzZSBzaGlwU3RhdHVzID0gJ2hlYWx0aHknO1xuXG4gICAgICAgICAgICAgIHRvdGFsW3NoaXBTdGF0dXNdLnB1c2goY3VycmVudFNoaXBJbmZvKTtcblxuICAgICAgICAgICAgICByZXR1cm4gdG90YWw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgeyBoZWFsdGh5OiBbXSwgZGVhdGg6IFtdLCB3YXJuaW5nOiBbXSB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9TSVpFOyBpKyspIHtcbiAgICAgIHRoaXMuYm9hcmQucHVzaChbXSk7XG5cbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgX1NJWkU7IGorKykge1xuICAgICAgICB0aGlzLmJvYXJkW2ldLnB1c2gobmV3IENlbGwoaSwgaikpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMucGxhY2VTaGlwcyA9IChzaGlwLCBzdGFydFBvc2l0aW9uLCBpc1ZlcnRpY2FsKSA9PiB7XG4gICAgICBpZiAoIShzaGlwIGluc3RhbmNlb2YgU2hpcCkpIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzaGlwIG9iamVjdCcpO1xuXG4gICAgICBpZiAodHlwZW9mIGlzVmVydGljYWwgIT09ICdib29sZWFuJykgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGRpcmVjdGlvbicpO1xuXG4gICAgICBpZiAoIShzdGFydFBvc2l0aW9uIGluc3RhbmNlb2YgUG9zaXRpb24pKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RhcnQgcG9zaXRpb24nKTtcblxuICAgICAgY29uc3QgbGVuZ3RoID0gc2hpcC5sZW5ndGg7XG5cbiAgICAgIGNvbnN0IGVuZFBvc2l0aW9uID0gbGVuZ3RoICsgKGlzVmVydGljYWwgPyBzdGFydFBvc2l0aW9uLmNvbCA6IHN0YXJ0UG9zaXRpb24ucm93KTsgLy8gdXNlZCB0byBjaGVjayBpZiBvdXRzaWRlIHRoZSBnYW1lYm9hcmRcblxuICAgICAgaWYgKGVuZFBvc2l0aW9uID4gX1NJWkUpIHRocm93IG5ldyBFcnJvcignVGhpcyBzaGlwIGdvZXMgYmV5b25kIGdhbWVib2FyZCcpO1xuXG4gICAgICBsZXQgeyByb3csIGNvbCB9ID0gc3RhcnRQb3NpdGlvbjtcblxuICAgICAgY29uc3QgbG9jYXRpb25zID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBjZWxsID0gdGhpcy5ib2FyZFtyb3ddW2NvbF07XG5cbiAgICAgICAgICBjZWxsLnNoaXAgPSBzaGlwO1xuXG4gICAgICAgICAgbG9jYXRpb25zLnB1c2gobmV3IFBvc2l0aW9uKHJvdywgY29sKSk7XG5cbiAgICAgICAgICBpc1ZlcnRpY2FsID8gY29sKysgOiByb3crKzsgLy8gaW5jcmVhc2UgYmFzZWQgb24gZGlyZWN0aW9uXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgIC8vIGktLTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnNoaXBzSW5mby5wdXNoKHsgbG9jYXRpb25zLCBpc1ZlcnRpY2FsLCBzaGlwOiBzaGlwIH0pO1xuICAgIH07XG5cbiAgICB0aGlzLnJlY2VpdmVkQXR0YWNrID0gKHBvc2l0aW9uKSA9PiB7XG4gICAgICBpZiAoIShwb3NpdGlvbiBpbnN0YW5jZW9mIFBvc2l0aW9uKSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHBvc2l0aW9uJyk7XG5cbiAgICAgIGNvbnN0IHsgcm93LCBjb2wgfSA9IHBvc2l0aW9uO1xuXG4gICAgICBjb25zdCBjZWxsID0gdGhpcy5ib2FyZFtyb3ddW2NvbF07XG5cbiAgICAgIGNlbGwucmVjZWl2ZWRBdHRhY2soKTtcblxuICAgICAgY29uc3Qgc3RhdHVzID0gY2VsbC5zdGF0dXM7XG5cbiAgICAgIGlmIChzdGF0dXMgPT09ICdIaXQnKSB0aGlzLmhpdFNob3RzLnB1c2gocG9zaXRpb24pO1xuXG4gICAgICBpZiAoc3RhdHVzID09PSAnTWlzcycpIHRoaXMubWlzc1Nob3RzLnB1c2gocG9zaXRpb24pO1xuXG4gICAgICB0aGlzLnNob3RzLnB1c2gocG9zaXRpb24pO1xuXG4gICAgICByZXR1cm4gc3RhdHVzO1xuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGxldCBfYm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICBib2FyZDoge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIF9ib2FyZDtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICByYW5kb21QbGFjZVNoaXBzKCkge1xuICAgIGNvbnN0IGxlbmd0aHMgPSBbMSwgMSwgMSwgMiwgMiwgMywgMywgNCwgNV07XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIF9TSVpFKTtcblxuICAgICAgICBjb25zdCBjb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBfU0laRSk7XG5cbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9zaXRpb24ocm93LCBjb2wpO1xuXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9ICEhTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG5cbiAgICAgICAgY29uc3Qgc2hpcCA9IG5ldyBTaGlwKGxlbmd0aHNbaV0pO1xuXG4gICAgICAgIHRoaXMuYm9hcmQucGxhY2VTaGlwcyhzaGlwLCBwb3NpdGlvbiwgZGlyZWN0aW9uKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGktLTtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSHVtYW4gZXh0ZW5kcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5hdHRhY2sgPSAocG9zaXRpb24sIHBsYXllcikgPT4ge1xuICAgICAgaWYgKCEocG9zaXRpb24gaW5zdGFuY2VvZiBQb3NpdGlvbikgfHwgIShwbGF5ZXIuYm9hcmQgaW5zdGFuY2VvZiBHYW1lYm9hcmQpKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYXJndW1lbnRzJyk7XG5cbiAgICAgIGNvbnN0IHN0YXR1cyA9IHBsYXllci5ib2FyZC5yZWNlaXZlZEF0dGFjayhwb3NpdGlvbik7XG5cbiAgICAgIHJldHVybiBzdGF0dXM7XG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29tcHV0ZXIgZXh0ZW5kcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5hdHRhY2sgPSAocGxheWVyKSA9PiB7XG4gICAgICBpZiAoIShwbGF5ZXIuYm9hcmQgaW5zdGFuY2VvZiBHYW1lYm9hcmQpKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYm9hcmQnKTtcblxuICAgICAgY29uc3QgbGVuZ3RoID0gcGxheWVyLmJvYXJkLnNob3RzLmxlbmd0aDtcblxuICAgICAgd2hpbGUgKGxlbmd0aCA9PT0gcGxheWVyLmJvYXJkLnNob3RzLmxlbmd0aCkge1xuICAgICAgICBjb25zdCByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBfU0laRSk7XG5cbiAgICAgICAgY29uc3QgY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogX1NJWkUpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcG9zaXRpb24gPSBuZXcgUG9zaXRpb24ocm93LCBjb2wpO1xuXG4gICAgICAgICAgY29uc3Qgc3RhdHVzID0gcGxheWVyLmJvYXJkLnJlY2VpdmVkQXR0YWNrKHBvc2l0aW9uKTtcblxuICAgICAgICAgIHJldHVybiB7IHN0YXR1cywgcG9zaXRpb24gfTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IFNoaXAsIFBvc2l0aW9uLCBDZWxsLCBHYW1lYm9hcmQsIEh1bWFuLCBDb21wdXRlciwgUGxheWVyIH0gZnJvbSAnLi9hcHAnO1xuXG5jb25zdCBfU0laRSA9IDEwO1xuXG5leHBvcnQgY2xhc3MgRE9NIHtcbiAgc3RhdGljIG1lc3NhZ2VIdW1hbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW1lc3NhZ2U9XCJodW1hblwiXWApO1xuXG4gIHN0YXRpYyBtZXNzYWdlQWkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1tZXNzYWdlPVwiYWlcIl1gKTtcblxuICBzdGF0aWMgZ2FtZWJvYXJkSHVtYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZWJvYXJkW2RhdGEtaHVtYW5dJyk7XG5cbiAgc3RhdGljIGdhbWVib2FyZEFpID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWVib2FyZFtkYXRhLWFpXScpO1xuXG4gIHN0YXRpYyByZXN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcmVzdGFydF0nKTtcblxuICBzdGF0aWMgbGlzdGVuSHVtYW5BdHRhY2tzID0gKGh1bWFuLCBhaSkgPT4ge1xuICAgIGlmICghKGh1bWFuIGluc3RhbmNlb2YgSHVtYW4pKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgSHVtYW4nKTtcblxuICAgIGlmICghKGFpIGluc3RhbmNlb2YgQ29tcHV0ZXIpKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgQWknKTtcblxuICAgIGNvbnN0IGNlbGxzID0gdGhpcy5nYW1lYm9hcmRBaS5xdWVyeVNlbGVjdG9yQWxsKCcuYWlfX2NlbGwnKTtcblxuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgJ2NsaWNrJyxcblxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2F0dGFja2VkJyk7XG5cbiAgICAgICAgICBjb25zdCByb3cgPSArZS50YXJnZXQuZGF0YXNldC5yb3c7XG5cbiAgICAgICAgICBjb25zdCBjb2wgPSArZS50YXJnZXQuZGF0YXNldC5jb2w7XG5cbiAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IG5ldyBQb3NpdGlvbihyb3csIGNvbCk7XG5cbiAgICAgICAgICBjb25zdCBodW1hbkF0dGFja3NTdGF0dXMgPSBodW1hbi5hdHRhY2socG9zaXRpb24sIGFpKTtcblxuICAgICAgICAgIERpc3BsYXkuYWlEZWF0aFNoaXBzKGFpKTtcblxuICAgICAgICAgIERpc3BsYXkuc2hvdE9uQm9hcmQoYWksIHBvc2l0aW9uLCBodW1hbkF0dGFja3NTdGF0dXMpO1xuXG4gICAgICAgICAgRGlzcGxheS5tZXNzYWdlKGFpLCBgSHVtYW4gYXR0YWNrZWQgb24gQUkncyBib2FyZCBhdCBwb3NpdGlvbiB7cm93OiAke3JvdyArIDF9LCBjb2w6ICR7Y29sICsgMX19IGFuZCAke2h1bWFuQXR0YWNrc1N0YXR1c31gKTtcblxuICAgICAgICAgIGNvbnN0IGFpQXR0YWNrUmVzdWx0ID0gYWkuYXR0YWNrKGh1bWFuKTtcblxuICAgICAgICAgIERpc3BsYXkuaHVtYW5TaGlwcyhodW1hbik7XG5cbiAgICAgICAgICBEaXNwbGF5LnNob3RPbkJvYXJkKGh1bWFuLCBhaUF0dGFja1Jlc3VsdC5wb3NpdGlvbiwgYWlBdHRhY2tSZXN1bHQuc3RhdHVzKTtcblxuICAgICAgICAgIERpc3BsYXkubWVzc2FnZShodW1hbiwgYEFJIGF0dGFja2VkIG9uIGh1bWFuJ3MgYm9hcmQgYXQgcG9zaXRpb24ge3JvdzogJHthaUF0dGFja1Jlc3VsdC5wb3NpdGlvbi5yb3cgKyAxfSwgY29sOiAke2FpQXR0YWNrUmVzdWx0LnBvc2l0aW9uLmNvbCArIDF9fSBhbmQgJHthaUF0dGFja1Jlc3VsdC5zdGF0dXN9YCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG59XG5cbmNsYXNzIERpc3BsYXkge1xuICBzdGF0aWMgbWVzc2FnZSA9IChwbGF5ZXIsIGNvbnRlbnQpID0+IHtcbiAgICBsZXQgdGFyZ2V0TWVzc2FnZTtcblxuICAgIGlmIChwbGF5ZXIgaW5zdGFuY2VvZiBIdW1hbikgdGFyZ2V0TWVzc2FnZSA9IERPTS5tZXNzYWdlSHVtYW47XG4gICAgZWxzZSB0YXJnZXRNZXNzYWdlID0gRE9NLm1lc3NhZ2VBaTtcblxuICAgIHRhcmdldE1lc3NhZ2UudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICB9O1xuXG4gIHN0YXRpYyBib2FyZCA9IChwbGF5ZXIpID0+IHtcbiAgICBpZiAoIShwbGF5ZXIgaW5zdGFuY2VvZiBQbGF5ZXIpKSB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgUGxheWVyJyk7XG5cbiAgICBjb25zdCB0YXJnZXRCb2FyZCA9IHBsYXllciBpbnN0YW5jZW9mIEh1bWFuID8gRE9NLmdhbWVib2FyZEh1bWFuIDogRE9NLmdhbWVib2FyZEFpO1xuICAgIHRhcmdldEJvYXJkLmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgdHlwZSA9IHBsYXllciBpbnN0YW5jZW9mIEh1bWFuID8gJ2h1bWFuJyA6ICdhaSc7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9TSVpFOyBpKyspIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgX1NJWkU7IGorKykge1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnY2VudGVyJyk7XG5cbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoYCR7dHlwZX1fX2NlbGxgKTtcblxuICAgICAgICBkaXYuZGF0YXNldC5yb3cgPSBpO1xuXG4gICAgICAgIGRpdi5kYXRhc2V0LmNvbCA9IGo7XG5cbiAgICAgICAgdGFyZ2V0Qm9hcmQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgc3RhdGljIGh1bWFuU2hpcHMgPSAocGxheWVyKSA9PiB7XG4gICAgaWYgKCEocGxheWVyIGluc3RhbmNlb2YgUGxheWVyKSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFBsYXllcicpO1xuXG4gICAgY29uc3Qgc2hpcHMgPSBwbGF5ZXIuYm9hcmQuc2hpcHM7XG5cbiAgICAvLyBsb29wIHRocm91Z2ggMyB0eXBlOiBoZWFsdGh5LCB3YXJuaW5nLCBkZWF0aFxuICAgIGZvciAoY29uc3Qgc2hpcFR5cGUgaW4gc2hpcHMpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnRUeXBlID0gc2hpcHNbc2hpcFR5cGVdO1xuXG4gICAgICAvLyBsb29wIHRocm91Z2ggYWxsIHNoaXBzIGluIDEgdHlwZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50VHlwZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjdXJyZW50U2hpcEluZm8gPSBjdXJyZW50VHlwZVtpXTtcblxuICAgICAgICBjb25zdCBsb2NhdGlvbnMgPSBjdXJyZW50U2hpcEluZm8ubG9jYXRpb25zO1xuXG4gICAgICAgIGNvbnN0IGlzVmVydGljYWwgPSBjdXJyZW50U2hpcEluZm8uaXNWZXJ0aWNhbDtcblxuICAgICAgICAvLyBsb29wIHRocm91Z2ggYWxsIHBvc2l0aW9uIG9mIHRoYXQgc2hpcFxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxvY2F0aW9ucy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRMb2NhdGlvbiA9IGxvY2F0aW9uc1tqXTtcbiAgICAgICAgICBjb25zdCB7IHJvdywgY29sIH0gPSBjdXJyZW50TG9jYXRpb247XG5cbiAgICAgICAgICAvLyBzZWxlY3QgZXhhY3QgY2VsbCBkb20gZWxlbWVudFxuICAgICAgICAgIGNvbnN0IGNlbGwgPSBwbGF5ZXIgaW5zdGFuY2VvZiBIdW1hbiA/IERPTS5nYW1lYm9hcmRIdW1hbi5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9XCIke3Jvd31cIl1bZGF0YS1jb2w9XCIke2NvbH1cIl1gKSA6IERPTS5nYW1lYm9hcmRBaS5xdWVyeVNlbGVjdG9yKGBbZGF0YS1yb3c9XCIke3Jvd31cIl1bZGF0YS1jb2w9XCIke2NvbH1cIl1gKTtcblxuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZChzaGlwVHlwZSk7XG5cbiAgICAgICAgICBpZiAobG9jYXRpb25zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwX19vbmVfX2xlbmd0aCcpO1xuXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaXNWZXJ0aWNhbCkgY2VsbC5jbGFzc0xpc3QuYWRkKCd2ZXJ0aWNhbCcpO1xuICAgICAgICAgIGVsc2UgY2VsbC5jbGFzc0xpc3QuYWRkKCdob3Jpem9uJyk7XG5cbiAgICAgICAgICBpZiAoIWopIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcF9faGVhZCcpO1xuICAgICAgICAgIGVsc2UgaWYgKGogPT09IGxvY2F0aW9ucy5sZW5ndGggLSAxKSBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXBfX3RhaWwnKTtcbiAgICAgICAgICBlbHNlIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcF9fYm9keScpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHN0YXRpYyBhaURlYXRoU2hpcHMgPSAocGxheWVyKSA9PiB7XG4gICAgaWYgKCEocGxheWVyIGluc3RhbmNlb2YgUGxheWVyKSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIFBsYXllcicpO1xuXG4gICAgY29uc3QgZGVhdGhTaGlwcyA9IHBsYXllci5ib2FyZC5zaGlwcy5kZWF0aDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVhdGhTaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY3VycmVudFNoaXBJbmZvID0gZGVhdGhTaGlwc1tpXTtcblxuICAgICAgY29uc3QgbG9jYXRpb25zID0gY3VycmVudFNoaXBJbmZvLmxvY2F0aW9ucztcblxuICAgICAgY29uc3QgaXNWZXJ0aWNhbCA9IGN1cnJlbnRTaGlwSW5mby5pc1ZlcnRpY2FsO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGxvY2F0aW9ucy5sZW5ndGg7IGorKykge1xuICAgICAgICBjb25zdCBjdXJyZW50TG9jYXRpb24gPSBsb2NhdGlvbnNbal07XG5cbiAgICAgICAgY29uc3QgeyByb3csIGNvbCB9ID0gY3VycmVudExvY2F0aW9uO1xuXG4gICAgICAgIGNvbnN0IGNlbGwgPSBET00uZ2FtZWJvYXJkQWkucXVlcnlTZWxlY3RvcihgW2RhdGEtcm93PVwiJHtyb3d9XCJdW2RhdGEtY29sPVwiJHtjb2x9XCJdYCk7XG5cbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdkZWF0aCcpO1xuXG4gICAgICAgIGlmIChsb2NhdGlvbnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwX19vbmVfX2xlbmd0aCcpO1xuXG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNWZXJ0aWNhbCkgY2VsbC5jbGFzc0xpc3QuYWRkKCd2ZXJ0aWNhbCcpO1xuICAgICAgICBlbHNlIGNlbGwuY2xhc3NMaXN0LmFkZCgnaG9yaXpvbicpO1xuXG4gICAgICAgIGlmICghaikgY2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwX19oZWFkJyk7XG4gICAgICAgIGVsc2UgaWYgKGogPT09IGxvY2F0aW9ucy5sZW5ndGggLSAxKSBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXBfX3RhaWwnKTtcbiAgICAgICAgZWxzZSBjZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXBfX2JvZHknKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgc3RhdGljIHNob3RPbkJvYXJkID0gKHBsYXllciwgcG9zaXRpb24sIHN0YXR1cykgPT4ge1xuICAgIGlmICghKHBvc2l0aW9uIGluc3RhbmNlb2YgUG9zaXRpb24pIHx8ICEocGxheWVyIGluc3RhbmNlb2YgUGxheWVyKSkgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGFyZ3VtZW50Jyk7XG5cbiAgICBjb25zdCB7IHJvdywgY29sIH0gPSBwb3NpdGlvbjtcblxuICAgIGxldCBnYW1lYm9hcmQ7XG5cbiAgICBpZiAocGxheWVyIGluc3RhbmNlb2YgSHVtYW4pIGdhbWVib2FyZCA9IERPTS5nYW1lYm9hcmRIdW1hbjtcbiAgICBlbHNlIGdhbWVib2FyZCA9IERPTS5nYW1lYm9hcmRBaTtcblxuICAgIGNvbnN0IGNlbGwgPSBnYW1lYm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEtY29sPVwiJHtjb2x9XCJdW2RhdGEtcm93PVwiJHtyb3d9XCJdYCk7XG5cbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG4gICAgaWYgKHN0YXR1cyA9PT0gJ0hpdCcpIHNwYW4uY2xhc3NMaXN0LmFkZCgnaGl0X19zaG90Jyk7XG4gICAgZWxzZSBzcGFuLmNsYXNzTGlzdC5hZGQoJ21pc3NfX3Nob3QnKTtcblxuICAgIGNlbGwuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gIH07XG59XG5cbmNvbnN0IEdhbWUgPSAoKCkgPT4ge1xuICBsZXQgaHVtYW47XG5cbiAgbGV0IGFpO1xuXG4gIGNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xuICAgIGh1bWFuID0gbmV3IEh1bWFuKCk7XG5cbiAgICBhaSA9IG5ldyBDb21wdXRlcigpO1xuXG4gICAgaHVtYW4ucmFuZG9tUGxhY2VTaGlwcygpO1xuXG4gICAgYWkucmFuZG9tUGxhY2VTaGlwcygpO1xuXG4gICAgRGlzcGxheS5ib2FyZChodW1hbik7XG5cbiAgICBEaXNwbGF5Lmh1bWFuU2hpcHMoaHVtYW4pO1xuXG4gICAgRGlzcGxheS5ib2FyZChhaSk7XG5cbiAgICBEaXNwbGF5Lmh1bWFuU2hpcHMoYWkpOyAvLyBUT0RPIHVzZWQgZm9yIHRlc3RpbmdcblxuICAgIERPTS5saXN0ZW5IdW1hbkF0dGFja3MoaHVtYW4sIGFpKTtcblxuICAgIERpc3BsYXkubWVzc2FnZShodW1hbiwgJycpO1xuXG4gICAgRGlzcGxheS5tZXNzYWdlKGFpLCAnJyk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBzdGFydCxcbiAgfTtcbn0pKCk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKGUpID0+IHtcbiAgR2FtZS5zdGFydCgpO1xufSk7XG5cbkRPTS5yZXN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgR2FtZS5zdGFydCgpO1xufSk7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5hc2lkZSB7XG59XG4uZGlzcGxheV9fbWVzc2FnZSB7XG4gIGJvcmRlcjogMnB4IGRvdHRlZCByZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDk5cmVtO1xuICBwYWRkaW5nOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvYXNpZGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0FBQ0E7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYXNpZGUge1xcbn1cXG4uZGlzcGxheV9fbWVzc2FnZSB7XFxuICBib3JkZXI6IDJweCBkb3R0ZWQgcmVkO1xcbiAgYm9yZGVyLXJhZGl1czogOTlyZW07XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGhlYWRlciBidXR0b24gdmlldyBvbiBnaXRodWIgKi9cbi5idG4tMTMsXG4uYnRuLTEzICosXG4uYnRuLTEzIDphZnRlcixcbi5idG4tMTMgOmJlZm9yZSxcbi5idG4tMTM6YWZ0ZXIsXG4uYnRuLTEzOmJlZm9yZSB7XG4gIGJvcmRlcjogMCBzb2xpZDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5idG4tMTMge1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgY29sb3I6ICNmZjAwMDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBIZWx2ZXRpY2EgTmV1ZSwgQXJpYWwsIE5vdG8gU2Fucywgc2Fucy1zZXJpZiwgQXBwbGUgQ29sb3IgRW1vamksIFNlZ29lIFVJIEVtb2ppLCBTZWdvZSBVSSBTeW1ib2wsXG4gICAgTm90byBDb2xvciBFbW9qaTtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250LXdlaWdodDogOTAwO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBtYXJnaW46IDA7XG4gIC8qIC13ZWJraXQtbWFzay1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoIzAwMCwgI2ZmZik7ICovXG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uYnRuLTEzOmRpc2FibGVkIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLmJ0bi0xMzotbW96LWZvY3VzcmluZyB7XG4gIG91dGxpbmU6IGF1dG87XG59XG4uYnRuLTEzIHN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmJ0bi0xMyBbaGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYnRuLTEzIHtcbiAgYm9yZGVyLXJhZGl1czogOTlyZW07XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwLjhyZW0gM3JlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJ0bi0xMyBzcGFuIHtcbiAgLyogbWl4LWJsZW5kLW1vZGU6IGRpZmZlcmVuY2U7ICovXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cbi5idG4tMTM6YWZ0ZXIsXG4uYnRuLTEzOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6IHJnYig1NSwgNTUsIDU1KTtcbiAgLXdlYmtpdC1jbGlwLXBhdGg6IHBvbHlnb24oXG4gICAgMCAwLFxuICAgIDEwMCUgMCxcbiAgICAxMDAlIGNhbGModmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxuICAgIDAgY2FsYyh2YXIoLS1wcm9ncmVzcywgMCUpIC8gMiksXG4gICAgMCAwLFxuICAgIDAgY2FsYygxMDAlIC0gdmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxuICAgIDEwMCUgY2FsYygxMDAlIC0gdmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxuICAgIDEwMCUgMTAwJSxcbiAgICAwIDEwMCUsXG4gICAgMCBjYWxjKDEwMCUgLSB2YXIoLS1wcm9ncmVzcywgMCUpIC8gMilcbiAgKTtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKFxuICAgIDAgMCxcbiAgICAxMDAlIDAsXG4gICAgMTAwJSBjYWxjKHZhcigtLXByb2dyZXNzLCAwJSkgLyAyKSxcbiAgICAwIGNhbGModmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxuICAgIDAgMCxcbiAgICAwIGNhbGMoMTAwJSAtIHZhcigtLXByb2dyZXNzLCAwJSkgLyAyKSxcbiAgICAxMDAlIGNhbGMoMTAwJSAtIHZhcigtLXByb2dyZXNzLCAwJSkgLyAyKSxcbiAgICAxMDAlIDEwMCUsXG4gICAgMCAxMDAlLFxuICAgIDAgY2FsYygxMDAlIC0gdmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpXG4gICk7XG4gIGNvbnRlbnQ6ICcnO1xuICBpbnNldDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygxMDAlIC0gdmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDEuOTkpKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZSwgLXdlYmtpdC1jbGlwLXBhdGggMC4ycyBlYXNlO1xuICB0cmFuc2l0aW9uOiBjbGlwLXBhdGggMC4ycyBlYXNlLCB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xuICB0cmFuc2l0aW9uOiBjbGlwLXBhdGggMC4ycyBlYXNlLCB0cmFuc2Zvcm0gMC4ycyBlYXNlLCAtd2Via2l0LWNsaXAtcGF0aCAwLjJzIGVhc2U7XG59XG4uYnRuLTEzOmFmdGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoLTEwMCUgKyB2YXIoLS1wcm9ncmVzcywgMCUpIC8gMS45OSkpO1xufVxuLmJ0bi0xMzpob3ZlciB7XG4gIC0tcHJvZ3Jlc3M6IDEwMCU7XG59XG5cbi8qIGhlYWRlciBidXR0b24gdmlldyBvbiBnaXRodWIgKi9cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9idXR0b24uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGlDQUFpQztBQUNqQzs7Ozs7O0VBTUUsZUFBZTtFQUNmLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usd0NBQXdDO0VBQ3hDLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxlQUFlO0VBQ2Y7b0JBQ2tCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCw2REFBNkQ7RUFDN0QsVUFBVTtFQUNWLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaO0FBQ0E7O0VBRUUsMkJBQTJCO0VBQzNCOzs7Ozs7Ozs7OztHQVdDO0VBQ0Q7Ozs7Ozs7Ozs7O0dBV0M7RUFDRCxXQUFXO0VBQ1gsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQiw4REFBOEQ7RUFDOUQsNERBQTREO0VBQzVELG9EQUFvRDtFQUNwRCxpRkFBaUY7QUFDbkY7QUFDQTtFQUNFLCtEQUErRDtBQUNqRTtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBLGlDQUFpQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBoZWFkZXIgYnV0dG9uIHZpZXcgb24gZ2l0aHViICovXFxuLmJ0bi0xMyxcXG4uYnRuLTEzICosXFxuLmJ0bi0xMyA6YWZ0ZXIsXFxuLmJ0bi0xMyA6YmVmb3JlLFxcbi5idG4tMTM6YWZ0ZXIsXFxuLmJ0bi0xMzpiZWZvcmUge1xcbiAgYm9yZGVyOiAwIHNvbGlkO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLmJ0bi0xMyB7XFxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG4gIGNvbG9yOiAjZmYwMDAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBIZWx2ZXRpY2EgTmV1ZSwgQXJpYWwsIE5vdG8gU2Fucywgc2Fucy1zZXJpZiwgQXBwbGUgQ29sb3IgRW1vamksIFNlZ29lIFVJIEVtb2ppLCBTZWdvZSBVSSBTeW1ib2wsXFxuICAgIE5vdG8gQ29sb3IgRW1vamk7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIG1hcmdpbjogMDtcXG4gIC8qIC13ZWJraXQtbWFzay1pbWFnZTogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoIzAwMCwgI2ZmZik7ICovXFxuICBwYWRkaW5nOiAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLmJ0bi0xMzpkaXNhYmxlZCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbi5idG4tMTM6LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogYXV0bztcXG59XFxuLmJ0bi0xMyBzdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4uYnRuLTEzIFtoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5idG4tMTMge1xcbiAgYm9yZGVyLXJhZGl1czogOTlyZW07XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nOiAwLjhyZW0gM3JlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmJ0bi0xMyBzcGFuIHtcXG4gIC8qIG1peC1ibGVuZC1tb2RlOiBkaWZmZXJlbmNlOyAqL1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG59XFxuLmJ0bi0xMzphZnRlcixcXG4uYnRuLTEzOmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kOiByZ2IoNTUsIDU1LCA1NSk7XFxuICAtd2Via2l0LWNsaXAtcGF0aDogcG9seWdvbihcXG4gICAgMCAwLFxcbiAgICAxMDAlIDAsXFxuICAgIDEwMCUgY2FsYyh2YXIoLS1wcm9ncmVzcywgMCUpIC8gMiksXFxuICAgIDAgY2FsYyh2YXIoLS1wcm9ncmVzcywgMCUpIC8gMiksXFxuICAgIDAgMCxcXG4gICAgMCBjYWxjKDEwMCUgLSB2YXIoLS1wcm9ncmVzcywgMCUpIC8gMiksXFxuICAgIDEwMCUgY2FsYygxMDAlIC0gdmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxcbiAgICAxMDAlIDEwMCUsXFxuICAgIDAgMTAwJSxcXG4gICAgMCBjYWxjKDEwMCUgLSB2YXIoLS1wcm9ncmVzcywgMCUpIC8gMilcXG4gICk7XFxuICBjbGlwLXBhdGg6IHBvbHlnb24oXFxuICAgIDAgMCxcXG4gICAgMTAwJSAwLFxcbiAgICAxMDAlIGNhbGModmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxcbiAgICAwIGNhbGModmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxcbiAgICAwIDAsXFxuICAgIDAgY2FsYygxMDAlIC0gdmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpLFxcbiAgICAxMDAlIGNhbGMoMTAwJSAtIHZhcigtLXByb2dyZXNzLCAwJSkgLyAyKSxcXG4gICAgMTAwJSAxMDAlLFxcbiAgICAwIDEwMCUsXFxuICAgIDAgY2FsYygxMDAlIC0gdmFyKC0tcHJvZ3Jlc3MsIDAlKSAvIDIpXFxuICApO1xcbiAgY29udGVudDogJyc7XFxuICBpbnNldDogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKDEwMCUgLSB2YXIoLS1wcm9ncmVzcywgMCUpIC8gMS45OSkpO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZSwgLXdlYmtpdC1jbGlwLXBhdGggMC4ycyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogY2xpcC1wYXRoIDAuMnMgZWFzZSwgdHJhbnNmb3JtIDAuMnMgZWFzZTtcXG4gIHRyYW5zaXRpb246IGNsaXAtcGF0aCAwLjJzIGVhc2UsIHRyYW5zZm9ybSAwLjJzIGVhc2UsIC13ZWJraXQtY2xpcC1wYXRoIDAuMnMgZWFzZTtcXG59XFxuLmJ0bi0xMzphZnRlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygtMTAwJSArIHZhcigtLXByb2dyZXNzLCAwJSkgLyAxLjk5KSk7XFxufVxcbi5idG4tMTM6aG92ZXIge1xcbiAgLS1wcm9ncmVzczogMTAwJTtcXG59XFxuXFxuLyogaGVhZGVyIGJ1dHRvbiB2aWV3IG9uIGdpdGh1YiAqL1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vLi4vYXNzZXRzL2ljb24vYWltLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmhlYWRlcl9faWNvbl9fY3RuIHtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbn1cbi5oZWFkZXJfX2ljb24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0IHJlZDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA5OXJlbTtcbiAgd2lkdGg6IDZyZW07XG4gIGFuaW1hdGlvbjogcm90YXRlIDc1MG1zIGxpbmVhciAwbXMgaW5maW5pdGU7XG4gIGN1cnNvcjogY3Jvc3NoYWlyO1xufVxuLmhlYWRlcl9faWNvbjpob3ZlciB7XG4gIGFuaW1hdGlvbjogbm9uZTtcbn1cbi5oZWFkZXJfX3RpdGxlX19jdG4ge1xufVxuLmhlYWRlcl9fdGl0bGUge1xuICBmb250LXNpemU6IDZyZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uaGVhZGVyX19saW5rX19jdG4ge1xufVxuLmhlYWRlcl9fbGluayB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaGVhZGVyLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdGQUF3RTtFQUN4RSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLFdBQVc7RUFDWCwyQ0FBMkM7RUFDM0MsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5oZWFkZXJfX2ljb25fX2N0biB7XFxuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xcbn1cXG4uaGVhZGVyX19pY29uIHtcXG4gIGJhY2tncm91bmQ6IHVybCgnLi8uLi9hc3NldHMvaWNvbi9haW0uc3ZnJykgY2VudGVyL2NvbnRhaW4gbm8tcmVwZWF0IHJlZDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDk5cmVtO1xcbiAgd2lkdGg6IDZyZW07XFxuICBhbmltYXRpb246IHJvdGF0ZSA3NTBtcyBsaW5lYXIgMG1zIGluZmluaXRlO1xcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcbi5oZWFkZXJfX2ljb246aG92ZXIge1xcbiAgYW5pbWF0aW9uOiBub25lO1xcbn1cXG4uaGVhZGVyX190aXRsZV9fY3RuIHtcXG59XFxuLmhlYWRlcl9fdGl0bGUge1xcbiAgZm9udC1zaXplOiA2cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5oZWFkZXJfX2xpbmtfX2N0biB7XFxufVxcbi5oZWFkZXJfX2xpbmsge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuQGtleWZyYW1lcyByb3RhdGUge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vLi4vYXNzZXRzL2ltZy9iYXR0bGVzaGlwLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLm1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDAgYXV0byAxcmVtO1xufVxuXG4uZ2FtZWJvYXJkX19jdG5fX2N0biB7XG4gIGZsZXg6IDE7XG59XG5cbi5nYW1lYm9hcmRfX2hlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbi5nYW1lYm9hcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcbiAgZ2FwOiAxcHg7XG4gIHdpZHRoOiBjYWxjKDUwdncgLSAxcmVtKTtcbiAgaGVpZ2h0OiBjYWxjKDUwdncgLSAxcmVtKTtcbiAgbWF4LXdpZHRoOiA1MHJlbTtcbiAgbWF4LWhlaWdodDogNTByZW07XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0IHJlZDtcbn1cblxuLmdhbWVib2FyZCA+IGRpdiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLCAwLCAwKTtcbn1cblxuLmdhbWVib2FyZCA+IC5jb250YWluX19zaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbi5nYW1lYm9hcmQgPiBkaXYgPiBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogM3JlbTtcbiAgd2lkdGg6IDNyZW07XG4gIGJvcmRlci1yYWRpdXM6IDk5cmVtO1xufVxuXG4uZ2FtZWJvYXJkID4gZGl2ID4gLmhpdF9fc2hvdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLmdhbWVib2FyZCA+IGRpdiA+IC5taXNzX19zaG90IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuXG4uZ2FtZWJvYXJkIC5haV9fY2VsbCB7XG4gIGN1cnNvcjogY2VsbDtcbn1cblxuLmdhbWVib2FyZCAuYWlfX2NlbGw6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyMiwgMjU1LCAxMjIsIDAuNSk7XG59XG5cbi5nYW1lYm9hcmQgLmFpX19jZWxsLmF0dGFja2VkIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuLmdhbWVib2FyZCAuYWlfX2NlbGwuYXR0YWNrZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTI2LCAxMjYsIDAuNSk7XG59XG5cbi5oZWFsdGh5IHtcbiAgYm9yZGVyLWNvbG9yOiBncmVlbiAhaW1wb3J0YW50O1xufVxuXG4ud2FybmluZyB7XG4gIGJvcmRlci1jb2xvcjogeWVsbG93ICFpbXBvcnRhbnQ7XG59XG5cbi5kZWF0aCB7XG4gIGJvcmRlci1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XG59XG5cbi8qIHRvIHBsYWNlIHNoaXAgaW4gdGhlIHJpZ2h0IGRpcmVjdGlvbiAqL1xuLnNoaXBfX2hlYWQudmVydGljYWwge1xuICBib3JkZXItd2lkdGg6IDRweCAwIDRweCA0cHg7XG59XG5cbi5zaGlwX19oZWFkLmhvcml6b24ge1xuICBib3JkZXItd2lkdGg6IDRweCA0cHggMCA0cHg7XG59XG5cbi5zaGlwX19ib2R5LnZlcnRpY2FsIHtcbiAgYm9yZGVyLXdpZHRoOiA0cHggMCA0cHggMDtcbn1cblxuLnNoaXBfX2JvZHkuaG9yaXpvbiB7XG4gIGJvcmRlci13aWR0aDogMCA0cHggMCA0cHg7XG59XG5cbi5zaGlwX190YWlsLnZlcnRpY2FsIHtcbiAgYm9yZGVyLXdpZHRoOiA0cHggNHB4IDRweCAwO1xufVxuXG4uc2hpcF9fdGFpbC5ob3Jpem9uIHtcbiAgYm9yZGVyLXdpZHRoOiAwIDRweCA0cHggNHB4O1xufVxuXG4uc2hpcF9fb25lX19sZW5ndGgge1xuICBib3JkZXItd2lkdGg6IDRweCAhaW1wb3J0YW50O1xufVxuXG4uZGlzcGxheV9fbWVzc2FnZSB7XG4gIGJvcmRlcjogMnB4IGRvdHRlZCByZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDk5cmVtO1xuICBwYWRkaW5nOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsT0FBTztBQUNUOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsUUFBUTtFQUNSLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQiw4RUFBNEU7QUFDOUU7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUEseUNBQXlDO0FBQ3pDO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwIGF1dG8gMXJlbTtcXG59XFxuXFxuLmdhbWVib2FyZF9fY3RuX19jdG4ge1xcbiAgZmxleDogMTtcXG59XFxuXFxuLmdhbWVib2FyZF9faGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLmdhbWVib2FyZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdhcDogMXB4O1xcbiAgd2lkdGg6IGNhbGMoNTB2dyAtIDFyZW0pO1xcbiAgaGVpZ2h0OiBjYWxjKDUwdncgLSAxcmVtKTtcXG4gIG1heC13aWR0aDogNTByZW07XFxuICBtYXgtaGVpZ2h0OiA1MHJlbTtcXG4gIGJhY2tncm91bmQ6IHVybCgnLi8uLi9hc3NldHMvaW1nL2JhdHRsZXNoaXAucG5nJykgY2VudGVyL2NvdmVyIG5vLXJlcGVhdCByZWQ7XFxufVxcblxcbi5nYW1lYm9hcmQgPiBkaXYge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDAsIDApO1xcbn1cXG5cXG4uZ2FtZWJvYXJkID4gLmNvbnRhaW5fX3NoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxufVxcblxcbi5nYW1lYm9hcmQgPiBkaXYgPiBzcGFuIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgd2lkdGg6IDNyZW07XFxuICBib3JkZXItcmFkaXVzOiA5OXJlbTtcXG59XFxuXFxuLmdhbWVib2FyZCA+IGRpdiA+IC5oaXRfX3Nob3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uZ2FtZWJvYXJkID4gZGl2ID4gLm1pc3NfX3Nob3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4uZ2FtZWJvYXJkIC5haV9fY2VsbCB7XFxuICBjdXJzb3I6IGNlbGw7XFxufVxcblxcbi5nYW1lYm9hcmQgLmFpX19jZWxsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTIyLCAyNTUsIDEyMiwgMC41KTtcXG59XFxuXFxuLmdhbWVib2FyZCAuYWlfX2NlbGwuYXR0YWNrZWQge1xcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLmdhbWVib2FyZCAuYWlfX2NlbGwuYXR0YWNrZWQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDEyNiwgMTI2LCAwLjUpO1xcbn1cXG5cXG4uaGVhbHRoeSB7XFxuICBib3JkZXItY29sb3I6IGdyZWVuICFpbXBvcnRhbnQ7XFxufVxcblxcbi53YXJuaW5nIHtcXG4gIGJvcmRlci1jb2xvcjogeWVsbG93ICFpbXBvcnRhbnQ7XFxufVxcblxcbi5kZWF0aCB7XFxuICBib3JkZXItY29sb3I6IHJlZCAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiB0byBwbGFjZSBzaGlwIGluIHRoZSByaWdodCBkaXJlY3Rpb24gKi9cXG4uc2hpcF9faGVhZC52ZXJ0aWNhbCB7XFxuICBib3JkZXItd2lkdGg6IDRweCAwIDRweCA0cHg7XFxufVxcblxcbi5zaGlwX19oZWFkLmhvcml6b24ge1xcbiAgYm9yZGVyLXdpZHRoOiA0cHggNHB4IDAgNHB4O1xcbn1cXG5cXG4uc2hpcF9fYm9keS52ZXJ0aWNhbCB7XFxuICBib3JkZXItd2lkdGg6IDRweCAwIDRweCAwO1xcbn1cXG5cXG4uc2hpcF9fYm9keS5ob3Jpem9uIHtcXG4gIGJvcmRlci13aWR0aDogMCA0cHggMCA0cHg7XFxufVxcblxcbi5zaGlwX190YWlsLnZlcnRpY2FsIHtcXG4gIGJvcmRlci13aWR0aDogNHB4IDRweCA0cHggMDtcXG59XFxuXFxuLnNoaXBfX3RhaWwuaG9yaXpvbiB7XFxuICBib3JkZXItd2lkdGg6IDAgNHB4IDRweCA0cHg7XFxufVxcblxcbi5zaGlwX19vbmVfX2xlbmd0aCB7XFxuICBib3JkZXItd2lkdGg6IDRweCAhaW1wb3J0YW50O1xcbn1cXG5cXG4uZGlzcGxheV9fbWVzc2FnZSB7XFxuICBib3JkZXI6IDJweCBkb3R0ZWQgcmVkO1xcbiAgYm9yZGVyLXJhZGl1czogOTlyZW07XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAubmF2IHtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9uYXYuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubmF2IHtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxuICAgdjIuMCB8IDIwMTEwMTI2XG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuKi9cblxuaHRtbCxcbmJvZHksXG5kaXYsXG5zcGFuLFxuYXBwbGV0LFxub2JqZWN0LFxuaWZyYW1lLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCxcbmJsb2NrcXVvdGUsXG5wcmUsXG5hLFxuYWJicixcbmFjcm9ueW0sXG5hZGRyZXNzLFxuYmlnLFxuY2l0ZSxcbmNvZGUsXG5kZWwsXG5kZm4sXG5lbSxcbmltZyxcbmlucyxcbmtiZCxcbnEsXG5zLFxuc2FtcCxcbnNtYWxsLFxuc3RyaWtlLFxuc3Ryb25nLFxuc3ViLFxuc3VwLFxudHQsXG52YXIsXG5iLFxudSxcbmksXG5jZW50ZXIsXG5kbCxcbmR0LFxuZGQsXG5vbCxcbnVsLFxubGksXG5maWVsZHNldCxcbmZvcm0sXG5sYWJlbCxcbmxlZ2VuZCxcbnRhYmxlLFxuY2FwdGlvbixcbnRib2R5LFxudGZvb3QsXG50aGVhZCxcbnRyLFxudGgsXG50ZCxcbmFydGljbGUsXG5hc2lkZSxcbmNhbnZhcyxcbmRldGFpbHMsXG5lbWJlZCxcbmZpZ3VyZSxcbmZpZ2NhcHRpb24sXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxub3V0cHV0LFxucnVieSxcbnNlY3Rpb24sXG5zdW1tYXJ5LFxudGltZSxcbm1hcmssXG5hdWRpbyxcbnZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udDogaW5oZXJpdDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSxcbmFzaWRlLFxuZGV0YWlscyxcbmZpZ2NhcHRpb24sXG5maWd1cmUsXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxuc2VjdGlvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSB7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxub2wsXG51bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLFxucSB7XG4gIHF1b3Rlczogbm9uZTtcbn1cbmJsb2NrcXVvdGU6YmVmb3JlLFxuYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLFxucTphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBjb250ZW50OiBub25lO1xufVxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpRkUsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtFQUNmLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7QUFDQSxnREFBZ0Q7QUFDaEQ7Ozs7Ozs7Ozs7O0VBV0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBOztFQUVFLGdCQUFnQjtBQUNsQjtBQUNBOztFQUVFLFlBQVk7QUFDZDtBQUNBOzs7O0VBSUUsV0FBVztFQUNYLGFBQWE7QUFDZjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gIHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsXFxuYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSxcXG5xOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuKixcbjo6YmVmb3JlLFxuOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbioge1xuICAvKiBjb2xvcjogcmVkOyAqL1xufVxuXG5odG1sIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG59XG5cbmJvZHkge1xuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuYSB7XG4gIGNvbG9yOiB1bnNldDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bnNldDtcbn1cblxudWwsXG5saSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDRyZW07XG59XG5cbmgyIHtcbiAgZm9udC1zaXplOiAzcmVtO1xufVxuXG5idXR0b24ge1xuICBib3JkZXI6IHVuc2V0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG59XFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcbiAgLyogY29sb3I6IHJlZDsgKi9cXG59XFxuXFxuaHRtbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG59XFxuXFxuYm9keSB7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiB1bnNldDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5zZXQ7XFxufVxcblxcbnVsLFxcbmxpIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG5oMiB7XFxuICBmb250LXNpemU6IDNyZW07XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IHVuc2V0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY2VudGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hbmltYXRpb24uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hbmltYXRpb24uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FzaWRlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXNpZGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J1dHRvbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2J1dHRvbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9vdGVyLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9oZWFkZXIuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXYuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9uYXYuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc3BvbnNpdmUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNwb25zaXZlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07Il0sIm5hbWVzIjpbIkFpbSIsIkJhdHRsZXNoaXAiLCJfU0laRSIsIlNoaXAiLCJfY3JlYXRlQ2xhc3MiLCJsZW4iLCJfdGhpcyIsIl9jbGFzc0NhbGxDaGVjayIsIkVycm9yIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydGllcyIsImxlbmd0aCIsInZhbHVlIiwiaGl0cyIsImdldCIsIl9oaXRzIiwiaXNTdW5rIiwiaGl0IiwiUG9zaXRpb24iLCJyb3ciLCJjb2wiLCJDZWxsIiwiX2lzUmVjZWl2ZWRBdHRhY2siLCJfc2hpcCIsInJlY2VpdmVkQXR0YWNrIiwiX3NoaXAyIiwicG9zaXRpb24iLCJpc1JlY2VpdmVkQXR0YWNrIiwic2hpcCIsInNldCIsIm5ld1NoaXAiLCJzdGF0dXMiLCJHYW1lYm9hcmQiLCJfdGhpczIiLCJzaGlwc0luZm8iLCJib2FyZCIsImhpdFNob3RzIiwibWlzc1Nob3RzIiwic2hvdHMiLCJhbGxDbGVhciIsImV2ZXJ5IiwiaW5mbyIsInNoaXBzIiwicmVkdWNlIiwidG90YWwiLCJjdXJyZW50U2hpcEluZm8iLCJzaGlwU3RhdHVzIiwiY3VycmVudFNoaXAiLCJzaGlwSGVhbHRoIiwicHVzaCIsImhlYWx0aHkiLCJkZWF0aCIsIndhcm5pbmciLCJpIiwiaiIsInBsYWNlU2hpcHMiLCJzdGFydFBvc2l0aW9uIiwiaXNWZXJ0aWNhbCIsImVuZFBvc2l0aW9uIiwibG9jYXRpb25zIiwiY2VsbCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIlBsYXllciIsIl9ib2FyZCIsImtleSIsInJhbmRvbVBsYWNlU2hpcHMiLCJsZW5ndGhzIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZGlyZWN0aW9uIiwiSHVtYW4iLCJfUGxheWVyIiwiX2luaGVyaXRzIiwiX3N1cGVyIiwiX2NyZWF0ZVN1cGVyIiwiX3RoaXMzIiwiY2FsbCIsImF0dGFjayIsInBsYXllciIsIkNvbXB1dGVyIiwiX1BsYXllcjIiLCJfc3VwZXIyIiwiX3RoaXM0IiwiZXJyIiwiRE9NIiwiX2NsYXNzIiwiX2RlZmluZVByb3BlcnR5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaHVtYW4iLCJhaSIsImNlbGxzIiwiZ2FtZWJvYXJkQWkiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwiZGF0YXNldCIsImh1bWFuQXR0YWNrc1N0YXR1cyIsIkRpc3BsYXkiLCJhaURlYXRoU2hpcHMiLCJzaG90T25Cb2FyZCIsIm1lc3NhZ2UiLCJjb25jYXQiLCJhaUF0dGFja1Jlc3VsdCIsImh1bWFuU2hpcHMiLCJvbmNlIiwiY29udGVudCIsInRhcmdldE1lc3NhZ2UiLCJtZXNzYWdlSHVtYW4iLCJtZXNzYWdlQWkiLCJ0ZXh0Q29udGVudCIsInRhcmdldEJvYXJkIiwiZ2FtZWJvYXJkSHVtYW4iLCJpbm5lckhUTUwiLCJ0eXBlIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwic2hpcFR5cGUiLCJjdXJyZW50VHlwZSIsImN1cnJlbnRMb2NhdGlvbiIsImRlYXRoU2hpcHMiLCJnYW1lYm9hcmQiLCJzcGFuIiwiR2FtZSIsInN0YXJ0IiwibGlzdGVuSHVtYW5BdHRhY2tzIiwid2luZG93IiwicmVzdGFydCJdLCJzb3VyY2VSb290IjoiIn0=