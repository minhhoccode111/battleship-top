import { Gameboard, Ship, Position, Human, Computer } from '../js/class';

describe('test Gameboard class', () => {
  let ship;
  let gameboard;
  beforeEach(() => {
    ship = new Ship(2);
    gameboard = new Gameboard();
  });

  test('Gameboard class should return an object', () => {
    expect(Gameboard).toBeDefined();
    expect(gameboard).toBeInstanceOf(Gameboard);
  });

  test('gameboard should have placeShips function which takes 3 arguments which are the ship object, the start position object, and isVertical', () => {
    expect(gameboard.placeShips).toBeDefined();
    expect(typeof gameboard.placeShips).toBe('function');
    expect(gameboard.placeShips.length).toBe(3);
  });

  test('throw error if ship or isVertical not valid', () => {
    expect(() => gameboard.placeShips('a', new Position(1, 2), true)).toThrow();
    expect(() => gameboard.placeShips(new Ship(2), new Position(1, 2), 'a')).toThrow();
    expect(() => gameboard.placeShips(new Ship(2), 'a', true)).toThrow();
  });

  test('gameboard is a 2-D, 10*10 array like this [[0,1,2,3,4...],[0,1,2,3,4,...],[0,1,2,3,4,...],[0,1,2,3,4,...],...] and can place the ship normal', () => {
    expect(() => {
      const gameboard = new Gameboard();
      const ship = new Ship(2);
      const position = new Position(4, 5);
      gameboard.placeShips(ship, position, true);
    }).not.toThrow();
    expect(() => {
      const gameboard = new Gameboard();
      const ship = new Ship(2);
      const position = new Position(4, 5);
      gameboard.placeShips(ship, position, false);
    }).not.toThrow();
  });

  test('gameboard placeShips function should throw error when trying to place ship outside the board or the length of that ship goes beyond the board', () => {
    gameboard = new Gameboard();
    ship = new Ship(5);
    // vertical col:8 + length:5 = 13 => error
    // if horizontal row:4 + length: 5 = 9 => not error
    expect(() => gameboard.placeShips(ship, new Position(11, 11), true)).toThrow();
    expect(() => gameboard.placeShips(ship, new Position(11, 11), false)).toThrow();
    expect(() => gameboard.placeShips(ship, new Position(4, 8), true)).toThrow();
    expect(() => gameboard.placeShips(ship, new Position(4, 8), false)).not.toThrow(); // horizontal
    expect(() => gameboard.placeShips(ship, new Position(3, 3), true)).not.toThrow();
    expect(() => gameboard.placeShips(ship, new Position(4, 4), false)).not.toThrow();
  });

  test('gameboard should have receivedAttack function', () => {
    expect(gameboard.receivedAttack).toBeDefined();
    expect(typeof gameboard.receivedAttack).toBe('function');
  });

  test('gameboard.receivedAttack takes a position argument', () => {
    expect(gameboard.receivedAttack.length).toBe(1);
    expect(() => gameboard.receivedAttack('a')).toThrow();
    expect(() => gameboard.receivedAttack(new Position(3, -1))).toThrow();
    expect(() => gameboard.receivedAttack(new Position(3, 1))).not.toThrow();
  });

  xtest('receivedAttack determine whether or not the attack hit a ship and send a hit() function to the correct ship', () => {
    const ship = new Ship(2);
    const position = new Position(2, 3);
    const isVertical = true;
    gameboard.placeShips(ship, position, isVertical);
    const mock = jest.spyOn(ship, 'hit');
    expect(gameboard.receivedAttack(new Position(2, 3)).cellStatus).toBe('Hit');
    expect(mock).toHaveBeenCalledTimes(1);
    expect(ship.hits).toBe(1);
    expect(gameboard.receivedAttack(new Position(3, 4)).cellStatus).toBe('Miss');
    expect(gameboard.receivedAttack(new Position(2, 4)).cellStatus).toBe('Hit');
    expect(mock).toHaveBeenCalledTimes(2);
    expect(ship.hits).toBe(2);
    expect(ship.isSunk).toBe(true);
    expect(gameboard.shots.length).toBe(3);
  });

  describe('records the coordinates which have received attack', () => {
    test('gameboard has missShots and hitShots getters defined', () => {
      expect(gameboard.missShots).toBeDefined();
      expect(gameboard.hitShots).toBeDefined();
      expect(() => (gameboard.missShots = 'something')).toThrow();
      expect(() => (gameboard.hitShots = 'something')).toThrow();
    });

    const gameboard = new Gameboard();
    const ship = new Ship(3);
    const position = new Position(2, 3);
    const isVertical = true;
    gameboard.placeShips(ship, position, isVertical);
    gameboard.receivedAttack(new Position(2, 3)); // hit
    gameboard.receivedAttack(new Position(2, 4)); // hit
    gameboard.receivedAttack(new Position(2, 5)); // hit
    gameboard.receivedAttack(new Position(3, 4)); // miss
    gameboard.receivedAttack(new Position(3, 5)); // miss
    gameboard.receivedAttack(new Position(3, 6)); // miss

    test('gameboard missShots getter return array of positions which have received attack but does not contain any ship', () => {
      expect(gameboard.missShots).toStrictEqual([new Position(3, 4), new Position(3, 5), new Position(3, 6)]);
    });

    test('gameboard hitShots getter return array of positions which have received attack and contain a ship', () => {
      expect(gameboard.hitShots).toStrictEqual([new Position(2, 3), new Position(2, 4), new Position(2, 5)]);
    });
  });

  describe('gameboard can tell if all its ships is sunk', () => {
    const gameboard = new Gameboard();
    const ship0 = new Ship(1);
    const ship1 = new Ship(1);
    const ship2 = new Ship(1);

    expect(gameboard.allClear).toBeDefined();
    expect(() => (gameboard.allClear = true)).toThrow();

    gameboard.placeShips(ship0, new Position(1, 1), true);
    gameboard.placeShips(ship1, new Position(2, 2), true);
    gameboard.placeShips(ship2, new Position(3, 3), true);

    gameboard.receivedAttack(new Position(1, 1));
    expect(gameboard.allClear).toBe(false);
    gameboard.receivedAttack(new Position(2, 2));
    expect(gameboard.allClear).toBe(false);
    gameboard.receivedAttack(new Position(3, 3));
    expect(gameboard.allClear).toBe(true);
    expect(gameboard.shots.length).toBe(3);
  });

  describe(`gameboard can access the board array`, () => {
    test(`access board array`, () => {
      const gameboard = new Gameboard();
      expect(Array.isArray(gameboard.board)).toBe(true);
      expect(gameboard.board.length).toBe(10);
      expect(gameboard.board[3].length).toBe(10);
      expect(gameboard.board[5].length).toBe(10);
      expect(gameboard.board[7].length).toBe(10);
      expect(gameboard.board[9].length).toBe(10);
    });
  });

  describe(`shipsInfo method`, () => {
    const human = new Human();
    const ship = new Ship(5);
    human.board.placeShips(ship, new Position(1, 1), false);
    test(`human.board.shipsInfo`, () => {
      expect(Array.isArray(human.board.shipsInfo)).toBe(true);
      expect(human.board.shipsInfo[0] instanceof Object).toBe(true);
    });

    test(`human.board.shipsInfo[0].locations`, () => {
      expect(Array.isArray(human.board.shipsInfo[0].locations)).toBe(true);
      expect(human.board.shipsInfo[0].locations.every((location) => location instanceof Position)).toBe(true);
      expect(human.board.shipsInfo[0].locations.length).toBe(5);
    });

    test(`human.board.shipsInfo[0].ship`, () => {
      expect(human.board.shipsInfo[0].ship instanceof Ship).toBe(true);
    });

    test(`human.board.shipsInfo[0].isVertical`, () => {
      expect(human.board.shipsInfo[0].isVertical).toBe(false);
    });
  });

  describe(`get ships base on their status: healthy, warning, death`, () => {
    const gameboard = new Gameboard();
    const ship1LengthNo0 = new Ship(1);
    const ship2LengthNo0 = new Ship(2);
    const ship3LengthNo0 = new Ship(3);
    const ship1LengthNo1 = new Ship(1);
    const ship2LengthNo1 = new Ship(2);
    const ship3LengthNo1 = new Ship(3);
    // place ships 1 length
    gameboard.placeShips(ship1LengthNo0, new Position(0, 0), false);
    gameboard.placeShips(ship1LengthNo1, new Position(0, 1), false);
    // place ships 2 length
    gameboard.placeShips(ship2LengthNo0, new Position(0, 2), false);
    gameboard.placeShips(ship2LengthNo1, new Position(0, 3), false);
    // place ships 3 length
    gameboard.placeShips(ship3LengthNo0, new Position(0, 4), false);
    gameboard.placeShips(ship3LengthNo1, new Position(0, 5), false);

    gameboard.receivedAttack(new Position(0, 0)); // hit 1 length no 0
    gameboard.receivedAttack(new Position(0, 1)); // hit 1 length no 1
    gameboard.receivedAttack(new Position(0, 2)); // hit 2 length no 0
    gameboard.receivedAttack(new Position(0, 3)); // hit 2 length no 1
    gameboard.receivedAttack(new Position(0, 4)); // hit 3 length no 0
    gameboard.receivedAttack(new Position(0, 5)); // hit 3 length no 1

    test(`gameboard.healthyShips will return ships have 3 length and received 1 attack`, () => {
      const healthy = gameboard.ships.healthy;
      expect(healthy).toBeDefined();
      expect(healthy.length).toBe(2);
      expect(healthy[0].locations.length).toBe(3);
      expect(healthy[0].locations[0] instanceof Position).toBe(true);
      expect(healthy[0].ship instanceof Ship).toBe(true);
    });

    test(`gameboard.warningShips will return ships have 2 length and received 1 attack`, () => {
      const warning = gameboard.ships.warning;
      expect(warning).toBeDefined();
      expect(warning.length).toBe(2);
      expect(warning[0].locations.length).toBe(2);
      expect(warning[0].locations[0] instanceof Position).toBe(true);
      expect(warning[0].ship instanceof Ship).toBe(true);
    });

    test(`gameboard.deathShips will return ships have 1 length and received 1 attack`, () => {
      const death = gameboard.ships.death;
      expect(death).toBeDefined();
      expect(death.length).toBe(2);
      expect(death[0].locations.length).toBe(1); // only ships length 1 is death
      expect(death[0].locations[0] instanceof Position).toBe(true);
      expect(death[0].ship instanceof Ship).toBe(true);
    });
  });
});
