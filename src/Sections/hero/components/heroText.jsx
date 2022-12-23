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

const HeroText = () => {
  return (
    <div className="2xl:max-w-[650px] xl:max-w-[500px] lg:max-w-[360px]">
      <div className="font-drukBold pl-[20px] md:pl-[0] leading-[1] 2xl:text-[70px] xl:text-[50px] lg:text-[38px] md:text-[35px] text-[32px] font-black mb-[30px] 2xl:mb-[20px] mt-[30px] md:mt-0">
        <div className="content mb-[10px]">
          <div className="w-full float-left">
            <div className="static">Don't</div>
            <b className="dynamic">
              <span className="content-text">
                buy
                <br />
                invest
                <br />
                trade
              </span>
            </b>
          </div>
          <div className="static w-full">crypto,</div>
          <div className="static colorful w-full mb-[30px]">earn it.</div>
        </div>
      </div>
      <div>
        <p className="mb-[15px] pl-[20px] md:pl-[0] md:mb-[35px] hidden md:block text-[15px] 2xl:text-[15px] font-bold">
          The web3 way of monetizing your content.
        </p>
      </div>
      <AppStore className="app-wrap mx-[20px] md:mx-[0px] lg:max-w-[364px]  py-[10px]">
        <div className="app-image h-[30px]"></div>
        <p className="app-content">Get the app</p>
      </AppStore>
    </div>
  );
};

export default HeroText;
