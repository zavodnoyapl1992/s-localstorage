const sMock = require('./mock/storage');
window.localStorage = sMock();
window.sessionStorage = sMock();
const {localStorage, _} = require('../index');

test('CRUD for sting type', async () => {
  localStorage.set('test', 'test');
  expect(localStorage.get('test')).toBe('test');
  expect(localStorage.get('test', 1)).toBe('test');
  localStorage.remove('test');
  expect(localStorage.get('test')).toBe(null);
  expect(localStorage.get('test', 1)).toBe(1);
});

test('CRUD for number type', async () => {
  localStorage.set('test', 1);
  expect(localStorage.get('test')).toBe(1);
  localStorage.set('test', 1.4);
  expect(localStorage.get('test')).toBe(1.4);
  localStorage.remove('test');
  expect(localStorage.get('test')).toBe(null);
});

test('CRUD for object type', async () => {
  localStorage.set('test', {test: 5});
  expect(localStorage.get('test').test).toBe(5);
  localStorage.remove('test');
  expect(localStorage.get('test')).toBe(null);
});

test('CRUD for array type', async () => {
  localStorage.set('test', ['test']);
  expect(localStorage.get('test')[0]).toBe('test');
  localStorage.remove('test');
  expect(localStorage.get('test')).toBe(null);
});

test('CRUD for boolean type', async () => {
  localStorage.set('test', true);
  expect(localStorage.get('test')).toBe(true);
  localStorage.remove('test');
  expect(localStorage.get('test')).toBe(null);
});

test('Clear All', async () => {
  expect(localStorage.clear()).toBeUndefined();
});

test('Expect error type', async () => {
  function setErrorType () {
    localStorage.set('test', Symbol('test'));
  }
  expect(setErrorType).toThrowError(TypeError);
  expect(setErrorType).toThrowError(`It is not supported type for local storage`);
});
