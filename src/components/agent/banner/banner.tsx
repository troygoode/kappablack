"use client";

import Link from "next/link";
import Image from "next/image";

import KappaBlackCutoutW from "./kappablack_cutout_w.webp";
import KappaBlackCutoutK from "./kappablack_cutout_k.webp";

import { Spinner } from "@/components/ui/spinner";
import { DarkModeToggle } from "@/components/dark-mode-toggle";

export default function Banner({ isLoading }: { isLoading: boolean }) {
  return (
    <div className="flex justify-center bg-black dark:bg-white h-12">
      <div className="w-24"></div>
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
          className="bg-black hidden dark:inline"
        />
        <Image
          priority={true}
          src={KappaBlackCutoutK}
          alt="Logo"
          height="48"
          className="bg-white inline dark:hidden"
        />
      </Link>
      {isLoading && (
        <div className="flex items-center">
          <Spinner className="text-black" />
        </div>
      )}
      <div className="flex w-24 items-center">
        <DarkModeToggle className="dark:bg-black dark:hover:bg-zinc-800 cursor-pointer" />
      </div>
    </div>
  );
}
