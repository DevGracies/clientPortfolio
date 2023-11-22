import React from "react";
import b from "../../Asset/images/b.png";
import { FaTwitter, FaLinkedin, FaBehanceSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <h1>Designer for 3+ years, I've loved every minute of it.</h1>
      <div>
        <div>
          <h1>1</h1>
          <p>I enjoy the process</p>
        </div>
        <div>
          <h1>2</h1>
          <p>I know what it means to be on a team</p>
        </div>
        <div>
          <h1>3</h1>
          <p>Always curious and always learning</p>
        </div>
      </div>
      <div>
        <div>
          <img src={b} alt="" />
        </div>
        <div>
          <FaTwitter />
          <FaBehanceSquare />
          <FaLinkedin />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
