import itemsCounter from './_mocks_/items-counter.js';

describe('Test for items counter', () => {
  test('Should check if the correct counter is returned:', async () => {
    const data = await itemsCounter();
    const count = data.length;
    expect(count).toEqual(27);
  });
});
