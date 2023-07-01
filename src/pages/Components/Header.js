import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiFillHome, AiFillDashboard, AiOutlineWallet } from "react-icons/ai";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { persistor } from "../../store";
import { setUser } from "./signin/userSlice";
export const Header = () => {
  const { user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  const handleSignOut = () => {
    persistor.purge().then(() => {
      console.log("log out");
    });

    dispatch(setUser({}));
  };
  return (
    <Navbar expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand to="/">Library</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?._id ? (
              <>
                <Link to="/" className="nav-link">
                  <AiFillHome /> Home
                </Link>
                <Link to="/dashboard" className="nav-link">
                  <AiFillDashboard /> Dashboard
                </Link>
                <Link
                  to="#signout"
                  className="nav-link"
                  onClick={handleSignOut}
                >
                  <BiLogOut />
                  Sign out
                </Link>
              </>
            ) : (
              <>
                <Link to="/signin" className="nav-link">
                  <BiLogIn />
                  Sign in
                </Link>
                <Link to="/new-user" className="nav-link">
                  <AiOutlineWallet />
                  Sign up
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
