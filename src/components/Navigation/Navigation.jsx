import React from "react";
import b from "../../Asset/images/b.png";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div className=" px-16 relative top-0 w-full fixed py-4 bg-[#1E2028] items-center flex justify-between">
      <div>
        <img src={b} alt="" />
      </div>
      <div className=" flex gap-5">
        <div className="text-[#8E8F93]  hover:text-white hover:ease-out">
          <Link to={"/"}>Home</Link>
        </div>
        <div className="text-[#8E8F93]  hover:text-white hover:ease-out">
          <Link to={"/About"}>About</Link>
        </div>
        <div className="text-[#8E8F93]  hover:text-white hover:ease-out">
          <Link to={"/Contact"}>Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
