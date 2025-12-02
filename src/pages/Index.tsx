import { ParticlesBackground } from "@/components/ParticlesBackground";
import { Navbar } from "@/components/Navbar";
import { NewHero } from "@/components/NewHero";
import { ProjectExamples } from "@/components/ProjectExamples";
import { TargetAudience } from "@/components/TargetAudience";
import { BenefitsList } from "@/components/BenefitsList";
import { BonusSection } from "@/components/BonusSection";
import { SocialProof } from "@/components/SocialProof";
import { Guarantee } from "@/components/Guarantee";
import { NewPricing } from "@/components/NewPricing";

import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <ParticlesBackground />
      <NewHero />
      <ProjectExamples />
      <TargetAudience />
      <BenefitsList />
      <BonusSection />
      <SocialProof />
      <NewPricing />
      <Guarantee />
      <FAQ />
      <CTA />
    </div>
  );
};

export default Index;
