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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckIcon } from "@/components/ui/icons/lucide-check";
import { EyeIcon } from "@/components/ui/icons/lucide-eye";
import { handleCopy } from "@/lib/handle-copy";

export function CopyableInput({
  icon,
  fieldName,
  label,
  value,
}: {
  icon?: React.ReactNode;
  fieldName: string;
  label: string;
  value: string;
}) {
  const [copied, setCopied] = useState(false);
  return (
    <>
      <Label htmlFor={fieldName}>
        {icon ? icon : null}
        <span className="relative top-0.5">{label}</span>
      </Label>
      <div className="flex w-full max-w-sm items-center gap-2">
        <Input id={fieldName} name={fieldName} defaultValue={value} readOnly />
        <Button
          variant="outline"
          className="cursor-pointer"
          onClick={() => handleCopy(value, setCopied)}
        >
          {copied ? <CheckIcon /> : <ClipboardCopyIcon />}
        </Button>
      </div>
    </>
  );
}

export function ShareDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const url = window.location.href;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Share Agent</DialogTitle>
          <DialogDescription>
            Share a link to this agent&apos;s character sheet so others can view
            or copy it.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <CopyableInput
              icon={<EyeIcon size={16} />}
              fieldName="sharelink"
              label="View-only Share Link"
              value={url}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button className="cursor-pointer">Done</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
