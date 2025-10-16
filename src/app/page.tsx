import { SessionProvider } from "next-auth/react";

import AgentPage from "@/components/agent/page";
import { AgentStoreProvider } from "@/components/agent/stores/agent";

export default function Page() {
  return (
    <SessionProvider>
      <AgentStoreProvider>
        <AgentPage />
      </AgentStoreProvider>
    </SessionProvider>
  );
}
