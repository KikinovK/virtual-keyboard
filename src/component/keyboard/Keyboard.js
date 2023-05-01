import './_keyboard.scss';

import CreateElement from '../createElement/CreateElement';
import Output from './output/Output';
import KeyList from './keyList/KeyList';
import keyDic from './keyDic/keyDic';

export default class Keyboard extends CreateElement {
  constructor(paternElement) {
    super(paternElement, 'div', 'keyboard');
    this.indexKeyDic = 0;
    this.isControlLeftDown = false;
    this.isAltLeftDown = false;

    this.output = new Output(this.element, 'keyboard__output');
    this.keyList = new KeyList(this.element, keyDic[this.indexKeyDic].lowCase, (value) => { this.onIntput(value); }, 'keyboard__keys');

    document.addEventListener('keydown', (event) => {
      event.preventDefault();
      this.keyList.hendleKeyDown(event.code);
      if (event.code === 'ControlLeft') this.isControlLeftDown = true;
      if (event.code === 'AltLeft') this.isAltLeftDown = true;
    });

    document.addEventListener('keyup', (event) => {
      event.preventDefault();
      this.keyList.hendleKeyUp(event.code);
      console.log(event.code);
      if (event.code === 'ControlLeft') {
        if (this.isAltLeftDown === true) {
          this.switchKeyMapping();
        }
        this.isControlLeftDown = false;
      }
      if (event.code === 'AltLeft') {
        if (this.isControlLeftDown === true) {
          this.switchKeyMapping();
        }
        this.isAltLeftDown = false;
      }
    });
  }

  switchKeyMapping() {
    this.indexKeyDic = (this.indexKeyDic + 1) % keyDic.length;
    this.keyList.switchKeyMapping(keyDic[this.indexKeyDic].lowCase);
  }

  onIntput(value) {
    this.output.content += value;
  }
}
