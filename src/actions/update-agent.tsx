"use server";

import type { IAgent } from "@/types/agent";

import { marshall } from "@aws-sdk/util-dynamodb";

import { auth } from "@/auth";
import { dynamodb, UpdateCommand } from "@/lib/dynamodb";

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

export async function putAgent(pk: string, sk: string) {
  try {
    const cmd = new UpdateCommand({
      TableName: process.env.DYNAMODB_TABLE as string,
      Key: {
        pk,
        sk,
      },
      UpdateExpression: `SET #baz = :newBaz`, // for appending to map
      ExpressionAttributeValues: {
        ":newBaz": "Goodbye",
      },
      ExpressionAttributeNames: {
        "#baz": "baz",
      },
      ReturnValues: "ALL_NEW",
    });

    const result = await dynamodb(cmd);
    return result.Attributes;
  } catch (error) {
    console.error("Error:", error);
    return undefined;
  }
}
