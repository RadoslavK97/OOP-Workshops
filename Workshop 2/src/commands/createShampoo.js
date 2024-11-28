import { try_parse_float, try_parse_int, validateParamsCount } from './validationHelpers.js';

export class CreateShampooCommand {
    #params;
    #appData;

    /**
    * @param {string[]} params
    * @param {ApplicationData} appData
    */
    constructor(params, appData) {
      validateParamsCount(params, 6);

      this.#params = params;
      this.#appData = appData;
    }

    execute() {

      const productName = this.#params;
      const [name, brand, price, gender, milliliters, usage] = productName;

      const parsingPrice = try_parse_float(try_parse_float(price).toFixed(2));
      const parsingMilliliters = try_parse_int(milliliters);


      this.#appData.createShampoo(name, brand, parsingPrice, gender, usage, parsingMilliliters);

      return `Shampoo with name ${name} was created!`;
    }
}
