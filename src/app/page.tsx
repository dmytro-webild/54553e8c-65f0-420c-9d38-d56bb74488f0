"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentyNine from '@/components/sections/feature/featureCardTwentyNine/FeatureCardTwentyNine';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Instagram, Linkedin, Twitter } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-stagger"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="large"
        background="none"
        cardStyle="inset"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "About",
          id: "about",
        },
        {
          name: "Features",
          id: "features",
        },
        {
          name: "Pricing",
          id: "pricing",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
      ]}
      brandName="Aura Social"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "gradient-bars",
      }}
      title="Defining Premium Digital Authority"
      description="We architect high-impact social media strategies for brands that demand nothing less than total market leadership."
      buttons={[
        {
          text: "Inquire Now",
          href: "#contact",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/stock-exchange-trading-forex-finance-graphic-concept_53876-124399.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/digital-tablet-online-learning_53876-97299.jpg",
          alt: "Digital tablet for online learning",
        },
        {
          src: "http://img.b2bpic.net/free-photo/coffee-relaxation-beverage-planning-data-digital-concept_53876-63189.jpg",
          alt: "Coffee Relaxation Beverage Planning Data Digital Concept",
        },
        {
          src: "http://img.b2bpic.net/free-photo/people-hangout-together-coffee-shop_53876-165280.jpg",
          alt: "People hangout together at coffee shop",
        },
        {
          src: "http://img.b2bpic.net/free-photo/old-couturier-checking-fashion-sketches-atelier-working-modern-designs-with-laptop-tablet-experienced-designer-searching-handmade-models-online-needlework-handheld-shot_482257-67826.jpg",
          alt: "Old couturier checking fashion sketches in atelier",
        },
        {
          src: "http://img.b2bpic.net/free-photo/laptop-near-boxes-social-application-icons-table_23-2147841352.jpg",
          alt: "Laptop near boxes of social application icons on table",
        },
      ]}
      avatarText="Trusted by 500+ global brands"
      marqueeItems={[
        {
          type: "text",
          text: "High Growth Strategy",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/overhead-view-skillful-people-using-digital-tablet-workplace_23-2147847545.jpg",
          alt: "Overhead view of skillful people using digital tablet at workplace",
        },
        {
          type: "text",
          text: "Premium Asset Creation",
        },
        {
          type: "text",
          text: "Data Driven ROI",
        },
        {
          type: "text",
          text: "Market Dominance",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="A Legacy of Digital Excellence"
      description="Founded by industry pioneers, we leverage a data-first approach combined with refined aesthetic sensibility to scale global brands."
      metrics={[
        {
          value: "500+",
          title: "Campaigns Launched",
        },
        {
          value: "$100M+",
          title: "Ad Spend Managed",
        },
        {
          value: "98%",
          title: "Client Retention",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/workplace-with-laptop_23-2147651756.jpg"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyNine
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      features={[
        {
          title: "Social Strategy",
          description: "Holistic blueprints defining your brand narrative.",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-arrangement-with-items_23-2149019266.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/drawings-social-media-s-concepts_1134-72.jpg",
          buttonText: "View Strategy",
        },
        {
          title: "Performance Ad Management",
          description: "Precision-targeted campaigns that drive measurable conversion.",
          imageSrc: "http://img.b2bpic.net/free-photo/content-marketing-social-media-advertising-commercial-branding-concept_53876-15878.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/plan-planning-strategy-communication-icon_53876-21214.jpg",
          buttonText: "Explore Ads",
        },
        {
          title: "Creative Asset Production",
          description: "Cinematic visual design crafted for high engagement.",
          imageSrc: "http://img.b2bpic.net/free-photo/successful-businessman-looking-through-papers-sitting-workplace-with-laptop_176420-3695.jpg",
          titleImageSrc: "http://img.b2bpic.net/free-photo/flat-lay-arrangement-with-tablet-paint_23-2148769814.jpg",
          buttonText: "View Creative",
        },
      ]}
      title="Sophisticated Service Architecture"
      description="Premium service streams designed to elevate your brand presence through every digital touchpoint."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Nexus Brand",
        "GlobalTech Solutions",
        "LuxCorp",
        "Summit Design",
        "Ventura Capital",
        "Arch Studio",
        "Boutique Group",
      ]}
      title="Trust by Industry Leaders"
      description="The agency of choice for brands scaling at pace."
    />
  </div>

  <div id="product" data-section="product">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          brand: "Aura",
          name: "Growth Strategy Guide",
          price: "$499",
          rating: 5,
          reviewCount: "120",
          imageSrc: "http://img.b2bpic.net/free-photo/hair-shampoo_187299-45835.jpg",
        },
        {
          id: "p2",
          brand: "Aura",
          name: "Content Roadmap Template",
          price: "$299",
          rating: 5,
          reviewCount: "85",
          imageSrc: "http://img.b2bpic.net/free-photo/representation-user-experience-interface-design_23-2150169842.jpg",
        },
        {
          id: "p3",
          brand: "Aura",
          name: "Influencer Outreach Suite",
          price: "$799",
          rating: 4,
          reviewCount: "42",
          imageSrc: "http://img.b2bpic.net/free-vector/business-magazine-template_23-2147548281.jpg",
        },
        {
          id: "p4",
          brand: "Aura",
          name: "Content Subscription Plan",
          price: "$1,200/mo",
          rating: 5,
          reviewCount: "150",
          imageSrc: "http://img.b2bpic.net/free-photo/bullet-journals-pen-arrangement_23-2149740081.jpg",
        },
        {
          id: "p5",
          brand: "Aura",
          name: "Performance Audit Pack",
          price: "$399",
          rating: 5,
          reviewCount: "90",
          imageSrc: "http://img.b2bpic.net/free-photo/tablet-with-blank-screen-business-chart-copy-space-business-concept-v_1150-2248.jpg",
        },
        {
          id: "p6",
          brand: "Aura",
          name: "Brand Identity Kit",
          price: "$999",
          rating: 5,
          reviewCount: "67",
          imageSrc: "http://img.b2bpic.net/free-photo/stationery-concept_23-2147800630.jpg",
        },
      ]}
      title="Strategic Digital Toolkits"
      description="Premium resources for in-house teams and ambitious founders."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardNine
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      plans={[
        {
          id: "basic",
          title: "Foundation",
          price: "$5,000",
          period: "/mo",
          features: [
            "Content Strategy",
            "Community Management",
            "Weekly Reporting",
          ],
          button: {
            text: "Get Started",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/woman-sitting-bed-with-laptop-phone_23-2148751554.jpg",
        },
        {
          id: "growth",
          title: "Growth",
          price: "$12,000",
          period: "/mo",
          features: [
            "Everything in Foundation",
            "Paid Ad Management",
            "Creative Production",
            "Influencer Strategy",
          ],
          button: {
            text: "Get Started",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/modern-office-space-with-futuristic-decor-furniture_23-2151797633.jpg",
        },
        {
          id: "scale",
          title: "Dominance",
          price: "$25,000+",
          period: "/mo",
          features: [
            "Everything in Growth",
            "Full 360 Campaign Management",
            "Priority Support",
            "Dedicated Strategy Lead",
          ],
          button: {
            text: "Inquire Custom",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-fashion-designer-s-office_23-2151272900.jpg",
        },
      ]}
      title="Premium Agency Retainers"
      description="Choose the level of influence your brand requires."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={false}
      title="Quantified Success"
      tag="Performance"
      metrics={[
        {
          id: "m1",
          value: "150M+",
          description: "Global Impressions",
        },
        {
          id: "m2",
          value: "3x",
          description: "Avg Conversion Lift",
        },
        {
          id: "m3",
          value: "40%",
          description: "Cost Reduction",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Julian Thorne",
          role: "CEO",
          company: "Nexus Brand",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-blonde-businesswoman-formal-dressed-isolated-dark-textured-background_613910-5399.jpg",
        },
        {
          id: "2",
          name: "Elena Vance",
          role: "Marketing Director",
          company: "LuxCorp",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/paralysed-disabled-invalid-handicapped-work-colleague-looking-front-tired-upset-caused-his-disabilities-working-economic-business-office_482257-2084.jpg",
        },
        {
          id: "3",
          name: "Marcus Chen",
          role: "Founder",
          company: "Summit",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-handsome-bearded-male-wearing-stylish-sui_613910-12110.jpg",
        },
        {
          id: "4",
          name: "Sarah Miller",
          role: "COO",
          company: "GlobalTech",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-festive-plump-male-eyeglasses-bow-tie-dark-grey-background_613910-13747.jpg",
        },
        {
          id: "5",
          name: "David Rossi",
          role: "CMO",
          company: "Ventura",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-businessman-with-tie_1098-2867.jpg",
        },
      ]}
      title="Client Success Stories"
      description="Empowering world-class leaders and brands."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "How do you measure success?",
          content: "We provide monthly reporting centered around ROI-based metrics such as CPA, ROAS, and conversion value.",
        },
        {
          id: "f2",
          title: "What is the onboarding process?",
          content: "Our 2-week immersion includes audits, strategy deep-dives, and creative alignment.",
        },
        {
          id: "f3",
          title: "Do you work with startups?",
          content: "We partner with high-growth startups ready to scale their digital infrastructure.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-bookshelf-water-dispenser-business-office-empty-desk-with-decorations-watercooler-startup-space-shelves-with-minimal-decor-decorative-plants-refreshment_482257-27791.jpg"
      title="Frequently Asked Questions"
      description="Clarifying our process and partnership model."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterCard
      logoText="Aura Social"
      copyrightText="© 2025 Aura Social Agency"
      socialLinks={[
        {
          icon: Instagram,
          href: "#",
          ariaLabel: "Instagram",
        },
        {
          icon: Twitter,
          href: "#",
          ariaLabel: "Twitter",
        },
        {
          icon: Linkedin,
          href: "#",
          ariaLabel: "Linkedin",
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
