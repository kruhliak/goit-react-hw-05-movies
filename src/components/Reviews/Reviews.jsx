import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchReviews from '../API/fetchReviews';
import { List } from '../Cast/Cast.styles';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchReviews(movieId).then(r => setReviews(r));
  }, [movieId]);

  return (
    <>
      {reviews &&
        (reviews.length > 0 ? (
          <List>
            {reviews.map(review => (
              <li key={review.id}>
                <p>
                  <span>Author:</span> {review.author}
                </p>
                <p>{review.content}</p>
              </li>
            ))}
          </List>
        ) : (
          <p>We don't have any reviews for this movie.</p>
        ))}
    </>
  );
}
