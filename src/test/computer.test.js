import { Computer, Ship, Player, Gameboard, Position } from '../js/app';

describe('test Computer factory function', () => {
  test('Computer to be defined', () => {
    expect(Computer).toBeDefined();
    expect(typeof Computer).toBe('function');
  });

  let human = new Player();
  let ai = new Computer();

  beforeEach(() => {
    human = new Player();
    ai = new Computer();
  });

  test(`Computer should return an object`, () => {
    expect(new Computer()).toBeInstanceOf(Computer);
    expect(typeof Computer).toBe('function');
  });

  test(`ai.board is defined and can be accessed from outside and created by Gameboard factory function`, () => {
    expect(ai.board).toBeDefined();
    expect(() => {
      ai.board = new Gameboard();
    }).toThrow();
  });

  test(`computer attack method which takes 1 argument: a gameboard (position based on random or inner algorithm)`, () => {
    expect(ai.attack).toBeDefined();
    expect(typeof ai.attack).toBe('function');
    expect(ai.attack.length).toBe(1);
    expect(() => {
      ai.attack('a');
    }).toThrow();
    expect(() => {
      ai.attack(human.board);
    }).not.toThrow();
  });

  test(`ai attack and sunk human ships`, () => {
    const ship0 = new Ship(1);
    const ship1 = new Ship(1);
    human.board.placeShips(ship0, new Position(0, 0), true);
    human.board.placeShips(ship1, new Position(1, 1), true);
    const mock0 = jest.spyOn(ship0, 'hit');
    const mock1 = jest.spyOn(ship1, 'hit');
    while (!human.board.allClear) {
      try {
        ai.attack(human.board);
      } catch (error) {
        console.log(error);
      }
    }
    expect(mock0).toBeCalledTimes(1);
    expect(mock1).toBeCalledTimes(1);
  });
});
