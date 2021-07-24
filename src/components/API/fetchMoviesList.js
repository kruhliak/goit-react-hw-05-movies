import axios from 'axios';

async function fetchMoviesList(value) {
  const KEY = '371671d652209dac560f3fae909c95c7';
  axios.defaults.baseURL = 'https://api.themoviedb.org/';
  const response = await axios.get(
    `3/search/movie?api_key=${KEY}&language=en-US&page=1&query=${value}`,
  );

  return response.data.results;
}

export default fetchMoviesList;
