export const makeSymmetricalEnum = (object) => {
  Object
    .keys(object)
    .forEach(key => {
      Object.defineProperty(object, object[key], {
        value: key,
        enumerable: false,
      });
    });
};
