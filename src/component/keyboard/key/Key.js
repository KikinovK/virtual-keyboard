import './_key.scss';

import CreateElement from '../../createElement/CreateElement';

export default class Key extends CreateElement {
  constructor(paternElement, keyData, onInput, className) {
    super(paternElement, 'div', 'key');
    this.keyData = keyData;
    this.onInput = onInput;
    if (className) this.element.classList.add(...className);
    this.element.textContent = keyData;
    this.element.addEventListener('mousedown', () => {
    });
    this.element.addEventListener('mouseup', () => {
      onInput(keyData);
    });
    this.element.addEventListener('mouseenter', () => {
    });
    this.element.addEventListener('mousedown', () => {
    });
  }

  hendleKeyDown() {
    this.element.classList.add('key_state-down');
  }

  hendleKeyUp() {
    this.onInput(this.keyData);
    this.element.classList.remove('key_state-down');
  }
}
