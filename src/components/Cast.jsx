import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from './Api';
import { SmallImage } from './MovieDetails.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const movieCast = await fetchCast(movieId);
        // console.log('movieCast:', cast);
        setCast(movieCast);
      } catch {
        console.log('error');
      }
    };
    fetchMovieCast();
  }, [movieId]);
  return (
    <>
      {cast?.map(({ id, cast }) => (
        <div key={id}>
          {cast.map(({ name, character, profile_path }) => (
            <ul>
              <SmallImage
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
              />
              <h4>Name: {name}</h4>
              <h5>Character: {character} </h5>
            </ul>
          ))}
        </div>
      ))}
    </>
  );
};
export default Cast;
