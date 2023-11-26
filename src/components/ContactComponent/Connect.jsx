import React from "react";
import { FaPhone, FaMailchimp } from "react-icons/fa";
import blendiX from "../../Asset/images/blendiX.png";
const Connect = () => {
  return (
    <div>
      <div className="text-center mb-8">
        <h4 className="text-[#FF715B] ">Connect with me</h4>
        <h3 className=" text-xl">
          I am always excited to explore new opportunites and collaborate on
          innovative projects.
        </h3>
      </div>
      <div>
        <div className="flex justify-center mt-8 gap-5 ">
          <div>
            <img src={blendiX} alt="" />
          </div>
          <div className=" w-[698px] p-10 rounded-xl h-[562px] bg-[#FFFFFF0D]">
            <h5 className=" text-xl w-[613px] h-[98px] top-[57px] left-12">
              if you'd like to get in touch or discuss potential collaborations,
              please feel free to contact me.
            </h5>
            <h3 className="w-[249px] h-[140px] text-xl">
              Connect on{" "}
              <a href="http://" className="text-[#407BFF]">
                linkedin
              </a>{" "}
            </h3>
            <div>
              <div className="flex w-72 h-9 top-52 gap-5">
                <div>
                  <FaMailchimp className="text-[#FF715B]" />
                </div>
                <div>
                  <h6>4designspacce@gmail.com</h6>
                </div>
              </div>
              <div className="flex w-[467px] gap-5">
                <div>
                  <FaPhone className="text-[#FF715B]" />
                </div>
                <div className="flex justify-between gap-5">
                  <h6>(+234)811 1883 671</h6>
                  <h6>(+234) 907 7489 627</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
