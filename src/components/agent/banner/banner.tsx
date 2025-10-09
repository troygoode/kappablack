"use client";

import Link from "next/link";
import Image from "next/image";

import KappaBlackCutoutW from "./kappablack_cutout_w.webp";
import { Spinner } from "@/components/ui/spinner";

export default function Banner({ isLoading }: { isLoading: boolean }) {
  return (
    <div className="flex justify-center bg-white h-12">
      {isLoading && (
        // Hack to prevent layout shift
        <div className="flex items-center">
          <Spinner className="text-black opacity-0" />
        </div>
      )}
      <Link href="/">
        <Image
          priority={true}
          src={KappaBlackCutoutW}
          alt="Logo"
          height="48"
          className="bg-black"
        />
      </Link>
      {isLoading && (
        <div className="flex items-center">
          <Spinner className="text-black" />
        </div>
      )}
    </div>
  );
}
