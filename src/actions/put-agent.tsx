"use server";

import { customAlphabet } from "nanoid";
import { nolookalikesSafe } from "nanoid-dictionary";

import { dynamodb, PutCommand } from "@/lib/dynamodb";
import { auth } from "@/auth";

const idGenerator = customAlphabet(nolookalikesSafe, 6);

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
    id: agentId,
  };
}

export async function putAgent(pk: string, sk: string, data: object) {
  try {
    const cmd = new PutCommand({
      TableName: process.env.DYNAMODB_TABLE as string,
      Item: {
        pk,
        sk,
        GSI1PK: undefined,
        GSI1SK: undefined,
        ...data,
      },
    });
    await dynamodb(cmd);
  } catch (error) {
    console.error("Error:", error);
  }
}
