import React, { useEffect, useRef } from "react";

const Mobile = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <div className="flex justify-center w-[90%] md:hidden md:w-6/12">
      <div className="relative items-center">
        <div className="md:video-container w-[300px] rounded-[20px] overflow-hidden">
          <video playsInline autoPlay muted loop ref={vidRef}>
            <source src="./items/app/app.mp4" type="video/mp4" />
            <source src="./items/app/app.mp4" type="video/mp4" />
          </video>
        </div>
        <img
          src="./items/app/phonecase.svg"
          alt=" "
          className="absolute w-[300px] top-[-30px]"
        />
        <img
          src="./items/app/app_circle.png"
          alt=" "
          className="absolute max-w-[120px] top-[550px] right-[-60px]"
        />
        <img
          src="./items/app/X.png"
          alt=" "
          className="absolute top-[0] max-w-[50px] top-[80px] right-[-10px]"
        />
      </div>
    </div>
  );
};

export default Mobile;
