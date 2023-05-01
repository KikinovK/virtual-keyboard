export default class Storage {
  constructor(nameKey) {
    this.nameKey = nameKey;
  }

  set(value) {
    sessionStorage.setItem(this.nameKey, value);
  }

  get() {
    return sessionStorage.getItem(this.nameKey);
  }
}
