import './_output.scss';

import CreateElement from '../../createElement/CreateElement';

export default class Output extends CreateElement {
  set content(value) {
    this.private_content = value;
    this.element.value = this.private_content;
  }

  get content() {
    return this.private_content;
  }

  set cursorPosition(value) {
    this.private_cursorPosition = value;
  }

  get cursorPosition() {
    return this.private_cursorPosition;
  }

  constructor(paternElement, className) {
    super(paternElement, 'textarea', 'output');
    if (className) this.element.classList.add(className);
    this.private_content = '';
    this.private_cursorPosition = 0;
    this.element.focus();

    this.element.addEventListener('click', () => {
      this.cursorPosition = this.element.selectionStart;
    });
  }

  setCursorPosition(position) {
    if (document.activeElement === this.element) {
      this.element.selectionStart = position;
      this.element.selectionEnd = position;
      this.cursorPosition = position;
    } else {
      this.cursorPosition = position;
    }
  }

  getCursorPosition() {
    if (document.activeElement === this.element) {
      return this.element.selectionStart;
    }
    return this.cursorPosition;
  }
}
