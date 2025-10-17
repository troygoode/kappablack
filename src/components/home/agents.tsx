"use client";

import type { IAgent } from "@/types/agent";

import Link from "next/link";

import { EmptyState } from "./empty";
import { TAgentRecord } from "@/actions/get-agent";

export function AgentsList({ agents }: { agents: TAgentRecord<IAgent>[] }) {
  return !agents.length ? (
    <EmptyState />
  ) : (
    <div>
      <ul className="block">
        {agents.map((agent, idx) => (
          <li key={idx}>
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
