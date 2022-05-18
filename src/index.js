import './style.css';
// eslint-disable-next-line no-unused-vars
import _ from 'lodash';

// import moviesList from './modules/moviesList.js';
import fetchData from './modules/fetch-data.js';
import videoDetails from './modules/video-details.js';
import addComment from './modules/add-comment.js';
import loadComment from './modules/load-comment.js';
import totalComment from './modules/total-comment.js';
import loadLikes from './modules/load-likes.js';

const urlApi = 'https://api.tvmaze.com/shows/1/episodes';

const apiData = fetchData(urlApi);

apiData.then(
  (value) => {
    const arrDataFromApi = value;

    const moviesSection = document.getElementById('movies-grids');
    moviesSection.innerHTML = arrDataFromApi.map(((movie) => `
      <article>
        <img class="episode-picture" src="${movie.image.medium}" alt="${movie.name}">
        <div class="text">
        <h4>${movie.name}</h4>
        <img class="red-heart" src="https://img.icons8.com/fluency/48/000000/like.png" alt="heart">
        </div>
        <p><span class="like-heart"></span> likes</p>
        <button class="comment" type="button">Comments</button>
      </article>
          `)).join('');

    const itemLikes = document.querySelectorAll('.like-heart');

    const likesPromise = loadLikes();
    likesPromise.then((value) => {
      const arrLikes = value;
      const arrIds = [];

      arrLikes.forEach((like) => {
        arrIds.push(like.item_id);
      });
      itemLikes.forEach((item, index) => {
        const likeId1 = arrDataFromApi[index].id;
        const likeId = likeId1.toString();
        if (arrIds.includes(likeId)) {
          let count = 0;
          let found = false;
          while (found === false) {
            if (likeId === arrLikes[count].item_id) {
              found = true;
              item.innerHTML = arrLikes[count].likes;
            }
            count += 1;
          }
        } else {
          item.innerHTML = '0';
        }
      });
    });

    let itemID;
    const commentPopup = document.querySelectorAll('.comment');
    commentPopup.forEach((button, index) => {
      button.addEventListener('click', () => {
        document.getElementById('comment-popup').style.display = 'block';
        document.body.classList.add('no-scroll');
        videoDetails(arrDataFromApi, index);
        itemID = arrDataFromApi[index].id;
        loadComment(itemID);
        const totalComments = totalComment(itemID);
        totalComments.then(
          (value) => {
            if (typeof value === 'undefined') {
              document.getElementById('comment-total').innerHTML = '0';
            } else {
              document.getElementById('comment-total').innerHTML = value;
            }
          },
        );
      });
    });

    const addForm = document.getElementById('addForm');
    addForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const userName = document.getElementById('user-name').value;
      const userComment = document.getElementById('user-comment').value;
      const addCommentResponse = addComment(itemID, userName, userComment);

      addCommentResponse.then(
        (value) => {
          if (value === 'Created') {
            loadComment(itemID);
            const totalComments = totalComment(itemID);
            totalComments.then(
              (value) => {
                document.getElementById('comment-total').innerHTML = value;
              },
            );
          } else {
            alert('Comment post fail! Please try again...');
          }

          addForm.reset();
        },
      );
    });
  },
);

const closeComment = document.getElementById('close-comment-popup');
closeComment.addEventListener('click', () => {
  document.getElementById('comment-popup').style.display = 'none';
  document.body.classList.remove('no-scroll');
});