import { Position, Human, Computer, Player } from './class';

/**
 * @jest-environment jsdom
 */

// these variables can be put inside Game class but I don't want
export let _SIZE = 10; // Gameboard SIZE

export let _TOTAL_SHIPS = [1, 1, 1, 2, 2, 3, 3, 4, 5]; // total of ships we want on our gameboard

export let _SHIPS_MAX_LENGTH = 9;

export let _DIFFICULTY = 1;

export class Game {
  static changeSize = (newSize) => {
    _SIZE = newSize;

    DOM.gameboardAi.style.cssText = `grid-template: repeat(${_SIZE}, 1fr) / repeat(${_SIZE}, 1fr)`;

    DOM.gameboardHuman.style.cssText = `grid-template: repeat(${_SIZE}, 1fr) / repeat(${_SIZE}, 1fr)`;
  };

  static changeDifficulty = (newDifficulty) => (_DIFFICULTY = newDifficulty);

  static changeTotalShips = (newShips) => (_TOTAL_SHIPS = newShips);

  static isOver = false;

  static human;

  static ai;

  static checkGameover = (playerToCheck) => {
    if (playerToCheck.board.allClear) {
      this.isOver = true;
    }

    return this.isOver;
  };

  static start = () => {
    this.isOver = false;

    this.human = new Human();

    this.ai = new Computer();

    this.human.randomPlaceShips();

    this.ai.randomPlaceShips();

    Display.board(this.human);

    Display.board(this.ai);

    Display.humanShips(this.human);

    // Display.humanShips(this.ai); // FIXME used for display ai's ships, for testing

    Display.message(this.human, `Press the restart button if`, `you're not happy with your ships layout`);

    Display.message(this.ai, `Keep track of game alert here`, `You will attack the gameboard above`);

    DOM.preventSpam.classList.add('hide');

    DOM.listenHumanAttacks(this.human, this.ai);
  };

  static humanPlayOneTurn = (human, ai, position) => {
    const humanAttacksStatus = human.attack(position, ai);

    let humanMessage = `We shot at enemy's water and it's a miss`;

    if (humanAttacksStatus.cellStatus === 'Hit') {
      Display.aiDeathShips(ai);

      humanMessage = `We shot at enemy's water and it's a hit`;

      if (humanAttacksStatus.shipStatus === 'Sunk') humanMessage += `, we have sunk their ship`;
    }
    humanMessage = humanMessage.split(',');

    Display.shotOnBoard(ai, position, humanAttacksStatus.cellStatus);

    Display.message(ai, humanMessage[0], humanMessage[1] || '');

    if (this.checkGameover(ai)) {
      Display.stopUserSpamming();

      Display.message(ai, `Congratulation!`, `We have win the battle!`, `Play again?`);

      Display.message(human, `Congratulation!`, `We have win the battle!`, `Play again?`);
    }
  };

  static aiPlayOneTurn = (human, ai) => {
    const aiAttackResult = ai.attack(human);

    let aiMessage = `Enemy shot at our water and it's a miss`;

    if (aiAttackResult.cellStatus === 'Hit') {
      Display.humanShips(human);

      aiMessage = `Enemy shot at our water and it's a hit`;

      if (aiAttackResult.shipStatus === 'Sunk') aiMessage += `, they have sunk our ship`;
    }

    aiMessage = aiMessage.split(',');

    Display.shotOnBoard(human, aiAttackResult.position, aiAttackResult.cellStatus);

    Display.message(human, `Enemy is aiming...`, aiMessage[0], aiMessage[1]);

    if (this.checkGameover(human)) {
      Display.stopUserSpamming();

      Display.message(ai, `Oh noo...`, `Enemy has win the battle!`, `Play again?`);

      Display.message(human, `Oh no...`, `Enemy has win the battle!`, `Play again?`);
    }
  };
}

export class DOM {
  static messageHuman = document.querySelector(`[data-message="human"]`);

  static messageAi = document.querySelector(`[data-message="ai"]`);

  static gameboardHuman = document.querySelector('.gameboard[data-human]');

  static gameboardAi = document.querySelector('.gameboard[data-ai]');

  static restart = document.querySelector('[data-restart]');

  static setting = document.querySelector('[data-setting]');

  static preventSpam = document.querySelector('[data-prevent-spam]');

  static popupFormCtn = document.querySelector('[data-popup-form-ctn]');

  static popupForm = document.querySelector('[data-popup-form]');

  static submitForm = document.querySelector(`[data-submit-form]`);

  static closeForm = document.querySelector(`[data-close-form]`);

  static inputSize = document.querySelector(`[data-form-input-size]`);

  static inputShips = document.querySelector(`[data-form-input-ships]`);

  static inputsDifficulty = document.querySelectorAll('[name="difficulty"]');

  static #showPopupForm = () => this.popupFormCtn.classList.remove('hide');

  static #hidePopupForm = () => this.popupFormCtn.classList.add('hide');

  static listenRestart = () => {
    this.restart.addEventListener('click', (e) => {
      Game.start();
    });
  };

  static listenSetting = () => {
    this.setting.addEventListener('click', (e) => {
      this.#showPopupForm();
    });
  };

  static listenSubmitForm = () => {
    this.popupForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let difficulty = 1;

      this.inputsDifficulty.forEach((input) => {
        if (input.checked) difficulty = input.value;
      });

      const inputSizeValue = +this.inputSize.value;

      const inputShipsValue = this.inputShips.value
        .trim()

        .split(/\s*/)

        .reduce((total, current) => (+current > 0 ? [...total, +current] : total), []);

      Game.changeDifficulty(difficulty);

      Game.changeSize(inputSizeValue);

      Game.changeTotalShips(inputShipsValue);

      Game.start();

      this.#hidePopupForm();
    });
  };

  static listenCloseForm = () => {
    this.closeForm.addEventListener('click', (e) => {
      this.#hidePopupForm();
    });
  };

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

          Game.humanPlayOneTurn(human, ai, position);

          if (Game.isOver) return;

          // ai play its turn base on difficulty
          for (let i = 0; i < _DIFFICULTY; i++) {
            Game.aiPlayOneTurn(human, ai);
          }
        },

        { once: true }
      );
    });
  };
}

class Display {
  static message = (player, content0, content1 = '', content2 = '') => {
    let targetMessage;

    if (player instanceof Human) targetMessage = DOM.messageHuman;
    else targetMessage = DOM.messageAi;

    targetMessage.innerHTML = `<p>${content0}</p><p>${content1}</p><p>${content2}</p>`;
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

  static stopUserSpamming = () => {
    DOM.preventSpam.classList.remove('hide');
  };
}
