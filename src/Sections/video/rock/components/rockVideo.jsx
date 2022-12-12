import React, { useEffect, useRef } from "react";

const RockVideo = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <div className="w-6/12 max-w-[300px]">
      <div className="video-wrap rounded-[20px] overflow-hidden h-[100%] w-auto">
          <video playsInline autoPlay muted loop ref={vidRef}>
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
