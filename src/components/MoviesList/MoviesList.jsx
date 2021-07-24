import { Link } from 'react-router-dom';
import { List } from './MoviesList.styles';

function MoviesList({ movies, url = 'movies', searchParams }) {
  return (
    <>
      <List>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link
              to={{
                pathname: `/${url}/${movie.id}`,
                state: { params: searchParams },
              }}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </List>
    </>
  );
}

export default MoviesList;
