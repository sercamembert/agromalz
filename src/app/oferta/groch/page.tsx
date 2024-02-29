import React from "react";

import OfferHero from "@/components/offer/OfferHero";
import OfferQuality from "@/components/offer/OfferQuality";

const page = () => {
  return (
    <div className="pt-[100px] 2xl:pt-[120px] desktop:pt-[140px] flex flex-col padding min-h-screen">
      <OfferHero
        name="Groch"
        text="Nasz groch to kwintesencja zdrowego odżywiania. Uprawiany bez użycia sztucznych nawozów i pestycydów, jest źródłem białka i wielu ważnych składników odżywczych. Doskonały jako dodatek do zup, gulaszy czy jako składnik zdrowych przekąsek, groch z naszego gospodarstwa to gwarancja smaku i jakości, którą można poczuć w każdym kęsie."
        href="/images/offer/groch.png"
      />
      <OfferQuality />
    </div>
  );
};

export default page;
