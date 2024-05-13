import { useState } from 'react';
import { Button } from './Layout.styled';
import { Input } from './Movies.styled';
import { fetchKeyWords } from './Api';
import { MovieList } from './MovieList';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  // const id = searchParams.get('movieId');
  console.log('id', searchParams);

  // console.log('query', query);
  const onChange = event => {
    setQuery(event.target.value);
    setSearchParams({ query: event.target.value });
  };

  const searchMovies = async () => {
    try {
      const results = await fetchKeyWords(query);
      setMovies(results);
    } catch (error) {
      console.error('Error searching for movies:', error);
    }
  };

  return (
    <>
      <div>
        <Input
          value={query}
          type="text"
          placeholder="Type..."
          onChange={onChange}
        />
        <Button onClick={searchMovies}>Search</Button>
      </div>
      <MovieList movies={movies} />
    </>
  );
};
export default Movies;
