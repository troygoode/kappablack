"use client";

import { RedirectType, redirect } from "next/navigation";
import { useActionState, useEffect } from "react";
import { importAgent } from "@/actions/export-agent";
import { UploadButton } from "../upload-button";

type TUploadState =
  | {
      pk?: string;
      sk: string;
    }
  | {
      error: string;
    }
  | undefined;

export default function ImportButton() {
  const [state, formAction] = useActionState<TUploadState, FormData>(
    importAgent,
    undefined,
  );

  useEffect(() => {
    if (state && "error" in state) {
      console.error("Import error:", (state as any).error);
    } else if (state && "sk" in state) {
      const { pk, sk } = state;
      if (pk?.length) {
        redirect(`/agents/${pk}/${sk}`, RedirectType.push);
      } else {
        redirect(`/agents/public/${sk}`, RedirectType.push);
      }
    }
  }, [state]);

  return (
    <UploadButton fieldName="import" formAction={formAction} accept=".toml">
      Import Agent
    </UploadButton>
  );
}
