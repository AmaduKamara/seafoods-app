import axios from 'axios';
// MealDB URL
// const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=53043';

const getFoodDetails = async (id) => {
  const response = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  );
  // console.log(response.data.meals);
  return response.data.meals;
};

const commentModal = async (food, id) => {
  const details = await getFoodDetails(id);
  const modal = `
    <div class="meal-details w-full mx-5 md:w-1/3 h-5/6 bg-white rounded-lg p-2 z-50 opacity-100 overflow-y-auto relative">
      <!-- close btn -->
      <button type="button" class="float-right mr-1 absolute right-0 top-0 sticky" id="close-modal">
        <i class="fa fa-close text-2xl text-orange-500 hover:text-red-300"></i>
      </button>

      <!-- Meal contents -->
      <div class="meal-details-content">

        <div class="w-full pt-2 pb-4 px-5">
          <div class="recipe-meal-image flex justify-center mt-2">
            <img
              src="${food.strMealThumb}"
              alt="Meal name"
              class="rounded-lg shadow-lg"
              width="350"
            />
          </div>
          <div class="mt-2">
            <div class=" my-1">
              <h3 class="text-center text-3xl md:text-4xl text-orange-500 mt-5 mb-2">${
  food.strMeal
}</h3>
              <h4 class="text-left text-xl md:text-3xl text-orange-700 mt-5 mb-2">Ingredients:</h4>
              
              <i class="text-left text-xs md:text-2xl mt-5 mb-2 text-gray-500">${
  details[0].strIngredient1
},</i>
              <i class="text-left text-xs md:text-2xl mt-5 mb-2 mx-2 text-gray-500">${
  details[0].strIngredient2
},</i>
              <i class="text-left text-xs md:text-2xl mt-5 mb-2 mx-2 text-gray-500">${
  details[0].strIngredient3
},</i>
              <i class="text-left text-xs md:text-2xl mt-5 mb-2 text-gray-500">${
  details[0].strIngredient4
}.</i>

              <h4 class="text-left text-xl md:text-3xl text-orange-700 mt-5 mb-2">Instructions:</h4>
              <p class="text-left text-xs md:text-2xl mt-5 mb-2 text-gray-500">${details[0].strInstructions.slice(
    0,
    150,
  )}</p>
            </div>
          </div>
        </div>

        <div class="w-full p-3">
          <h3 class="text-2xl text-orange-600">Comments(<span class="font-semibold comment-counter">0</span>)</h3>
          <div>
            <ul class="max-h-64 overflow-y-auto p-3 comments"></ul>
            <!-- Comment form-->
            <form class="border p-3 mt-1 rounded">
              <h4>Place your comment below</h4>
              <input
                type="text"
                placeholder="Enter your name"
                class="border my-2 py-2 px-3 w-full focus:outline-orange-500"
                id="user-name"
                required
              />
              <textarea
                placeholder="Comment..."
                id="comment-text"
                cols="20"
                rows="2"
                class="border my-2 py-2 px-3 w-full focus:outline-orange-500" required
              ></textarea>
              <button type="submit" class="bg-orange-500 py-2 px-10 w-full text-white rounded-full">Submit</button>
            </form>
          </div>
        </div>
        
      </div>
    </div>
  `;
  return modal;
};

export default commentModal;
