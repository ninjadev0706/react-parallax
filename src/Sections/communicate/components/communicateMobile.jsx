import React, { useRef, useEffect } from "react";

const CommunicateMobile = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <div className="w-6/12">
      <div className="video-container rounded-[20px] overflow-hidden w-[250px] lg:w-[360px]">
        <video
          playsInline
          autoPlay
          muted
          loop
          ref={vidRef}
        >
          <source
            src="./items/communicate/communicate.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default CommunicateMobile;
