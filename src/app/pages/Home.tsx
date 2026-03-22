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

function PaperSection({ children, index }: { children: React.ReactNode; index: number }) {
  return (
    <div
      className="paper-section"
      style={{ "--section-z": index + 2 } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

export function Home() {
  const sections = [
    <ProgramsSection />,
    <AboutSection />,
    <WhyUsSection />,
    <HowItWorksSection />,
    <GallerySection />,
    <ReviewsSection />,
    <FAQSection />,
    <CTASection />,
  ];

  return (
    <Layout>
      <HeroSection />
      {sections.map((section, i) => (
        <PaperSection key={i} index={i}>
          {section}
        </PaperSection>
      ))}
    </Layout>
  );
}
