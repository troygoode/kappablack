import { notFound } from "next/navigation";

import AgentPage from "@/components/pages/agent";
import { AgentStoreProvider } from "@/components/agent/stores/agent";
import { getAgent } from "@/actions/get-agent";

interface ITest {
  baz: string;
}

export default async function Page({
  params,
}: {
  params: Promise<{ pk: string; sk: string }>;
}) {
  // get params
  const { pk, sk } = await params;
  if (!pk?.length || !sk?.length) return notFound();

  // query db
  const agent = await getAgent<ITest>(pk, sk);
  if (!agent) return notFound();

  console.log("DDB.Agent", agent);

  return (
    <AgentStoreProvider>
      <AgentPage />
    </AgentStoreProvider>
  );
}
