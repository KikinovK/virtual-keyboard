import './_footer.scss';
import CreateElement from '../createElement/CreateElement';

export default class Footer extends CreateElement {
  constructor(paternElement) {
    super(paternElement, 'footer', 'footer');

    this.sectionIn = new CreateElement(this.element, 'div', 'section_in');
    this.title = new CreateElement(this.sectionIn.element, 'p', 'footer__note', 'клавиатура создавалась в windows');
    this.title = new CreateElement(this.sectionIn.element, 'p', 'footer__note', 'смена раскладки клавиатуры левый ctr+alt');
  }
}
