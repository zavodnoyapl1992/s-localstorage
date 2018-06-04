window.localStorage = undefined;
window.sessionStorage = undefined;
const {localStorage, sessionStorage} = require('../index');

test('Use library if local storage not supported', async () => {
  localStorage.set('test', 'test');
  expect(localStorage.get('test')).toBe(null);
  expect(localStorage.get('test', 1)).toBe(1);
  expect(localStorage.remove('test')).toBeUndefined();
  expect(localStorage.clear()).toBeUndefined();
});

test('Use library if session storage not supported', async () => {
  sessionStorage.set('test', 'test');
  expect(sessionStorage.get('test')).toBe(null);
  expect(localStorage.get('test', 1)).toBe(1);
  expect(sessionStorage.remove('test')).toBeUndefined();
  expect(sessionStorage.clear()).toBeUndefined();
});

