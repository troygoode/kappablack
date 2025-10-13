"use client";

import * as React from "react";

const SHOW_RULER = false;

export function Container({ children }: React.PropsWithChildren) {
  return (
    <div className="w-full md:w-6xl mx-auto">
      {SHOW_RULER && (
        <div className="flex gap-2">
          <span className="sm:hidden">XS</span>
          <span className="md:hidden">SM</span>
          <span className="lg:hidden">MD</span>
          <span className="xl:hidden">LG</span>
          <span className="">XL</span>
        </div>
      )}
      <div>{children}</div>
    </div>
  );
}
