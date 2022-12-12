import React, { useEffect, useRef } from "react";
import { useParallax, Parallax } from "react-scroll-parallax";

const AppMobile = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <div className="w-5/12 md:flex hidden">
      <div className="relative items-center relative">
        <img src="./items/app/case.png" alt="" className="w-350px top-[-30px] absolute" />
        <div className="video-container rounded-[20px] overflow-hidden w-[350px]">
          <video playsInline autoPlay muted loop ref={vidRef}>
            <source src="./items/app/app.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute md:block hidden right-[-50px] bottom-[80px]">
          <Parallax translateY={[50, 0]}>
            <img
              src="./items/app/X.png"
              alt=" "
              className="ml-[60px] mb-[50px] max-w-[70px]"
            />
          </Parallax>
          <Parallax translateY={[50, 0]}>
            <img
              src="./items/app/app_circle.png"
              alt=" "
              className="max-w-[120px]"
            />
          </Parallax>
        </div>
      </div>
    </div>
  );
};

export default AppMobile;
