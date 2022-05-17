import './style.css';
// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import fetchData from './modules/fetch-data.js';

const urlApi = 'https://api.tvmaze.com/shows/1/episodes';

const apiData = fetchData(urlApi);

apiData.then(
  (value) => {
    const arrDataFromApi = value;

    const commentPopup = document.querySelectorAll('.comment');
    commentPopup.forEach((button, index) => {
      button.addEventListener('click', () => {
        document.getElementById('comment-popup').style.display = 'block';
        const itemImage = document.getElementById('item-image');
        const itemName = document.getElementById('item-name');
        const itemSeason = document.getElementById('item-season');
        const itemEpisode = document.getElementById('item-episode');
        const itemRuntime = document.getElementById('item-runtime');
        const itemRating = document.getElementById('item-rating');

        itemImage.innerHTML = `<img src="${arrDataFromApi[index].image.original}" alt="Item picture">`;
        itemName.innerHTML = arrDataFromApi[index].name;
        itemSeason.innerHTML = arrDataFromApi[index].season;
        itemEpisode.innerHTML = arrDataFromApi[index].number;
        itemRuntime.innerHTML = arrDataFromApi[index].runtime;
        itemRating.innerHTML = arrDataFromApi[index].ratting.average;
      });
    });
  },
);