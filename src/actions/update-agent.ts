"use server";

import { marshall } from "@aws-sdk/util-dynamodb";
import { auth } from "@/auth";
import { dynamodb, UpdateCommand } from "@/lib/dynamodb";
import type { IAgent } from "@/types/agent";

export async function save(pk: string | undefined, sk: string, agent?: IAgent) {
  const session = await auth();
  if (pk && pk !== session?.user?.id) {
    return null; // unauthorized
  }

  const pk2 = !session?.user?.id?.length
    ? "ANONUSER#"
    : `USER#${session.user.id}`;

  const cmd = new UpdateCommand({
    TableName: process.env.DYNAMODB_TABLE as string,
    Key: {
      pk: pk2,
      sk: `AGENT#${sk}`,
    },
    UpdateExpression: `SET #agent = :newAgent`, // for appending to map
    ExpressionAttributeValues: {
      ":newAgent": marshall(agent),
    },
    ExpressionAttributeNames: {
      "#agent": "agent",
    },
    ReturnValues: "ALL_NEW",
  });

  await dynamodb(cmd);
}
