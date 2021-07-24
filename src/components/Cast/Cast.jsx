import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import defaultImage from '../../defaultImages.png';
import fetchCast from '../API/fetchCast';
import { List } from './Cast.styles';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchCast(movieId).then(r => setCast(r));
  }, [movieId]);

  return (
    <>
      {cast && (
        <List>
          {cast.map(cast => (
            <li key={cast.id}>
              <img
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                    : `${defaultImage}`
                }
                alt={cast.name}
              />

              <p>
                <span>Actor name:</span> {cast.name}
              </p>
              <p>
                <span>Character:</span> {cast.character}
              </p>
            </li>
          ))}
        </List>
      )}
    </>
  );
}
