import getFoods from './utils.js';

const foodsList = document.querySelector('.foods-list');

const loadFoods = async () => {
  const foods = await getFoods();
  if (foods.meals) {
    foods.meals.forEach((food, index) => {
      foodsList.innerHTML += `
      <!-- Food Card -->
      <div
        class="card w-3/12 shadow-xl rounded-lg pb-8 overflow-hidden my-10 mx-6" id="${
          food.idMeal
        }"
      >
        <div class="w-full min-h-64">
          <img
            src="${food.strMealThumb}"
            alt="Food"
          />
        </div>
        <div class="p-5 my-4 flex justify-between items-center">
          <h2 class="text-xl text-orange-700">${food.strMeal.slice(0, 24)}</h2>
          <div class="flex flex-col items-center">
            <i class="far fa-heart text-xl hover:text-orange-500"></i>
            <span class="mx-3">5 likes</span>
          </div>
          <!-- <i class="fas fa-heart"></i> -->
        </div>
        <div class="flex justify-center mt-4">
          <button
            class="
              py-2
              px-16
              border border-orange-500
              rounded-full
              text-orange-500
              hover:bg-orange-500 hover:text-orange-100
              text-lg
            "
            id='comment-button'
            data-set="${index}"
          >
            Comments
          </button>
        </div>
      </div>
    `;
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

    comment.addEventListener('click', async (e) => {
      const food = foods.meals[dataSet];

      commentModal.classList.remove('hidden');

      // Render content on the modal
      commentModal.innerHTML = `
        <div class="meal-details w-3/5 my-10 bg-white rounded-lg p-2 z-50 opacity-100">
          <!-- close btn -->
          <button type="button" class="float-right mr-3" id="close-modal">
            <i class="fa fa-close text-2xl hover:text-red-300"></i>
          </button>

          <!-- Meal contents -->
          <div class="meal-details-content flex">
            <div class="w-3/5 pt-2 pb-4 px-12">
              <div class="recipe-meal-image flex justify-center mt-5">
                <img
                  src="${food.strMealThumb}"
                  alt="Meal name"
                  class="rounded-lg shadow-lg"
                  width="480"
                />
              </div>
              <div class="mt-2">
                <div class="flex justify-between items-center my-4">
                  <h3 class="text-3xl text-orange-500 mt-5 mb-2">${food.strMeal}</h3>
                  <div class="flex flex-col justify-center items-center mt-3">
                    <i class="far fa-heart text-xl hover:text-orange-500"></i>
                    <span class="mx-3 w-16">5 likes</span>
                  </div>
                </div>
                
              </div>
            </div>
            <div class="w-2/5 p-6">
              <h3 class="text-2xl text-orange-600">Comments:</h3>
              <div >
                <ul class="max-h-64 overflow-y-auto p-3">
                  <li class="my-2">
                    <span class="font-semibold">Amadu Kamara: </span>
                    <span class="text-gray-500">21/12/2021</span> <br />
                    <span class="text-gray-700 text-sm"
                      >Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quo, assumenda.</span
                    >
                  </li>
                </ul>
                <!-- Comment form-->
                <form class="border p-3 mt-10 rounded">
                  <h4>Place your comment below</h4>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    class="border my-2 py-2 px-3 w-full"
                  />
                  <textarea
                    placeholder="Comment..."
                    id="comment-text"
                    cols="20"
                    rows="3"
                    class="border my-2 py-2 px-3 w-full"
                  ></textarea>
                  <button type="submit" class="bg-orange-500 py-2 px-10 w-full text-white rounded-full">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      `;

      // Close Modal
      const closeModal = document.getElementById('close-modal');
      closeModal.addEventListener('click', () => {
        commentModal.classList.add('hidden');
      });
    });
  });
};

loadFoods();
