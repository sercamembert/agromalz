import Image from "next/image";
import Link from "next/link";
import React from "react";
import starImg from "../../public/icons/star.png";
import Stats from "./Stats";
const Hero = () => {
  return (
    <div className="padding pt-[100px] 2xl:pt-[120px] desktop:pt-[140px] flex flex-col md:flex-row">
      <div className="flex flex-col gap-[10px] w-full md:max-w-[350px] lg:max-w-[463px] xl:max-w-[584px] 2xl:max-w-[657px] desktop:max-w-[709px] ultra:max-w-[1065px]">
        <h1 className="font-semibold text-primary text-[27px] md:text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[56px] desktop:text-[61px] ultra:text-[91.71px] leading-tight text-center md:text-left">
          Witamy w Naszym <br /> Gospodarstwie Rolnym!
        </h1>
        <p className="text-text text-[12px]  lg:text-[16px] xl:text-[20px] 2xl:text-[22px] desktop:text-[24px] ultra:text-[36px]  text-center md:text-left">
          Jesteśmy pasjonatami rolnictwa, którzy z pasją i zaangażowaniem
          prowadzą gospodarstwo od pokoleń. Nasza rodzina dba o tradycję i
          nieustannie się rozwija, wprowadzając nowoczesne technologie i
          innowacje, aby zapewnić najwyższą jakość naszych produktów.
        </p>
        <Link
          href="/#onas"
          className="bg-primary text-white rounded-[2px] xl:rounded-[4px] 3xl:rounded-[5px] 
          h-[25px] md:h-[22px] lg:h-[25px] xl:h-[31px] 2xl:h-[35px] desktop:h-[38px] ultra:h-[56px]
          font-medium font-poppins text-[12px] md:text-[9px] lg:text-[12px] xl:text-[13.62px] desktop:text-[15px] ultra:text-[23px] px-3 xl:px-6
           button-animation cursor-pointer
           md:w-auto md:min-w-[94px] lg:min-w-[125px] xl:min-w-[155px] 2xl:min-w-[175px] desktop:min-w-[190px] ultra:min-w-[283px]
          flex items-center justify-center mx-auto md:mr-auto md:mx-0
          "
        >
          <p>Dowiedz się więcej</p>
        </Link>

        <div className="hidden md:block">
          <Stats />
        </div>
      </div>
      <Image
        src="/images/hero/hero.webp"
        alt="Gospodarstwo rolne Agromalz"
        width={877}
        height={952}
        className="w-full max-w-[260px] md:max-w-full mx-auto md:w-[46%] mt-[40px] md:mt-0"
        loading="eager"
        priority={true}
        quality={100}
      />
      <div className="block md:hidden">
        <Stats />
      </div>
    </div>
  );
};

export default Hero;
