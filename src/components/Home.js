import React from "react";
import Navbar from "./Navbar";
import Create from "./Create";
import Posts from "./Posts";
import Sidebar from "./Sidebar";
import Message from "./Message";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="container left">{<Sidebar />}</div>
      <div className="container middle">{<Posts />}</div>
      <div className="container right">{<Message />}</div>
    </div>
  );
};

export default Home;
