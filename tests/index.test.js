const lsMock = require('./mock/local_storage');
window.localStorage = lsMock();
const ls = require('../index');

test('CRUD for sting type', async () => {
  ls.set('test', 'test');
  expect(ls.get('test')).toBe('test');
  expect(ls.get('test', 1)).toBe('test');
  ls.remove('test');
  expect(ls.get('test')).toBe(null);
  expect(ls.get('test', 1)).toBe(1);
});

test('CRUD for number type', async () => {
  ls.set('test', 1);
  expect(ls.get('test')).toBe(1);
  ls.set('test', 1.4);
  expect(ls.get('test')).toBe(1.4);
  ls.remove('test');
  expect(ls.get('test')).toBe(null);
});

test('CRUD for object type', async () => {
  ls.set('test', {test: 5});
  expect(ls.get('test').test).toBe(5);
  ls.remove('test');
  expect(ls.get('test')).toBe(null);
});

test('CRUD for array type', async () => {
  ls.set('test', ['test']);
  expect(ls.get('test')[0]).toBe('test');
  ls.remove('test');
  expect(ls.get('test')).toBe(null);
});

test('CRUD for boolean type', async () => {
  ls.set('test', true);
  expect(ls.get('test')).toBe(true);
  ls.remove('test');
  expect(ls.get('test')).toBe(null);
});

test('Expect error type', async () => {
  function setErrorType () {
    ls.set('test', Symbol('test'));
  }
  expect(setErrorType).toThrowError(TypeError);
  expect(setErrorType).toThrowError(`It is not supported type for local storage`);
});
