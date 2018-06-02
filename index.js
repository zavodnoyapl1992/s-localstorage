
const NAMESAPCE_LS = 'LS__';

const SUPPORTED_TYPES = [
  'number',
  'object',
  'string',
  'boolean',
  'array'
];
/**
 * Simple work with local storage
 * @type {{get, set, remove}}
 */
const SIMPLE_LS = (function () {
  const isSupportedTypes = function (value) {
    try {
      JSON.parse(JSON.stringify(value));
    } catch (e) {
      throw new TypeError(`It is not supported type for local storage, use ${SUPPORTED_TYPES + ''}`);
    }
  };
  const set = function (key, value) {
    isSupportedTypes(value);
    window.localStorage.setItem(NAMESAPCE_LS + key, JSON.stringify(value));
  };

  const get = function (key, defaultValue) {
    defaultValue = defaultValue === undefined ? null : defaultValue;
    const value = window.localStorage.getItem(NAMESAPCE_LS + key);

    return value !== null ? JSON.parse(value) : defaultValue;
  };

  const remove = function (key) {
    window.localStorage.removeItem(NAMESAPCE_LS + key);
  };

  try {
    set('test', true);
    get('test');
    remove('test');
  } catch (e) {
    console.error('Local storage is not supported');

    return {
      get: (key, defaultValue) => { return defaultValue === undefined ? null : defaultValue; },
      set: () => {},
      remove: () => {}
    };
  }

  return {
    get,
    set,
    remove
  };
})();

module.exports = SIMPLE_LS;
