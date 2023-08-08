import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'

function PageNav() {
  return (
    <Navbar className='navbg' data-bs-theme='dark' fixed="top" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Image
            alt="image of Austin Waller"
            src='src/assets/images/IMG_2301.jpg'
            height={"40"}
            rounded
          />{' '}
          Austin Waller
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">About Me</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/resume">Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PageNav;