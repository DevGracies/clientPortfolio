import React from "react";
import { work } from "../../Asset/DummiData/work";
import { FaAngleRight } from "react-icons/fa";
const MyWork = () => {
  return (
    <div className="m-5">
      <h6 className="text-[#0AAFFF] text-center">Now, the good stuff.</h6>
      <h2 className=" font-bold text-2xl text-center">My Work</h2>
      <div>
        {work.map((work) => {
          return (
            <div className="flex justify-center">
              <div key={work.id} className="flex m-5 justify-center w-[1300px]">
                <div className="w-2/4 h-full rounded-xl bg-[#292929]">
                  <img src={work.mainImg} alt="" />
                </div>
                <div className=" bg-[#292929] p-5 rounded-xl w-2/4 ml-3">
                  <div className=" h-[470px]">
                    <img src={work.icon} alt="" />
                    <h4>{work.service}</h4>
                  </div>
                  <div className="flex justify-between items-center ">
                    <h5>{work.view} </h5>
                    <FaAngleRight />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyWork;
