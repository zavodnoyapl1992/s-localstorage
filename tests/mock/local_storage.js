/**
 * Mock for local storage
 * @returns {{elements: {}, setItem: setItem, getItem: (function(*): null), remove: remove}}
 */
function createLocalStorage () {
  const elements = {};
  return {
    setItem: function (key, value) {
      elements[key] = value + '';
    },
    getItem: function (key) {
      return key in elements ? elements[key] : null;
    },
    removeItem: function (key) {
      delete elements[key];
    }
  };
}
module.exports = createLocalStorage;
