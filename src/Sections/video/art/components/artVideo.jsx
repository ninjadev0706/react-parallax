import React, { useEffect, useRef } from "react";

const ArtVideo = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <div className="lg:w-6/12 lg:max-w-[320px] lg:p-[30px] w-[100%]">
      <div className="w-[250px] h-[420px] lg:ml-[0] m-auto overflow-hidden rounded-[20px]">
        <video playsInline autoPlay muted loop ref={vidRef}>
          <source src="./items/video/art/art.mp4" type="video/mp4" />
        </video>
      </div>
      {/* <p className="mg:text-[17px] text-[15px] pt-[40px] w-[300px] pl-[40px] m-auto">
        Got craft? Show it to your fans and followers. We love watching pottery!
      </p> */}
    </div>
  );
};

export default ArtVideo;
