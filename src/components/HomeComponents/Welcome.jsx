import React from "react";
import { FaTwitter, FaLinkedin, FaBehanceSquare } from "react-icons/fa";
import welcomeB from "../../Asset/images/welcome.png";
import grp from "../../Asset/images/grp.png";
import str from "../../Asset/images/str.png";
import style from "../../App.css";
const Welcome = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div>
          <h3 className="text-[#407BFF] h-14">Welcome Human</h3>
          <div className="relative font-semibold z-10 w-[541px] h-[293px]">
            <img
              src={grp}
              alt=""
              className="absolute z-20 left-[390px] -top-20"
            />
            <h1 className=" text-5xl font-semibold">
              I'm <span className=" text-[#F5A623]">OLABANJI</span>, a Product
              Designer from <span className="text-[#21D789]">N</span>G
              <span className="text-[#21D789]">N</span>.
            </h1>
            <img
              src={str}
              alt=""
              className="left-[245px] top-[130px] z-20 absolute "
            />
          </div>
          <div className="flex w-[139px] h-[29px] absolute text-white gap-[26px] text-2xl">
            <FaTwitter />
            <FaBehanceSquare />
            <FaLinkedin />
          </div>
        </div>
        <div className={style.animate}>
          <img src={welcomeB} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
