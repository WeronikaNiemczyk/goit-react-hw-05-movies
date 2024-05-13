import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReview } from './Api';

const Reviews = () => {
  const { movieId } = useParams();
  const [review, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const movieRevievs = await fetchReview(movieId);
        // console.log('movieReviews:', review);
        setReviews(movieRevievs);
      } catch {
        console.log('error');
      }
    };
    fetchMovieReviews();
  }, [movieId]);

  return (
    <>
      {review?.map(({ id, author, content }) => (
        <div key={id}>
          <h3>Author: {author}</h3>
          <p>{content}</p>
        </div>
      ))}
    </>
  );
};
export default Reviews;
