const _SIZE = 10; // Gameboard SIZE

export class Ship {
  constructor(len) {
    if (len > 5 || len < 1) throw new Error('Invalid ship length');

    let _hits = 0;

    this.isSunk = () => {
      return this.length - _hits < 1;
    };

    this.hit = () => {
      if (this.isSunk()) throw new Error(`Can't attack sunk ship`);

      _hits++;
    };

    Object.defineProperties(this, {
      length: {
        value: len,
      },

      hits: {
        get() {
          return _hits;
        },
      },
    });
  }
}

export class Position {
  constructor(row, col) {
    if (row > 9 || col > 9 || row < 0 || col < 0) throw new Error('Position is not legit');

    Object.defineProperties(this, {
      row: {
        get() {
          return row;
        },
      },

      col: {
        get() {
          return col;
        },
      },
    });
  }
}

export class Cell {
  constructor(row, col) {
    let _isReceivedAttack = false;

    let _ship = null;

    this.receivedAttack = function () {
      if (_isReceivedAttack) throw new Error('Already attacked this cell');

      _isReceivedAttack = true;

      _ship?.hit();
    };

    Object.defineProperties(this, {
      position: {
        value: new Position(row, col),
      },

      isReceivedAttack: {
        get() {
          return _isReceivedAttack;
        },
      },

      ship: {
        get() {
          return _ship;
        },

        set(newShip) {
          if (_ship) throw new Error('Already placed a ship on this cell');

          _ship = newShip;
        },
      },

      status: {
        get() {
          if (!_isReceivedAttack) return 'Not yet'; // if is not yet received attack

          if (_ship) return 'Hit'; // if received attack and contains a ship

          return 'Miss'; // else
        },
      },
    });
  }
}

export class Gameboard {
  constructor() {
    const _storeShips = [];

    const _board = [];

    for (let i = 0; i < _SIZE; i++) {
      _board.push([]);

      for (let j = 0; j < _SIZE; j++) {
        _board[i].push(new Cell(i, j));
      }
    }

    this.placeShips = (ship, startPosition, isVertical) => {
      if (!(ship instanceof Ship)) throw new Error('Invalid ship object');

      if (typeof isVertical !== 'boolean') throw new Error('Invalid direction');

      const length = ship.length;

      _storeShips.push(ship);

      const endPosition = length + (isVertical ? startPosition.col : startPosition.row); // used to check if outside the gameboard

      if (endPosition > _SIZE) throw new Error('This ship does beyond gameboard');

      let { row, col } = startPosition;

      for (let i = 0; i < length; i++) {
        _board[row][col].ship = ship;

        isVertical ? col++ : row++; // increase based on direction
      }
    };

    this.receivedAttack = (position) => {
      if (!(position instanceof Position)) throw new Error('Invalid position');

      const { row, col } = position;

      const cell = _board[row][col];

      cell.receivedAttack();

      const status = cell.status;

      if (status === 'Hit') this.hitShots.push(position);

      if (status === 'Miss') this.missShots.push(position);

      this.shots.push(position);

      return status;
    };

    Object.defineProperties(this, {
      hitShots: { value: [] },

      missShots: { value: [] },

      shots: { value: [] },

      allClear: {
        get() {
          return _storeShips.every((ship) => ship.isSunk());
        },
      },
    });
  }
}

export class Player {
  constructor() {
    this.attack = (position, player) => {
      if (!(position instanceof Position) || !(player.board instanceof Gameboard)) throw new Error('Invalid arguments');

      const status = player.board.receivedAttack(position);

      return status;
    };

    Object.defineProperties(this, {
      board: {
        value: new Gameboard(),
      },
    });
  }
}

export class Computer {
  constructor() {
    this.attack = (player) => {
      if (!(player.board instanceof Gameboard)) throw new Error('Invalid board');

      const length = player.board.shots.length;

      while (length === player.board.shots.length) {
        const row = Math.floor(Math.random() * _SIZE);

        const col = Math.floor(Math.random() * _SIZE);

        try {
          const status = player.board.receivedAttack(new Position(row, col));

          return status;
        } catch (err) {}
      }
    };

    Object.defineProperties(this, {
      board: {
        value: new Gameboard(),
      },
    });
  }
}

export const Game = (() => {
  return {};
})();
