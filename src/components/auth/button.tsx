"use client";

import { useSession } from "next-auth/react";
import SignIn from "./signin";
import { SignOut } from "./signout";

export default function AuthButton() {
  const { data: session } = useSession();
  return session?.user ? <SignOut /> : <SignIn />;
}
