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
        <div className="video-container rounded-[20px] overflow-hidden w-[250px]">
          <video playsInline autoPlay muted loop ref={vidRef}>
            <source src="./items/app/app.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute md:block hidden right-[-50px] bottom-[80px]">
          <Parallax rotateZ={[-20, 20]}>
            <img
              src="./items/app/X.png"
              alt=" "
              className="ml-[60px] mb-[50px] max-w-[70px]"
            />
          </Parallax>
          <Parallax rotateZ={[-20, 20]}>
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
