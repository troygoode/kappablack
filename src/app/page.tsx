import Equipment from "@/components/agent/equipment";
import Footer from "@/components/agent/footer";
import Injuries from "@/components/agent/injuries";
import Personal from "@/components/agent/personal";
import Psychology from "@/components/agent/psychology";
import Remarks from "@/components/agent/remarks";
import Skills from "@/components/agent/skills";
import Stats from "@/components/agent/stats";
import { Container } from "@/components/container";
import Disclaimer from "@/components/disclaimer/disclaimer";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <Container>
      <div className="mt-4 mb-1">
        <Navigation />
      </div>
      <div>
        <Personal />
      </div>
      <div className="mt-4 mb-1">
        <Stats />
      </div>
      <div className="mt-4 mb-1">
        <Psychology />
      </div>
      <div className="mt-4 mb-1">
        <Skills />
      </div>
      <div className="mt-4 mb-1">
        <Injuries />
      </div>
      <div className="mt-4 mb-1">
        <Equipment />
      </div>
      <div className="mt-4 mb-1">
        <Remarks />
      </div>
      <div className="mb-8">
        <Footer />
      </div>
      <div>
        <Disclaimer />
      </div>
    </Container>
  );
}
