import Image from "next/image";
import React from "react";

interface Props {
  icon: string;
  title: string;
  text: string;
}
const OfferQualityBlock = ({ icon, text, title }: Props) => {
  return (
    <div className="flex gap-[18px] md:gap-[12px] lg:gap-[22px] xl:gap-[28px] 2xl:gap-[32px] desktop:gap-[36px] ultra:gap-[52px]">
      <div
        className="bg-block flex items-center justify-center rounded-[5px] 2xl:rounded-[10px] ultra:rounded-[15px]
        min-w-[43px] md:min-w-[46px] lg:min-w-[62px] xl:min-w-[77px] 2xl:min-w-[87px] desktop:min-w-[95px] ultra:min-w-[150px]
        max-h-[43px] md:max-h-[46px] lg:max-h-[62px] xl:max-h-[77px] 2xl:max-h-[87px] desktop:max-h-[95px] ultra:max-h-[150px]
      "
      >
        <Image
          src={icon}
          alt={title}
          width={94}
          height={94}
          className="w-[27px] lg:w-[38px] xl:w-[48px] 2xl:w-[54px] desktop:w-[60px] ultra:w-[94px] aspect-square"
        />
      </div>

      <div className="flex flex-col">
        <p className="leading-tight text-primary font-poppins font-semibold text-[12px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px] desktop:text-[22px] ultra:text-[33px]">
          {title}
        </p>
        <p className="text-offer text-[11px] lg:text-[13px] xl:text-[16px] 2xl:text-[18px] desktop:text-[20px] ultra:text-[29px]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default OfferQualityBlock;
