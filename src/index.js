import getFoods from './utils.js';

const foodsList = document.querySelector('.foods-list');

const loadFoods = async () => {
  const foods = await getFoods();
  console.log(foods);
  if (foods.meals) {
    foods.meals.forEach((food) => {
      foodsList.innerHTML += `
      <!-- Food Card -->
      <div
        class="card w-3/12 shadow-xl rounded-lg pb-8 overflow-hidden my-10 mx-6" id="${food.idMeal}"
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
};

loadFoods();
