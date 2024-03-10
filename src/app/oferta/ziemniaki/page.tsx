import React from "react";

import OfferHero from "@/components/offer/OfferHero";
import OfferQuality from "@/components/offer/OfferQuality";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ziemniaki od AgroMalz: Naturalny Smak Polskiego Pola",
  description:
    "Nasze ziemniaki to esencja zdrowego życia. Odkryj wyjątkowy smak i jakość ziemniaków uprawianych z pasją przez AgroMalz, Twoje źródło naturalnych warzyw.",
};

const page = () => {
  return (
    <div className="pt-[100px] 2xl:pt-[120px] desktop:pt-[140px] flex flex-col padding min-h-screen">
      <OfferHero
        name="Ziemniaki"
        text="Ziemniaki z naszego gospodarstwa to synonim smaku i naturalności. Starannie selekcjonowane odmiany gwarantują doskonałą teksturę i smak, niezależnie od tego, czy są gotowane, pieczone, czy smażone. Uprawiane w zgodzie z naturą, bez sztucznych nawozów i pestycydów, nasze ziemniaki są idealnym dodatkiem do każdego posiłku, od prostych, domowych obiadów, po wyszukane dania kuchni światowej."
        href="/images/offer/ziemniaki.png"
      />
      <OfferQuality />
    </div>
  );
};

export default page;
