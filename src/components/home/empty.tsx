"use client";

import { ArrowUpRightIcon, FolderArchiveIcon, DotIcon } from "lucide-react";

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button";

export function EmptyState() {
  return (
    <Empty>
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
          <Button className="cursor-pointer">Create Agent</Button>
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
