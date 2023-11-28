import React from "react";
import intro from "../../Asset/images/intro.png";

function Introduction() {
  return (
    <div className=" justify-center flex">
      <div
        className=" bg-cover  rounded-xl bg-opacity-50 bg-center h-[400px] w-[800px]  "
        style={{ backgroundImage: `url(${intro})` }}
      >
        <div className="p-6">
          <h4 className=" text-yellow-600">Intro...</h4>
          <p className=" text-white text-2xl ">
            I am a creative thinker and problem solver who thrives in
            collaborative enviroments. My design journey began with a stong
            foundation in user-centered design principles, which i've
            consistently applied to every project i've workeded on. I am
            dedicated to crafting intuitive and visually appealing interfaces
            that resonate with users while achieving business objectives.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
