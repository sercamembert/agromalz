"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Squash as Hamburger } from "hamburger-react";

const variants = {
  open: { x: 0 },
  closed: { x: 800 },
};
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <motion.div
        className={`fixed w-screen h-full top-[80px] bg-primary padding text-[30px] flex flex-col gap-8 md:hidden z-50 ${
          isOpen && "text-white"
        } ${isScrolled && isOpen && "bg-primary"}`}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.5 }}
        variants={variants}
        initial={{ x: 800 }}
      >
        <Link
          href="/"
          className="font-bold"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Strona główna
        </Link>
        <Link
          href="/onas"
          className="font-bold"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          O nas
        </Link>
        <Link
          href="/oferta"
          className="font-bold"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Oferta
        </Link>

        <Link
          href="/galeria"
          className="font-bold"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Galeria
        </Link>
        <Link
          href="#kontakt"
          className="font-bold"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          Kontakt
        </Link>
      </motion.div>

      <nav
        className={`w-full padding h-[80px] ${
          isOpen ? "bg-primary" : "bg-white"
        } fixed top-0 flex items-center justify-between xl:h-[100px] bg-none md:bg-none z-50 ${
          isScrolled && "md:bg-white"
        } `}
      >
        <a href="/" aria-description="Strona główna">
          <Image
            src="/icons/logo.png"
            alt="Agromalz"
            aria-description="Strona główna"
            width={318}
            height={193}
            className="w-[60px] lg:w-[70px] xl:w-[80px] 2xl:w-[90px] 3xl:w-[106px] ultra:w-[120px]"
          />
        </a>

        <div className="md:hidden">
          <Hamburger
            toggled={isOpen}
            size={17}
            toggle={setIsOpen}
            color={isOpen ? "white" : "black"}
          />
        </div>

        <div className="hidden md:flex items-center">
          <Link href="/" className="navbar-link">
            Strona główna
          </Link>
          <Link
            href="/onas"
            className="navbar-link  mx-[38px] lg:mx-[49px] xl:mx-[62px] 2xl:mx-[72px] desktop:mx-[85px]"
          >
            O nas
          </Link>
          <Link href="/oferta" className="navbar-link  ">
            Oferta
          </Link>

          <Link
            href="/galeria"
            className="navbar-link ml-[38px] lg:ml-[49px] xl:ml-[62px] 2xl:ml-[72px] desktop:ml-[85px]"
          >
            Galeria
          </Link>

          <Link
            href="/#kontakt"
            className="md:ml-[31px] lg:ml-[40px] xl:ml-[57px] 2xl:ml-[60px] flex items-center"
          >
            <button
              className="bg-primary text-white rounded-[5px] xl:rounded-[10px] h-[24px] lg:h-[30px] xl:h-[39.31px] 2xl:h-[45px] desktop:h-[53px]
              font-semibold text-[7.82px] md:text-[11px] xl:text-[15px] 2xl:text-[16px] desktop:text-[18px] px-3 xl:px-6 
              button-animation"
            >
              Kontakt
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
