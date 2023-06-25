import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiFillHome, AiFillDashboard } from "react-icons/ai";

export const Header = () => {
  return (
    <Navbar expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">
              <AiFillHome /> Home
            </Nav.Link>
            <Nav.Link href="#dashboard">
              <AiFillDashboard /> Dashboard
            </Nav.Link>
            <Nav.Link href="#signin">Sign in</Nav.Link>
            <Nav.Link href="#signup">Sign up</Nav.Link>
            <Nav.Link href="#signout">Sign out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
