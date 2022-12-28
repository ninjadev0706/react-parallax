import React, { useEffect, useRef } from "react";
import { useParallax, Parallax } from "react-scroll-parallax";

const Mobile = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <div className="flex justify-center px-[10%] md:hidden md:w-6/12 mb-[200px]">
      <div className="relative items-center">
        <div className="md:video-container w-[250px] md:w-[360px] rounded-[20px] overflow-hidden">
        {/* <img
            src="./items/app/mask.png"
            alt=""
            className="absolute"
          /> */}
          <video playsInline autoPlay muted loop ref={vidRef} className="md:p-[15px] p-[10px]">
            <source src="./items/app/app.mp4" type="video/mp4" />
          </video>
        </div>
        {/* <img
          src="./items/app/phonecase.svg"
          alt=" "
          className="absolute w-[250px] lg:w-[360px] top-[-25px]"
        /> */}
        {/* <img
          src="./items/app/app_circle.png"
          alt=" "
          className="absolute max-w-[120px] top-[550px] right-[-60px]"
        /> */}
        <div className="absolute max-w-[120px] top-[500px] right-[-20px]">
          <Parallax translateY={[80, -30]}>
            <img
              src="./items/app/app_circle.png"
              alt=" "
              className="w-[100px]"
            />
          </Parallax>
        </div>
        <div className="absolute top-[0] max-w-[50px] top-[80px] right-[-10px]">
          <Parallax translateY={[80, -30]}>
            <img src="./items/app/X.png" alt=" " className="w-[80px]" />
          </Parallax>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
