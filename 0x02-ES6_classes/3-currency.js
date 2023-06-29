export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  set code(worth) {
    this._code = worth;
  }

  set name(worth) {
    this._name = worth;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
