import axios from 'axios';

async function fetchReviews(id) {
  const KEY = '371671d652209dac560f3fae909c95c7';
  axios.defaults.baseURL = 'https://api.themoviedb.org/';
  const response = await axios.get(
    `3/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`,
  );
  return response.data.results;
}

export default fetchReviews;
