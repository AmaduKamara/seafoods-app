import getFoods from './utils.js';
import fetchLikes from './fetchLikes.js';
import displayFoods from './displayFoods.js';
import commentPopModal from './commentModal.js';
import fetchComments from './fetchComment.js';

const foodsList = document.querySelector('.foods-list');

const loadFoods = async () => {
  const foods = await getFoods();

  // Fetch likes
  const likes = await fetchLikes();

  if (foods.meals) {
    foods.meals.forEach((food, index) => {
      // Display food data to the homepage
      foodsList.innerHTML += displayFoods(food, index, likes);

      // Liking a food item
      const likeButtons = document.querySelectorAll('.like-button');
      const likeHolder = document.querySelectorAll('.like');
      likeButtons.forEach((likeButton, index) => {
        likeButton.addEventListener('click', async () => {
          await fetch(
            'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/9saeNJzYKOKWWOIJdrpS/likes',
            {
              method: 'POST',
              body: JSON.stringify({
                item_id: `item${index}`,
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            }
          );
          likeHolder[index].innerHTML = `${likes[index].likes + 1}  Likes`;
        });
      });
    });
  } else {
    foodsList.innerHTML += `
      <div>
        <h3 class="text-orange-500 text-2xl">Sorry, no food available to display.</h3>
      </div>
    `;
  }

  const commentBtns = document.querySelectorAll('#comment-button');
  const commentModal = document.querySelector('.comment-modal');

  commentBtns.forEach((comment) => {
    const dataSet = comment.getAttribute('data-set');

    comment.addEventListener('click', async () => {
      const food = foods.meals[dataSet];

      commentModal.classList.remove('hidden');

      // fetchComments(dataSet)
      const comments = await fetchComments(dataSet);

      // Render content on the modal
      commentModal.innerHTML = commentPopModal(food);

      // Parse comment details into the comment wrapper
      const commentsData = document.querySelector('.comments');
      comments.forEach((comment) => {
        commentsData.innerHTML += `
          <li class="my-2">
            <span class="font-semibold">${comment.username}: </span>
            <span class="text-gray-500">${comment.creation_date}</span> <br />
            <span class="text-gray-700 text-sm"
              >${comment.comment}</span
            >
          </li>
        `;
      });

      // Close Modal
      const closeModal = document.getElementById('close-modal');
      closeModal.addEventListener('click', () => {
        commentModal.classList.add('hidden');
      });
    });
  });
};

loadFoods();
