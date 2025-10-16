"use client";

import Image from "next/image";

import KappaBlackCutoutK from "../agent/banner/kappablack_cutout_k.webp";

import { RainbowButton } from "@/components/ui/rainbow-button";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { LoginBox } from "../home/login";
import { EmptyState } from "../home/empty";

export default function Home() {
  return (
    <Container className="flex w-full items-center justify-center">
      <div className="max-w-[350px]">
        <div className="mt-8 mb-8">
          <Image
            src={KappaBlackCutoutK}
            alt="Kappa Black Cutout"
            className="bg-white"
          />
        </div>
        <div className="mb-4">
          <div className="flex gap-4 justify-center">
            <RainbowButtonDemo />
            <Button variant="outline" disabled={true}>
              New Agent Wizard
            </Button>
          </div>
        </div>
        <div className="mb-4">
          <LoginBox />
        </div>
        <div className="mb-4">
          <EmptyState />
        </div>
      </div>
    </Container>
  );
}

export function RainbowButtonDemo() {
  return <RainbowButton>+ Blank Agent</RainbowButton>;
}
