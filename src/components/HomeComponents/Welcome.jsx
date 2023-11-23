import React from "react";
import { FaTwitter, FaLinkedin, FaBehanceSquare } from "react-icons/fa";
import welcomeB from "../../Asset/images/welcome.png";
import frame from "../../Asset/images/frame.png";
const Welcome = () => {
  return (
    <div>
      {/* <div> */}
      {/* <h3>Welcome Human</h3> */}
      {/* <h1> */}
      {/* I'm <span>OLABANJI</span>, a Product Designer from <span>N</span> G{" "} */}
      {/* <span>N</span> */}
      {/* </h1> */}
      {/* <div> */}
      {/* <FaTwitter /> */}
      {/* <FaBehanceSquare /> */}
      {/* <FaLinkedin /> */}
      {/* </div> */}
      {/* </div> */}
      {/* <div> */}
      {/* <img src={welcomeB} alt="" /> */}
      {/* </div> */}

      <div className="flex justify-center m-5">
        <img src={frame} alt="" />
      </div>
    </div>
  );
};

export default Welcome;
