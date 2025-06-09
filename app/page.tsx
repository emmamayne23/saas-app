import React from "react";
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import Cta from "@/components/CTA";
import { recentSessions } from "@/constants";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Porpular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name="Neura the brainy explorer"
          topic="Neural work of the brain"
          subject={"science"}
          duration={45}
          color={"#ffda6e"}
        />
        <CompanionCard
          id="456"
          name="Countsy the number wizard"
          topic="Diratives & integrals"
          subject={"Maths"}
          duration={30}
          color={"#e5d0ff"}
        />
        <CompanionCard
          id="789"
          name="Verba the vocabulary builder"
          topic="Language"
          subject={"English literature"}
          duration={30}
          color={"#BDE7FF"}
        />
      </section>

      <section className="home-section">
        <CompanionsList
          title="Recently completed sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <Cta />
      </section>
    </main>
  );
};

export default Page;
