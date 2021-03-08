import React from "react";
import { ContextProvider } from "../Global/Context";
const Sidebar = () => {
  const { loader, user } = React.useContext(ContextProvider);
  const fname = !loader && user && user.fname ? user.fname : "";
  const [state] = React.useState([
    { id: 1, image: "/images/img1.jpg", name: "Shahzib Hayat" },
    { id: 2, image: "/images/img2.jpg", name: "Qais Sultani" },
    { id: 1, image: "/images/img3.jpg", name: "Rizwan Ali" },
  ]);
  return (
    <div className="sidebar">
      <div className="sidebar__list">
        <h3>Suggestions for you</h3>
        {state.map((user) => (
          <div className="sidebar__list-user" key={user.id}>
            <div className="sidebar__list-a">
              <div className="sidebar__list-a-img">
                <img src={user.image} alt={user.image} />
              </div>
              <div className="sidebar__list-a-name">{user.name}</div>
            </div>
            <div className="sidebar__list-b">
              <button className="but">Connect</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
