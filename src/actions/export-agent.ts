"use server";

import { parse, stringify } from "smol-toml";
import type { IAgent } from "@/types/agent";
import { create } from "./create-agent";
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

type TImportResult =
  | {
      pk?: string;
      sk: string;
    }
  | {
      error: string;
    };
export async function importAgent(
  _prevState: any,
  formData: FormData
): Promise<TImportResult> {
  const file = formData.get("import") as File;
  if (!file) return { error: "No file uploaded" };

  try {
    const data = await file.text();
    const parsed = parse(data);

    delete parsed.pk;
    delete parsed.sk;
    delete parsed.version;

    return await create(parsed as IAgent);
  } catch {
    console.error("Failed to import agent", file);
    return { error: "Failed to import agent" };
  }
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
