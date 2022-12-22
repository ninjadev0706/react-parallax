import React from "react";
import { useParallax, Parallax } from "react-scroll-parallax";

const LockImage = () => {
  return (
    <div className="md:absolute z-[-10] mb-[30px] md:block flex justify-center lg:mt-[80px] mt-[50px] mb-[50px] md:mb-[250px] md:bottom-[-100px] right-[0px]">
      <Parallax translateY={[80, -30]}>
        <img
          src="./items/lock/lockgroup.png"
          alt=" "
          className="w-[250px] md:w-[350px] lg:w-[350px] xl:w-[400px] 2xl:w-[450px]"
        />
      </Parallax>
    </div>
  );
};

export default LockImage;
