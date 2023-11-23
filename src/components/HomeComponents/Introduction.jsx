import React from "react";
import intro from "../images/intro.png";

function Introduction() {
  return (
    <div
      className="bg-cover bg-opacity-50 bg-center h-[400px] w-[800px] "
      style={{ backgroundImage: `url(${intro})` }}
    >
      <div>
        <h4 className=" text-yellow-600">Intro...</h4>
        <p className=" text-white">
          I am a creative thinker and problem solver who thrives in
          collaborative enviroments. My design journey began with a stong
          foundation in user-centered design principles, which i've consistently
          applied to every project i've workeded on. I am dedicated to crafting
          intuitive and visually appealing interfaces that resonate with users
          while achieving business objectives.
        </p>
      </div>
    </div>
  );
}

export default Introduction;
