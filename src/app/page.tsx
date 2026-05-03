"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Phone } from "lucide-react";

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
        { name: "Home", id: "/" },
        { name: "How it works", id: "/how-it-works" },
        { name: "Pricing", id: "/pricing" },
        { name: "Contact", id: "/contact" },
      ]}
      brandName="Hostloop"
      button={{
        text: "Book a call",        href: "/contact"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{ variant: "rotated-rays-static-grid" }}
      title="Never lose a customer to a missed call again."
      description="When you can't answer, Hostloop texts your missed callers automatically — so you recover jobs you'd otherwise lose. Set up in 20 minutes. £99/month, no contracts."
      tag="Recover missed business"
      buttons={[
        { text: "Book a 15-min call", href: "/contact" },
        { text: "See how it works", href: "/how-it-works" },
      ]}
      mediaItems={[
        { imageSrc: "http://img.b2bpic.net/free-photo/smartphone-with-opened-ai-chat-it_1268-21623.jpg", imageAlt: "Hostloop SMS flow 1" },
        { imageSrc: "http://img.b2bpic.net/free-photo/modern-smartphone-with-live-abstract-wallpaper-coming-out-screen_23-2151033614.jpg", imageAlt: "Hostloop SMS flow 2" }
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="Trusted by over 500+ UK tradespeople"
      tagIcon={Phone}
    />
  </div>

  <div id="features-steps" data-section="features-steps">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        { title: "Get a new number", description: "We provide a local business number for your ads, Google Profile, and website.", imageSrc: "http://img.b2bpic.net/free-photo/cute-text-messages-mobile-phone-screen-media-mix_53876-98453.jpg", imageAlt: "Step 1" },
        { title: "Calls ring through", description: "It rings your mobile exactly like a normal call. You lose no functionality.", imageSrc: "http://img.b2bpic.net/free-photo/man-controlling-smart-lamp-with-his-phone_23-2149036884.jpg", imageAlt: "Step 2" },
        { title: "Automatic text-back", description: "If you can't answer, we text the caller within 30 seconds asking how to help.", imageSrc: "http://img.b2bpic.net/free-photo/computers-data-center-running-server-rigs-diagnostic-tests_482257-118495.jpg", imageAlt: "Step 3" },
      ]}
      title="3 Steps to more jobs"
      description="It takes 20 minutes to set up and works silently in the background."
    />
  </div>

  <div id="socialProof" data-section="socialProof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      title="Trusted by local heroes"
      description="Helping thousands of tradespeople across the UK manage their communication."
      names={["PlumbFix", "BrightSpark", "LockGuard", "RoofMasters", "GasPro", "BuildRight"]}
      tag="Proven reliability"
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="Simple, transparent pricing"
      description="No hidden fees, no long-term contracts. Just results."
      plans={[
        {
          id: "standard",          badge: "Most Popular",          price: "£99",          subtitle: "Monthly per business",          buttons: [{ text: "Get started", href: "/contact" }],
          features: ["Local Business Number", "Auto Text-back", "Unlimited Missed Call Tracking", "Mobile Notifications"],
        },
      ]}
    />
  </div>

  <div id="testimonial" data-section="testimonial">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      title="What our users say"
      description="Don't take our word for it — here's how we've helped others grow."
      showRating={true}
      testimonials={[
        { id: "t1", name: "John D.", handle: "@johnplumb", testimonial: "I never miss a quote anymore. Game changer.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/close-up-child-hands-holding-phone-with-dads-incoming-call-display_169016-43119.jpg" },
        { id: "t2", name: "Sarah W.", handle: "@sarahspark", testimonial: "My customers actually like the text-back feature.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/bucharest-romania-july-30th-2024-boss-uses-ai-virtual-assistant_482257-123249.jpg" },
        { id: "t3", name: "Dave M.", handle: "@davegas", testimonial: "Easy setup. Recovered my first job within an hour.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/woman-sitting-house-with-automation-light-system-holding-smartphone-turning-light-using-voice-activated-application_482257-2271.jpg" },
        { id: "t4", name: "Elena R.", handle: "@elenaelectric", testimonial: "Professional, fast, and simple. Love it.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/person-looking-smartphone-with-smart-home-lights-app-sitting-kitchen-house-with-automation-lighting-system-turning-bulbs-with-voice-command_482257-2256.jpg" },
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