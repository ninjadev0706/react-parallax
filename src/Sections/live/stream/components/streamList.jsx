import React from "react";

const StreamList = (props) => {
  return (
    <div className="section-container w-6/12 font-bold leading-[2] md:text-[40px] 2xl:text-[55px] text-[35px] lg:block hidden">
      {/* {Lists.map((list, index) => { */}
      {/* // })} */}
      {/* <Parallax translateY={[-200, -200]} className="bg-white"> */}
        <p className="mb-[15px] font-drukBold" id="index">
          Stream
        </p>
        <p className="mb-[15px] font-drukBold" id="index">
          Listen
        </p>
        <p className="font-drukBold" id="index">
          Communicate
        </p>
      {/* </Parallax>
      <Parallax translateY={[-180, -2000]} className="bg-white">
        <p className=" font-drukBold" id="index">
          Stream
        </p>
      </Parallax>
      <Parallax translateY={[0, -3500]} className="bg-white">
        <p className=" font-drukBold" id="index">
          Stream
        </p>
      </Parallax> */}
    </div>
  );
};

export default StreamList;
