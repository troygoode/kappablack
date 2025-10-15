"use client";

import Image from "next/image";

import LogoW from "./DeltaGreen-Seal-Scientia1-white-dirty.webp";
import LogoK from "./DeltaGreen-Seal-Scientia1-black-dirty.webp";

export default function Disclaimer() {
  return (
    <div className="flex border-dashed border-zinc-200 dark:border-zinc-800 border-2 p-4 print:hidden text-muted-foreground">
      <div className="mr-4 pt-0.5">
        <Image
          src={LogoW}
          alt="Delta Green"
          className="w-56 md:w-56 lg:w-28 xl:w-22 hidden dark:inline"
        />
        <Image
          src={LogoK}
          alt="Delta Green"
          className="w-56 md:w-56 lg:w-28 xl:w-22 inline dark:hidden"
        />
      </div>
      <div className="text-xs">
        Published by arrangement with the Delta Green Partnership. The
        intellectual property known as Delta Green is a trademark and copyright
        owned by the Delta Green Partnership, who has licensed its use here. The
        contents of this document are &copy; Kappa Black, excepting those
        elements that are components of the Delta Green intellectual property.
      </div>
    </div>
  );
}
