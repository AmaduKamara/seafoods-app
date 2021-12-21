import axios from 'axios';
// MealDB URL
const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';

const getFoods = async () => {
  const response = await axios.get(url);
  return response.data;
};

export default getFoods;
