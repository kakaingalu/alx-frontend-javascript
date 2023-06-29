class Building {
  constructor(sqft) {
    if (new.target !== Building && this.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    } else {
      this._sqft = sqft;
    }
  }

  get sqft() {
    return this._sqft;
  }
}

export default Building;
