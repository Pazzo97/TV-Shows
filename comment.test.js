import totalComment from './src/modules/total-comment.js';
import 'cross-fetch/polyfill';

// The function that we are testing contain the item ID as a parameter
// The sample id for the first episode is 1
// The sample id for the second episode is 2
// The sample id for the third episode is 3

test('Getting items total comments', () => {
  const itemIdTestData = 60;
  return totalComment(itemIdTestData).then((data) => {
    if (typeof data === 'undefined') {
      expect(data).toBeUndefined();
    } else {
      expect(data).toBe(2);
    }
  });
});