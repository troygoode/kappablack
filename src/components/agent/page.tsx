"use client";

import Equipment from "@/components/agent/equipment/equipment";
import Footer from "@/components/agent/footer";
import Injuries from "@/components/agent/injuries";
import Personal from "@/components/agent/personal";
import Psychology from "@/components/agent/psychology";
import Remarks from "@/components/agent/remarks";
import Skills from "@/components/agent/skills/skills";
import Stats from "@/components/agent/stats";
import { Container } from "@/components/container";
import Disclaimer from "@/components/disclaimer/disclaimer";
import Navigation from "@/components/navigation";
import { useAgentStore } from "./stores/agent";
import { useEffect } from "react";

export default function Agent() {
  const { isLoaded, agent, update } = useAgentStore((state) => state);
  const markLoaded = useAgentStore((state) => state.markLoaded);
  useEffect(() => {
    if (isLoaded) return;
    setTimeout(() => {
      update({
        // player: "Player Name",
      });
      markLoaded();
    }, 1000 * 0.25);
  }, [agent]);

  return (
    <Container>
      <div className="mt-4 mb-1">
        <Navigation isLoading={!agent} />
      </div>
      <div>
        <Personal />
      </div>
      <div className="mt-1 flex flex-col gap-2 lg:grid lg:grid-cols-2 print:grid print:grid-cols-2">
        <Stats />
        <Psychology />
      </div>
      <div className="mt-1 mb-1">
        <Skills />
      </div>
      <div className="mt-1 mb-1">
        <Injuries />
      </div>
      <div className="mt-1 mb-1">
        <Equipment />
      </div>
      <div className="mt-1 mb-1">
        <Remarks />
      </div>
      <div className="mb-8">
        <Footer />
      </div>
      <div className="mb-16">
        <Disclaimer />
      </div>
    </Container>
  );
}
