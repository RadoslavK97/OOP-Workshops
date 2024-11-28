import { ApplicationData } from '../core/applicationData.js';
import { try_parse_float, validateParamsCount } from './validationHelpers.js';

export class CreateToothpasteCommand {
    #params;
    #appData;

    /**
    * @param {string[]} params
    * @param {ApplicationData} appData
    */
    constructor(params, appData) {
      validateParamsCount(params, 5);

      this.#params = params;
      this.#appData = appData;
    }

    execute() {
      const productName = this.#params
      const [name, brand, price, gender, ingredients] = productName;


      const parsingPrice = try_parse_float(try_parse_float(price).toFixed(2));

      this.#appData.createToothpaste(name, brand, parsingPrice, gender, ingredients);

      return `Toothpaste with name ${name} was created!`;
    }
}
