import { Layout } from "../components/Layout";
import { HeroSection } from "../components/home/HeroSection";
import { ProgramsSection } from "../components/home/ProgramsSection";
import { AboutSection } from "../components/home/AboutSection";
import { WhyUsSection } from "../components/home/WhyUsSection";
import { HowItWorksSection } from "../components/home/HowItWorksSection";
import { GallerySection } from "../components/home/GallerySection";
import { ReviewsSection } from "../components/home/ReviewsSection";
import { FAQSection } from "../components/home/FAQSection";
import { CTASection } from "../components/home/CTASection";

export function Home() {
  return (
    <Layout>
      <HeroSection />
      <ProgramsSection />
      <AboutSection />
      <WhyUsSection />
      <HowItWorksSection />
      <GallerySection />
      <ReviewsSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
}
