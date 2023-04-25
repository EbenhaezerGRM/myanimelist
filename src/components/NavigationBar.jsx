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
              <NavDropdown.Item onClick={() => navigate('/anime')}>Top Anime</NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/anime/season')}>Season</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Search</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Manga" id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={() => navigate('/')}>Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Something</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link onClick={() => navigate('/random')}>Random</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;