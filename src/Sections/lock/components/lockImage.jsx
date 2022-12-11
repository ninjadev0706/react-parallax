import React from "react";
import { useParallax, Parallax } from "react-scroll-parallax";

const LockImage = () => {
  return (
    <div className="md:absolute md:right-[0] md:block flex justify-center mt-[40px]">
      <Parallax rotateY={[0, 480]}>
        <img
          src="./items/lock/lockgroup.png"
          alt=" "
          className="max-w-[400px]"
        />
      </Parallax>
    </div>
  );
};

export default LockImage;
