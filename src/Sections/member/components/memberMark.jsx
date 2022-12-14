import React, { useRef, useEffect } from "react";

const MemberMark = () => {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
  }, []);
  return (
    <div className="">
      <div className="my-[50px] md:my-[0] md:video-container rounded-[20px] md:w-[600px] lg:ml-[-50px] 2xl:ml-[-100px] m-[-35px] overflow-hidden">
        <video playsInline autoPlay muted loop ref={vidRef}>
          <source src="./items/member/eth.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default MemberMark;
