import '../css/style.css';
import Game from './Game';

const board = document.getElementById('game-board');
const game = new Game(board);

game.init();
