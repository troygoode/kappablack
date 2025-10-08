import Equipment from "@/components/agent/equipment";
import Injuries from "@/components/agent/injuries";
import Personal from "@/components/agent/personal";
import Psychology from "@/components/agent/psychology";
import Remarks from "@/components/agent/remarks";
import Skills from "@/components/agent/skills";
import Stats from "@/components/agent/stats";
import { Container } from "@/components/container";
import Disclaimer from "@/components/disclaimer";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <Container>
      <Navigation />
      <Personal />
      <Stats />
      <Psychology />
      <Skills />
      <Injuries />
      <Equipment />
      <Remarks />
      <Disclaimer />
    </Container>
  );
}
