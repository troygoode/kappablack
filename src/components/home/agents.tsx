"use client";

import Link from "next/link";
import type { TAgentRecord } from "@/actions/get-agent";
import type { IAgent } from "@/types/agent";

export function AgentsList({ agents }: { agents: TAgentRecord<IAgent>[] }) {
  return (
    <div>
      <ul className="block">
        {agents.map((agent, idx) => (
          <li key={agent.sk}>
            <Link
              href={`/agents/${agent.pk}/${agent.sk}`}
              className="hover:[&_span]:underline"
            >
              {idx + 1}.{" "}
              {agent.name ? (
                <span>{agent.name}</span>
              ) : (
                <span className="text-muted-foreground">Unnamed Agent</span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
