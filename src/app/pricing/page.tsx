"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';

export default function LandingPage() {
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
        {
          name: "Home",
          id: "/",
        },
        {
          name: "How it works",
          id: "/how-it-works",
        },
        {
          name: "Pricing",
          id: "/pricing",
        },
        {
          name: "Contact",
          id: "/contact",
        },
      ]}
      brandName="Hostloop"
      button={{
        text: "Book a call",
        href: "/contact",
      }}
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Choose your plan"
      description="Scale your business with professional tools."
      plans={[
        {
          id: "basic",
          badge: "Basic",
          price: "£99",
          subtitle: "Per month",
          buttons: [
            {
              text: "Buy Now",
              href: "/contact",
            },
          ],
          features: [
            "Auto SMS",
            "Mobile Integration",
          ],
        },
        {
          id: "pro",
          badge: "Pro",
          price: "£149",
          subtitle: "Per month",
          buttons: [
            {
              text: "Buy Now",
              href: "/contact",
            },
          ],
          features: [
            "Everything in Basic",
            "Advanced Analytics",
            "Priority Support",
          ],
        },
      ]}
    />
  </div>

  <div id="metric" data-section="metric">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="High return on investment"
      description="Calculate how much you save."
      metrics={[
        {
          id: "m3",
          value: "10x",
          title: "Return",
          items: [
            "Revenue growth",
            "Customer retention",
          ],
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DB7JM0hdv81e2JYXMumueGC1ZN/uploaded-1777806386527-2ggsth8w.png"
      logoText="Hostloop"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#",
            },
            {
              label: "Contact",
              href: "/contact",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2026 Hostloop"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
