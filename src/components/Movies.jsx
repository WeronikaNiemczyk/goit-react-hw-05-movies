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
  const movieName = searchParams.get('query') || '';
  // console.log('id', searchParams);

  // console.log('query', query);
  const onChange = event => {
    setQuery(event.target.value);
    setSearchParams({ query: event.target.value });
  };

  const searchMovies = async () => {
    if (!query) return;
    try {
      const results = await fetchKeyWords(movieName);
      setMovies(results);
    } catch (error) {
      console.error('Error searching for movies:', error);
    }
  };

  return (
    <>
      <div>
        <Input
          value={movieName}
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
