"use client";

import GoogleButton from "react-google-button";
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
          Login with Google to save and share your character sheets.
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="justify-center">
        <div className="rounded-md overflow-clip">
          <GoogleButton
            type="light"
            onClick={() => {
              console.log("Google button clicked");
            }}
          />
        </div>
      </CardFooter>
    </Card>
  );
}
