"use server";

import { auth } from "@/auth";
import { DeleteCommand, dynamodb } from "@/lib/dynamodb";

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
