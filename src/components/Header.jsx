import { NavLink } from "react-router-dom";
import { FaLock, FaSignInAlt, FaUserPlus } from "react-icons/fa";

import logo from "../../img/Logo2.png";

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <>
      <header className="md:h-[15vh] flex flex-col bg-cover bg-center p-4">
        <div className="flex justify-start items-center mb-4 md:mb-10">
          <img
            src={logo}
            alt="Logo"
            className="h-20 md:h-32 mr-2 md:mr-4 mt-1"
          />

          <h1 className="text-white text-xl md:text-4xl lg:text-6xl mt-1">
            Crypto Tracker
          </h1>

          <div className="flex flex-row md:flex-row justify-end items-center gap-4 text-xl md:text-1xl mr-4 mt-4 ml-auto">
            {!isLoggedIn && (
              <>
                <NavLink to="/login">
                  <button className="flex items-center text-red-450 bg-blue-300 border-solid border-black border-2 p-2 rounded-md">
                    <FaSignInAlt className="mr-3" />
                    Sign in
                  </button>
                </NavLink>
                <NavLink to="/signup">
                  <button className="flex items-center text-red-450 bg-blue-300 border-solid border-black border-2 p-2 rounded-md">
                    <FaUserPlus className="mr-3" />
                    Sign up
                  </button>
                </NavLink>
              </>
            )}

            {isLoggedIn && (
              <NavLink to="/login">
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="flex items-center text-red-450 bg-blue-300 border-solid border-black border-2 p-2 rounded-md"
                >
                  {" "}
                  <FaLock className=" mr-3 " />
                  Logout
                </button>
              </NavLink>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
