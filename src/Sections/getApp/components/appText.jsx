import React from "react";

const AppText = () => {
  return (
    <div className="md:w-[45%]">
      <div className="leading-[60px] mb-[40px]">
        <p className="font-drukBold leading-[1] 2xl:text-[60px] md:text-[40px] text-[35px]">
          No Ads.
        </p>
        <p className="font-drukBold leading-[1] 2xl:text-[60px] md:text-[40px] text-[35px]">
          No Rugs.
        </p>
        <p className="hidden md:block font-drukBold leading-[1] 2xl:text-[60px] md:text-[40px] text-[35px]">
          You in control.
        </p>
        <p className="block md:hidden font-drukBold leading-[1] text-[35px]">
          Control.
        </p>
        <div className="flex items-end mt-[50px] md:mt-[120px] md:mb-[80px] relative">
          <p className="text-[120px] md:text-[150px] lg:text-[170px] xl:text-[200px] 2xl:text-[250px] font-drukBold text-[#2c05f7]">
            80
          </p>
          <p className="font-drukBold creator_pro mb-[-30px] md:mb-[-70px] font-bold text-[#2c05f7]">
            %
          </p>
        </div>
        <p className="text-[20px] md:text-[30px] font-helvetica font-bold text-[#2c05f7] my-[20px] goes">
          Goes to creators
        </p>
        <div className="flex items-end mt-[-20px] relative">
          <p className="smallnumber font-drukBold text-4xl mt-[10px] md:mt-[30px] font-extrabold text-[#2c05f7]">
            20
          </p>
          <p className="service_pro font-drukBold mb-[-20px] font-bold text-[#2c05f7]">
            %
          </p>
        </div>
        <p className="text-[20px] md:text-[30px] font-bold font-helvetica text-[#2c05f7] goes">
          Goes for running the service
        </p>
        <p className="my-[20px] text-[17px] font-light leading-[20px]">
          Unlike big tech, you deserve more than crumbs. We don't shove ads down
          users' throats, we don't sell their data, and the importantly it is
          all about you.
        </p>
      </div>
      <div className="app-wrap">
        <img src="./items/apple.png" alt=" " className="h-[30px]" />
        <p className="app-content">Get the app</p>
      </div>
    </div>
  );
};

export default AppText;
