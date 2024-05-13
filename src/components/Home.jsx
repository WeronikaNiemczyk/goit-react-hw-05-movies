import { useEffect, useState } from 'react';
import { fetchTrending } from './Api';
import { MovieList } from './MovieList';
import { Outlet } from 'react-router-dom';
import { Heading } from './Home.styled';

const Home = () => {
  const [getTrending, setGetTrending] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await fetchTrending();
        // console.log('movies:', movies);
        setGetTrending(movies);
      } catch {
        console.log('error');
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div>
        <Heading>Trending Today</Heading>
        <MovieList movies={getTrending} />
      </div>
      <Outlet />
    </>
  );
};
export default Home;
