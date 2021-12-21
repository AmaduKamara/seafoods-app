import axios from 'axios'

const baseUrl = 'www.themealdb.com/api/json/v1/1/lookup.php?i=';

const fetchFood = (id) => {
    const response = axios.get(`${baseUrl}${id}`)
    console.log(response.data);
    return response
}

export default fetchFood;
