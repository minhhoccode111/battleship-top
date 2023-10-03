import { Ship } from '../js/app';

describe('test Ship factory function', () => {
  const len = 2;
  const ship = Ship(len);

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

  test('ignore hit method if ship is already sunk', () => {
    const ship = Ship(1);
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.hits).toBe(1); // 1 instead of 3
  });

  test('have isSunk method defined', () => {
    expect(ship.isSunk).toBeDefined;
    expect(typeof ship.isSunk).toBe('function');
  });

  test('isSunk actually change', () => {
    const ship = Ship(2);
    ship.hit();
    expect(ship.hits).toBe(1);
    expect(ship.isSunk()).toBeFalsy();
    ship.hit();
    expect(ship.hits).toBe(2);
    expect(ship.isSunk()).toBeTruthy();
  });
});
