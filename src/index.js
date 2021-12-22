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
      foodsList.innerHTML += displayFoods(food, index, likes);
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
