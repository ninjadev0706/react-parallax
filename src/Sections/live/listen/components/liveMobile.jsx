import React, { useRef, useEffect } from "react";

const LiveMobile = (props) => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <div className="lg:w-6/12 m-auto">
      {/* <Parallax translateY={[20, 20]}> */}
        <div className="relative m-auto rounded-[20px] overflow-hidden w-[250px] lg:w-[360px]">
          {/* <img src="./items/app/mask.png" alt="" className="absolute" /> */}
          <video
            playsInline
            autoPlay
            muted
            loop
            ref={vidRef}
            className="p-[12px] lg:p-[15px] pt-0 pb-0"
          >
            <source
              src="./items/live/listen.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      {/* </Parallax>
      <Parallax translateY={[40, -220]}>
        <div className="video-container relative m-auto rounded-[20px] overflow-hidden w-[250px] lg:w-[360px]">
          <img src="./items/app/mask.png" alt="" className="absolute" />
          <video
            playsInline
            autoPlay
            muted
            loop
            ref={vidRef}
            className="lg:p-[15px] p-[12px]"
          >
            <source
              src="./items/live/stream1.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </Parallax>
      <Parallax translateY={[-40, -900]}>
        <div className="video-container relative m-auto rounded-[20px] overflow-hidden w-[250px] lg:w-[360px]">
          <img src="./items/app/mask.png" alt="" className="absolute" />
          <video
            playsInline
            autoPlay
            muted
            loop
            ref={vidRef}
            className="lg:p-[15px] p-[12px]"
          >
            <source
              src="./items/live/stream2.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </Parallax> */}
    </div>
  );
};

export default LiveMobile;
