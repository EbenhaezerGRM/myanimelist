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
            <Nav.Link>Airing</Nav.Link>
            <Nav.Link onClick={() => navigate('/anime/upcoming')}>Up Coming</Nav.Link>
            <Nav.Link>Tv</Nav.Link>
            <Nav.Link>Movie</Nav.Link>
            <Nav.Link>OVA</Nav.Link>
            <Nav.Link>ONA</Nav.Link>
            <Nav.Link>Special</Nav.Link>
            <Nav.Link>Popular</Nav.Link>
            <Nav.Link>Favorite</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </>
  );
}

export default AnimeNavigationBar;