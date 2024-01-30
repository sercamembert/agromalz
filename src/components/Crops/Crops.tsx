import React from "react";
import CropsBlock from "./CropsBlock";
import Link from "next/link";

const Crops = () => {
  return (
    <div className="padding flex flex-col mb-[90px] md:mb-[80px] lg:mb-[104px] xl:mb-[130px] 3xl:mb-[140px] desktop:mb-[160px] ultra:mb-[240px]">
      <h3 className="heading text-center mb-[26px] md:mb-[40px] lg:mb-[53px] xl:mb-[66px] 2xl:mb-[75px] ultra:mb-[120px]">
        Nasze uprawy
      </h3>
      <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-1 crops-gap">
        <CropsBlock
          image="/images/crops/zboze.png"
          name="Zboże"
          text="Uprawiamy zboże najwyższej jakości"
        />
        <CropsBlock
          image="/images/crops/cebula.png"
          name="Cebula"
          text="Cebula to nieodłączna część naszych upraw"
        />
        <div className=" relative left-1/2 md:left-0">
          <CropsBlock
            image="/images/crops/slonecznik.png"
            name="Słonecznik"
            text="Słonecznik jest jedna z ważniejszych upraw"
          />
        </div>
      </div>
      <p
        className="text-center font-semibold text-primary hover:opacity-80 duration-300 text-[12px] lg:text-[15px] xl:text-[19px] 2xl:text-[20px] desktop:text-[23px] ultra:text-[34px]
      mt-[18px] md:mt-[21px] lg:mt-[26px] xl:mt-[34px] 2xlmt-[37px] desktop:mt-[40px] ultra:mt-[89px]
      "
      >
        <Link href="/uprawy">Zobacz wszystkie uprawy</Link>
      </p>
    </div>
  );
};

export default Crops;
