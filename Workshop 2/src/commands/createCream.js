import { ApplicationData } from '../core/applicationData.js';
import { try_parse_float, validateParamsCount } from './validationHelpers.js';

export class CreateCreamCommand {
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

      const productName = this.#params;
      const [name, brand, price, gender, scent] = productName;

      const parsingPrice = try_parse_float(try_parse_float(price).toFixed(2));

      this.#appData.createCream(name, brand, parsingPrice, gender, scent);

      return `Cream with name ${name} was created!`;
    }
}
