import './_main.scss';
import CreateElement from '../createElement/CreateElement';
import Keyboard from '../keyboard/Keyboard';

export default class Main extends CreateElement {
  constructor(paternElement) {
    super(paternElement, 'main', 'main');

    this.section = new CreateElement(this.element, 'section', 'section');
    this.sectionIn = new CreateElement(this.section.element, 'div', 'section_in');
    this.keyboard = new Keyboard(this.sectionIn.element, 'div', 'keyboard');
  }
}
