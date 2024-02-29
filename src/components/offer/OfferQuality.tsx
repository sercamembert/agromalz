import React from "react";
import OfferQualityBLock from "@/components/offer/OfferQualityBlock";
import Image from "next/image";
import Link from "next/link";
const OfferQuality = () => {
  return (
    <div className="flex flex-col">
      <h1
        className="font-semibold text-primary text-[23px] md:text-[30px] lg:text-[40px] xl:text-[50px] 2xl:text-[56px] desktop:text-[61px] ultra:text-[91.71px] leading-tight 
        mt-[50px] md:mt-[36px] lg:mt-[48px] xl:mt-[60px] 2xl:mt-[70px] desktop:mt-[75px] ultra:mt-[115px]
        mb-[25px] lg:mb-[50px] 2xl:mb-[65px] desktop:mb-[80px] ultra:mb-[100px]
        "
      >
        W AgroMalz <br /> Stawiamy na Jakość
      </h1>
      <div className="flex flex-col md:flex-row md:justify-between">
        <div
          className="flex flex-col gap-[25px] md:gap-[30px] lg:gap-[44px] xl:gap-[50px] 2xl:gap-[60px] desktop:gap-[70px] ultra:gap-[90px]
          max-w-full md:w-[50%] sm:w-[80%]
          "
        >
          <OfferQualityBLock
            icon="/icons/leaves.png"
            title="Produkcja"
            text="Produkcja ziarna zbóż, nasion roślin strączkowych i oleistych jest jedna z ważniejszych upraw w naszym gospodarstwie."
          />
          <OfferQualityBLock
            icon="/icons/verified.png"
            title="Jakość"
            text="Każde z naszych upraw jest w pełni kontrolowane i spełniała pełne wymogi produkcji."
          />
          <OfferQualityBLock
            icon="/icons/school.png"
            title="Przewodnictwo"
            text="Nasze gospodarstwo jest wiodącym producentem cebuli w województwie Pomorskim. "
          />
        </div>
        <Image
          src="/images/offer/farmer-roku.png"
          alt="Gospodarstwo rolne Agromalz"
          width={669}
          height={810}
          className="w-full max-w-[260px] md:max-w-[33%] hidden md:block"
        />
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:mt-[43px] lg:mt-[57px] xl:mt-[71px] 2xl:mt-[80px] desktop:mt-[88px] ultra:mt-[139px]">
        <Image
          src="/images/offer/plon.png"
          alt="Gospodarstwo rolne Agromalz"
          width={669}
          height={810}
          className="w-full max-w-[260px] md:max-w-[27%] hidden md:block"
        />
        <div
          className="flex flex-col gap-[25px] md:gap-[30px] lg:gap-[44px] xl:gap-[50px] 2xl:gap-[60px] desktop:gap-[70px] ultra:gap-[90px]
          max-w-full md:w-[56%] sm:w-[80%] mt-[25px] md:mt-0
          "
        >
          <OfferQualityBLock
            icon="/icons/gem.png"
            title="Standardy"
            text="Nasze warzywa każdego roku są starannie badane oraz sprawdzane aby spełniły wszelkie standardy Dobrej Produkcji Rolniczej, certyfikatów Global G.A.P oraz G.R.A.S.P aby za zapewnić konsumenta że nasze warzywa są w pełni bezpiecznie i zdrowe."
          />
          <OfferQualityBLock
            icon="/icons/timer.png"
            title="Przyszłość"
            text="W niedalekej przyszłości naszą ofertę wzbogacimy o uprawę ziemniaka jadalnego."
          />
        </div>
      </div>

      <div className="flex flex-col items-center md:hidden mt-[90px] gap-[60px]">
        <Image
          src="/images/offer/farmer-roku.png"
          alt="Gospodarstwo rolne Agromalz"
          width={669}
          height={810}
          className="w-full max-w-[260px]"
        />
        <Image
          src="/images/offer/plon.png"
          alt="Gospodarstwo rolne Agromalz"
          width={669}
          height={810}
          className="w-full max-w-[260px]"
        />
      </div>
    </div>
  );
};

export default OfferQuality;
