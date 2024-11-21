import { bookGenre } from '../common/book-genre.js';

export class Book {

    #title;
    #genre;
    #pages;
    #authors;

    constructor(initialTitle, initialGenre, initialPages, initialAuthors) {
      this.#authors = [];
      this.title = initialTitle;
      this.genre = initialGenre;
      this.pages = initialPages;
      this.authors = initialAuthors;

    }

    get title() {
      return this.#title;
    }
    set title(value) {
      if (typeof value === 'string' && value !== '' && value.length >= 1 && value.length <= 255) {
        this.#title = value;
      } else {
        throw new Error('This title is not a valid title!');
      }

    }

    get genre() {
      return this.#genre;
    }
    set genre(value) {
      if (!Object.values(bookGenre).includes(value)) {
        throw new Error('This genre is not valid!');
      }
      this.#genre = value;
    }

    get pages() {
      return this.#pages;
    }
    set pages(value) {
      if (value > 0 && Number.isInteger(value)) {
        this.#pages = value;
      } else {
        throw new Error('The number of pages is not a valid number!');
      }
    }

    get authors() {
      return this.#authors.toString();
    }
    set authors(value) {
      if (value === '') {
        throw new Error('This author name is not valid!');
      } if (value.split(',').every(e => e.length >= 0 && e.length <= 40) && typeof value === 'string') {
        this.#authors.push((value.split(',').filter(e => e !== ',' && e !== '')).map(el => el.trim()).join(','));
      } else {
        throw new Error('This author name is not valid!');
      }
    }
}
