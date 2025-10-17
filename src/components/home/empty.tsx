"use client";

import { ArrowUpRightIcon, FolderArchiveIcon, DotIcon } from "lucide-react";
import { signOut } from "next-auth/react";
import { redirect, RedirectType } from "next/navigation";

import { create } from "@/actions/put-agent";

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button";
import { RainbowButton } from "../ui/rainbow-button";

async function createAgent() {
  const agent = await create();
  if (agent.pk?.length) {
    redirect(`/agents/${agent.pk}/${agent.id}`, RedirectType.push);
  } else {
    redirect(`/public/${agent.id}`, RedirectType.push);
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
          <Button variant="outline" disabled>
            Import Agent
          </Button>
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
