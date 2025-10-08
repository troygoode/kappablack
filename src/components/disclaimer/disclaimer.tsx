"use client";

import Image from "next/image";

import Logo from "./DeltaGreen-Seal-Scientia1-white-dirty.webp";

export default function Disclaimer() {
  return (
    <div className="flex border-dashed border-zinc-600 border-2 p-4">
      <div className="mr-4">
        <Image src={Logo} alt="Delta Green" className="w-24" />
      </div>
      <div className="text-xs">
        Published by arrangement with the Delta Green Partnership. The
        intellectual property known as Delta Green is a trademark and copyright
        owned by the Delta Green Partnership, who has licensed its use here. The
        contents of this document are © Fatman, excepting those elements that
        are components of the Delta Green intellectual property.
      </div>
    </div>
  );
}
