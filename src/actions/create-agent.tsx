"use server";

import { customAlphabet } from "nanoid";
import { nolookalikesSafe } from "nanoid-dictionary";

import { dynamodb, PutCommand } from "@/lib/dynamodb";
import { auth } from "@/auth";

const idGenerator = customAlphabet(nolookalikesSafe, 6);

const plusDays = (now: Date, days: number): Date => {
  var date = new Date(now.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

const toTTL = (date: Date): number => {
  return Math.floor(date.getTime() / 1000);
};

export async function create() {
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
    agent: undefined,
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
