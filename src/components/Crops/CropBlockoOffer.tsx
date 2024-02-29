import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  image: string;
  name: string;
  text: string;
  href: string;
}

const CropsBlockOffer = ({ image, name, text, href }: Props) => {
  return (
    <Link
      href={href}
      className=" flex flex-col border border-block p-[11px] md:p-[12px] lg:p-[15px] xl:p-[19px] 2xl:p-[22px] desktop:p-[24px] ultra:p-[34px]
    rounded-[6px] lg:rounded-[10px] 2xl:rounded-[14px] ultra:rounded-[23px] hover:brightness-90 duration-300 
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
          className="rounded-[5px] lg:rounded-[7px] 2xl:rounded-[10px] ultra:rounded-[14px] w-full 
        "
        />
      </div>

      <p
        className="font-semibold text-primary text-[17px] md:text-[19px] lg:text-[22px] xl:text-[26px] 2xl:text-[31px] desktop:text-[37.14px] ultra:text-[60.31px]
      mt-[7px] md:mb-[3px] lg:mt-[10px] lg:mb-[5px]
      "
      >
        {name}
      </p>
      <p
        className="text-offer text-[12px] lg:text-[15.49px] xl:text-[19.12px] 2xl:text-[21.38px] desktop:text-[23px] ultra:text-[35px]
      md:min-h-[60px] lg:min-h-[70px] xl:min-h-[90px] 2xl:min-h-[110px] ultra:min-h-[170px]
      "
      >
        {text}
      </p>
      <p
        className=" text-right text-[12px] lg:text-[15.49px] xl:text-[19.12px] 2xl:text-[21.38px] desktop:text-[23px] ultra:text-[35px] overflow-hidden
        mt-[14px] md:mt-[17px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[32px] desktop:mt-[36px] ultra:mt-[45px] text-primary opacity-75"
      >
        {"Dowiedz się więcej ->"}
      </p>
    </Link>
  );
};

export default CropsBlockOffer;
