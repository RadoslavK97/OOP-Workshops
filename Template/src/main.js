import { bookGenre } from './common/book-genre.js';
import { libraryShelf } from './common/library-shelf.js';
import { Book } from './models/book.js';
import { Library } from './models/library.js';

// uncomment the code below to start testing

const book1 = new Book('IT', bookGenre.Horror, 600, 'Steven King');
const book2 = new Book('Startide Rising', bookGenre.SciFi, 345, 'David Brin');

const library = new Library();

library.addBook(book1, libraryShelf.Clowns);
library.addBook(book2, libraryShelf.Ocean);

console.log(library.printBooks());
