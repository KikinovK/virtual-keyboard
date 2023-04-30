import './_output.scss';

import CreateElement from '../../createElement/CreateElement';

export default class Output extends CreateElement {
  set content(value) {
    this.private_content = value;
    this.element.textContent = this.private_content;
  }

  get content() {
    return this.private_content;
  }

  constructor(paternElement, className) {
    super(paternElement, 'textarea', 'output');
    if (className) this.element.classList.add(className);
    this.private_content = '';
  }
}
