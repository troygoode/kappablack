"use client";

import type React from "react";
import { useTheme } from "next-themes";
import { useSession, signIn, signOut } from "next-auth/react";
import { redirect, RedirectType } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { CheckIcon } from "@/components/ui/icons/lucide-check";
import { useAgentStore } from "../stores/agent";
import { copyAgent } from "@/actions/create-agent";
import { ConfirmDeleteDialog } from "./delete-dialog";
import { Trash2Icon } from "@/components/ui/icons/lucide-trash-2";
import { LogOutIcon } from "@/components/ui/icons/lucide-log-out";
import { CopyPlusIcon } from "@/components/ui/icons/lucide-copy-plus";
import { SunIcon } from "@/components/ui/icons/lucide-sun";
import { MoonStarIcon } from "@/components/ui/icons/lucide-moon-star";
import { ComputerIcon } from "@/components/ui/icons/lucide-computer";
import { Share2Icon } from "@/components/ui/icons/lucide-share-2";
import { CloudDownloadIcon } from "@/components/ui/icons/lucide-cloud-download";
import { ExportDialog } from "./export-dialog";
import { ShareDialog } from "./share-dialog";
import { exportAgent } from "@/actions/export-agent";

const Theme = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <DropdownMenuGroup>
        <DropdownMenuLabel className="text-muted-foreground">
          Theme
        </DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="cursor-pointer"
        >
          {theme === "light" ? <CheckIcon /> : <SunIcon />}
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="cursor-pointer"
        >
          {theme === "dark" ? <CheckIcon /> : <MoonStarIcon />}
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="cursor-pointer"
        >
          {theme === "system" ? <CheckIcon /> : <ComputerIcon />}
          System
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
    </>
  );
};

const CharacterSheet = () => {
  const isEditable = useAgentStore((state) => state.isEditable);
  const setDeleteDialog = useAgentStore((state) => state.setDeleteDialog);
  const setExportDialog = useAgentStore((state) => state.setExportDialog);
  const setExportText = useAgentStore((state) => state.setExportText);
  const setShareDialog = useAgentStore((state) => state.setShareDialog);
  const pk = useAgentStore((state) => state.pk);
  const sk = useAgentStore((state) => state.sk);

  const onCopy = async () => {
    if (!sk) return;

    const agent = await copyAgent(pk, sk);
    if (!agent) {
      return;
    } else if (agent.pk?.length) {
      redirect(`/agents/${agent.pk}/${agent.sk}`, RedirectType.push);
    } else {
      redirect(`/agents/public/${agent.sk}`, RedirectType.push);
    }
  };

  const onExport = async () => {
    if (!sk) return;
    const text = await exportAgent(pk, sk);
    setExportText(text ?? "");
    setExportDialog(true);
  };

  return (
    <>
      <DropdownMenuGroup>
        <DropdownMenuLabel className="text-muted-foreground">
          Character Sheet
        </DropdownMenuLabel>
        <DropdownMenuItem
          className="cursor-pointer"
          onSelect={() => setShareDialog(true)}
        >
          <Share2Icon />
          <span className="relative top-0.5">Share Agent</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer"
          onSelect={() => onExport()}
        >
          <CloudDownloadIcon />
          <span className="relative top-0.5">Export Agent</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" onSelect={() => onCopy()}>
          <CopyPlusIcon />
          <span className="relative top-0.5">Create Copy of Agent</span>
        </DropdownMenuItem>
        {isEditable && !!pk && !!sk && (
          <DropdownMenuItem
            className="cursor-pointer"
            variant="destructive"
            onSelect={() => setDeleteDialog(true)}
          >
            <Trash2Icon />
            <span className="relative top-0.5">Delete Agent</span>
          </DropdownMenuItem>
        )}
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
    </>
  );
};

const Logout = () => {
  const { data: session } = useSession();
  return (
    <DropdownMenuGroup>
      <DropdownMenuLabel className="text-muted-foreground">
        Account
      </DropdownMenuLabel>
      {session ? (
        <DropdownMenuItem className="cursor-pointer" onClick={() => signOut()}>
          <LogOutIcon />
          <span className="relative top-0.5">Sign out</span>
          {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
        </DropdownMenuItem>
      ) : (
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => signIn("google")}
        >
          Sign in via Google
          {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
        </DropdownMenuItem>
      )}
    </DropdownMenuGroup>
  );
};

export const SettingsMenu = ({ children }: React.PropsWithChildren) => {
  const showDeleteDialog = useAgentStore((state) => state.showDeleteDialog);
  const setDeleteDialog = useAgentStore((state) => state.setDeleteDialog);
  const showExportDialog = useAgentStore((state) => state.showExportDialog);
  const setExportDialog = useAgentStore((state) => state.setExportDialog);
  const showShareDialog = useAgentStore((state) => state.showShareDialog);
  const setShareDialog = useAgentStore((state) => state.setShareDialog);

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="start">
          <CharacterSheet />
          <Theme />
          <Logout />
        </DropdownMenuContent>
      </DropdownMenu>
      <ConfirmDeleteDialog
        open={showDeleteDialog}
        onOpenChange={setDeleteDialog}
      />
      <ExportDialog open={showExportDialog} onOpenChange={setExportDialog} />
      <ShareDialog open={showShareDialog} onOpenChange={setShareDialog} />
    </>
  );
};
