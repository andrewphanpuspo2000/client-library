import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { useSelector } from "react-redux";

export const UserLayout = ({ children, title }) => {
  const { user } = useSelector((state) => state.userInfo);
  return (
    <div className="d-flex">
      <div className="left-menu bg-dark text-light">
        <div className="text-center mt-3">{user?.role?.toUpperCase()}</div>
        <hr />
        <ul className="p-0 layout-padding">
          <li className="list-unstyled ">
            <Link to="/dashboard" className="nav-link">
              DashBoard
            </Link>
          </li>
          <li className="list-unstyled mt-3 ">
            <Link to={`/borrowHistory/${user._id}`} className="nav-link">
              Borrow History
            </Link>
          </li>
          <li className="list-unstyled mt-3 ">
            <Link to="/book" className="nav-link">
              Books
            </Link>
          </li>
          <li className="list-unstyled mt-3 ">
            <Link to="/student" className="nav-link">
              Student
            </Link>
          </li>
          <hr />
          {user?.role === "admin" && (
            <li className="list-unstyled mt-3 ">
              <Link to="/new-user" className="nav-link">
                Add Admin
              </Link>
            </li>
          )}

          <li className="list-unstyled mt-3 ">
            <Link to="/profile" className="nav-link">
              Profile
            </Link>
          </li>
        </ul>
      </div>
      <div className="rigth-page w-100">
        <Header />
        <Container className="main">
          <h1 className="mt-2">{title}</h1>
          <hr />
          {children}
        </Container>
        <Footer />
      </div>
    </div>
  );
};
