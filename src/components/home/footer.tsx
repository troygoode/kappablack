"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { CoffeeIcon } from "../ui/icons/lucide-coffee";
import { GithubIcon } from "../ui/icons/lucide-github";

export default function Footer() {
  return (
    <ul className="w-full grid grid-cols-4 [&_a]:hover:underline [&_li]:flex [&_li]:items-center [&_li]:justify-center">
      <li>
        <Link href="/terms">Terms</Link>
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
      <li>
        <Button
          asChild
          variant="link"
          className="text-muted-foreground text-xs"
        >
          <Link
            href="https://ko-fi.com/troygoode"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CoffeeIcon size={12} />
            <span>Tip Jar</span>
          </Link>
        </Button>
      </li>
    </ul>
  );
}
