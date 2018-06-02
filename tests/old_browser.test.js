window.localStorage = undefined;
const ls = require('../index');

test('Use library if local storage not supported', async () => {
  ls.set('test', 'test');
  expect(ls.get('test')).toBe(null);
  expect(ls.get('test', 1)).toBe(1);
});

