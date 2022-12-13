import React, { useEffect, useRef } from "react";

const RockVideo = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <div className="relative">
      <div className="video-wrapper">
        {/* <img
          src="./items/video/video_mark.svg"
          alt=""
          className="absolute m-[20px]"
        /> */}
        <video playsInline autoPlay muted loop ref={vidRef} className="video-size mx-[-200px]">
          <source src="./items/video/rock/rock.mp4" type="video/mp4" />
        </video>
      </div>
      <p className="text-[17px] mt-[20px]">
        Got craft? Show it to your fans and followers. We love watching pottery!
      </p>
    </div>
  );
};

export default RockVideo;
