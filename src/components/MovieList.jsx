import { Link } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  //   console.log('moovieslist', movies);
  return (
    <>
      <div>
        <ul>
          {movies?.map(({ id, title }) => (
            <div key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};
