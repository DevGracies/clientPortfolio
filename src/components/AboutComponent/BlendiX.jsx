import React from "react";
import banji from "../../Asset/images/banji.png";
const BlendiX = () => {
  return (
    <div>
      <h3 className="text-[#FF715B] text-center">This is me</h3>
      <h1 className=" text-5xl text-center">I'm OLABANJI</h1>
      <div className="flex  xl:gap-5 m-6 justify-center xl:items-center">
        <div className="xl:flex  xl:w-[1356px] xl:h-[656px] xl:gap-5 m-6 xl:justify-center xl:items-center">
          <div>
            <img
              src={banji}
              alt=""
              className="lg:w-[607px] lg:h-[562px] mb-5"
            />
          </div>
          <div className=" lg:w-[636px] lg:h-[656px] rounded-xl p-10 bg-[#1E2028] ">
            <h4 className="text-[#FF715B]">Why Blendix</h4>
            <h2 className="text-[#FFFFFF] text-[28px] lg:h-[250px] ">
              BlendiX, design is a blend of artistry and strategy, a delicate
              balance between aesthetics and usability. Crafting designs that
              seamlessly blend into user's lives..
            </h2>
            <h1 className="text-[#8E8F93] lg:h-[320px] font-Montserrat italic text-[28px]">
              I pride myself on crafting experiences that not only captivate the
              eyes but also empower users with intuitive interactions. My
              mission is to fuse cutting-edge technology with thoughtful desifn,
              resulting in products that seamlessly integrate into people's
              lives.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlendiX;
