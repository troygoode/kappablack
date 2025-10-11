import AgentPage from "@/components/agent/page";
import { AgentStoreProvider } from "@/components/agent/stores/agent-provider";

export default function Page() {
  return (
    <AgentStoreProvider>
      <AgentPage />
    </AgentStoreProvider>
  );
}
