import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  name: string;
  text: string;
  href: string;
}

const OfferHero = ({ href, name, text }: Props) => {
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div className="flex flex-col gap-[10px] w-full md:max-w-[316.27px] lg:max-w-[421.69px] xl:max-w-[529.06px] 2xl:max-w-[593.02px] desktop:max-w-[652.33px] ultra:max-w-[1020px]">
        <h1 className="font-semibold text-primary text-[27px] md:text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[56px] desktop:text-[61px] ultra:text-[91.71px] leading-tight text-center md:text-left">
          {name}
        </h1>
        <p className="text-offer text-[12px]  lg:text-[16px] xl:text-[20px] 2xl:text-[22px] desktop:text-[24px] ultra:text-[36px]  text-center md:text-left">
          {text}
        </p>
        <Link
          href="/#kontakt"
          className="bg-primary text-white rounded-[2px] xl:rounded-[4px] 3xl:rounded-[5px] 
          h-[25px] md:h-[22px] lg:h-[25px] xl:h-[31px] 2xl:h-[35px] desktop:h-[38px] ultra:h-[56px]
          font-medium font-poppins text-[10px] md:text-[9px] lg:text-[10px] xl:text-[13.62px] desktop:text-[15px] ultra:text-[23px] px-3 xl:px-6
           button-animation cursor-pointer
           md:w-auto md:min-w-[94px] lg:min-w-[125px] xl:min-w-[155px] 2xl:min-w-[175px] desktop:min-w-[190px] ultra:min-w-[283px]
          flex items-center justify-center mx-auto md:mr-auto md:mx-0 desktop:mt-[10px]
          "
        >
          <p>Kontakt</p>
        </Link>
      </div>
      <div
        className="rounded-[5px] lg:rounded-[7px] 2xl:rounded-[10px] ultra:rounded-[14px] bg-block
        border-block border-[17px] lg:border-[22px] xl:border-[28px] 2xl:border-[31px] desktop:border-[35px] ultra:border-[54px]
        max-h-[310px] md:max-h-[298.59px] lg:max-h-[398.13px] xl:max-h-[499.49px] 2xl:max-h-[559.88px] desktop:max-h-[615.87px] ultra:max-h-[963px]
        w-full md:w-[38%] mt-[40px] md:mt-0 max-w-[260px] md:max-w-full mx-auto md:mx-0
        "
      >
        <Image
          src={href}
          alt="Gospodarstwo rolne Agromalz"
          width={687}
          height={855}
          className="w-full max-w-[260px] md:max-w-full  h-full"
        />
      </div>
    </div>
  );
};

export default OfferHero;
