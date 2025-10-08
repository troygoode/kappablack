"use client";

import * as React from "react";

export function Container({ children }: React.PropsWithChildren) {
  return (
    <div className="w-full md:w-3xl mx-auto">
      <div className="bg-accent">
        <div>{children}</div>
      </div>
    </div>
  );
}
