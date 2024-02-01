import React from "react";

const Contact = () => {
  return (
    <section className="padding relative mb-[90px] md:mb-[80px] lg:mb-[104px] xl:mb-[130px] 3xl:mb-[140px] desktop:mb-[160px] ultra:mb-[240px]">
      <div className="container mx-auto">
        <div className="flex flex-col text-center w-full mb-[26px] md:mb-[40px] lg:mb-[53px] xl:mb-[66px] 2xl:mb-[75px] ultra:mb-[120px]">
          <h3 className="heading ">Kontakt</h3>
          <p className="mx-auto service-text">
            Wypełnij formularz, a my skontaktujemy się z Tobą w ciągu 24 godzin.
            <br className="hidden md:block" />
            Nie możemy się doczekać rozpoczęcia współpracy!
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="name" className="service-text text-gray-600">
                  Imie i Nazwisko
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary focus:bg-white outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out
                  text-[11px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] desktop:text-[20px] ultra:text-[29px] h-[30px] md:h-[35px] lg:h-auto
                  "
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label htmlFor="email" className="service-text text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary focus:bg-white outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out
                  text-[11px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] desktop:text-[20px] ultra:text-[29px] h-[30px] md:h-[35px] lg:h-auto
                  "
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label htmlFor="message" className="service-text text-gray-600">
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary focus:bg-white outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out
                  text-[11px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px] desktop:text-[20px] ultra:text-[29px] h-32"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                className="bg-primary text-white rounded-[2px] xl:rounded-[4px] 3xl:rounded-[5px] 
          h-[30px] lg:h-[33px] xl:h-[38px] 2xl:h-[35px] desktop:h-[39px] ultra:h-[56px]
          font-medium font-poppins text-[13px] lg:text-[15px] xl:text-[18px] desktop:text-[20px] ultra:text-[28px] px-3 xl:px-6
         cursor-pointer hover:brightness-75 duration-300
           min-w-[90px] md:w-auto md:min-w-[94px] lg:min-w-[125px] xl:min-w-[145px] 2xl:min-w-[150px] desktop:min-w-[165px] ultra:min-w-[283px]
          flex items-center justify-center mx-auto
          "
              >
                <p>Wyślij</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
