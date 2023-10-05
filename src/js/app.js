console.log('Hello, World! From app.js');

export const Ship = (len) => {
  if (len > 5 || len < 1) throw new Error('Invalid ship length');

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

export const Position = (row, col) => {
  const _row = row;
  const _col = col;
  if (row > 9 || col > 9 || row < 0 || col < 0) throw new Error('Position is not legit');
  return {
    get row() {
      return _row;
    },
    get col() {
      return _col;
    },
  };
};

export const Cell = (row, col) => {
  const _position = Position(row, col);
  let _isReceivedAttack = false;
  let _ship = null;

  const receivedAttack = () => {
    if (_isReceivedAttack) throw new Error('Already attacked this cell');
    _isReceivedAttack = true;
    _ship?.hit();
  };

  return {
    get position() {
      return _position;
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
  const _storeHits = [];
  const _storeMisses = [];
  const _storeShips = [];
  const _SIZE = 10;

  const _board = [];
  for (let i = 0; i < _SIZE; i++) {
    _board.push([]);
    for (let j = 0; j < _SIZE; j++) {
      _board[i].push(Cell(i, j));
    }
  }

  const placeShips = (ship, startPosition, isVertical) => {
    if (typeof ship !== 'object') throw new Error('Invalid ship object');
    if (typeof isVertical !== 'boolean') throw new Error('Invalid direction');

    const length = ship.length;
    _storeShips.push(ship);

    const endPosition = length + (isVertical ? startPosition.col : startPosition.row); // used to check if outside the gameboard

    if (endPosition > _SIZE) throw new Error('This ship does beyond gameboard');

    let { row, col } = startPosition;
    for (let i = 0; i < length; i++) {
      _board[row][col].ship = ship;
      isVertical ? col++ : row++;
    }
  };

  const receivedAttack = (position) => {
    if (typeof position !== 'object') throw new Error('Invalid position');
    const { row, col } = position;
    const cell = _board[row][col];
    cell.receivedAttack();
    const status = cell.status;
    if (status === 'Hit') _storeHits.push(position);
    if (status === 'Miss') _storeMisses.push(position);
    return status;
  };

  return {
    receivedAttack,
    placeShips,
    get hitShots() {
      return _storeHits;
    },
    get missShots() {
      return _storeMisses;
    },
    get allClear() {
      return _storeShips.every((ship) => ship.isSunk());
    },
  };
};

export const Player = () => {
  const _board = Gameboard();

  const attack = (position, board) => {
    if (typeof position !== 'object' || typeof board !== 'object') throw new Error('Invalid arguments');

    const status = board.receivedAttack(position);
    return status;
  };

  return {
    get board() {
      return _board;
    },
    attack,
  };
};
