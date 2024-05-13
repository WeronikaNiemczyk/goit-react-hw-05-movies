import { Container, Header, Button } from './Layout.styled';
import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Container>
        <Header>
          <nav>
            <Link to="/" end>
              <Button>Home</Button>
            </Link>
            <Link to="/movies">
              <Button>Movies</Button>
            </Link>
          </nav>
        </Header>
        <Outlet />
      </Container>
    </>
  );
};
