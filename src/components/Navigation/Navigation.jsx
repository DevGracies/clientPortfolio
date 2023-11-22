import React from "react";
import b from "../../Asset/images/b.png";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div>
      <div>
        <img src={b} alt="" />
      </div>
      <div>
        <div>
          <Link to={"/"}>Home</Link>
        </div>
        <div>
          <Link to={"/About"}>About</Link>
        </div>
        <div>
          <Link to={"/Contact"}>Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
