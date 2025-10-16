"use server";

import { dynamodb, UpdateCommand } from "@/lib/dynamodb";

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
