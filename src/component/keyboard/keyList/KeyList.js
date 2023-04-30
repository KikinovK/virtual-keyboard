import './_key_list.scss';

import CreateElement from '../../createElement/CreateElement';
import Key from '../key/Key';

const fnKey = [
  'Backspace',
  'Tab',
  'CapsLock',
  'Enter',
  'ShiftLeft',
  'ArrowUp',
  'ShiftRight',
  'ControlLeft',
  'MetaLeft',
  'AltLeft',
  'AltRight',
  'ControlRight',
  'ArrowLeft',
  'ArrowDown',
  'ArrowRight',
  'Delete',
];

const sizeKey = [
  'Backspace',
  'CapsLock',
  'Enter',
  'ShiftLeft',
];

export default class KeyList extends CreateElement {
  constructor(paternElement, keyList, onInput, className) {
    super(paternElement, 'ul', 'key-list');
    this.keyMap = {};
    if (className) this.element.classList.add(className);
    if (keyList) {
      const keyIndexArr = Object.keys(keyList);
      for (let i = 0; i < keyIndexArr.length; i += 1) {
        const keyIndex = keyIndexArr[i];
        const keyClassNames = [];
        if (Object.hasOwn(keyList, keyIndex)) {
          if (fnKey.includes(keyIndex)) keyClassNames.push('key_mod-fn');
          if (sizeKey.includes(keyIndex)) keyClassNames.push('key_mod-size');
          if (keyIndex === 'Space') keyClassNames.push('key_mod2-size');
          this.keyMap[keyIndexArr[i]] = new Key(
            this.element,
            keyList[keyIndex],
            onInput,
            keyClassNames,
          );
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
