import React from "react";
import b from "../../Asset/images/b.png";
import { FaTwitter, FaLinkedin, FaBehanceSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="  justify-center flex items-center">
      <div className=" bg-[#ffffff0D] p-5 w-3/4 rounded-xl m-5">
        <h1
          className=" text-center 
         lg:text-4xl md:text-3xl sm:text-2xl"
        >
          Designer for 3+ years, I've <br /> loved every minute of it.
        </h1>
        <div className="xl:grid xl:grid-cols-2 ">
          <div className="m-5">
            <div className="flex items-center gap-3">
              <h1 className=" rounded-full w-[36px] h-[36px] text-2xl text-center bg-[#FFFFFF1A]">
                1
              </h1>
              <p className="text-[#FFFFFF1A]">I enjoy the process</p>
            </div>
            <hr className="text-2xl mt-3 text-[#FFFFFF1A] w-[100%]" />
          </div>
          <div className="m-5">
            <div className="flex items-center gap-3">
              <h1 className=" rounded-full w-[36px] h-[36px] text-2xl text-center bg-[#FFFFFF1A]">
                2
              </h1>
              <p className=" text-[#FFFFFF1A]">
                I know what it means to be on a team
              </p>
            </div>
            <hr className="text-2xl mt-3 text-[#FFFFFF1A] w-[100%]" />
          </div>
          <div className="m-5">
            <div className="flex items-center gap-3">
              <h1 className=" rounded-full w-[36px] h-[36px] text-2xl text-center bg-[#FFFFFF1A]">
                3
              </h1>
              <p className=" text-[#FFFFFF1A]">
                Always curious and always learning
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <img src={b} alt="" />
          </div>
          <div className="flex justify-between items-center text-3xl gap-3">
            <FaTwitter />
            <FaBehanceSquare />
            <FaLinkedin />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
