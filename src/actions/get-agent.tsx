"use server";

import { dynamodb, GetCommand } from "@/lib/dynamodb";

export interface IAgentRecord {
  pk: string;
  sk: string;
}

export type TAgentRecord<T> = IAgentRecord & T;

export async function getAgent<T>(
  pk: string,
  sk: string
): Promise<TAgentRecord<T> | undefined> {
  try {
    const cmd = new GetCommand({
      TableName: process.env.DYNAMODB_TABLE as string,
      Key: {
        pk,
        sk,
      },
    });
    const data = await dynamodb(cmd);
    if (data.Item) return data.Item as TAgentRecord<T>;
    return undefined;
  } catch (error) {
    console.error("Error:", error);
    return undefined;
  }
}
