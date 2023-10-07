import { Ship, Position, Cell, Gameboard, Human, Computer, Player } from './app';

const _SIZE = 10;

export class DOM {
  static messageHuman = document.querySelector(`[data-message="human"]`);

  static messageAi = document.querySelector(`[data-message="ai"]`);

  static gameboardHuman = document.querySelector('.gameboard[data-human]');

  static gameboardAi = document.querySelector('.gameboard[data-ai]');

  static restart = document.querySelector('[data-restart]');

  static listenHumanAttacks = (human, ai) => {
    if (!(human instanceof Human)) throw new Error('Invalid Human');

    if (!(ai instanceof Computer)) throw new Error('Invalid Ai');

    const cells = this.gameboardAi.querySelectorAll('.ai__cell');

    cells.forEach((cell) => {
      cell.addEventListener(
        'click',

        (e) => {
          e.target.classList.add('attacked');

          const row = +e.target.dataset.row;

          const col = +e.target.dataset.col;

          const position = new Position(row, col);

          const humanAttacksStatus = human.attack(position, ai);

          Display.aiDeathShips(ai);

          Display.shotOnBoard(ai, position, humanAttacksStatus);

          Display.message(ai, `Human attacked on AI's board at position {row: ${row + 1}, col: ${col + 1}} and ${humanAttacksStatus}`);

          const aiAttackResult = ai.attack(human);

          Display.humanShips(human);

          Display.shotOnBoard(human, aiAttackResult.position, aiAttackResult.status);

          Display.message(human, `AI attacked on human's board at position {row: ${aiAttackResult.position.row + 1}, col: ${aiAttackResult.position.col + 1}} and ${aiAttackResult.status}`);
        },

        { once: true }
      );
    });
  };
}

class Display {
  static message = (player, content) => {
    let targetMessage;

    if (player instanceof Human) targetMessage = DOM.messageHuman;
    else targetMessage = DOM.messageAi;

    targetMessage.textContent = content;
  };

  static board = (player) => {
    if (!(player instanceof Player)) throw new Error('Invalid Player');

    const targetBoard = player instanceof Human ? DOM.gameboardHuman : DOM.gameboardAi;
    targetBoard.innerHTML = '';

    const type = player instanceof Human ? 'human' : 'ai';

    for (let i = 0; i < _SIZE; i++) {
      for (let j = 0; j < _SIZE; j++) {
        const div = document.createElement('div');

        div.classList.add('center');

        div.classList.add(`${type}__cell`);

        div.dataset.row = i;

        div.dataset.col = j;

        targetBoard.appendChild(div);
      }
    }
  };

  static humanShips = (player) => {
    if (!(player instanceof Player)) throw new Error('Invalid Player');

    const ships = player.board.ships;

    // loop through 3 type: healthy, warning, death
    for (const shipType in ships) {
      const currentType = ships[shipType];

      // loop through all ships in 1 type
      for (let i = 0; i < currentType.length; i++) {
        const currentShipInfo = currentType[i];

        const locations = currentShipInfo.locations;

        const isVertical = currentShipInfo.isVertical;

        // loop through all position of that ship
        for (let j = 0; j < locations.length; j++) {
          const currentLocation = locations[j];
          const { row, col } = currentLocation;

          // select exact cell dom element
          const cell = player instanceof Human ? DOM.gameboardHuman.querySelector(`[data-row="${row}"][data-col="${col}"]`) : DOM.gameboardAi.querySelector(`[data-row="${row}"][data-col="${col}"]`);

          cell.classList.add(shipType);

          if (locations.length === 1) {
            cell.classList.add('ship__one__length');

            continue;
          }

          if (isVertical) cell.classList.add('vertical');
          else cell.classList.add('horizon');

          if (!j) cell.classList.add('ship__head');
          else if (j === locations.length - 1) cell.classList.add('ship__tail');
          else cell.classList.add('ship__body');
        }
      }
    }
  };

  static aiDeathShips = (player) => {
    if (!(player instanceof Player)) throw new Error('Invalid Player');

    const deathShips = player.board.ships.death;

    for (let i = 0; i < deathShips.length; i++) {
      const currentShipInfo = deathShips[i];

      const locations = currentShipInfo.locations;

      const isVertical = currentShipInfo.isVertical;

      for (let j = 0; j < locations.length; j++) {
        const currentLocation = locations[j];

        const { row, col } = currentLocation;

        const cell = DOM.gameboardAi.querySelector(`[data-row="${row}"][data-col="${col}"]`);

        cell.classList.add('death');

        if (locations.length === 1) {
          cell.classList.add('ship__one__length');

          continue;
        }

        if (isVertical) cell.classList.add('vertical');
        else cell.classList.add('horizon');

        if (!j) cell.classList.add('ship__head');
        else if (j === locations.length - 1) cell.classList.add('ship__tail');
        else cell.classList.add('ship__body');
      }
    }
  };

  static shotOnBoard = (player, position, status) => {
    if (!(position instanceof Position) || !(player instanceof Player)) throw new Error('Invalid argument');

    const { row, col } = position;

    let gameboard;

    if (player instanceof Human) gameboard = DOM.gameboardHuman;
    else gameboard = DOM.gameboardAi;

    const cell = gameboard.querySelector(`[data-col="${col}"][data-row="${row}"]`);

    const span = document.createElement('span');

    if (status === 'Hit') span.classList.add('hit__shot');
    else span.classList.add('miss__shot');

    cell.appendChild(span);
  };
}

const Game = (() => {
  let human;

  let ai;

  const start = () => {
    human = new Human();

    ai = new Computer();

    human.randomPlaceShips();

    ai.randomPlaceShips();

    Display.board(human);

    Display.humanShips(human);

    Display.board(ai);

    Display.humanShips(ai); // TODO used for testing

    DOM.listenHumanAttacks(human, ai);

    Display.message(human, '');

    Display.message(ai, '');
  };

  return {
    start,
  };
})();

window.addEventListener('DOMContentLoaded', (e) => {
  Game.start();
});

DOM.restart.addEventListener('click', (e) => {
  Game.start();
});
