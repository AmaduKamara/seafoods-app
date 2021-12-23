import fetch from 'cross-fetch';

const itemsCounter = async () => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
  );
  const jsonData = await response.json();
  return jsonData.meals;
};

export default itemsCounter;
