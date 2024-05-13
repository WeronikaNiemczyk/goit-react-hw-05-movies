import { useState, useEffect } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchDetails } from './Api';
import { Button } from './Layout.styled';
import { DetailsContainer, Description, Image } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();

  const backLinkHref = location.state?.from || '/';
  console.log('backlink', backLinkHref);

  useEffect(() => {
    const fetchDataDetails = async () => {
      try {
        const moviesDetails = await fetchDetails(movieId);
        // console.log('movies:', moviesDetails);
        setMovieDetails(moviesDetails);
      } catch {
        console.log('error');
      }
    };
    fetchDataDetails();
  }, [movieId]);
  //   console.log('details', movieDetails);
  return (
    <>
      <Link to={backLinkHref}>
        <Button>Go Back</Button>
      </Link>
      {movieDetails?.map(
        ({
          title,
          id,
          poster_path,
          release_date,
          vote_average,
          overview,
          genres,
          tagline,
        }) => (
          <DetailsContainer key={id}>
            <Image
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={tagline}
            />
            <Description>
              <h2>
                {title} {''}({release_date.slice(0, 4)})
              </h2>
              <p>User score: {vote_average}</p>
              <h3>Overview:</h3>
              <p>{overview}</p>
              <h3>Genres:</h3>
              <p>
                {genres.map(({ id, name }) => (
                  <span key={id}> {name}</span>
                ))}
              </p>
            </Description>
          </DetailsContainer>
        )
      )}
      <div>
        <h3>Additional information</h3>
        <Link to="cast">
          <Button>Cast</Button>
        </Link>
        <Link to="reviews">
          <Button>Reviews</Button>
        </Link>
        <Outlet />
      </div>
    </>
  );
};
export default MovieDetails;
