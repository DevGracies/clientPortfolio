import React from "react";
import ppl from "../../Asset/images/ppl.png";
const BraceYourself = () => {
  return (
    <div
      className="bg-cover bg-opacity-50 bg-center h-[400px] w-[800px] "
      style={{ backgroundImage: `url(${ppl})` }}
    >
      <div className=" bg-black bg-opacity-50 h-full flex items-center justify-center">
        <div className="flex sm:p-20 xl:p-32 gap-32 justify-between">
          <div>
            <h1 className="font-bold text-3xl">Brace yourself</h1>
          </div>
          <div>
            <h5 className="w-44">
              when I'm not pushing pixels or brainstorming new features, you'll
              find me teaching product design and mentoring aspiring designers.
              Seeing those "aha!" moments light up in my students' eyes is pure
              gold.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BraceYourself;
