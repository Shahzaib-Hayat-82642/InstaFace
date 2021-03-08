import React, { useState, useContext } from "react";
import Modal from "react-modal";
import {
  FaSistrix,
  FaNewspaper,
  FaBell,
  FaUserCircle,
  FaCamera,
} from "react-icons/fa";
import { VscGear } from "react-icons/vsc";
import { ContextProvider } from "../Global/Context";
import Account from "./Account";
Modal.setAppElement("#root");
const Navbar = () => {
  const { create } = useContext(ContextProvider);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };
  const createPost = (e) => {
    e.preventDefault();
    create({ title, image });
    setTitle("");
    setImage("");
  };
  const [isOpen, setIsOpen] = useState(false);
  function toggleModal() {
    setIsOpen(!isOpen);
  }
  const { user, logout } = React.useContext(ContextProvider);
  const userLogout = () => {
    logout();
  };
  return (
    <div className="navbar">
      <div className="navbar__first">
        <div className="navbar__first-logo">
          <img src="/images/instaface.png" alt="" />
        </div>
      </div>
      <div className="navbar__middle">
        <div className="navbar__middle-search">
          <input
            type="text"
            className="navbar__search"
            placeholder="Search here"
          />
          <FaSistrix className="searchIcon" />
        </div>
      </div>
      <div className="navbar__last">
        <li onClick={toggleModal}>
          <FaNewspaper className="navbar__icons" />
        </li>
        <li>
          <FaBell className="navbar__icons" />
        </li>
        <li>
          <VscGear className="navbar__icons" />
        </li>
        <li>
          {" "}
          <FaUserCircle className="navbar__icons" />
        </li>
        <li>
          {user.displayName}/ <span onClick={userLogout}>logout</span>
        </li>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        {" "}
        <div className="create">
          <form onSubmit={createPost}>
            <div className="create__input">
              <input
                type="text"
                className="create__inputt"
                placeholder="What are in your mind..."
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                required
              />
            </div>
            <div className="create__second">
              <div className="create__second-a">
                <label htmlFor="file">
                  <FaCamera className="camera" />
                </label>
                <input
                  type="file"
                  className="file"
                  onChange={handleImage}
                  id="file"
                  required
                />
              </div>
              <div className="create__second-b">
                <input type="submit" value="Create" className="btn-sweet" />
              </div>
            </div>
          </form>
        </div>
        <button onClick={toggleModal}>Close modal</button>
      </Modal>
    </div>
  );
};

export default Navbar;
