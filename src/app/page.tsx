import HomePage from "@/components/pages/home";

import { findAgents } from "@/actions/get-agent";

export default async function Page() {
  const agents = await findAgents();
  return <HomePage agents={agents} />;
}
