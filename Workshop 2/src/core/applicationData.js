import { ShoppingCart } from '../models/shoppingCart.js';
import { Category } from '../models/category.js';
import { Shampoo } from '../models/shampoo.js';
import { Toothpaste } from '../models/toothpaste.js';
import { Cream } from '../models/cream.js';

export class ApplicationData {
    #products = [];
    #categories = []
    #shoppingCart = new ShoppingCart();

    /**
    * @type {Product[]}
    */
    get products() {
      return Object.freeze([...this.#products]);
    }

    /**
    * @type {Category[]}
    */
    get categories() {
      return Object.freeze([...this.#categories]);
    }

    /**
    * @type {ShoppingCart}
    */
    get shoppingCart() {
      return this.#shoppingCart;
    }

    /**
    * @param {string} name
    *
    * @return {Product}
    */
    findProductByName(name) {
      for (const product of this.#products) {
        if (product.name === name) {
          return product;
        }
      }

      throw new Error(`Product ${name} does not exist!`);
    }

    /**
    * @param {string} name
    *
    * @return {Category}
    */
    findCategoryByName(name) {
      for (const category of this.#categories) {
        if (category.name === name) {
          return category;
        }
      }

      throw new Error(`Category ${name} does not exist!`);
    }

    /**
    * @param {string} name
    */
    createCategory(name) {
      if (this.categoryExists(name)) {
        throw new Error(`Category ${name} already exists!`);
      }

      const category = new Category(name);
      this.#categories.push(category);
    }

    /**
    * @param {string} name
    * @param {string} brand
    * @param {number} price
    * @param {Gender} gender
    * @param {Usage} usage
    * @param {number} milliliters
    *
    * @return {Shampoo}
    */
    createShampoo(name, brand, price, gender, usage, milliliters) {
      if (this.productExists(name)) {
        throw new Error(`This shampoo ${name} already exists!`);
      }
      const shampoo = new Shampoo(name, brand, price, gender, milliliters, usage);

      this.#products.push(shampoo);

      return shampoo;

    }

    /**
    * @param {string} name
    * @param {string} brand
    * @param {number} price
    * @param {Gender} gender
    * @param {Scent} scent
    *
    * @return {Cream}
    */
    createCream(name, brand, price, gender, scent) {
      if (this.productExists(name)) {
        throw new Error(`This cream ${name} already exists!`);
      }
      const cream = new Cream(name, brand, price, gender, scent);

      this.#products.push(cream);

      return cream;

    }

    /**
    * @param {string} name
    * @param {string} brand
    * @param {number} price
    * @param {Gender} gender
    * @param {string} ingredients
    *
    * @return {Toothpaste}
    */
    createToothpaste(name, brand, price, gender, ingredients) {
      if (this.productExists(name)) {
        throw new Error(`This toothpaste ${name} already exists!`);
      }
      const toothpaste = new Toothpaste(name, brand, price, gender, ingredients);

      this.#products.push(toothpaste);
      return toothpaste;
    }

    /**
    * @param {string} name
    *
    * @return {boolean}
    */
    categoryExists(name) {
      return this.#categories.some(c => c.name === name);
    }

    /**
    * @param {string} name
    *
    * @return {boolean}
    */
    productExists(name) {
      return this.#products.some(p => p.name === name);
    }
}
