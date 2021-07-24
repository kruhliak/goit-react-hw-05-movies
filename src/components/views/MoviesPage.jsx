import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import MoviesList from '../MoviesList/MoviesList';
import fetchMoviesList from '../API/fetchMoviesList';

export default function MoviesPage() {
  const [searchValue, setSearchValue] = useState('');
  const [value, setValue] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);

  const history = useHistory();
  const location = useLocation();
  const searchMovieName = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (searchValue) {
      return;
    }
    setSearchValue(searchMovieName);
  }, [searchMovieName, searchValue]);

  const handleSubmitForm = e => {
    e.preventDefault();
    setSearchValue(value);
    history.push({ ...location, search: `?query=${value}` });
    setValue('');
  };

  useEffect(() => {
    if (searchMovieName) {
      fetchMoviesList(searchValue).then(r => setSearchMovies(r));
    }
  }, [searchMovieName, searchValue]);

  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <input
          type="text"
          onChange={e => setValue(e.target.value)}
          value={value}
          required
          autoComplete="off"
        />
        <button type="submit">Search</button>
      </form>

      <MoviesList movies={searchMovies} searchParams={location} />
    </>
  );
}
