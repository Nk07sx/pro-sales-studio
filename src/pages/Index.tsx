import { ParticlesBackground } from "@/components/ParticlesBackground";
import { OfferBanner } from "@/components/OfferBanner";
import { Navbar } from "@/components/Navbar";
import { NewHero } from "@/components/NewHero";
import { ProjectExamples } from "@/components/ProjectExamples";
import { TargetAudience } from "@/components/TargetAudience";
import { BenefitsList } from "@/components/BenefitsList";
import { BonusSection } from "@/components/BonusSection";
import { SocialProof } from "@/components/SocialProof";
import { Guarantee } from "@/components/Guarantee";
import { DiscountCTA } from "@/components/DiscountCTA";
import { NewPricing } from "@/components/NewPricing";

import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <OfferBanner />
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
      <DiscountCTA />
      <FAQ />
      <CTA />
    </div>
  );
};

export default Index;
