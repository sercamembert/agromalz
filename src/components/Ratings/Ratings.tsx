import React from "react";
import RatingBlock from "./RatingBlock";
import RatingsScroll from "./RatingsScroll";

const Ratings = () => {
  return (
    <div className="padding flex flex-col mb-[65px] md:mb-[80px] lg:mb-[104px] xl:mb-[130px] 3xl:mb-[140px] desktop:mb-[160px] ultra:mb-[240px]">
      <h3
        className="text-center mb-[20px] md:mb-[30px] lg:mb-[43px] xl:mb-[50px] 2xl:mb-[55px] ultra:mb-[105px]
      font-bold text-primary font-poppins leading-tight text-[20px] md:text-[23px] lg:text-[30px] xl:text-[38px] 2xl:text-[43px] desktop:text-[47px] ultra:text-[71px]
      "
      >
        Zobacz co sądzą o nas klienci
      </h3>

      <RatingsScroll>
        <div className="min-w-[767.7px] md:min-w-full flex gap-[45px] md:gap-0 justify-between">
          <RatingBlock
            name="Jarosław"
            text="Produkty wysokiej jakości, przyjazna obsługa klienta, świeżość i zdrowie, z poszanowaniem dla środowiska. Gorąco polecam!"
          />

          <RatingBlock
            name="Jacek"
            text="Świetne warzywa i kontakt. Wszystko jak najbardziej ok !!! Będę wracał z pewnością! Doskonałe doświadczenie!"
          />

          <RatingBlock
            name="Kamil"
            text="Super jakość produktów. Sprawny i bezproblemowy załadunek. Świetny kontakt, polecam serdecznie!"
          />
        </div>
      </RatingsScroll>
    </div>
  );
};

export default Ratings;
