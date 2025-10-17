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
import { deleteAgent } from "@/actions/delete-agent";
import { copyAgent } from "@/actions/create-agent";

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

const CharacterSheet = () => {
  const isEditable = useAgentStore((state) => state.isEditable);
  const pk = useAgentStore((state) => state.pk);
  const sk = useAgentStore((state) => state.sk);

  const onDelete = async () => {
    if (!pk || !sk) return;
    await deleteAgent(pk, sk);
    redirect("/", RedirectType.push);
  };

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
        <DropdownMenuItem className="cursor-pointer" onClick={() => onCopy()}>
          Create Copy of Agent
        </DropdownMenuItem>
        {isEditable && !!pk && !!sk && (
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => onDelete()}
            variant="destructive"
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
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <CharacterSheet />
        <Theme />
        <Logout />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
