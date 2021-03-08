import React, { useState, useContext } from "react";
import { FaCamera } from "react-icons/fa";
import { ContextProvider } from "../Global/Context";
const Model = () => {
  const { model, closeModel, register, user, loader } = React.useContext(
    ContextProvider
  );
  const [state, setState] = React.useState({
    register: true,
  });
  const [inputs, setInputs] = React.useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    contact: "",
  });
  const handleInput = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const closeForm = (e) => {
    const className = e.target.getAttribute("class");
    if (className === "model") {
      closeModel();
    }
  };
  const registerUser = (e) => {
    e.preventDefault();
    console.log(inputs);
    register(inputs);
    setInputs({ fname: "", lname: "", email: "", password: "", contact: "" });
  };

  return (
    <>
      {model ? (
        <div className="model" onClick={closeForm}>
          <div className="model__container">
            <div className="model__model__form">
              <form onSubmit={registerUser}>
                <div className="model__group">
                  <div class="appname">
                    <h1>Instaface</h1>
                    <h2>
                      <strong>CREATE AN ACCOUNT</strong>
                    </h2>
                    <br></br>
                  </div>
                </div>
                <div className="model_text">
                  <label>
                    {" "}
                    <b>First Name:</b>
                  </label>
                  <div className="model__group">
                    <input
                      type="text"
                      name="fname"
                      className="model__input"
                      onChange={handleInput}
                      value={inputs.fname}
                      required
                    />
                  </div>
                  <br />
                  <label>
                    {" "}
                    <b>Last Name:</b>
                  </label>
                  <div className="model__group">
                    <input
                      type="text"
                      name="lname"
                      className="model__input"
                      onChange={handleInput}
                      value={inputs.lname}
                      required
                    />
                  </div>
                  <br />
                  <label>
                    <b>Email:</b>
                  </label>
                  <div className="model__group">
                    <input
                      type="email"
                      name="email"
                      className="model__input"
                      onChange={handleInput}
                      value={inputs.email}
                      required
                    />
                  </div>
                  <br />
                  <label>
                    <b>Password:</b>
                  </label>
                  <div className="model__group">
                    <input
                      type="text"
                      name="password"
                      className="model__input"
                      onChange={handleInput}
                      value={inputs.password}
                      required
                    />
                  </div>
                  <br />
                  <label>
                    <b>Contact:</b>
                  </label>
                  <div className="model__group">
                    <input
                      type="number"
                      name="contact"
                      className="model__input"
                      onChange={handleInput}
                      value={inputs.contact}
                      required
                    />
                  </div>
                  <br />
                  <div className="model__group">
                    <input
                      type="submit"
                      value="Register"
                      className="btn btn-smart"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        " "
      )}
    </>
  );
};

export default Model;
