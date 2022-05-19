import episodeCounter from './src/modules/episode-counter.js';
import 'cross-fetch/polyfill';

test('Getting items total episodes', () => {
  const urlApi = 'https://api.tvmaze.com/shows/1/episodes';

  return episodeCounter(urlApi).then((data) => {
    expect(data).toBe(39);
  });
});