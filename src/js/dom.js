import { Ship, Position, Cell, Gameboard, Human, Computer } from './app';

const _SIZE = 10;

const Display = (() => {
  const gameboardHuman = document.querySelector('.gameboard[data-human]');

  const gameboardAi = document.querySelector('.gameboard[data-ai]');

  const displayMessage = document.querySelector('.display__message');

  const message = (content) => {
    displayMessage.textContent = content;
  };

  const human = (board) => {
    gameboardHuman.innerHTML = '';
    for (let i = 0; i < _SIZE; i++) {
      for (let j = 0; j < _SIZE; j++) {
        const div = document.createElement('div');
        div.className = 'center';
        div.dataset.row = i;
        div.dataset.col = j;
        // const cell = board.board[i][j];
        // if (cell.ship) div.classList.add('contain__ship');
        gameboardHuman.appendChild(div);
      }
    }

    const ships = board.ships;
  };

  const ai = (board) => {
    gameboardAi.innerHTML = '';
    for (let i = 0; i < _SIZE; i++) {
      for (let j = 0; j < _SIZE; j++) {
        const div = document.createElement('div');
        div.className = 'center';
        div.dataset.row = i;
        div.dataset.col = j;
        // const cell = board.board[i][j];
        // if (cell.ship) div.classList.add('contain__ship');
        gameboardAi.appendChild(div);
      }
    }
  };

  return {
    ai,
    human,
    message,
  };
})();

const Game = (() => {
  const human = new Human();

  human.randomPlaceShips();

  Display.human(human.board);

  const ai = new Computer();

  ai.randomPlaceShips();

  Display.ai(ai.board);

  return {};
})();

const Dom = (() => {
  return;
})();
