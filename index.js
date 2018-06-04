
const NAMESAPCE_S = '__NAMESPACE__';

const SUPPORTED_TYPES = [
  'number',
  'object',
  'string',
  'boolean',
  'array'
];
/**
 * Simple work with local storage
 * @type {{get, set, remove, clear}}
 */
const SIMPLE_STORAGE = function (storage, storageName) {
  const isSupportedTypes = function (value) {
    try {
      JSON.parse(JSON.stringify(value));
    } catch (e) {
      throw new TypeError(`It is not supported type for ${storageName}, use ${SUPPORTED_TYPES + ''}`);
    }
  };
  const set = function (key, value) {
    isSupportedTypes(value);
    storage.setItem(NAMESAPCE_S + key, JSON.stringify(value));
  };

  const get = function (key, defaultValue) {
    defaultValue = defaultValue === undefined ? null : defaultValue;
    const value = storage.getItem(NAMESAPCE_S + key);

    return value !== null ? JSON.parse(value) : defaultValue;
  };

  const remove = function (key) {
    storage.removeItem(NAMESAPCE_S + key);
  };
  const clear = function () {
    storage.clear();
  };

  try {
    set('||test||', true);
    get('||test||');
    remove('||test||');
  } catch (e) {
    console.error(`${storageName} is not supported`);

    return {
      get: (key, defaultValue) => { return defaultValue === undefined ? null : defaultValue; },
      set: () => {},
      remove: () => {},
      clear: () => {}
    };
  }

  return {
    get,
    set,
    remove,
    clear
  };
};

const localStorage = SIMPLE_STORAGE(window.localStorage, 'local storage')
const sessionStorage = SIMPLE_STORAGE(window.sessionStorage, 'session storage')

/**
 *
 * @type {{localStorage: SIMPLE_STORAGE, sessionStorage: SIMPLE_STORAGE}}
 */
module.exports = {localStorage, sessionStorage};
