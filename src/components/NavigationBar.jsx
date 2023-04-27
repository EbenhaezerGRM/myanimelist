import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo/logo64.webp'
import { useNavigate } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavigationBar() {
  const navigate = useNavigate()
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand>
        <img
              alt= ""
              src= {logo}
              width="179"
              height="32"
              className="d-inline-block align-top"
            />{''}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
            <NavDropdown title="Anime" id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={() => navigate('/anime')}>Anime</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => navigate('/anime/season')}>Season</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={() => navigate('/manga')}>Manga</Nav.Link>
            <Nav.Link onClick={() => navigate('/random')}>Random</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={() => navigate('/search')}>Search</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;