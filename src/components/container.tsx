"use client";

import * as React from "react";

import { Ruler } from "./ruler";
import classNames from "classnames";

const DEBUG_SHOW_RULER = false;

export function Container({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <>
      {DEBUG_SHOW_RULER && <Ruler />}
      <div
        className={classNames(
          `w-sm sm:w-xl md:w-2xl lg:w-4xl xl:w-6xl print:w-5xl mx-auto overflow-clip`,
          className
        )}
      >
        {children}
      </div>
    </>
  );
}
