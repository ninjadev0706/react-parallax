import React, { useEffect, useRef } from "react";
import { useParallax, Parallax } from "react-scroll-parallax";

const AppMobile = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <div className="md:block hidden ">
      <div className="relative items-center">
        <div className="video-container overflow-hidden w-[250px] lg:w-[360px]">
          <img
            src="./items/app/mask.png"
            alt=""
            className="absolute"
          />
          <video playsInline autoPlay muted loop ref={vidRef} className="lg:p-[15px] p-[12px]">
            <source src="./items/app/app.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute md:block hidden right-[-70px] bottom-[150px]">
          <Parallax translateY={[80, -30]}>
            <img
              src="./items/app/X.png"
              alt=" "
              className="ml-[90px] mb-[50px] max-w-[70px]"
            />
          </Parallax>
          <Parallax translateY={[80, -30]}>
            <img
              src="./items/app/app_circle.png"
              alt=" "
              className="max-w-[150px]"
            />
          </Parallax>
        </div>
      </div>
    </div>
  );
};

export default AppMobile;
