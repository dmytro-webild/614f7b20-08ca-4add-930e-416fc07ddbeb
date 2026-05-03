"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import { Phone, Zap, MessageSquare, TrendingUp } from "lucide-react";

export default function HowItWorksPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="elastic-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="medium"
        sizing="mediumSizeLargeTitles"
        background="grid"
        cardStyle="gradient-radial"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        { name: "Home", id: "/" },
        { name: "How it works", id: "/how-it-works" },
        { name: "Pricing", id: "/pricing" },
        { name: "Contact", id: "/contact" },
      ]}
      brandName="Hostloop"
      button={{ text: "Book a call", href: "/contact" }}
    />
  </div>

  <div id="feature" data-section="feature">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={false}
      title="How it works"
      description="The simple flow of your new professional automated communication."
      features={[
        { title: "Customer calls", description: "They see your local business number.", buttonIcon: Phone, imageSrc: "http://img.b2bpic.net/free-photo/hand-holding-smartphone-home_23-2150639942.jpg" },
        { title: "System detects", description: "The call goes unanswered after 3 rings.", buttonIcon: Zap, imageSrc: "http://img.b2bpic.net/free-photo/coronavirus-outbreak-update-phone-application_53876-167269.jpg" },
        { title: "Automatic text", description: "A polite, personalized text is sent instantly.", buttonIcon: MessageSquare, imageSrc: "http://img.b2bpic.net/free-photo/smartphone-child-hands-with-incoming-sister-call-screen_169016-43658.jpg" },
        { title: "You follow up", description: "You convert the warm lead when you're free.", buttonIcon: TrendingUp, imageSrc: "http://img.b2bpic.net/free-photo/top-view-hands-holding-smartphone_23-2150171448.jpg" },
      ]}
    />
  </div>

  <div id="metric" data-section="metric">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="The Impact"
      description="Measurable results for your business."
      metrics={[
        { id: "m1", value: "40%", title: "More leads", items: ["Recovered leads", "Faster conversion"] },
        { id: "m2", value: "24/7", title: "Availability", items: ["Always on", "Never silent"] },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DB7JM0hdv81e2JYXMumueGC1ZN/uploaded-1777806386527-2ggsth8w.png"
      logoText="Hostloop"
      columns={[
        { title: "Company", items: [{ label: "About", href: "#" }, { label: "Contact", href: "/contact" }] },
        { title: "Legal", items: [{ label: "Privacy Policy", href: "#" }, { label: "Terms of Service", href: "#" }] },
      ]}
      copyrightText="© 2026 Hostloop"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}