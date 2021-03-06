const displayFoods = (food, index, likes) => `
      <!-- Food Card -->
      <div
        class="card w-full shadow-xl rounded-lg pb-8 overflow-hidden my-3" id="${
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
          <div class="flex flex-col items-center w-24">
            <i class="far fa-heart text-xl hover:text-orange-500 like-button cursor-pointer"></i>
            <span class="mx-3 like text-center">${likes[index].likes} likes</span>
          </div>
          <!-- <i class="fas fa-heart"></i> -->
        </div>
        <div class="flex justify-center mt-4">
          <button
            class="
              py-2
              px-10
              border border-orange-500
              rounded-full
              text-orange-500
              hover:bg-orange-500 hover:text-orange-100
              text-lg
            "
            id='comment-button'
            data-set="${index}"
          >
            Comment
          </button>
        </div>
      </div>
    `;

export default displayFoods;
