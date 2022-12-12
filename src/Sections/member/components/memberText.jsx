import React from "react";

const MemberText = () => {
  return (
    <div className="px-[10%] w-[100%]">
      <p className="leading-[1.3] text-[30px] md:text-[40px] 2xl:text-[55px] font-drukBold font-black max-w-[600px]">
        Offer your fans monthly memberships.
      </p>
      <p className="leading-[1.3] text-[30px] md:text-[40px] 2xl:text-[55px] font-black mb-[20px] 2xl:mb-[55px] mt-[20px] 2xl:mt-[55px] font-drukBold">
        All paid in ETH.
      </p>
      <p className="hidden md:block text-[17px] max-w-[400px]">
        Yes, that's right, all paid in ETH directly into your wallet!
      </p>
    </div>
  );
};

export default MemberText;
