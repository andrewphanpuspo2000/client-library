import "./App.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Components/home";
import { Signup } from "./pages/Components/signin/Signup";
import { Signin } from "./pages/Components/signin/Signin";
import { Dashboard } from "./pages/Components/Dashboard/Dashboard";
import { PrivateRoute } from "./pages/Components/private-router/PrivateRoute";
import { BorrowBook } from "./pages/Borrow-Book/BorrowBook";
import { Books } from "./pages/Books";
import { Student } from "./pages/Student";
import { Profile } from "./pages/Profile";
import { NewBookForm } from "./pages/Components/Book-com/NewBookForm";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBook } from "./pages/Components/Book-com/bookAction";
import { EditBook } from "./pages/Components/Book-com/EditBook";
import { BookLanding } from "./pages/Components/Book-com/BookLanding";
import { Comment } from "./pages/Components/Book-com/Comment";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBook());
  }, [dispatch]);
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-user" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/borrowHistory/:_id"
          element={
            <PrivateRoute>
              <BorrowBook />
            </PrivateRoute>
          }
        />
        <Route
          path="/book"
          element={
            <PrivateRoute>
              <Books />
            </PrivateRoute>
          }
        />
        <Route
          path="/student"
          element={
            <PrivateRoute>
              <Student />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/comment"
          element={
            <PrivateRoute>
              <Comment />
            </PrivateRoute>
          }
        />
        <Route
          path="/book/newbook"
          element={
            <PrivateRoute>
              <NewBookForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/book/newbook/editbook/:_id"
          element={
            <PrivateRoute>
              <EditBook />
            </PrivateRoute>
          }
        />
        <Route path="/book/landing/:_id" element={<BookLanding />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
