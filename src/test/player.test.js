import { Player } from '../js/app';
import { Position } from '../js/app';
import { Gameboard } from '../js/app';
import { Ship } from '../js/app';

describe('test Player factory function', () => {
  test('Player should be defined', () => {
    expect(Player).toBeDefined();
    expect(typeof Player).toBe('function');
  });

  let human;
  let ai;
  beforeEach(() => {
    human = Player();
    ai = Player();
  });

  test('Player factory should return an object', () => {
    expect(human).toBeInstanceOf(Object);
    expect(ai).toBeInstanceOf(Object);
  });

  test('player.board is defined and can be access from outside and created by Gameboard factory function', () => {
    expect(human.board).toBeDefined();
    expect(() => (human.board = Gameboard())).toThrow();
  });

  test('players has attack method which takes 2 argument: a position and a gameboard of enemy', () => {
    expect(human.attack).toBeDefined();
    expect(typeof human.attack).toBe('function');
    expect(ai.attack.length).toBe(2);
    expect(() => human.attack('a', ai.board)).toThrow();
    expect(() => human.attack(Position(-1, 1), ai.board)).toThrow();
    expect(() => human.attack(Position(1, 1), 'a')).toThrow();
    expect(() => human.attack(Position(1, 1), ai.board)).not.toThrow();
  });

  test('human attack and sunk enemy ships manually', () => {
    const ship0 = Ship(1);
    const ship1 = Ship(1);
    ai.board.placeShips(ship0, Position(1, 1), true);
    ai.board.placeShips(ship1, Position(1, 2), true);
    expect(ai.board.allClear).toBe(false);
    expect(human.attack(Position(1, 1), ai.board)).toBe('Hit');
    expect(ai.board.allClear).toBe(false);
    expect(human.attack(Position(1, 2), ai.board)).toBe('Hit');
    expect(ai.board.allClear).toBe(true);
    expect(() => human.attack(Position(1, 1), ai.board)).toThrow(); // attack twice
  });
});
