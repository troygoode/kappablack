"use client";

import { useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ClipboardCopyIcon } from "@/components/ui/icons/lucide-clipboard-copy";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckIcon } from "@/components/ui/icons/lucide-check";
import { handleCopy } from "@/lib/handle-copy";
import { useAgentStore } from "../stores/agent";
import { CloudDownloadIcon } from "@/components/ui/icons/lucide-cloud-download";
import { TriangleAlertIcon } from "@/components/ui/icons/lucide-triangle-alert";

const generateFilename = (agentName: string) => {
  const name = agentName.trim().toLowerCase().replace(/\s+/g, "-");
  return `${name?.length ? name : "unnamed-agent"}.toml`;
};

const handleFileDownload = async (filename: string, text: string) => {
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

export function ExportDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const agent = useAgentStore((state) => state.agent);
  const text = useAgentStore((state) => state.exportText);
  const [copied, setCopied] = useState(false);

  const filename = generateFilename(agent?.name ?? "");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Export Agent</DialogTitle>
          <DialogDescription>
            Download a local copy of your agent configuration in{" "}
            <Link
              href="https://toml.io/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TOML
            </Link>{" "}
            format.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          {!text?.length ? (
            <div className="grid gap-3">
              <Alert>
                <TriangleAlertIcon />
                <AlertTitle>Uh oh! Nothing to export.</AlertTitle>
              </Alert>
            </div>
          ) : null}

          <div className="grid gap-3">
            <Label htmlFor="export">
              <code>{filename}</code>
            </Label>
            <Textarea
              id="export"
              name="export"
              defaultValue={text}
              className="min-h-40 max-h-40"
              readOnly
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            className="cursor-pointer"
            onClick={() => handleCopy(text ?? "", setCopied)}
            disabled={!text?.length}
          >
            {copied ? <CheckIcon /> : <ClipboardCopyIcon />}
            Copy
          </Button>
          <Button
            variant="outline"
            className="cursor-pointer"
            onClick={() => handleFileDownload(filename, text ?? "")}
            disabled={!text?.length}
          >
            <CloudDownloadIcon />
            Download
          </Button>
          <DialogClose asChild>
            <Button className="cursor-pointer">Done</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
