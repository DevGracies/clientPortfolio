import React from "react";
import ppl from "../../Asset/images/ppl.png";
const BraceYourself = () => {
  return (
    <div className="flex justify-center">
      <div
        className="bg-cover rounded-xl bg-opacity-50 bg-center h-[400px] w-[800px] "
        style={{ backgroundImage: `url(${ppl})` }}
      >
        <div className="  rounded-xl bg-black bg-opacity-50 h-full flex items-center justify-center">
          <div className="flex sm:p-20 xl:p-32 mt-10 gap-5 justify-between">
            <div>
              <h1 className="font-bold text-[64px] text-center">
                Brace yourself
              </h1>
            </div>
            <div className="w-[400px] h-[370px] text-[24px]">
              <h5 className="w-full">
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
