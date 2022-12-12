import React from "react";
import { useParallax, Parallax } from 'react-scroll-parallax';

const AppText = () => {
  return (
    <div className="md:w-7/12">
      <div className="leading-[60px] mb-[40px]">
        <p className="font-drukBold leading-[1] 2xl:text-[65px] md:text-[40px] text-[30px]">No Ads.</p>
        <p className="font-drukBold leading-[1] 2xl:text-[65px] md:text-[40px] text-[30px]">No Rugs.</p>
        <p className="hidden md:block font-drukBold leading-[1] 2xl:text-[65px] md:text-[40px] text-[30px]">You in control.</p>
        <div className="flex items-end mt-[40px] relative">
          <p className="bignumber font-drukBold text-[#0000ff]">80</p>
          <p className="creator_pro mb-[-30px] font-bold text-[#0000ff]">%</p>
        </div>
        <p className="creator_title font-drukBold text-[#0000ff] my-[20px] goes">
          Goes to creators
        </p>
        <div className="flex items-end mt-[-20px] relative">
          <p className="smallnumber font-drukBold text-4xl font-extrabold text-[#0000ff]">
            20
          </p>
          <p className="service_pro mb-[-20px] font-bold text-[#0000ff]">%</p>
        </div>
        <p className="service_title font-drukBold text-[#0000ff] goes">
          Goes for running the service
        </p>
        <p className="my-[30px] text-[17px] font-light leading-[20px]">
          Unlike big tech, you deserve more than crumbs. We don't shove ads down
          users' throats, we don't sell their data, and the importantly it is
          all about you.
        </p>
      </div>
      <div className="flex justify-center items-center gap-[10px] border border-2 border-[#000] rounded-[10px] max-w-[346px] w-[100%] py-[10px] xl:px-[50px] px-[20px] m-auto">
        <img src="./items/apple.png" alt=" " className="h-[30px]" />
        <p className="app-content">Get the app</p>
      </div>
    </div>
  );
};

export default AppText;
