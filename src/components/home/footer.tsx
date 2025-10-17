"use client";

import Link from "next/link";
import { GithubIcon } from "../ui/icons/lucide-github";
import { Button } from "../ui/button";

export default function Footer() {
  return (
    <ul className="w-full grid grid-cols-4 [&_a]:hover:underline [&_li]:flex [&_li]:items-center [&_li]:justify-center">
      <li>
        <Link href="/terms">Terms</Link>
      </li>
      <li>
        <Link href="/cookies">Cookies </Link>
      </li>
      <li>
        <Link href="/privacy">Privacy</Link>
      </li>
      <li>
        <Button
          asChild
          variant="link"
          className="text-muted-foreground text-xs"
        >
          <Link
            href="https://github.com/troygoode/kappablack"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon size={12} />
            <span>Github</span>
          </Link>
        </Button>
      </li>
    </ul>
  );
}
