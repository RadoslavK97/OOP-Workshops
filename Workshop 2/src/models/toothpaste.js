import { Product } from './product.js';

export class Toothpaste extends Product {

  #ingredients;
  /**
  * @param {string} name
  * @param {string} brand
  * @param {number} price
  * @param {Gender} gender
  * @param {string} ingredients
  */
  constructor(name, brand, price, gender, ingredients) {
    super(name, brand, price, gender);
    this.addingIngredients(ingredients);
  }

  get ingredients() {
    return this.#ingredients;
  }

  addingIngredients(value) {
    if (value === '' || typeof value !== 'string') {
      throw new Error('Please add valid ingredients!');
    }
    this.#ingredients = value;
  }
  additionalInfo() {

    return ` #Ingredients: ${this.ingredients}`;

  }
};
