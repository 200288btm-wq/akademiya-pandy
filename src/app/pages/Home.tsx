import { useEffect, useRef } from "react";
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

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="section-animate">
      {children}
    </div>
  );
}

export function Home() {
  return (
    <Layout>
      <HeroSection />
      <AnimatedSection><ProgramsSection /></AnimatedSection>
      <AnimatedSection><AboutSection /></AnimatedSection>
      <AnimatedSection><WhyUsSection /></AnimatedSection>
      <AnimatedSection><HowItWorksSection /></AnimatedSection>
      <AnimatedSection><GallerySection /></AnimatedSection>
      <AnimatedSection><ReviewsSection /></AnimatedSection>
      <AnimatedSection><FAQSection /></AnimatedSection>
      <AnimatedSection><CTASection /></AnimatedSection>
    </Layout>
  );
}
