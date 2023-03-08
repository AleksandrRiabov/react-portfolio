import { Navbar, Container, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import cv from '../assets/Aleksandr_Riabov_CV.pdf';

const Header = () => {
  return (
    <Navbar className="bg-custom-primary" expand="md">
      <Container >
        <LinkContainer to='/'>
          <Navbar.Brand >Aleksandr Riabov</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <LinkContainer to='/'>
              <Nav.Link className='color-custom-light' >Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/projects'>
              <Nav.Link className='color-custom-light' >Projects</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/contact'>
              <Nav.Link className='color-custom-light' >Contact</Nav.Link>
            </LinkContainer>
            <Nav.Link className='color-custom-light' href={cv}>Resume</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header



