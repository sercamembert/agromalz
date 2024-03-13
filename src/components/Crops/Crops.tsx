import React from "react";
import CropsBlock from "./CropsBlock";
import Link from "next/link";

const Crops = () => {
  return (
    <div className="padding flex flex-col mb-[90px] md:mb-[80px] lg:mb-[104px] xl:mb-[130px] 3xl:mb-[140px] desktop:mb-[160px] ultra:mb-[240px] ">
      <h3 className="heading text-center mb-[26px] md:mb-[40px] lg:mb-[53px] xl:mb-[66px] 2xl:mb-[75px] ultra:mb-[120px]">
        Nasze uprawy
      </h3>
      <div className="grid grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 crops-gap justify-center">
        <CropsBlock
          image="/images/crops/zboze.png"
          name="Zboże"
          text="Uprawiamy zboże najwyższej jakości"
          href="/oferta/pszenica"
        />
        <CropsBlock
          image="/images/crops/cebula.png"
          name="Cebula"
          text="Cebula to nieodłączna część naszych upraw"
          href="/oferta/cebula"
        />

        <CropsBlock
          image="/images/crops/rzepak.png"
          name="Rzepak"
          text="Rzepak jest jedna z ważniejszych upraw"
          href="/oferta/rzepak"
        />

        <div className=" md:hidden ">
          <CropsBlock
            image="/images/crops/groch.png"
            name="Groch"
            text="Jedna z naszych wiodących upraw"
            href="/oferta/groch"
          />
        </div>

        <div className="block md:hidden col-span-2 mx-auto w-1/2">
          <CropsBlock
            image="/images/crops/ziemniaki.png"
            name="Ziemniaki"
            text="Wkrótce planujemy uprawę ziemniaków"
            href="/oferta/ziemniaki"
          />
        </div>

        <div className="hidden md:col-span-3 md:flex md:w-2/3 md:crops-gap md:justify-center md:mx-auto">
          <CropsBlock
            image="/images/crops/groch.png"
            name="Groch"
            text="Jedna z naszych wiodących upraw"
            href="/oferta/groch"
          />

          <CropsBlock
            image="/images/crops/ziemniaki.png"
            name="Ziemniaki"
            text="Wkrótce planujemy uprawę ziemniaków"
            href="/oferta/ziemniaki"
          />
        </div>
      </div>
      <p
        className="text-center font-semibold text-primary hover:opacity-80 duration-300 text-[12px] lg:text-[15px] xl:text-[19px] 2xl:text-[20px] desktop:text-[23px] ultra:text-[34px]
      mt-[26px] md:mt-[31px] lg:mt-[45px] xl:mt-[50px] 2xl:mt-[55px] desktop:mt-[70px] ultra:mt-[89px]
      "
      >
        <Link href="/oferta">Zobacz wszystkie uprawy</Link>
      </p>
    </div>
  );
};

export default Crops;
