import React from "react";
import CropsBlockOffer from "@/components/Crops/CropBlockoOffer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oferta AgroMalz: Najwyższej Jakości Warzywa - Zdrowie z Polskich Pól",
  description:
    "Przeglądaj naszą ofertę najwyższej jakości warzyw i zbóż. AgroMalz to synonim świeżości, smaku i naturalności. Wybierz zdrowie prosto z polskiej ziemi!",
};
const page = () => {
  return (
    <div className="pt-[100px] 2xl:pt-[120px] desktop:pt-[140px] flex flex-col padding min-h-screen">
      <h1
        className="font-semibold text-primary text-[25px] md:text-[30px] lg:text-[40px] xl:text-[56px] 2xl:text-[61px] desktop:text-[61]
      mb-[20px] md:mb-[38px] lg:mb-[44px] xl:mb-[63px] 2xl:mb-[72px] desktop:mb-[79px] ultra:mb-[115px]
      "
      >
        Oferta Zboże
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px] md:gap-[27px] lg:gap-[37px] xl:gap-[46px] 2xl:gap-[52px] desktop:gap-[57px] ultra:gap-[84px]">
        <CropsBlockOffer
          image="/images/crops/zboze.png"
          name="Pszenica"
          text="Najbardziej popularne zboże, bogate w skrobię i białko, idealne do produkcji mąki i pieczywa."
          href="/oferta/pszenica"
        />
        <CropsBlockOffer
          image="/images/crops/rzepak.png"
          name="Rzepak"
          text="Roślina oleista, źródło cennego oleju roślinnego wykorzystywanego w kuchni i przemyśle."
          href="/oferta/rzepak"
        />
        <CropsBlockOffer
          image="/images/crops/groch.png"
          name="Groch"
          text="Białe lub zielone strąki pełne białka i błonnika, idealne do zup, potrawek i jako dodatek do dań."
          href="/oferta/groch"
        />
        <CropsBlockOffer
          image="/images/crops/zyto.png"
          name="Żyto"
          text="Zboże o intensywnym smaku, wykorzystywane do produkcji chleba, alkoholi oraz pasz dla zwierząt."
          href="/oferta/zyto"
        />
      </div>
      <h1
        className="font-semibold text-primary text-[25px] md:text-[30px] lg:text-[40px] xl:text-[56px] 2xl:text-[61px] desktop:text-[61]
      my-[20px] md:my-[38px] lg:my-[44px] xl:my-[63px] 2xl:my-[72px] desktop:my-[79px] ultra:my-[115px]"
      >
        Oferta Warzywa
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px] md:gap-[27px] lg:gap-[37px] xl:gap-[46px] 2xl:gap-[52px] desktop:gap-[57px] ultra:gap-[84px]">
        <CropsBlockOffer
          image="/images/crops/cebula.png"
          name="Cebula"
          text="Warzywo o charakterystycznym aromacie i ostrym smaku, używane do wielu potraw jako dodatek smakowy."
          href="/oferta/cebula"
        />
        <CropsBlockOffer
          image="/images/crops/ziemniaki.png"
          name="Ziemniaki"
          text="Popularne warzywo bulwiaste, bogate w skrobię, idealne do gotowania, pieczenia i smażenia."
          href="/oferta/ziemniaki"
        />
      </div>
    </div>
  );
};

export default page;
