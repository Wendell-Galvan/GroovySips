"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { Playfair } from "next/font/google";

const playFair = Playfair({ subsets: ["latin"] });

const CollapsibleInfo = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border p-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleCollapse}
      >
        <h2 className={`${playFair.className}text-xl font-semibold`}>
          {title}
        </h2>
        {isOpen ? <FaChevronDown /> : <FaChevronRight />}
      </div>
      {isOpen && <p className="mt-2">{content}</p>}
    </div>
  );
};

export default CollapsibleInfo;
