import './_key_list.scss';

import CreateElement from '../../createElement/CreateElement';
import Key from '../key/Key';

export default class KeyList extends CreateElement {
  constructor(paternElement, keyList, onInput, className) {
    super(paternElement, 'ul', 'key_list');
    this.keyMap = {};
    if (className) this.element.classList.add(className);
    if (keyList) {
      const keyIndexArr = Object.keys(keyList);
      for (let i = 0; i < keyIndexArr.length; i += 1) {
        if (Object.hasOwn(keyList, keyIndexArr[i])) {
          this.keyMap[keyIndexArr[i]] = new Key(this.element, keyList[keyIndexArr[i]], onInput);
        }
      }
    }
  }

  hendleKeyDown(keyCode) {
    const key = this.keyMap[keyCode];
    if (key) {
      key.hendleKeyDown();
    }
  }

  hendleKeyUp(keyCode) {
    const key = this.keyMap[keyCode];
    if (key) {
      key.hendleKeyUp();
    }
  }
}
