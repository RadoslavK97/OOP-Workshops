import { libraryShelf } from '../common/library-shelf.js';

export class Library {
    _shelves;

    constructor() {
      this._shelves = {};
    }

    addBook(book, shelf) {
      if (Object.values(libraryShelf).includes(shelf)) {
        this._shelves[shelf] = [];
        this._shelves[shelf].push(book);

      } else {
        throw new Error('There is no such shelf in the library!');
      }

    };
    printBooks() {
      if (Object.keys(this._shelves).length === 0) {
        return `No books added`;
      }
      return Object.keys(this._shelves)
        .map(key => `  == ${libraryShelf[key]} ==` + `\n` + `${this._shelves[key].map(v => `${v.title}, by ${v.authors}, ${v.pages} pages`)}` + `\n`).join('\n');
    };
}


