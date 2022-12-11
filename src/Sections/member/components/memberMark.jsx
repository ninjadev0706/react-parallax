import React, { useRef, useEffect } from "react";

const MemberMark = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <div className="">
      <div className="md:video-container rounded-[20px] overflow-hidden">
        <video playsInline autoPlay muted loop ref={vidRef}>
          <source src="./items/member/eth.mp4" type="video/mp4" />
          <source src="./items/member/eth.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default MemberMark;
