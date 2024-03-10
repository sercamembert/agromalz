import React from "react";
import Image from "next/image";
import Link from "next/link";
import topImg from "../../public/images/about/top.png";
import leftImg from "../../public/images/about/left.png";
import rightImg from "../../public/images/about/right.png";
const About = () => {
  return (
    <div
      className="padding flex flex-col md:flex-row gap-[31px] lg:gap-[41px] xl:gap-[51px] 2xl:gap-[53px] 3xl:gap-[56px] desktop:gap-[63px] ultra:gap-[80px]
py-[90px] md:py-[80px] lg:py-[104px] xl:py-[130px] 3xl:py-[140px] desktop:py-[160px] ultra:py-[240px]"
      id="onas"
    >
      <div className="flex flex-col w-full justify-center">
        <h2 className="heading">Kim jesteśmy?</h2>
        <div className="flex flex-col gap-[10px] lg:gap-[15px] mt-[5px] ultra:max-w-[970px] ultra:gap-[20px]">
          <p className="text-[12px] md:text-[11px] lg:text-[12.49px] xl:text-[15.12px] 2xl:text-[18.38px] desktop:text-[22px] ultra:text-[27px]">
            AgroMalz to wiodące gospodarstwo w uprawie cebuli w Polsce. Nasza
            pasja i zaangażowanie przekładają się na najwyższą jakość naszych
            warzyw. Dzięki zrównoważonym praktykom rolniczym oferujemy produkty
            spełniające najwyższe standardy.
          </p>
          <p className="text-[12px] md:text-[11px] lg:text-[12.49px] xl:text-[15.12px] 2xl:text-[18.38px] desktop:text-[22px] ultra:text-[27px]">
            Stawiamy na innowacyjne podejście do rolnictwa, dbając jednocześnie
            o ochronę środowiska. Nasze pola są owocem ciężkiej pracy i
            staranności, zapewniając świeżość i wyjątkowy smak naszych warzyw.
          </p>
        </div>
        <Link href="/onas" className="mt-[10px] lg:mt-[20px] xl:mt-[25px]">
          <button
            className="bg-primary text-white rounded-[2px] xl:rounded-[4px] 3xl:rounded-[5px] 
          h-[25px] md:h-[22px] lg:h-[25px] xl:h-[31px] 2xl:h-[35px] desktop:h-[38px] ultra:h-[56px]
          font-medium font-poppins text-[10px] md:text-[9px] lg:text-[10px] xl:text-[13.62px] desktop:text-[15px] ultra:text-[23px] px-3 xl:px-6
           button-animation cursor-pointer
           md:w-auto md:min-w-[94px] lg:min-w-[125px] xl:min-w-[155px] 2xl:min-w-[175px] desktop:min-w-[190px] ultra:min-w-[283px]
          flex items-center justify-center
          "
          >
            <p>Czytaj dalej</p>
          </button>
        </Link>
      </div>
      <div className="flex flex-col gap-[5px] lg:gap-[7px] xl:gap-[9px]  desktop:gap-[10px] ultra:gap-[15px] w-full">
        <Image
          src={topImg}
          alt="Agromalz"
          className="rounded-[6px] lg:rounded-[9px] xl:rounded-[11px] desktop:rounded-[13px] w-full"
        />
        <div className="flex gap-[5px] lg:gap-[7px] xl:gap-[9px]  desktop:gap-[10px] ultra:gap-[15px]">
          <Image
            src={leftImg}
            alt="Agromalz"
            className="w-1/2 rounded-[6px] lg:rounded-[9px] xl:rounded-[11px] desktop:rounded-[13px]"
          />
          <Image
            src={rightImg}
            alt="Agromalz"
            className="w-1/2 rounded-[6px] lg:rounded-[9px] xl:rounded-[11px] desktop:rounded-[13px]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
