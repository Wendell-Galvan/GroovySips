"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaTimes, FaGlassCheers } from "react-icons/fa";
import { Noto_Serif } from "next/font/google";

const notoSerif = Noto_Serif({ subsets: ["latin"] });

const Navbar = () => {
  const [nav, setNav] = useState(false);

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
      className={`${notoSerif.className} w-full h-20 sticky top-0 z-30 text-stone-50 bg-stone-800 md:px-20`}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <Link href="/">Logo</Link>
          <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="nav-links px-4 cursor-pointer capitalize font-medium hover:scale-105 hover:text-stone-200 duration-200 link-underline"
              >
                <Link href={link}>{link}</Link>
              </li>
            ))}
          </ul>

          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer pr-4 z-10 text-white md:hidden"
          >
            {nav ? <FaGlassCheers size={40} /> : <FaBars size={30} />}
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
