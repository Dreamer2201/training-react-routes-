const BASE_URL = 'https://api.themoviedb.org/3/';
const myAPIkey = '489c503ccf1d5d4070a54da171b2b283';

export const fetchTrendingMovies = () => {
    return fetch(`${BASE_URL}trending/all/day?api_key=${myAPIkey}`)
        .then((response) => response.json())
        .then((data) => data);
}
// const fetchRequest = async (page) => {
//     const response = await axios.get(`${BASE_URL}trending/all/day?api_key=${myAPIkey}&page=${page}`);
//     return response.data;
// }

