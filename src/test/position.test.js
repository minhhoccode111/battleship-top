import { Position } from '../js/app';

describe('test Position factory function', () => {
  const position = Position(1, 2);

  test('factory function takes 2 argument row and col', () => {
    expect(Position.length).toBe(2);
    expect(typeof Position).toBe('function');
  });

  test('return an object which has row and col properties', () => {
    expect(position).toBeInstanceOf(Object);
    expect(position.row).toBeDefined();
    expect(position.col).toBeDefined();
  });

  test('row and col properties are read-only', () => {
    expect(() => (position.row = 5)).toThrow();
    expect(() => (position.col = 5)).toThrow();
  });

  test('throw error if try to create a position outside gameboard', () => {
    expect(() => {
      const position = Position(11, 1);
    }).toThrow();
    expect(() => {
      const position = Position(1, 11);
    }).toThrow();
  });
});
