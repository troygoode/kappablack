"use server";

import { dynamodb, DeleteCommand } from "@/lib/dynamodb";
import { auth } from "@/auth";

export async function deleteAgent(pk: string, sk: string) {
  const session = await auth();
  if (pk !== session?.user?.id) {
    return null; // unauthorized
  }

  try {
    const cmd = new DeleteCommand({
      TableName: process.env.DYNAMODB_TABLE as string,
      Key: {
        pk: `USER#${pk}`,
        sk: `AGENT#${sk}`,
      },
    });
    await dynamodb(cmd);
  } catch (error) {
    console.error("Error:", error);
  }
}
