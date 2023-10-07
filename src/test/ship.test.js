import { Ship } from '../js/app';

describe('test Ship factory function', () => {
  test('throw if encounter invalid length', () => {
    expect(() => new Ship(0)).toThrow();
    expect(() => new Ship(6)).toThrow();
  });

  let ship = new Ship(2);

  beforeEach(() => {
    ship = new Ship(2);
  });

  test('have length property', () => {
    expect(ship.length).toBe(2);
  });

  test('throw error when trying to change length property', () => {
    expect(() => (ship.length = 4)).toThrow();
  });

  test('have hits taken property', () => {
    expect(ship.hits).toBe(0);
  });

  test('throw error why trying to change hits taken property', () => {
    expect(() => (ship.hits = 1)).toThrow();
  });

  test('have hit method defined', () => {
    expect(ship.hit).toBeDefined;
    expect(typeof ship.hit).toBe('function');
  });

  test('increase hits taken after hit method been called', () => {
    ship.hit(); // increase hits taken
    expect(ship.hits).toBe(1);
    ship.hit();
    expect(ship.hits).toBe(2);
  });

  test('throw error when trying to attack sunk ship', () => {
    const ship = new Ship(1);
    ship.hit();
    expect(() => ship.hit()).toThrow();
    expect(ship.hits).toBe(1); // 1 instead of 3
  });

  test('have isSunk method defined', () => {
    expect(ship.isSunk).toBeDefined;
  });

  test('isSunk actually change', () => {
    const ship = new Ship(2);
    ship.hit();
    expect(ship.hits).toBe(1);
    expect(ship.isSunk).toBe(false);
    ship.hit();
    expect(ship.hits).toBe(2);
    expect(ship.isSunk).toBe(true);
  });
});
