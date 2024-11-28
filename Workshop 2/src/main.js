import { ApplicationData } from './core/applicationData.js';
import { CommandFactory } from './core/commandFactory.js';
import { Engine } from './core/engine.js';

const main = () => {
  // The following demonstrates the Composition pattern.
  const data = new ApplicationData();
  const commandFactory = new CommandFactory(data);
  const engine = new Engine(commandFactory);

  const commands = [
    'CreateShampoo MyMan Trashy 10.99231 Men 1000 EveryDay',
    'CreateToothpaste White Expensive 10.99321312 Men calcium,fluorid',
    'CreateCream Longname123 abc 5.9923 Men Lavender',
    'CreateCategory Shampoos',
    'CreateCategory Toothpastes',
    'CreateCategory Creams',
    'AddToCategory Shampoos MyMan',
    'AddToCategory Toothpastes White',
    'AddToCategory Creams Longname123',
    'AddToShoppingCart MyMan',
    'AddToShoppingCart White',
    'AddToShoppingCart Longname123',
    'ShowCategory Shampoos',
    'ShowCategory Toothpastes',
    'ShowCategory Creams',
    'TotalPrice',
    'RemoveFromCategory Shampoos MyMan',
    'ShowCategory Shampoos',
    'RemoveFromShoppingCart MyMan',
    'RemoveFromCategory Creams Longname123',
    'ShowCategory Creams',
    'RemoveFromShoppingCart Longname123',
    'TotalPrice',
  ];

  const result = engine.run(commands);
  console.log(result);
};

main();
