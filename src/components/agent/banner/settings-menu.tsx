"use client";

import type React from "react";
import { useTheme } from "next-themes";
import { useSession, signIn, signOut } from "next-auth/react";
import { redirect, RedirectType } from "next/navigation";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
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
import { deleteAgent } from "@/actions/delete-agent";
import { copyAgent } from "@/actions/create-agent";
import { useState } from "react";

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
          {theme === "light" && <CheckIcon />}
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="cursor-pointer"
        >
          {theme === "dark" && <CheckIcon />}
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="cursor-pointer"
        >
          {theme === "system" && <CheckIcon />}
          System
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
    </>
  );
};

export function ConfirmDeleteDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const pk = useAgentStore((state) => state.pk);
  const sk = useAgentStore((state) => state.sk);

  const onDelete = async () => {
    if (!pk || !sk) return;
    await deleteAgent(pk, sk);
    redirect("/", RedirectType.push);
  };

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this
            agent&apos;s character sheet and remove the data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="cursor-pointer">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className="cursor-pointer"
            onClick={() => onDelete()}
          >
            Delete Agent
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

const CharacterSheet = () => {
  const isEditable = useAgentStore((state) => state.isEditable);
  const setDeleteDialog = useAgentStore((state) => state.setDeleteDialog);
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

  return (
    <>
      <DropdownMenuGroup>
        <DropdownMenuLabel className="text-muted-foreground">
          Character Sheet
        </DropdownMenuLabel>
        <DropdownMenuItem className="cursor-pointer" onSelect={() => onCopy()}>
          Create Copy of Agent
        </DropdownMenuItem>
        {isEditable && !!pk && !!sk && (
          <DropdownMenuItem
            className="cursor-pointer"
            variant="destructive"
            onSelect={() => setDeleteDialog(true)}
          >
            Delete Agent
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
          Sign out
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
    </>
  );
};
