"use client";

import type React from "react";
import { useTheme } from "next-themes";
import { useSession, signIn, signOut } from "next-auth/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  // DropdownMenuShortcut,
  // DropdownMenuPortal,
  // DropdownMenuSub,
  // DropdownMenuSubContent,
  // DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";
import { CheckIcon } from "@/components/ui/icons/lucide-check";

// const Team = () => (
//   <>
//     <DropdownMenuGroup>
//       <DropdownMenuItem>Team</DropdownMenuItem>
//       <DropdownMenuSub>
//         <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
//         <DropdownMenuPortal>
//           <DropdownMenuSubContent>
//             <DropdownMenuItem>Email</DropdownMenuItem>
//             <DropdownMenuItem>Message</DropdownMenuItem>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem>More...</DropdownMenuItem>
//           </DropdownMenuSubContent>
//         </DropdownMenuPortal>
//       </DropdownMenuSub>
//       <DropdownMenuItem>
//         New Team
//         <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
//       </DropdownMenuItem>
//     </DropdownMenuGroup>
//   </>
// );

const Theme = () => {
  const { theme, setTheme } = useTheme();
  return (
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
        {/* <Team /> */}
        {/* <DropdownMenuSeparator /> */}
        <Theme />
        <DropdownMenuSeparator />
        <Logout />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
