import { bookGenre } from './common/book-genre.js';
import { libraryShelf } from './common/library-shelf.js';
import { Book } from './models/book.js';
import { Library } from './models/library.js';

// uncomment the code below to start testing

const book1 = new Book('IT', bookGenre.Horror, 600, 'Steven King');
const book2 = new Book('Startide Rising', bookGenre.SciFi, 345, 'David Brin');
const book3 = new Book('Harry Potter', bookGenre.Fantasy, 700, 'j.k Rowling');
const book4 = new Book('Game of Thrones', bookGenre.Fantasy, 100000, 'J.R.R. Martin');

const library = new Library();

library.addBook(book1, libraryShelf.Clowns);
library.addBook(book2, libraryShelf.Ocean);
library.addBook(book3, libraryShelf.Ocean);
library.addBook(book4, libraryShelf.Elemental);

console.log(library.printBooks());
