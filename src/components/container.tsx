"use client";

import * as React from "react";
import { Ruler } from "./ruler";

const SHOW_RULER = true;

export function Container({ children }: React.PropsWithChildren) {
  return (
    <div className="w-sm sm:w-xl md:w-2xl lg:w-4xl xl:w-6xl mx-auto overflow-clip">
      {SHOW_RULER && <Ruler />}
      <div>{children}</div>
    </div>
  );
}
