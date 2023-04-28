export default class CreateElement {
  constructor(patern, tagName = 'div', className = '', content = '') {
    const el = document.createElement(tagName);
    el.classList.add(className);
    el.textContent = content;
    if (patern) patern.append(el);
    this.element = el;
  }
}
