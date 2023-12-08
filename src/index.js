import './css/nav.css';
import './css/main.css';
import './css/reset.css';
import './css/style.css';
import './css/footer.css';
import './css/button.css';
import './css/header.css';

// import Aim from './assets/icon/aim.svg';
// import Battleship from './assets/img/battleship.png';

import './js/dom.js';
import './js/class.js';
import './js/animation.js';

import { DOM, Game } from './js/dom.js';

window.addEventListener('DOMContentLoaded', (e) => {
  // Game.changeSize(25);

  // Game.changeTotalShips([1, 1, 2, 2, 3, 3, 4, 5]);

  // Game.changeDifficulty('3');

  Game.start();

  DOM.listenRestart();

  DOM.listenSetting();

  DOM.listenCloseForm();

  DOM.listenSubmitForm();
});
