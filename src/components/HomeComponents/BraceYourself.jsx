import React from "react";
import ppl from "../../Asset/images/ppl.png";
const BraceYourself = () => {
  return (
    <div className="flex justify-center m-5">
      <div
        className="bg-cover rounded-xl bg-opacity-50 bg-center xl:h-[400px] xl:w-[800px] "
        style={{ backgroundImage: `url(${ppl})` }}
      >
        <div className="  rounded-xl bg-black bg-opacity-50 h-full flex items-center justify-center">
          <div className="flex sm:p-20 xl:p-32 gap-5 justify-between items-center p-10">
            <div className=" w-1/4">
              <h1 className="font-bold xl:text-[44px] text-2xl text-center">
                Brace yourself
              </h1>
            </div>
            <div className="xl:w-[300px] w-9/12 xl:h-[370px] xl:text-[24px] text-lg">
              <h5 className="w-full xl:font-semibold">
                when I'm not pushing pixels or brainstorming new features,
                you'll find me teaching product design and mentoring aspiring
                designers. Seeing those "aha!" moments light up in my students'
                eyes is pure gold.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BraceYourself;
