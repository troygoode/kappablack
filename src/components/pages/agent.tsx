"use client";

import type { IAgent } from "@/types/agent";

import { useEffect } from "react";

import { Toaster } from "@/components/ui/sonner";
import Equipment from "@/components/agent/equipment/equipment";
import Footer from "@/components/agent/footer";
import SiteFooter from "@/components/home/footer";
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
import { useAgentStore } from "@/components/agent/stores/agent";

export default function Agent({
  agent,
  pk,
  sk,
  isEditable,
}: {
  agent: IAgent | undefined;
  pk: string | undefined;
  sk: string;
  isEditable: boolean;
}) {
  const reset = useAgentStore((state) => state.reset);
  const isLoaded = useAgentStore((state) => state.isLoaded);
  useEffect(() => {
    reset({
      isLoaded: true,
      mode: isEditable ? "edit" : "view",
      isEditable,
      showDeleteDialog: false,
      showExportDialog: false,
      showShareDialog: false,
      agent: {
        bonds: [],
        skills: [],
        weapons: [],
        stunWeapons: [],
        specialTraining: [],
        ...agent,
      },
      pk,
      sk,
    });
  }, [agent]);

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
      <div className="w-full items-center justify-center text-center text-xs text-muted-foreground mb-16">
        <SiteFooter />
      </div>
      <Toaster expand richColors />
    </Container>
  );
}
