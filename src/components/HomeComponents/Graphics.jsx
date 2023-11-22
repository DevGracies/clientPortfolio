import React from "react";
import { graphicsDesign } from "../../Asset/DummiData/graphics";
const Graphics = () => {
  return (
    <div>
      <h2>I do graphics design too.</h2>
      <div>
        {graphicsDesign.map((graphics) => {
          return (
            <div key={graphics.id}>
              <img src={graphics.mainImg} alt="" />
              <div>
                <h2>{graphics.desc} </h2>
                <p>{graphics.rep} </p>
                <h2>{graphics.con} </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Graphics;
