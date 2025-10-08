"use client";

import Image from "next/image";

import Logo from "./Delta_Green_Banner.webp";

export default function Banner() {
  return (
    <div className="flex justify-center bg-black mb-4">
      <Image
        priority={true}
        src={Logo}
        alt="Logo"
        height="50"
        className="bg-white"
      />
    </div>
  );
}
