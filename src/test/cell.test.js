import { Cell, Ship } from './../js/class';

describe('test Cell class', () => {
  let cell = new Cell(1, 2);
  let ship = new Ship(2);

  beforeEach(() => {
    cell = new Cell(1, 2); // re-create cell after each test
    ship = new Ship(2);
  });

  test('cell has coordinates respectively', () => {
    expect(cell.position.row).toBe(1);
    expect(cell.position.col).toBe(2);
  });

  test('cell cannot reassign position', () => {
    expect(() => (cell.position = { row: 1, col: 2 })).toThrow();
    expect(() => (cell.position.row = 1)).toThrow();
    expect(() => (cell.position.col = 2)).toThrow();
  });

  test('cell has isReceivedAttack property defined', () => {
    expect(cell.isReceivedAttack).toBeDefined();
    expect(cell.isReceivedAttack).toBe(false);
  });

  test('cell has receivedAttack method defined', () => {
    expect(cell.receivedAttack).toBeDefined();
    expect(typeof cell.receivedAttack).toBe('function');
  });

  test('cell records if it received attack', () => {
    expect(cell.isReceivedAttack).toBe(false);
    cell.receivedAttack();
    expect(cell.isReceivedAttack).toBe(true);
  });

  test('cell throw error if it received attack more than once', () => {
    cell.receivedAttack();
    expect(() => cell.receivedAttack()).toThrow();
  });

  test('cell does not contain any ship after it initialized and be null', () => {
    expect(cell.ship).toBeNull();
  });

  test('cell contains a ship after we place ship on it', () => {
    cell.ship = ship;
    expect(cell.ship).toBeTruthy();
    expect(cell.ship).not.toBeNull();
    expect(cell.ship).toBe(ship);
    expect(cell.ship.length).toBe(2);
  });

  test('cell throw error if we try to place another ship while already a ship contained', () => {
    cell.ship = ship;
    expect(() => {
      const anotherLength = 3;
      const anotherShip = new Ship(anotherLength);
      cell.ship = anotherShip;
    }).toThrow();
  });

  test('cell has a status property', () => {
    expect(cell.status).toBeDefined();
    expect(cell.status).toBe('Not yet');
  });

  test("cell's status property cannot be changed directly", () => {
    expect(() => (cell.status = 'change to something')).toThrow();
  });

  test("cell's status property changes to miss when receiving attack but does not contain any ship", () => {
    expect(cell.status).toBe('Not yet');
    cell.receivedAttack();
    expect(cell.isReceivedAttack).toBe(true);
    expect(cell.ship).toBeNull();
    expect(cell.status).toBe('Miss');
  });

  test("cell's status property changes to hit when receiving attack and contain a ship", () => {
    expect(cell.status).toBe('Not yet');
    cell.ship = ship;
    cell.receivedAttack();
    expect(cell.isReceivedAttack).toBe(true);
    expect(cell.ship).not.toBeNull();
    expect(cell.status).toBe('Hit');
  });
});
