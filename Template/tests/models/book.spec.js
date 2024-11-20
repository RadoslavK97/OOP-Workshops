import { bookGenre } from '../../src/common/book-genre.js';
import { Book } from '../../src/models/book.js';

describe('Book', () => {

  describe('Constructor', () => {

    it('should throw when a non-string title was passed', () => {

      expect(() => new Book(null, bookGenre.Fantasy, 20, 'Author')).toThrow();
    });

    it('should throw if the book title is too short', () => {

      expect(() => new Book('', bookGenre.Fantasy, 20, 'Author')).toThrow();
    });
    it('should throw if the book title is too long', () => {

      expect(() => new Book('a'.repeat(256), bookGenre.Fantasy, 20, 'Author')).toThrow();
    });

    it('should throw if the book genre is not valid', () => {

      expect(() => new Book('title', null, 20, 'Author')).toThrow();
    });

    it('should throw if the pages value is not a valid number', () => {

      expect(() => new Book('title', bookGenre.Fantasy, null, 'Author')).toThrow();
      expect(() => new Book('title', bookGenre.Fantasy, -1, 'Author')).toThrow();
      expect(() => new Book('title', bookGenre.Fantasy, 0, 'Author')).toThrow();
      expect(() => new Book('title', bookGenre.Fantasy, NaN, 'Author')).toThrow();
      expect(() => new Book('title', bookGenre.Fantasy, 3.14, 'Author')).toThrow();
      expect(() => new Book('title', bookGenre.Fantasy, Infinity, 'Author')).toThrow();
    });

    it('should throw if the authors are not a string value', () => {

      expect(() => new Book('title', bookGenre.Fantasy, 20, null)).toThrow();
    });

    it('should throw if any of the authors name is too long', () => {

      expect(() => new Book('title', bookGenre.Fantasy, 20, `Author1,${'a'.repeat(41)}`)).toThrow();
    });

    it('should not throw when all passed values are valid', () => {

      expect(() => new Book('title', bookGenre.Fantasy, 20, 'Author')).not.toThrow();
    });

    it('should remove "empty" author names and trim author names', () => {
      const book1 = new Book('title', bookGenre.Fantasy, 20, 'Author1,,,Author2,Author3,,,');
      const book2 = new Book('title', bookGenre.Fantasy, 20, '  Author1  , Author2   ,Author3  ');

      expect(book1.authors).toEqual('Author1,Author2,Author3');
      expect(book2.authors).toEqual('Author1,Author2,Author3');
    });

  });

  describe('Book.title', () => {

    it('setter should throw if invalid title value was passed', () => {
      const book = new Book('title', bookGenre.Fantasy, 20, 'Author');

      expect(() => book.title = null).toThrow();
      expect(() => book.title = '').toThrow();
      expect(() => book.title = 'a'.repeat(256)).toThrow();
    });

    it('getter should return the correct value', () => {
      const book1 = new Book('title1', bookGenre.Fantasy, 20, 'Author');
      const book2 = new Book('title1', bookGenre.Fantasy, 20, 'Author');

      book2.title = 'title2';

      expect(book1.title).toEqual('title1');
      expect(book2.title).toEqual('title2');
    });

  });

  describe('Book.genre', () => {

    it('setter should throw if invalid title value was passed', () => {
      const book = new Book('title', bookGenre.Fantasy, 20, 'Author');

      expect(() => book.genre = null).toThrow();
      expect(() => book.genre = -3).toThrow();
    });

    it('getter should return the correct value', () => {
      const book1 = new Book('title1', bookGenre.Fantasy, 20, 'Author');
      const book2 = new Book('title1', bookGenre.Fantasy, 20, 'Author');

      book2.genre = bookGenre.Horror;

      expect(book1.genre).toEqual(bookGenre.Fantasy);
      expect(book2.genre).toEqual(bookGenre.Horror);
    });

  });

  describe('Book.pages', () => {

    it('setter should throw if invalid title value was passed', () => {
      const book = new Book('title', bookGenre.Fantasy, 20, 'Author');

      expect(() => book.pages = 0).toThrow();
      expect(() => book.pages = Infinity).toThrow();
    });

    it('getter should return the correct value', () => {
      const book1 = new Book('title1', bookGenre.Fantasy, 20, 'Author');
      const book2 = new Book('title1', bookGenre.Fantasy, 20, 'Author');

      book2.pages = 111;

      expect(book1.pages).toEqual(20);
      expect(book2.pages).toEqual(111);
    });

  });

});
