import './_keyboard.scss';

import CreateElement from '../createElement/CreateElement';
import Output from './output/Output';
import KeyList from './keyList/KeyList';
import keyDic from './keyDic/keyDic';
import Storage from '../storage/Storage';

export default class Keyboard extends CreateElement {
  constructor(paternElement) {
    super(paternElement, 'div', 'keyboard');
    this.storage = new Storage('indexKeyDic');
    this.indexKeyDic = this.storage.get() ? parseInt(this.storage.get(), 10) : 0;
    this.isControlLeftDown = false;
    this.isAltLeftDown = false;
    this.isCapsLock = false;

    this.output = new Output(this.element, 'keyboard__output');
    this.keyList = new KeyList(this.element, keyDic[this.indexKeyDic].lowCase, (value) => { this.onIntput(value); }, 'keyboard__keys');

    this.keyList.onShift = () => {
      console.log('onShift');
      if (!this.isCapsLock) {
        this.keyList.switchKeyMapping(keyDic[this.indexKeyDic].lowCase);
      } else {
        this.keyList.switchKeyMapping(keyDic[this.indexKeyDic].upCase);
      }
    };

    this.keyList.offShift = () => {
      console.log('offShift');
      if (!this.isCapsLock) {
        this.keyList.switchKeyMapping(keyDic[this.indexKeyDic].upCase);
      } else {
        this.keyList.switchKeyMapping(keyDic[this.indexKeyDic].lowCase);
      }
    };

    this.keyList.onCapsLock = () => {
      if (!this.isCapsLock) {
        this.keyList.switchKeyMapping(keyDic[this.indexKeyDic].upCase);
        this.isCapsLock = true;
      } else {
        this.keyList.switchKeyMapping(keyDic[this.indexKeyDic].lowCase);
        this.isCapsLock = false;
      }
    };

    this.keyList.onTab = () => {
      this.onIntput('    ');
    };

    this.keyList.onEnter = () => {
      this.onIntput('\n');
    };

    this.keyList.onBackspace = () => {
      const cursorPosition = this.output.getCursorPosition();
      const text = this.output.content;
      this.output.content = text.slice(0, cursorPosition - 1) + text.slice(cursorPosition);
      this.output.setCursorPosition(cursorPosition - 1);
    };

    this.keyList.onDelete = () => {
      const cursorPosition = this.output.getCursorPosition();
      const text = this.output.content;
      this.output.content = text.slice(0, cursorPosition) + text.slice(cursorPosition + 1);
      this.output.setCursorPosition(cursorPosition);
    };

    document.addEventListener('keydown', (event) => {
      event.preventDefault();
      this.keyList.hendleKeyDown(event.code, event.type);
      if (event.code === 'ControlLeft') this.isControlLeftDown = true;
      if (event.code === 'AltLeft') this.isAltLeftDown = true;
    });

    document.addEventListener('keyup', (event) => {
      event.preventDefault();
      this.keyList.hendleKeyUp(event.code, event.type);
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
    this.storage.set(this.indexKeyDic);
  }

  onIntput(value) {
    const cursorPosition = this.output.getCursorPosition();
    const text = this.output.content;
    this.output.content = text.slice(0, cursorPosition) + value + text.slice(cursorPosition);
    console.log(cursorPosition, cursorPosition + value.length);
    this.output.setCursorPosition(cursorPosition + value.length);
  }
}
