import "./App.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Components/home";
import { Signup } from "./pages/Components/signin/Signup";
import { Signin } from "./pages/Components/signin/Signin";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-user" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
