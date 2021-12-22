import getFoods from './utils.js';
import fetchLikes from './fetchLikes';
import displayFoods from './displayFoods';
import commentPopModal from './commentModal';

const foodsList = document.querySelector('.foods-list');

const loadFoods = async () => {
  const foods = await getFoods();

  // Fetch likes
  const likes = await fetchLikes();

  console.log(likes);

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

      // Render content on the modal
      commentModal.innerHTML = commentPopModal(food, likes);

      // Close Modal
      const closeModal = document.getElementById('close-modal');
      closeModal.addEventListener('click', () => {
        commentModal.classList.add('hidden');
      });
    });
  });
};

loadFoods();
