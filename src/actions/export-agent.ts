"use server";

import { stringify } from "smol-toml";

import { getAgent } from "./get-agent";

function removeEmptyArrays(obj: object): object {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => {
      // Keep the entry if the value is not an array, or if it's a non-empty array
      return !Array.isArray(value) || value.length > 0;
    })
  );
}
function scrub(obj: object): object {
  const { pk, sk, ...obj2 } = obj as any;
  return removeEmptyArrays(obj2);
}

export async function exportAgent(
  pk: string | undefined,
  sk: string
): Promise<string | undefined> {
  if (!sk) return undefined;
  const agent = await getAgent(`USER#${pk}`, `AGENT#${sk}`);
  if (!agent) return undefined;

  const obj = scrub(agent) as any;
  obj.version = "2025-10-16";
  return stringify(obj);
}
