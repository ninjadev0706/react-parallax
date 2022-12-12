import React from "react";
import { useParallax, Parallax } from "react-scroll-parallax";

const LockImage = () => {
  return (
    <div className="md:absolute md:block flex justify-center mt-[200px] bottom-[-100px] md:right-[-200px] xl:right-[-300px]">
      <Parallax translateY={[50, 0]}>
        <img
          src="./items/lock/lockgroup.png"
          alt=" "
          className="max-w-[450px] w-[100%]"
        />
      </Parallax>
    </div>
  );
};

export default LockImage;
