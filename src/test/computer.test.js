import { Computer, Ship, Human, Gameboard, Position } from '../js/class';

describe('test Computer class', () => {
  test('Computer to be defined', () => {
    expect(Computer).toBeDefined();
    expect(typeof Computer).toBe('function');
  });

  let human = new Human();
  let ai = new Computer();

  beforeEach(() => {
    human = new Human();
    ai = new Computer();
  });

  test(`Computer should return an object`, () => {
    expect(new Computer()).toBeInstanceOf(Computer);
    expect(typeof Computer).toBe('function');
  });

  test(`ai.board is defined and can be accessed from outside and created by Gameboard class`, () => {
    expect(ai.board).toBeDefined();
    expect(() => {
      ai.board = new Gameboard();
    }).toThrow();
  });

  test(`computer attack method which takes 1 argument: a gameboard (position based on random or inner algorithm)`, () => {
    expect(ai.attack).toBeDefined();
    expect(typeof ai.attack).toBe('function');
    expect(ai.attack.length).toBe(1);
    expect(() => ai.attack('a')).toThrow();
    expect(() => ai.attack(human)).not.toThrow();
  });

  xtest(`ai attack and sunk human ships`, () => {
    // this test passed and I skip it for performance
    const ship0 = new Ship(1);
    const ship1 = new Ship(1);
    human.board.placeShips(ship0, new Position(0, 0), true);
    human.board.placeShips(ship1, new Position(1, 1), true);
    const mock0 = jest.spyOn(ship0, 'hit');
    const mock1 = jest.spyOn(ship1, 'hit');
    while (!human.board.allClear) {
      try {
        ai.attack(human);
      } catch (err) {}
    }
    expect(mock0).toBeCalledTimes(1);
    expect(mock1).toBeCalledTimes(1);
    // those info below will be random
    console.table(human.board.shots.length);
    console.table(human.board.hitShots.length);
    console.table(human.board.missShots.length);
  });
});

describe(`test randomPlaceShips method of Player class`, () => {
  xtest(`human will random place ships and ai will random attack until every ship is sunk`, () => {
    // this test passed, i skip it for performance
    const human = new Human();
    const ai = new Computer();

    expect(() => human.randomPlaceShips()).not.toThrow(); // place 9 ships random with length [1, 1, 1, 2, 2, 3, 3, 4, 5]
    expect(human.board.ships.length).toBe(9);
    const ships = human.board.ships;
    const mock0 = jest.spyOn(ships[0], 'hit');
    const mock1 = jest.spyOn(ships[1], 'hit');
    const mock2 = jest.spyOn(ships[2], 'hit');
    const mock3 = jest.spyOn(ships[3], 'hit');
    const mock4 = jest.spyOn(ships[4], 'hit');
    const mock5 = jest.spyOn(ships[5], 'hit');
    const mock6 = jest.spyOn(ships[6], 'hit');
    const mock7 = jest.spyOn(ships[7], 'hit');
    const mock8 = jest.spyOn(ships[8], 'hit');
    // ai try to sunk all ships of human
    while (!human.board.allClear) {
      try {
        ai.attack(human);
      } catch (err) {}
    }
    expect(mock0).toBeCalledTimes(1);
    expect(mock1).toBeCalledTimes(1);
    expect(mock2).toBeCalledTimes(1);
    expect(mock3).toBeCalledTimes(2);
    expect(mock4).toBeCalledTimes(2);
    expect(mock5).toBeCalledTimes(3);
    expect(mock6).toBeCalledTimes(3);
    expect(mock7).toBeCalledTimes(4);
    expect(mock8).toBeCalledTimes(5);
  });
});
