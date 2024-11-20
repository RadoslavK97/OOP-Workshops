import { makeSymmetricalEnum } from './make-symmetrical-enum.js';

export const bookGenre = {
  Mainstream: 1,
  Romance: 2,
  SciFi: 3,
  Fantasy: 4,
  Horror: 5,
};

makeSymmetricalEnum(bookGenre);
