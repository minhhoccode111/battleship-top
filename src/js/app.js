const _SIZE = 10; // Gameboard SIZE

export class Ship {
  constructor(len) {
    if (len > 5 || len < 1) throw new Error('Invalid ship length');

    Object.defineProperties(this, {
      length: {
        value: len,
      },

      hits: {
        get() {
          return _hits;
        },
      },
      isSunk: {
        get() {
          return this.length - _hits < 1;
        },
      },
    });

    let _hits = 0;

    this.hit = () => {
      if (this.isSunk) throw new Error(`Can't attack sunk ship`);

      _hits++;
    };
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
    Object.defineProperties(this, {
      shipsInfo: { value: [] },

      board: { value: [] },

      hitShots: { value: [] },

      missShots: { value: [] },

      shots: { value: [] },

      allClear: {
        get() {
          return this.shipsInfo.every((info) => info.ship.isSunk);
        },
      },

      ships: {
        get() {
          // place ships into category base on their status: healthy, warning, death
          return this.shipsInfo.reduce(
            (total, currentShipInfo) => {
              let shipStatus;

              const currentShip = currentShipInfo.ship;

              const shipHealth = currentShip.length - currentShip.hits;

              if (shipHealth === 0) shipStatus = 'death';
              else if (shipHealth === 1) shipStatus = 'warning';
              else shipStatus = 'healthy';

              total[shipStatus].push(currentShipInfo);

              return total;
            },
            { healthy: [], death: [], warning: [] }
          );
        },
      },
    });

    for (let i = 0; i < _SIZE; i++) {
      this.board.push([]);

      for (let j = 0; j < _SIZE; j++) {
        this.board[i].push(new Cell(i, j));
      }
    }

    this.placeShips = (ship, startPosition, isVertical) => {
      if (!(ship instanceof Ship)) throw new Error('Invalid ship object');

      if (typeof isVertical !== 'boolean') throw new Error('Invalid direction');

      if (!(startPosition instanceof Position)) throw new Error('Invalid start position');

      const length = ship.length;

      const endPosition = length + (isVertical ? startPosition.col : startPosition.row); // used to check if outside the gameboard

      if (endPosition > _SIZE) throw new Error('This ship goes beyond gameboard');

      let { row, col } = startPosition;

      const locations = [];

      const cells = [];

      // check all ship's locations first to see if something throw
      for (let i = 0; i < length; i++) {
        const cell = this.board[row][col];

        // check if this cell is legit to place ship
        if (cell.ship !== null) throw new Error('Place ship cancel because this cell already has a ship on it');

        // save cells which will use to place ship at the same time
        cells.push(cell);

        locations.push(new Position(row, col));

        isVertical ? col++ : row++; // increase based on direction
      }

      // the loop through all legit cells to actually place ship after nothing got throw
      for (const cell of cells) {
        cell.ship = ship;
      }

      this.shipsInfo.push({ locations, isVertical, ship: ship });
    };

    this.receivedAttack = (position) => {
      if (!(position instanceof Position)) throw new Error('Invalid position');

      const { row, col } = position;

      const cell = this.board[row][col];

      cell.receivedAttack();

      const status = cell.status;

      if (status === 'Hit') this.hitShots.push(position);

      if (status === 'Miss') this.missShots.push(position);

      this.shots.push(position);

      return status;
    };
  }
}

export class Player {
  constructor() {
    let _board = new Gameboard();

    Object.defineProperties(this, {
      board: {
        get() {
          return _board;
        },
      },
    });
  }

  randomPlaceShips() {
    const lengths = [1, 1, 1, 2, 2, 3, 3, 4, 5];

    for (let i = 0; i < lengths.length; i++) {
      try {
        const row = Math.floor(Math.random() * _SIZE);

        const col = Math.floor(Math.random() * _SIZE);

        const position = new Position(row, col);

        const direction = !!Math.floor(Math.random() * 2);

        const ship = new Ship(lengths[i]);

        this.board.placeShips(ship, position, direction);
      } catch (error) {
        i--;
        console.log(error);
      }
    }
  }
}

export class Human extends Player {
  constructor() {
    super();

    this.attack = (position, player) => {
      if (!(position instanceof Position) || !(player.board instanceof Gameboard)) throw new Error('Invalid arguments');

      const status = player.board.receivedAttack(position);

      return status;
    };
  }
}

export class Computer extends Player {
  constructor() {
    super();

    this.attack = (player) => {
      if (!(player.board instanceof Gameboard)) throw new Error('Invalid board');

      const length = player.board.shots.length;

      while (length === player.board.shots.length) {
        const row = Math.floor(Math.random() * _SIZE);

        const col = Math.floor(Math.random() * _SIZE);

        try {
          const position = new Position(row, col);

          const status = player.board.receivedAttack(position);

          return { status, position };
        } catch (err) {
          console.log(err);
        }
      }
    };
  }
}
