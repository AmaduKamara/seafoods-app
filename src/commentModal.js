const commentModal = (food) => `
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
            </div>
            
          </div>
        </div>
        <div class="w-2/5 p-6">
          <h3 class="text-2xl text-orange-600">Comments(2)</h3>
          <div >
            <ul class="max-h-64 overflow-y-auto p-3 comments"></ul>
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

export default commentModal;
