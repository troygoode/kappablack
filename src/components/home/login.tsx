"use client";

import GoogleButton from "react-google-button";
import { signIn } from "next-auth/react";

import {
  Card,
  CardContent,
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
        <div className="rounded-md overflow-clip">
          <GoogleButton
            type="light"
            onClick={() => {
              signIn("google");
            }}
          />
        </div>
      </CardFooter>
    </Card>
  );
}
