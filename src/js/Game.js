import goblinImage from '../img/goblin.png';
import { getRandomIndex, getNextIndex } from './utils';

export default class Game {
  constructor(boardEl) {
    this.boardEl = boardEl;
    this.cells = [];
    this.goblin = null;
    this.currentIndex = -1;
  }

  init() {
    this.createBoard();
    this.createGoblin();
    this.placeGoblin();
    this.start();
  }

  createBoard() {
    for (let i = 0; i < 16; i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      this.boardEl.append(cell);
      this.cells.push(cell);
    }
  }

  createGoblin() {
    const img = document.createElement('img');
    img.src = goblinImage;
    img.alt = 'goblin';
    img.classList.add('goblin');
    this.goblin = img;
  }

  placeGoblin() {
    const index = getRandomIndex(this.cells.length);
    this.cells[index].append(this.goblin);
    this.currentIndex = index;
  }

  moveGoblin() {
    const next = getNextIndex(this.cells.length, this.currentIndex);
    this.cells[next].append(this.goblin);
    this.currentIndex = next;
  }

  start() {
    setInterval(() => this.moveGoblin(), 1000);
  }
}
