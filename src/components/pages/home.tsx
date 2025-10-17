"use client";

import type { TAgentRecord } from "@/actions/get-agent";
import type { IAgent } from "@/types/agent";

import { redirect, RedirectType } from "next/navigation";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

import { create } from "@/actions/create-agent";

import { RainbowButton } from "@/components/ui/rainbow-button";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { LoginBox } from "../home/login";
import Disclaimer from "../disclaimer/disclaimer";
import { Skeleton } from "../ui/skeleton";
import { AgentsList } from "../home/agents";
import { LogOutIcon } from "../ui/icons/lucide-log-out";
import Head from "../home/head";
import Footer from "../home/footer";
import { EmptyState } from "../home/empty";
import ImportButton from "../home/import";

async function createAgent() {
  const agent = await create();
  if (agent.pk?.length) {
    redirect(`/agents/${agent.pk}/${agent.sk}`, RedirectType.push);
  } else {
    redirect(`/agents/public/${agent.sk}`, RedirectType.push);
  }
}

export default function Home({ agents }: { agents: TAgentRecord<IAgent>[] }) {
  const { data: session, status } = useSession();
  return (
    <Container className="flex w-full items-center justify-center">
      <div className="max-w-[350px]">
        <Head />
        {!session || agents.length ? (
          <div className="mb-8">
            <div className="flex gap-4 justify-center">
              <RainbowButton onClick={() => createAgent()}>
                Create Agent
              </RainbowButton>
              <ImportButton />
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
            agents?.length ? (
              <AgentsList agents={agents} />
            ) : (
              <EmptyState />
            )
          ) : (
            <LoginBox />
          )}
        </div>
        <div className="mb-8">
          <Disclaimer />
        </div>
        <div className="w-full items-center justify-center text-center text-xs text-muted-foreground mb-16">
          <Footer />
        </div>
      </div>
    </Container>
  );
}
