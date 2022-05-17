import './style.css';
// eslint-disable-next-line no-unused-vars
import _ from 'lodash';

import moviesList from './modules/moviesList.js';

const moviesSection = document.getElementById('movies-grids');
moviesSection.innerHTML = moviesList.map(((movie) => `
<article>
<img class="episode-picture" src="${movie.image.poster}" alt="${movie.title}">
<div class="text">
  <h4>${movie.title}</h4>
  <img class="like-heart" src="https://img.icons8.com/fluency/48/000000/like.png" alt="heart">
</div>
<p>5 likes</p>
<button type="button">Comments</button>
</article>
`)).join('');
