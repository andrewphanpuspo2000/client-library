import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiFillHome, AiFillDashboard, AiOutlineWallet } from "react-icons/ai";
import { BiLogIn, BiLogOut } from "react-icons/bi";

export const Header = () => {
  return (
    <Navbar expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Library</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">
              <AiFillHome /> Home
            </Nav.Link>
            <Nav.Link href="#dashboard">
              <AiFillDashboard /> Dashboard
            </Nav.Link>
            <Nav.Link href="/signin">
              <BiLogIn />
              Sign in
            </Nav.Link>
            <Nav.Link href="/new-user">
              <AiOutlineWallet />
              Sign up
            </Nav.Link>
            <Nav.Link href="#signout">
              <BiLogOut />
              Sign out
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
