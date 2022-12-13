import React, { useEffect, useRef } from "react";
import { useParallax, Parallax } from "react-scroll-parallax";

const AppMobile = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <div className="md:flex hidden ">
      <div className="relative items-center">
        <div className="video-container rounded-[20px] overflow-hidden w-[250px] lg:w-[360px]">
          <video playsInline autoPlay muted loop ref={vidRef}>
            <source src="./items/app/app.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute md:block hidden right-[-70px] bottom-[150px]">
          <Parallax translateY={[50, -20]}>
            <img
              src="./items/app/X.png"
              alt=" "
              className="ml-[90px] mb-[50px] max-w-[70px]"
            />
          </Parallax>
          <Parallax translateY={[50, -20]}>
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
