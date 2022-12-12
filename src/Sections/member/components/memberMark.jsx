import React, { useRef, useEffect } from "react";

const MemberMark = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <div className="">
      <div className="mt-[50px] md:mt-[0] md:video-container rounded-[20px] max-w-[780px] w-[100%] overflow-hidden">
        <video playsInline autoPlay muted loop ref={vidRef}>
          <source src="./items/member/eth.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default MemberMark;
