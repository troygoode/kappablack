"use client";

import type { TAgentRecord } from "@/actions/get-agent";
import type { IAgent } from "@/types/agent";

import Image from "next/image";
import { redirect, RedirectType } from "next/navigation";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

import KappaBlackCutoutK from "../agent/banner/kappablack_cutout_k.webp";

import { create } from "@/actions/put-agent";

import { RainbowButton } from "@/components/ui/rainbow-button";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { LoginBox } from "../home/login";
import Disclaimer from "../disclaimer/disclaimer";
import { Skeleton } from "../ui/skeleton";
import { AgentsList } from "../home/agents";
import { LogOutIcon } from "../ui/icons/lucide-log-out";

async function createAgent() {
  const agent = await create();
  if (agent.pk?.length) {
    redirect(`/agents/${agent.pk}/${agent.id}`, RedirectType.push);
  } else {
    redirect(`/public/${agent.id}`, RedirectType.push);
  }
}

export default function Home({ agents }: { agents: TAgentRecord<IAgent>[] }) {
  const { data: session, status } = useSession();
  return (
    <Container className="flex w-full items-center justify-center">
      <div className="max-w-[350px]">
        <div className="mt-8 mb-4">
          <Image
            src={KappaBlackCutoutK}
            alt="Kappa Black Cutout"
            className="bg-white"
          />
        </div>
        <div className="mb-8 text-sm text-center">
          An online character sheet for <strong>Delta Green</strong>.
        </div>
        {!session || agents.length ? (
          <div className="mb-8">
            <div className="flex gap-4 justify-center">
              <RainbowButton onClick={() => createAgent()}>
                Create Agent
              </RainbowButton>
              <Button
                variant="outline"
                disabled={true}
                className="cursor-not-allowed"
              >
                Import Agent
              </Button>
              {session && (
                <Button
                  variant="outline"
                  onClick={() => signOut()}
                  className="cursor-pointer"
                >
                  <LogOutIcon />
                </Button>
              )}
            </div>
          </div>
        ) : null}
        <div className="mb-8">
          {status === "loading" ? (
            <Skeleton className="w-full h-52" />
          ) : session ? (
            <AgentsList agents={agents} />
          ) : (
            <LoginBox />
          )}
        </div>
        <div className="mb-16">
          <Disclaimer />
        </div>
      </div>
    </Container>
  );
}
