import React from "react";
import Welcome from "../../components/HomeComponents/Welcome";
import Introduction from "../../components/HomeComponents/Introduction";
import MyWork from "../../components/HomeComponents/MyWork";
import Graphics from "../../components/HomeComponents/Graphics";
import BraceYourself from "../../components/HomeComponents/BraceYourself";

const Home = () => {
  return (
    <div>
      <Welcome />
      <Introduction />
      <MyWork />
      <Graphics />
      <BraceYourself />
    </div>
  );
};

export default Home;
