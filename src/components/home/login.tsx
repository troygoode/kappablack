"use client";

import { signIn } from "next-auth/react";
import GoogleButton from "react-google-button";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShineBorder } from "@/components/ui/shine-border";

export function LoginBox() {
  return (
    <Card className="relative w-full max-w-[350px] overflow-hidden">
      <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Login with Google to save and share your character sheets. Characters
          created without logging in are deleted after 7 days.
        </CardDescription>
      </CardHeader>
      <CardFooter className="justify-center">
        <div className="">
          <div className="block dark:hidden">
            <GoogleButton
              type="dark"
              onClick={() => {
                signIn("google");
              }}
            />
          </div>
          <div className="hidden dark:block">
            <GoogleButton
              type="light"
              onClick={() => {
                signIn("google");
              }}
            />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
