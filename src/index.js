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

window.addEventListener('DOMContentLoaded', Game.start);

DOM.restart.addEventListener('click', Game.start);
