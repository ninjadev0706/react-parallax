import React from "react";
import styled from "styled-components";

const AppStore = styled.div`
  background-color: white;
  .app-image {
    background: url("../items/apple.png") no-repeat;
    background-size: 26px 30px;
    width: 25px;
  }
  :hover {
    background-color: black;
    .app-content {
      color: white;
    }
    .app-image {
      background: url("../items/white-apple.png") no-repeat;
      background-size: 26px 30px;
      width: 25px;
    }
  }
`;

const AppText = () => {
  return (
    <div className="md:w-[45%]">
      <div className="leading-[60px] mb-[40px]">
        <p className="pl-[5px] font-drukBold leading-[1] 2xl:text-[60px] md:text-[40px] text-[32px]">
          No Ads.
        </p>
        <p className="pl-[5px] font-drukBold leading-[1] 2xl:text-[60px] md:text-[40px] text-[32px]">
          No Rugs.
        </p>
        <p className="pl-[5px] hidden md:block font-drukBold leading-[1] 2xl:text-[60px] md:text-[40px] text-[32px]">
          You in control.
        </p>
        <p className="block md:hidden font-drukBold leading-[1] text-[35px]">
          You in control.
        </p>
        <div className="flex items-end md:mt-[50px] mt-[20px] relative">
          <p className="text-[130px] md:text-[100px] lg:text-[150px] xl:text-[200px] 2xl:text-[250px] leading-[120px] md:leading-[100px] lg:leading-[150px] xl:leading-[200px] 2xl:leading-[250px] font-drukBold text-[#2c05f7]">
            80
          </p>
          <p className="font-drukBold creator_pro font-bold text-[#2c05f7]">
            %
          </p>
        </div>
        <p className="pl-[5px] text-[20px] md:text-[30px] font-helvetica font-bold text-[#2c05f7] mt-[-20px] mb-[20px] goes">
          Goes to creators
        </p>
        <div className="pl-[5px] flex items-end mt-[-20px] relative">
          <p className="smallnumber font-drukBold text-4xl mt-[10px] md:mt-[30px] font-extrabold text-[#2c05f7]">
            20
          </p>
          <p className="service_pro font-drukBold mb-[-20px] font-bold text-[#2c05f7]">
            %
          </p>
        </div>
        <p className="pl-[5px] text-[20px] md:text-[30px] font-bold font-helvetica text-[#2c05f7] goes">
          Goes for running the service
        </p>
        <p className="pl-[5px] my-[20px] md:text-[17px] text-[14px] pr-[15px] font-light leading-[20px]">
          Unlike big tech, you deserve more than crumbs. We don’t shove ads down
          users’ throats nor we their data, and most importantly we get paid
          when you get paid.
        </p>
      </div>
      <AppStore className="app-wrap mx-[5px] lg:max-w-[364px]  py-[10px]">
        <div className="app-image h-[30px]"></div>
        <p className="app-content">Get the app</p>
      </AppStore>
    </div>
  );
};

export default AppText;
