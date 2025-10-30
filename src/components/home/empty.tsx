"use client";

import { ArrowUpRightIcon, DotIcon, FolderArchiveIcon } from "lucide-react";
import { RedirectType, redirect } from "next/navigation";
import { signOut } from "next-auth/react";

import { create } from "@/actions/create-agent";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { RainbowButton } from "../ui/rainbow-button";
import ImportButton from "./import";

async function createAgent() {
  const agent = await create();
  if (agent.pk?.length) {
    redirect(`/agents/${agent.pk}/${agent.sk}`, RedirectType.push);
  } else {
    redirect(`/public/${agent.sk}`, RedirectType.push);
  }
}

export function EmptyState() {
  return (
    <Empty className="outline-1">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderArchiveIcon />
        </EmptyMedia>
        <EmptyTitle>No Agents Yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t created any agents yet. Get started by creating your
          first agent&apos;s character sheet.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <RainbowButton onClick={() => createAgent()}>
            Create Agent
          </RainbowButton>
          <ImportButton />
        </div>
      </EmptyContent>
      <div className="flex justify-center">
        <Button
          variant="link"
          // asChild
          className="text-muted-foreground cursor-pointer"
          size="sm"
          onClick={() => signOut()}
        >
          Logout
        </Button>
        <div>
          <DotIcon className="relative top-0.5" />
        </div>
        <Button
          variant="link"
          // asChild
          className="text-muted-foreground cursor-pointer"
          size="sm"
          disabled
        >
          {/* <Link href="#"> */}
          Learn More <ArrowUpRightIcon />
          {/* </Link> */}
        </Button>
      </div>
    </Empty>
  );
}
