import { _SIZE, _TOTAL_SHIPS, _SHIPS_MAX_LENGTH, Game } from './dom';

export class Ship {
  constructor(len = 3) {
    if (len > _SHIPS_MAX_LENGTH || len < 1) throw new Error('Invalid ship length');

    let _hits = 0;

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
          const currentHealth = this.length - _hits;

          return currentHealth < 1;
        },
      },

      hit: {
        value: function () {
          if (this.isSunk) throw new Error(`Can't attack sunk ship`);

          _hits++;
        },
      },
    });
  }
}

export class Position {
  constructor(row, col) {
    const _legit = _SIZE - 1;

    if (row > _legit || col > _legit || row < 0 || col < 0) throw new Error('Position is not legit');

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

    Object.defineProperties(this, {
      receivedAttack: {
        value: function () {
          if (_isReceivedAttack) throw new Error('Already attacked this cell');

          _isReceivedAttack = true;

          _ship?.hit();
        },
      },

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
          if (!_isReceivedAttack) return 'Not yet';

          if (_ship) return 'Hit';

          return 'Miss';
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

      placeShips: {
        value: function (ship, startPosition, isVertical) {
          if (!(ship instanceof Ship)) throw new Error('Invalid ship object');

          if (!(startPosition instanceof Position)) throw new Error('Invalid start position');

          if (typeof isVertical !== 'boolean') throw new Error('Invalid direction');

          const length = ship.length;

          const endPosition = length + (isVertical ? startPosition.col : startPosition.row); // used to check if outside the gameboard

          if (endPosition > _SIZE) throw new Error('This ship goes beyond gameboard');

          let { row, col } = startPosition;

          const locations = [];

          const cells = [];

          // check all ship's locations first to see if something throw
          for (let i = 0; i < length; i++) {
            const cell = this.board[row][col];

            // throw and cancel place ship process if a cell already has ship on it
            if (cell.ship !== null) throw new Error('Place ship cancel because this cell already has a ship on it');

            // save cells which is legit to use later
            cells.push(cell);

            // locations to update gameboard.shipsInfo
            locations.push(new Position(row, col));

            isVertical ? col++ : row++; // increase based on direction
          }

          // the loop through all legit cells to actually place ship after nothing got throw
          for (const cell of cells) {
            cell.ship = ship;
          }

          this.shipsInfo.push({ locations, isVertical, ship: ship });
        },
      },

      receivedAttack: {
        value: function (position) {
          if (!(position instanceof Position)) throw new Error('Invalid position');

          const { row, col } = position;

          const cell = this.board[row][col];

          cell.receivedAttack();

          const cellStatus = cell.status;

          const shipStatus = cell.ship?.isSunk ? 'Sunk' : 'Not sunk';

          if (cellStatus === 'Hit') this.hitShots.push(position);

          if (cellStatus === 'Miss') this.missShots.push(position);

          this.shots.push(position);

          return { cellStatus, shipStatus, position };
        },
      },
    });

    for (let i = 0; i < _SIZE; i++) {
      this.board.push([]);

      for (let j = 0; j < _SIZE; j++) {
        this.board[i].push(new Cell(i, j));
      }
    }
  }
}

export class Player {
  constructor() {
    Object.defineProperties(this, {
      board: {
        value: new Gameboard(),
      },
    });
  }

  randomPlaceShips() {
    for (let i = 0; i < _TOTAL_SHIPS.length; i++) {
      try {
        const row = Math.floor(Math.random() * _SIZE);

        const col = Math.floor(Math.random() * _SIZE);

        const position = new Position(row, col);

        const direction = !!Math.floor(Math.random() * 2);

        const ship = new Ship(_TOTAL_SHIPS[i]);

        this.board.placeShips(ship, position, direction);
      } catch (error) {
        i--;

        // console.log(error);
      }
    }
  }
}

export class Human extends Player {
  constructor() {
    super();

    Object.defineProperties(this, {
      attack: {
        value: function (position, player) {
          if (!(position instanceof Position) || !(player.board instanceof Gameboard)) throw new Error('Invalid arguments');

          const status = player.board.receivedAttack(position);

          return status;
        },
      },
    });
  }
}

export class Computer extends Player {
  constructor() {
    super();

    const _randomAttack = (player) => {
      if (!(player.board instanceof Gameboard)) throw new Error('Invalid board');

      const length = player.board.shots.length;

      while (length === player.board.shots.length) {
        const row = Math.floor(Math.random() * _SIZE);

        const col = Math.floor(Math.random() * _SIZE);

        try {
          const position = new Position(row, col);

          const status = player.board.receivedAttack(position);

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

    this.attack = (player) => {
      return _randomAttack(player);
    };
  }
}
