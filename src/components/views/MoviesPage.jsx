import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import MoviesList from '../MoviesList/MoviesList';
import fetchMoviesList from '../API/fetchMoviesList';
import Fallback from '../Loader/Loader';
import { toast } from 'react-toastify';

export default function MoviesPage() {
  const [searchValue, setSearchValue] = useState('');
  const [value, setValue] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  const history = useHistory();
  const location = useLocation();
  const searchMovieName = new URLSearchParams(location.search).get('query');

  const toggleLoader = () => {
    setShowLoader(prevState => !prevState);
  };

  const displayToast = e =>
    toast.error(`${e}`, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  useEffect(() => {
    toggleLoader();
    if (searchValue) {
      toggleLoader();
      return;
    }
    toggleLoader();
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
      fetchMoviesList(searchValue)
        .then(r => setSearchMovies(r))
        .catch(e => displayToast(e));
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
      {showLoader && <Fallback />}
      {searchMovies.length !== 0 && (
        <MoviesList movies={searchMovies} searchParams={location} />
      )}
    </>
  );
}
