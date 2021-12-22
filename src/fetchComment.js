import axios from 'axios';

const fetchComments = async (id) => {
  try {
    const response = axios.get(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/9saeNJzYKOKWWOIJdrpS/comments?item_id=item${id}
        `);
    const comment = await response;
    return comment.data;
  } catch (error) {
    throw new Error('No comment found for this item');
  }
};
export default fetchComments;