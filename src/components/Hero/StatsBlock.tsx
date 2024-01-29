import React from "react";

interface Props {
  heading: string;
  text: string;
  text2: string;
}

const StatsBlock = ({ heading, text, text2 }: Props) => {
  return (
    <div
      className="flex flex-col bg-block rounded-[4px] lg:rounded-[7px] 2xl:rounded-[10px]
  px-[9px] md:px-[8px] lg:px-[10px] xl:px-[12px] 2xl:px-[15px] desktop:px-[16px] ultra:px-[24px]
  py-[7px] md:py-[6px] lg:py-[9px] xl:py-[10px] 2xl:py-[12px] ultra:py-[18px]
  "
    >
      <p className="text-text text-center font-poppins font-medium text-[15px] md:text-[16px] lg:text-[21px] xl:text-[26px] 2xl:text-[29px] desktop:text-[32px] ultra:text-[48px] leading-tight">
        {heading}
      </p>
      <div>
        <p className="text-text text-center opacity-65 font-poppins font-medium text-[10px] md:text-[7px] lg:text-[8px] xl:text-[10px] 2xl:text-[11px] desktop:text-[13px] ultra:text-[19px] leading-tight">
          {text}
        </p>
        <p className="text-text text-center opacity-65 font-poppins font-medium text-[10px] md:text-[7px] lg:text-[8px] xl:text-[10px] 2xl:text-[11px] desktop:text-[13px] ultra:text-[19px] leading-tight">
          {text2}
        </p>
      </div>
    </div>
  );
};

export default StatsBlock;
