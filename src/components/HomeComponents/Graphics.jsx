import React from "react";
import { graphicsDesign } from "../../Asset/DummiData/graphics";
import { FaAngleRight } from "react-icons/fa";
const Graphics = () => {
  return (
    <div>
      <h2 className=" text-2xl text-center">I do graphics design too.</h2>
      <div className="flex justify-center my-7">
        {graphicsDesign.map((graphics) => {
          return (
            <div
              key={graphics.id}
              className="w-[623px] ml-8  rounded-xl h-[656px] bg-[#FFFFFF0D]"
            >
              <img src={graphics.mainImg} alt="" />
              <div className="m-6 h-[194px]">
                <div className="w-[289px] h-[76px]">
                  <h2 className="h-[30px]">{graphics.desc} </h2>
                  <p className="text-[#FFFFFF80] h-[28px] text-sm">
                    {graphics.rep}{" "}
                  </p>
                </div>
                <div className="flex justify-between h-[55px]">
                  <h2>{graphics.con} </h2>
                  <FaAngleRight />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Graphics;
