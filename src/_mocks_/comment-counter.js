import fetch from 'cross-fetch';

const commentCounter = async (id) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/9saeNJzYKOKWWOIJdrpS/comments?item_id=item${id}
  `);
  const comments = await response.json();
  return comments;
};

export default commentCounter;