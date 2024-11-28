
import { Scent } from './scent.js';
import { Product } from './product.js';

export class Cream extends Product {
    static #MIN_NAME_LENGTH = 3;
    static #MAX_NAME_LENGTH = 15;
    static #MIN_BRAND_LENGTH = 3;
    static #MAX_BRAND_LENGTH = 15;

    /**
  * @param {string} name
  * @param {string} brand
  * @param {number} price
  * @param {Gender} gender
  * @param {Scent} scent
  */

    #scent;

    constructor(name, brand, price, gender, scent) {


      super(name, brand, price, gender);
      this.validationName(name);
      this.validationBrand(brand);
      this.validationScent(scent);
    }

    get scent() {
      return this.#scent;
    }

    validationName(value) {
      if (!value || value.length < Cream.#MIN_NAME_LENGTH || value.length > Cream.#MAX_NAME_LENGTH) {
        throw new Error('Invalid cream name!');
      }
    }

    validationBrand(value) {
      if (!value || value.length < Cream.#MIN_BRAND_LENGTH || value.length > Cream.#MAX_BRAND_LENGTH) {
        throw new Error('Invalid cream brand name!');
      }
    }

    validationScent(value) {
      if (!Object.values(Scent).includes(value)) {
        throw new Error('This is not a valid scent!');
      }
      this.#scent = value;
    }

    additionalInfo() {

      return ` #Scent: ${this.scent}`;

    }
}
