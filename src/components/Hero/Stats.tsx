import React from "react";
import starImg from "../../../public/icons/star.png";
import Image from "next/image";
import StatsBlock from "./StatsBlock";
const Stats = () => {
  return (
    <div
      className="flex flex-col mt-[40px] md:mt-[27px] lg:mt-[36px] xl:mt-[46px] 2xl:mt-[51px] desktop:mt-[55px] ultra:mt-[82px]
    gap-[8px] lg:gap-[12px] xl:gap-[15px] 2xl:gap-[17px] desktop:gap-[19px] ultra:gap-[28px]
    "
    >
      <div className="flex items-center justify-center md:justify-start gap-[5px]">
        <p className="font-medium text-text text-[14px] md:text-[12px] lg:text-[15px] xl:text-[18px] 2xl:text-[21px] desktop:text-[23px] ultra:text-[34px]">
          Co nas wyróżnia?
        </p>
        <Image
          src={starImg}
          alt="Co nas wyróżnia?"
          className="w-[14px] md:w-[11px] lg:w-[14px] xl:w-[17px] 2xl:w-[20px] ultra:w-[31px]"
        />
      </div>
      <div className="flex justify-center md:justify-start gap-[12px] md:gap-[9px] lg:gap-[11px] xl:gap-[14px] 2xl:gap-[16px] desktop:gap-[17px] ultra:gap-[25px]">
        <StatsBlock heading="87" text="Liczba maszyn" text2="rolniczych" />
        <StatsBlock heading="400+" text="Liczba naszych" text2="hektarów" />
        <StatsBlock heading="6" text="Ilość naszych" text2="własnych upraw" />
      </div>
    </div>
  );
};

export default Stats;
