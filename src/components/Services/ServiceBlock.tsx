import Image from "next/image";
import React from "react";

interface Props {
  icon: string;
  title: string;
  text: string;
}
const ServiceBlock = ({ icon, text, title }: Props) => {
  return (
    <div className="flex gap-[18px] md:gap-[12px] lg:gap-[22px] xl:gap-[28px] 2xl:gap-[32px] desktop:gap-[36px] ultra:gap-[52px]">
      <Image
        src={icon}
        alt={title}
        width={82}
        height={82}
        className="w-[28px] lg:w-[35px] xl:w-[45px] 2xl:w-[50px] desktop:w-[55px] ultra:w-[82px] h-[28px] lg:h-[35px] xl:h-[45px] 2xl:h-[50px] desktop:h-[55px] ultra:h-[82px]"
      />
      <div className="flex flex-col">
        <p className="leading-tight font-poppins font-semibold text-[13px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px] desktop:text-[22px] ultra:text-[33px]">
          {title}
        </p>
        <p className="text-[12px] lg:text-[13px] xl:text-[16px] 2xl:text-[18px] desktop:text-[20px] ultra:text-[29px]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default ServiceBlock;
