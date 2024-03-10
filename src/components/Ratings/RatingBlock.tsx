import Image from "next/image";
import React from "react";
import avatarImg from "../../../public/icons/Avatar.png";
import startsImg from "../../../public/icons/ratings.png";

interface Props {
  name: string;
  text: string;
}

const RatingBlock = ({ name, text }: Props) => {
  return (
    <div
      className="flex flex-col gap-[3px] bg-white rounded-[5px] xl:rounded-[7px] ultra:rounded-[11px]
    px-[14px] md:px-[11px] lg:px-[15px] xl:px-[18px] 2xl:px-[21px] desktop:px-[23px] ultra:px-[33px]
    py-[15px] md:py-[11px] lg:py-[15px] xl:py-[19px] 2xl:py-[22px] desktop:py-[24px] ultra:py-[33px]
    shadow-md
    "
    >
      <div className="flex gap-[9px] md:gap-[11px] lg:gap-[15px] xl:gap-[18px] 2xl:gap-[21px] desktop:gap-[23px] ultra:gap-[38px]">
        <Image
          src={avatarImg}
          alt="Opinia"
          className="w-[26px] md:w-[22px] lg:w-[29px] xl:w-[36px] 2xl:w-[41px] desktop:w-[44px] ultra:w-[66px]"
        />
        <div className="flex flex-col ">
          <p className="font-semibold text-primary text-[11px] md:text-[9px] lg:text-[11px] xl:gap-[13px] 2xl:gap-[15px] desktop:text-[18px] ultra:text-[25px]">
            {name}
          </p>
          <Image
            src={startsImg}
            alt="Ocena"
            className="w-[47px] md:w-[36px] lg:w-[48px] xl:w-[61px] 2xl:w-[68px] desktop:w-[75px] ultra:w-[110px]"
          />
        </div>
      </div>
      <p
        className="text-text text-[9px] lg:text-[12px] xl:text-[12px] 2xl:text-[13px] desktop:text-[15px] ultra:text-[22px]
      w-[210px] md:w-[174px] lg:w-[230px] xl:w-[290px] 2xl:w-[326px] desktop:w-[358px] ultra:w-[527px]
      mt-[5px] lg:mt-[9px] 2xl:mt-[11px]
      "
      >
        {text}
      </p>
    </div>
  );
};

export default RatingBlock;
