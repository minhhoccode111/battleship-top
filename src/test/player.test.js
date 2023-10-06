import { Ship, Player, Position, Gameboard } from '../js/app';

describe('test Player factory function', () => {
  test('Player should be defined', () => {
    expect(Player).toBeDefined();
    expect(typeof Player).toBe('function');
  });

  let human;
  let ai;

  beforeEach(() => {
    human = new Player();
    ai = new Player();
  });

  test('Player factory should return an object', () => {
    expect(human).toBeInstanceOf(Player);
    expect(ai).toBeInstanceOf(Player);
  });

  test('player.board is defined and can be access from outside and created by Gameboard factory function', () => {
    expect(human.board).toBeDefined();
    expect(() => (human.board = new Gameboard())).toThrow();
  });

  test('players has attack method which takes 2 argument: a position and a gameboard of enemy', () => {
    expect(human.attack).toBeDefined();
    expect(typeof human.attack).toBe('function');
    expect(ai.attack.length).toBe(2);
    expect(() => human.attack('a', ai)).toThrow();
    expect(() => human.attack(new Position(-1, 1), ai)).toThrow();
    expect(() => human.attack(new Position(1, 1), 'a')).toThrow();
    expect(() => human.attack(new Position(1, 1), ai)).not.toThrow();
  });

  test('human attack and sunk enemy ships manually', () => {
    const ship0 = new Ship(1);
    const ship1 = new Ship(1);
    ai.board.placeShips(ship0, new Position(1, 1), true);
    ai.board.placeShips(ship1, new Position(1, 2), true);
    expect(ai.board.allClear).toBe(false);
    expect(human.attack(new Position(1, 1), ai)).toBe('Hit');
    expect(ai.board.allClear).toBe(false);
    expect(human.attack(new Position(1, 2), ai)).toBe('Hit');
    expect(ai.board.allClear).toBe(true);
    expect(() => human.attack(new Position(1, 1), ai)).toThrow(); // attack twice
  });
});
