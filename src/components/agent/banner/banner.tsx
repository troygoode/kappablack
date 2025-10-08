"use client";

import Image from "next/image";

import Logo from "./Delta_Green_Banner_inverse.webp";

export default function Banner() {
  return (
    <div className="flex justify-center bg-white">
      <Image
        priority={true}
        src={Logo}
        alt="Logo"
        height="50"
        className="bg-black"
      />
    </div>
  );
}
