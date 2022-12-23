import React from "react";
import styled from "styled-components";

const SocialLink = styled.div`
  a {
    // text-decoration: none;
    :hover {
      color: black;
    }
  }
`;

const List = () => {
  return (
    <div className="footerwrap md:flex justify-between">
      <div className="md:w-10/12 md:flex md:text-base text-xl font-bold">
        <SocialLink className="w-4/12 mb-10">
          <a href="https://twitter.com/BllAofficial" target="_blank">
            <p className="social">TWITTER</p>
          </a>
          <a href="https://discord.com/invite/BsEGx9kxkz" target="_blank">
            <p className="social">DISCORD</p>
          </a>
        </SocialLink>
        <SocialLink className="md:w-8/12 mb-10">
          <a href="https://blla.notion.site/Welcome-to-BllA-5aa11b676045477ba3282d5922b6292f" target="_blank">
            <p className="social">TERMS & CONDITIONS</p>
          </a>
          <a href="https://blla.notion.site/Privacy-Notice-67292195ec2f451f83b15eb420ca5732" target="_blank">
            <p className="social">PRIVACY POLICY</p>
          </a>
        </SocialLink>
      </div>
      <div className="mb-[80px]">
        <img
          src="./items/footerlogo.png"
          alt=" "
          className="w-[120px] md:w-[170px]"
        />
        <p className="footer_logo font-semibold text-[1rem]">Beta</p>
      </div>
    </div>
  );
};

export default List;
