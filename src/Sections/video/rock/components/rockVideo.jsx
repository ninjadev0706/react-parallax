import React, { useEffect, useRef } from "react";

const RockVideo = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <div className="w-6/12 max-w-[300px]">
      <div className="w-[300px] h-[420px] m-auto md:m-[0px] overflow-hidden rounded-[60px]">
        <video playsInline autoPlay muted loop ref={vidRef}>
          <img
            src="./items/video/videomask.svg"
            alt=""
            className="absolute"
          />
          <source src="./items/video/rock/rock.mp4" type="video/mp4" />
        </video>
      </div>
      <p className="md:text-[17px] text-[16px] pt-[40px] w-[300px] m-auto">
        Got craft? Show it to your fans and followers. We love watching pottery!
      </p>
    </div>
  );
};

export default RockVideo;
