
"use client"

import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import dynamic from 'next/dynamic';
import ServicesOverview from "@/components/services-overview";

const WhyChooseUs = dynamic(() => import("@/components/why-choose-us"));
const AboutSection = dynamic(() => import("@/components/about-section"));
const PricingSection = dynamic(() => import("@/components/pricing-section"));
const ContactSection = dynamic(() => import("@/components/contact-section"));

// SEO Tip: Add a descriptive title for your homepage.
// This is the most important piece of text for SEO.
// Example: <title>Byalance | Expert Accounting and Financial Services</title>

// SEO Tip: Add a meta description that summarizes your page content.
// This description is shown in search engine results.
// Example: <meta name="description" content="Byalance offers expert accounting, bookkeeping, GST, and ITR services for businesses. Contact us for reliable financial solutions." />

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section id="home">
        <HeroSection />
        <WhyChooseUs />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="services">
        <ServicesOverview />
      </section>

      <section id="pricing">
        <PricingSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
