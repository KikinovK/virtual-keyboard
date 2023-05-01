import './_key.scss';

import CreateElement from '../../createElement/CreateElement';

export default class Key extends CreateElement {
  constructor(paternElement, keyData, onInput, className, offInput) {
    super(paternElement, 'div', 'key');
    this.keyData = keyData;
    this.onInput = onInput;
    this.offInput = offInput;
    if (className) this.element.classList.add(...className);
    this.element.textContent = keyData;
    this.element.addEventListener('mousedown', () => {
      this.hendleKeyDown();
    });
    this.element.addEventListener('mouseup', () => {
      this.hendleKeyUp();
    });
    this.element.addEventListener('mouseenter', () => {
    });
    this.element.addEventListener('mousedown', () => {
    });
  }

  hendleKeyDown() {
    this.element.classList.add('key_state-down');
    if (this.offInput) this.offInput(this.keyData);
  }

  hendleKeyUp() {
    this.onInput(this.keyData);
    this.element.classList.remove('key_state-down');
  }
}
