import data from "/data/users.json";
import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";

const SignUp = (e) => {
  const [usernameState, setUserNameState] = useState("");
  const [firstNameState, setFirstNameState] = useState("");
  const [lastNameState, setLastNameState] = useState("");
  const [emailNameState, setEmailNameState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [confirmPasswordState, setConfirmPasswordState] = useState("");
  const [error, setError] = useState("");
  const [valid, setValid] = useState(true);
  const navigate = useNavigate();

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailNameError, setEmailNameError] = useState("");
  const [passwordNameError, setPasswordNameError] = useState("");
  const [confirmPasswordNameError, setConfirmPasswordNameError] = useState("");

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const submitSignUp = async (e) => {
    e.preventDefault();

    const SignUpInfo = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: confirmPasswordRef.current.value,
    };

    const newArray = data.users.filter(
      (userObject) => userObject.email === SignUpInfo.email
    );

    let validationErrors = {};
    let isValid = true;

    if (newArray.length > 0) {
      const userObject = newArray[0];

      if (userObject.firstName !== SignUpInfo.firstName) {
        isValid = false;
        validationErrors.firstName = "First name does not match";
      }
    }

    if (SignUpInfo.firstName === "" || SignUpInfo.firstName === null) {
      isValid = false;
      validationErrors.firstName = "First name required";
    } else if (SignUpInfo.firstName.length < 6) {
      isValid = false;
      validationErrors.firstName = "first Name length at least 6 characters";
    }
    if (SignUpInfo.lastName === "" || SignUpInfo.lastName === null) {
      isValid = false;
      validationErrors.lastName = "Last name required";
    } else if (SignUpInfo.lastName.length < 6) {
      isValid = false;
      validationErrors.lastName = "Last name length at least 6 characters";
    }

    if (SignUpInfo.email === "" || SignUpInfo.email === null) {
      isValid = false;
      validationErrors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(SignUpInfo.email)) {
      isValid = false;
      validationErrors.email = "Email is not Valid";
    }

    if (SignUpInfo.password === "" || SignUpInfo.password === null) {
      isValid = false;
      validationErrors.password = "Password required";
    } else if (SignUpInfo.password.length < 6) {
      isValid = false;
      validationErrors.password = "Password length at least 6 characters";
    }

    if (SignUpInfo.confirmPassword !== SignUpInfo.password) {
      isValid = false;
      validationErrors.confirmPassword = "Confirm password not MATCH";
    } else if (SignUpInfo.confirmPassword.length < 6) {
      isValid = false;
      validationErrors.confirmPassword =
        "Password length at least 6 characters";
    }

    const userExists = data.users.filter(
      (userObject) => userObject.email === SignUpInfo.email
    );

    if (userExists.length > 0) {
      isValid = false;
      validationErrors.email = "Email is already Registered";
    } else {
      isValid = true;
    }

    setError(validationErrors);
    setValid(isValid);

    if (Object.keys(validationErrors).length === 0) {
      alert("Thank you for Singing in");
      navigate("/login");
    } else {
      setError("Details are not valid");

      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  const onChangeFirstName = (e) => {
    const FirstName = e.target.value;
    if (FirstName === "" || FirstName === null) {
      setFirstNameError("First name required");
    } else if (FirstName.length < 6) {
      setFirstNameError("First name length at least 6 characters");
    } else {
      setFirstNameError("");
      setFirstNameState(e.target.value);
    }
  };

  const onChangeLastName = (e) => {
    const LastName = e.target.value;
    if (LastName === "" || LastName === null) {
      setLastNameError("Last name required");
    } else if (LastName.length < 6) {
      setLastNameError("Last name length at least 6 characters");
    } else {
      setLastNameError("");
      setLastNameState(e.target.value);
    }
  };

  const onChangeEmailName = (e) => {
    const EmailName = e.target.value;
    if (EmailName === "" || EmailName === null) {
      setEmailNameError("Email required");
    } else if (EmailName.length < 6) {
      setEmailNameError("Enter valid email address");
    } else {
      setEmailNameError("");
      setEmailNameState(e.target.value);
    }
  };

  const onChangePasswordName = (e) => {
    const PasswordName = e.target.value;
    if (PasswordName === "" || PasswordName === null) {
      setPasswordNameError("Password required");
    } else if (PasswordName.length < 6) {
      setPasswordNameError("Password length at least 6 characters");
    } else {
      setPasswordNameError("");
      setPasswordState(e.target.value);
    }
  };
  const onChangeConfirmPassword = (e) => {
    const confirmPasswordName = e.target.value;
    if (confirmPasswordName !== passwordState) {
      setConfirmPasswordNameError("Password don't match");
    } else {
      setConfirmPasswordNameError("");
      setConfirmPasswordState(confirmPasswordName);
    }
  };

  return (
    <>
      <h2 className="text-xl md:text-4xl mt-20 md:mb-20 text-center text-white font-bold py-1  rounded">
        Create Your Account
      </h2>
      <div className="flex items-center justify-center md:h-[60vh] w-full bg-black text-black font-bold py-1 px-4 rounded">
        <form onSubmit={submitSignUp} className="mb-10 ">
          <div className="mb-10 flex justify-center items-center flex-col w-40 h-30 mx-auto my-auto">
            <div className="">
              <label className="text-sm md:text-base mb-1 text-white">
                First Name
              </label>
              <input
                className="border-2 border-black text-sm md:text-base lg:text-base p-2"
                type="text"
                placeholder="Enter First Name"
                ref={firstNameRef}
                onChange={(e) => {
                  onChangeFirstName(e);
                }}
              />
              <span className="text-red-500">{firstNameError}</span>
            </div>

            <div className="flex justify-center items-start flex-col">
              <label className="text-sm md:text-base mb-1 text-white">
                Last Name
              </label>
              <input
                className="border-2 border-black text-sm md:text-base lg:text-base p-2"
                type="text"
                placeholder="Enter Last Name"
                ref={lastNameRef}
                onChange={(e) => {
                  onChangeLastName(e);
                }}
              />
              <span className="text-red-500">{lastNameError}</span>
            </div>

            <div className="flex justify-center items-start flex-col">
              <label className="text-sm md:text-base mb-1 text-white">
                Email
              </label>
              <input
                className="border-2 border-black text-sm md:text-base lg:text-base p-2"
                type="email"
                ref={emailRef}
                placeholder="Enter Email"
                onChange={(e) => {
                  onChangeEmailName(e);
                }}
              />
              <span className="text-red-500">{emailNameError}</span>
            </div>

            <div className="flex justify-center items-start flex-col">
              <label className="text-sm md:text-base mb-1 text-white">
                Password
              </label>
              <input
                className="border-2 border-black text-sm md:text-base lg:text-base p-2"
                type="password"
                placeholder="Enter Password"
                ref={passwordRef}
                onChange={(e) => {
                  onChangePasswordName(e);
                }}
              />
              <span className="text-red-500">{passwordNameError}</span>
            </div>
            <div className="flex justify-center items-start flex-col">
              <label className="text-sm md:text-base mb-1 text-white">
                Confirm Password
              </label>
              <input
                className="border-2 border-black text-sm md:text-base lg:text-base p-2"
                type="password"
                placeholder="Confirm Password"
                ref={confirmPasswordRef}
                onChange={(e) => {
                  onChangeConfirmPassword(e);
                }}
              />
              <span className="text-red-500">{confirmPasswordNameError}</span>
            </div>
          </div>

          <br />

          <div>
            {error && (
              <p className="flex justify-center items-center text-red-500 text-3xl">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="bg-green-500 hover:bg-blue-700 text-sm md:text-base lg:text-base font-bold py-1 px-4 rounded flex justify-center items-center mx-auto"
            >
              Submit Now
            </button>
          </div>

          <br />
          <div className="text-center">
            <p className="text-red-500 text-lg md:text-xl lg:text-2xl">
              If you have an account, Please{" -----> "}
              <Link to="/login">
                <span className="underline text-blue-700 text-xl md:text-xl lg:text-2xl font-bold">
                  Login Now
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUp;
