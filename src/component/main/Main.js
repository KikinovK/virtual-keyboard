import './_main.scss';
import CreateElement from '../createElement/CreateElement';

export default class Main extends CreateElement {
  constructor(paternElement) {
    super(paternElement, 'main', 'main');
  }
}
