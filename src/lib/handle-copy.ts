"use client";

export const handleCopy = async (
  text: string,
  setCopied: (value: boolean) => void
) => {
  try {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
};
