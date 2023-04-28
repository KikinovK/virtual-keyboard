import './_header.scss';
import CreateElement from '../createElement/CreateElement';

export default class Header extends CreateElement {
  constructor(paternElement) {
    super(paternElement, 'header', 'header');
  }
}
