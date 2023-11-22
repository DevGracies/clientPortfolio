import React from "react";
import { work } from "../../Asset/DummiData/work";
import { FaAngleLeft } from "react-icons/fa";
const MyWork = () => {
  return (
    <div>
      <h6>Now, the good stuff.</h6>
      <h2>My Work</h2>
      <div>
        {work.map((work) => {
          return (
            <div key={work.id}>
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
