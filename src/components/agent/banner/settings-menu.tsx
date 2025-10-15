"use client";

import type React from "react";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  // DropdownMenuShortcut,
  // DropdownMenuPortal,
  // DropdownMenuSeparator,
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
      <DropdownMenuItem onClick={() => setTheme("light")}>
        {theme === "light" && <CheckIcon />}
        Light
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => setTheme("dark")}>
        {theme === "dark" && <CheckIcon />}
        Dark
      </DropdownMenuItem>
      <DropdownMenuItem onClick={() => setTheme("system")}>
        {theme === "system" && <CheckIcon />}
        System
      </DropdownMenuItem>
    </DropdownMenuGroup>
  );
};

// const Logout = () => (
//   <>
//     <DropdownMenuItem>
//       Log out
//       <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
//     </DropdownMenuItem>
//   </>
// );

export const SettingsMenu = ({ children }: React.PropsWithChildren) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
    <DropdownMenuContent className="w-56" align="start">
      {/* <Team /> */}
      {/* <DropdownMenuSeparator /> */}
      <Theme />
      {/* <DropdownMenuSeparator /> */}
      {/* <Logout /> */}
    </DropdownMenuContent>
  </DropdownMenu>
);
