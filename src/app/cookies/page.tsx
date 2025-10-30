import { Container } from "@/components/container";
import Head from "@/components/home/head";
import Policy from "./content";

import "../privacy/policy.css";
import Footer from "@/components/home/footer";

export default async function Page() {
  return (
    <Container>
      <div className="flex w-full items-center justify-center">
        <div className="max-w-[350px] text-center">
          <Head />
        </div>
      </div>
      <div className="mb-8 policy">
        <Policy />
      </div>
      <div className="w-full items-center justify-center text-center text-xs text-muted-foreground mb-16">
        <Footer />
      </div>
    </Container>
  );
}
