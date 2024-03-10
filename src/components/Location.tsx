import React from "react";
import Image from "next/image";
const Location = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-y-[20px] padding">
      <div className="flex flex-col gap-[19px] lg:gap-[26px] xl:gap-[33px] 2xl:gap-[37px] 3xl:gap-[39px] desktop:gap-[43px] ultra:gap-[65px]">
        <h3 className="heading text-left">Lokalizacja</h3>
        <div className="flex items-center gap-[7px] xl:gap-[10px] 2xl:gap-[12px] desktop:gap-[15px] ultra:gap-[21px]">
          <Image
            src="/icons/map.png"
            width={30}
            height={30}
            alt="Lokalizacja"
            className="w-[14px] lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[23px] desktop:w-[30px] ultra:w-[38px]"
          />
          <div>
            <p className="text-[13px] lg:text-[16px] xl:text-[19px] 2xl:text-[21px] desktop:text-[25px] ultra:text-[39px]">
              Wocławy 10R, 83-020
            </p>
          </div>
        </div>
        <div className="flex items-center gap-[7px] xl:gap-[10px] 2xl:gap-[12px] desktop:gap-[15px] ultra:gap-[21px]">
          <Image
            src="/icons/phone.png"
            width={30}
            height={30}
            alt="Lokalizacja"
            className="w-[14px] lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[23px] desktop:w-[30px] ultra:w-[38px]"
          />
          <p className="text-[13px] lg:text-[16px] xl:text-[19px] 2xl:text-[21px] desktop:text-[25px] ultra:text-[39px]">
            +48 500 338 717
          </p>
        </div>
        <div className="flex items-center gap-[7px] xl:gap-[10px] 2xl:gap-[12px] desktop:gap-[15px] ultra:gap-[21px]">
          <Image
            src="/icons/email.png"
            width={30}
            height={30}
            alt="Lokalizacja"
            className="w-[14px] lg:w-[15px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[23px] desktop:w-[30px] ultra:w-[38px]"
          />
          <p className="text-[13px] lg:text-[16px] xl:text-[19px] 2xl:text-[21px] desktop:text-[25px] ultra:text-[39px]">
            agromalz@gmail.com
          </p>
        </div>
      </div>
      <iframe
        title="Lokalizacja gospodarstwa"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2329.560642836268!2d18.786630877093444!3d54.27634960473323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd6f4d313fff2f%3A0x6ebe1cadcbfdd620!2sAGRO-MALZ%20Piotr%20Malz%20Warzywa%20na%20zam%C3%B3wienie%20Pakowanie%20towaru%20Tr%C3%B3jmiasto!5e0!3m2!1spl!2spl!4v1706715940353!5m2!1spl!2spl"
        loading="lazy"
        className="rounded-[10px] h-[220px] md:h-[210px] lg:h-[280px] xl:h-[352px] 2xl:h-[396px] 3xl:h-[422px] desktop:h-[473px] ultra:h-[704px] w-full md:w-[60%]"
      ></iframe>
    </div>
  );
};

export default Location;
