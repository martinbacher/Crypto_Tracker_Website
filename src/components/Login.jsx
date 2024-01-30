import React, { useState, useRef } from "react";
import data from "/data/users.json";
import image from "/img/crypto-tracker.png";
import { useNavigate, Link } from "react-router-dom";

const Login = ({ onLoggedIn }) => {
  const [usernameState, setUsernameState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  const submitLogin = async (e) => {
    e.preventDefault();

    const loginInfo = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    const newArray = data.users.filter(
      (userObject) => userObject.email === loginInfo.email
    );

    if (newArray.length > 0) {
      const userObject = newArray[0];

      if (userObject.password === loginInfo.password) {
        onLoggedIn(true);
        alert("Login Successful");
        navigate("./UserDashboard");
      } else {
        setError("Wrong password");

        setTimeout(() => {
          setError("");
        }, 3000);
      }
    } else {
      setError("Username is incorrect or password");
      //alert("Username is incorrect or password");
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen md:h-[75vh] w-full bg-black text-white font-bold py-1 px-4 rounded">
      <div className="">
        <div>
          <div className="flex items-center justify-center">
            <img
              src={image}
              alt="Logo"
              className="w-full md:w-80 h-40 mx-auto my-auto"
            />
          </div>
        </div>
        <br />
        <h2 className="text-3xl md:text-5xl mb-4 text-center justify-center text-white font-bold py-1 px-4 rounded">
          Sign In
        </h2>
        <div className="flex justify-center items-center">
          <div className="flex justify-center items-start flex-col mt-4 md:mt-0">
            <div className="flex justify-center items-start flex-col">
              <label className="text-xl md:text-2xl">Email</label>

              <input
                className="border-2 border-black text-black text-xl md:text-2xl p-2 w-pull "
                type="email"
                ref={emailRef}
                placeholder="Email"
                value={usernameState}
                onChange={(e) => setUsernameState(e.target.value)}
              />
            </div>

            <div className="flex justify-center items-start flex-col mt-4 md:mt-0">
              <label className="text-xl md:text-2xl">Password</label>
              <input
                className="border-2 border-black text-black text-xl md:text-2xl p-2 "
                type="password"
                ref={passwordRef}
                placeholder="Password"
                value={passwordState}
                onChange={(e) => setPasswordState(e.target.value)}
              />
            </div>
          </div>
        </div>

        {error && (
          <p className="flex justify-center items-center text-red-500">
            {error}
          </p>
        )}
        <br />
        <br />
        <div>
          <button
            type="submit"
            onClick={submitLogin}
            className="bg-green-500 hover:bg-blue-700 text-white text-3xl font-bold py-1 px-4 rounded flex justify-center items-center mx-auto"
          >
            Login
          </button>
          <br />
          <br />
        </div>
        <div>
          <p className="text-lg md:text-2xl lg:text-3xl">
            Don't have an account?{"    "}
            <Link to="/signup">
              <span className="underline text-red-500 text-lg md:text-xl lg:text-2xl">
                Create Account
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
