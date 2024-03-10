import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  image: string;
  name: string;
  text: string;
  href: string;
}

const CropsBlock = ({ image, name, text, href }: Props) => {
  return (
    <div
      className="flex flex-col border border-block p-[11px] md:p-[12px] lg:p-[15px] xl:p-[19px] 2xl:p-[22px] desktop:p-[24px] ultra:p-[34px]
    rounded-[6px] lg:rounded-[10px] 2xl:rounded-[14px] ultra:rounded-[23px]
    "
    >
      <div
        className="rounded-[5px] lg:rounded-[7px] 2xl:rounded-[10px] ultra:rounded-[14px] bg-block
        border-block border-[4px] lg:border-[5px] xl:border-[6px] 2xl:border-[8px] desktop:border-[10px] ultra:border-[13px]"
      >
        <Image
          src={image}
          alt={`${text}`}
          width={560}
          height={356}
          className="rounded-[5px] lg:rounded-[7px] 2xl:rounded-[10px] ultra:rounded-[14px] 
        "
        />
      </div>

      <p
        className="font-semibold text-primary text-[13px] md:text-[14px] lg:text-[15.59px] xl:text-[19.57px] 2xl:text-[22px] desktop:text-[24.14px] ultra:text-[36.31px]
      mt-[7px] md:mb-[3px] lg:mt-[10px]
      "
      >
        {name}
      </p>
      <p
        className="text-[#808080] text-[10px] md:text-[12px] lg:text-[12.49px] xl:text-[15.12] 2xl:text-[18.38px] desktop:text-[22px] ultra:text-[27px]
      min-h-[27px] lg:min-h-[37px] 2xl:min-h-[55px] desktop:min-h-[66px] ultra:min-h-[81px]
      "
      >
        {text}
      </p>
      <p
        className=" text-right  text-[10px] md:text-[12px] lg:text-[12.49px] xl:text-[15.12] 2xl:text-[18.38px] desktop:text-[22px] ultra:text-[27px] overflow-hidden
        mt-[14px] md:mt-[17px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[32px] desktop:mt-[36px] ultra:mt-[45px]"
      >
        <Link
          href={href}
          className="text-primary opacity-80 hover:opacity-100 duration-300"
        >
          {"Dowiedz się więcej ->"}
        </Link>
      </p>
    </div>
  );
};

export default CropsBlock;
