import { Gender } from './gender.js';

export class Product {

  static #minNameLength = 3;
  static #maxNameLength = 10;
  static #minBrandLength = 2;
  static #maxBrandLength = 10;
  static #minPrice = 0;
  #name;
  #brand;
  #price;
  #gender;

  /**
  * @param {string} name
  * @param {string} brand
  * @param {number} price
  * @param {Gender} gender
  */
  constructor(name, brand, price, gender) {

    this.validationName(name);
    this.validationBrand(brand);
    this.validationPrice(price);
    this.validateGender(gender);
    // if (!name) {
    //   throw new Error('Invalid name!');
    // }

    // if (!brand) {
    //   throw new Error('Invalid brand!');
    // }

    // if (name.length < Product.#minNameLength || name.length > Product.#maxNameLength) {
    //   throw new Error(`Product name length must be between ${Product.#minNameLength} and ${Product.#maxNameLength}`);
    // }

    // if (brand.length < Product.#minBrandLength || brand.length > Product.#maxBrandLength) {
    //   throw new Error(`Product brand length must be between ${Product.#minBrandLength} and ${Product.#maxBrandLength}`);
    // }

    if (!Object.keys(Gender).some(key => Gender[key] === gender)) { // if (!Gender.hasOwnProperty(gender)) {
      throw new Error(`Invalid gender type value ${gender}!`);
    }

    if (price < Product.#minPrice) {
      throw new Error(`Product price must be greater than ${Product.#minPrice}`);
    }

    this.#name = name;
    this.#brand = brand;
    this.#price = price;
    this.#gender = gender;
  }

  /**
  * @type {string}
  */
  get name() {
    return this.#name;
  }

  /**
  * @type {string}
  */
  get brand() {
    return this.#brand;
  }

  /**
  * @type {number}
  */
  get price() {
    return this.#price;
  }

  /**
  * @type {Gender}
  */
  get gender() {
    return this.#gender;
  }

  validationName(value) {
    if (!value || value.length < Product.#minNameLength || value.length > Product.#maxNameLength) {
      throw new Error('Invalid cream name!');
    }
  }
  validationBrand(value) {
    if (!value || value.length < Product.#minBrandLength || value.length > Product.#maxBrandLength) {
      throw new Error('Invalid brand name!');
    }
  }

  validationPrice(value) {
    if (value < Product.#minPrice) {
      throw new Error(`Product price must be greater than ${Product.#minPrice}`);
    }
  }

  validateGender(value) {
    if (!Object.keys(Gender).some(key => Gender[key] === value)) { // if (!Gender.hasOwnProperty(gender)) {
      throw new Error(`Invalid gender type value ${value}!`);
    }
  }

  /**
  * @return {string}
  */
  print() {
    const productInfo = [
      `#${this.#name} ${this.#brand}`,
      ` #Price: $${this.#price}`,
      ` #Gender: ${Gender[this.#gender]}`,
      `${this.additionalInfo()}`,
      ' ===',
    ];

    return productInfo.join('\r\n');
  }

  /**
  * @abstract
  *
  * @return {string}
  */
  additionalInfo() {
    throw new Error('Not implemented! Implementation must be provided by the classes extending Product!');
  }
}
