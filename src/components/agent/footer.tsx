"use client";

import { useAgentStore } from "./stores/agent";

export default function Footer() {
  const agent = useAgentStore((state) => state.agent);

  return (
    <div className="flex flex-col gap-4" onClick={() => console.log(agent)}>
      <div className="flex flex-col gap-2 uppercase lg:flex-row lg:justify-between print:flex-row print:justify-between">
        <div className="flex items-center justify-center">
          <span className="font-roboto-condensed text-3xl">DD</span>
          <div className="w-24 text-center text-xs leading-none">
            United States form
          </div>
          <span className="font-roboto-condensed text-3xl">315</span>
        </div>
        <div className="flex flex-col items-center gap-2 lg:flex-row print:flex-row">
          <div className="w-96 text-center text-xs leading-none">
            Top secret//orcon//special access required—Delta Green Agent
            documentation sheet
          </div>
          <span className="font-roboto-condensed text-3xl">112382</span>
        </div>
      </div>
    </div>
  );
}
