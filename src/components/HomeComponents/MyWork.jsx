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
            <div className="flex justify-center items-center ">
              <div
                key={work.id}
                className="xl:flex m-5 xl:h-[500px] rounded-xl bg-[#292929] xl:bg-transparent justify-center items-center xl:w-[1300px] w-4/5"
              >
                <div className="xl:w-2/4 h-full  w-full rounded-xl bg-[#292929]">
                  <img
                    src={work.mainImg}
                    alt=""
                    className="h-full hover:shadow-lg xl:transition-transfrom transform xl:hover:scale-105 rounded-xl"
                  />
                </div>
                <div className=" bg-[#292929] w-full h-full p-5 rounded-xl xl:w-2/4 xl:ml-1">
                  <div className=" xl:h-[400px]">
                    <img src={work.icon} alt="" />
                    <h4 className="mt-5">{work.service}</h4>
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
