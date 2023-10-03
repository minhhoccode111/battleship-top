console.log('Hello, World! From app.js');

export const Ship = (len) => {
  let _length = len;
  let _hits = 0;

  const hit = () => {
    if (_hits === _length) return; // ignore if is sunk already
    _hits++;
  };

  const isSunk = () => _length - _hits < 1;

  return {
    // getter so that these properties read-only
    get length() {
      return _length;
    },
    get hits() {
      return _hits;
    },
    hit,
    isSunk,
  };
};

export const Cell = (row, col) => {
  const _row = row;
  const _col = col;
  let _isReceivedAttack = false;
  let _ship = null;

  const receivedAttack = () => {
    if (_isReceivedAttack) throw new Error('Already attacked this cell');
    _isReceivedAttack = true;
  };

  return {
    get position() {
      return {
        get row() {
          return _row;
        },
        get col() {
          return _col;
        },
      };
    },
    get isReceivedAttack() {
      return _isReceivedAttack;
    },
    get ship() {
      return _ship;
    },
    set ship(newShip) {
      if (_ship) throw new Error('Already placed a ship on this cell');
      _ship = newShip;
    },
    get status() {
      if (!_isReceivedAttack) return 'Not yet'; // if is not yet received attack
      if (_ship) return 'Hit'; // if received attack and contains a ship
      return 'Miss'; // else
    },
    receivedAttack,
  };
};

export const Gameboard = () => {
  let _ships = [];
  const _board = [];
  const _createBoard = () => {};
  _createBoard();

  const receiveAttack = () => {};

  return {};
};
