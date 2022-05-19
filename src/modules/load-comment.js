const list = document.getElementById('comment-list');

const populateComments = (obj) => {
  list.innerHTML = '';
  const div = [];
  const template = [];
  if (obj.length > 0) {
    for (let i = 0; i < obj.length; i += 1) {
      div[i] = document.createElement('div');
      template[i] = `${obj[i].creation_date} ${obj[i].username}: ${obj[i].comment}`;

      div[i].innerHTML = template[i];
      list.appendChild(div[i]);
    }
  } else {
    const div = document.createElement('div');
    const template = '<div>--- Be the first to comment ---</div>';

    div.innerHTML = template;
    list.appendChild(div);
  }
};

const loadComment = async (itemid) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  const url = ''.concat('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/wjqTUeCHluSF6iOLKc2j/comments?item_id=', itemid);
  const request = new Request(url);

  const response = await fetch(request, requestOptions);
  const commentList = await response.text();
  const commentListObj = JSON.parse(commentList);

  populateComments(commentListObj);
};

export default loadComment;