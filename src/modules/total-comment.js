const totalComment = async (itemid) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  const url = ''.concat('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/wjqTUeCHluSF6iOLKc2j/comments?item_id=', itemid);
  // const request = new Request(url);

  const response = await fetch(url, requestOptions);
  const commentList = await response.text();
  const commentListObj = JSON.parse(commentList);

  return commentListObj.length;
};

export default totalComment;