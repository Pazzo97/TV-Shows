async function addComment(itemid, usrName, usrComment) {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/wjqTUeCHluSF6iOLKc2j/comments';

  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify({
    item_id: itemid,
    username: usrName,
    comment: usrComment,
  });

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  const response = await fetch(url, requestOptions);
  const myCommentResult = await response.text();

  return myCommentResult;
}

export default addComment;