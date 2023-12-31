"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGlassCheers } from "react-icons/fa";
import { Noto_Serif, Scope_One } from "next/font/google";
import Logo from "./Logo";

const notoSerif = Noto_Serif({ subsets: ["latin"] });

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    //function to update scroll direction, used for hiding navbar with scroll down
    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
};

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const scrollDirection = useScrollDirection();

  const links = [
    {
      id: 1,
      link: "pricing",
    },
    {
      id: 2,
      link: "details",
    },
    {
      id: 3,
      link: "contact",
    },
  ];

  return (
    <nav
      className={`${notoSerif.className} sticky ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      } w-full h-20 z-30 md:px-20 bg-stone-50 text-stone-800`}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <Logo />
          <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="nav-links px-4 cursor-pointer capitalize font-medium hover:scale-105 hover:text-stone-900 duration-200 link-underline"
              >
                <Link href={link}>{link}</Link>
              </li>
            ))}
          </ul>

          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer pr-4 z-10 text-stone-800 md:hidden"
          >
            {nav ? (
              <FaGlassCheers size={40} className="text-stone-50" />
            ) : (
              <FaBars size={30} />
            )}
          </div>

          {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-bl from-black to-stone-800 text-stone-50">
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className="px-4 cursor-pointer capitalize py-6 text-4xl"
                >
                  <Link onClick={() => setNav(!nav)} href={link}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
