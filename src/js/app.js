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

export const Gameboard = () => {
  let _ships = [];
  const _board = [];
  const _createBoard = () => {};
  _createBoard();

  const receiveAttack = () => {};

  return {};
};
