"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
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

const scrub = (obj: object): object => {
  const { pk, sk, ...obj2 } = obj as any;
  return obj2;
};

export function ExportDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const agent = useAgentStore((state) => state.agent);
  const [copied, setCopied] = useState(false);

  const text = JSON.stringify(scrub(agent), null, 2);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Export Agent</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="export">Export</Label>
            <Textarea
              id="export"
              name="export"
              defaultValue={text}
              className="min-h-40"
              readOnly
            />
          </div>
        </div>
        <DialogFooter>
          <Button
            variant="outline"
            className="cursor-pointer"
            onClick={() => handleCopy(text, setCopied)}
          >
            {copied ? <CheckIcon /> : <ClipboardCopyIcon />}
            Copy
          </Button>
          <DialogClose asChild>
            <Button className="cursor-pointer">Done</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
