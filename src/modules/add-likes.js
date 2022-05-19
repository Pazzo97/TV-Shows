const addLikes = async (itemid) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/wjqTUeCHluSF6iOLKc2j/likes';

  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify({
    item_id: itemid,
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  const response = await fetch(url, requestOptions);
  const myLikeResult = await response.text();

  return myLikeResult;
};

export default addLikes;