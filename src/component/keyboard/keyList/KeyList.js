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
          switch (keyIndex) {
            case 'ShiftRight':
            case 'ShiftLeft':
              this.keyMap[keyIndex] = new Key(
                this.element,
                keyList[keyIndex],
                () => { this.onShift(); },
                keyClassNames,
                () => { this.offShift(); },
              );
              break;
            case 'CapsLock':
              this.keyMap[keyIndex] = new Key(
                this.element,
                keyList[keyIndex],
                () => { this.onCapsLock(); },
                keyClassNames,
              );
              break;
            case 'Tab':
              this.keyMap[keyIndex] = new Key(
                this.element,
                keyList[keyIndex],
                () => { this.onTab(); },
                keyClassNames,
              );
              break;
            case 'Enter':
              this.keyMap[keyIndex] = new Key(
                this.element,
                keyList[keyIndex],
                () => { this.onEnter(); },
                keyClassNames,
              );
              break;
            case 'Backspace':
              this.keyMap[keyIndex] = new Key(
                this.element,
                keyList[keyIndex],
                () => { this.onBackspace(); },
                keyClassNames,
              );
              break;
            case 'Delete':
              this.keyMap[keyIndex] = new Key(
                this.element,
                keyList[keyIndex],
                () => { this.onDelete(); },
                keyClassNames,
              );
              break;
            default:
              this.keyMap[keyIndex] = new Key(
                this.element,
                keyList[keyIndex],
                onInput,
                keyClassNames,
              );
              break;
          }
        }
      }
    }
  }

  onBackspace() {
    return this.keyMap[0];
  }

  onEnter() {
    return this.keyMap[0];
  }

  onTab() {
    return this.keyMap[0];
  }

  onShift() {
    return this.keyMap[0];
  }

  offShift() {
    return this.keyMap[0];
  }

  onCapsLock() {
    return this.keyMap[0];
  }

  switchKeyMapping(keylist) {
    const keyIndexArr = Object.keys(keylist);

    for (let i = 0; i < keyIndexArr.length; i += 1) {
      this.keyMap[keyIndexArr[i]].element.textContent = keylist[keyIndexArr[i]];
      this.keyMap[keyIndexArr[i]].keyData = keylist[keyIndexArr[i]];
    }
  }

  hendleKeyDown(keyCode, typeEvent) {
    const key = this.keyMap[keyCode];
    if (key) {
      key.hendleKeyDown('', typeEvent);
    }
  }

  hendleKeyUp(keyCode, typeEvent) {
    const key = this.keyMap[keyCode];
    if (key) {
      key.hendleKeyUp('', typeEvent);
    }
  }
}
