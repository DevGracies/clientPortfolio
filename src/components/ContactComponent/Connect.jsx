import React from "react";
import { FaPhone, FaMailchimp } from "react-icons/fa";
import blendiX from "../../Asset/images/blendiX.png";
const Connect = () => {
  return (
    <div>
      <h4>Connect with me</h4>
      <h3>
        I am always excited to explore new opportunites and collaborate on
        innovative projects.
      </h3>
      <div>
        <div>
          <img src={blendiX} alt="" />
        </div>
        <div>
          <h5>
            if you'd like to get in touch or discuss potential collaborations,
            please feel free to contact me.
          </h5>
          <h3>
            Connect on <a href="http://">linkedin</a>{" "}
          </h3>
          <div>
            <div>
              <div>
                <FaMailchimp />
              </div>
              <div>
                <h6>4designspacce@gmail.com</h6>
              </div>
            </div>
            <div>
              <div>
                <FaPhone />
              </div>
              <div>
                <h6>(+234)811 1883 671</h6>
                <h6>(+234) 907 7489 627</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
