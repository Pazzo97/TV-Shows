const loadLikes = async () => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/wjqTUeCHluSF6iOLKc2j/likes';
  const request = new Request(url);

  const response = await fetch(request, requestOptions);
  const likes = await response.text();
  const likesObj = JSON.parse(likes);

  return likesObj;
};

export default loadLikes;
