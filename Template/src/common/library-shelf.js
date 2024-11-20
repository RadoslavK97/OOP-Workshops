import { makeSymmetricalEnum } from './make-symmetrical-enum.js';

export const libraryShelf = {
  Ocean: 1,
  Elemental: 2,
  Technical: 3,
  Clowns: 4,
  Unclassified: 99,
};

makeSymmetricalEnum(libraryShelf);
