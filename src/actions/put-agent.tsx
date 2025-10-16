"use server";

import { dynamodb, PutCommand } from "@/lib/dynamodb";

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
