import React from "react";
import { useParallax, Parallax } from "react-scroll-parallax";

const LockImage = () => {
  return (
    <div className="md:absolute z-[-10] md:block flex justify-center lg:mt-[80px] mt-[30px] mb-[50px] md:mb-[0] md:bottom-[-100px] md:right-[-50px] lg:right-[-150px] xl:right-[-250px] 2xl:right-[-300px]">
      <Parallax translateY={[50, -20]}>
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
