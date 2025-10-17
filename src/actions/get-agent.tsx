"use server";

import type { IAgent } from "@/types/agent";
import { unmarshall } from "@aws-sdk/util-dynamodb";

import { dynamodb, GetCommand, QueryCommand } from "@/lib/dynamodb";
import { auth } from "@/auth";

export interface IAgentRecord {
  pk: string;
  sk: string;
}

export type TAgentRecord<T> = IAgentRecord & T;

export async function findAgents(): Promise<TAgentRecord<IAgent>[]> {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) return [];

  const cmd = new QueryCommand({
    TableName: process.env.DYNAMODB_TABLE as string,
    KeyConditionExpression: "pk = :pk",
    ExpressionAttributeValues: {
      ":pk": `USER#${userId}`,
    },
  });
  const data = await dynamodb(cmd);

  return data?.Items
    ? data.Items.map((i) => {
        const pk = i.pk.slice(i.pk.indexOf("#") + 1);
        const sk = i.sk.slice(i.sk.indexOf("#") + 1);
        if (!i.agent) {
          return {
            pk,
            sk,
          };
        }

        const unmarshalled = unmarshall(i.agent) as IAgent;
        return {
          ...unmarshalled,
          pk,
          sk,
        };
      })
    : [];
}

export async function getAgent(
  pk: string,
  sk: string
): Promise<TAgentRecord<IAgent> | undefined> {
  try {
    const cmd = new GetCommand({
      TableName: process.env.DYNAMODB_TABLE as string,
      Key: {
        pk,
        sk,
      },
    });

    const data = await dynamodb(cmd);
    if (data.Item?.agent) {
      return {
        pk,
        sk,
        ...(unmarshall(data.Item.agent) as IAgent),
      };
    } else if (data.Item) {
      return {
        pk,
        sk,
      };
    } else {
      return undefined;
    }
  } catch (error) {
    console.error("Error:", error);
    return undefined;
  }
}
