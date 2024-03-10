import React from "react";

import OfferHero from "@/components/offer/OfferHero";
import OfferQuality from "@/components/offer/OfferQuality";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Najlepsza Cebula w Polsce od AgroMalz - Zdrowie i Smak z Natury",
  description:
    "Nasza cebula to kwintesencja smaku i jakości. Odkryj, jak pasja i zrównoważone metody uprawy AgroMalz przynoszą na Twój stół wyjątkowo zdrowe warzywa.",
};

const page = () => {
  return (
    <div className="pt-[100px] 2xl:pt-[120px] desktop:pt-[140px] flex flex-col padding min-h-screen">
      <OfferHero
        name="Cebula"
        text="Nasza cebula to prawdziwy skarb kulinarny, uprawiany z miłością i troską o najwyższą jakość. Słynie z intensywnego aromatu i smaku, który wzbogaca każdą potrawę. Idealna do sałatek, sosów, czy jako podstawa wielu dań, nasza cebula jest uprawiana bez użycia sztucznych środków ochrony roślin, co gwarantuje jej naturalność i pełnię smaku."
        href="/images/offer/cebula.png"
      />
      <OfferQuality />
    </div>
  );
};

export default page;
