import { SessionProvider } from "next-auth/react";

import AgentPage from "@/components/agent/page";
import { AgentStoreProvider } from "@/components/agent/stores/agent";
import AuthButton from "@/components/auth/button";

export default function Page() {
  return (
    <SessionProvider>
      <AgentStoreProvider>
        <AuthButton />
        <AgentPage />
      </AgentStoreProvider>
    </SessionProvider>
  );
}
