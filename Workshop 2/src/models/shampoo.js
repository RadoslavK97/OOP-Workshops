import { Product } from './product.js';
import { Usage } from './usage.js';

export class Shampoo extends Product {
  static #MIN_MILLILITERS = 0;
  /**
  * @param {string} name
  * @param {string} brand
  * @param {number} price
  * @param {Gender} gender
  * @param {number} milliliters
  * @param {Usage} usage
  */

  #milliliters;
  #usage;

  constructor(name, brand, price, gender, milliliters, usage) {
    super(name, brand, price, gender);
    this.validationMilliliters(milliliters);
    this.validateUsage(usage);
  }
  get usage() {
    return this.#usage;
  }

  get milliliters() {
    return this.#milliliters;
  }

  validationMilliliters(value) {
    if (value < Shampoo.#MIN_MILLILITERS) {
      throw new Error('Milliliters cannot be a negative number!');
    }
    this.#milliliters = value;
  }

  validateUsage(value) {
    if (!Object.values(Usage).includes(value)) {
      throw new Error('Invalid Usage!');
    }
    this.#usage = value;
  }


  additionalInfo() {

    return ` #Milliliters: ${this.milliliters}\n`+
    ` #Usage: ${this.usage}`;

  }

}
