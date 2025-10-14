"use client";

export const Ruler = () => (
  <div className="flex items-center m-2 fixed bottom-0 right-0 border rounded p-2 text-sm bg-background text-foreground">
    <span className="text-sm">Breakpoint:</span>
    <span className="ml-1 xs:hidden sm:hidden md:hidden lg:hidden xl:hidden">
      default (&lt; 640px)
    </span>
    <span className="ml-1 hidden xs:inline sm:hidden font-extrabold">xs</span>
    <span className="ml-1 hidden sm:inline md:hidden font-extrabold">sm</span>
    <span className="ml-1 hidden md:inline lg:hidden font-extrabold">md</span>
    <span className="ml-1 hidden lg:inline xl:hidden font-extrabold">lg</span>
    <span className="ml-1 hidden xl:inline font-extrabold">xl</span>
  </div>
);
