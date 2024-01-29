import React from "react";
import starImg from "../../../public/icons/star.png";
import Image from "next/image";
import StatsBlock from "./StatsBlock";
const Stats = () => {
  return (
    <div
      className="flex flex-col mt-[22px] md:mt-[27px] lg:mt-[36px] xl:mt-[46px] 2xl:mt-[51px] desktop:mt-[55px] ultra:mt-[82px]
    gap-[8px] lg:gap-[12px] xl:gap-[15px] 2xl:gap-[17px] desktop:gap-[19px] ultra:gap-[28px]
    "
    >
      <div className="flex items-center justify-center md:justify-start gap-[5px]">
        <h2 className="font-medium text-text text-[10px] md:text-[12px] lg:text-[15px] xl:text-[18px] 2xl:text-[21px] desktop:text-[23px] ultra:text-[34px]">
          Co nas wyróżnia?
        </h2>
        <Image
          src={starImg}
          alt="Co nas wyróżnia?"
          className="w-[10px] md:w-[11px] lg:w-[14px] xl:w-[17px] 2xl:w-[20px] ultra:w-[31px]"
        />
      </div>
      <div className="flex justify-center md:justify-start gap-[7px] md:gap-[9px] lg:gap-[11px] xl:gap-[14px] 2xl:gap-[16px] desktop:gap-[17px] ultra:gap-[25px]">
        <StatsBlock heading="54" text="Liczba maszyn" text2="rolniczych" />
        <StatsBlock heading="5000" text="Suma naszych" text2="klientów" />
        <StatsBlock heading="23" text="Ilość naszych" text2="własnych upraw" />
      </div>
    </div>
  );
};

export default Stats;
