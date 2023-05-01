import './_key.scss';

import CreateElement from '../../createElement/CreateElement';

export default class Key extends CreateElement {
  constructor(paternElement, keyData, onInput, className) {
    super(paternElement, 'div', 'key');
    this.keyData = keyData;
    this.onInput = onInput;
    if (className) this.element.classList.add(...className);
    this.element.textContent = keyData;
    this.element.addEventListener('mousedown', (event) => {
      onInput(this.keyData, event.type);
      console.log(event.type);
    });
    this.element.addEventListener('mouseup', (event) => {
      onInput(this.keyData, event.type);
    });
    this.element.addEventListener('mouseenter', () => {
    });
    this.element.addEventListener('mousedown', () => {
    });
  }

  hendleKeyDown(value, typeEvent) {
    this.element.classList.add('key_state-down');
    if (typeEvent) this.onInput(this.keyData, typeEvent);
  }

  hendleKeyUp(value, typeEvent) {
    this.onInput(this.keyData, typeEvent);
    this.element.classList.remove('key_state-down');
  }
}
