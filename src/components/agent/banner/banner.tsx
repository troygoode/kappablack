"use client";

import Image from "next/image";

import KappaBlackCutoutW from "./kappablack_cutout_w.webp";

export default function Banner() {
  return (
    <div className="flex justify-center bg-white">
      <Image
        priority={true}
        src={KappaBlackCutoutW}
        alt="Logo"
        height="50"
        className="bg-black"
      />
    </div>
  );
}
