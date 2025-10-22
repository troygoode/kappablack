"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Alert, AlertTitle } from "@/components/ui/alert";
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
import { Textarea } from "@/components/ui/textarea";
import { CheckIcon } from "@/components/ui/icons/lucide-check";
import { handleCopy } from "@/lib/handle-copy";
import { useAgentStore } from "../stores/agent";
import { CloudDownloadIcon } from "@/components/ui/icons/lucide-cloud-download";
import { TriangleAlertIcon } from "@/components/ui/icons/lucide-triangle-alert";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { exportFoundryAgent } from "./export-foundry";

const generateFilename = (agentName: string, ext: string) => {
  const name = agentName.trim().toLowerCase().replace(/\s+/g, "-");
  return `${name?.length ? name : "unnamed-agent"}.${ext}`;
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
  const toml = useAgentStore((state) => state.exportText);
  const [copied, setCopied] = useState(false);
  const [format, setFormat] = useState("TOML");
  const [text, setText] = useState<string | undefined>();
  useEffect(() => {
    switch (format) {
      case "TOML":
        setText(toml);
        break;
      case "Foundry":
        setText(JSON.stringify(exportFoundryAgent(agent), null, 2));
        break;
      case "Statblock":
        setText("TODO: Statblock export not yet implemented.");
        break;
      default:
        setText("Not Implemented");
    }
  }, [format]);

  const filename = generateFilename(
    agent?.name ?? "",
    format === "TOML" ? "toml" : format === "Foundry" ? "json" : "txt"
  );

  const exportText = text ?? toml ?? "";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Export Agent</DialogTitle>
          <DialogDescription>
            Download a local copy of your agent configuration.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          {!exportText?.length ? (
            <div className="grid gap-3">
              <Alert>
                <TriangleAlertIcon />
                <AlertTitle>Uh oh! Nothing to export.</AlertTitle>
              </Alert>
            </div>
          ) : null}

          <div>
            <Select value={format} onValueChange={setFormat}>
              <SelectTrigger className="w-full cursor-pointer">
                <SelectValue placeholder="Select an export format" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Export Formats</SelectLabel>
                  <SelectItem value="TOML" className="cursor-pointer">
                    KAPPA BLACK (TOML file)
                  </SelectItem>
                  <SelectItem value="Foundry" className="cursor-pointer">
                    Foundry VTT (JSON file)
                  </SelectItem>
                  {/* <SelectItem value="Statblock" className="cursor-pointer">
                    Statblock .TXT file
                  </SelectItem> */}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-3">
            <Textarea
              id="export"
              name="export"
              value={exportText}
              className="min-h-40 max-h-40"
              readOnly
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            className="cursor-pointer"
            onClick={() => handleCopy(exportText, setCopied)}
            disabled={!exportText?.length}
          >
            {copied ? <CheckIcon /> : <ClipboardCopyIcon />}
            Copy
          </Button>
          <Button
            variant="outline"
            className="cursor-pointer"
            onClick={() => handleFileDownload(filename, exportText)}
            disabled={!exportText?.length}
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
