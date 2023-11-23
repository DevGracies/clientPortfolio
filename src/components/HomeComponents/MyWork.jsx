import React from "react";
import { work } from "../../Asset/DummiData/work";
import { FaAngleLeft } from "react-icons/fa";
const MyWork = () => {
  return (
    <div className="m-5">
      <h6 className="text-blue-200 text-center">Now, the good stuff.</h6>
      <h2 className="text-blue-200 font-bold text-2xl text-center">My Work</h2>
      <div>
        {work.map((work) => {
          return (
            <div key={work.id} className="flex m-5 justify-center">
              <div>
                <img src={work.mainImg} alt="" />
              </div>
              <div>
                <div>
                  <img src={work.icon} alt="" />
                  <h4>{work.service}</h4>
                </div>
                <div>
                  <h5>{work.view} </h5>
                  <FaAngleLeft />
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
