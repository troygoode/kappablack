"use client";

import { useEffect } from "react";
import * as Ably from "ably";
import { AblyProvider, ChannelProvider, useChannel } from "ably/react";
import { toast as sonner } from "sonner";

import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { Dice100Toast, DiceToast, Toast } from "./toast";
import { useAgentStore } from "./stores/agent";

interface IRollOutput {
  result: number;
  rolled: number[];
}

const ablyClient = new Ably.Realtime({
  authUrl: "/api/ably",
});

export function Toaster({ channelName }: { channelName: string }) {
  return (
    <AblyProvider client={ablyClient}>
      <ChannelProvider channelName={channelName}>
        <ToasterInner channelName={channelName} />
      </ChannelProvider>
    </AblyProvider>
  );
}

function ToasterInner({ channelName }: { channelName: string }) {
  const { publish } = useChannel(channelName, "rolled", (message) => {
    console.log("Roll:", message.data);
    if ("source" in message.data && "value" in message.data) {
      const source = message.data.source as string;
      const value = message.data.value as string;

      if ("d1" in message.data && "d2" in message.data) {
        const d1 = message.data.d1 as number;
        const d2 = message.data.d2 as number;
        sonner.custom(
          (t) => (
            <Toast t={t}>
              <Dice100Toast
                label={`${source} (${value}%)`}
                target={parseInt(value)}
                d1={d1}
                d2={d2}
              />
            </Toast>
          ),
          {
            // duration: 4000 * 60,
          }
        );
      } else if ("result" in message.data) {
        const result = message.data.result as IRollOutput;
        sonner.custom(
          (t) => (
            <Toast t={t}>
              <DiceToast
                label={`${source} (${value})`}
                total={result.result}
                dice={result.rolled}
              />
            </Toast>
          ),
          {
            // duration: 4000 * 60,
          }
        );
      }
    }
  });
  const setPublish = useAgentStore((state) => state.setPublish);

  useEffect(() => {
    setPublish((msg) => publish("rolled", msg));
  }, [publish, channelName]);

  return <SonnerToaster expand richColors />;
}
