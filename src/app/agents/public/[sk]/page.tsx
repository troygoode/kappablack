import { notFound } from "next/navigation";

import AgentPage from "@/components/pages/agent";
import { AgentStoreProvider } from "@/components/agent/stores/agent";
import { getAgent } from "@/actions/get-agent";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sk: string }>;
}): Promise<Metadata> {
  // Fetch data to determine the title based on the slug
  const { sk } = await params;
  if (!sk?.length) return notFound();

  // query db
  const agentRecord = await getAgent(undefined, `AGENT#${sk}`);
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
  params: Promise<{ sk: string }>;
}) {
  // get params
  const { sk } = await params;
  if (!sk?.length) return notFound();

  // query db
  const agentRecord = await getAgent(undefined, `AGENT#${sk}`);
  if (!agentRecord) return notFound();

  const isEditable = true;

  return (
    <AgentStoreProvider>
      <AgentPage
        agent={agentRecord}
        pk={undefined}
        sk={sk}
        isEditable={isEditable}
      />
    </AgentStoreProvider>
  );
}
