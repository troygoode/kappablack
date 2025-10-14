"use client";

import testAgent from "@/data/test-agent.json";

import { useEffect } from "react";

import Equipment from "@/components/agent/equipment/equipment";
import Footer from "@/components/agent/footer";
import Injuries from "@/components/agent/injuries";
import Personal from "@/components/agent/personal";
import Psychology from "@/components/agent/psychology";
import Remarks from "@/components/agent/remarks";
import Skills from "@/components/agent/skills/skills";
import Stats from "@/components/agent/stats";
import Signature from "@/components/agent/signature";
import { Container } from "@/components/container";
import Disclaimer from "@/components/disclaimer/disclaimer";
import Navigation from "@/components/navigation";
import { useAgentStore } from "./stores/agent";

const DEBUG_LOAD_TEST_AGENT = false;
const DEBUG_ENABLE_WAIT = false;
const DEBUG_WAIT_SECONDS = 2.25;

export default function Agent() {
  const reset = useAgentStore((state) => state.reset);
  const isLoaded = useAgentStore((state) => state.isLoaded);
  useEffect(() => {
    if (isLoaded) return;
    setTimeout(
      () => {
        reset({
          isLoaded: true,
          agent: DEBUG_LOAD_TEST_AGENT
            ? testAgent
            : {
                bonds: [],
                skills: [],
                weapons: [],
                stunWeapons: [],
                specialTraining: [],
              },
        });
      },
      DEBUG_ENABLE_WAIT ? 1000 * DEBUG_WAIT_SECONDS : 50
    );
  }, [isLoaded]);

  return (
    <Container>
      <div className="mt-4 mb-1">
        <Navigation isLoading={!isLoaded} />
      </div>
      <div className="border-2">
        <Personal />
      </div>
      <div className="mt-1 flex flex-col gap-2 lg:grid lg:grid-cols-2 print:grid print:grid-cols-2">
        <div className="border-2">
          <Stats />
        </div>
        <div className="border-2">
          <Psychology />
        </div>
      </div>
      <div className="mt-1 mb-1 border-2">
        <Skills />
      </div>
      <div className="mt-1 mb-1 border-2">
        <Injuries />
      </div>
      <div className="mt-1 mb-1 border-2">
        <Equipment />
      </div>
      <div className="mt-1 mb-1 border-2">
        <Remarks />
      </div>
      <div className="mb-4 border-2">
        <Signature />
      </div>
      <div className="mb-4">
        <Footer />
      </div>
      <div className="mb-16">
        <Disclaimer />
      </div>
    </Container>
  );
}
