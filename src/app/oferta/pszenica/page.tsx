import React from "react";

import OfferHero from "@/components/offer/OfferHero";
import OfferQuality from "@/components/offer/OfferQuality";

const page = () => {
  return (
    <div className="pt-[100px] 2xl:pt-[120px] desktop:pt-[140px] flex flex-col padding min-h-screen">
      <OfferHero
        name="Pszenica"
        text="W naszym gospodarstwie rolnym dbamy o wysoką jakość pszenicy, jednej z kluczowych upraw na naszych polach. Dzięki starannej opiece i zrównoważonemu podejściu do rolnictwa, dostarczamy zdrowe i świeże produkty, które spełniają najwyższe standardy."
        href="/images/offer/pszenica.png"
      />
      <OfferQuality />
    </div>
  );
};

export default page;
