import React from "react";
import ServiceBlock from "./ServiceBlock";
import rectangleImg from "../../../public/icons/rectangle.png";
import Image from "next/image";
import Link from "next/link";
const Services = () => {
  return (
    <div className="padding relative flex flex-col mb-[65px] md:mb-[80px] lg:mb-[104px] xl:mb-[130px] 3xl:mb-[140px] desktop:mb-[160px] ultra:mb-[240px]">
      <Image
        src={rectangleImg}
        alt="Usługi AgroMalz"
        className="absolute z-0 -left-[15%] md:-left-[5%] -top-[10%] w-[239px] h-[359px] lg:w-[443.11px] lg:h-[513.73px] lg:-left-[10%] xl:w-[543.11px] xl:h-[613.73px] 2xl:h-[680px] desktop:w-[670px] desktop:h-[720px] ultra:w-[964.87px] ultra:h-[1145.22px]"
      />
      <h3 className="heading text-left mb-[26px] md:mb-[40px] lg:mb-[53px] xl:mb-[66px] 2xl:mb-[75px] ultra:mb-[120px] z-10">
        Nasze Usługi
      </h3>
      <div className="flex justify-center gap-[45px] lg:gap-[58px] xl:gap-[73px] 2xl:gap-[82px] desktop:gap-[90px] ultra:gap-[133px] z-10">
        <div
          className="hidden md:flex flex-col gap-[14px] lg:gap-[17px] xl:gap-[22px] 2xl:gap-[24px] desktop:gap-[27px] ultra:gap-[39px]
        w-[90%]
        "
        >
          <p className="service-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
          </p>
          <p className="service-text">
            Aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident,
          </p>
          <p className="service-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius
            sit amet mattis vulputate. Nunc vel risus commodo viverra. Dolor
          </p>
        </div>
        <div className="flex flex-col gap-[35px] md:gap-[14px] lg:gap-[17px] xl:gap-[22px] 2xl:gap-[24px] desktop:gap-[27px] ultra:gap-[39px]">
          <ServiceBlock
            icon="/icons/crown.png"
            title="Uprawa Cebuli Najwyższej Jakości"
            text="Nasza gospodarka cebulowa specjalizuje się 
                w uprawie cebuli najwyższej jakości."
          />
          <ServiceBlock
            icon="/icons/plane.png"
            title="Dystrybucja i Dostawa Cebuli"
            text="Nasza firma oferuje usługę dostawy cebuli, 
            która zapewnia wygodę naszym klientom."
          />
          <ServiceBlock
            icon="/icons/chart.png"
            title="Doradztwo Rolnicze"
            text="Nasze gospodarstwo cebuli nie ogranicza się 
            tylko do uprawy. Jesteśmy również ekspertami w dziedzinie rolnictwa."
          />
        </div>
      </div>
      <p
        className="text-primary text-right font-semibold text-[12px] lg:text-[14px] xl:text-[17px] 2xl:text-[19px] desktop:text-[21px] ultra:text-[33px]
      mt-[24px] lg:mt-[32px] xl:mt-[40px] 2xl:mt-[45px] desktop:mt-[50px] ultra:mt-[73px]
      
      "
      >
        <Link href="/uprawy" className="hover:opacity-80 duration-300">
          Dowiedz się więcej
        </Link>
      </p>
    </div>
  );
};

export default Services;
