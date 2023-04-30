import './_keyboard.scss';

import CreateElement from '../createElement/CreateElement';
import Output from './output/Output';
import KeyList from './keyList/KeyList';
import keyDic from './keyDic/keyDic';

export default class Keyboard extends CreateElement {
  constructor(paternElement) {
    super(paternElement, 'div', 'keyboard');

    this.output = new Output(this.element, 'keyboard__output');
    this.keyList = new KeyList(this.element, keyDic, (value) => { this.output.content += value; }, 'keyboard__keys');

    document.addEventListener('keydown', (event) => {
      event.preventDefault();
      this.keyList.hendleKeyDown(event.code);
    });

    document.addEventListener('keyup', (event) => {
      event.preventDefault();
      this.keyList.hendleKeyUp(event.code);
      console.log(event.code);
    });
  }
}
