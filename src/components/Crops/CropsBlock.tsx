import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  name: string;
  text: string;
}

const CropsBlock = ({ image, name, text }: Props) => {
  return (
    <div className="flex flex-col ">
      <Image
        src={image}
        alt={`${text}`}
        width={560}
        height={356}
        className="rounded-[5px] lg:rounded-[7px] 2xl:rounded-[10px] ultra:rounded-[14px]"
      />
      <p
        className="text-[13px] md:text-[14px] lg:text-[15.59px] xl:text-[19.57px] 2xl:text-[22px] desktop:text-[24.14px] ultra:text-[36.31px]
      my-[3px] lg:my-[5px]
      "
      >
        {name}
      </p>
      <p className="text-[9px] md:text-[10px] lg:text-[12.49px] xl:text-[15.12] 2xl:text-[18.38px] desktop:text-[22px] ultra:text-[27px] overflow-hidden">
        {text}
      </p>
    </div>
  );
};

export default CropsBlock;
