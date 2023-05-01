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

  constructor(paternElement, className) {
    super(paternElement, 'textarea', 'output');
    if (className) this.element.classList.add(className);
    this.private_content = '';
  }

  setCursorPosition(position) {
    this.element.selectionStart = position;
    this.element.selectionEnd = position;
  }

  getCursorPosition() {
    return this.element.selectionStart;
  }
}
