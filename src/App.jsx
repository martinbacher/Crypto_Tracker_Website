import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import SideBarNav from "./components/SideBarNav";
import UserDashboard from "./components/UserDashboard";
import Footer from "./components/Footer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Logout from "./components/Logout";

import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/login"
          element={<Login onLoggedIn={(loggedin) => setIsLoggedIn(loggedin)} />}
        />
        <Route path="/signup/" element={<SignUp />} />
        <Route path="/login/userdashboard" element={<UserDashboard />} />
        <Route path="/signup/login/userdashboard" element={<UserDashboard />} />

        <Route path="/logout/" element={<Login />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
