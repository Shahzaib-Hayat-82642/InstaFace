import React from "react";
import { Redirect } from "react-router-dom";
import { ContextProvider } from "../Global/Context";
import Home from "./Home";
const Login = () => {
  const { model, openModel, login, user } = React.useContext(ContextProvider);
  const [state, setState] = React.useState({
    login: true,
  });
  const [inputs, setInputs] = React.useState({
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const userLogin = (e) => {
    e.preventDefault();
    console.log(inputs);
    login(inputs);
  };
  const openForms = () => {
    openModel();
  };

  return (
    <>
      {user ? (
        <div>
          <Home />
        </div>
      ) : (
        <div className="login">
          <form onSubmit={userLogin}>
            <div class="flex-container" name="login-form">
              <div class="appname">
                <h1>Instaface</h1>
                <p>Join us! To connect with your loved ones.</p>
              </div>
              <div className="form">
                <h1>Instaface</h1>
                <br />
                <label for="email" name="email">
                  Email:
                </label>
                <br />
                <div className="form__group">
                  <input
                    type="email"
                    name="email"
                    className="form__input"
                    onChange={handleInput}
                    value={inputs.email}
                    required
                  />
                </div>
                <br />
                <label for="pass" name="password">
                  Password:
                </label>
                <br />
                <div className="form__group">
                  <input
                    type="password"
                    name="password"
                    className="form__input"
                    onChange={handleInput}
                    value={inputs.password}
                    required
                  />
                </div>
                <br />
                <div className="button">
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-smart"
                  />
                </div>
                <br />
                <div className="forgot">
                  <span>Forgot Password?</span>
                </div>
                <br />
                <div className="signup">
                  <p>
                    Don't have an account?{" "}
                    <span onClick={openForms}>Sign Up </span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
