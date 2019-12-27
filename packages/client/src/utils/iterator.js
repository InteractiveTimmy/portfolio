export default class Iterator {
  constructor() {
    this.index = 0;
  }

  increment() {
    this.index += 1;
  }

  deincrement() {
    this.index -= 1;
  }

  next() {
    this.increment();
    return this.index;
  }

  previous() {
    this.deincrement();
    return this.index;
  }
}
