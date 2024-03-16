import React from "react";

import OfferHero from "@/components/offer/OfferHero";
import OfferQuality from "@/components/offer/OfferQuality";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rzepak z Agro-Malz: Zrównoważona Uprawa dla Wysokiej Jakości Oleju",
  description:
    "Nasz rzepak to gwarancja jakości i ekologicznej uprawy. Poznaj nasze metody, które zapewniają zdrowy i naturalny olej rzepakowy, idealny dla Twojej kuchni.",
};

const page = () => {
  return (
    <div className="pt-[100px] 2xl:pt-[120px] desktop:pt-[140px] flex flex-col padding min-h-screen">
      <OfferHero
        name="Rzepak"
        text="Rzepak to wszechstronna roślina oleista, ceniona za swoje jasnożółte kwiaty i wysoką zawartość oleju w nasionach. Uprawiany z dbałością o zrównoważony rozwój, nasz rzepak jest idealnym wyborem dla producentów oleju, jak również stanowi cenny składnik pasz dla zwierząt. Jego uprawa wspiera bioróżnorodność i stanowi ważny element płodozmianu w ekologicznym rolnictwie."
        href="/images/offer/rzepak.png"
      />
      <OfferQuality />
    </div>
  );
};

export default page;
