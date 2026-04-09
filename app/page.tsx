"use client"

import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import dynamic from 'next/dynamic';

const WhyChooseUs = dynamic(() => import("@/components/why-choose-us"));
const AboutSection = dynamic(() => import("@/components/about-section"));
const ServicesDetailed = dynamic(() => import("@/components/services-detailed"));
const PricingSection = dynamic(() => import("@/components/pricing-section"));
const ContactSection = dynamic(() => import("@/components/contact-section"));


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
        <ServicesDetailed />
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
