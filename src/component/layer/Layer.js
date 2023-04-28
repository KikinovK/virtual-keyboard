import './_layer.scss';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Main from '../main/Main';

export default class Layer {
  constructor() {
    this.patern = document.body;
    this.header = new Header(this.patern);
    this.main = new Main(this.patern);
    this.footer = new Footer(this.patern);
  }
}
