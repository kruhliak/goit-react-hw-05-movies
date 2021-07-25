import axios from 'axios';
import { useEffect, useState } from 'react';
import MoviesList from '../MoviesList/MoviesList';

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function API() {
      const KEY = '371671d652209dac560f3fae909c95c7';
      axios.defaults.baseURL = 'https://api.themoviedb.org/';
      const response = await axios.get(`3/trending/movie/day?api_key=${KEY}`);

      setTrendingMovies(response.data.results);
    }
    API();
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList movies={trendingMovies} />
    </div>
  );
}
