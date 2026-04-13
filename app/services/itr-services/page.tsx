
import type { Metadata } from 'next';
import ITRServices from "@/components/services/itr-services";

// SEO Tip: This is the page title, which is very important for SEO. 
// Make it descriptive and include your main keywords. 
// Example: "Expert ITR Filing Services for Individuals & Businesses | Byalance"
export const metadata: Metadata = {
  title: "ITR Filing Services | Byalance",
  // SEO Tip: The description is also crucial for SEO. It should be a concise summary of the page content and include relevant keywords.
  // Example: "Byalance provides hassle-free ITR filing services for individuals and businesses. Our experts ensure accurate and timely filing to keep you tax-compliant."
  description: "Stay tax-compliant with our expert ITR filing services. We handle everything from applicability checks to notice and penalty resolution.",
};

export default function ITRServicesPage() {
  return <ITRServices />;
}
