"use server";

import { getAgent } from "./get-agent";

const scrub = (obj: object): object => {
  const { pk, sk, ...obj2 } = obj as any;
  return obj2;
};

export async function exportAgent(
  pk: string | undefined,
  sk: string
): Promise<string | undefined> {
  const agent = await getAgent(pk, sk);
  return agent ? JSON.stringify(scrub(agent), null, 2) : undefined;
}
