"use client";

import Link from "next/link";
import Image from "next/image";

import KappaBlackCutoutW from "./kappablack_cutout_w.webp";
import KappaBlackCutoutK from "./kappablack_cutout_k.webp";

import { Spinner } from "@/components/ui/spinner";
import { DarkModeToggle } from "@/components/dark-mode-toggle";
import { ModeSelector } from "../mode-selector";
import { HouseIcon } from "@/components/ui/icons/lucide-house";
import { Button } from "@/components/ui/button";

export default function Banner({ isLoading }: { isLoading: boolean }) {
  return (
    <div className="flex bg-black dark:bg-white h-12">
      <div className="grid grid-cols-3 w-full px-2">
        <div className="flex items-center justify-start">
          <Link href="/">
            <Button
              size="sm"
              variant="outline"
              className="cursor-pointer bg-black text-zinc-200 border-zinc-800 hover:text-white hover:bg-zinc-800 hover:border-zinc-600 dark:text-black dark:border-zinc-100 dark:hover:bg-zinc-200 dark:hover:text-black dark:hover:border-zinc-200"
            >
              <HouseIcon />
            </Button>
          </Link>
        </div>
        <div className="flex justify-center">
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
        </div>
        <div className="flex items-center justify-end gap-2">
          <ModeSelector />
          <DarkModeToggle className="cursor-pointer bg-black text-zinc-200 border-zinc-800 hover:text-white hover:bg-zinc-800 hover:border-zinc-600 dark:text-black dark:border-zinc-100 dark:hover:bg-zinc-200 dark:hover:text-black dark:hover:border-zinc-200" />
        </div>
      </div>
    </div>
  );
}
