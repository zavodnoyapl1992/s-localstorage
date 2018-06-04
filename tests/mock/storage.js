/**
 * Mock for local storage
 * @returns {{elements: {}, setItem: setItem, getItem: (function(*): null), remove: remove}}
 */
function createStorage () {
  let elements = {};
  return {
    setItem: function (key, value) {
      elements[key] = value + '';
    },
    getItem: function (key) {
      return key in elements ? elements[key] : null;
    },
    removeItem: function (key) {
      delete elements[key];
    },
    clear: function () {
      elements = {};
    }
  };
}
module.exports = createStorage;
