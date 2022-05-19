const videoDetails = (obj, x) => {
  const itemImage = document.getElementById('item-image');
  const itemName = document.getElementById('item-name');
  const itemSeason = document.getElementById('item-season');
  const itemEpisode = document.getElementById('item-episode');
  const itemRuntime = document.getElementById('item-runtime');
  const itemRating = document.getElementById('item-rating');

  itemImage.innerHTML = `<img src="${obj[x].image.original}" alt="Item picture">`;
  itemName.innerHTML = obj[x].name;
  itemSeason.innerHTML = obj[x].season;
  itemEpisode.innerHTML = obj[x].number;
  itemRuntime.innerHTML = obj[x].runtime;
  itemRating.innerHTML = obj[x].rating.average;
};

export default videoDetails;