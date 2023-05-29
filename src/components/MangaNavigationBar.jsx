import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from 'react-router-dom';

function MangaNavigationBar() {
  const navigate = useNavigate()
  return (
        <div className="mangaNavBar">
        <Navbar className="mangaNavBarContainer" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand>
          Manga
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
            <Nav.Link onClick={() => navigate('/manga')}>All Manga</Nav.Link>
            <Nav.Link onClick={() => navigate('/manga/top')}>Manga</Nav.Link>
            <Nav.Link onClick={() => navigate('/manga/oneshot')}>Oneshot</Nav.Link>
            <Nav.Link onClick={() => navigate('/manga/doujin')}>Doujinshi</Nav.Link>
            <Nav.Link onClick={() => navigate('/manga/lightnovel')}>Light Novel</Nav.Link>
            <Nav.Link onClick={() => navigate('/manga/novel')}>Novel</Nav.Link>
            <Nav.Link onClick={() => navigate('/manga/manhwa')}>Manhwa</Nav.Link>
            <Nav.Link onClick={() => navigate('/manga/manhua')}>Manhua</Nav.Link>
            <Nav.Link onClick={() => navigate('/manga/popular')}>Popular</Nav.Link>
            <Nav.Link onClick={() => navigate('/manga/favorite')}>Favorite</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </div>
  );
}

export default MangaNavigationBar;