import React from "react";
import { FaTwitter, FaLinkedin, FaBehanceSquare } from "react-icons/fa";
import welcomeB from "../../Asset/images/welcome.png";
import grp from "../../Asset/images/grp.png";
import frame from "../../Asset/images/frame.png";
import str from "../../Asset/images/str.png";
const Welcome = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div>
          <h3 className="text-[#407BFF] h-14">Welcome Human</h3>
          <div className="w-[500px]">
            <img src={grp} alt="" className="absolute left-[560px] top-28" />
            <h1 className=" text-5xl relative">
              I'm <span className=" text-[#F5A623]">OLABANJI</span>, a Product
              Designer from <span className="text-[#21D789]">N</span> G{" "}
              <span className="text-[#21D789]">N.</span>
            </h1>
            <img src={str} alt="" />
          </div>
          <div className="flex justify-center gap-5">
            <FaTwitter />
            <FaBehanceSquare />
            <FaLinkedin />
          </div>
        </div>
        <div>
          <img src={welcomeB} alt="" />
        </div>
      </div>
      <div className="flex justify-center m-5">
        <img src={frame} alt="" />
      </div>
    </div>
  );
};

export default Welcome;
