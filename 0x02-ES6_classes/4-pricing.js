// Implements the class Pricing
import Currency from './3-currency';

// class definition
export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // amount getter method
  get amount() {
    return this._amount;
  }

  // amount setter method
  set amount(value) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  // currency getter method
  get currency() {
    return this._currency;
  }

  // currency setter method
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency should be an instance of the class Currency');
    }
    this._currency = value;
  }

  // Method to return attributes
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  // Static method to return the converted amount
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' && typeof conversionRate !== 'number') {
      throw new TypeError('Amount and Conversion Rate must be numbers');
    }
    return amount * conversionRate;
  }
}
