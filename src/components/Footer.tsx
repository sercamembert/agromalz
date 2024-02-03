import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" bg-[#E6ECEC] pt-8 pb-6">
      <div className="mx-auto padding">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12">
            <h4 className="font-semibold text-primary font-poppins leading-tight text-[23px] md:text-[25px] lg:text-[26px] xl:text-[30px] desktop:text-[32px] ultra:text-[65px]">
              Dane kontaktowe
            </h4>
            <div
              className="flex flex-col pt-[15px] 
            pb-[30px]
            gap-[10px]
            "
            >
              <div className="flex items-center gap-[7px] xl:gap-[10px] 2xl:gap-[12px] desktop:gap-[15px] ultra:gap-[21px]">
                <Image
                  src="/icons/map.png"
                  width={30}
                  height={30}
                  alt="Lokalizacja"
                  className="w-[14px] lg:w-[15px] xl:w-[19px] 3xl:w-[21px] ultra:w-[38px]"
                />
                <div>
                  <p className="footer-contact">Wocławy 10R, 83-020</p>
                </div>
              </div>
              <div className="flex items-center gap-[7px] xl:gap-[10px] 2xl:gap-[12px] desktop:gap-[15px] ultra:gap-[21px]">
                <Image
                  src="/icons/phone.png"
                  width={30}
                  height={30}
                  alt="Lokalizacja"
                  className="w-[14px] lg:w-[15px] xl:w-[19px] 3xl:w-[21px] ultra:w-[38px]"
                />
                <p className="footer-contact">+48 500 338 717</p>
              </div>
              <div className="flex items-center gap-[7px] xl:gap-[10px] 2xl:gap-[12px] desktop:gap-[15px] ultra:gap-[21px]">
                <Image
                  src="/icons/email.png"
                  width={89.6}
                  height={89.6}
                  alt="Lokalizacja"
                  className="w-[14px] lg:w-[15px] xl:w-[19px] 3xl:w-[21px] ultra:w-[38px]"
                />
                <p className="footer-contact">agromalz@gmail.com</p>
              </div>
              <div className="flex gap-[20px] pt-[10px]">
                <Link
                  href="https://www.facebook.com/profile.php?id=100063694654214&locale=pl_PL"
                  target="_blank"
                  aria-description="Sprawdź nas na facebooku"
                >
                  <Image
                    src="/icons/facebook.png"
                    width={89.6}
                    height={89.6}
                    alt="Lokalizacja"
                    className="w-[18px] lg:w-[23px] xl:w-[25px] 2xl:w-[21px] 3xl:w-[23px] desktop:w-[28px] ultra:w-[38px] hover:brightness-75 duration-300 cursor-pointer"
                  />
                </Link>
                <Link
                  href="https://www.instagram.com/"
                  target="_blank"
                  aria-description="Sprawdź nas na instagramie"
                >
                  <Image
                    src="/icons/instgram.png"
                    width={89.6}
                    height={89.6}
                    alt="Lokalizacja"
                    className="w-[18px] lg:w-[23px] xl:w-[25px] 2xl:w-[21px] 3xl:w-[23px] desktop:w-[28px] ultra:w-[38px] hover:brightness-75 duration-300 cursor-pointer"
                  />
                </Link>

                <Link
                  href="https://www.youtube.com/@RolnikTV/videos"
                  target="_blank"
                  aria-description="Sprawdź nas na youtubie"
                >
                  <Image
                    src="/icons/youtube.png"
                    width={90}
                    height={63}
                    alt="Lokalizacja"
                    className="w-[25px] lg:w-[28px] xl:w-[31px] 2xl:w-[21px] 3xl:w-[23px] desktop:w-[35px] ultra:w-[38px] hover:brightness-75 duration-300 h-full"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12 ">
            <div className="flex lg:flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12  ml-auto">
                <ul className="list-unstyled">
                  <li className="py-[3px]">
                    <Link className="footer-link" href="/onas">
                      O nas
                    </Link>
                  </li>
                  <li className="py-[3px]">
                    <Link className="footer-link" href="/uprawy">
                      Uprawy
                    </Link>
                  </li>
                  <li className="py-[3px]">
                    <Link className="footer-link" href="/onas">
                      Galeria
                    </Link>
                  </li>
                  <li className="py-[3px]">
                    <Link className="footer-link" href="/onas">
                      Oferta
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 ">
                <ul className="list-unstyled">
                  <Link className="footer-link" href="/onas">
                    Strona główna
                  </Link>
                  <li className="py-[3px]">
                    <Link className="footer-link" href="/">
                      Regulamin
                    </Link>
                  </li>
                  <li className="py-[3px]">
                    <Link className="footer-link" href="/">
                      Polityka prywatności
                    </Link>
                  </li>
                  <li className="py-[3px]">
                    <Link className="footer-link" href="/kontakt">
                      Kontakt
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-primary w-full" />
        <div className="w-full text-center py-1 flex flex-col items-center md:flex-row justify-between gap-y-[5px]">
          <p className="font-semibold text-text text-[13px] lg:text-[14px] xl:text-[17px] desktop:text-[19px] ultra:text-[39px">
            © AgroMalz 2024
          </p>
          <Link
            className="text-text text-[11px] xl:text-[14px] desktop:text-[16px]"
            href="https://outofplace.space/"
            target="_blank"
          >
            Strona wykonana przez outofplace
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
