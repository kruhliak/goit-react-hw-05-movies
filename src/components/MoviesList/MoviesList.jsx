import { Link } from 'react-router-dom';
import { List } from './MoviesList.styles';

function MoviesList({ movies, url = 'movies' }) {
  return (
    <>
      <List>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/${url}/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </List>
    </>
  );
}

export default MoviesList;
