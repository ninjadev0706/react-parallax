import React from "react";
import { useParallax, Parallax } from "react-scroll-parallax";

const LockImage = () => {
  return (
    <div className="md:absolute md:block flex justify-center mt-[120px] bottom-[-100px] right-[-200px] xl:right-[-300px]">
      <Parallax rotateY={[-40, 40]}>
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
