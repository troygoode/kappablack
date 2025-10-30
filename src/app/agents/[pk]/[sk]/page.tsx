import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAgent } from "@/actions/get-agent";
import { auth } from "@/auth";
import { AgentStoreProvider } from "@/components/agent/stores/agent";
import AgentPage from "@/components/pages/agent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ pk: string; sk: string }>;
}): Promise<Metadata> {
  // Fetch data to determine the title based on the slug
  const { pk, sk } = await params;
  if (!pk?.length || !sk?.length) return notFound();

  // query db
  const agentRecord = await getAgent(`USER#${pk}`, `AGENT#${sk}`);
  return agentRecord?.name?.length
    ? {
        title: `${agentRecord?.name} • KAPPA BLACK`,
      }
    : {
        title: `Unnamed Agent • KAPPA BLACK`,
      };
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
