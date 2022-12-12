import React, { useEffect, useRef } from "react";

const ArtVideo = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <div className="md:w-6/12 md:max-w-[300px] p-[20px]">
      <div className="md:video-container w-[300px] m-auto rounded-[20px] overflow-hidden">
        <video playsInline autoPlay muted loop ref={vidRef}>
          <source src="./items/video/art/art.mp4" type="video/mp4" />
          <source src="./items/video/art/art.mp4" type="video/mp4" />
        </video>
      </div>
      <p className="text-[17px] mt-[20px] w-[300px] m-auto">
        Got craft? Show it to your fans and followers. We love watching pottery!
      </p>
    </div>
  );
};

export default ArtVideo;
