// Implements the class SkyHighBuilding that extends fro Building
import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  // floors getter method
  get floors() {
    return this._floors;
  }

  // sqft getter method

  // method declaration
  evacuationWarningMessage() {
    return (`Evacuate slowly the ${this._floors} floors.`);
  }
}
