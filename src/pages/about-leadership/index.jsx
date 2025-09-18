import React from "react";
import Header from "../../components/ui/Header";
import HeroSection from "./components/HeroSection";
import CompanyStory from "./components/CompanyStory";
import LeadershipTeam from "./components/LeadershipTeam";
import CoreValues from "./components/CoreValues";
import TeamCulture from "./components/TeamCulture";
import Partnerships from "./components/Partnerships";
import Awards from "./components/Awards";

const AboutLeadership = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16 lg:pt-20">
        <HeroSection />
        <CompanyStory />
        <LeadershipTeam />
        <CoreValues />
        <TeamCulture />
        <Partnerships />
        <Awards />
      </main>
    </div>
  );
};

export default AboutLeadership;
