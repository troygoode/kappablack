"use server";

import type { IAgent } from "@/types/agent";

import { marshall } from "@aws-sdk/util-dynamodb";
import { customAlphabet } from "nanoid";
import { nolookalikesSafe } from "nanoid-dictionary";

import { dynamodb, PutCommand } from "@/lib/dynamodb";
import { auth } from "@/auth";
import { getAgent } from "./get-agent";

const idGenerator = customAlphabet(nolookalikesSafe, 6);

const plusDays = (now: Date, days: number): Date => {
  var date = new Date(now.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

const toTTL = (date: Date): number => {
  return Math.floor(date.getTime() / 1000);
};

export async function create(agent?: IAgent) {
  const session = await auth();
  const pk = !session?.user?.id?.length
    ? "ANONUSER#"
    : `USER#${session.user.id}`;
  const agentId = idGenerator();
  const sharedId = idGenerator();

  const record = {
    pk,
    sk: `AGENT#${agentId}`,
    GSI1PK: "SHAREDAGENT#",
    GSI1SK: `AGENT#${sharedId}`,
    version: "2025-10-16",
    created: new Date().toISOString(),
    expires: session?.user?.id ? undefined : toTTL(plusDays(new Date(), 7)),
    agent: agent ? marshall(agent, { removeUndefinedValues: true }) : undefined,
  };

  try {
    const cmd = new PutCommand({
      TableName: process.env.DYNAMODB_TABLE as string,
      Item: record,
    });
    await dynamodb(cmd);
  } catch (error) {
    console.error("Error:", error);
  }

  return {
    pk: session?.user?.id ?? undefined,
    sk: agentId,
  };
}

export async function copyAgent(pk: string | undefined, sk: string) {
  const agent = await getAgent(pk ? `USER#${pk}` : undefined, `AGENT#${sk}`);
  if (!agent) return;
  return await create(agent);
}
