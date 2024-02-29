import React from "react";

import OfferHero from "@/components/offer/OfferHero";
import OfferQuality from "@/components/offer/OfferQuality";

const page = () => {
  return (
    <div className="pt-[100px] 2xl:pt-[120px] desktop:pt-[140px] flex flex-col padding min-h-screen">
      <OfferHero
        name="Żyto"
        text="Żyto z naszego gospodarstwa to tradycyjne ziarno, które od wieków stanowi podstawę żywienia w wielu kulturach. Charakteryzuje się wyjątkowym smakiem i jest źródłem błonnika, co czyni go doskonałym wyborem dla osób dbających o zdrową dietę. Uprawiane z poszanowaniem natury, nasze żyto jest idealne do wypieku chleba, produkcji kasz i innych wyrobów zbożowych."
        href="/images/offer/zyto.png"
      />
      <OfferQuality />
    </div>
  );
};

export default page;
