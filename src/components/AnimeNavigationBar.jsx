import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';

function AnimeNavigationBar() {
  const navigate = useNavigate()
  return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
            <Nav.Link onClick={() => navigate('/anime')}>All Anime</Nav.Link>
            <Nav.Link onClick={() => navigate('/anime/airing')}>Airing</Nav.Link>
            <Nav.Link onClick={() => navigate('/anime/upcoming')}>Up Coming</Nav.Link>
            <Nav.Link onClick={() => navigate('/anime/tv')}>Tv</Nav.Link>
            <Nav.Link onClick={() => navigate('/anime/movie')}>Movie</Nav.Link>
            <Nav.Link onClick={() => navigate('/anime/ova')}>OVA</Nav.Link>
            <Nav.Link onClick={() => navigate('/anime/ona')}>ONA</Nav.Link>
            <Nav.Link onClick={() => navigate('/anime/special')}>Special</Nav.Link>
            <Nav.Link onClick={() => navigate('/anime/popular')}>Popular</Nav.Link>
            <Nav.Link onClick={() => navigate('/anime/favorite')}>Favorite</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </>
  );
}

export default AnimeNavigationBar;