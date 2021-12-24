import commentCounter from './_mocks_/comment-counter.js';

describe('check for comment counter', () => {
  test('check if the function returns number of comments per item', async () => {
    const commentData = await commentCounter(26);
    const count = commentData.length;
    expect(expect(count).toEqual(2));
  });
});