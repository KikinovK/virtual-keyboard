import './_footer.scss';
import CreateElement from '../createElement/CreateElement';

export default class Footer extends CreateElement {
  constructor(paternElement) {
    super(paternElement, 'footer', 'footer');

    this.sectionIn = new CreateElement(this.element, 'div', 'section_in');
  }
}
