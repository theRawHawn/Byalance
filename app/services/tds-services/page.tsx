
import type { Metadata } from 'next';
import TDSServices from "@/components/services/tds-services";

// SEO Tip: This is the page title, which is very important for SEO. 
// Make it descriptive and include your main keywords. 
// Example: "Expert TDS Management & Filing Services | Byalance"
export const metadata: Metadata = {
  title: "TDS Services | Byalance",
  // SEO Tip: The description is also crucial for SEO. It should be a concise summary of the page content and include relevant keywords.
  // Example: "Byalance offers comprehensive TDS management and filing services for businesses. We handle everything from TAN applications to advance tax management, ensuring you stay compliant."
  description: "Comprehensive TDS management and filing services for your business. We handle TAN applications, form filing, and advance tax management.",
};

export default function TDSServicesPage() {
  return <TDSServices />;
}
