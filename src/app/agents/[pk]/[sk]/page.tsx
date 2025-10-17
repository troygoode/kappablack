import { notFound } from "next/navigation";

import { auth } from "@/auth";
import AgentPage from "@/components/pages/agent";
import { AgentStoreProvider } from "@/components/agent/stores/agent";
import { getAgent } from "@/actions/get-agent";

export default async function Page({
  params,
}: {
  params: Promise<{ pk: string; sk: string }>;
}) {
  // get params
  const { pk, sk } = await params;
  if (!pk?.length || !sk?.length) return notFound();

  // query db
  const agentRecord = await getAgent(`USER#${pk}`, `AGENT#${sk}`);
  if (!agentRecord) return notFound();

  const session = await auth();
  const isEditable = pk === session?.user?.id;

  return (
    <AgentStoreProvider>
      <AgentPage agent={agentRecord} pk={pk} sk={sk} isEditable={isEditable} />
    </AgentStoreProvider>
  );
}
