import { Gameboard } from '../js/app';
import { Ship } from '../js/app';
import { Position } from '../js/app';

describe('test Gameboard factory function', () => {
  let ship;
  let gameboard;
  beforeEach(() => {
    ship = Ship(2);
    gameboard = Gameboard();
  });

  test('Gameboard factory should return an object', () => {
    expect(Gameboard).toBeDefined();
    expect(gameboard).toBeInstanceOf(Object);
  });

  test('gameboard should have placeShips function which takes 3 arguments which are the ship object, the start position object, and isVertical', () => {
    expect(gameboard.placeShips).toBeDefined();
    expect(typeof gameboard.placeShips).toBe('function');
    expect(gameboard.placeShips.length).toBe(3);
  });

  test('throw error if ship or isVertical not valid', () => {
    expect(() => gameboard.placeShips('a', Position(1, 2), true)).toThrow();
    expect(() => gameboard.placeShips(Ship(2), Position(1, 2), 'a')).toThrow();
    expect(() => gameboard.placeShips(Ship(2), 'a', true)).toThrow();
  });

  test('gameboard is a 2-D, 10*10 array like this [[0,1,2,3,4...],[0,1,2,3,4,...],[0,1,2,3,4,...],[0,1,2,3,4,...],...] and can place the ship normal', () => {
    expect(() => {
      const gameboard = Gameboard();
      const ship = Ship(2);
      const position = Position(4, 5);
      gameboard.placeShips(ship, position, true);
    }).not.toThrow();
    expect(() => {
      const gameboard = Gameboard();
      const ship = Ship(2);
      const position = Position(4, 5);
      gameboard.placeShips(ship, position, false);
    }).not.toThrow();
  });

  test('gameboard placeShips function should throw error when trying to place ship outside the board or the length of that ship goes beyond the board', () => {
    gameboard = Gameboard();
    ship = Ship(5);
    // vertical col:8 + length:5 = 13 => error, if horizontal row:4 + length: 5 = 9 => not error
    expect(() => gameboard.placeShips(ship, Position(11, 11), true)).toThrow();
    expect(() => gameboard.placeShips(ship, Position(11, 11), false)).toThrow();
    expect(() => gameboard.placeShips(ship, Position(4, 8), true)).toThrow();
    expect(() => gameboard.placeShips(ship, Position(4, 8), false)).not.toThrow(); // horizontal
    expect(() => gameboard.placeShips(ship, Position(3, 3), true)).not.toThrow();
    expect(() => gameboard.placeShips(ship, Position(4, 4), false)).not.toThrow();
  });

  test('gameboard should have receivedAttack function', () => {
    expect(gameboard.receivedAttack).toBeDefined();
    expect(typeof gameboard.receivedAttack).toBe('function');
  });

  test('gameboard.receivedAttack takes a position argument', () => {
    expect(gameboard.receivedAttack.length).toBe(1);
  });

  test('gameboard.receivedAttack throw error if position argument not an object or not has valid row and col properties', () => {
    expect(() => gameboard.receivedAttack('a')).toThrow();
    expect(() => gameboard.receivedAttack(Position(3, -1))).toThrow();
    expect(() => gameboard.receivedAttack(Position(3, 1))).not.toThrow();
  });

  test('receivedAttack determine whether or not the attack hit a ship and send a hit() function to the correct ship', () => {
    const ship = Ship(2);
    const position = Position(2, 3);
    const isVertical = true;
    gameboard.placeShips(ship, position, isVertical);
    const mock = jest.spyOn(ship, 'hit');
    expect(gameboard.receivedAttack(Position(2, 3))).toBe('Hit');
    expect(mock).toHaveBeenCalledTimes(1);
    expect(ship.hits).toBe(1);
    expect(gameboard.receivedAttack(Position(3, 4))).toBe('Miss');
    expect(gameboard.receivedAttack(Position(2, 4))).toBe('Hit');
    expect(mock).toHaveBeenCalledTimes(2);
    expect(ship.hits).toBe(2);
    expect(ship.isSunk()).toBe(true);
  });

  describe('records the coordinates which have received attack', () => {
    test('gameboard has missShots and hitShots getters defined', () => {
      expect(gameboard.missShots).toBeDefined();
      expect(gameboard.hitShots).toBeDefined();
      expect(() => (gameboard.missShots = 'something')).toThrow();
      expect(() => (gameboard.hitShots = 'something')).toThrow();
    });

    const gameboard = Gameboard();
    const ship = Ship(3);
    const position = Position(2, 3);
    const isVertical = true;
    gameboard.placeShips(ship, position, isVertical);
    gameboard.receivedAttack(Position(2, 3)); // hit
    gameboard.receivedAttack(Position(2, 4)); // hit
    gameboard.receivedAttack(Position(2, 5)); // hit
    gameboard.receivedAttack(Position(3, 4)); // miss
    gameboard.receivedAttack(Position(3, 5)); // miss
    gameboard.receivedAttack(Position(3, 6)); // miss

    test('gameboard missShots getter return array of positions which have received attack but does not contain any ship', () => {
      expect(gameboard.missShots).toStrictEqual([Position(3, 4), Position(3, 5), Position(3, 6)]);
    });

    test('gameboard hitShots getter return array of positions which have received attack and contain a ship', () => {
      expect(gameboard.hitShots).toStrictEqual([Position(2, 3), Position(2, 4), Position(2, 5)]);
    });
  });

  describe('gameboard can tell if all its ships is sunk', () => {
    const gameboard = Gameboard();
    const ship0 = Ship(1);
    const ship1 = Ship(1);
    const ship2 = Ship(1);

    expect(gameboard.allClear).toBeDefined();
    expect(() => (gameboard.allClear = true)).toThrow();

    gameboard.placeShips(ship0, Position(1, 1), true);
    gameboard.placeShips(ship1, Position(2, 2), true);
    gameboard.placeShips(ship2, Position(3, 3), true);

    gameboard.receivedAttack(Position(1, 1));
    expect(gameboard.allClear).toBe(false);
    gameboard.receivedAttack(Position(2, 2));
    expect(gameboard.allClear).toBe(false);
    gameboard.receivedAttack(Position(3, 3));
    expect(gameboard.allClear).toBe(true);
  });
});
