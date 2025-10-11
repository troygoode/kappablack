import AgentPage from "@/components/agent/page";
import { AgentStoreProvider } from "@/components/agent/stores/agent";

export default function Page() {
  return (
    <AgentStoreProvider>
      <AgentPage />
    </AgentStoreProvider>
  );
}
