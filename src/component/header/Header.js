import './_header.scss';
import CreateElement from '../createElement/CreateElement';

const title = 'RS SCHOOL Virtual Keyboard';

export default class Header extends CreateElement {
  constructor(paternElement) {
    super(paternElement, 'header', 'header');

    this.sectionIn = new CreateElement(this.element, 'div', 'section_in');
    this.title = new CreateElement(this.sectionIn.element, 'h1', 'header__title', title);
  }
}
