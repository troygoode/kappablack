import { findAgents } from "@/actions/get-agent";
import HomePage from "@/components/pages/home";

export default async function Page() {
  const agents = await findAgents();
  return <HomePage agents={agents} />;
}
