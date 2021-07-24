import axios from 'axios';

async function fetchCast(id) {
  const KEY = '371671d652209dac560f3fae909c95c7';
  axios.defaults.baseURL = 'https://api.themoviedb.org/';
  const response = await axios.get(
    `3/movie/${id}/credits?api_key=${KEY}&language=en-US`,
  );
  return response.data.cast;
}

export default fetchCast;
