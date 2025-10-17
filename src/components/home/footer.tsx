"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <ul className="w-full grid grid-cols-3 [&_a]:hover:underline">
      <li>
        <Link href="/terms">Terms of Service</Link>
      </li>
      <li>
        <Link href="/cookies">Cookie Policy</Link>
      </li>
      <li>
        <Link href="/privacy">Privacy Policy</Link>
      </li>
    </ul>
  );
}
