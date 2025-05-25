import { CtaSection } from "@/components/homePage/cta-section";
import { FeaturesSection } from "@/components/homePage/features-section";
import { Footer } from "@/components/homePage/footer";
import { HeroSection } from "@/components/homePage/hero-section";
import { LandingHeader } from "@/components/homePage/landing-header";
import { StatsSection } from "@/components/homePage/stats-section";

export default function Home() {
  return (<div className="min-h-screen">
    <LandingHeader />
    <main>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <CtaSection />
    </main>
    <Footer />
  </div>);
}
