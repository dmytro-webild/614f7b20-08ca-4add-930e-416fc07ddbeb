"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import TeamCardTen from '@/components/sections/team/TeamCardTen';

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

  <div id="feature" data-section="feature">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={false}
      title="Contact our team"
      description="We are here to support your business growth."
      features={[
        {
          title: "Sales Call",
          description: "Book a quick demo.",
          buttonIcon: "Calendar",
          imageSrc: "http://img.b2bpic.net/free-photo/engineers-overseeing-server-room-with-mockup-device-reading-documentation_482257-121020.jpg",
        },
        {
          title: "Email Support",
          description: "Reach out to us anytime.",
          buttonIcon: "Mail",
          imageSrc: "http://img.b2bpic.net/free-photo/register-enquiry-online-web-page-concept_53876-132769.jpg",
        },
        {
          title: "Live Help",
          description: "Chat with our team.",
          buttonIcon: "Headphones",
          imageSrc: "http://img.b2bpic.net/free-photo/man-working-from-home-with-automation-lighting-system-using-voice-controlled-smartphone-turning-o_482257-2748.jpg",
        },
        {
          title: "Support Desk",
          description: "Check our docs.",
          buttonIcon: "Book",
          imageSrc: "http://img.b2bpic.net/free-photo/software-developers-data-center-workspace-use-laptop-calibrate-energy-usage_482257-117870.jpg",
        },
      ]}
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardTen
      useInvertedBackground={false}
      title="Our dedicated support"
      tag="Meet the team"
      memberVariant="card"
      membersAnimation="slide-up"
      members={[
        {
          id: "m1",
          name: "Hostloop Team",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-customizing-avatar-concept_23-2150729044.jpg",
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
