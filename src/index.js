import './css/nav.css';
import './css/main.css';
import './css/aside.css';
import './css/reset.css';
import './css/style.css';
import './css/footer.css';
import './css/button.css';
import './css/header.css';

import Aim from './assets/icon/aim.svg';
import Battleship from './assets/img/battleship.png';

import './js/app.js';
import './js/dom.js';
import './js/class.js';
import './js/animation.js';

import { DOM, Game } from './js/dom.js';

window.addEventListener('DOMContentLoaded', (e) => {
  Game.start();
});

DOM.restart.addEventListener('click', (e) => {
  Game.start();
});
