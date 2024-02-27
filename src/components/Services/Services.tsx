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
            Nasze gospodarstwo rolnicze wyróżnia się nie tylko wysoką jakością
            produktów, ale także dbałością o ekologię. Stawiamy na zrównoważone
            metody uprawy, aby zapewnić zdrowe i ekologiczne produkty naszym
            klientom.
          </p>
          <p className="service-text">
            Innowacyjne podejście do rolnictwa pozwala nam nieustannie rozwijać
            się i dostarczać naszym klientom coraz to nowsze i lepsze
            rozwiązania w zakresie uprawy roślin oraz ochrony środowiska.
          </p>
          <p className="service-text">
            Jesteśmy zawsze otwarci na współpracę i partnerskie relacje z
            naszymi klientami. Razem tworzymy przyszłość rolnictwa, opartą na
            szacunku do natury i innowacyjności.
          </p>
        </div>
        <div className="flex flex-col gap-[35px] md:gap-[14px] lg:gap-[17px] xl:gap-[22px] 2xl:gap-[24px] desktop:gap-[27px] ultra:gap-[39px]">
          <ServiceBlock
            icon="/icons/crown.png"
            title="Uprawa Najwyższej Jakości"
            text="Nasze gospodarstwo specjalizuje się w uprawie cebuli, zbóż i rzepaku oraz niedługo ziemniaków spełniające wszelkie kryteria Global Gap oraz Grasp."
          />
          <ServiceBlock
            icon="/icons/plane.png"
            title="Dystrybucja i Dostawa"
            text="Nasza firma oferuje towar w pełni skalibrowany, przesortowany oraz spakowany gotowy do sprzedaży, która zapewnia wygodę naszych klientów."
          />
          <ServiceBlock
            icon="/icons/chart.png"
            title="Doradztwo Rolnicze"
            text="Nasze gospodarstwo nie ogranicza się tylko do uprawy, corocznie organizujemy z firmami partnerskim warsztaty cebulowe gdzie dzielimy się swoim doświadczeniem."
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
