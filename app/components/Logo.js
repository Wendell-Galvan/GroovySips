import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/images/logo.png";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center cursor-pointer">
        <Image src={logo} alt="logo" height={80} width={80} />
      </div>
    </Link>
  );
};

export default Logo;
