import axios from 'axios';

const fetchLikes = async () => {
  const response = await axios.get(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/9saeNJzYKOKWWOIJdrpS/likes'
  );
  const likes = await response.data;
  return likes;
};

export default fetchLikes;
