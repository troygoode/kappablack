"use client";

import Image from "next/image";
import Link from "next/link";

import KappaBlackCutoutK from "../agent/banner/kappablack_cutout_k.webp";
import KappaBlackCutoutW from "../agent/banner/kappablack_cutout_w.webp";

export default function Head() {
  return (
    <>
      <div className="mt-8 mb-4">
        <Link href="/">
          <Image
            src={KappaBlackCutoutK}
            alt="Kappa Black Cutout"
            className="bg-white hidden dark:inline"
          />
          <Image
            src={KappaBlackCutoutW}
            alt="Kappa Black Cutout"
            className="bg-black inline dark:hidden"
          />
        </Link>
      </div>
      <div className="mb-8 text-sm text-center">
        An online character sheet for <strong>Delta Green</strong>.
      </div>
    </>
  );
}
