import React, { useEffect, useRef } from "react";

const ArtVideo = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <div className="md:w-6/12 md:max-w-[320px] lg:p-[30px] w-[100%]">
      <div className="w-[300px] h-[420px] m-auto md:m-[0px] overflow-hidden rounded-[60px]">
        <img
          src="./items/video/video_mark.svg"
          alt=""
          className="absolute m-[30px]"
        />
        <video playsInline autoPlay muted loop ref={vidRef}>
          <source src="./items/video/art/art.mp4" type="video/mp4" />
        </video>
      </div>
      <p className="text-[17px] pt-[40px] w-[300px] m-auto">
        Got craft? Show it to your fans and followers. We love watching pottery!
      </p>
    </div>
  );
};

export default ArtVideo;
