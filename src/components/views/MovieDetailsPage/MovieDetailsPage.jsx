import {
  Link,
  useParams,
  useRouteMatch,
  Route,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import Cast from '../../Cast/Cast';
import Reviews from '../../Reviews/Reviews';
import fetchMovie from '../../API/fetchMovie';
import { ThumbMovieInfo, ThumbInformation } from './MovieDetailsPage.styles';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const { url, path } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  const search = useRef(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current === true) {
      if (!search.current) {
        search.current = location.state?.params;
      }
    }
    isFirstRender.current = false;
  });

  useEffect(() => {
    fetchMovie(movieId).then(r => setMovie(r));
  }, [movieId]);

  const onBtnClick = () => {
    if (search.current?.search) {
      history.push(`${search.current.pathname}${search.current?.search}`);
    }
    history.push('/');
  };

  return (
    <div>
      <button type="button" onClick={onBtnClick}>
        GO BACK
      </button>

      {movie && (
        <div>
          <ThumbMovieInfo>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt={movie.original_title}
            />
            <div>
              <h1>{movie.original_title}</h1>
              <p>User scope: {movie.vote_average * 10}%</p>
              <h2> Overview</h2>
              <p> {movie.overview}</p>
              <h3>Genres</h3>
              <ul>
                {movie.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </ul>
            </div>
          </ThumbMovieInfo>

          <ThumbInformation>
            <h3>Additional Information:</h3>
            <Link
              to={{
                pathname: `${url}/cast`,
              }}
            >
              Cast
            </Link>
            <Link to={`${url}/reviews`}>Reviews</Link>
          </ThumbInformation>

          <Route path={`${path}/cast`}>
            <Cast />
          </Route>

          <Route path={`${path}/reviews`}>
            <Reviews />
          </Route>
        </div>
      )}
    </div>
  );
}
